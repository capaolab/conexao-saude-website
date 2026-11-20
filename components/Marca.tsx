import Link from "next/link";
import Imagem from "@/components/Imagem";

export default function Marca() {
  return (
    <Link href="/" className="brand" aria-label="Instituto Conexão Saúde, página inicial">
      <Imagem id="logo" priority />
      <span className="brand-t">
        <span>Instituto</span>Conexão Saúde
      </span>
    </Link>
  );
}
