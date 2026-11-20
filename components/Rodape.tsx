import Link from "next/link";
import LinkEmail from "@/components/LinkEmail";
import Marca from "@/components/Marca";
import { CONTATO, linkWhatsApp } from "@/lib/contato";
import { ROTAS_MENU } from "@/lib/rotas";

export default function Rodape() {
  return (
    <footer className="ft">
      <div className="ft-in">
        <div className="ft-about stack" style={{ gap: 16 }}>
          <Marca />
          <p className="muted" style={{ margin: 0, maxWidth: 340 }}>
            Integração sustentável do ser humano com a natureza, por meio da arte, cultura, educação, esporte e saúde. Vale do Capão, Chapada Diamantina (BA).
          </p>
        </div>
        <div>
          <h2>Navegue</h2>
          <ul>
            {ROTAS_MENU.filter((r) => r.href !== "/").map((r) => (
              <li key={r.href}>
                <Link href={r.href}>{r.rotulo}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contato</h2>
          <ul>
            <li>
              <LinkEmail assunto="Contato pelo site">E-mail</LinkEmail>
            </li>
            <li>
              <a href={linkWhatsApp(CONTATO.mensagemPadrao)} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </li>
            <li>
              {CONTATO.instagramUrl ? (
                <a href={CONTATO.instagramUrl} target="_blank" rel="noopener">
                  Instagram
                </a>
              ) : (
                <span style={{ display: "inline-block", padding: "6px 0" }}>Instagram [link]</span>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="ft-b">
        <span>© 2026 Instituto Conexão Saúde · CNPJ [00.000.000/0001-00]</span>
        <span>Site por Capão Lab</span>
      </div>
    </footer>
  );
}
