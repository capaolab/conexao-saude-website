import Image from "next/image";
import type { CSSProperties } from "react";
import { IMAGENS, type ImagemId } from "@/content/imagens";

type Props = {
  id: ImagemId;
  className?: string;
  style?: CSSProperties;
  preload?: boolean;
  sizes?: string;
  loading?: "lazy" | "eager";
};

export default function Imagem({ id, className, style, preload, sizes, loading }: Props) {
  const { arquivo, alt, largura, altura } = IMAGENS[id];
  return (
    <Image
      src={"/imagens/" + arquivo}
      alt={alt}
      width={largura}
      height={altura}
      className={className}
      style={style}
      preload={preload}
      sizes={sizes}
      loading={loading}
    />
  );
}

export { Imagem };
