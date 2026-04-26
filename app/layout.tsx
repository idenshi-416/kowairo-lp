import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "kowairo（コワイロ）| 訪問看護の音声アシスタント",
  description:
    "「話す」が、そのまま「記録」になる。訪問看護の付加価値を生み出さない時間をなくし、スタッフを楽にする音声アシスタント。記録時間80%削減。",
  openGraph: {
    title: "kowairo（コワイロ）| 訪問看護の音声アシスタント",
    description:
      "「話す」が、そのまま「記録」になる。訪問看護の付加価値を生み出さない時間をなくし、スタッフを楽にする音声アシスタント。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased bg-cream`}>
        {children}
      </body>
    </html>
  );
}
