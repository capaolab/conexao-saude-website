"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROTAS_MENU, rotaAtual } from "@/lib/rotas";

export default function NavPrincipal() {
  const caminho = usePathname();
  return (
    <nav className="nav" aria-label="Principal">
      {ROTAS_MENU.map((r) => (
        <Link key={r.href} href={r.href} aria-current={rotaAtual(r.href, caminho) ? "page" : undefined}>
          {r.rotulo}
        </Link>
      ))}
    </nav>
  );
}
