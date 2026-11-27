import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Inicio from "@/app/page";
import QuemSomos, { metadata } from "@/app/quem-somos/page";
import { EQUIPE } from "@/content/quem-somos";

describe("Início", () => {
  it("mostra o h1 do canvas e links para os projetos", () => {
    const { container } = render(<Inicio />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Saúde integral, em conexão com a natureza",
    );
    expect(container.querySelector('a[href="/projetos"]')).not.toBeNull();
    expect(container.querySelector('a[href="/projetos/yoga"]')).not.toBeNull();
    expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
  });
});

describe("Quem somos", () => {
  it("mostra o h1 do canvas e o título da página", () => {
    render(<QuemSomos />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Um instituto que já nasce gigante",
    );
    expect(metadata.title).toBe("Quem somos");
  });

  it("mostra os 7 coordenadores com foto, cargo e currículo", () => {
    render(<QuemSomos />);
    expect(EQUIPE).toHaveLength(7);
    expect(screen.queryByText(/Fotos da equipe a receber/)).toBeNull();
    for (const e of EQUIPE) {
      const titulo = screen.getByRole("heading", { level: 3, name: e.nome });
      const item = titulo.closest("li")!;
      expect(within(item).getByText(e.cargo)).toBeInTheDocument();
      expect(within(item).getByText(e.bio)).toBeInTheDocument();
      expect(item.querySelector(`img[src*="${e.imagem}"]`), e.nome).not.toBeNull();
    }
  });
});
