import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import BioExpansivel from "@/components/BioExpansivel";
import QuemSomos from "@/app/quem-somos/page";
import { EQUIPE } from "@/content/quem-somos";

const TEXTO = "Texto longo do currículo. ".repeat(20).trim();

describe("BioExpansivel", () => {
  it("começa recolhido, com o texto inteiro no HTML e o botão Saiba mais", () => {
    render(<BioExpansivel texto={TEXTO} nome="Fulana" />);
    const bio = screen.getByText(TEXTO);
    expect(bio).toHaveClass("bio");
    expect(bio).not.toHaveClass("bio--aberta");
    const botao = screen.getByRole("button", { name: "Saiba mais sobre Fulana" });
    expect(botao).toHaveAttribute("aria-expanded", "false");
    expect(botao).toHaveAttribute("aria-controls", bio.id);
  });

  it("expande e recolhe ao clicar", () => {
    render(<BioExpansivel texto={TEXTO} nome="Fulana" />);
    const bio = screen.getByText(TEXTO);
    fireEvent.click(screen.getByRole("button", { name: "Saiba mais sobre Fulana" }));
    expect(bio).toHaveClass("bio--aberta");
    const botao = screen.getByRole("button", { name: "Mostrar menos sobre Fulana" });
    expect(botao).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(botao);
    expect(bio).not.toHaveClass("bio--aberta");
    expect(screen.getByRole("button", { name: "Saiba mais sobre Fulana" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("não tem violações de acessibilidade, aberto ou fechado", async () => {
    const { container } = render(<BioExpansivel texto={TEXTO} nome="Fulana" />);
    expect((await axe(container)).violations).toEqual([]);
    fireEvent.click(screen.getByRole("button", { name: "Saiba mais sobre Fulana" }));
    expect((await axe(container)).violations).toEqual([]);
  });
});

describe("Quem somos: currículos recolhidos", () => {
  it("cada coordenador tem seu próprio Saiba mais, com ids distintos", () => {
    render(<QuemSomos />);
    const ids = new Set<string>();
    for (const e of EQUIPE) {
      const item = screen.getByRole("heading", { level: 3, name: e.nome }).closest("li")!;
      const botao = within(item).getByRole("button", { name: `Saiba mais sobre ${e.nome}` });
      const alvo = botao.getAttribute("aria-controls")!;
      expect(within(item).getByText(e.bio).id).toBe(alvo);
      ids.add(alvo);
    }
    expect(ids.size).toBe(EQUIPE.length);
  });
});
