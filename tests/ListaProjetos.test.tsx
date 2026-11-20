import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ListaProjetos from "@/components/projeto/ListaProjetos";
import { PROJETOS } from "@/content/projetos";

const cartoes = () =>
  screen.getAllByRole("link").filter((a) => a.getAttribute("href")?.startsWith("/projetos/"));

describe("ListaProjetos", () => {
  it("começa com os 7 cartões e Todos marcado", () => {
    render(<ListaProjetos />);
    expect(cartoes()).toHaveLength(7);
    expect(screen.getByRole("button", { name: "Todos" })).toHaveAttribute("aria-pressed", "true");
  });

  it("filtra por área ao clicar no chip", async () => {
    render(<ListaProjetos />);
    await userEvent.click(screen.getByRole("button", { name: "Cultura" }));
    const esperados = PROJETOS.filter((p) => p.area === "cultura").map((p) => "/projetos/" + p.slug);
    expect(cartoes().map((a) => a.getAttribute("href"))).toEqual(esperados);
    expect(screen.getByRole("button", { name: "Cultura" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Todos" })).toHaveAttribute("aria-pressed", "false");
  });
});
