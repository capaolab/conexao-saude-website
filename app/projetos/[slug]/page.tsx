import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PaginaProjeto from "@/components/projeto/PaginaProjeto";
import { PROJETOS, projetoPorSlug } from "@/content/projetos";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJETOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projeto = projetoPorSlug(slug);
  if (!projeto) return {};
  return { title: projeto.nome, description: projeto.lead };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projeto = projetoPorSlug(slug);
  if (!projeto) notFound();
  return <PaginaProjeto projeto={projeto} />;
}
