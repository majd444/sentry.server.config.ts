/*
  Backend bot runner
  - Reads active Discord configs from Convex HTTP endpoint (populated via your UI at /integrations/discord)
  - Starts a Discord.js client per active config and keeps them online
  - Uses Convex chat widget endpoints to respond to messages

  Required env:
  - CONVEX_URL=https://effervescent-mandrill-295.convex.cloud
  - DISCORD_BACKEND_KEY=strong-shared-secret (must match Convex env var DISCORD_BACKEND_KEY)
*/

const { Client, GatewayIntentBits, Partials } = require('discord.js');

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

async function fetchActiveConfigs() {
  const res = await fetch(`${CONVEX_URL}/http/discord/bot/activeConfigs`, { headers });
  if (!res.ok) throw new Error(`activeConfigs error: ${res.status}`);
  return res.json();
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
      await message.channel.sendTyping();

      // Create session
      const sessionRes = await fetch(`${CONVEX_URL}/http/chat/widget/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentId: cfg.agentId }),
      });
      if (!sessionRes.ok) throw new Error(`Session failed: ${sessionRes.status}`);
      const session = await sessionRes.json();

      // Send chat
      const chatRes = await fetch(`${CONVEX_URL}/http/chat/widget/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: session.sessionId,
          agentId: cfg.agentId,
          message: userMessage,
          history: [],
        }),
      });
      if (!chatRes.ok) throw new Error(`Chat failed: ${chatRes.status}`);
      const chat = await chatRes.json();

      await message.reply(chat.reply || 'Sorry, I could not generate a response.');
      await updateStatus(cfg._id, 'running');
    } catch (err) {
      console.error(`[${cfg._id}] message handler error:`, err);
      await updateStatus(cfg._id, 'error');
      try { await message.reply('Sorry, I encountered an error.'); } catch {}
    }
  });

  client.on('error', (e) => console.error(`[${cfg._id}] client error:`, e));
  client.on('shardError', (e) => console.error(`[${cfg._id}] shard error:`, e));

  client.login(cfg.botToken)
    .then(() => clients.set(cfg._id, client))
    .catch(async (e) => {
      console.error(`[${cfg._id}] login failed:`, e);
      await updateStatus(cfg._id, 'login_failed');
    });
}

async function reconcile() {
  try {
    const configs = await fetchActiveConfigs();
    const activeIds = new Set(configs.map((c) => c._id));

    // Start new
    for (const cfg of configs) startClientForConfig(cfg);

    // Stop removed
    for (const [id, client] of clients) {
      if (!activeIds.has(id)) {
        console.log(`[${id}] stopping (no longer active)`);
        try { await client.destroy(); } catch {}
        clients.delete(id);
        await updateStatus(id, 'stopped');
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
