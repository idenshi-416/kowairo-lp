import Image from "next/image";
import { Mic, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Left panel */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-8 md:px-16 lg:px-20 pt-24 pb-16 bg-cream">
        {/* Tag */}
        <div className="inline-flex items-center bg-teal/10 text-teal font-bold text-sm px-4 py-2 rounded-full w-fit mb-8">
          医師開発 · 訪問看護専用 AI音声アシスタント
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-navy leading-[1.2] mb-6">
          「話す」が、そのまま
          <br />
          <span className="text-teal">「記録」</span>になる。
        </h1>

        <p className="text-body text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
          訪問看護の「付加価値を生み出さない時間」をなくし、
          <br className="hidden md:block" />
          スタッフを楽にする音声アシスタント
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="#trial" className="btn-primary gap-2">
            <Mic size={18} />
            2週間無料トライアル申込
          </a>
          <a href="#how-it-works" className="btn-secondary">
            使い方を見る
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-5xl font-black text-teal leading-none">80<span className="text-2xl">%</span></p>
            <p className="text-body text-sm mt-1">記録時間削減</p>
          </div>
          <div className="w-px bg-gray-200" />
          <div>
            <p className="text-5xl font-black text-coral leading-none">¥<span>48,000</span></p>
            <p className="text-body text-sm mt-1">節約効果/月・1名</p>
          </div>
          <div className="w-px bg-gray-200" />
          <div>
            <p className="text-5xl font-black text-mustard leading-none">2<span className="text-xl">週間</span></p>
            <p className="text-body text-sm mt-1">無料トライアル</p>
          </div>
        </div>
        <p className="text-xs text-body/60 mt-5">
          代表取締役医師 宗 大貴 監修 — 訪問看護の現場から生まれたツール
        </p>
      </div>

      {/* Right panel - dark navy */}
      <div className="hidden lg:flex lg:w-[45%] bg-navy flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-teal/10" />
        <div className="absolute bottom-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full bg-teal/5" />
        <div className="relative z-10 px-10 w-full flex items-center justify-center">
          <Image
            src="/images/app-mockup.png"
            alt="kowairoアプリ画面"
            width={480}
            height={560}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#challenge"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-body/50 hover:text-teal transition-colors"
      >
        <span className="text-xs mb-1">スクロール</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
