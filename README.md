# conexao-saude-website

Site do instituto Conexão Saúde: landing page, blog e login.

> **Situação:** site institucional com 12 páginas, sem chamada à API por enquanto. É o primeiro site a ser construído sobre o [capaolab-core](https://github.com/capaolab/capaolab-core).

## Escopo

- Landing page do instituto
- Blog (posts publicados lidos da API; escrita por usuários com papel de editor)
- Login e logout de usuários do projeto

Ainda não guarda dado de saúde.

## Arquitetura

- Next.js 16 (App Router) em TypeScript, só frontend, com `output: 'standalone'`. Não usa Payload CMS, banco, ORM nem migrações
- Dados e regras de negócio ficam no capaolab-core (FastAPI + PostgreSQL 18), onde o Conexão Saúde é um projeto com banco isolado. Rotas em `/v1/conexao-saude/...`
- Leitura de dado público (ex.: posts publicados) pode ser feita pelo navegador ou por Server Components
- Escrita, login e tudo que exige a chave do projeto passam pelo servidor do Next. A chave fica só no servidor, e a sessão do usuário em cookie `httpOnly` no domínio do site
- Contato por `mailto:` e WhatsApp (`wa.me`); o site não envia e-mail
- Tipos e client da API gerados do `openapi.json` do capaolab-core (`openapi-typescript` + `openapi-fetch`). TODO: como o site obtém o `openapi.json` no build
- Deploy: começa numa VPS com Coolify (container do `Dockerfile`, Cloudflare na frente) e pode ir para a Vercel sem mudar código

```
navegador ──► Next.js (servidor) ──► capaolab-core (API) ──► Postgres
    └──────── leitura pública ──────────►
```

Detalhes: decisão [0002 — Frontends, chamadas à API e deploy](https://github.com/capaolab/capaolab-core/blob/main/docs/core/decisoes/0002-frontends-api-e-deploy.md).

## Documentação

- Regras de negócio e decisões do projeto: [`capaolab-core/docs/projetos/conexao-saude-website/`](https://github.com/capaolab/capaolab-core/tree/main/docs/projetos/conexao-saude-website)
- Arquitetura do core e contrato da API: [`capaolab-core/docs/core/`](https://github.com/capaolab/capaolab-core/tree/main/docs/core)
- O `docs/` deste repositório guarda só design, protótipos e artefatos do frontend

## Como rodar

- Dev com Docker: `cp .env.example .env && docker compose up -d --build`
- Dev sem Docker: `npm install && npm run dev`
- Testes: `npx vitest --run`; typecheck: `npx tsc --noEmit`; lint: `npx eslint .`
- Build: `npm run build`
- Imagem Docker de produção: `docker build --target runner .`

## Imagens

As fotos ficam em `public/imagens/`, com os nomes mapeados em [`docs/imagens.md`](docs/imagens.md).

1. Copie a foto com o nome exato para `public/imagens/`, substituindo o arquivo provisório
2. Rode `npm run imagens:otimizar`. O script corrige a orientação, limita o lado maior a 2400 px, recomprime e remove os metadados (EXIF, inclusive a localização GPS gravada pelo celular). Foto que já está otimizada fica como está, então dá para rodar quantas vezes quiser. No fim, o script limpa o cache de imagens do Next (`.next/cache/images`): esse cache identifica a foto pelo nome, não pelo conteúdo, e sem a limpeza a foto trocada continuaria aparecendo antiga no dev
3. Faça o commit e publique de novo: a pasta `public/` vai dentro da imagem Docker

Quem já viu a foto antiga pode continuar vendo-a por até 4 horas (cache do navegador). No dev, recarregue com Ctrl+Shift+R.

## Preview na Vercel

Serve para o cliente ver e aprovar uma mudança antes do merge na `main`. É o site completo, num deploy de prévia da Vercel (workflow [`deploy-preview.yml`](.github/workflows/deploy-preview.yml)).

- **Gatilho:** push de uma tag `preview-*` ou execução manual pelo botão *Run workflow* na aba Actions, escolhendo a branch
  ```bash
  git tag preview-home-nova && git push origin preview-home-nova
  ```
- **O que o pipeline faz:** `vercel pull --environment=preview`, `vercel build` e `vercel deploy --prebuilt`. A URL do preview aparece no resumo da execução, pronta para enviar ao cliente
- **Na Vercel o `output: 'standalone'` fica desligado** (`next.config.ts` testa a variável `VERCEL`): a Vercel empacota o app do jeito dela. O Docker continua com standalone
- **Configuração (uma vez):**
  - criar o projeto na Vercel (Framework: Next.js, raiz do repositório)
  - no GitHub, secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` (os mesmos do capao-grande-website) e `CONEXAOSAUDE_PROJECT_ID` (Project ID do projeto na Vercel)

## Branches

- `dev`: branch de integração. Os commits de funcionalidade vão direto para ela
- `main`: recebe só o merge de `dev`, quando a versão é aprovada
