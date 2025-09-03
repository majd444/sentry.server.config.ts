/*
  Backend bot runner
  - Reads active Discord configs from Convex HTTP endpoint (populated via your UI at /integrations/discord)
  - Starts a Discord.js client per active config and keeps them online
  - Uses Convex chat widget endpoints to respond to messages

  Required env:
  - CONVEX_URL=https://effervescent-mandrill-295.convex.cloud
  - DISCORD_BACKEND_KEY=strong-shared-secret (must match Convex env var DISCORD_BACKEND_KEY)
*/

const { Client, GatewayIntentBits, Partials, ChannelType } = require('discord.js');
const os = require('os');

const CONVEX_URL = process.env.CONVEX_URL;
const BACKEND_KEY = process.env.DISCORD_BACKEND_KEY;

// Startup diagnostics (do not print secrets). Helps debug Railway env propagation.
console.log('[env] CONVEX_URL defined:', Boolean(CONVEX_URL), 'value:', CONVEX_URL || '(empty)');
console.log('[env] DISCORD_BACKEND_KEY defined:', Boolean(BACKEND_KEY), 'length:', BACKEND_KEY ? BACKEND_KEY.length : 0);

if (!CONVEX_URL || !BACKEND_KEY) {
  console.error('Missing CONVEX_URL or DISCORD_BACKEND_KEY');
  process.exit(1);
}

const headers = {
  'Content-Type': 'application/json',
  'x-backend-key': BACKEND_KEY,
};

// Track running clients by configId
const clients = new Map();
// Track heartbeat intervals by configId
const heartbeats = new Map();
// Track which normalized bot token currently has a running client
const runningByToken = new Map(); // tokenKey -> configId
const idToToken = new Map(); // configId -> tokenKey

// Instance identity and lock config
const INSTANCE_ID = `runner-${os.hostname?.() || 'host'}-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const LOCK_TTL_MS = 60_000; // 60s
const RENEW_INTERVAL_MS = 30_000; // renew every 30s
console.log('[lock] INSTANCE_ID =', INSTANCE_ID);
if (process.env.AGENT_ID) {
  console.log('[env] AGENT_ID defined: true');
} else {
  console.log('[env] AGENT_ID defined: false');
}

// Dedup cache: track processed message IDs for a short TTL to avoid double replies
const processedMessages = new Map(); // key -> timestamp
const PROCESSED_TTL_MS = 5 * 60 * 1000; // 5 minutes

function hasRecentlyProcessed(key) {
  const now = Date.now();
  const ts = processedMessages.get(key);
  if (ts && now - ts < PROCESSED_TTL_MS) return true;
  processedMessages.set(key, now);
  // lightweight cleanup
  if (processedMessages.size > 10000) {
    for (const [k, t] of processedMessages) {
      if (now - t > PROCESSED_TTL_MS) processedMessages.delete(k);
    }
  }
  return false;
}

async function fetchActiveConfigs() {
  const res = await fetch(`${CONVEX_URL}/http/discord/bot/activeConfigs`, { headers });
  if (!res.ok) throw new Error(`activeConfigs error: ${res.status}`);
  return res.json();
}

// Distributed lock helpers
async function claimLock(configId) {
  const res = await fetch(`${CONVEX_URL}/http/discord/bot/claim`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ configId, instanceId: INSTANCE_ID, ttlMs: LOCK_TTL_MS }),
  });
  if (!res.ok) {
    const t = await res.text().catch(() => '');
    throw new Error(`claimLock ${configId} failed: ${res.status} ${t}`);
  }
  return res.json();
}

async function renewLock(configId) {
  const res = await fetch(`${CONVEX_URL}/http/discord/bot/renew`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ configId, instanceId: INSTANCE_ID, ttlMs: LOCK_TTL_MS }),
  });
  if (!res.ok) {
    const t = await res.text().catch(() => '');
    throw new Error(`renewLock ${configId} failed: ${res.status} ${t}`);
  }
  return res.json();
}

async function releaseLock(configId) {
  const res = await fetch(`${CONVEX_URL}/http/discord/bot/release`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ configId, instanceId: INSTANCE_ID }),
  });
  // Best-effort; don't throw on release
  if (!res.ok && process.env.DEBUG) {
    const t = await res.text().catch(() => '');
    console.warn(`releaseLock ${configId} non-200: ${res.status} ${t}`);
  }
}

async function updateStatus(configId, status) {
  try {
    await fetch(`${CONVEX_URL}/http/discord/bot/updateStatus`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ configId, status, lastSeen: Date.now() }),
    });
  } catch (e) {
    console.warn('Failed to update status:', e);
  }
}

function startClientForConfig(cfg) {
  if (clients.has(cfg._id)) return; // already running
  const tokenKey = (cfg.botToken || '').trim();
  if (!tokenKey) return;
  // Do not start if another client already owns this token
  if (runningByToken.has(tokenKey)) return;

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel], // Required to receive DMs
  });

  client.once('ready', async () => {
    console.log(`✅ [${cfg._id}] Bot ready as ${client.user.tag}`);
    await updateStatus(cfg._id, 'running');
  });

  client.on('messageCreate', async (message) => {
    try {
      if (message.author.bot) return;
      const userMessage = (message.content || '').trim();
      if (!userMessage) return;

      // Only respond to DMs or when the bot is mentioned in guild channels
      const isDM = message.channel?.type === ChannelType.DM;
      const isMention = message.mentions?.has?.(client.user) || false;
      if (!isDM && !isMention) return;

      // De-duplicate processing for the same message across runner instances
      const dedupKey = `${client.user?.id || 'bot'}:${message.id}`;
      if (hasRecentlyProcessed(dedupKey)) return;

      await message.channel.sendTyping();

      // Create session
      const agentId = process.env.AGENT_ID || cfg.agentId;
      if (!agentId) throw new Error('Missing agentId (env AGENT_ID or cfg.agentId)');
      if (process.env.DEBUG) console.log(`[${cfg._id}] creating session for agentId=`, agentId);
      const sessionRes = await fetch(`${CONVEX_URL}/http/chat/widget/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentId }),
      });
      if (!sessionRes.ok) {
        const t = await sessionRes.text().catch(() => '');
        throw new Error(`Session failed: ${sessionRes.status} ${t}`);
      }
      const session = await sessionRes.json();

      // Send chat
      const chatRes = await fetch(`${CONVEX_URL}/http/chat/widget/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: session.sessionId,
          agentId,
          message: userMessage,
          history: [],
        }),
      });
      if (!chatRes.ok) {
        const t = await chatRes.text().catch(() => '');
        throw new Error(`Chat failed: ${chatRes.status} ${t}`);
      }
      const chat = await chatRes.json();

      const reply = (chat && typeof chat.reply === 'string' && chat.reply.trim())
        ? chat.reply.trim()
        : 'Sorry, I could not generate a response.';
      await message.reply(reply);
      await updateStatus(cfg._id, 'running');
        } catch (err) {
          console.error(`[${cfg._id}] message handler error:`, err);
          await updateStatus(cfg._id, 'error');
          // Intentionally do not send an error reply to avoid double messages
        }
      });

      client.on('error', (e) => console.error(`[${cfg._id}] client error:`, e));
      client.on('shardError', (e) => console.error(`[${cfg._id}] shard error:`, e));

      // Attempt to claim the distributed lock before logging in
      claimLock(cfg._id)
        .then(async () => {
          // Start client after lock claimed
          await client.login(cfg.botToken);
          clients.set(cfg._id, client);
          runningByToken.set(tokenKey, cfg._id);
          idToToken.set(cfg._id, tokenKey);
          // Start heartbeat to renew lock periodically
          const hb = setInterval(async () => {
            try { await renewLock(cfg._id); }
            catch (err) {
              console.error(`[${cfg._id}] renewLock failed, stopping client:`, err);
              try { await client.destroy(); } catch {}
              clients.delete(cfg._id);
              const tk = idToToken.get(cfg._id); if (tk) { runningByToken.delete(tk); idToToken.delete(cfg._id); }
              const h = heartbeats.get(cfg._id); if (h) { clearInterval(h); heartbeats.delete(cfg._id); }
              await updateStatus(cfg._id, 'stopped');
            }
          }, RENEW_INTERVAL_MS);
          heartbeats.set(cfg._id, hb);
        })
        .catch(async (e) => {
          console.warn(`[${cfg._id}] lock claim failed, not starting client:`, e?.message || e);
          await updateStatus(cfg._id, 'lock_denied');
        });
    });
}

async function reconcile() {
  try {
    const configs = await fetchActiveConfigs();

    // Group by botToken and pick the newest updatedAt per token
    const byToken = new Map(); // tokenKey -> cfg
    for (const cfg of configs) {
      const tokenKey = (cfg.botToken || '').trim();
      if (!tokenKey) continue;
      const prev = byToken.get(tokenKey);
      if (!prev || (typeof cfg.updatedAt === 'number' && cfg.updatedAt > (prev.updatedAt || 0))) {
        byToken.set(tokenKey, cfg);
      }
    }
    const selected = Array.from(byToken.values());
    const activeIds = new Set(selected.map((c) => c._id));

    // Start new (only selected per token)
    for (const cfg of selected) startClientForConfig(cfg);

    // Stop removed
    for (const [id, client] of clients) {
      if (!activeIds.has(id)) {
        console.log(`[${id}] stopping (no longer active)`);
        try { await client.destroy(); } catch {}
        clients.delete(id);
        await updateStatus(id, 'stopped');
        // Stop heartbeat and release lock
        const hb = heartbeats.get(id);
        if (hb) { clearInterval(hb); heartbeats.delete(id); }
        await releaseLock(id);
        const tk = idToToken.get(id); if (tk) { runningByToken.delete(tk); idToToken.delete(id); }
      }
    }
  } catch (e) {
    console.error('reconcile error:', e);
  }
}

// Initial and interval
(async () => {
  await reconcile();
  setInterval(reconcile, 30_000);
})();

// Graceful shutdown: release locks and destroy clients
async function shutdown() {
  try {
    for (const [id, client] of clients) {
      try { await client.destroy(); } catch {}
      const hb = heartbeats.get(id);
      if (hb) { clearInterval(hb); heartbeats.delete(id); }
      await releaseLock(id);
      await updateStatus(id, 'stopped');
      const tk = idToToken.get(id); if (tk) { runningByToken.delete(tk); idToToken.delete(id); }
    }
  } finally {
    process.exit(0);
  }
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
