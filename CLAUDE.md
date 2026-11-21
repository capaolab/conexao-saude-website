@AGENTS.md

# conexao-saude-website

Site do instituto Conexão Saúde. Primeiro site sobre o capaolab-core. Hoje: site institucional estático com 12 páginas (Início, Quem somos, Projetos, 7 páginas de projeto, Parcerias, Contato), sem chamada à API. Blog e login ainda não existem.

## API

- Módulo: `/v1/conexao-saude/`
- Rotas que escrevem: login e logout. TODO: escrita no blog (onde os posts são editados)
- CORS: TODO domínios de produção e de prévia

## Comandos

- Dev: `cp .env.example .env && docker compose up -d --build`, ou `npm run dev`
- Testes: `npx vitest --run`
- Typecheck: `npx tsc --noEmit`
- Lint: `npx eslint .`
- Build: `npm run build`

## Estrutura

- `app/`: rotas (App Router)
- `content/`: conteúdo das páginas e mapa de imagens (`content/imagens.ts`)
- `lib/contato.ts`: e-mail e WhatsApp do instituto (links e mensagens)
- `components/`: componentes do site (cabeçalho, rodapé, projetos)
- `tests/`: Vitest, inclui a auditoria de links e acessibilidade (`tests/auditoria.test.tsx`)

## Cuidados

- Imagens: nome fixo em `content/imagens.ts` e `docs/imagens.md`; arquivo em `public/imagens/` (provisório gerado por `npm run imagens:placeholders` até a foto real chegar). Foto real nova: rode `npm run imagens:otimizar` antes do commit
- Nunca `href="mailto:"`: use `<LinkEmail>`; links de WhatsApp vêm de `linkWhatsApp()`

## Branches

- `dev`: integração. Commits de funcionalidade vão direto para `dev`
- `main`: só recebe merge de `dev`, feito pelo usuário. Nunca commitar direto na `main`
