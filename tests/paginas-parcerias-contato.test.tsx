import { fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Parcerias, { metadata as metaParcerias } from "@/app/parcerias/page";
import Contato, { metadata as metaContato } from "@/app/contato/page";
import { PROJETOS } from "@/content/projetos";
import { CORPO_PROPOSTA } from "@/content/parcerias";
import { CONTATO, linkMailto, linkWhatsApp } from "@/lib/contato";

afterEach(() => vi.restoreAllMocks());

describe("Parcerias", () => {
  it("tem a âncora de cada projeto e a de projetos-apoio, sem mailto", () => {
    const { container } = render(<Parcerias />);
    expect(PROJETOS).toHaveLength(7);
    for (const p of PROJETOS) {
      expect(container.querySelector(`[id="${p.ancoraParceria}"]`), p.ancoraParceria).not.toBeNull();
    }
    expect(container.querySelector('[id="projetos-apoio"]')).not.toBeNull();
    expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
    expect(metaParcerias.title).toBe("Parcerias");
  });

  it("o botão do projeto abre o e-mail com o nome do projeto", () => {
    const abrir = vi.spyOn(window, "open").mockImplementation(() => null);
    const { container } = render(<Parcerias />);
    const yoga = container.querySelector('[id="p-Yoga"]') as HTMLElement;
    fireEvent.click(within(yoga).getByText("Patrocinar"));
    expect(abrir).toHaveBeenCalledWith(
      linkMailto(
        "Patrocínio: o projeto Aulas regulares de Yoga",
        "Olá! Tenho interesse em patrocinar o projeto Aulas regulares de Yoga.\n\nInstituição:\nResponsável:\nTelefone:\nForma de apoio (financeiro, produtos, serviços, evento):\n\n",
      ),
      "_self",
    );
  });
});

describe("Contato", () => {
  it("tem os 4 atalhos com WhatsApp e e-mail", () => {
    const abrir = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<Contato />);
    for (const assunto of [
      "Quero participar de um projeto",
      "Inscrever meu filho ou filha",
      "Quero ser voluntário(a)",
      "Imprensa",
    ]) {
      const wa = screen.getByLabelText(`${assunto}: chamar no WhatsApp`);
      expect(wa.getAttribute("href")).toBe(linkWhatsApp(`Olá! ${assunto}.`));
      expect(wa.getAttribute("target")).toBe("_blank");
      expect(wa.getAttribute("rel")).toBe("noopener");
      fireEvent.click(screen.getByLabelText(`${assunto}: enviar e-mail`));
      expect(abrir).toHaveBeenLastCalledWith(linkMailto(assunto), "_self");
    }
  });

  it("o botão de proposta abre o e-mail com o roteiro", () => {
    const abrir = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<Contato />);
    fireEvent.click(screen.getByText("Enviar proposta por e-mail"));
    expect(abrir).toHaveBeenCalledWith(linkMailto("Proposta de parceria", CORPO_PROPOSTA), "_self");
    expect(CORPO_PROPOSTA).toContain("Responsável e cargo:");
  });

  it("mostra e-mail e telefone escritos, sem mailto", () => {
    const { container } = render(<Contato />);
    expect(container.textContent).toContain(CONTATO.email);
    expect(container.textContent).toContain(CONTATO.whatsappExibicao);
    expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
    expect(metaContato.title).toBe("Contato");
  });
});
