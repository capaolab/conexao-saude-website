import Link from "next/link";
import Imagem from "@/components/Imagem";

export default function Marca({ preload = false }: { preload?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Instituto Conexão Saúde, página inicial">
      <Imagem id="logo" preload={preload} />
      <span className="brand-t">
        <span>Instituto</span>Conexão Saúde
      </span>
    </Link>
  );
}
