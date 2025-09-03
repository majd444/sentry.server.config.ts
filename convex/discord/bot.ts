import { httpAction } from "../_generated/server";
import { api } from "../_generated/api";

// Simple header-based auth for backend runner
function isAuthorized(request: Request): boolean {
  const key = request.headers.get("x-backend-key");
  const expected = process.env.DISCORD_BACKEND_KEY;
  return !!expected && key === expected;
}

// GET /http/discord/bot/activeConfigs
export const activeConfigs = httpAction(async (ctx, request) => {
  if (!isAuthorized(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const configs = await ctx.runQuery(api.discord.getAllActiveConfigs, {});

  // Return only required fields to run bots
  return Response.json(
    configs.map((c) => ({
      _id: c._id,
      agentId: c.agentId,
      botToken: c.botToken,
      clientId: c.clientId,
      guildId: c.guildId ?? null,
      updatedAt: c.updatedAt,
    }))
  );
});

// POST /http/discord/bot/claim
export const claim = httpAction(async (ctx, request) => {
  if (!isAuthorized(request)) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const body = await request.json();
    const { configId, instanceId, ttlMs } = body as {
      configId: string; instanceId: string; ttlMs: number;
    };
    if (!configId || !instanceId || !ttlMs) {
      return new Response("Missing params", { status: 400 });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = await ctx.runMutation(api.discord.claimConfigLock, { configId: configId as any, instanceId, ttlMs });
    return Response.json(res);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }
});

// POST /http/discord/bot/renew
export const renew = httpAction(async (ctx, request) => {
  if (!isAuthorized(request)) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const body = await request.json();
    const { configId, instanceId, ttlMs } = body as {
      configId: string; instanceId: string; ttlMs: number;
    };
    if (!configId || !instanceId || !ttlMs) {
      return new Response("Missing params", { status: 400 });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = await ctx.runMutation(api.discord.renewConfigLock, { configId: configId as any, instanceId, ttlMs });
    return Response.json(res);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }
});

// POST /http/discord/bot/release
export const release = httpAction(async (ctx, request) => {
  if (!isAuthorized(request)) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const body = await request.json();
    const { configId, instanceId } = body as {
      configId: string; instanceId: string;
    };
    if (!configId || !instanceId) {
      return new Response("Missing params", { status: 400 });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = await ctx.runMutation(api.discord.releaseConfigLock, { configId: configId as any, instanceId });
    return Response.json(res);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }
});

// POST /http/discord/bot/updateStatus
export const updateStatus = httpAction(async (ctx, request) => {
  if (!isAuthorized(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const body = await request.json();
    const { configId, status, lastSeen } = body as {
      configId: string;
      status: string;
      lastSeen?: number;
    };

    if (!configId || !status) {
      return new Response("Missing configId or status", { status: 400 });
    }

    await ctx.runMutation(api.discord.updateBotStatus, {
      // Body provides string; Convex will validate collection at runtime
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      configId: configId as any,
      status,
      lastSeen,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return new Response("Invalid JSON", { status: 400 });
  }
});
