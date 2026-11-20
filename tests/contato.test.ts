import { describe, expect, it } from "vitest";
import { CONTATO, linkMailto, linkWhatsApp } from "@/lib/contato";

describe("CONTATO", () => {
  it("whatsapp tem país e DDD, só dígitos", () => {
    expect(CONTATO.whatsapp).toMatch(/^55\d{10,11}$/);
  });
});

describe("linkWhatsApp", () => {
  it("sem texto", () => {
    expect(linkWhatsApp()).toBe("https://wa.me/5575900000000");
  });
  it("com texto acentuado e parênteses", () => {
    const t = "Olá! Quero ser voluntário(a).";
    const url = linkWhatsApp(t);
    expect(url).toBe(
      "https://wa.me/5575900000000?text=Ol%C3%A1!%20Quero%20ser%20volunt%C3%A1rio(a).",
    );
    expect(decodeURIComponent(url.split("?text=")[1])).toBe(t);
  });
  it("texto com &, ? e quebra de linha chega intacto", () => {
    const t = "A & B? sim\nlinha 2";
    const url = linkWhatsApp(t);
    expect(url.split("?")).toHaveLength(2);
    expect(url).not.toContain("&");
    expect(decodeURIComponent(url.split("?text=")[1])).toBe(t);
  });
});

describe("linkMailto", () => {
  it("só assunto", () => {
    expect(linkMailto("Contato pelo site")).toBe(
      "mailto:contato@institutoconexaosaude.org.br?subject=Contato%20pelo%20site",
    );
  });
  it("com corpo", () => {
    expect(linkMailto("Proposta de parceria", "Instituição:\nResponsável:")).toContain(
      "&body=Institui%C3%A7%C3%A3o%3A%0ARespons%C3%A1vel%3A",
    );
  });
});
