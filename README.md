# conexao-saude-website

Site do instituto Conexão Saúde: landing page, blog e login.

> **Situação:** ainda sem código. É o primeiro site a ser construído sobre o [capaolab-core](https://github.com/capaolab/capaolab-core).

## Escopo

- Landing page do instituto
- Blog (posts publicados lidos da API; escrita por usuários com papel de editor)
- Login e logout de usuários do projeto

Ainda não guarda dado de saúde.

## Arquitetura

- Next.js 16 (App Router) em TypeScript, só frontend. Não usa Payload CMS nem banco próprio
- Dados e regras de negócio ficam no capaolab-core (FastAPI + Postgres), onde o Conexão Saúde é um projeto com banco isolado
- O navegador só fala com o site. O servidor do Next chama a API com a chave do projeto, e a sessão do usuário fica em cookie `httpOnly` no domínio do site
- Tipos e client da API gerados do `openapi.json` do capaolab-core (`openapi-typescript` + `openapi-fetch`)

```
navegador ──► Next.js (servidor) ──► capaolab-core (API) ──► Postgres
```

## Documentação

- Regras de negócio e decisões do projeto: [`capaolab-core/docs/projetos/conexao-saude-website/`](https://github.com/capaolab/capaolab-core/tree/main/docs/projetos/conexao-saude-website)
- Arquitetura do core e contrato da API: [`capaolab-core/docs/core/`](https://github.com/capaolab/capaolab-core/tree/main/docs/core)
- O `docs/` deste repositório guarda só design, protótipos e artefatos do frontend
