import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" é para a imagem Docker (Coolify). Na Vercel fica desligado: ela
  // tem o próprio empacotamento, e o build lá quebrou com standalone no apeaca-website.
  output: process.env.VERCEL ? undefined : "standalone",
  devIndicators: false,
  // Só vale no `next dev`: libera os arquivos de dev quando o site é aberto por
  // outro aparelho da rede local (ex.: celular em http://192.168.0.x:3000).
  // Sem isso o Next responde 403 aos scripts e a página fica sem JavaScript.
  allowedDevOrigins: ["192.168.*.*"],
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
        ],
      },
    ];
  },
};

export default nextConfig;
