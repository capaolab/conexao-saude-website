import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Inicio from "@/app/page";
import QuemSomos, { metadata } from "@/app/quem-somos/page";

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
});
