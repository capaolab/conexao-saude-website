import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import Galeria from "@/components/projeto/Galeria";
import PaginaProjeto from "@/components/projeto/PaginaProjeto";
import { IMAGENS, type ImagemId } from "@/content/imagens";
import { projetoPorSlug } from "@/content/projetos";

const FOTOS: ImagemId[] = ["projeto-yoga-1", "projeto-yoga-2", "projeto-yoga-3"];
const alt = (id: ImagemId) => IMAGENS[id].alt;

function abrir(i: number) {
  render(<Galeria fotos={FOTOS} nome="Aulas regulares de Yoga" />);
  fireEvent.click(screen.getByRole("button", { name: `Ampliar foto ${i + 1} de 3: ${alt(FOTOS[i])}` }));
  return screen.getByRole("dialog", { name: "Fotos de Aulas regulares de Yoga" });
}

describe("Galeria", () => {
  it("mostra uma miniatura lazy por foto, sem o lightbox aberto", () => {
    render(<Galeria fotos={FOTOS} nome="Aulas regulares de Yoga" />);
    const botoes = screen.getAllByRole("button", { name: /^Ampliar foto/ });
    expect(botoes).toHaveLength(3);
    for (const [i, b] of botoes.entries()) {
      const img = within(b).getByRole("img", { name: alt(FOTOS[i]) });
      expect(img).toHaveAttribute("loading", "lazy");
    }
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("a miniatura abre a foto ampliada com contador", () => {
    const dialogo = abrir(1);
    expect(within(dialogo).getByRole("img", { name: alt(FOTOS[1]) })).toBeInTheDocument();
    expect(dialogo).toHaveTextContent("2 de 3");
  });

  it("setas do teclado e botões navegam, dando a volta", () => {
    const dialogo = abrir(2);
    fireEvent.keyDown(dialogo, { key: "ArrowRight" });
    expect(dialogo).toHaveTextContent("1 de 3");
    fireEvent.keyDown(dialogo, { key: "ArrowLeft" });
    expect(dialogo).toHaveTextContent("3 de 3");
    fireEvent.click(within(dialogo).getByRole("button", { name: "Foto anterior" }));
    expect(within(dialogo).getByRole("img", { name: alt(FOTOS[1]) })).toBeInTheDocument();
    fireEvent.click(within(dialogo).getByRole("button", { name: "Próxima foto" }));
    expect(dialogo).toHaveTextContent("3 de 3");
  });

  it("fechar devolve o foco à miniatura", () => {
    const dialogo = abrir(1);
    fireEvent.click(within(dialogo).getByRole("button", { name: "Fechar" }));
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(screen.getByRole("button", { name: `Ampliar foto 2 de 3: ${alt(FOTOS[1])}` })).toHaveFocus();
  });

  it("Esc (evento close do dialog) também fecha", () => {
    const dialogo = abrir(0);
    (dialogo as HTMLDialogElement).close();
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("aberta, não tem violações de acessibilidade (axe)", async () => {
    abrir(0);
    const resultado = await axe(document.body, { rules: { "color-contrast": { enabled: false } } });
    expect(resultado.violations).toEqual([]);
  });
});

describe("Galeria na página do projeto", () => {
  it("aparece quando o projeto tem fotos", () => {
    render(<PaginaProjeto projeto={projetoPorSlug("yoga")!} />);
    expect(screen.getByRole("heading", { level: 2, name: "Fotos do projeto" })).toBeInTheDocument();
  });

  it("some quando o projeto não tem fotos", () => {
    const yoga = projetoPorSlug("yoga")!;
    render(<PaginaProjeto projeto={{ ...yoga, galeria: [] }} />);
    expect(screen.queryByRole("heading", { name: "Fotos do projeto" })).toBeNull();
    expect(screen.queryByRole("button", { name: /^Ampliar foto/ })).toBeNull();
  });
});
