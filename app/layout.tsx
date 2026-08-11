import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin", "cyrillic"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Daily Priority",
  description: "Ежедневный независимый новостной обзор: факты, контекст и источники.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
