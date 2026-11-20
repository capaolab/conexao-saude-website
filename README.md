# conexao-saude-website

Site do instituto Conexão Saúde: landing page, blog e login.

> **Situação:** ainda sem código. É o primeiro site a ser construído sobre o [capaolab-core](https://github.com/capaolab/capaolab-core).

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

## Branches

- `dev`: branch de integração. Os commits de funcionalidade vão direto para ela
- `main`: recebe só o merge de `dev`, quando a versão é aprovada
