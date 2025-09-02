# Railway service for Discord bot runner
# Uses Node 18+ with built-in fetch
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci --only=production || npm i --only=production

# Copy the rest of the repo
COPY . .

# Environment (provided by Railway dashboard)
# ENV CONVEX_URL=
# ENV DISCORD_BACKEND_KEY=

# Healthcheck (optional)
# HEALTHCHECK --interval=30s --timeout=5s --start-period=30s \
#   CMD node -e "process.exit(0)"

# Start the bot runner
CMD ["node", "integrations/discord/bot-runner.cjs"]
