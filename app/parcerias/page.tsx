import type { Metadata } from "next";
import Link from "next/link";
import Imagem from "@/components/Imagem";
import LinkEmail from "@/components/LinkEmail";
import { AREAS, PROJETOS } from "@/content/projetos";
import {
  ALCANCE_POR_PROJETO,
  CONTRAPARTIDAS,
  CORPO_PATROCINIO,
  FORMAS_DE_APOIO,
  NUMEROS,
  ODS_POR_PROJETO,
  PARCEIROS,
  PASSOS,
} from "@/content/parcerias";
import { linkWhatsApp } from "@/lib/contato";

export const metadata: Metadata = { title: "Parcerias" };

const ALVO_INSTITUTO = "o Instituto Conexão Saúde";
const ASSUNTO_INSTITUTO = `Patrocínio: ${ALVO_INSTITUTO}`;

export default function Parcerias() {
  return (
    <>
      <section style={{ padding: "72px 0 0" }}>
        <div className="wrap stack" style={{ gap: 48 }}>
          <div className="cols c75" style={{ alignItems: "end" }}>
            <div className="stack" style={{ gap: 20 }}>
              <p className="over">Parcerias e patrocínio</p>
              <h1 className="dsp">Patrocine quem cuida das pessoas e da Chapada</h1>
            </div>
            <div className="stack" style={{ gap: 24 }}>
              <p className="lead" style={{ fontSize: 18, lineHeight: "28px" }}>
                Sua empresa ou instituição pode apoiar o instituto inteiro ou escolher um dos sete projetos. Montamos a proposta junto com você.
              </p>
              <div className="row" style={{ gap: 12 }}>
                <LinkEmail
                  className="ics-btn ics-btn--primary m-full"
                  assunto={ASSUNTO_INSTITUTO}
                  corpo={CORPO_PATROCINIO(ALVO_INSTITUTO)}
                >
                  Quero patrocinar
                </LinkEmail>
                <a className="ics-btn ics-btn--secondary m-full" href="#projetos-apoio">
                  Escolher um projeto
                </a>
              </div>
            </div>
          </div>
          <Imagem
            id="projeto-futebol-vale-jogar-capa"
            className="img hero-img"
            style={{ height: 480, objectPosition: "center 40%" }}
            preload
            sizes="(max-width: 1240px) 100vw, 1160px"
          />
        </div>
      </section>

      <section className="sec">
        <div className="wrap stack" style={{ gap: 40 }}>
          <div className="cols c57" style={{ alignItems: "end" }}>
            <div className="stack" style={{ gap: 12 }}>
              <p className="over">Por que apoiar</p>
              <h2 className="h1">Mais de 20 anos de trabalho no território</h2>
            </div>
            <p className="lead" style={{ fontSize: 18, lineHeight: "28px" }}>
              O instituto foi formalizado em maio de 2025, mas os projetos dos seus fundadores acontecem desde 2003. Seu apoio chega a uma rede que já funciona.
            </p>
          </div>
          <div className="cols c4" style={{ gap: "40px 32px" }}>
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

      <section className="sec" style={{ background: "var(--surface-sunken)" }}>
        <div className="wrap cols c57" style={{ alignItems: "start" }}>
          <div className="stack sticky" style={{ gap: 16 }}>
            <p className="over">Formas de apoiar</p>
            <h2 className="h1">Do instituto inteiro a um único projeto</h2>
            <p className="muted" style={{ margin: 0 }}>
              Cada parceria é desenhada com a instituição. Estes são os caminhos mais comuns.
            </p>
          </div>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, borderBottom: "1px solid var(--line)" }}>
            {FORMAS_DE_APOIO.map((f, i) => (
              <li
                key={f.titulo}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px minmax(0,1fr)",
                  gap: 16,
                  padding: "24px 0",
                  borderTop: "1px solid var(--line)",
                }}
              >
                <span className="num" style={{ color: "var(--olive)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="stack" style={{ gap: 6 }}>
                  <h3 className="h3" style={{ fontSize: 22, lineHeight: "30px" }}>
                    {f.titulo}
                  </h3>
                  <p className="muted" style={{ margin: 0 }}>
                    {f.texto}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec" id="projetos-apoio">
        <div className="wrap stack" style={{ gap: 40 }}>
          <div className="cols c57" style={{ alignItems: "end" }}>
            <div className="stack" style={{ gap: 12 }}>
              <p className="over">Patrocínio por projeto</p>
              <h2 className="h1">Escolha o projeto que combina com a sua marca</h2>
            </div>
            <p className="lead" style={{ fontSize: 18, lineHeight: "28px" }}>
              Veja o alcance de cada projeto e o que o patrocínio torna possível. O botão abre um e-mail já com o nome do projeto.
            </p>
          </div>
          <div className="stack sp-list">
            {PROJETOS.map((p) => {
              const area = AREAS[p.area];
              const alvo = `o projeto ${p.nome}`;
              return (
                <article key={p.slug} className="sp" id={p.ancoraParceria}>
                  <Imagem
                    id={p.imagem}
                    className="img sp-img"
                    style={{ borderRadius: "var(--radius-md)" }}
                    sizes="200px"
                  />
                  <div className="stack sp-hd" style={{ gap: 10 }}>
                    <div className="row" style={{ gap: 8 }}>
                      <span className={area.tag ? `ics-tag ics-tag--${area.tag}` : "ics-tag"}>{area.rotulo}</span>
                      <span className="small muted" style={{ fontWeight: 700 }}>
                        {ODS_POR_PROJETO[p.slug]}
                      </span>
                    </div>
                    <h3 className="h3">{p.nome}</h3>
                    <p className="small" style={{ margin: 0, fontWeight: 800, color: "var(--brand)" }}>
                      {ALCANCE_POR_PROJETO[p.slug]}
                    </p>
                  </div>
                  <div className="stack" style={{ gap: 10 }}>
                    <p className="over" style={{ color: "var(--ink-muted)" }}>
                      Seu patrocínio viabiliza
                    </p>
                    <ul className="ticks small">
                      {p.patrocinio.itens.map((item) => (
                        <li key={item}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="stack sp-act" style={{ gap: 10 }}>
                    <LinkEmail
                      className="ics-btn ics-btn--primary m-full"
                      assunto={`Patrocínio: ${alvo}`}
                      corpo={CORPO_PATROCINIO(alvo)}
                    >
                      Patrocinar
                    </LinkEmail>
                    <Link className="ics-link small" style={{ alignSelf: "center" }} href={`/projetos/${p.slug}`}>
                      Ver o projeto
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--brand)", color: "var(--on-brand)" }}>
        <div className="wrap stack" style={{ gap: 48 }}>
          <div className="cols c57" style={{ alignItems: "end" }}>
            <div className="stack" style={{ gap: 12 }}>
              <p className="over" style={{ color: "var(--lime)" }}>
                Contrapartidas
              </p>
              <h2 className="h1" style={{ color: "var(--on-brand)" }}>
                O que sua instituição recebe
              </h2>
            </div>
            <p style={{ margin: 0, color: "var(--olive-soft)", fontSize: 18, lineHeight: "28px" }}>
              As contrapartidas variam conforme a cota e são combinadas na proposta.
            </p>
          </div>
          <div className="cols c4" style={{ gap: 32 }}>
            {CONTRAPARTIDAS.map((c) => (
              <div key={c.titulo} className="stack" style={{ gap: 8, paddingTop: 20, borderTop: "3px solid var(--lime)" }}>
                <h3 className="h3" style={{ color: "var(--on-brand)", fontSize: 20, lineHeight: "28px" }}>
                  {c.titulo}
                </h3>
                <p className="small" style={{ margin: 0, color: "var(--olive-soft)" }}>
                  {c.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap stack" style={{ gap: 40 }}>
          <div className="stack" style={{ gap: 12 }}>
            <p className="over">Como funciona</p>
            <h2 className="h1">Quatro passos até o projeto acontecer</h2>
          </div>
          <ol className="cols c4" style={{ listStyle: "none", margin: 0, padding: 0, gap: 32 }}>
            {PASSOS.map((p, i) => (
              <li key={p.titulo} className="rule stack" style={{ gap: 8 }}>
                <span className="num" style={{ color: "var(--brand)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="h3" style={{ fontSize: 20, lineHeight: "28px" }}>
                  {p.titulo}
                </h3>
                <p className="muted small" style={{ margin: 0 }}>
                  {p.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--surface-sunken)" }}>
        <div className="wrap cols c2" style={{ alignItems: "start" }}>
          <div className="stack" style={{ gap: 16 }}>
            <p className="over">Quem já caminha conosco</p>
            <h2 className="h2">Parceiros em ações dos projetos</h2>
            <div className="partners">
              {PARCEIROS.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
            <p className="muted small" style={{ margin: 0 }}>
              [Logos e lista completa de parceiros a receber do instituto]
            </p>
          </div>
          <div className="stack" style={{ gap: 16 }}>
            <p className="over">Transparência</p>
            <h2 className="h2">Documentos do instituto</h2>
            <dl className="facts" style={{ margin: 0, borderBottom: "1px solid var(--line)" }}>
              <div>
                <dt>Razão social</dt>
                <dd>Instituto Conexão Saúde</dd>
              </div>
              <div>
                <dt>CNPJ</dt>
                <dd>[00.000.000/0001-00]</dd>
              </div>
              <div>
                <dt>Fundação</dt>
                <dd>7 de maio de 2025 · Vale do Capão, Palmeiras (BA)</dd>
              </div>
              <div>
                <dt>Documentos</dt>
                <dd>[Estatuto, apresentação institucional e relatórios em PDF, a receber]</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div
            className="cols c2 panel"
            style={{ gap: 32, alignItems: "center", background: "var(--brand)", borderRadius: "var(--radius-lg)", padding: 56 }}
          >
            <div className="stack" style={{ gap: 12 }}>
              <p className="over" style={{ color: "var(--lime)" }}>
                Vamos conversar
              </p>
              <h2 className="h2" style={{ color: "var(--on-brand)" }}>
                Monte a sua proposta de patrocínio
              </h2>
              <p style={{ margin: 0, color: "var(--olive-soft)" }}>
                O e-mail já abre com um roteiro: instituição, responsável e forma de apoio. Se preferir, chame no WhatsApp.
              </p>
            </div>
            <div className="row" style={{ gap: 12, justifyContent: "flex-end" }}>
              <LinkEmail
                className="ics-btn ics-btn--highlight m-full"
                assunto={ASSUNTO_INSTITUTO}
                corpo={CORPO_PATROCINIO(ALVO_INSTITUTO)}
              >
                Enviar proposta por e-mail
              </LinkEmail>
              <a
                className="ics-btn m-full"
                style={{ color: "var(--on-brand)", borderColor: "var(--on-brand)" }}
                href={linkWhatsApp("Olá! Represento uma instituição e quero conversar sobre patrocínio ao Instituto Conexão Saúde.")}
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
