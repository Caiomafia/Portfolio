import "./globals.css";
import type { Metadata } from "next";
import { Kalam, Heebo } from "next/font/google";

import Header from "@/components/header";
import GoToTop from "@/components/go-to-top";
import Footer from "@/components/footer";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
});
const heebo = Heebo({ subsets: ["latin"], variable: "--font-heebo" });

export const metadata: Metadata = {
  title: "Bruno Barreiras - Desenvolvedor Front-End",
  description:
    "Sou um Desenvolvedor Front-End. Tenho experiência no desenvolvimento de aplicações web de alto nível com as melhores tecnologias disponíveis no mercado, como React, TypeScript, Next.js e muito mais.",
  keywords: [
    "Bruno Barreiras",
    "Portifolio Bruno Barreiras",
    "Bruno Barreiras Portfólio",
    "Bruno Barreiras Portfolio",
    "Bruno Barreiras Desenvolvedor Front-End",
    "Bruno Barreiras Programador",
    "Bruno Barreiras Programador Front-End",
    "Desenvolvimento Web",
    "Desenvolvedor Front-End",
    "Programador em Goiânia",
    "Programador em Goiás",
    "Programador em Brasília",
    "Desenvolvedor Front-End em Goiânia",
    "Criar site",
    "Fazer site",
    "Desenvolver site",
    "Construir site",
    "Web design",
    "Web developer",
    "Web designer",
    "Agência de sites",
    "Empresa de sites",
    "Freelancer de sites",
  ],
  authors: [
    {
      name: "Bruno Barreiras",
      url: "https://www.linkedin.com/in/brunobarreiras/",
    },
  ],
  creator: "Bruno Barreiras",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${kalam.variable} ${heebo.variable} bg-radial-gradient flex min-h-screen flex-col items-center scroll-smooth`}
      >
        <Header />
        <main className="container">{children}</main>
        <GoToTop />
        <Footer />
      </body>
    </html>
  );
}
