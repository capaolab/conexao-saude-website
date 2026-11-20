import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";

vi.mock("next/navigation", () => ({ usePathname: () => "/" }));

import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import PaginaProjeto from "@/components/projeto/PaginaProjeto";
import Inicio from "@/app/page";
import QuemSomos from "@/app/quem-somos/page";
import Projetos from "@/app/projetos/page";
import Parcerias from "@/app/parcerias/page";
import Contato from "@/app/contato/page";
import { PROJETOS } from "@/content/projetos";

const SLUGS = PROJETOS.map((p) => p.slug);
const ROTAS = ["/", "/quem-somos", "/projetos", "/parcerias", "/contato", ...SLUGS.map((s) => `/projetos/${s}`)];

const PAGINAS: { nome: string; elemento: ReactElement }[] = [
  { nome: "/", elemento: <Inicio /> },
  { nome: "/quem-somos", elemento: <QuemSomos /> },
  { nome: "/projetos", elemento: <Projetos /> },
  ...PROJETOS.map((p) => ({ nome: `/projetos/${p.slug}`, elemento: <PaginaProjeto projeto={p} /> })),
  { nome: "/parcerias", elemento: <Parcerias /> },
  { nome: "/contato", elemento: <Contato /> },
];

function renderizar(elemento: ReactElement) {
  return render(
    <>
      <Cabecalho />
      <main>{elemento}</main>
      <Rodape />
    </>,
  );
}

const idsParcerias = (() => {
  const { container } = renderizar(<Parcerias />);
  return new Set(Array.from(container.querySelectorAll("[id]")).map((e) => e.id));
})();

describe("auditoria das 12 páginas", () => {
  it("cobre as 12 páginas", () => {
    expect(PAGINAS).toHaveLength(12);
  });

  describe.each(PAGINAS)("$nome", ({ elemento }) => {
    it("links de contato, internos e target=_blank estão corretos", () => {
      const { container } = renderizar(elemento);
      const links = Array.from(container.querySelectorAll("a[href]"));
      expect(links.length).toBeGreaterThan(0);
      for (const a of links) {
        const href = a.getAttribute("href")!;
        expect(href.startsWith("mailto:"), href).toBe(false);
        expect(href.endsWith(".dc.html"), href).toBe(false);
        if (href.includes("wa.me")) {
          expect(href).toMatch(/^https:\/\/wa\.me\/55\d{10,11}(\?text=[^\s]+)?$/);
        }
        if (href.startsWith("/")) {
          const [caminho, ancora] = href.split("#");
          expect(ROTAS, href).toContain(caminho);
          if (ancora !== undefined && caminho === "/parcerias") {
            expect(idsParcerias.has(ancora), href).toBe(true);
          }
        }
        if (a.getAttribute("target") === "_blank") {
          expect(a.getAttribute("rel") ?? "", href).toContain("noopener");
        }
      }
    });

    it("não tem violações de acessibilidade (axe)", async () => {
      const { container } = renderizar(elemento);
      // color-contrast fica de fora: o jsdom não calcula layout nem estilos do Tailwind,
      // então a regra não é confiável aqui. Nenhuma outra regra é desligada.
      const resultado = await axe(container, { rules: { "color-contrast": { enabled: false } } });
      expect(resultado.violations).toEqual([]);
    });
  });
});
