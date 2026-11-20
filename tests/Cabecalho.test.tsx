import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

let caminho = "/projetos/yoga";
vi.mock("next/navigation", () => ({ usePathname: () => caminho }));

import Cabecalho from "@/components/Cabecalho";

beforeEach(() => {
  caminho = "/projetos/yoga";
});

describe("Cabecalho", () => {
  it("marca Projetos como página atual em /projetos/yoga", () => {
    render(<Cabecalho />);
    const nav = screen.getByRole("navigation", { name: "Principal" });
    const links = within(nav).getAllByRole("link");
    expect(links.map((l) => l.textContent)).toEqual([
      "Início",
      "Quem somos",
      "Projetos",
      "Parcerias",
      "Contato",
    ]);
    for (const l of links) {
      if (l.textContent === "Projetos") {
        expect(l).toHaveAttribute("aria-current", "page");
      } else {
        expect(l).not.toHaveAttribute("aria-current");
      }
    }
  });

  it("Início só é atual em /", () => {
    caminho = "/";
    render(<Cabecalho />);
    const nav = screen.getByRole("navigation", { name: "Principal" });
    expect(within(nav).getByRole("link", { name: "Início" })).toHaveAttribute("aria-current", "page");
    expect(within(nav).getByRole("link", { name: "Projetos" })).not.toHaveAttribute("aria-current");
  });

  it("botão Menu abre e mostra a navegação Menu", () => {
    render(<Cabecalho />);
    const btn = screen.getByRole("button", { name: "Menu" });
    expect(btn).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Menu" })).toBeNull();
    fireEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: "Menu" })).toBeInTheDocument();
  });

  it("fecha o menu quando a rota muda", () => {
    const { rerender } = render(<Cabecalho />);
    const btn = screen.getByRole("button", { name: "Menu" });
    fireEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
    caminho = "/contato";
    rerender(<Cabecalho />);
    expect(btn).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Menu" })).toBeNull();
  });

  it("fecha o menu ao tocar num link da folha, mesmo da página atual", () => {
    caminho = "/projetos";
    render(<Cabecalho />);
    const btn = screen.getByRole("button", { name: "Menu" });
    fireEvent.click(btn);
    const folha = screen.getByRole("navigation", { name: "Menu" });
    fireEvent.click(within(folha).getByRole("link", { name: /Projetos/ }));
    expect(btn).toHaveAttribute("aria-expanded", "false");
  });

  it("fecha o menu com Escape e devolve o foco ao botão", () => {
    render(<Cabecalho />);
    const btn = screen.getByRole("button", { name: "Menu" });
    fireEvent.click(btn);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(btn).toHaveAttribute("aria-expanded", "false");
    expect(btn).toHaveFocus();
  });
});
