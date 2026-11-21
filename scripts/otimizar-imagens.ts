// Otimiza as fotos de public/imagens/ antes do commit: corrige a orientação, limita o
// lado maior a 2400 px, recomprime e remove os metadados (EXIF, inclusive GPS do celular).
// Imagem já otimizada (lado maior <= 2400 px e sem EXIF) fica como está, então rodar de
// novo não recomprime. No fim, limpa o cache de imagens do Next: ele guarda cada versão
// otimizada pelo nome do arquivo (não pelo conteúdo) por 4 h, então uma foto trocada com
// o mesmo nome continuaria aparecendo antiga. Uso: npm run imagens:otimizar
import { readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const LADO_MAXIMO = 2400;

export async function otimizarImagem(caminho: string): Promise<"otimizada" | "mantida"> {
  const original = readFileSync(caminho);
  const meta = await sharp(original).metadata();
  if (Math.max(meta.width ?? 0, meta.height ?? 0) <= LADO_MAXIMO && !meta.exif) return "mantida";

  const img = sharp(original)
    .rotate()
    .resize(LADO_MAXIMO, LADO_MAXIMO, { fit: "inside", withoutEnlargement: true });
  const saida =
    meta.format === "png"
      ? await img.png({ compressionLevel: 9 }).toBuffer()
      : await img.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  writeFileSync(caminho, saida);
  return "otimizada";
}

export function limparCacheDeImagens(raiz: string): void {
  for (const pasta of [".next/dev/cache/images", ".next/cache/images"]) {
    rmSync(join(raiz, pasta), { recursive: true, force: true });
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
  const pasta = join(raiz, "public/imagens");
  const arquivos = readdirSync(pasta).filter((a) => [".jpg", ".jpeg", ".png"].includes(extname(a).toLowerCase()));
  for (const arquivo of arquivos) {
    const caminho = join(pasta, arquivo);
    const antes = statSync(caminho).size;
    const resultado = await otimizarImagem(caminho);
    const kb = (b: number) => `${Math.round(b / 1024)} KB`;
    console.log(
      resultado === "otimizada"
        ? `otimizada: ${arquivo} (${kb(antes)} -> ${kb(statSync(caminho).size)})`
        : `mantida: ${arquivo}`,
    );
  }
  limparCacheDeImagens(raiz);
  console.log("cache de imagens do Next limpo: recarregue a página");
}
