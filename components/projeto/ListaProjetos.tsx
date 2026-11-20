"use client";

import { useState } from "react";
import { AREAS, PROJETOS, type Area } from "@/content/projetos";
import CartaoProjeto from "./CartaoProjeto";

type Filtro = "todos" | Area;

const FILTROS: { chave: Filtro; rotulo: string }[] = [
  { chave: "todos", rotulo: "Todos" },
  ...(Object.keys(AREAS) as Area[]).map((a) => ({ chave: a, rotulo: AREAS[a].rotulo })),
];

export default function ListaProjetos() {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const visiveis = PROJETOS.filter((p) => filtro === "todos" || p.area === filtro);

  return (
    <div className="wrap stack" style={{ gap: 40 }}>
      <div className="row" style={{ justifyContent: "space-between", gap: 20, alignItems: "flex-end" }}>
        <div className="stack" style={{ gap: 8 }}>
          <p className="over">Em andamento</p>
          <h2 className="h1">Projetos ativos</h2>
        </div>
        <div className="row chips" role="group" aria-label="Filtrar por área" style={{ gap: 8 }}>
          {FILTROS.map(({ chave, rotulo }) => (
            <button
              key={chave}
              type="button"
              className={filtro === chave ? "chip chip-on" : "chip"}
              aria-pressed={filtro === chave}
              onClick={() => setFiltro(chave)}
            >
              {rotulo}
            </button>
          ))}
        </div>
      </div>
      <div className="cols c3" style={{ gap: "48px 32px" }}>
        {visiveis.map((p) => (
          <CartaoProjeto key={p.slug} projeto={p} />
        ))}
      </div>
    </div>
  );
}
