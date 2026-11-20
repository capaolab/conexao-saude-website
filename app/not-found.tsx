import Link from "next/link";

export default function NotFound() {
  return (
    <section className="sec">
      <div className="wrap stack" style={{ gap: 20, alignItems: "flex-start" }}>
        <p className="over">Erro 404</p>
        <h1 className="dsp">Página não encontrada</h1>
        <p className="lead">O endereço que você abriu não existe ou foi movido.</p>
        <Link className="ics-btn ics-btn--primary" href="/">
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}
