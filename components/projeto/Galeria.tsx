"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type TouchEvent } from "react";
import Imagem from "@/components/Imagem";
import { IMAGENS, type ImagemId } from "@/content/imagens";

type Props = { fotos: ImagemId[]; nome: string };

// Grade de miniaturas (lazy) e lightbox em <dialog> modal: o navegador prende o foco dentro
// dele e fecha com Esc. Setas do teclado, botões e deslize no celular trocam a foto; ao
// fechar, o foco volta para a miniatura que abriu o lightbox.
export default function Galeria({ fotos, nome }: Props) {
  const [atual, setAtual] = useState<number | null>(null);
  const dialogo = useRef<HTMLDialogElement>(null);
  const miniaturas = useRef<(HTMLButtonElement | null)[]>([]);
  const origem = useRef(0);
  const toqueX = useRef<number | null>(null);
  const aberto = atual !== null;

  useEffect(() => {
    if (aberto && dialogo.current && !dialogo.current.open) dialogo.current.showModal();
  }, [aberto]);

  const total = fotos.length;
  const ir = (passo: number) => setAtual((i) => (i === null ? i : (i + passo + total) % total));
  const fechar = () => dialogo.current?.close();

  function abrir(i: number) {
    origem.current = i;
    setAtual(i);
  }

  function aoFechar() {
    setAtual(null);
    miniaturas.current[origem.current]?.focus();
  }

  function aoTeclar(e: KeyboardEvent) {
    if (e.key === "ArrowRight") ir(1);
    else if (e.key === "ArrowLeft") ir(-1);
    else return;
    e.preventDefault();
  }

  // Clique fora da foto e dos botões (no fundo escuro) fecha.
  function aoClicar(e: MouseEvent) {
    if ((e.target as HTMLElement).dataset.fundo !== undefined) fechar();
  }

  function aoSoltar(e: TouchEvent) {
    if (toqueX.current === null) return;
    const dx = e.changedTouches[0].clientX - toqueX.current;
    toqueX.current = null;
    if (Math.abs(dx) > 50) ir(dx < 0 ? 1 : -1);
  }

  return (
    <>
      <ul className="galeria">
        {fotos.map((id, i) => (
          <li key={id}>
            <button
              type="button"
              className="galeria-btn"
              aria-label={`Ampliar foto ${i + 1} de ${total}: ${IMAGENS[id].alt}`}
              ref={(el) => {
                miniaturas.current[i] = el;
              }}
              onClick={() => abrir(i)}
            >
              <Imagem id={id} className="galeria-img" sizes="(max-width: 900px) 50vw, 290px" />
            </button>
          </li>
        ))}
      </ul>

      {aberto && (
        <dialog
          ref={dialogo}
          className="lb"
          aria-label={`Fotos de ${nome}`}
          data-fundo
          onClose={aoFechar}
          onKeyDown={aoTeclar}
          onClick={aoClicar}
          onTouchStart={(e) => {
            toqueX.current = e.touches[0].clientX;
          }}
          onTouchEnd={aoSoltar}
        >
          <div className="lb-topo" data-fundo>
            <p className="lb-contador" aria-live="polite">
              {atual + 1} de {total}
            </p>
            <button type="button" className="lb-btn" aria-label="Fechar" onClick={fechar}>
              <Icone d="M6 6l12 12M18 6L6 18" />
            </button>
          </div>
          <div className="lb-palco" data-fundo>
            <button type="button" className="lb-btn lb-ant" aria-label="Foto anterior" onClick={() => ir(-1)}>
              <Icone d="M15 6l-6 6 6 6" />
            </button>
            <div className="lb-foto" data-fundo>
              <Imagem key={fotos[atual]} id={fotos[atual]} className="lb-img" sizes="100vw" loading="eager" />
            </div>
            <button type="button" className="lb-btn lb-prox" aria-label="Próxima foto" onClick={() => ir(1)}>
              <Icone d="M9 6l6 6-6 6" />
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}

function Icone({ d }: { d: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
