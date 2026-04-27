"use client";
import { Mic, ArrowRight, Phone } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

export default function CTASection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="trial" className="section-padding bg-gradient-to-br from-teal to-teal-dark relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full bg-white/5" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[280px] h-[280px] rounded-full bg-white/5" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-narrow relative z-10 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full mb-8">
          <Mic size={14} />
          <span>2週間 完全無料トライアル実施中</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          まずは
          <span className="text-yellow-300">無料</span>
          で、
          <br />
          「話すだけ記録」を体験してください。
        </h2>

        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          電子カルテの入れ替えは不要。導入コストゼロ。
          <br />
          2週間の無料トライアルで、現場の変化を実感してください。
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:info@idenshi.co.jp?subject=kowairo 無料トライアル申込"
            className="inline-flex items-center justify-center gap-2 bg-white text-teal font-black px-8 py-4 rounded-xl text-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            <Mic size={20} />
            2週間無料トライアル申込
            <ArrowRight size={18} />
          </a>
          <a
            href="mailto:info@idenshi.co.jp?subject=kowairo デモ依頼"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors"
          >
            <Phone size={18} />
            まずはデモを見る
          </a>
        </div>

        {/* Reassurance points */}
        <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          {["2週間完全無料", "クレジットカード不要", "いつでも解約可能", "既存システムはそのまま"].map((point) => (
            <div key={point} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
