import { describe, expect, it } from "vitest";
import { LINHA_DO_TEMPO } from "@/content/quem-somos";

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
