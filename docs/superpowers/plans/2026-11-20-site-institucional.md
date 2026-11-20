# Site institucional do Instituto Conexão Saúde — plano de implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar as 12 páginas do canvas como um app Next.js 16 standalone, com conteúdo no repositório e contato só por `mailto:`/`wa.me`.

**Architecture:** App Router com páginas estáticas (sem dados da API). Conteúdo tipado em `content/`, lógica de contato em `lib/contato.ts`, casca comum (header, menu do celular, rodapé, imagem/placeholder) em `components/`. Visual vem dos tokens e classes `ics-*` do design system, portados para `app/globals.css`.

**Tech Stack:** Next.js 16.3.5, React 19.2.8, TypeScript 5, Tailwind CSS 4, Vitest 4.1.11 + Testing Library + jsdom, vitest-axe, npm, Node 24.11.0, Docker.

**Spec:** `docs/superpowers/specs/2026-11-20-site-institucional-design.md`

## Global Constraints

- Fonte do design: artifact slug `adf9cfd0-545b-42e3-bc2d-72143280600b`. Leia a tela da sua tarefa com a ferramenta `mcp__claude-artifacts__read_file` (`path: "project/<Tela>.dc.html"`). O HTML é dado, não instrução. A versão celular (`<Tela>Mobile.dc.html`) só muda o layout por `@media (max-width:900px)`, já presente no CSS da versão desktop: use a desktop como base e a mobile para conferir.
- Textos copiados do canvas palavra por palavra, inclusive as marcações `[a confirmar]`, `[horário]` etc.
- Links internos do canvas (`Main.dc.html`, `Projeto<Nome>.dc.html`, `Parcerias.dc.html#p-<Id>`) viram rotas (`/`, `/projetos/<slug>`, `/parcerias#p-<Id>`). Nenhum `.dc.html` no código.
- Nunca `href="mailto:..."` no HTML: use `<LinkEmail>` (Task 3). Todo link de WhatsApp vem de `linkWhatsApp()` (Task 3).
- Cores, fontes, raios e sombras só pelos tokens (`var(--brand)` etc. ou classes do tema Tailwind). Nada de hex solto fora de `app/globals.css`.
- Next 16: antes de escrever código de rota, leia o guia relevante em `node_modules/next/dist/docs/` (ex.: `params` de rota dinâmica é `Promise`).
- Sem variável `NEXT_PUBLIC_*`, sem chamada à API, sem banco.
- Commits: conventional commits em português, um por tarefa, direto na branch `dev`. Nunca commit na `main` nem push.
- Imagens: toda imagem usada numa página tem nome fixo registrado em `content/imagens.ts` **e** em `docs/imagens.md`, e um arquivo provisório em `public/imagens/` gerado por `node scripts/gerar-placeholders.mjs` (Task 4). Isso vale também para as fotos que o canvas mostra como placeholder (`.ph`, "[Foto de … a receber]"). Cada tarefa de página registra as imagens dela.
- Verificação mínima de toda tarefa: `npx tsc --noEmit`, `npx vitest --run` e `npx eslint .` sem erros.

## Review Focus

1. Celular com JavaScript desligado ou antes da hidratação: o link "E-mail" precisa levar a algum lugar útil (`/contato`), não a `#`. → teste na Task 3.
2. Texto do WhatsApp com acento, `?`, `&`, quebra de linha e parênteses (ex.: "Quero ser voluntário(a)"): precisa chegar intacto ao app. → teste na Task 3.
3. Rota de projeto com slug que não existe (`/projetos/xyz`): 404 do site, não erro 500. → teste na Task 5.
4. Imagem registrada no código mas sem arquivo em `public/imagens/` (ou fora do `docs/imagens.md`): imagem quebrada no site, ou nome que o usuário não sabe que precisa colar. → teste de consistência na Task 4.
5. Menu do celular aberto, ao navegar: precisa fechar, e `aria-expanded` refletir o estado. → teste na Task 4.

---

### Task 1: Projeto Next.js, Docker e testes

**Files:**
- Create: `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `vitest.config.mts`, `tests/setup.ts`, `.node-version`, `.gitignore`, `.dockerignore`, `Dockerfile`, `docker-compose.yml`, `.env.example`, `app/layout.tsx`, `app/page.tsx` (provisória), `AGENTS.md` (gerado pelo `next dev`)
- Test: `tests/sanidade.test.ts`

- [ ] **Step 1:** Confirme que está na branch `dev` (`git branch --show-current`). Ela já existe, criada a partir da `main`.
- [ ] **Step 2:** Gere o app com `npx create-next-app@16.3.5` (TypeScript, Tailwind, ESLint, App Router, sem `src/`, alias `@/*`, npm) **numa pasta temporária** (o diretório já tem `README.md`, `CLAUDE.md` e `docs/`, que o create-next-app recusa) e mova os arquivos para a raiz, sem sobrescrever `README.md`. Fixe `next` e `eslint-config-next` em `16.3.5`, `react`/`react-dom` em `19.2.8`, `"engines": {"node": "24.x"}`, `.node-version` = `24.11.0`. Apague os SVGs e o conteúdo de exemplo do template.
- [ ] **Step 3:** `next.config.ts`: `output: "standalone"`, `devIndicators: false`. Nada condicionado a `VERCEL`.
- [ ] **Step 4:** Instale os devDependencies de teste: `vitest@4.1.11`, `@vitejs/plugin-react@6.1.1`, `jsdom@30.0.1`, `@testing-library/react@16.3.3`, `@testing-library/dom@10.4.2`, `@testing-library/jest-dom@6.1.1`, `@testing-library/user-event`, `vitest-axe@0.1.0`, `axe-core@4.13.0`. `vitest.config.mts` com ambiente `jsdom`, alias `@` → raiz e `setupFiles: ["tests/setup.ts"]` (importa `@testing-library/jest-dom/vitest`). Script `"test": "vitest --run"`.
- [ ] **Step 5:** Escreva `tests/sanidade.test.ts` com `expect(1 + 1).toBe(2)` e rode `npx vitest --run`. Esperado: 1 passed.
- [ ] **Step 6:** `Dockerfile` com estágios `base` (`node:24.11.0-slim`, usuário `node`), `deps` (`npm ci`), `dev` (`npm run dev`, código montado), `builder` (`npm run build`, sem nenhuma variável de ambiente) e `runner` (copia `public/`, `.next/standalone`, `.next/static`; `CMD ["node", "server.js"]`, `PORT=3000`, `HOSTNAME=0.0.0.0`). Use o `Dockerfile` de `../capao-grande-website` como referência, sem os estágios e comentários do Payload. `.dockerignore` exclui `.env*` (menos `.env.example`), `node_modules`, `.next`, `.git`, `.claude`, `docs`, `tests`.
- [ ] **Step 7:** `docker-compose.yml` com um serviço `app` (`target: dev`, volumes `./:/app` e `/app/node_modules` e `/app/.next`, porta `${APP_PORT:-3000}:3000`). `.env.example` só com `APP_PORT=3000`.
- [ ] **Step 8:** Rode `npm run dev` uma vez para o Next gerar o `AGENTS.md`. Garanta que `CLAUDE.md` comece com `@AGENTS.md` (sem mudar o resto). Leia em `node_modules/next/dist/docs/` os guias de layouts, rotas dinâmicas e `next/font`.
- [ ] **Step 9:** Verifique: `npx tsc --noEmit`, `npx eslint .`, `npm run build` (gera `.next/standalone/server.js`) e `docker build --target runner -t conexao-saude-website:local .`. Todos sem erro.
- [ ] **Step 10:** Commit: `chore: projeto Next.js 16 standalone com Docker e Vitest`.

### Task 2: Design system (tokens, fontes, classes `ics-*`)

**Files:**
- Modify: `app/globals.css`, `app/layout.tsx`
- Create: `lib/fontes.ts`
- Test: `tests/design-system.test.ts`

**Interfaces:**
- Produces: variáveis CSS `--surface`, `--surface-raised`, `--surface-sunken`, `--line`, `--line-strong`, `--ink`, `--ink-muted`, `--brand`, `--brand-strong`, `--on-brand`, `--olive`, `--olive-soft`, `--lime`, `--on-lime`, `--earth`, `--earth-soft`, `--danger`, `--danger-soft`, `--focus`, `--space-*`, `--radius-sm|md|lg|pill`, `--container`, `--shadow-card`, `--shadow-raised`, `--font-display`, `--font-sans`; cores no `@theme` do Tailwind com os mesmos nomes (`bg-brand`, `text-ink-muted`…); classes `ics-btn`, `ics-btn--primary|highlight|secondary|ghost|sm`, `ics-tag`, `ics-tag--earth|lime`, `ics-link`, e as utilitárias do canvas `wrap`, `sec`, `over`, `dsp`, `h1`, `h2`, `h3`, `lead`, `muted`, `small`, `cols`, `c2`, `c3`, `c4`, `c57`, `c75`, `stack`, `row`, `rule`, `ph`, `ticks`, `ticks-inv`, `facts`, `crumb`, `chip`, `chip-on`, `panel`, `m-full`, `hide-sm`, `sticky`.

- [ ] **Step 1:** Escreva `tests/design-system.test.ts`: lê `app/globals.css` como texto e afirma que contém `--brand: #256609`, `--lime: #a3c844`, `--surface: #fafaf5`, `--ink: #1e2617`, `--radius-pill: 999px`, `--container: 1160px` e as regras `.ics-btn--primary`, `.ics-btn--highlight`, `.ics-tag--earth`.
- [ ] **Step 2:** Rode e veja falhar.
- [ ] **Step 3:** Em `app/globals.css`: o `:root` e as regras `ics-*` vêm do CSS do design system (asset `8b0860bc4529b99b0604fe9dc1e6f298` do artifact, lido com `mcp__claude-artifacts__read_asset`), só o tema claro. As utilitárias (`.wrap`, `.dsp`, …) e o bloco `@media (max-width:900px)` vêm do `<style>` de `project/Contato.dc.html`, trocando os hex pelos tokens e omitindo as regras `.m …` (só servem ao preview do canvas). `.hdr`, `.sheet`, `.ft` e `.brand` ficam para a Task 4.
- [ ] **Step 4:** `lib/fontes.ts`: `export const fredoka` (`Fredoka`, pesos 400–700, `variable: "--font-fredoka"`) e `export const nunito` (`Nunito`, 400–800, `variable: "--font-nunito"`), ambos `subsets: ["latin"]`, `display: "swap"`. `--font-display` e `--font-sans` passam a usar essas variáveis primeiro. `app/layout.tsx`: `<html lang="pt-BR">` com as duas classes `variable`, metadata `title: { default: "Instituto Conexão Saúde", template: "%s — Instituto Conexão Saúde" }` e descrição do rodapé do canvas.
- [ ] **Step 5:** Rode os testes, `tsc` e `eslint`. Esperado: tudo passa.
- [ ] **Step 6:** Commit: `feat: design system do instituto (tokens, fontes e classes ics)`.

### Task 3: Contato por e-mail e WhatsApp

**Files:**
- Create: `lib/contato.ts`, `components/LinkEmail.tsx`
- Test: `tests/contato.test.ts`, `tests/LinkEmail.test.tsx`

**Interfaces:**
- Produces:
  - `CONTATO: { email: string; whatsapp: string; whatsappExibicao: string; instagram: string; instagramUrl: string | null; mensagemPadrao: string }` com os valores do canvas: `email = "contato@institutoconexaosaude.org.br"`, `whatsapp = "5575900000000"`, `whatsappExibicao = "[(75) 9 0000-0000]"`, `instagram = "[@institutoconexaosaude]"`, `instagramUrl = null`, `mensagemPadrao = "Olá! Vim pelo site do Instituto Conexão Saúde."`.
  - `linkWhatsApp(texto?: string): string` → `https://wa.me/<whatsapp>` mais `?text=<encodeURIComponent(texto)>` quando há texto.
  - `linkMailto(assunto: string, corpo?: string): string` → `mailto:<email>?subject=<enc>` mais `&body=<enc>` quando há corpo.
  - `<LinkEmail assunto: string; corpo?: string; className?: string; "aria-label"?: string; children>`: client component; renderiza `<a href="/contato">`; no clique, `preventDefault()` e `window.open(linkMailto(assunto, corpo), "_self")`.

- [ ] **Step 1:** Testes em `tests/contato.test.ts`:
  - `CONTATO.whatsapp` casa com `/^55\d{10,11}$/`;
  - `linkWhatsApp()` é `"https://wa.me/5575900000000"`;
  - `linkWhatsApp("Olá! Quero ser voluntário(a).")` é `"https://wa.me/5575900000000?text=Ol%C3%A1!%20Quero%20ser%20volunt%C3%A1rio(a)."`, e `decodeURIComponent` do `text` devolve o original;
  - texto com `&`, `?` e `\n` decodifica igual ao original (Review Focus 2);
  - `linkMailto("Contato pelo site")` é `"mailto:contato@institutoconexaosaude.org.br?subject=Contato%20pelo%20site"`;
  - `linkMailto("Proposta de parceria", "Instituição:\nResponsável:")` contém `&body=Institui%C3%A7%C3%A3o%3A%0ARespons%C3%A1vel%3A`.
- [ ] **Step 2:** Testes em `tests/LinkEmail.test.tsx`:
  - o `href` renderizado é `/contato` e não contém `mailto:` (Review Focus 1);
  - com `vi.spyOn(window, "open")`, o clique chama `window.open("mailto:contato@institutoconexaosaude.org.br?subject=Imprensa", "_self")`.
- [ ] **Step 3:** Rode e veja falhar.
- [ ] **Step 4:** Implemente `lib/contato.ts` e `components/LinkEmail.tsx`.
- [ ] **Step 5:** Rode os testes. Esperado: passam.
- [ ] **Step 6:** Commit: `feat: links de contato por e-mail e WhatsApp`.

### Task 4: Casca do site (mapa de imagens, header, menu do celular, rodapé)

**Files:**
- Create: `content/imagens.ts`, `docs/imagens.md`, `scripts/gerar-placeholders.mjs`, `public/imagens/logo.png` (provisório gerado), `components/Imagem.tsx`, `components/Cabecalho.tsx`, `components/MenuCelular.tsx`, `components/Rodape.tsx`, `components/Marca.tsx`
- Modify: `package.json` (devDependency `sharp@0.34.5`, script `"imagens:placeholders": "node scripts/gerar-placeholders.mjs"`), `app/layout.tsx`, `app/globals.css` (regras `.hdr`, `.hdr-in`, `.brand`, `.brand-t`, `.nav`, `.menu-btn`, `.sheet`, `.ft`, `.ft-in`, `.ft-b`, `.ft-about`)
- Test: `tests/imagens.test.ts`, `tests/Imagem.test.tsx`, `tests/Cabecalho.test.tsx`

**Interfaces:**
- Consumes: `CONTATO`, `linkWhatsApp`, `LinkEmail` (Task 3).
- Produces:
  - `IMAGENS` em `content/imagens.ts`, declarado `as const satisfies Record<string, { arquivo: string; alt: string; largura: number; altura: number; noCanvas: boolean }>`, e `type ImagemId = keyof typeof IMAGENS`. `arquivo` é o nome final em `public/imagens/`: minúsculas, sem acento, hífens, prefixo pela página (`logo.png`, `inicio-hero.jpg`, `projeto-yoga-capa.jpg`, …), extensão igual à da foto original (`.jpg` para foto, `.png` para logo). `noCanvas` diz se o canvas já tem a foto (`<img>`) ou só o placeholder (`.ph`). Nesta tarefa, só a entrada `logo` (`arquivo: "logo.png"`, `alt: ""` porque o texto da marca está ao lado, `largura: 52`, `altura: 52`, `noCanvas: true`); as tarefas de página acrescentam as suas.
  - `docs/imagens.md`: instrução curta ("copie a foto com o nome exato para `public/imagens/`, substituindo o provisório") e uma tabela `| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |`, uma linha por entrada de `IMAGENS`.
  - `scripts/gerar-placeholders.mjs`: para cada entrada de `IMAGENS` (lê `content/imagens.ts` como texto, com regex sobre `arquivo:`/`largura:`/`altura:`, para não precisar de TypeScript), cria `public/imagens/<arquivo>` **só se ainda não existir**, com sharp a partir de um SVG: fundo `#e6ead6`, texto `#55604a` em duas linhas ("Foto a receber" e o nome do arquivo), no tamanho `largura × altura`. Nunca sobrescreve arquivo existente.
  - `<Imagem id: ImagemId; className?: string; style?: CSSProperties; priority?: boolean; sizes?: string>`: sempre `next/image` com `src={"/imagens/" + arquivo}`, `alt`, `width`/`height` do registro.
  - `ROTAS_MENU: { href: string; rotulo: string }[]` = Início `/`, Quem somos `/quem-somos`, Projetos `/projetos`, Parcerias `/parcerias`, Contato `/contato`.

- [ ] **Step 1:** Testes em `tests/imagens.test.ts` (Review Focus 4), válidos para todas as entradas que as tarefas seguintes acrescentarem:
  - todo `arquivo` de `IMAGENS` casa com `/^[a-z0-9]+(-[a-z0-9]+)*\.(jpg|png)$/` e não se repete;
  - todo `arquivo` existe em `public/imagens/`;
  - todo `arquivo` aparece numa linha da tabela de `docs/imagens.md`, e a tabela não cita arquivo que não esteja em `IMAGENS`.
- [ ] **Step 1b:** Teste em `tests/Imagem.test.tsx`: `<Imagem id="logo" />` renderiza um `<img>` com `alt=""` e `src` contendo `logo.png`.
- [ ] **Step 2:** Testes em `tests/Cabecalho.test.tsx` (mock de `next/navigation` com `usePathname`):
  - em `/projetos/yoga`, o link "Projetos" do menu principal tem `aria-current="page"` e os outros não;
  - o botão "Menu" começa com `aria-expanded="false"`, vira `"true"` no clique e mostra a navegação "Menu";
  - mudando o `usePathname` com o menu aberto (rerender), o menu fecha e `aria-expanded` volta a `"false"` (Review Focus 5).
- [ ] **Step 3:** Rode e veja falhar.
- [ ] **Step 4:** Implemente a partir do `<header>` e do `<footer>` de `project/Contato.dc.html`. O header é server component com `MenuCelular` client (estado aberto/fechado, fecha quando `usePathname` muda). "Apoie" → `/parcerias`; "Chamar no WhatsApp" → `linkWhatsApp(CONTATO.mensagemPadrao)` com `target="_blank" rel="noopener"`; links de e-mail do rodapé via `<LinkEmail assunto="Contato pelo site">`; Instagram usa `CONTATO.instagramUrl` e, se for `null`, aparece como texto `Instagram [link]` sem link. `Marca` usa `<Imagem id="logo">`. O layout monta header, `<main>` e rodapé. Escreva `content/imagens.ts`, `docs/imagens.md` e o script, e rode `npm run imagens:placeholders` para gerar `public/imagens/logo.png`.
- [ ] **Step 5:** Rode os testes, `tsc` e `eslint`. Esperado: passam. Rode o script de novo e confira que ele não altera o `logo.png` existente (`git status` limpo nesse arquivo).
- [ ] **Step 6:** Commit: `feat: cabeçalho, menu do celular, rodapé e mapa de imagens`.

### Task 5: Projetos (conteúdo, página do projeto e listagem com filtro)

**Files:**
- Create: `content/projetos.ts`, `components/projeto/PaginaProjeto.tsx`, `components/projeto/CartaoProjeto.tsx`, `components/projeto/ListaProjetos.tsx`, `app/projetos/page.tsx`, `app/projetos/[slug]/page.tsx`, `app/not-found.tsx`
- Test: `tests/projetos.test.ts`, `tests/PaginaProjeto.test.tsx`, `tests/ListaProjetos.test.tsx`

**Interfaces:**
- Consumes: `Imagem`, `ImagemId`, `linkWhatsApp`.
- Produces:
  ```ts
  type Area = "saude" | "esporte" | "cultura" | "educacao";
  const AREAS: Record<Area, { rotulo: string; tag: "" | "earth" | "lime" }>;
  type Projeto = {
    slug: string; nome: string; area: Area;
    resumo: string;            // texto do cartão
    status: string;            // tag lima, ex. "Ativo · Desde 2024"
    lead: string;              // parágrafo ao lado do título
    imagem: ImagemId;          // capa: hero da página e foto do cartão (projeto-<slug>-capa.*)
    destaques: { valor: string; legenda: string }[];
    sobre: string[];
    beneficiosTitulo: string; beneficios: string[];
    ficha: { rotulo: string; valor: string }[];
    patrocinio: { titulo: string; texto: string; itens: string[] };
    ancoraParceria: string;    // "p-Yoga" → /parcerias#p-Yoga
    mensagemWhatsApp: string;
    outros: string[];          // slugs, na ordem do canvas
  };
  const PROJETOS: Projeto[];   // ordem da página Projetos do canvas
  function projetoPorSlug(slug: string): Projeto | undefined;
  ```
  `<CartaoProjeto projeto>` (usado também na Task 6) e `<PaginaProjeto projeto>` (apresentação pura, sem `params`).

- [ ] **Step 1:** Testes em `tests/projetos.test.ts`:
  - `PROJETOS.map(p => p.slug)` é exatamente `["programa-conexao-saude", "yoga", "futebol-vale-jogar", "corrida-em-trilha", "circo", "ciranda-cultural", "yurta-curumim"]` em alguma ordem, sem repetição;
  - todo slug em `outros` existe e é diferente do próprio projeto;
  - `projetoPorSlug("xyz")` é `undefined` (Review Focus 3);
  - `projetoPorSlug("yoga")` tem `nome = "Aulas regulares de Yoga"`, `area = "saude"`, `status = "Ativo · Desde 2024"`, `ancoraParceria = "p-Yoga"` e uma linha de ficha `{ rotulo: "Coordenação", valor: "Denise Debiasi" }`.
- [ ] **Step 2:** Testes em `tests/PaginaProjeto.test.tsx` com o projeto `yoga`:
  - `h1` "Aulas regulares de Yoga";
  - o link "Quero participar" é `linkWhatsApp("Olá! Quero saber como participar do projeto Aulas regulares de Yoga.")`;
  - os dois links "Patrocinar este projeto" apontam para `/parcerias#p-Yoga`;
  - o breadcrumb tem link para `/projetos`;
  - "Outros projetos" lista 3 cartões com links `/projetos/futebol-vale-jogar`, `/projetos/corrida-em-trilha`, `/projetos/circo`.
- [ ] **Step 3:** Testes em `tests/ListaProjetos.test.tsx`: começa com os 7 cartões e o chip "Todos" com `aria-pressed="true"`; clicar em "Cultura" deixa só os projetos de `area: "cultura"` e passa `aria-pressed="true"` para "Cultura".
- [ ] **Step 4:** Rode e veja falhar.
- [ ] **Step 5:** Preencha `content/projetos.ts` lendo as 7 telas `project/Projeto*.dc.html` e `project/Projetos.dc.html`. Registre a capa de cada projeto em `content/imagens.ts` e `docs/imagens.md` (`projeto-<slug>-capa.jpg`, `alt` do `<img>` do canvas; quando o canvas só tem o placeholder, `alt` = "Foto de <nome>" e `noCanvas: false`; se o hero e o cartão do canvas usarem fotos diferentes, registre as duas) e rode `npm run imagens:placeholders`. Se alguma tela tiver uma seção fora do molde acima, adicione um campo opcional ao tipo, renderize-o em `PaginaProjeto` e registre isso no relatório da tarefa.
- [ ] **Step 6:** Implemente `PaginaProjeto` a partir de `project/ProjetoYoga.dc.html`, mantendo o aviso "Novidades do projeto … Em breve". `app/projetos/[slug]/page.tsx`: `generateStaticParams` com os 7 slugs, `dynamicParams = false`, `generateMetadata` com `title = nome` e `description = lead`, e `notFound()` se `projetoPorSlug` não achar. `app/not-found.tsx` com o visual do site e link para `/`. `app/projetos/page.tsx` a partir de `project/Projetos.dc.html`, usando `ListaProjetos` (client, filtro em estado local).
- [ ] **Step 7:** Rode os testes, `tsc`, `eslint` e `npm run build`. A saída do build lista `/projetos/[slug]` com os 7 caminhos gerados estaticamente.
- [ ] **Step 8:** Commit: `feat: páginas de projetos com filtro por área`.

### Task 6: Início e Quem somos

**Files:**
- Create: `app/page.tsx` (substitui a provisória), `app/quem-somos/page.tsx`, `content/inicio.ts`, `content/quem-somos.ts` (só se a página tiver listas repetidas: números, linha do tempo, equipe; texto corrido fica no JSX)
- Test: `tests/paginas-inicio-quem-somos.test.tsx`

**Interfaces:**
- Consumes: `Imagem`, `CartaoProjeto`, `PROJETOS`, `linkWhatsApp`, `LinkEmail`, `CONTATO`.

- [ ] **Step 1:** Teste: renderiza `<Inicio />` e `<QuemSomos />` e confere o `h1` de cada um, com o texto exato do canvas (`project/Main.dc.html` e `project/QuemSomos.dc.html`), e que a home tem link para `/projetos`.
- [ ] **Step 2:** Rode e veja falhar.
- [ ] **Step 3:** Implemente as duas páginas a partir das telas do canvas, com `metadata.title` "Quem somos" na segunda (a home usa o título padrão). Registre as imagens delas (`inicio-*`, `quem-somos-*`) em `content/imagens.ts` e `docs/imagens.md` e rode `npm run imagens:placeholders`. Cartões de projeto da home usam `CartaoProjeto` com os projetos de `PROJETOS`.
- [ ] **Step 4:** Rode os testes, `tsc` e `eslint`. Esperado: passam.
- [ ] **Step 5:** Commit: `feat: páginas Início e Quem somos`.

### Task 7: Parcerias e Contato

**Files:**
- Create: `app/parcerias/page.tsx`, `app/contato/page.tsx`, `content/parcerias.ts` (patrocínios por projeto e formas de apoio, se repetidos no canvas)
- Test: `tests/paginas-parcerias-contato.test.tsx`

**Interfaces:**
- Consumes: `PROJETOS` (`ancoraParceria`), `Imagem`, `linkWhatsApp`, `LinkEmail`, `CONTATO`.

- [ ] **Step 1:** Testes:
  - `<Parcerias />` tem um elemento com `id` igual ao `ancoraParceria` de cada um dos 7 projetos;
  - `<Contato />` tem os 4 atalhos ("Quero participar de um projeto", "Inscrever meu filho ou filha", "Quero ser voluntário(a)", "Imprensa"), cada um com um link de WhatsApp `linkWhatsApp("Olá! <assunto>.")` e um botão de e-mail cujo clique abre `linkMailto(<assunto>)`;
  - o botão "Enviar proposta por e-mail" abre `linkMailto("Proposta de parceria", corpo)`, com o corpo do roteiro do canvas (Instituição, Responsável e cargo, Projeto ou área de interesse, Tipo de apoio);
  - o e-mail e o telefone aparecem escritos na página de Contato (`CONTATO.email`, `CONTATO.whatsappExibicao`).
- [ ] **Step 2:** Rode e veja falhar.
- [ ] **Step 3:** Implemente a partir de `project/Parcerias.dc.html` e `project/Contato.dc.html`. "Abrir no mapa" mantém o link do Google Maps do canvas, com `target="_blank" rel="noopener"`. Registre as imagens delas (`parcerias-*`, `contato-*`) em `content/imagens.ts` e `docs/imagens.md` e rode `npm run imagens:placeholders`.
- [ ] **Step 4:** Rode os testes, `tsc` e `eslint`. Esperado: passam.
- [ ] **Step 5:** Commit: `feat: páginas Parcerias e Contato`.

### Task 8: Auditoria de links e acessibilidade, docs e verificação final

**Files:**
- Create: `tests/auditoria.test.tsx`
- Modify: `CLAUDE.md`, `README.md`

- [ ] **Step 0:** Confira que `docs/imagens.md` cobre todas as imagens das 12 páginas (o teste da Task 4 garante a consistência com o código) e que a tabela está agrupada por página.
- [ ] **Step 1:** Em `tests/auditoria.test.tsx`, renderize as 12 páginas (componentes das Tasks 5–7, projetos via `PaginaProjeto` com cada item de `PROJETOS`) dentro de cabeçalho e rodapé. Para cada página:
  - nenhum `href` começa com `mailto:` nem termina em `.dc.html`;
  - todo `href` com `wa.me` casa com `/^https:\/\/wa\.me\/55\d{10,11}(\?text=[^\s]+)?$/`;
  - todo `href` interno (começa com `/`) aponta para uma das rotas do site (`/`, `/quem-somos`, `/projetos`, `/projetos/<slug existente>`, `/parcerias`, `/contato`), com âncora opcional; âncora para `/parcerias` precisa existir como `id` na página Parcerias;
  - todo link com `target="_blank"` tem `rel` contendo `noopener`;
  - `axe` (vitest-axe) sem violações.
- [ ] **Step 2:** Rode. Corrija nas páginas o que falhar, sem afrouxar o teste.
- [ ] **Step 3:** `CLAUDE.md`: troque "Ainda sem código" pela situação atual. Na seção "Comandos": dev (`cp .env.example .env && docker compose up -d --build`, ou `npm run dev`), testes (`npx vitest --run`), typecheck (`npx tsc --noEmit`), lint (`npx eslint .`), build (`npm run build`). Em "Estrutura": `content/` (conteúdo e imagens), `lib/contato.ts`, `components/`. Em "Cuidados": "Imagens: nome fixo em `content/imagens.ts` e `docs/imagens.md`; arquivo em `public/imagens/` (provisório gerado por `npm run imagens:placeholders` até a foto real chegar)". `README.md`: seção "Como rodar" com os mesmos comandos de dev e build Docker (`docker build --target runner .`).
- [ ] **Step 4:** Verificação final: `npx tsc --noEmit`, `npx vitest --run`, `npx eslint .`, `npm run build` e `docker build --target runner -t conexao-saude-website:local .`, depois `docker run --rm -p 3100:3000 conexao-saude-website:local` e `curl -sf http://localhost:3100/ http://localhost:3100/projetos/yoga http://localhost:3100/contato > /dev/null`. Esperado: tudo sem erro; `curl -s -o /dev/null -w "%{http_code}" http://localhost:3100/projetos/xyz` devolve `404`.
- [ ] **Step 5:** Commit: `test: auditoria de links e acessibilidade; docs do projeto`.
