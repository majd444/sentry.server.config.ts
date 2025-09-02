# Vaste Discord Bot Runner (Railway)
Minimal backend worker that keeps your Discord bot online and routes messages through your Production Convex deployment.

- Runner: integrations/discord/bot-runner.js
- Dockerfile at repo root (Node 18)
- Env:
  - CONVEX_URL = https://effervescent-mandrill-295.convex.cloud
  - DISCORD_BACKEND_KEY = <same secret set in Convex prod>

Deploy on Railway:
1) Create new Railway service from this GitHub repo
2) Set env vars above
3) Deploy (starts: node integrations/discord/bot-runner.js)
