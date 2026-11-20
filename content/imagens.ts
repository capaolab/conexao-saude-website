// Mapa de imagens do site. Cada entrada precisa ter as chaves arquivo, largura e altura,
// cada uma em sua própria linha, com string entre aspas duplas e números literais
// (formato das entradas abaixo). O nome do arquivo usa minúsculas, sem acento, com hífens;
// .jpg para foto, .png para logo.
// scripts/gerar-placeholders.mjs lê este arquivo como texto (regex) e cria o provisório em
// public/imagens/ se ainda não existir. Toda entrada nova também entra em docs/imagens.md.
export const IMAGENS = {
  logo: {
    arquivo: "logo.png",
    alt: "",
    largura: 52,
    altura: 52,
    noCanvas: true,
  },
} as const satisfies Record<
  string,
  { arquivo: string; alt: string; largura: number; altura: number; noCanvas: boolean }
>;

export type ImagemId = keyof typeof IMAGENS;
