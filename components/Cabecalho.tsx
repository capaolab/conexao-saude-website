import Link from "next/link";
import Marca from "@/components/Marca";
import MenuCelular from "@/components/MenuCelular";
import NavPrincipal from "@/components/NavPrincipal";

export default function Cabecalho() {
  return (
    <header className="hdr">
      <div className="hdr-in">
        <Marca />
        <NavPrincipal />
        <Link href="/parcerias" className="ics-btn ics-btn--highlight ics-btn--sm hdr-cta">
          Apoie
        </Link>
        <MenuCelular />
      </div>
    </header>
  );
}
