import Link from "next/link";
import Imagem from "@/components/Imagem";
import CartaoProjeto from "@/components/projeto/CartaoProjeto";
import SetaDireita from "@/components/projeto/SetaDireita";
import { AREAS_INICIO, NUMEROS } from "@/content/inicio";
import { PROJETOS } from "@/content/projetos";

export default function Inicio() {
  const outros = PROJETOS.filter((p) => p.slug !== "programa-conexao-saude");
  return (
    <>
      <section style={{ padding: "72px 0 0" }}>
        <div className="wrap stack" style={{ gap: 40 }}>
          <div className="cols c75" style={{ alignItems: "end" }}>
            <div className="stack" style={{ gap: 20 }}>
              <p className="over">Vale do Capão · Chapada Diamantina</p>
              <h1 className="dsp">Saúde integral, em conexão com a natureza</h1>
            </div>
            <div className="stack" style={{ gap: 24 }}>
              <p className="lead" style={{ fontSize: 18, lineHeight: "28px" }}>
                Integramos arte, cultura, educação, esporte e saúde para o bem-estar da comunidade, com compromisso com a sustentabilidade e a cosmovisão do Bem Viver.
              </p>
              <div className="row" style={{ gap: 12 }}>
                <Link href="/projetos" className="ics-btn ics-btn--primary m-full">
                  Conheça os projetos
                </Link>
                <Link href="/parcerias" className="ics-btn ics-btn--secondary m-full">
                  Seja um parceiro
                </Link>
              </div>
            </div>
          </div>
          <Imagem
            id="projeto-ciranda-cultural-capa"
            className="img hero-img"
            style={{ height: 560, objectPosition: "center 62%" }}
            preload
            sizes="(max-width: 1240px) 100vw, 1160px"
          />
          <div className="cols c4" style={{ gap: 32 }}>
            {NUMEROS.map((n) => (
              <div key={n.legenda} className="rule stack" style={{ gap: 4 }}>
                <span className="h2" style={{ color: "var(--brand)" }}>
                  {n.valor}
                </span>
                <span className="muted small">{n.legenda}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="projetos">
        <div className="wrap stack" style={{ gap: 56 }}>
          <div className="cols c57" style={{ alignItems: "end" }}>
            <div className="stack" style={{ gap: 12 }}>
              <p className="over">O que fazemos</p>
              <h2 className="h1">Sete projetos, quatro áreas</h2>
            </div>
            <p className="lead" style={{ fontSize: 18, lineHeight: "28px" }}>
              Nossas ações estão alinhadas aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
            </p>
          </div>
          <div className="cols c4" style={{ gap: 32 }}>
            {AREAS_INICIO.map((a) => (
              <div key={a.area} className="rule stack" style={{ gap: 6, borderTop: "3px solid var(--brand)" }}>
                <div className="row" style={{ gap: 8, justifyContent: "space-between" }}>
                  <h3 className="h3" style={{ fontSize: 20, lineHeight: "28px" }}>
                    {a.nome}
                  </h3>
                  <span className="muted small" style={{ fontWeight: 700 }}>
                    {a.ods}
                  </span>
                </div>
                <p className="muted small" style={{ margin: 0 }}>
                  {a.texto}
                </p>
              </div>
            ))}
          </div>
          <article
            className="cols c2 feat"
            style={{
              alignItems: "center",
              background: "var(--surface-sunken)",
              borderRadius: "var(--radius-lg)",
              padding: 24,
              gap: 40,
            }}
          >
            <Imagem
              id="projeto-programa-conexao-saude-capa"
              className="img"
              style={{ height: 440, borderRadius: "var(--radius-md)" }}
              sizes="(max-width: 900px) 100vw, 540px"
            />
            <div className="stack" style={{ gap: 16, padding: 8 }}>
              <div>
                <span className="ics-tag">Saúde · desde 2003</span>
              </div>
              <h3 className="h1">
                <Link href="/projetos/programa-conexao-saude" style={{ color: "inherit", textDecoration: "none" }}>
                  Programa Conexão Saúde
                </Link>
              </h3>
              <p style={{ margin: 0 }}>
                O projeto que dá nome ao instituto. Atividades ao ar livre que favorecem o desenvolvimento humano na sua integralidade: trekking e caminhadas na natureza, alimentação natural e orgânica, meditação, yoga e dinâmicas de integração em grupo.
              </p>
              <p className="muted" style={{ margin: 0 }}>
                Mais de 100 grupos e 3 mil pessoas de diferentes idades e estados, em Palmeiras, Ibicoara, Lençóis, Itaetê, Mucugê e Andaraí.
              </p>
              <div>
                <Link className="ics-btn ics-btn--secondary" href="/projetos/programa-conexao-saude">
                  Conhecer o programa <SetaDireita />
                </Link>
              </div>
            </div>
          </article>
          <div className="cols c3" style={{ gap: "40px 32px" }}>
            {outros.map((p) => (
              <CartaoProjeto key={p.slug} projeto={p} />
            ))}
          </div>
          <div>
            <Link className="ics-btn ics-btn--primary m-full" href="/projetos">
              Ver todos os projetos <SetaDireita />
            </Link>
          </div>
        </div>
      </section>

      <section className="sec" id="parcerias" style={{ background: "var(--brand)", color: "var(--on-brand)" }}>
        <div className="wrap stack" style={{ gap: 48 }}>
          <div className="cols c57" style={{ alignItems: "end" }}>
            <div className="stack" style={{ gap: 16 }}>
              <p className="over" style={{ color: "var(--lime)" }}>
                Patrocínio
              </p>
              <h2 className="h1" style={{ color: "var(--on-brand)" }}>
                Patrocine o instituto ou um projeto
              </h2>
            </div>
            <p className="lead" style={{ color: "var(--olive-soft)", fontSize: 18, lineHeight: "28px" }}>
              São mais de 20 anos de trabalho, 7 projetos ativos e 8 cidades da Chapada Diamantina. Sua empresa pode apoiar tudo isso de uma vez ou escolher a causa que mais combina com a sua marca.
            </p>
          </div>
          <div className="cols c2" style={{ gap: 24 }}>
            <Link className="opt stack" href="/parcerias" style={{ gap: 10, color: "var(--on-brand)", textDecoration: "none" }}>
              <span className="num">01</span>
              <h3 className="h3" style={{ color: "var(--on-brand)" }}>
                Patrocínio institucional
              </h3>
              <p style={{ margin: 0, color: "var(--olive-soft)" }}>
                Sustenta a equipe, o espaço e a continuidade dos sete projetos.
              </p>
              <span className="row" style={{ gap: 8, fontWeight: 800, color: "var(--lime)" }}>
                Ver formas de patrocínio <SetaDireita />
              </span>
            </Link>
            <Link
              className="opt stack"
              href="/parcerias#projetos-apoio"
              style={{ gap: 10, color: "var(--on-brand)", textDecoration: "none" }}
            >
              <span className="num">02</span>
              <h3 className="h3" style={{ color: "var(--on-brand)" }}>
                Patrocínio de projeto
              </h3>
              <p style={{ margin: 0, color: "var(--olive-soft)" }}>
                Futebol, corrida em trilha, circo, cultura quilombola, educação infantil ou saúde: sua marca ao lado de um projeto.
              </p>
              <span className="row" style={{ gap: 8, fontWeight: 800, color: "var(--lime)" }}>
                Escolher um projeto <SetaDireita />
              </span>
            </Link>
          </div>
          <div
            className="row"
            style={{ gap: 16, justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid var(--brand-line)" }}
          >
            <p className="small" style={{ margin: 0, color: "var(--olive-soft)", maxWidth: "70ch" }}>
              <strong style={{ color: "var(--on-brand)" }}>Já realizamos ações com</strong> TRS Chapada Diamantina, Federação Bahiana de Atletismo, Circo Ilha de Mato e Secretaria de Cultura da Bahia.
            </p>
            <Link href="/parcerias" className="ics-btn ics-btn--highlight m-full">
              Quero patrocinar
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap cols c2" style={{ alignItems: "center" }}>
          <Imagem
            id="projeto-circo-capa"
            className="img"
            style={{ height: 420 }}
            sizes="(max-width: 900px) 100vw, 540px"
          />
          <div className="stack" style={{ gap: 20 }}>
            <p className="over" style={{ color: "var(--earth)" }}>
              Bem Viver
            </p>
            <blockquote className="h1" style={{ margin: 0, color: "var(--brand)" }}>
              “Formar seres humanos para habitar uma Terra Viva.”
            </blockquote>
            <p className="lead" style={{ fontSize: 18, lineHeight: "28px" }}>
              Inspirados pela cosmovisão dos povos indígenas, buscamos a confluência de saberes entre gerações, próprios da realidade local, para fortalecer vínculos e identidades comunitárias.
            </p>
            <div>
              <Link href="/quem-somos" className="ics-btn ics-btn--secondary">
                Conheça o instituto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
