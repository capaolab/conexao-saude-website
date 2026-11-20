import type { Metadata } from "next";
import Link from "next/link";
import ListaProjetos from "@/components/projeto/ListaProjetos";
import SetaDireita from "@/components/projeto/SetaDireita";
import { PROJETOS, type Area } from "@/content/projetos";

export const metadata: Metadata = { title: "Projetos" };

const FOCOS: { area: Area; nome: string; ods: string; texto: string }[] = [
  { area: "saude", nome: "Saúde", ods: "ODS 3", texto: "Práticas ao ar livre, alimentação natural, yoga e cuidado integral." },
  { area: "esporte", nome: "Esporte", ods: "ODS 3, 4, 10", texto: "Futebol e corrida em trilha como formação e cidadania." },
  { area: "cultura", nome: "Cultura", ods: "ODS 3, 4, 5, 10, 11, 17", texto: "Circo, brincadeiras e valorização da cultura negra e quilombola." },
  { area: "educacao", nome: "Educação", ods: "ODS 3, 4, 10, 11, 12, 16", texto: "Educação infantil integral, inspirada na pedagogia Waldorf." },
];

const REALIZADOS = [
  {
    ano: "2009–2012",
    titulo: "Escolinha de Futebol Vale Jogar, 1ª fase",
    texto:
      "Avaliação técnica do E.C. Bahia com 3 garotos revelados, equipe oficial do E.C. Bahia e vice-campeonato na Copinha Tricolor.",
    slug: "futebol-vale-jogar",
  },
  {
    ano: "2026",
    titulo: "Campeonato Baiano de Corrida em Trilha e Montanha",
    texto:
      "Com a TRS Chapada Diamantina e a Federação Bahiana de Atletismo: cerca de 300 atletas de diferentes estados e países.",
    slug: "corrida-em-trilha",
  },
];

const linhaStyle = {
  padding: "24px 0",
  borderTop: "1px solid var(--line)",
};

export default function Page() {
  return (
    <>
      <section style={{ padding: "72px 0 0" }}>
        <div className="wrap cols c75" style={{ alignItems: "end" }}>
          <div className="stack" style={{ gap: 20 }}>
            <p className="over">Projetos</p>
            <h1 className="dsp">Projetos que cuidam das pessoas e do território</h1>
          </div>
          <p className="lead" style={{ fontSize: 18, lineHeight: "28px" }}>
            Desde 2003 desenvolvemos projetos de saúde, esporte, cultura e educação na Chapada Diamantina, guiados pela cosmovisão do Bem Viver e pelos Objetivos de Desenvolvimento Sustentável da ONU.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 56 }}>
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="stack" style={{ gap: 8 }}>
            <p className="over">Foco de atuação</p>
            <h2 className="h2">Quatro áreas, um mesmo cuidado</h2>
          </div>
          <div className="cols c4" style={{ gap: 32 }}>
            {FOCOS.map((f) => {
              const n = PROJETOS.filter((p) => p.area === f.area).length;
              return (
                <div key={f.area} className="rule stack" style={{ gap: 8, borderTop: "3px solid var(--brand)" }}>
                  <h3 className="h3" style={{ fontSize: 22, lineHeight: "30px" }}>
                    {f.nome}
                  </h3>
                  <span className="small" style={{ fontWeight: 800, color: "var(--brand)" }}>
                    {f.ods}
                  </span>
                  <p className="muted small" style={{ margin: 0 }}>
                    {f.texto}
                  </p>
                  <span className="small muted">
                    {n} {n === 1 ? "projeto ativo" : "projetos ativos"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec" id="ativos" style={{ paddingTop: 0 }}>
        <ListaProjetos />
      </section>

      <section className="sec" style={{ background: "var(--surface-sunken)" }}>
        <div className="wrap cols c57" style={{ alignItems: "start" }}>
          <div className="stack sticky" style={{ gap: 12 }}>
            <p className="over">Memória</p>
            <h2 className="h1">Já realizados</h2>
            <p className="muted" style={{ margin: 0 }}>
              Fases e eventos que marcaram a história dos projetos.
            </p>
          </div>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, borderBottom: "1px solid var(--line)" }}>
            {REALIZADOS.map((r) => (
              <li key={r.titulo} className="tl-row" style={linhaStyle}>
                <span className="h3" style={{ color: "var(--brand)", fontSize: 20, lineHeight: "28px" }}>
                  {r.ano}
                </span>
                <div className="stack" style={{ gap: 6 }}>
                  <h3 className="h3" style={{ fontSize: 20, lineHeight: "28px" }}>
                    {r.titulo}
                  </h3>
                  <p className="muted" style={{ margin: 0 }}>
                    {r.texto}
                  </p>
                  <Link className="ics-link small" style={{ alignSelf: "flex-start" }} href={`/projetos/${r.slug}`}>
                    Ver o projeto
                  </Link>
                </div>
              </li>
            ))}
            <li className="tl-row" style={linhaStyle}>
              <span className="h3 muted" style={{ fontSize: 20, lineHeight: "28px" }}>
                [ano]
              </span>
              <p className="muted" style={{ margin: 0 }}>
                [Outros projetos já executados pelos sócios-fundadores desde 2003: a receber do instituto]
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div
            className="cols c2 panel"
            style={{
              gap: 32,
              alignItems: "center",
              background: "var(--brand)",
              borderRadius: "var(--radius-lg)",
              padding: 56,
            }}
          >
            <div className="stack" style={{ gap: 12 }}>
              <p className="over" style={{ color: "var(--lime)" }}>
                Para instituições
              </p>
              <h2 className="h2" style={{ color: "var(--on-brand)" }}>
                Patrocine um projeto
              </h2>
              <p style={{ margin: 0, color: "var(--olive-soft)" }}>
                Veja o alcance de cada projeto, o que o patrocínio viabiliza e as contrapartidas para a sua instituição.
              </p>
            </div>
            <div className="row" style={{ gap: 12, justifyContent: "flex-end" }}>
              <Link className="ics-btn ics-btn--highlight m-full" href="/parcerias#projetos-apoio">
                Escolher projeto para patrocinar <SetaDireita />
              </Link>
              <Link
                className="ics-btn m-full"
                style={{ color: "var(--on-brand)", borderColor: "var(--on-brand)" }}
                href="/parcerias"
              >
                Formas de parceria
              </Link>
            </div>
          </div>
          <p className="muted small" style={{ margin: "24px 0 0" }}>
            As notícias dos projetos vão ficar no blog do instituto, que ainda será planejado.
          </p>
        </div>
      </section>
    </>
  );
}
