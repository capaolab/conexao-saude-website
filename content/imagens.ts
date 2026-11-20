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
  "projeto-programa-conexao-saude-capa": {
    arquivo: "projeto-programa-conexao-saude-capa.jpg",
    alt: "Caminhada em trilha com vista para a serra da Chapada Diamantina",
    largura: 1600,
    altura: 900,
    noCanvas: true,
  },
  "projeto-yoga-capa": {
    arquivo: "projeto-yoga-capa.jpg",
    alt: "Foto de Aulas regulares de Yoga",
    largura: 1600,
    altura: 900,
    noCanvas: false,
  },
  "projeto-futebol-vale-jogar-capa": {
    arquivo: "projeto-futebol-vale-jogar-capa.jpg",
    alt: "Crianças jogando futebol na Escolinha Vale Jogar",
    largura: 1600,
    altura: 900,
    noCanvas: true,
  },
  "projeto-corrida-em-trilha-capa": {
    arquivo: "projeto-corrida-em-trilha-capa.jpg",
    alt: "Atleta em corrida de trilha com a serra ao fundo",
    largura: 1600,
    altura: 900,
    noCanvas: true,
  },
  "projeto-circo-capa": {
    arquivo: "projeto-circo-capa.jpg",
    alt: "Roda de crianças e educador nas aulas de circo",
    largura: 1600,
    altura: 900,
    noCanvas: true,
  },
  "projeto-ciranda-cultural-capa": {
    arquivo: "projeto-ciranda-cultural-capa.jpg",
    alt: "Participantes da Ciranda Cultural reunidas em comunidade quilombola",
    largura: 1600,
    altura: 900,
    noCanvas: true,
  },
  "projeto-yurta-curumim-capa": {
    arquivo: "projeto-yurta-curumim-capa.jpg",
    alt: "Educadora e crianças em roda dentro da yurta",
    largura: 1600,
    altura: 900,
    noCanvas: true,
  },
} as const satisfies Record<
  string,
  { arquivo: string; alt: string; largura: number; altura: number; noCanvas: boolean }
>;

export type ImagemId = keyof typeof IMAGENS;
