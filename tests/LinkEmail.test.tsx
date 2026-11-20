import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import LinkEmail from "@/components/LinkEmail";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("LinkEmail", () => {
  it("href é /contato e não contém mailto:", () => {
    render(<LinkEmail assunto="Imprensa">E-mail</LinkEmail>);
    const href = screen.getByRole("link", { name: "E-mail" }).getAttribute("href");
    expect(href).toBe("/contato");
    expect(href).not.toContain("mailto:");
  });
  it("clique abre o mailto no próprio contexto", () => {
    const open = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<LinkEmail assunto="Imprensa">E-mail</LinkEmail>);
    fireEvent.click(screen.getByRole("link", { name: "E-mail" }));
    expect(open).toHaveBeenCalledWith(
      "mailto:contato@institutoconexaosaude.org.br?subject=Imprensa",
      "_self",
    );
  });
});
