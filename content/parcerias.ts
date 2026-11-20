export const ALCANCE_POR_PROJETO: Record<string, string> = {
  "programa-conexao-saude": "+3 mil pessoas desde 2003",
  yoga: "Turmas semanais desde 2024",
  "futebol-vale-jogar": "~300 crianças por ano",
  "corrida-em-trilha": "~300 atletas em 2026",
  circo: "~50 alunos por semestre",
  "ciranda-cultural": "7 quilombos, ~800 pessoas",
  "yurta-curumim": "~30 famílias por ano",
};

export const ODS_POR_PROJETO: Record<string, string> = {
  "programa-conexao-saude": "ODS 3",
  yoga: "ODS 3",
  "futebol-vale-jogar": "ODS 3, 4, 10",
  "corrida-em-trilha": "ODS 3, 15, 17",
  circo: "ODS 3, 4, 5, 10, 11, 17",
  "ciranda-cultural": "ODS 3, 4, 5, 10, 11, 17",
  "yurta-curumim": "ODS 3, 4, 10, 11, 12, 16",
};

export const NUMEROS = [
  { valor: "Desde 2003", legenda: "projetos dos sócios-fundadores na Chapada" },
  { valor: "7", legenda: "projetos ativos em 4 áreas" },
  { valor: "8", legenda: "cidades da Chapada Diamantina" },
  { valor: "9", legenda: "ODS da ONU contemplados" },
  { valor: "+3 mil", legenda: "pessoas no Programa Conexão Saúde" },
  { valor: "~300", legenda: "crianças por ano no futebol" },
  { valor: "~800", legenda: "pessoas em 7 comunidades quilombolas" },
  { valor: "~300", legenda: "atletas no Campeonato Baiano 2026" },
];

export const FORMAS_DE_APOIO = [
  { titulo: "Patrocínio institucional", texto: "Apoia o instituto como um todo: equipe, gestão, espaço e a continuidade dos sete projetos. É a forma que dá mais estabilidade ao trabalho." },
  { titulo: "Patrocínio de projeto", texto: "Sua marca ao lado de um projeto específico, com recursos direcionados e relatório do que eles viabilizaram." },
  { titulo: "Eventos e intercâmbios", texto: "Cotas para provas de corrida em trilha, jogos e encontros culturais, com alcance regional e nacional." },
  { titulo: "Editais e leis de incentivo", texto: "Escrevemos juntos projetos alinhados aos ODS para editais públicos e privados. [Habilitação em leis de incentivo a confirmar]" },
  { titulo: "Apoio técnico e em produtos", texto: "Serviços, equipamentos, transporte, alimentação ou espaço. Também conta, e muito." },
];

export const CONTRAPARTIDAS = [
  { titulo: "Sua marca no site e nos materiais", texto: "Na página do projeto apoiado, em uniformes, banners e peças de divulgação, conforme a cota." },
  { titulo: "Relatório de impacto", texto: "Números, fotos e histórias do que o seu apoio fez acontecer, prontos para relatórios ESG e de sustentabilidade." },
  { titulo: "Conexão com os ODS", texto: "Cada projeto tem os ODS mapeados, para facilitar a prestação de contas da sua instituição." },
  { titulo: "Visita aos projetos", texto: "Sua equipe pode conhecer de perto as atividades no Vale do Capão e na Chapada." },
];

export const PASSOS = [
  { titulo: "Conversa", texto: "Entendemos o que sua instituição busca e apresentamos os projetos que combinam com ela." },
  { titulo: "Proposta sob medida", texto: "Montamos a cota, o valor e as contrapartidas para o projeto ou para o instituto." },
  { titulo: "Formalização", texto: "Assinamos o termo de patrocínio ou de parceria com o CNPJ do instituto." },
  { titulo: "Acompanhamento", texto: "Você recebe notícias ao longo do ano e um relatório de impacto ao final." },
];

export const PARCEIROS = [
  "TRS Chapada Diamantina",
  "Federação Bahiana de Atletismo",
  "Circo Ilha de Mato",
  "Secretaria de Cultura da Bahia",
  "Esporte Clube Bahia",
];

export const ASSUNTOS_CONTATO = [
  { titulo: "Quero participar de um projeto", texto: "Inscrições, horários e como participar." },
  { titulo: "Inscrever meu filho ou filha", texto: "Futebol, circo e Yurta Curumim." },
  { titulo: "Quero ser voluntário(a)", texto: "Conte como gostaria de ajudar." },
  { titulo: "Imprensa", texto: "Entrevistas, fotos e informações." },
];

export const CORPO_PATROCINIO = (alvo: string) =>
  `Olá! Tenho interesse em patrocinar ${alvo}.\n\nInstituição:\nResponsável:\nTelefone:\nForma de apoio (financeiro, produtos, serviços, evento):\n\n`;

export const CORPO_PROPOSTA =
  "Olá! Gostaria de conversar sobre uma parceria com o Instituto Conexão Saúde.\n\nInstituição:\nResponsável e cargo:\nProjeto ou área de interesse:\nTipo de apoio (financeiro, técnico, espaço, divulgação):\n";
