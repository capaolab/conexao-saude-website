import type { Metadata } from "next";
import Link from "next/link";
import Imagem from "@/components/Imagem";
import { CIDADES, EQUIPE, LINHA_DO_TEMPO } from "@/content/quem-somos";

export const metadata: Metadata = { title: "Quem somos" };

export default function QuemSomos() {
  return (
    <>
      <section style={{ padding: "72px 0 0" }}>
        <div className="wrap cols c2" style={{ alignItems: "center" }}>
          <div className="stack" style={{ gap: 24 }}>
            <p className="over">Quem somos</p>
            <h1 className="dsp">Um instituto que já nasce gigante</h1>
            <p className="lead">
              Formalizado em 7 de maio de 2025, o Instituto Conexão Saúde (ICS) reúne mais de 20 anos de trabalho dos seus sócios-fundadores em saúde, esporte, cultura, educação e meio ambiente.
            </p>
            <p className="muted" style={{ margin: 0 }}>
              Com sede no Vale do Capão, na Chapada Diamantina, o ICS promove a integração sustentável do ser humano com a natureza.
            </p>
          </div>
          <Imagem
            id="quem-somos-espaco"
            className="img hero-img"
            style={{ height: 600 }}
            preload
            sizes="(max-width: 900px) 100vw, 540px"
          />
        </div>
      </section>

      <section className="sec">
        <div className="wrap cols c3" style={{ gap: 40 }}>
          <div className="stack" style={{ gap: 12, borderTop: "3px solid var(--brand)", paddingTop: 20 }}>
            <p className="over">Missão</p>
            <p style={{ margin: 0 }}>
              Promover o bem-estar através da integração da arte, cultura, educação, esporte e saúde integral, comprometendo-se com a sustentabilidade ambiental e a qualidade de vida da comunidade.
            </p>
          </div>
          <div className="stack" style={{ gap: 12, borderTop: "3px solid var(--brand)", paddingTop: 20 }}>
            <p className="over">Visão</p>
            <p style={{ margin: 0 }}>
              Ser referência em práticas integradas de arte, cultura, educação, esporte e saúde, por uma comunidade mais saudável, consciente e engajada, onde todos possam desenvolver seu potencial biopsicossocial.
            </p>
          </div>
          <div className="stack" style={{ gap: 12, borderTop: "3px solid var(--lime)", paddingTop: 20 }}>
            <p className="over" style={{ color: "var(--earth)" }}>
              Bem Viver
            </p>
            <p style={{ margin: 0 }}>
              Seguimos a cosmovisão do Bem Viver, trazida pelos povos indígenas: o bem-estar comunitário caminha junto da saúde integral e da formação de seres humanos para habitar uma Terra Viva.
            </p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--surface-sunken)" }}>
        <div className="wrap cols c2" style={{ alignItems: "start" }}>
          <div className="stack sticky" style={{ gap: 16 }}>
            <p className="over">Nossa história</p>
            <h2 className="h1">Mais de duas décadas no território</h2>
            <p className="lead" style={{ fontSize: 18, lineHeight: "28px" }}>
              Antes de ser instituto, já éramos uma rede de projetos que cresceu junto com a comunidade.
            </p>
            <Imagem
              id="quem-somos-historia"
              className="img hide-sm"
              style={{ height: 280, marginTop: 16, borderRadius: "var(--radius-md)" }}
              sizes="540px"
            />
          </div>
          <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {LINHA_DO_TEMPO.map((t) => (
              <li key={t.ano} className="tl-row" style={{ padding: "20px 0", borderTop: "1px solid var(--line)" }}>
                <span className="h3" style={{ color: "var(--brand)", fontSize: 20, lineHeight: "28px" }}>
                  {t.ano}
                </span>
                <span>{t.texto}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap stack" style={{ gap: 40 }}>
          <div className="cols c57" style={{ alignItems: "end" }}>
            <div className="stack" style={{ gap: 12 }}>
              <p className="over">Coordenação</p>
              <h2 className="h1">Quem cuida dos projetos</h2>
            </div>
            <p className="muted" style={{ margin: 0 }}>
              A diretoria e as coordenações de área e de projeto do instituto.
            </p>
          </div>
          <ul className="cols c2 equipe">
            {EQUIPE.map((e) => (
              <li key={e.nome} className="pessoa">
                <Imagem id={e.imagem} className="pessoa-foto" sizes="120px" />
                <div className="stack" style={{ gap: 12 }}>
                  <div className="stack" style={{ gap: 2 }}>
                    <h3 className="h3" style={{ fontSize: 22, lineHeight: "30px" }}>
                      {e.nome}
                    </h3>
                    <p className="small" style={{ margin: 0, fontWeight: 700, color: "var(--brand)" }}>
                      {e.cargo}
                    </p>
                  </div>
                  <p className="muted" style={{ margin: 0, fontSize: 15, lineHeight: "25px" }}>
                    {e.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap cols c2" style={{ alignItems: "center" }}>
          <Imagem
            id="projeto-corrida-em-trilha-capa"
            className="img"
            style={{ height: 420 }}
            sizes="(max-width: 900px) 100vw, 540px"
          />
          <div className="stack" style={{ gap: 16 }}>
            <p className="over">Onde atuamos</p>
            <h2 className="h1">Do Vale do Capão para a Chapada Diamantina</h2>
            <p className="lead" style={{ fontSize: 18, lineHeight: "28px" }}>
              Nossa sede fica em Caeté-Açu (Vale do Capão), e os projetos já chegaram a:
            </p>
            <ul className="row" style={{ listStyle: "none", margin: 0, padding: 0, gap: 8 }}>
              {CIDADES.map((c) => (
                <li key={c} className="ics-tag">
                  {c}
                </li>
              ))}
            </ul>
            <p className="muted small" style={{ margin: "8px 0 0" }}>
              Finalidades: proteção ao patrimônio público, social, artístico, histórico, turístico, paisagístico e ao meio ambiente, e promoção de atividades de relevância pública e social.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div
            className="row panel"
            style={{
              gap: 24,
              justifyContent: "space-between",
              background: "var(--brand)",
              borderRadius: "var(--radius-lg)",
              padding: 48,
            }}
          >
            <h2 className="h2" style={{ color: "var(--on-brand)", maxWidth: 560 }}>
              Quer caminhar com a gente?
            </h2>
            <div className="row" style={{ gap: 12 }}>
              <Link href="/projetos" className="ics-btn m-full" style={{ color: "var(--on-brand)", borderColor: "var(--on-brand)" }}>
                Ver projetos
              </Link>
              <Link href="/contato" className="ics-btn ics-btn--highlight m-full">
                Fale com a gente
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
