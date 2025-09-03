import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new chat session
export const createSession = mutation({
  args: {
    agentId: v.id("agents"),
    userId: v.string(),
    metadata: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const sessionId = await ctx.db.insert("chatSessions", {
      agentId: args.agentId,
      userId: args.userId,
      metadata: args.metadata || {},
      lastActive: Date.now(),
      createdAt: Date.now(),
    });
    return sessionId;
  },
});

// Get a session by ID
export const getSession = query({
  args: { id: v.id("chatSessions") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Update session last active timestamp
export const updateSessionLastActive = mutation({
  args: { id: v.id("chatSessions") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { lastActive: Date.now() });
  },
});

// Create a new message
export const createMessage = mutation({
  args: {
    sessionId: v.id("chatSessions"),
    role: v.union(v.literal("user"), v.literal("assistant"), v.literal("system")),
    content: v.string(),
    metadata: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const messageId = await ctx.db.insert("chatMessages", {
      sessionId: args.sessionId,
      role: args.role,
      content: args.content,
      metadata: args.metadata || {},
      createdAt: Date.now(),
    });
    return messageId;
  },
});

// Get messages for a session
export const getSessionMessages = query({
  args: { sessionId: v.id("chatSessions") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("chatMessages")
      .withIndex("by_session", (q) => q.eq("sessionId", args.sessionId))
      .order("asc")
      .collect();
  },
});

// Get simple stats for a session's messages
export const getSessionMessageStats = query({
  args: { sessionId: v.id("chatSessions") },
  handler: async (ctx, args) => {
    const msgs = await ctx.db
      .query("chatMessages")
      .withIndex("by_session", (q) => q.eq("sessionId", args.sessionId))
      .order("desc")
      .take(50); // take recent messages for quick count; UI use only
    const count = msgs.length;
    const last = msgs[0] || null;
    return {
      count,
      lastContent: last?.content ?? null,
      lastCreatedAt: last?.createdAt ?? null,
    };
  },
});

// List sessions for the current authenticated user for a given agent
export const listByAgentForCurrentUser = query({
  args: { agentId: v.id("agents") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }
    const userId = identity.subject;
    const agent = await ctx.db.get(args.agentId);
    if (!agent) return [];

    const sessions = await ctx.db
      .query("chatSessions")
      .withIndex("by_agent", (q) => q.eq("agentId", args.agentId))
      .order("desc")
      .collect();

    // If the signed-in user owns the agent, return all sessions (including widget/guest sessions)
    if (agent.userId === userId) {
      return sessions;
    }

    // Otherwise, only return sessions that belong to this signed-in user
    return sessions.filter((s) => s.userId === userId);
  },
});
