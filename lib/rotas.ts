export const ROTAS_MENU: { href: string; rotulo: string }[] = [
  { href: "/", rotulo: "Início" },
  { href: "/quem-somos", rotulo: "Quem somos" },
  { href: "/projetos", rotulo: "Projetos" },
  { href: "/parcerias", rotulo: "Parcerias" },
  { href: "/contato", rotulo: "Contato" },
];

export function rotaAtual(href: string, caminho: string): boolean {
  return href === "/" ? caminho === "/" : caminho === href || caminho.startsWith(href + "/");
}
