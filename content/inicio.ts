import type { Area } from "@/content/projetos";

export const NUMEROS = [
  { valor: "Desde 2003", legenda: "atuando na Chapada Diamantina" },
  { valor: "+3 mil", legenda: "pessoas no Programa Conexão Saúde" },
  { valor: "7", legenda: "comunidades quilombolas na Ciranda Cultural" },
  { valor: "7", legenda: "projetos ativos em saúde, esporte, cultura e educação" },
];

export const AREAS_INICIO: { area: Area; nome: string; ods: string; texto: string }[] = [
  { area: "saude", nome: "Saúde", ods: "ODS 3", texto: "Práticas ao ar livre, alimentação natural, yoga e cuidado integral." },
  { area: "esporte", nome: "Esporte", ods: "ODS 3, 4, 10", texto: "Futebol e corrida em trilha como formação e cidadania." },
  { area: "cultura", nome: "Cultura", ods: "ODS 3, 4, 5, 10, 11, 17", texto: "Circo, brincadeiras e valorização da cultura negra e quilombola." },
  { area: "educacao", nome: "Educação", ods: "ODS 3, 4, 10, 11, 12, 16", texto: "Educação infantil integral, inspirada na pedagogia Waldorf." },
];
