import { Mic, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Left panel */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-8 md:px-16 lg:px-20 pt-24 pb-16 bg-cream">
        {/* Tag */}
        <div className="inline-flex items-center bg-teal/10 text-teal font-bold text-sm px-4 py-2 rounded-full w-fit mb-8">
          訪問看護専用 AI音声アシスタント
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
            <p className="text-5xl font-black text-coral leading-none">5<span className="text-xl">社以上</span></p>
            <p className="text-body text-sm mt-1">導入実績</p>
          </div>
          <div className="w-px bg-gray-200" />
          <div>
            <p className="text-5xl font-black text-mustard leading-none">2<span className="text-xl">週間</span></p>
            <p className="text-body text-sm mt-1">無料トライアル</p>
          </div>
        </div>
      </div>

      {/* Right panel - dark navy */}
      <div className="hidden lg:flex lg:w-[45%] bg-navy flex-col justify-center items-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-teal/10" />
        <div className="absolute bottom-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full bg-teal/5" />

        {/* App mockup */}
        <div className="relative z-10 flex flex-col items-center gap-4 px-12">
          {/* Large tablet mockup */}
          <div className="w-64 h-80 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200 flex flex-col">
            {/* Status bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-b border-gray-100">
              <span className="text-xs text-gray-500 font-medium">kowairo</span>
              <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
            </div>
            {/* Recording UI */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 bg-white">
              <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 rounded-full bg-teal/5 animate-ping" />
                <Mic size={32} className="text-teal" />
              </div>
              <p className="text-navy font-bold text-sm mb-1">録音中...</p>
              <p className="text-gray-400 text-xs font-mono">00:02.70</p>
            </div>
            {/* Transcript preview */}
            <div className="px-3 py-3 bg-gray-50 border-t border-gray-100">
              <div className="space-y-1.5">
                <div className="h-2 bg-gray-200 rounded-full w-full" />
                <div className="h-2 bg-gray-200 rounded-full w-4/5" />
                <div className="h-2 bg-teal/30 rounded-full w-3/5" />
              </div>
            </div>
          </div>

          {/* Smaller device - record result */}
          <div className="w-52 h-56 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-200 flex flex-col ml-16 -mt-16">
            <div className="px-3 py-2 bg-teal text-white text-xs font-bold">
              訪問看護記録 — 自動生成
            </div>
            <div className="flex-1 px-3 py-3 space-y-2">
              <div className="text-xs text-navy font-bold">◆ 主観的情報</div>
              <div className="space-y-1">
                <div className="h-1.5 bg-gray-200 rounded-full" />
                <div className="h-1.5 bg-gray-200 rounded-full w-5/6" />
                <div className="h-1.5 bg-gray-200 rounded-full w-4/5" />
              </div>
              <div className="text-xs text-navy font-bold mt-2">◆ 客観的情報</div>
              <div className="space-y-1">
                <div className="h-1.5 bg-gray-200 rounded-full w-full" />
                <div className="h-1.5 bg-gray-200 rounded-full w-3/4" />
              </div>
              <div className="mt-2 flex gap-1">
                <div className="px-2 py-1 bg-teal/10 rounded text-teal text-xs font-medium">コピー</div>
                <div className="px-2 py-1 bg-coral/10 rounded text-coral text-xs font-medium">編集</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company tag */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white/40 text-xs">株式会社医伝士</p>
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
