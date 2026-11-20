# syntax=docker/dockerfile:1

FROM node:24.11.0-slim AS base
WORKDIR /app
# Versão do Node fixada igual a .node-version e package.json#engines.
# O usuário "node" (uid 1000) evita arquivos de root no bind mount do dev.

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Desenvolvimento ----
# Roda `next dev` com o código montado pelo docker-compose.
FROM base AS dev
ENV NODE_ENV=development
COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node . .
# .next é volume anônimo no compose: precisa existir e ser do "node".
RUN mkdir -p .next && chown node:node .next
USER node
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ---- Build ----
FROM base AS builder
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Produção ----
# Servidor standalone gerado por `output: "standalone"`.
FROM base AS runner
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD ["node", "server.js"]
