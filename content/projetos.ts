import type { ImagemId } from "@/content/imagens";

export type Area = "saude" | "esporte" | "cultura" | "educacao";

export const AREAS: Record<Area, { rotulo: string; tag: "" | "earth" | "lime" }> = {
  saude: { rotulo: "Saúde", tag: "" },
  esporte: { rotulo: "Esporte", tag: "" },
  cultura: { rotulo: "Cultura", tag: "earth" },
  educacao: { rotulo: "Educação", tag: "earth" },
};

export type Projeto = {
  slug: string;
  nome: string;
  area: Area;
  resumo: string;
  status: string;
  lead: string;
  imagem: ImagemId;
  // Fotos da seção Galeria, na ordem em que aparecem. Sem fotos, a seção some.
  galeria?: ImagemId[];
  destaques: { valor: string; legenda: string }[];
  sobre: string[];
  beneficiosTitulo: string;
  beneficios: string[];
  ficha: { rotulo: string; valor: string }[];
  patrocinio: { titulo: string; texto: string; itens: string[] };
  ancoraParceria: string;
  mensagemWhatsApp: string;
  outros: string[];
};

const TEXTO_PATROCINIO = "Veja as formas de apoio e as contrapartidas na página de parcerias.";

export const PROJETOS: Projeto[] = [
  {
    slug: "programa-conexao-saude",
    nome: "Programa Conexão Saúde",
    area: "saude",
    resumo:
      "Atividades ao ar livre, alimentação natural, meditação e yoga. Mais de 100 grupos e 3 mil pessoas desde 2003.",
    status: "Ativo · Desde 2003",
    lead: "Atividades saudáveis ao ar livre que favorecem o desenvolvimento humano na sua integralidade, gerando saúde e bem-estar individual, social e ambiental.",
    imagem: "projeto-programa-conexao-saude-capa",
    galeria: [
      "projeto-programa-conexao-saude-1",
      "projeto-programa-conexao-saude-2",
      "projeto-programa-conexao-saude-3",
      "projeto-programa-conexao-saude-4",
      "projeto-programa-conexao-saude-5",
      "projeto-programa-conexao-saude-6",
    ],
    destaques: [
      { valor: "+100", legenda: "grupos formados" },
      { valor: "+3 mil", legenda: "pessoas alcançadas" },
      { valor: "6", legenda: "cidades da Chapada" },
    ],
    sobre: [
      "O Programa Conexão Saúde oferece experiências para a adoção de comportamentos saudáveis, com foco na alimentação natural e orgânica, em práticas corporais como trekking e caminhadas na natureza, meditação, yoga e relaxamento, e em dinâmicas de integração em grupo.",
      "Atuante desde 2003, o programa já formou mais de 100 grupos, com alcance de mais de três mil pessoas de diferentes faixas etárias e estados, em várias cidades da Chapada Diamantina.",
    ],
    beneficiosTitulo: "O que acontece",
    beneficios: [
      "Alimentação natural e orgânica",
      "Trekking e caminhadas na natureza",
      "Meditação, yoga e relaxamento",
      "Dinâmicas de integração em grupo",
    ],
    ficha: [
      { rotulo: "Desde", valor: "2003" },
      { rotulo: "Público", valor: "Pessoas de diferentes idades e estados" },
      { rotulo: "Onde", valor: "Palmeiras, Ibicoara, Lençóis, Itaetê, Mucugê e Andaraí" },
      { rotulo: "Coordenação", valor: "Carlos Cesar Junior e Luanna Lima" },
      { rotulo: "ODS", valor: "3 · Saúde e bem-estar" },
    ],
    patrocinio: {
      titulo: "Sua marca ao lado de Programa Conexão Saúde",
      texto: `+3 mil pessoas desde 2003. ${TEXTO_PATROCINIO}`,
      itens: [
        "Vagas gratuitas para moradores da Chapada",
        "Transporte dos grupos até as trilhas",
        "Alimentação natural nas vivências",
      ],
    },
    ancoraParceria: "p-ConexaoSaude",
    mensagemWhatsApp: "Olá! Quero saber como participar do projeto Programa Conexão Saúde.",
    outros: ["yoga", "futebol-vale-jogar", "corrida-em-trilha"],
  },
  {
    slug: "yoga",
    nome: "Aulas regulares de Yoga",
    area: "saude",
    resumo: "Aulas semanais de Yoga Integral para jovens e adultos, pela saúde física e mental.",
    status: "Ativo · Desde 2024",
    lead: "Aulas regulares e semanais de Yoga para jovens e adultos, com o objetivo de promover a saúde física e mental.",
    imagem: "projeto-yoga-capa",
    galeria: [
      "projeto-yoga-1",
      "projeto-yoga-2",
      "projeto-yoga-3",
      "projeto-yoga-4",
      "projeto-yoga-5",
    ],
    destaques: [
      { valor: "Semanal", legenda: "aulas regulares" },
      { valor: "2024", legenda: "início das turmas" },
    ],
    sobre: [
      "Fundamentadas nos princípios do Yoga Integral, as práticas buscam proporcionar bem-estar, equilíbrio e paz interior por meio de diferentes técnicas e trabalhos corporais.",
    ],
    beneficiosTitulo: "Benefícios trabalhados",
    beneficios: [
      "Redução do estresse, da ansiedade e da insônia",
      "Fortalecimento e alongamento corporal",
      "Desenvolvimento do foco e da concentração",
      "Bem-estar e conexão interior",
    ],
    ficha: [
      { rotulo: "Desde", valor: "2024" },
      { rotulo: "Público", valor: "Jovens e adultos" },
      { rotulo: "Frequência", valor: "Aulas semanais · [dias e horários a confirmar]" },
      { rotulo: "Coordenação", valor: "Denise Debiasi" },
      { rotulo: "ODS", valor: "3 · Saúde e bem-estar" },
    ],
    patrocinio: {
      titulo: "Sua marca ao lado de Aulas regulares de Yoga",
      texto: `Turmas semanais desde 2024. ${TEXTO_PATROCINIO}`,
      itens: [
        "Bolsas para jovens e adultos",
        "Tapetes e materiais das aulas",
        "Abertura de novas turmas",
      ],
    },
    ancoraParceria: "p-Yoga",
    mensagemWhatsApp: "Olá! Quero saber como participar do projeto Aulas regulares de Yoga.",
    outros: ["futebol-vale-jogar", "corrida-em-trilha", "circo"],
  },
  {
    slug: "futebol-vale-jogar",
    nome: "Futebol Vale Jogar",
    area: "esporte",
    resumo:
      "Aulas regulares de futebol para crianças e adolescentes de 6 a 14 anos, com jogos e intercâmbios.",
    status: "Ativo · 2009–2012 e desde 2023",
    lead: "Aulas regulares de futebol para crianças e adolescentes de 6 a 14 anos, com jogos e intercâmbios com times de cidades vizinhas.",
    imagem: "projeto-futebol-vale-jogar-capa",
    galeria: [
      "projeto-futebol-vale-jogar-1",
      "projeto-futebol-vale-jogar-2",
      "projeto-futebol-vale-jogar-3",
      "projeto-futebol-vale-jogar-4",
      "projeto-futebol-vale-jogar-5",
      "projeto-futebol-vale-jogar-6",
    ],
    destaques: [
      { valor: "~300", legenda: "crianças e adolescentes por ano" },
      { valor: "6 a 14", legenda: "anos de idade" },
      { valor: "~150", legenda: "crianças e famílias em 2026" },
    ],
    sobre: [
      "A Escolinha de Futebol Vale Jogar nasceu em 2009 e funcionou até 2012. Nesse período, realizou a avaliação técnica do Esporte Clube Bahia, que revelou 3 garotos para o time; a equipe chegou a ser oficial do E.C. Bahia e foi vice-campeã da Copinha Tricolor.",
      "Depois de um tempo de “hibernação”, voltou em 2023 com intercâmbios, eventos de futebol e prática regular. Em 2026, já são cerca de 150 crianças e famílias envolvidas.",
      "O impacto vai além do campo: melhora a socialização, a autopercepção e o autoconceito, ajuda crianças e jovens a superar a timidez e lidar com sentimentos, e fortalece a coletividade e a consciência de cidadania. O movimento ativo também favorece os sistemas cardiovascular, endócrino e digestivo.",
    ],
    beneficiosTitulo: "O que acontece",
    beneficios: [
      "Aulas regulares de futebol",
      "Jogos e intercâmbios com outras cidades",
      "Eventos de futebol",
      "Socialização e cidadania",
    ],
    ficha: [
      { rotulo: "Período", valor: "2009–2012 e desde 2023" },
      { rotulo: "Público", valor: "Crianças e adolescentes de 6 a 14 anos" },
      { rotulo: "Onde", valor: "Vale do Capão e cidades vizinhas" },
      { rotulo: "Coordenação", valor: "Carlos Cesar Junior" },
      { rotulo: "ODS", valor: "3, 4 e 10" },
    ],
    patrocinio: {
      titulo: "Sua marca ao lado de Futebol Vale Jogar",
      texto: `~300 crianças por ano. ${TEXTO_PATROCINIO}`,
      itens: [
        "Uniformes, bolas e material esportivo",
        "Transporte para jogos e intercâmbios",
        "Lanche dos alunos nos treinos",
      ],
    },
    ancoraParceria: "p-FutebolValeJogar",
    mensagemWhatsApp: "Olá! Quero saber como participar do projeto Futebol Vale Jogar.",
    outros: ["corrida-em-trilha", "circo", "ciranda-cultural"],
  },
  {
    slug: "corrida-em-trilha",
    nome: "Corrida em Trilha",
    area: "esporte",
    resumo:
      "Eventos de trail running desde 2017 e, em 2026, o Clube ICS para formar atletas de trilha e montanha.",
    status: "Ativo · Desde 2017",
    lead: "Eventos anuais de trail running e formação de atletas, sempre com responsabilidade socioambiental.",
    imagem: "projeto-corrida-em-trilha-capa",
    galeria: [
      "projeto-corrida-em-trilha-1",
      "projeto-corrida-em-trilha-2",
      "projeto-corrida-em-trilha-3",
      "projeto-corrida-em-trilha-4",
    ],
    destaques: [
      { valor: "2017", legenda: "primeira edição" },
      { valor: "~300", legenda: "atletas no Campeonato Baiano 2026" },
      { valor: "2026", legenda: "criação do Clube ICS" },
    ],
    sobre: [
      "A primeira edição foi em 2017. Desde então, em parceria com outras instituições e apoiadores, promovemos todos os anos eventos de corrida em trilha e a formação de atletas na modalidade.",
      "Em 2026 realizamos o Campeonato Baiano de Corrida em Trilha e Montanha, com a TRS Chapada Diamantina e a Federação Bahiana de Atletismo, reunindo cerca de 300 atletas de diferentes estados e países.",
      "Também em 2026 nasce o Clube ICS, para estruturar, desenvolver e revelar atletas de corrida em trilha e montanha na Chapada Diamantina, criando uma base permanente de formação para jovens talentos da região, com filiação à CBAt e à FBA.",
    ],
    beneficiosTitulo: "O que acontece",
    beneficios: [
      "Eventos anuais de trail running",
      "Formação de atletas de trilha e montanha",
      "Clube ICS (filiado à CBAt e à FBA)",
      "Responsabilidade socioambiental nas provas",
    ],
    ficha: [
      { rotulo: "Desde", valor: "2017" },
      { rotulo: "Público", valor: "Atletas e jovens talentos da região" },
      { rotulo: "Parceiros", valor: "TRS Chapada Diamantina e Federação Bahiana de Atletismo" },
      { rotulo: "Coordenação", valor: "Carlos Cesar Junior e Adroaldo Vasconcelos" },
      { rotulo: "ODS", valor: "3, 15 e 17" },
    ],
    patrocinio: {
      titulo: "Sua marca ao lado de Corrida em Trilha",
      texto: `~300 atletas em 2026. ${TEXTO_PATROCINIO}`,
      itens: [
        "Cotas de patrocínio das provas",
        "Viagens e inscrições dos atletas do Clube ICS",
        "Estrutura e cuidado socioambiental das trilhas",
      ],
    },
    ancoraParceria: "p-CorridaEmTrilha",
    mensagemWhatsApp: "Olá! Quero saber como participar do projeto Corrida em Trilha.",
    outros: ["circo", "ciranda-cultural", "yurta-curumim"],
  },
  {
    slug: "circo",
    nome: "Circo para a comunidade",
    area: "cultura",
    resumo:
      "Com o Circo Ilha de Mato, aulas gratuitas de circo em Caeté-Açu. Ponto de Cultura desde 2020.",
    status: "Ativo · Desde 2011",
    lead: "Aulas regulares e gratuitas de circo para crianças, jovens e adultos de Caeté-Açu, em parceria com o Circo Ilha de Mato.",
    imagem: "projeto-circo-capa",
    galeria: [
      "projeto-circo-1",
      "projeto-circo-2",
      "projeto-circo-3",
      "projeto-circo-4",
    ],
    destaques: [
      { valor: "~50", legenda: "alunos por semestre" },
      { valor: "Gratuito", legenda: "para a comunidade" },
      { valor: "2020", legenda: "Ponto de Cultura" },
    ],
    sobre: [
      "Em parceria com o Circo Ilha de Mato, fundado em 2011, acontecem aulas regulares de circo para a comunidade, com articulações com escolas públicas municipais, estaduais e comunitárias que levam a experimentação circense a muitas crianças.",
      "Em média 50 alunos por semestre frequentam o espaço para aprender a história do circo e experimentar as técnicas circenses, de forma gratuita.",
      "O circo é também espaço de residência artística para artistas independentes e companhias. Em 2020 foi reconhecido pela Secretaria de Cultura do Estado da Bahia como Ponto de Cultura.",
    ],
    beneficiosTitulo: "O que acontece",
    beneficios: [
      "Turmas para crianças, jovens e adultos",
      "Ações com escolas públicas",
      "Residência artística",
      "Fomento à arte e à cultura no território",
    ],
    ficha: [
      { rotulo: "Parceiro", valor: "Circo Ilha de Mato (fundado em 2011)" },
      { rotulo: "Público", valor: "Crianças, jovens e adultos" },
      { rotulo: "Onde", valor: "Caeté-Açu, Vale do Capão" },
      { rotulo: "Coordenação", valor: "Luanna Lima" },
      { rotulo: "ODS", valor: "3, 4, 5, 10, 11 e 17" },
    ],
    patrocinio: {
      titulo: "Sua marca ao lado de Circo para a comunidade",
      texto: `~50 alunos por semestre. ${TEXTO_PATROCINIO}`,
      itens: [
        "Aulas gratuitas para a comunidade",
        "Aparelhos e equipamentos circenses",
        "Residências artísticas no território",
      ],
    },
    ancoraParceria: "p-Circo",
    mensagemWhatsApp: "Olá! Quero saber como participar do projeto Circo para a comunidade.",
    outros: ["ciranda-cultural", "yurta-curumim", "programa-conexao-saude"],
  },
  {
    slug: "ciranda-cultural",
    nome: "Ciranda Cultural",
    area: "cultura",
    resumo:
      "Com mulheres e jovens quilombolas: 7 comunidades em 4 cidades, cerca de 800 pessoas desde 2024.",
    status: "Ativo · Desde 2024",
    lead: "Iniciativa artística e cultural com mulheres e jovens quilombolas da Chapada Diamantina, para valorizar a cultura negra.",
    imagem: "projeto-ciranda-cultural-capa",
    galeria: [
      "projeto-ciranda-cultural-1",
      "projeto-ciranda-cultural-2",
      "projeto-ciranda-cultural-3",
      "projeto-ciranda-cultural-4",
    ],
    destaques: [
      { valor: "7", legenda: "comunidades quilombolas" },
      { valor: "4", legenda: "cidades" },
      { valor: "~800", legenda: "pessoas envolvidas" },
    ],
    sobre: [
      "A Ciranda Cultural constrói um ambiente seguro de expressão e de fortalecimento cultural e identitário.",
      "Traz uma metodologia de salvaguarda das brincadeiras das infâncias de diferentes quilombos, para contribuir com práticas saudáveis na vida em comunidade e valorizar os saberes e as culturas das infâncias, hoje prejudicadas pelo uso excessivo das telas.",
    ],
    beneficiosTitulo: "O que acontece",
    beneficios: [
      "Valorização da cultura negra",
      "Salvaguarda das brincadeiras das infâncias",
      "Encontros com mulheres e jovens quilombolas",
      "Fortalecimento de identidades comunitárias",
    ],
    ficha: [
      { rotulo: "Desde", valor: "2024" },
      { rotulo: "Público", valor: "Mulheres e jovens quilombolas" },
      { rotulo: "Onde", valor: "Palmeiras, Seabra, Lençóis e Iraquara" },
      { rotulo: "Coordenação", valor: "Luanna Lima e Fábia Medeiros" },
      { rotulo: "ODS", valor: "3, 4, 5, 10, 11 e 17" },
    ],
    patrocinio: {
      titulo: "Sua marca ao lado de Ciranda Cultural",
      texto: `7 quilombos, ~800 pessoas. ${TEXTO_PATROCINIO}`,
      itens: [
        "Deslocamento até as comunidades",
        "Materiais das oficinas e encontros",
        "Registro e salvaguarda das brincadeiras",
      ],
    },
    ancoraParceria: "p-CirandaCultural",
    mensagemWhatsApp: "Olá! Quero saber como participar do projeto Ciranda Cultural.",
    outros: ["yurta-curumim", "programa-conexao-saude", "yoga"],
  },
  {
    slug: "yurta-curumim",
    nome: "Yurta Curumim",
    area: "educacao",
    resumo:
      "Educação infantil à luz da pedagogia Waldorf para crianças de 2 a 6 anos, com o brincar livre.",
    status: "Ativo · Desde 2020",
    lead: "Educação à luz da pedagogia Waldorf para crianças de 2 a 6 anos, inspirada na cultura das infâncias, na arte, no brincar e no bem viver.",
    imagem: "projeto-yurta-curumim-capa",
    galeria: [
      "projeto-yurta-curumim-1",
      "projeto-yurta-curumim-2",
      "projeto-yurta-curumim-3",
      "projeto-yurta-curumim-4",
    ],
    destaques: [
      { valor: "~30", legenda: "famílias por ano" },
      { valor: "2 a 6", legenda: "anos de idade" },
      { valor: "2020", legenda: "início do projeto" },
    ],
    sobre: [
      "A Yurta Curumim oferece vivências em uma perspectiva de educação integral, pensando o ser humano em todas as suas dimensões: física, cognitiva, social, estética, afetiva e emocional.",
      "É um ambiente acolhedor, orgânico, integrador e seguro, onde o cuidado, a ludicidade e a arte-educação fluem e o protagonismo infantil abre espaço para o brincar livre e para um desenvolvimento pleno e sadio.",
    ],
    beneficiosTitulo: "O que acontece",
    beneficios: [
      "Pedagogia Waldorf",
      "Brincar livre e autonomia",
      "Arte-educação",
      "Educação integral",
    ],
    ficha: [
      { rotulo: "Desde", valor: "2020" },
      { rotulo: "Público", valor: "Crianças de 2 a 6 anos e suas famílias" },
      { rotulo: "Onde", valor: "Vale do Capão" },
      { rotulo: "Coordenação", valor: "Fábia Medeiros e Juliana Tourinho" },
      { rotulo: "ODS", valor: "3, 4, 10, 11, 12 e 16" },
    ],
    patrocinio: {
      titulo: "Sua marca ao lado de Yurta Curumim",
      texto: `~30 famílias por ano. ${TEXTO_PATROCINIO}`,
      itens: [
        "Bolsas para famílias da comunidade",
        "Materiais pedagógicos naturais",
        "Manutenção da yurta e do espaço",
      ],
    },
    ancoraParceria: "p-YurtaCurumim",
    mensagemWhatsApp: "Olá! Quero saber como participar do projeto Yurta Curumim.",
    outros: ["programa-conexao-saude", "yoga", "futebol-vale-jogar"],
  },
];

export function projetoPorSlug(slug: string): Projeto | undefined {
  return PROJETOS.find((p) => p.slug === slug);
}
