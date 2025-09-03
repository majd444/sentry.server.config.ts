import { httpAction } from "./_generated/server";
import { httpRouter } from "convex/server";
import { Id } from "./_generated/dataModel";
import { api } from "./_generated/api";

// Types for the widget API
type AgentResponse = {
  id: Id<"agents">;
  name: string;
  welcomeMessage: string;
  systemPrompt: string;
  temperature: number;
  headerColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  profileImage?: string;
};

type SessionResponse = {
  sessionId: Id<"chatSessions">;
  agent: AgentResponse;
};

type ChatResponse = {
  reply: string;
  sessionId: Id<"chatSessions">;
};

// Utility function to handle CORS headers
function corsResponse(json: unknown, status = 200) {
  return new Response(JSON.stringify(json), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    },
  });
}

// Handle CORS preflight requests
const options = httpAction(async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    },
  });
});

// AI Response Generation (OpenRouter)
async function generateAIResponse(params: {
  messages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>;
  temperature: number;
  model: string;
}): Promise<string> {
  const { messages, temperature, model } = params;
  const lastMessage = messages[messages.length - 1];
  if (!lastMessage || lastMessage.role !== 'user') {
    throw new Error('Last message must be from user');
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    // Safe fallback if no key is configured
    return `AI (stub): ${lastMessage.content}`;
  }

  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        // Optional best practice headers for OpenRouter analytics
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Vaste Chatbot',
      },
      body: JSON.stringify({
        model: model || 'openai/gpt-4o-mini',
        temperature: typeof temperature === 'number' ? temperature : 0.7,
        messages: messages.map(m => ({ role: m.role, content: m.content })),
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`OpenRouter error ${res.status}: ${text}`);
    }

    const data = await res.json() as any;
    const content: string | undefined = data?.choices?.[0]?.message?.content;
    if (!content) throw new Error('No content in completion');
    return content;
  } catch (error) {
    console.error('OpenRouter request failed:', error);
    return 'Sorry, I had trouble generating a response.';
  }
}

// Create a new widget session
export const createWidgetSession = httpAction(async (ctx, req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return corsResponse({});
  }

  try {
    const body = await req.json();
    let rawAgentId = body?.agentId as string | undefined;
    // Basic Convex Id format check: 32 lowercase alphanumerics
    const isValidConvexId = (s: string) => /^[a-z0-9]{32}$/.test(s);

    if (!rawAgentId || typeof rawAgentId !== 'string') {
      return corsResponse({ error: 'agentId is required' }, 400);
    }

    // If client accidentally sends a JSON-stringified string (wrapped in quotes), strip them
    if (rawAgentId.startsWith('"') && rawAgentId.endsWith('"')) {
      rawAgentId = rawAgentId.slice(1, -1);
    }

    if (!isValidConvexId(rawAgentId)) {
      return corsResponse({ error: 'Invalid agentId format' }, 400);
    }

    const agentId = rawAgentId as unknown as Id<"agents">;
    
    // Fetch agent details from the database (public)
    const agent = await ctx.runQuery(api.agents.getPublic, { id: agentId });
    
    if (!agent) {
      return corsResponse({ error: 'Agent not found' }, 404);
    }

    // Create a new session
    const sessionId = await ctx.runMutation(api.sessions.createSession, {
      agentId,
      userId: 'widget-user', // Can be a guest ID for anonymous users
      metadata: {
        userAgent: req.headers.get('user-agent') || 'unknown',
        ip: req.headers.get('x-forwarded-for') || 'unknown',
      },
    });

    // Prepare the response with agent theming
    const response: SessionResponse = {
      sessionId,
      agent: {
        id: agent._id,
        name: agent.name,
        welcomeMessage: agent.welcomeMessage,
        systemPrompt: agent.systemPrompt,
        temperature: agent.temperature,
        headerColor: agent.headerColor,
        accentColor: agent.accentColor,
        backgroundColor: agent.backgroundColor,
        profileImage: agent.profileImage,
      },
    };

    return corsResponse(response);
  } catch (error) {
    console.error('Error creating widget session:', error);
    return corsResponse({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500);
  }
});

// Handle widget chat messages
export const widgetChat = httpAction(async (ctx, req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return corsResponse({});
  }

  try {
    const body = await req.json();
    const { sessionId, agentId, message, history = [] } = body as {
      sessionId: Id<"chatSessions">;
      agentId: Id<"agents">;
      message: string;
      history?: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>;
    };

    if (!sessionId || !agentId || !message) {
      return corsResponse({ error: 'sessionId, agentId, and message are required' }, 400);
    }

    // Verify the session exists and belongs to this agent
    const session = await ctx.runQuery(api.sessions.getSession, { id: sessionId });
    if (!session) {
      return corsResponse({ error: 'Session not found' }, 404);
    }

    if (session.agentId !== agentId) {
      return corsResponse({ error: 'Session does not belong to this agent' }, 403);
    }

    // Get the agent (public)
    const agent = await ctx.runQuery(api.agents.getPublic, { id: agentId });
    if (!agent) {
      return corsResponse({ error: 'Agent not found' }, 404);
    }

    // Fetch agent knowledge base entries (public)
    const knowledge = await ctx.runQuery(api.fineTuning.getPublicAgentKnowledge, {
      agentId: agentId as unknown as string,
      limit: 20,
    });
    const knowledgeText = (knowledge || [])
      .map((k: { input: unknown; output: unknown }) => {
        const input = typeof k.input === 'string' ? k.input : '';
        const output = typeof k.output === 'string' ? k.output : '';
        return `- ${input}: ${output}`;
      })
      .join('\n');
    const knowledgeSection = knowledgeText
      ? `\n\nKnowledge Base (most recent first):\n${knowledgeText}`
      : '';

    // Add the user message to the database
    await ctx.runMutation(api.sessions.createMessage, {
      sessionId,
      role: 'user',
      content: message,
      metadata: {}
    });

    // Prepare messages for AI
    const messages = [
      { role: 'system' as const, content: `${agent.systemPrompt}${knowledgeSection}` },
      ...history,
      { role: 'user' as const, content: message }
    ];

    // Generate AI response
    const aiResponse = await generateAIResponse({
      messages,
      temperature: agent.temperature || 0.7,
      model: 'gpt-3.5-turbo',
    });

    // Save assistant's response
    await ctx.runMutation(api.sessions.createMessage, {
      sessionId,
      role: 'assistant',
      content: aiResponse,
      metadata: {}
    });

    // Update session last active
    await ctx.runMutation(api.sessions.updateSessionLastActive, { id: sessionId });

    // Return the response
    const response: ChatResponse = {
      reply: aiResponse,
      sessionId,
    };

    return corsResponse(response);
  } catch (error) {
    console.error('Error processing chat message:', error);
    return corsResponse({ 
      error: 'Failed to process chat message',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500);
  }
});

// Build HTTP router
const http = httpRouter();
const health = httpAction(async () => corsResponse({ status: "ok" }));

http.route({ path: "/api/chat/widget/session", method: "POST", handler: createWidgetSession });
http.route({ path: "/api/chat/widget/session", method: "OPTIONS", handler: options });
http.route({ path: "/chat/widget/session", method: "POST", handler: createWidgetSession });
http.route({ path: "/chat/widget/session", method: "OPTIONS", handler: options });

http.route({ path: "/api/chat/widget/chat", method: "POST", handler: widgetChat });
http.route({ path: "/api/chat/widget/chat", method: "OPTIONS", handler: options });
http.route({ path: "/chat/widget/chat", method: "POST", handler: widgetChat });
http.route({ path: "/chat/widget/chat", method: "OPTIONS", handler: options });

http.route({ path: "/api/health", method: "GET", handler: health });
http.route({ path: "/api/health", method: "OPTIONS", handler: options });
http.route({ path: "/health", method: "GET", handler: health });
http.route({ path: "/health", method: "OPTIONS", handler: options });

export default http;
