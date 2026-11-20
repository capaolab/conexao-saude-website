import Link from "next/link";
import Imagem from "@/components/Imagem";
import { linkWhatsApp } from "@/lib/contato";
import { AREAS, projetoPorSlug, type Projeto } from "@/content/projetos";
import CartaoProjeto from "./CartaoProjeto";
import SetaDireita from "./SetaDireita";

export default function PaginaProjeto({ projeto }: { projeto: Projeto }) {
  const area = AREAS[projeto.area];
  const parceria = `/parcerias#${projeto.ancoraParceria}`;
  const outros = projeto.outros
    .map((s) => projetoPorSlug(s))
    .filter((p): p is Projeto => p !== undefined);

  return (
    <>
      <section style={{ padding: "40px 0 0" }}>
        <div className="wrap stack" style={{ gap: 32 }}>
          <nav className="crumb" aria-label="Você está em">
            <Link href="/projetos">Projetos</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{projeto.nome}</span>
          </nav>
          <div className="cols c75" style={{ alignItems: "end" }}>
            <div className="stack" style={{ gap: 20 }}>
              <div className="row" style={{ gap: 8 }}>
                <span className={area.tag ? `ics-tag ics-tag--${area.tag}` : "ics-tag"}>{area.rotulo}</span>
                <span className="ics-tag ics-tag--lime">{projeto.status}</span>
              </div>
              <h1 className="dsp">{projeto.nome}</h1>
            </div>
            <p className="lead" style={{ fontSize: 18, lineHeight: "28px" }}>
              {projeto.lead}
            </p>
          </div>
          <Imagem
            id={projeto.imagem}
            className="img hero-img"
            style={{ height: 520 }}
            sizes="(max-width: 1240px) 100vw, 1160px"
            priority
          />
          <div className="cols c4" style={{ gap: 32 }}>
            {projeto.destaques.map((d) => (
              <div key={d.legenda} className="rule stack" style={{ gap: 4 }}>
                <span className="h2" style={{ color: "var(--brand)" }}>
                  {d.valor}
                </span>
                <span className="muted small">{d.legenda}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap cols c75" style={{ alignItems: "start" }}>
          <div className="stack" style={{ gap: 40 }}>
            <div className="stack" style={{ gap: 16 }}>
              <p className="over">Sobre o projeto</p>
              {projeto.sobre.map((t) => (
                <p key={t} style={{ margin: 0, fontSize: 18, lineHeight: "30px", maxWidth: "64ch" }}>
                  {t}
                </p>
              ))}
            </div>
            <div className="stack" style={{ gap: 16 }}>
              <h2 className="h2">{projeto.beneficiosTitulo}</h2>
              <ul className="ticks">
                {projeto.beneficios.map((b) => (
                  <li key={b}>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="stack sticky" style={{ gap: 24 }}>
            <dl className="facts" style={{ margin: 0, borderBottom: "1px solid var(--line)" }}>
              {projeto.ficha.map((f) => (
                <div key={f.rotulo}>
                  <dt>{f.rotulo}</dt>
                  <dd>{f.valor}</dd>
                </div>
              ))}
            </dl>
            <div className="stack" style={{ gap: 12 }}>
              <a
                className="ics-btn ics-btn--primary m-full"
                style={{ justifyContent: "center" }}
                href={linkWhatsApp(projeto.mensagemWhatsApp)}
                target="_blank"
                rel="noopener"
              >
                Quero participar
              </a>
              <Link
                className="ics-btn ics-btn--secondary m-full"
                style={{ justifyContent: "center" }}
                href={parceria}
              >
                Patrocinar este projeto
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            className="cols c57 panel"
            style={{
              gap: 40,
              alignItems: "center",
              background: "var(--brand)",
              borderRadius: "var(--radius-lg)",
              padding: "48px 56px",
            }}
          >
            <div className="stack" style={{ gap: 12 }}>
              <p className="over" style={{ color: "var(--lime)" }}>
                Patrocine este projeto
              </p>
              <h2 className="h2" style={{ color: "var(--on-brand)" }}>
                {projeto.patrocinio.titulo}
              </h2>
              <p style={{ margin: 0, color: "var(--olive-soft)" }}>{projeto.patrocinio.texto}</p>
            </div>
            <div className="stack" style={{ gap: 20 }}>
              <ul className="ticks ticks-inv">
                {projeto.patrocinio.itens.map((i) => (
                  <li key={i}>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <div className="row" style={{ gap: 12 }}>
                <Link className="ics-btn ics-btn--highlight m-full" href={parceria}>
                  Patrocinar este projeto <SetaDireita />
                </Link>
                <Link
                  className="ics-btn m-full"
                  style={{ color: "var(--on-brand)", borderColor: "var(--on-brand)" }}
                  href="/parcerias"
                >
                  Outras formas de apoio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            className="row panel"
            style={{
              gap: 16,
              justifyContent: "space-between",
              border: "1.5px dashed var(--line-strong)",
              borderRadius: "var(--radius-md)",
              padding: "24px 28px",
            }}
          >
            <div className="stack" style={{ gap: 2 }}>
              <span style={{ fontWeight: 700 }}>Novidades do projeto</span>
              <span className="muted small">
                As notícias de {projeto.nome} vão aparecer aqui quando o blog do instituto estiver no ar.
              </span>
            </div>
            <span className="ics-tag">Em breve</span>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--surface-sunken)" }}>
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="row" style={{ justifyContent: "space-between", gap: 16, alignItems: "flex-end" }}>
            <h2 className="h2">Outros projetos</h2>
            <Link className="ics-btn ics-btn--ghost" href="/projetos">
              Todos os projetos <SetaDireita />
            </Link>
          </div>
          <div className="cols c3" style={{ gap: 32 }}>
            {outros.map((p) => (
              <CartaoProjeto key={p.slug} projeto={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
