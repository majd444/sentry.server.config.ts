import { query, mutation, action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import { Id } from "./_generated/dataModel";

// Save fine-tuning output
export const saveFineTuningOutput = mutation({
  args: {
    agentId: v.string(),
    input: v.string(),
    output: v.string(),
    metadata: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;
    const now = Date.now();

    const id = await ctx.db.insert("fineTuningOutputs", {
      userId,
      agentId: args.agentId,
      input: args.input,
      output: args.output,
      metadata: args.metadata || {},
      createdAt: now,
    });
    return id;
  },
});

// Server-side URL extraction and save (action to allow external fetch)
export const extractFromUrl = action({
  args: {
    agentId: v.string(),
    url: v.string(),
  },
  handler: async (
    ctx,
    args
  ): Promise<{ id: Id<"fineTuningOutputs">; length: number }> => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    // Basic URL validation
    let target: URL;
    try {
      target = new URL(args.url);
    } catch {
      throw new Error("Invalid URL");
    }

    // Fetch page content
    const res = await fetch(target.toString(), {
      method: 'GET',
      headers: { 'User-Agent': 'VasteBot/1.0 (+https://example.com)' },
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`Fetch failed ${res.status}: ${text.slice(0, 200)}`);
    }
    const contentType = res.headers.get('content-type') || '';
    const html = await res.text();

    // Very lightweight extraction: remove scripts/styles, strip tags, collapse whitespace
    const withoutScripts = html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '');
    const textOnly = withoutScripts
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ')
      .trim();

    // Limit size to avoid extremely large entries
    const MAX_LEN = 200_000;
    const extracted = textOnly.slice(0, MAX_LEN);

    const id = await ctx.runMutation(api.fineTuning.saveFineTuningOutput, {
      agentId: args.agentId,
      input: `url:${args.url}`,
      output: extracted,
      metadata: { contentType, length: extracted.length },
    });

    return { id, length: extracted.length };
  },
});

// Get fine-tuning outputs for a specific agent
export const getAgentFineTuningOutputs = query({
  args: {
    agentId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;
    
    return await ctx.db
      .query("fineTuningOutputs")
      .withIndex("by_agent", (q) => 
        q.eq("agentId", args.agentId)
         .eq("userId", userId)
      )
      .order("desc")
      .collect();
  },
});

// Delete a fine-tuning output
export const deleteFineTuningOutput = mutation({
  args: {
    id: v.id("fineTuningOutputs"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const output = await ctx.db.get(args.id);
    if (!output) {
      throw new Error("Fine-tuning output not found");
    }

    if (output.userId !== identity.subject) {
      throw new Error("Not authorized to delete this output");
    }

    await ctx.db.delete(args.id);
  },
});

// Public: Get knowledge base entries for an agent (no auth)
export const getPublicAgentKnowledge = query({
  args: {
    agentId: v.string(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = typeof args.limit === 'number' && args.limit > 0 ? args.limit : 10;
    // Use the composite index by constraining agentId and ranging over userId
    return await ctx.db
      .query("fineTuningOutputs")
      .withIndex("by_agent", (q) =>
        q
          .eq("agentId", args.agentId)
          .gte("userId", "")
          .lte("userId", "\uffff")
      )
      .order("desc")
      .take(limit);
  },
});
