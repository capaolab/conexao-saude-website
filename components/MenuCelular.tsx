"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CONTATO, linkWhatsApp } from "@/lib/contato";
import { ROTAS_MENU, rotaAtual } from "@/lib/rotas";

export default function MenuCelular() {
  const caminho = usePathname();
  const [aberto, setAberto] = useState(false);
  const [caminhoAberto, setCaminhoAberto] = useState(caminho);

  // Fecha ao navegar: ajuste de estado durante o render quando a rota muda.
  if (caminhoAberto !== caminho) {
    setCaminhoAberto(caminho);
    setAberto(false);
  }

  return (
    <>
      <button
        type="button"
        className="menu-btn"
        aria-expanded={aberto}
        aria-controls="menu-celular"
        onClick={() => setAberto(!aberto)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d={aberto ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
        </svg>
        Menu
      </button>
      {aberto && (
        <nav className="sheet" id="menu-celular" aria-label="Menu">
          {ROTAS_MENU.map((r) => (
            <Link key={r.href} className="it" href={r.href} aria-current={rotaAtual(r.href, caminho) ? "page" : undefined}>
              {r.rotulo}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          ))}
          <div className="stack" style={{ gap: 12, marginTop: 20 }}>
            <Link className="ics-btn ics-btn--highlight m-full" href="/parcerias">
              Apoie o instituto
            </Link>
            <a
              className="ics-btn ics-btn--secondary m-full"
              href={linkWhatsApp(CONTATO.mensagemPadrao)}
              target="_blank"
              rel="noopener"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
