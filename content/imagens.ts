// Mapa de imagens do site. Para cada foto nova, acrescente uma entrada abaixo e uma linha
// na tabela de docs/imagens.md. O arquivo usa minúsculas, sem acento, com hífens
// (.jpg para foto, .png para logo). largura/altura são em px; noCanvas diz se o canvas
// já tem a foto. `npm run imagens:placeholders` importa este arquivo (Node 24 remove os
// tipos nativamente: use só sintaxe apagável, sem enum/namespace) e cria o provisório em
// public/imagens/ quando ainda não existe.
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
