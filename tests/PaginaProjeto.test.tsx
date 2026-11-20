import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PaginaProjeto from "@/components/projeto/PaginaProjeto";
import { projetoPorSlug } from "@/content/projetos";
import { linkWhatsApp } from "@/lib/contato";

const yoga = projetoPorSlug("yoga")!;

describe("PaginaProjeto", () => {
  it("mostra o título do projeto", () => {
    render(<PaginaProjeto projeto={yoga} />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Aulas regulares de Yoga" }),
    ).toBeInTheDocument();
  });

  it("Quero participar abre o WhatsApp com a mensagem do projeto", () => {
    render(<PaginaProjeto projeto={yoga} />);
    expect(screen.getByRole("link", { name: "Quero participar" })).toHaveAttribute(
      "href",
      linkWhatsApp("Olá! Quero saber como participar do projeto Aulas regulares de Yoga."),
    );
  });

  it("os dois links de patrocínio vão para a âncora da parceria", () => {
    render(<PaginaProjeto projeto={yoga} />);
    const links = screen.getAllByRole("link", { name: /Patrocinar este projeto/ });
    expect(links).toHaveLength(2);
    for (const l of links) expect(l).toHaveAttribute("href", "/parcerias#p-Yoga");
  });

  it("breadcrumb leva a /projetos", () => {
    render(<PaginaProjeto projeto={yoga} />);
    const nav = screen.getByRole("navigation", { name: "Você está em" });
    expect(within(nav).getByRole("link", { name: "Projetos" })).toHaveAttribute(
      "href",
      "/projetos",
    );
  });

  it("Outros projetos lista 3 cartões", () => {
    render(<PaginaProjeto projeto={yoga} />);
    const sec = screen.getByRole("heading", { name: "Outros projetos" }).closest("section")!;
    const hrefs = within(sec)
      .getAllByRole("link")
      .map((a) => a.getAttribute("href"))
      .filter((h) => h?.startsWith("/projetos/"));
    expect(hrefs).toEqual([
      "/projetos/futebol-vale-jogar",
      "/projetos/corrida-em-trilha",
      "/projetos/circo",
    ]);
  });

  it("mantém o aviso de novidades em breve", () => {
    render(<PaginaProjeto projeto={yoga} />);
    expect(screen.getByText("Novidades do projeto")).toBeInTheDocument();
    expect(screen.getByText("Em breve")).toBeInTheDocument();
  });
});
