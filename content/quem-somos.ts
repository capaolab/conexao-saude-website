import type { ImagemId } from "@/content/imagens";

export const LINHA_DO_TEMPO = [
  { ano: "2003", texto: "Começa o Programa Conexão Saúde, com atividades ao ar livre em cidades da Chapada." },
  { ano: "2009", texto: "Nasce a Escolinha de Futebol Vale Jogar, que chegou a time oficial do E.C. Bahia." },
  { ano: "2011", texto: "É fundado o Circo Ilha de Mato, parceiro nas aulas de circo para a comunidade." },
  { ano: "2017", texto: "Primeira edição da Corrida em Trilha." },
  { ano: "2020", texto: "Começa a Yurta Curumim. O Circo Ilha de Mato é reconhecido como Ponto de Cultura pela Secult/BA." },
  { ano: "2023", texto: "O Futebol Vale Jogar volta, com intercâmbios e eventos." },
  { ano: "2024", texto: "Nasce a Ciranda Cultural com comunidades quilombolas." },
  { ano: "2025", texto: "Fundação formal do Instituto Conexão Saúde." },
  { ano: "2026", texto: "Realização do Campeonato Baiano de Corrida em Trilha e Montanha no Vale do Capão." },
];

// Ordem, cargos e currículos do documento "Bio currículo resumido – coordenadores ICS" (nov/2026).
export const EQUIPE: { nome: string; cargo: string; imagem: ImagemId; bio: string }[] = [
  {
    nome: "Carlos Cesar Junior",
    cargo: "Presidente",
    imagem: "equipe-carlos-cesar-junior",
    bio: "Natural de Salvador, reside há 20 anos na Chapada Diamantina. Casado, pai e educador físico. Desenvolve projetos e ações na área da saúde e esporte desde 2003, sendo atualmente Diretor de Esporte do município de Palmeiras. Desde 2010 atuou como professor de educação física em diversas escolas do território, incluindo Palmeiras e Seabra, sendo professor do quadro efetivo do município de Palmeiras, na Escola Municipal do Vale do Capão. Membro da Associação de Condutores de Visitantes do Vale do Capão (ACV-VC) e brigadista voluntário desde 2004. Realiza diversos eventos nas áreas de saúde, esporte, práticas corporais de aventura e educação, como as Corridas em Trilha do Vale do Capão (4 edições: 2017, 2018, 2023 e 2026). Fundador e coordenador da Escolinha de Futebol Vale Jogar. Coordenador do projeto Esporte por Toda Parte, núcleos Vale do Capão e Palmeiras. Cofundador do Programa Conexão Saúde, desde 2003. Coordenador da Câmara Técnica de Esporte e Lazer do CODETER Chapada Diamantina.",
  },
  {
    nome: "Adroaldo Vasconcelos",
    cargo: "Diretor de comunicação",
    imagem: "equipe-adroaldo-vasconcelos",
    bio: "Paulista com residência na Chapada Diamantina desde 1998, onde construiu família e trabalhou como comerciante no setor do turismo, com pousada e agência, por mais de 20 anos. É sócio-fundador da Associação dos Condutores de Visitantes do Vale do Capão (ACV-VC) e também da Brigada Voluntária de Combate a Incêndios Florestais (BV-VC), onde esteve por 15 anos como coordenador. Instrutor de cursos de primeiros socorros em áreas remotas e instrutor de formação e capacitação de brigadas comunitárias de prevenção e combate a incêndios florestais. Coautor da cartilha Conhecer para Proteger, projeto executado pela Escola Comunitária Brilho do Cristal em 2023. Atualmente é mestre cervejeiro e realizador de eventos esportivos.",
  },
  {
    nome: "Luanna Lima",
    cargo: "Diretora de finanças",
    imagem: "equipe-luanna-lima",
    bio: "Mulher, mãe de 4 filhos, natural de Salvador (BA), reside há mais de 15 anos no Vale do Capão, onde fundou e coordena, desde 2012, o Circo Ilha de Mato, um espaço artístico-cultural reconhecido pelo MinC como Ponto de Cultura, que integra arte, cultura, saúde e conexão com a natureza. É artista circense, proponente e executora de diversos projetos culturais contemplados em nível estadual, municipal e federal. Psicóloga e psicodramatista com especialização em psicoterapia infantojuvenil, atua na área clínica com atendimentos no Vale do Capão, em Seabra e online. Cofundadora do Programa Conexão Saúde, desde 2003.",
  },
  {
    nome: "Fábia Medeiros",
    cargo: "Coordenadora da Yurta Curumim",
    imagem: "equipe-fabia-medeiros",
    bio: "Mulher, natural de Florianópolis, reside na Bahia há mais de 25 anos e, desde 2019, desenvolve no Vale do Capão o projeto de arte-educação Yurta Curumim, para crianças de 2 a 6 anos, em parceria com o Circo Ilha de Mato. É artista, clown e musicista. Graduada em Educação Artística, Licenciatura em Artes Cênicas, pela Universidade do Estado de Santa Catarina (UDESC, 1993), com pós-graduação no Curso de Fundamentação em Pedagogia Waldorf (2017), atuou por 8 anos como professora na escola Recrearte, em Seabra (BA), e desde 1995 trabalha na área da educação infantil como educadora, seja como professora ou monitora de oficinas e projetos.",
  },
  {
    nome: "Denise Debiasi",
    cargo: "Coordenadora de Yoga e Ações Continuadas",
    imagem: "equipe-denise-debiasi",
    bio: "Natural de Buenos Aires (Argentina), reside na Chapada Diamantina há 8 anos. Professora de yoga e de tecido no Circo do Capão, entre outros espaços do Vale do Capão. Artista e acróbata aérea desde 2005, com experiências em diversos espaços culturais na Argentina e no Brasil. Fundadora do espaço Aluperan, artes de circo, em Buenos Aires (2011 a 2016). Desde 2024 auxilia na produção executiva de ações e projetos do Circo Ilha de Mato, com aulas de yoga para adultos e crianças. Também é mãe colaboradora do projeto de arte-educação Yurta Curumim.",
  },
  {
    nome: "Juliana Tourinho",
    cargo: "Coordenadora das áreas Educação e Cultura",
    imagem: "equipe-juliana-tourinho",
    bio: "Natural de Salvador (BA), mãe de 3, arte-educadora com ampla experiência na área de artes, com ênfase na educação infantil, educação formal e não formal, atuando principalmente com os temas: desenvolvimento infantil, educação integral, criança e natureza, cultura do brincar e cultura das infâncias. Desenvolve projetos em arte-educação e iniciativas educacionais desde 2010. É interessada e atuante na arte da palhaçaria feminina e da capoeira angola. Licenciada em Educação Artística pela UFPA, com especialização em Arte-Educação, Cultura Brasileira e Linguagens Contemporâneas pela UFBA em andamento, e aluna especial do mestrado do PPLSA/UFPA. Desenvolve atualmente no estado do Pará diversos projetos na área da educação, arte, cultura e meio ambiente.",
  },
  {
    nome: "Miriam Ribeiro",
    cargo: "Coordenadora das áreas Saúde e Esporte",
    imagem: "equipe-miriam-ribeiro",
    bio: "Mulher, mãe, enfermeira sanitarista (UFBA, 1980) aposentada, com especialização em fitoterapia e naturopatia pela UFBA (1990) e em Somatic Psychotherapy Biosynthesis pela International Foundation for Biosynthesis (Suíça, 1994 a 1998). Atua como psicoterapeuta holística, com diversas formações: Somatic Experiencing pela Foundation for Human Enrichment (FHE, EUA, 2002), Taoísta para Saúde e Longevidade (UNIPAZ, 1999) e Dolphinbreath com Harriet Rose (1996). Tem ampla atuação na área da saúde, onde implantou e coordenou a Rede Cegonha no Distrito Sanitário de Itapuã, com relevante reconhecimento em Salvador, no estado e no Ministério da Saúde.",
  },
];

export const CIDADES = ["Palmeiras", "Lençóis", "Ibicoara", "Itaetê", "Mucugê", "Andaraí", "Seabra", "Iraquara"];
