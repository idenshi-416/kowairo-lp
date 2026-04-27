import Image from "next/image";
import { KowairoLogoLight } from "./KowairoLogo";

const footerLinks = [
  { label: "特徴", href: "#features" },
  { label: "使い方", href: "#how-it-works" },
  { label: "料金", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          <div>
            <KowairoLogoLight className="mb-3" />
            <p className="text-sm leading-relaxed max-w-xs">
              訪問看護の「付加価値を生み出さない時間」をなくし、
              スタッフを楽にする音声アシスタント。
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Image
                src="/images/idenshi-logo.png"
                alt="株式会社医伝士"
                width={100}
                height={32}
                className="opacity-60"
              />
            </div>
            <p className="text-xs mt-2 text-white/40">代表取締役医師：宗 大貴</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; 2025 株式会社医伝士 All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
