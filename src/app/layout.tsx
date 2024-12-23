import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Background from "./background";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "ポートフォリオサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="background">
          <Background />
        </div>
        <header className="header">
          <nav className="header__nav" aria-label="グローバルナビゲーション">
            <ul className="header__ul">
              <li className="header__li">
                <Link href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <title>Top</title>
                    <path d="M13.228 2.688a2 2 0 0 0-2.456 0l-8.384 6.52C1.636 9.795 2.05 11 3.003 11H4v8a2 2 0 0 0 2 2h5v-7a1 1 0 0 1 2 0v7h5a2 2 0 0 0 2-2v-8h.997c.952 0 1.368-1.205.615-1.791z" />
                  </svg>
                </Link>
              </li>
              <li className="header__li">
                <Link href="/about">About</Link>
              </li>
              <li className="header__li">
                <Link href="/works">Works</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
