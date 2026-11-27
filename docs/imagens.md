# Imagens do site

Copie cada foto com o nome exato para `public/imagens/`, substituindo o provisório. As fotos estão agrupadas pela página em que aparecem. Uma foto que aparece em várias páginas é listada em cada uma delas, com o mesmo nome de arquivo: basta colar o arquivo uma vez.

Galeria de cada projeto: as fotos se chamam `projeto-<slug>-<n>.jpg` (`<n>` = 1, 2, 3…, na ordem em que aparecem) e podem ter qualquer proporção, com pelo menos 1200 px no lado maior. O instituto envia as fotos numa pasta por projeto no Drive. Para incluir uma foto: copie o arquivo com o próximo número, acrescente a entrada em `content/imagens.ts` (com a largura e a altura reais do arquivo depois de otimizado), o id na lista `galeria` do projeto em `content/projetos.ts` e a linha na tabela da página do projeto abaixo. Projeto sem fotos de galeria não mostra a seção.

Depois de colar as fotos, rode `npm run imagens:otimizar` (reduz o tamanho e remove os metadados, inclusive o GPS), faça o commit e publique de novo: a pasta `public/` é copiada para dentro da imagem Docker.

## Todas as páginas

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `logo.svg` | Cabeçalho e rodapé (marca) | vazio (o texto da marca está ao lado) | 1:1, vetorial (SVG) | Sim |

## Início (`/`)

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `projeto-ciranda-cultural-capa.jpg` | Abertura (imagem grande) e cartão em Outros projetos | Participantes da Ciranda Cultural reunidas em comunidade quilombola | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-programa-conexao-saude-capa.jpg` | Destaque do Programa Conexão Saúde | Caminhada em trilha com vista para a serra da Chapada Diamantina | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-circo-capa.jpg` | Seção com imagem ao lado do texto e cartão em Outros projetos | Roda de crianças e educador nas aulas de circo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-yoga-capa.jpg` | Cartão em Outros projetos | Duas praticantes meditando sentadas sobre tapetes, sob a tenda | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Não |
| `projeto-futebol-vale-jogar-capa.jpg` | Cartão em Outros projetos | Crianças jogando futebol na Escolinha Vale Jogar | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-corrida-em-trilha-capa.jpg` | Cartão em Outros projetos | Atleta em corrida de trilha com a serra ao fundo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-yurta-curumim-capa.jpg` | Cartão em Outros projetos | Educadora e crianças em roda dentro da yurta | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |

## Quem somos (`/quem-somos`)

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `quem-somos-espaco.jpg` | Abertura | Espaço do instituto no Vale do Capão, com gramado, tenda de circo e a serra ao fundo | 4:3, 1600 × 1200 px | Sim |
| `quem-somos-historia.jpg` | Seção Nossa história (some no celular) | Mãos plantando uma muda na terra | 10:7, 1200 × 840 px | Sim |
| `equipe-carlos-cesar-junior.jpg` | Coordenação, foto de Carlos Cesar Junior | vazio (o nome está ao lado) | 1:1, recortada no rosto, 800 × 800 px | Não |
| `equipe-adroaldo-vasconcelos.jpg` | Coordenação, foto de Adroaldo Vasconcelos | vazio (o nome está ao lado) | 1:1, recortada no rosto, 800 × 800 px | Não |
| `equipe-luanna-lima.jpg` | Coordenação, foto de Luanna Lima | vazio (o nome está ao lado) | 1:1, recortada no rosto, 800 × 800 px | Não |
| `equipe-fabia-medeiros.jpg` | Coordenação, foto de Fábia Medeiros | vazio (o nome está ao lado) | 1:1, recortada no rosto, 800 × 800 px | Não |
| `equipe-denise-debiasi.jpg` | Coordenação, foto de Denise Debiasi | vazio (o nome está ao lado) | 1:1, recortada no rosto, 800 × 800 px | Não |
| `equipe-juliana-tourinho.jpg` | Coordenação, foto de Juliana Tourinho | vazio (o nome está ao lado) | 1:1, recortada no rosto, 800 × 800 px | Não |
| `equipe-miriam-ribeiro.jpg` | Coordenação, foto de Miriam Ribeiro | vazio (o nome está ao lado) | 1:1, recortada no rosto, 800 × 800 px | Não |
| `projeto-corrida-em-trilha-capa.jpg` | Seção com imagem ao lado do texto | Atleta em corrida de trilha com a serra ao fundo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |

## Projetos (`/projetos`)

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `projeto-programa-conexao-saude-capa.jpg` | Cartão na lista de projetos | Caminhada em trilha com vista para a serra da Chapada Diamantina | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-yoga-capa.jpg` | Cartão na lista de projetos | Duas praticantes meditando sentadas sobre tapetes, sob a tenda | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Não |
| `projeto-futebol-vale-jogar-capa.jpg` | Cartão na lista de projetos | Crianças jogando futebol na Escolinha Vale Jogar | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-corrida-em-trilha-capa.jpg` | Cartão na lista de projetos | Atleta em corrida de trilha com a serra ao fundo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-circo-capa.jpg` | Cartão na lista de projetos | Roda de crianças e educador nas aulas de circo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-ciranda-cultural-capa.jpg` | Cartão na lista de projetos | Participantes da Ciranda Cultural reunidas em comunidade quilombola | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-yurta-curumim-capa.jpg` | Cartão na lista de projetos | Educadora e crianças em roda dentro da yurta | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |

## Projeto Programa Conexão Saúde (`/projetos/programa-conexao-saude`)

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `projeto-programa-conexao-saude-capa.jpg` | Capa da página | Caminhada em trilha com vista para a serra da Chapada Diamantina | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-programa-conexao-saude-1.jpg` | Galeria, foto 1 | Grupo reunido em frente a uma capela branca ao pé da serra | qualquer proporção (horizontal, 1468 × 996 px); a miniatura recorta em 4:3 | Não |
| `projeto-programa-conexao-saude-2.jpg` | Galeria, foto 2 | Participantes com lanternas de cabeça em volta de uma fogueira, à noite | qualquer proporção (vertical, 1351 × 2400 px); a miniatura recorta em 4:3 | Não |
| `projeto-programa-conexao-saude-3.jpg` | Galeria, foto 3 | Silhuetas de duas pessoas na saída de uma gruta, contra o céu azul | qualquer proporção (horizontal, 2400 × 1800 px); a miniatura recorta em 4:3 | Não |
| `projeto-programa-conexao-saude-4.jpg` | Galeria, foto 4 | Caminhantes em campo aberto rumo a um morro de pedra | qualquer proporção (horizontal, 2400 × 1800 px); a miniatura recorta em 4:3 | Não |
| `projeto-programa-conexao-saude-5.jpg` | Galeria, foto 5 | Grupo sorridente no alto de um cânion | qualquer proporção (horizontal, 2400 × 1800 px); a miniatura recorta em 4:3 | Não |
| `projeto-programa-conexao-saude-6.jpg` | Galeria, foto 6 | Caminhante de braços abertos em trilha no planalto, com a serra ao fundo | qualquer proporção (horizontal, 640 × 480 px); a miniatura recorta em 4:3 | Não |
| `projeto-yoga-capa.jpg` | Cartão em Outros projetos | Duas praticantes meditando sentadas sobre tapetes, sob a tenda | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Não |
| `projeto-futebol-vale-jogar-capa.jpg` | Cartão em Outros projetos | Crianças jogando futebol na Escolinha Vale Jogar | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-corrida-em-trilha-capa.jpg` | Cartão em Outros projetos | Atleta em corrida de trilha com a serra ao fundo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |

## Projeto Yoga (`/projetos/yoga`)

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `projeto-yoga-capa.jpg` | Capa da página | Duas praticantes meditando sentadas sobre tapetes, sob a tenda | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Não |
| `projeto-yoga-1.jpg` | Galeria, foto 1 | Praticante em postura de equilíbrio sobre o tapete, sob a tenda | qualquer proporção (vertical, 1200 × 1600 px); a miniatura recorta em 4:3 | Não |
| `projeto-yoga-2.jpg` | Galeria, foto 2 | Dupla em postura da árvore, com as mãos unidas acima da cabeça | qualquer proporção (vertical, 1200 × 1600 px); a miniatura recorta em 4:3 | Não |
| `projeto-yoga-3.jpg` | Galeria, foto 3 | Duas praticantes em postura do guerreiro, de mãos dadas no alto | qualquer proporção (horizontal, 1600 × 1200 px); a miniatura recorta em 4:3 | Não |
| `projeto-yoga-4.jpg` | Galeria, foto 4 | Crianças deitadas em relaxamento sobre tatames coloridos | qualquer proporção (vertical, 1109 × 2400 px); a miniatura recorta em 4:3 | Não |
| `projeto-yoga-5.jpg` | Galeria, foto 5 | Crianças em roda com os braços erguidos durante a aula | qualquer proporção (vertical, 1109 × 2400 px); a miniatura recorta em 4:3 | Não |
| `projeto-futebol-vale-jogar-capa.jpg` | Cartão em Outros projetos | Crianças jogando futebol na Escolinha Vale Jogar | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-corrida-em-trilha-capa.jpg` | Cartão em Outros projetos | Atleta em corrida de trilha com a serra ao fundo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-circo-capa.jpg` | Cartão em Outros projetos | Roda de crianças e educador nas aulas de circo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |

## Projeto Futebol Vale Jogar (`/projetos/futebol-vale-jogar`)

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `projeto-futebol-vale-jogar-capa.jpg` | Capa da página | Crianças jogando futebol na Escolinha Vale Jogar | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-futebol-vale-jogar-1.jpg` | Galeria, foto 1 | Menino chuta a bola em direção ao gol enquanto o goleiro se prepara, no campo de terra | qualquer proporção (horizontal, 2400 × 1602 px); a miniatura recorta em 4:3 | Não |
| `projeto-futebol-vale-jogar-2.jpg` | Galeria, foto 2 | Partida entre times de coletes laranja e verde no campo de terra em frente à escola | qualquer proporção (horizontal, 2400 × 1600 px); a miniatura recorta em 4:3 | Não |
| `projeto-futebol-vale-jogar-3.jpg` | Galeria, foto 3 | Time de uniforme cinza entra em campo em fila, acenando para o público | qualquer proporção (horizontal, 2400 × 1600 px); a miniatura recorta em 4:3 | Não |
| `projeto-futebol-vale-jogar-4.jpg` | Galeria, foto 4 | Crianças de colete verde e laranja disputando a bola perto do gol | qualquer proporção (horizontal, 2400 × 1602 px); a miniatura recorta em 4:3 | Não |
| `projeto-futebol-vale-jogar-5.jpg` | Galeria, foto 5 | Crianças, educadores e famílias reunidos em um campo gramado | qualquer proporção (quadrada, 1079 × 1075 px); a miniatura recorta em 4:3 | Não |
| `projeto-futebol-vale-jogar-6.jpg` | Galeria, foto 6 | Crianças pequenas jogando no campo de terra, com o público assistindo do barranco | qualquer proporção (horizontal, 1600 × 1039 px); a miniatura recorta em 4:3 | Não |
| `projeto-corrida-em-trilha-capa.jpg` | Cartão em Outros projetos | Atleta em corrida de trilha com a serra ao fundo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-circo-capa.jpg` | Cartão em Outros projetos | Roda de crianças e educador nas aulas de circo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-ciranda-cultural-capa.jpg` | Cartão em Outros projetos | Participantes da Ciranda Cultural reunidas em comunidade quilombola | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |

## Projeto Corrida em Trilha (`/projetos/corrida-em-trilha`)

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `projeto-corrida-em-trilha-capa.jpg` | Capa da página | Atleta em corrida de trilha com a serra ao fundo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-corrida-em-trilha-1.jpg` | Galeria, foto 1 | Grupo de corredores com número de peito em estrada de terra | qualquer proporção (vertical, 1579 × 2367 px); a miniatura recorta em 4:3 | Não |
| `projeto-corrida-em-trilha-2.jpg` | Galeria, foto 2 | Corredora em trilha de areia entre a vegetação | qualquer proporção (vertical, 1280 × 1920 px); a miniatura recorta em 4:3 | Não |
| `projeto-corrida-em-trilha-3.jpg` | Galeria, foto 3 | Corredora sorrindo em trilha entre capim alto e rochas | qualquer proporção (vertical, 1590 × 2400 px); a miniatura recorta em 4:3 | Não |
| `projeto-corrida-em-trilha-4.jpg` | Galeria, foto 4 | Corredor subindo trilha de pedras com a serra ao fundo | qualquer proporção (horizontal, 2400 × 1590 px); a miniatura recorta em 4:3 | Não |
| `projeto-circo-capa.jpg` | Cartão em Outros projetos | Roda de crianças e educador nas aulas de circo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-ciranda-cultural-capa.jpg` | Cartão em Outros projetos | Participantes da Ciranda Cultural reunidas em comunidade quilombola | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-yurta-curumim-capa.jpg` | Cartão em Outros projetos | Educadora e crianças em roda dentro da yurta | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |

## Projeto Circo (`/projetos/circo`)

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `projeto-circo-capa.jpg` | Capa da página | Roda de crianças e educador nas aulas de circo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-circo-1.jpg` | Galeria, foto 1 | Alongamento de braços em aula de circo ao ar livre | qualquer proporção (horizontal, 1600 × 1200 px); a miniatura recorta em 4:3 | Não |
| `projeto-circo-2.jpg` | Galeria, foto 2 | Artista abrindo espacate diante de crianças da escola, na quadra | qualquer proporção (horizontal, 1520 × 843 px); a miniatura recorta em 4:3 | Não |
| `projeto-circo-3.jpg` | Galeria, foto 3 | Jovens com monociclos e bicicletas sob a lona do circo | qualquer proporção (horizontal, 1600 × 1200 px); a miniatura recorta em 4:3 | Não |
| `projeto-circo-4.jpg` | Galeria, foto 4 | Crianças e educadores em roda sobre tatame colorido | qualquer proporção (horizontal, 2400 × 1348 px); a miniatura recorta em 4:3 | Não |
| `projeto-ciranda-cultural-capa.jpg` | Cartão em Outros projetos | Participantes da Ciranda Cultural reunidas em comunidade quilombola | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-yurta-curumim-capa.jpg` | Cartão em Outros projetos | Educadora e crianças em roda dentro da yurta | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-programa-conexao-saude-capa.jpg` | Cartão em Outros projetos | Caminhada em trilha com vista para a serra da Chapada Diamantina | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |

## Projeto Ciranda Cultural (`/projetos/ciranda-cultural`)

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `projeto-ciranda-cultural-capa.jpg` | Capa da página | Participantes da Ciranda Cultural reunidas em comunidade quilombola | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-ciranda-cultural-1.jpg` | Galeria, foto 1 | Roda de conversa na varanda, com uma mulher tocando tambor e a serra ao fundo | qualquer proporção (vertical, 1800 × 2400 px); a miniatura recorta em 4:3 | Não |
| `projeto-ciranda-cultural-2.jpg` | Galeria, foto 2 | Criança pintando um painel no chão ao lado de um educador | qualquer proporção (vertical, 1800 × 2400 px); a miniatura recorta em 4:3 | Não |
| `projeto-ciranda-cultural-3.jpg` | Galeria, foto 3 | Mulheres e crianças de saia florida dançando em roda | qualquer proporção (vertical, 1798 × 2400 px); a miniatura recorta em 4:3 | Não |
| `projeto-ciranda-cultural-4.jpg` | Galeria, foto 4 | Grupo em roda, de braços erguidos, em volta de um arranjo de frutas e flores | qualquer proporção (horizontal, 2400 × 1800 px); a miniatura recorta em 4:3 | Não |
| `projeto-yurta-curumim-capa.jpg` | Cartão em Outros projetos | Educadora e crianças em roda dentro da yurta | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-programa-conexao-saude-capa.jpg` | Cartão em Outros projetos | Caminhada em trilha com vista para a serra da Chapada Diamantina | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-yoga-capa.jpg` | Cartão em Outros projetos | Duas praticantes meditando sentadas sobre tapetes, sob a tenda | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Não |

## Projeto Yurta Curumim (`/projetos/yurta-curumim`)

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `projeto-yurta-curumim-capa.jpg` | Capa da página | Educadora e crianças em roda dentro da yurta | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-yurta-curumim-1.jpg` | Galeria, foto 1 | Educadora conversando com crianças sentadas no quintal | qualquer proporção (horizontal, 1600 × 1200 px); a miniatura recorta em 4:3 | Não |
| `projeto-yurta-curumim-2.jpg` | Galeria, foto 2 | Crianças à mesa do lanche imitando os gestos da educadora | qualquer proporção (vertical, 1200 × 1600 px); a miniatura recorta em 4:3 | Não |
| `projeto-yurta-curumim-3.jpg` | Galeria, foto 3 | Crianças desenhando sobre uma lona no gramado, perto da tenda de circo | qualquer proporção (vertical, 1800 × 2400 px); a miniatura recorta em 4:3 | Não |
| `projeto-yurta-curumim-4.jpg` | Galeria, foto 4 | Crianças pintando um painel no chão em frente à yurta | qualquer proporção (horizontal, 2400 × 1800 px); a miniatura recorta em 4:3 | Não |
| `projeto-programa-conexao-saude-capa.jpg` | Cartão em Outros projetos | Caminhada em trilha com vista para a serra da Chapada Diamantina | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-yoga-capa.jpg` | Cartão em Outros projetos | Duas praticantes meditando sentadas sobre tapetes, sob a tenda | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Não |
| `projeto-futebol-vale-jogar-capa.jpg` | Cartão em Outros projetos | Crianças jogando futebol na Escolinha Vale Jogar | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |

## Parcerias (`/parcerias`)

| Arquivo | Onde aparece | Texto alternativo | Proporção / tamanho mínimo | Canvas tem a foto? |
| --- | --- | --- | --- | --- |
| `projeto-futebol-vale-jogar-capa.jpg` | Abertura (imagem grande) e item do projeto na lista de patrocínio | Crianças jogando futebol na Escolinha Vale Jogar | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-programa-conexao-saude-capa.jpg` | Item do projeto na lista de patrocínio | Caminhada em trilha com vista para a serra da Chapada Diamantina | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-yoga-capa.jpg` | Item do projeto na lista de patrocínio | Duas praticantes meditando sentadas sobre tapetes, sob a tenda | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Não |
| `projeto-corrida-em-trilha-capa.jpg` | Item do projeto na lista de patrocínio | Atleta em corrida de trilha com a serra ao fundo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-circo-capa.jpg` | Item do projeto na lista de patrocínio | Roda de crianças e educador nas aulas de circo | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-ciranda-cultural-capa.jpg` | Item do projeto na lista de patrocínio | Participantes da Ciranda Cultural reunidas em comunidade quilombola | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |
| `projeto-yurta-curumim-capa.jpg` | Item do projeto na lista de patrocínio | Educadora e crianças em roda dentro da yurta | 16:9, 1600 × 900 px (o cartão recorta em 4:3) | Sim |

## Contato (`/contato`)

Sem fotos, além da marca em Todas as páginas.
