import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Rodape from "@/components/Rodape";
import { CONTATO } from "@/lib/contato";

describe("Rodape", () => {
  it("o Instagram é link que abre em nova aba", () => {
    render(<Rodape />);
    const ig = screen.getByRole("link", { name: "Instagram" });
    expect(ig.getAttribute("href")).toBe(CONTATO.instagramUrl);
    expect(ig.getAttribute("target")).toBe("_blank");
    expect(ig.getAttribute("rel")).toBe("noopener");
  });

  it("não pede CNPJ e credita a Capão Lab", () => {
    const { container } = render(<Rodape />);
    const texto = container.textContent ?? "";
    expect(texto).not.toContain("CNPJ");
    expect(texto).not.toContain("Site por");
    expect(texto).toContain("© 2026 Instituto Conexão Saúde");
    expect(texto).toContain("por Capão Lab");
  });

  it("o crédito tem link para a Capão Lab em nova aba", () => {
    render(<Rodape />);
    const link = screen.getByRole("link", { name: "Capão Lab" });
    expect(link.getAttribute("href")).toBe("https://www.capaolab.com.br/");
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener");
  });
});
