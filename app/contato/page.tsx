import type { Metadata } from "next";
import Link from "next/link";
import LinkEmail from "@/components/LinkEmail";
import { ASSUNTOS_CONTATO, CORPO_PROPOSTA } from "@/content/parcerias";
import { CONTATO, linkWhatsApp } from "@/lib/contato";

export const metadata: Metadata = { title: "Contato" };

const MAPA = "https://www.google.com/maps/search/?api=1&query=Caet%C3%A9-A%C3%A7u%2C%20Palmeiras%20-%20BA";

export default function Contato() {
  return (
    <>
      <section style={{ padding: "72px 0 48px" }}>
        <div className="wrap stack" style={{ gap: 20 }}>
          <p className="over">Contato</p>
          <h1 className="dsp">Fale com a gente</h1>
          <p className="lead">
            Quer participar de uma atividade, inscrever seu filho, ser voluntário ou propor uma parceria? Escolha o canal: o e-mail ou o WhatsApp abrem direto no seu aparelho.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap stack" style={{ gap: 56 }}>
          <div className="cols c2" style={{ gap: 24 }}>
            <div
              className="stack panel"
              style={{ gap: 14, background: "var(--brand)", color: "var(--on-brand)", borderRadius: "var(--radius-lg)", padding: 40 }}
            >
              <span style={{ color: "var(--lime)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3z" />
                  <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z" />
                </svg>
              </span>
              <h2 className="h2" style={{ color: "var(--on-brand)" }}>
                WhatsApp
              </h2>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 20, lineHeight: "28px" }}>{CONTATO.whatsappExibicao}</p>
              <p style={{ margin: 0, color: "var(--olive-soft)" }}>
                Abre uma conversa com a gente no celular ou no computador. Segunda a sexta, [horário].
              </p>
              <div style={{ paddingTop: 8 }}>
                <a
                  className="ics-btn ics-btn--highlight m-full"
                  href={linkWhatsApp(CONTATO.mensagemPadrao)}
                  target="_blank"
                  rel="noopener"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
            <div
              className="stack panel"
              style={{
                gap: 14,
                background: "var(--surface-raised)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg)",
                padding: 40,
              }}
            >
              <span style={{ color: "var(--brand)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <h2 className="h2">E-mail</h2>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 18, lineHeight: "28px", overflowWrap: "anywhere" }}>
                [{CONTATO.email}]
              </p>
              <p className="muted" style={{ margin: 0 }}>
                Abre o seu programa de e-mail com o assunto preenchido. Respondemos em até [3] dias úteis.
              </p>
              <div style={{ paddingTop: 8 }}>
                <LinkEmail className="ics-btn ics-btn--primary m-full" assunto="Contato pelo site">
                  Escrever e-mail
                </LinkEmail>
              </div>
            </div>
          </div>

          <div className="cols c57" style={{ alignItems: "start" }}>
            <div className="stack sticky" style={{ gap: 12 }}>
              <p className="over">Atalhos por assunto</p>
              <h2 className="h2">Já sai com o assunto escrito</h2>
              <p className="muted" style={{ margin: 0 }}>
                Escolha o tema e o canal. A mensagem abre pronta para você completar.
              </p>
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, borderBottom: "1px solid var(--line)" }}>
              {ASSUNTOS_CONTATO.map((a) => (
                <li
                  key={a.titulo}
                  className="row"
                  style={{ justifyContent: "space-between", gap: 12, padding: "18px 0", borderTop: "1px solid var(--line)" }}
                >
                  <div className="stack" style={{ gap: 2, flex: "1 1 220px" }}>
                    <span style={{ fontWeight: 700 }}>{a.titulo}</span>
                    <span className="muted small">{a.texto}</span>
                  </div>
                  <div className="row" style={{ gap: 8 }}>
                    <LinkEmail
                      className="ics-btn ics-btn--secondary ics-btn--sm"
                      assunto={a.titulo}
                      aria-label={`${a.titulo}: enviar e-mail`}
                    >
                      E-mail
                    </LinkEmail>
                    <a
                      className="ics-btn ics-btn--secondary ics-btn--sm"
                      href={linkWhatsApp(`Olá! ${a.titulo}.`)}
                      target="_blank"
                      rel="noopener"
                      aria-label={`${a.titulo}: chamar no WhatsApp`}
                    >
                      WhatsApp
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="cols c3" style={{ gap: 32 }}>
            <div className="rule stack" style={{ gap: 4 }}>
              <p className="over">Instagram</p>
              <p style={{ margin: 0, fontWeight: 700 }}>{CONTATO.instagram}</p>
              <p className="muted small" style={{ margin: 0 }}>
                Agenda e novidades dos projetos.
              </p>
            </div>
            <div className="rule stack" style={{ gap: 4 }}>
              <p className="over">Sede</p>
              <p style={{ margin: 0, fontWeight: 700 }}>Caeté-Açu, Vale do Capão</p>
              <p className="muted small" style={{ margin: 0 }}>
                Palmeiras, Chapada Diamantina, BA · [endereço completo]
              </p>
              <a className="ics-link small" href={MAPA} target="_blank" rel="noopener" style={{ alignSelf: "flex-start", marginTop: 6 }}>
                Abrir no mapa
              </a>
            </div>
            <div className="rule stack" style={{ gap: 4 }}>
              <p className="over">Atendimento</p>
              <p style={{ margin: 0, fontWeight: 700 }}>Segunda a sexta</p>
              <p className="muted small" style={{ margin: 0 }}>
                [horário a confirmar]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--surface-sunken)" }}>
        <div className="wrap cols c2" style={{ alignItems: "center" }}>
          <div className="stack" style={{ gap: 16 }}>
            <p className="over">Instituições</p>
            <h2 className="h1">Proposta de parceria</h2>
            <p className="lead" style={{ fontSize: 18, lineHeight: "28px" }}>
              O e-mail de parceria já abre com um roteiro: instituição, responsável, projeto de interesse e tipo de apoio (financeiro, técnico, espaço, divulgação).
            </p>
          </div>
          <div className="stack" style={{ gap: 12, alignItems: "flex-start" }}>
            <LinkEmail className="ics-btn ics-btn--primary m-full" assunto="Proposta de parceria" corpo={CORPO_PROPOSTA}>
              Enviar proposta por e-mail
            </LinkEmail>
            <a
              className="ics-btn ics-btn--secondary m-full"
              href={linkWhatsApp("Olá! Represento uma instituição e gostaria de conversar sobre parceria com o Instituto Conexão Saúde.")}
              target="_blank"
              rel="noopener"
            >
              Conversar no WhatsApp
            </a>
            <Link className="ics-link small" href="/parcerias" style={{ marginTop: 4 }}>
              Ver formas de patrocínio e contrapartidas
            </Link>
            <p className="muted small" style={{ margin: "4px 0 0" }}>
              CNPJ [00.000.000/0001-00] · Ponto de Cultura reconhecido pela Secult-BA (Circo Ilha de Mato) · Apresentação institucional em PDF [a receber]
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
