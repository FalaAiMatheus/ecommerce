import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const font = Montserrat({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Gam3r.Store",
  description: "Versão completa da Gam3r.Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={twMerge(font.className, "antialiased")}>{children}</body>
    </html>
  );
}
