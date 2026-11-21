// @vitest-environment node
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { limparCacheDeImagens, otimizarImagem } from "../scripts/otimizar-imagens";

let pasta: string;
beforeEach(() => {
  pasta = mkdtempSync(join(tmpdir(), "otimizar-"));
});
afterEach(() => {
  rmSync(pasta, { recursive: true, force: true });
});

async function criarJpeg(nome: string, largura: number, altura: number, comExif: boolean) {
  let img = sharp({ create: { width: largura, height: altura, channels: 3, background: "#6a8f3c" } });
  if (comExif) img = img.withMetadata({ exif: { IFD0: { Make: "Apple", Model: "iPhone 15" } } });
  const caminho = join(pasta, nome);
  writeFileSync(caminho, await img.jpeg().toBuffer());
  return caminho;
}

describe("otimizarImagem", () => {
  it("reduz o lado maior para 2400 px e remove os metadados", async () => {
    const caminho = await criarJpeg("grande.jpg", 4032, 3024, true);

    expect(await otimizarImagem(caminho)).toBe("otimizada");

    const meta = await sharp(caminho).metadata();
    expect(meta.format).toBe("jpeg");
    expect(Math.max(meta.width!, meta.height!)).toBe(2400);
    expect(meta.exif).toBeUndefined();
  });

  it("vale também para foto em pé (lado maior é a altura)", async () => {
    const caminho = await criarJpeg("em-pe.jpg", 3024, 4032, false);

    expect(await otimizarImagem(caminho)).toBe("otimizada");

    const meta = await sharp(caminho).metadata();
    expect(meta.width).toBe(1800);
    expect(meta.height).toBe(2400);
  });

  it("não mexe em imagem já otimizada (rodar duas vezes não recomprime)", async () => {
    const caminho = await criarJpeg("grande.jpg", 4032, 3024, true);
    await otimizarImagem(caminho);
    const depoisDaPrimeira = readFileSync(caminho);

    expect(await otimizarImagem(caminho)).toBe("mantida");
    expect(readFileSync(caminho).equals(depoisDaPrimeira)).toBe(true);
  });

  it("limpa o cache de imagens do Next (dev e produção) e mantém o resto do .next", () => {
    for (const p of [".next/dev/cache/images/a", ".next/cache/images/b", ".next/cache/fetch-cache"]) {
      mkdirSync(join(pasta, p), { recursive: true });
    }

    limparCacheDeImagens(pasta);

    expect(existsSync(join(pasta, ".next/dev/cache/images"))).toBe(false);
    expect(existsSync(join(pasta, ".next/cache/images"))).toBe(false);
    expect(existsSync(join(pasta, ".next/cache/fetch-cache"))).toBe(true);
  });

  it("remove metadados mesmo de imagem pequena", async () => {
    const caminho = await criarJpeg("pequena.jpg", 800, 600, true);

    expect(await otimizarImagem(caminho)).toBe("otimizada");

    const meta = await sharp(caminho).metadata();
    expect(meta.width).toBe(800);
    expect(meta.exif).toBeUndefined();
  });
});
