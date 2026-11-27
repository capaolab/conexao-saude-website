"use client";

import { useId, useState } from "react";

// Currículo recolhido em 3 linhas (line-clamp no CSS), com botão para expandir. O texto
// inteiro fica sempre no HTML: leitores de tela e buscadores leem tudo; o corte é só visual.
export default function BioExpansivel({ texto, nome }: { texto: string; nome: string }) {
  const [aberta, setAberta] = useState(false);
  const id = useId();

  return (
    <div className="stack" style={{ gap: 8 }}>
      <p id={id} className={aberta ? "bio bio--aberta" : "bio"}>
        {texto}
      </p>
      <button
        type="button"
        className="bio-btn ics-link"
        aria-expanded={aberta}
        aria-controls={id}
        onClick={() => setAberta((a) => !a)}
      >
        {aberta ? "Mostrar menos" : "Saiba mais"}{" "}
        <span className="sr-only">sobre {nome}</span>
      </button>
    </div>
  );
}
