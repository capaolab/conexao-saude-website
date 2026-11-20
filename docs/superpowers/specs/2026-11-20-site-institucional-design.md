# Site institucional do Instituto Conexão Saúde — design

- **Data:** 2026-11-20
- **Origem:** canvas "Instituto Conexão Saúde — Site" (https://claude.ai/artifact/NV2k7VfQ8HQCYXrgssWduC, slug `adf9cfd0-545b-42e3-bc2d-72143280600b`)

## Intenção

Colocar no ar o site institucional desenhado no canvas, fiel ao design no desktop (1440) e no celular (390), no padrão novo dos frontends do workspace (ADR 0002 do capaolab-core). É a primeira entrega do repositório.

## Escopo

12 páginas:

| Rota | Tela do canvas |
| --- | --- |
| `/` | `Main.dc.html` / `MainMobile.dc.html` |
| `/quem-somos` | `QuemSomos*.dc.html` |
| `/projetos` | `Projetos*.dc.html` (filtro por área: todos, saúde, esporte, cultura, educação) |
| `/projetos/[slug]` | `Projeto<Nome>*.dc.html`, 7 projetos com o mesmo molde |
| `/parcerias` | `Parcerias*.dc.html` |
| `/contato` | `Contato*.dc.html` |

Slugs dos projetos: `programa-conexao-saude`, `yoga`, `futebol-vale-jogar`, `corrida-em-trilha`, `circo`, `ciranda-cultural`, `yurta-curumim`.

## Não objetivos (desta entrega)

- Blog e login: não estão no design e a API ainda não existe. Entram depois, cada um como entrega própria. O aviso "Novidades do projeto — Em breve" do design fica como está.
- Chamar a API capaolab-core: nenhum dado vem dela agora.
- Formulários: o design não tem nenhum.
- Tema escuro: os tokens o definem, mas nenhuma tela o usa.

## Decisões

- Next.js 16.3.5 (App Router) + React 19 + TypeScript + Tailwind 4, npm, Node 24.11.0 (mesmas versões do capao-grande-website). `output: 'standalone'`.
- Conteúdo em arquivos TypeScript tipados em `content/`, no repositório. Textos com marcação `[a confirmar]` do canvas são copiados como estão.
- Contato só por `mailto:` e `wa.me`, a partir de uma configuração única (`lib/contato.ts`). O `mailto:` é montado em JavaScript no clique; sem JavaScript, o link leva a `/contato`, onde o e-mail está escrito. Número do WhatsApp só com dígitos, com DDI e DDD; textos com `encodeURIComponent`.
- Design system "Instituto Conexão Saúde": tokens como variáveis CSS e tema do Tailwind; componentes `ics-*` (botão, tag, link) portados para CSS global, com os mesmos nomes de classe do canvas.
- Fontes Fredoka (400–700) e Nunito (400–800) via `next/font/google`.
- Imagens: as fotos e o logo do canvas não podem ser exportados pela ferramenta. Cada imagem do site tem nome de arquivo fixo desde já, mapeado em `docs/imagens.md` (arquivo, onde aparece, `alt`, proporção, se o canvas já tem a foto) e em `content/imagens.ts`. O repositório traz um arquivo provisório com cada nome em `public/imagens/`, gerado por `scripts/gerar-placeholders.mjs` no visual do placeholder do design ("Foto a receber"). Quando as fotos chegarem, o usuário só copia e cola por cima, sem mexer em código.
- Fluxo de branches: `dev` e `main`. Commits de funcionalidade vão direto para `dev`; o usuário faz o merge para `main`.
- Testes: Vitest + Testing Library (jsdom) para a lógica de contato, o conteúdo e o comportamento dos componentes; uma auditoria de links e de acessibilidade (axe) sobre todas as páginas.
- Deploy start: `Dockerfile` com estágios `dev`, `builder` e `runner` (servidor standalone); Docker Compose para dev.

## Restrições

- Regras do workspace (`capaolab-core/docs/workspace.md`): sem banco, sem `NEXT_PUBLIC_` para segredo, contato sem SMTP, nada que só funcione na Vercel ou só no container.
- Next 16 tem mudanças incompatíveis com versões anteriores: ler `node_modules/next/dist/docs/` antes de escrever código (bloco do `AGENTS.md`).

## Fica para quem constrói

- Estrutura interna dos componentes de cada página, seguindo o HTML do canvas.
- Nomes dos ids de imagem, derivados do `alt` das imagens do canvas.
