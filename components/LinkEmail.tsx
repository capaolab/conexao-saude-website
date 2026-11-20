"use client";

import type { MouseEvent, ReactNode } from "react";
import { linkMailto } from "@/lib/contato";

type Props = {
  assunto: string;
  corpo?: string;
  className?: string;
  "aria-label"?: string;
  children: ReactNode;
};

export default function LinkEmail({
  assunto,
  corpo,
  className,
  "aria-label": ariaLabel,
  children,
}: Props) {
  function aoClicar(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.open(linkMailto(assunto, corpo), "_self");
  }

  return (
    <a href="/contato" onClick={aoClicar} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export { LinkEmail };
