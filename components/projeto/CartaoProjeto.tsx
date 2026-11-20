import Link from "next/link";
import Imagem from "@/components/Imagem";
import { AREAS, type Projeto } from "@/content/projetos";

export default function CartaoProjeto({ projeto }: { projeto: Projeto }) {
  const area = AREAS[projeto.area];
  return (
    <Link className="plink proj" href={`/projetos/${projeto.slug}`}>
      <Imagem
        id={projeto.imagem}
        className="img"
        style={{ borderRadius: "var(--radius-md)" }}
        sizes="(max-width: 900px) 104px, 360px"
      />
      <div>
        <span className={area.tag ? `ics-tag ics-tag--${area.tag}` : "ics-tag"}>{area.rotulo}</span>
      </div>
      <h3 className="h3">{projeto.nome}</h3>
      <p className="muted" style={{ margin: 0 }}>
        {projeto.resumo}
      </p>
    </Link>
  );
}
