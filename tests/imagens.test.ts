import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { describe, expect, it } from "vitest";
import { IMAGENS } from "@/content/imagens";

const raiz = process.cwd();
const arquivos = Object.values(IMAGENS).map((i) => i.arquivo);
const doc = readFileSync(join(raiz, "docs/imagens.md"), "utf8");
const linhasTabela = doc.split("\n").filter((l) => l.trim().startsWith("|"));

describe("mapa de imagens", () => {
  it("nomes de arquivo válidos e únicos", () => {
    for (const a of arquivos) {
      expect(a).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*\.(jpg|png|svg)$/);
    }
    expect(new Set(arquivos).size).toBe(arquivos.length);
  });

  it("todo arquivo existe em public/imagens/", () => {
    for (const a of arquivos) {
      expect(existsSync(join(raiz, "public/imagens", a)), a).toBe(true);
    }
  });

  it("todo arquivo aparece na tabela de docs/imagens.md", () => {
    for (const a of arquivos) {
      expect(
        linhasTabela.some((l) => l.includes("`" + a + "`")),
        a,
      ).toBe(true);
    }
  });

  it("a tabela não cita arquivo fora de IMAGENS", () => {
    const citados = linhasTabela
      .map((l) => l.split("|")[1]?.trim() ?? "")
      .filter((c) => /^`.+`$/.test(c))
      .map((c) => c.slice(1, -1));
    for (const c of citados) expect(arquivos, c).toContain(c);
  });

  it("fotos de galeria declaram a largura e a altura reais do arquivo", async () => {
    for (const { arquivo, largura, altura } of Object.values(IMAGENS)) {
      if (!/-\d+\.jpg$/.test(arquivo)) continue;
      const m = await sharp(join(raiz, "public/imagens", arquivo)).metadata();
      expect([m.width, m.height], arquivo).toEqual([largura, altura]);
    }
  });
});

