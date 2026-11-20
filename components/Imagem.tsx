import Image from "next/image";
import type { CSSProperties } from "react";
import { IMAGENS, type ImagemId } from "@/content/imagens";

type Props = {
  id: ImagemId;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  sizes?: string;
};

export default function Imagem({ id, className, style, priority, sizes }: Props) {
  const { arquivo, alt, largura, altura } = IMAGENS[id];
  return (
    <Image
      src={"/imagens/" + arquivo}
      alt={alt}
      width={largura}
      height={altura}
      className={className}
      style={style}
      priority={priority}
      sizes={sizes}
    />
  );
}

export { Imagem };
