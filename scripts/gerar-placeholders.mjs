import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { IMAGENS } from "../content/imagens.ts";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const pasta = join(raiz, "public/imagens");
mkdirSync(pasta, { recursive: true });
for (const { arquivo, largura, altura } of Object.values(IMAGENS)) {
  const destino = join(pasta, arquivo);
  if (existsSync(destino)) {
    console.log(`existe, mantido: ${arquivo}`);
    continue;
  }
  const fs = Math.max(8, Math.round(Math.min(largura / 12, altura / 6)));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${largura}" height="${altura}">
<rect width="100%" height="100%" fill="#e6ead6"/>
<text x="50%" y="${altura / 2 - fs * 0.3}" text-anchor="middle" font-family="sans-serif" font-size="${fs}" fill="#55604a">Foto a receber</text>
<text x="50%" y="${altura / 2 + fs * 1.1}" text-anchor="middle" font-family="sans-serif" font-size="${fs}" fill="#55604a">${arquivo}</text>
</svg>`;
  const img = sharp(Buffer.from(svg));
  await (arquivo.endsWith(".png") ? img.png() : img.jpeg({ quality: 85 })).toFile(destino);
  console.log(`criado: ${arquivo}`);
}
