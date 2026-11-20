import type { Metadata } from "next";
import { fredoka, nunito } from "@/lib/fontes";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Instituto Conexão Saúde",
    template: "%s — Instituto Conexão Saúde",
  },
  description:
    "Integração sustentável do ser humano com a natureza, por meio da arte, cultura, educação, esporte e saúde. Vale do Capão, Chapada Diamantina (BA).",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
