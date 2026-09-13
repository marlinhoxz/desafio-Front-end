import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Fraunces } from "next/font/google";

import "./globals.css";

export const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Desafio - Front end Chalanger",
  description: "Iniciando o Projeto",
};



type childrenProps = {
  children: React.ReactNode
}



export default function RootLayout({children}: childrenProps) {
  return (
    <html
      lang="pt-BR"
      className={`${dmMono.variable} ${dmSans.variable} ${fraunces.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
