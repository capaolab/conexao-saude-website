export const CONTATO: {
  email: string;
  whatsapp: string;
  whatsappExibicao: string;
  instagram: string;
  instagramUrl: string;
  mensagemPadrao: string;
} = {
  email: "contato@institutoconexaosaude.org.br",
  whatsapp: "5575900000000",
  whatsappExibicao: "[(75) 9 0000-0000]",
  instagram: "@conexaosaudeinstituto",
  instagramUrl: "https://www.instagram.com/conexaosaudeinstituto/",
  mensagemPadrao: "Olá! Vim pelo site do Instituto Conexão Saúde.",
};

export function linkWhatsApp(texto?: string): string {
  const base = `https://wa.me/${CONTATO.whatsapp}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}

export function linkMailto(assunto: string, corpo?: string): string {
  const base = `mailto:${CONTATO.email}?subject=${encodeURIComponent(assunto)}`;
  return corpo ? `${base}&body=${encodeURIComponent(corpo)}` : base;
}
