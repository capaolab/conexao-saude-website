import { describe, expect, it } from "vitest";
import { PROJETOS, projetoPorSlug } from "@/content/projetos";

const SLUGS = [
  "programa-conexao-saude",
  "yoga",
  "futebol-vale-jogar",
  "corrida-em-trilha",
  "circo",
  "ciranda-cultural",
  "yurta-curumim",
];

describe("PROJETOS", () => {
  it("tem exatamente os 7 slugs, sem repetição", () => {
    const slugs = PROJETOS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect([...slugs].sort()).toEqual([...SLUGS].sort());
  });

  it("outros aponta para projetos existentes e diferentes do próprio", () => {
    for (const p of PROJETOS) {
      expect(p.outros).toHaveLength(3);
      for (const s of p.outros) {
        expect(projetoPorSlug(s)).toBeDefined();
        expect(s).not.toBe(p.slug);
      }
    }
  });

  it("slug inexistente devolve undefined", () => {
    expect(projetoPorSlug("xyz")).toBeUndefined();
  });

  it("yoga tem os dados do canvas", () => {
    const y = projetoPorSlug("yoga");
    expect(y?.nome).toBe("Aulas regulares de Yoga");
    expect(y?.area).toBe("saude");
    expect(y?.status).toBe("Ativo · Desde 2024");
    expect(y?.ancoraParceria).toBe("p-Yoga");
    expect(y?.ficha).toContainEqual({ rotulo: "Coordenação", valor: "Denise Debiasi" });
  });

  it("a galeria só tem fotos do próprio projeto, sem repetição", () => {
    for (const p of PROJETOS) {
      const galeria = p.galeria ?? [];
      expect(new Set(galeria).size, p.slug).toBe(galeria.length);
      for (const id of galeria) expect(id, p.slug).toMatch(new RegExp(`^projeto-${p.slug}-\\d+$`));
    }
  });

  it("projetos com fotos de galeria recebidas", () => {
    const comFotos = PROJETOS.filter((p) => (p.galeria ?? []).length > 0).map((p) => p.slug);
    expect(comFotos.sort()).toEqual(
      ["ciranda-cultural", "circo", "corrida-em-trilha", "programa-conexao-saude", "yoga", "yurta-curumim"].sort(),
    );
  });
});

