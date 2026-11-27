import { describe, expect, it } from "vitest";
import { EQUIPE, LINHA_DO_TEMPO } from "@/content/quem-somos";

const texto = (ano: string) => LINHA_DO_TEMPO.find((m) => m.ano === ano)?.texto;

describe("LINHA_DO_TEMPO", () => {
  it("2020 e 2026 usam o texto enviado pelo instituto", () => {
    expect(texto("2020")).toBe(
      "Começa a Yurta Curumim. O Circo Ilha de Mato é reconhecido como Ponto de Cultura pela Secult/BA.",
    );
    expect(texto("2026")).toBe("Realização do Campeonato Baiano de Corrida em Trilha e Montanha no Vale do Capão.");
  });

  it("todo marco mostra só o ano", () => {
    for (const m of LINHA_DO_TEMPO) expect(m.ano, m.texto).toMatch(/^\d{4}$/);
  });
});

describe("EQUIPE", () => {
  it("segue a ordem e os cargos do documento do instituto", () => {
    expect(EQUIPE.map((e) => [e.nome, e.cargo])).toEqual([
      ["Carlos Cesar Junior", "Presidente"],
      ["Adroaldo Vasconcelos", "Diretor de comunicação"],
      ["Luanna Lima", "Diretora de finanças"],
      ["Fábia Medeiros", "Coordenadora da Yurta Curumim"],
      ["Denise Debiasi", "Coordenadora de Yoga e Ações Continuadas"],
      ["Juliana Tourinho", "Coordenadora das áreas Educação e Cultura"],
      ["Miriam Ribeiro", "Coordenadora das áreas Saúde e Esporte"],
    ]);
  });

  it("cada pessoa tem foto própria e currículo", () => {
    for (const e of EQUIPE) {
      expect(e.imagem).toMatch(/^equipe-[a-z-]+$/);
      expect(e.bio.length, e.nome).toBeGreaterThan(200);
    }
    expect(new Set(EQUIPE.map((e) => e.imagem)).size).toBe(EQUIPE.length);
  });
});

