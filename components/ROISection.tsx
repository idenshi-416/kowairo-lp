"use client";
import { useState } from "react";
import { useInView } from "@/app/hooks/useInView";
import { useCountUp } from "@/app/hooks/useCountUp";

const benefits = [
  {
    title: "現場の負担が減る",
    items: ["1日1時間の記録が12分になった", "持ち帰り仕事がなくなる", "残業ゼロで、利益も自然と上がる"],
    color: "#4A90D9",
  },
  {
    title: "ケアマネに選ばれる",
    items: ["丁寧な報告書がケアマネに喜ばれる", "「あの事業所は違う」と紹介が増える", "地域に顔を覚えてもらえる"],
    color: "#E5876B",
  },
  {
    title: "働きたい職場になる",
    items: ["「記録が楽だよ」と口コミで広がる", "応募が増えて、採用費が下がる", "辞める人が減り、チームが安定する"],
    color: "#D4A03B",
  },
];

export default function ROISection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: statsRef, inView: statsIn } = useInView();
  const { ref: benefitsRef, inView: benefitsIn } = useInView();

  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const count80 = useCountUp(80, 1600, statsIn);


  return (
    <section id="roi" className="section-padding bg-cream">
      <div className="container-wide">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mb-16 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">ROI & BENEFITS</span>
          <h2 className="section-title">
            数字で見る、
            <br />
            <span className="text-teal">投資対効果</span>
          </h2>
          <p className="section-subtitle">
            コスト削減だけでなく、売上向上・採用強化まで。
            3方向から経営を支援します。
          </p>
        </div>

        {/* Main ROI */}
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10"
        >
          {/* Left: Primary stat */}
          <div className={`bg-navy rounded-2xl p-10 flex flex-col justify-between min-h-[260px] transition-all duration-700 ${statsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-white/50 text-sm font-medium">記録時間の削減率</p>
            <div>
              <div className="flex items-end gap-3 mb-3">
                <span className="text-8xl font-black text-teal leading-none">{count80}</span>
                <span className="text-4xl font-black text-white/60 mb-3">%</span>
              </div>
              <div className="text-white/70 text-sm space-y-1">
                <p>1日1時間かかっていた記録が<strong className="text-white"> 約12分</strong>に。</p>
                <p>看護師時給3,000円換算で、<strong className="text-white">月間約48,000円/1名</strong>のコスト効果。</p>
              </div>
              <p className="text-white/40 text-xs mt-3">※当社PoC実績（n=20人、3ヶ月）</p>
            </div>
          </div>

          {/* Right: Two smaller stats */}
          <div className="grid grid-rows-2 gap-6">
            <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6 flex items-center gap-6 transition-all duration-700 delay-150 ${statsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="shrink-0 w-12 flex items-center justify-center">
                <p className="text-5xl font-black text-coral leading-none">¥</p>
              </div>
              <div className="flex-1 pl-6 border-l border-gray-100">
                <p className="text-navy font-bold text-sm mb-1">採用コスト削減効果も期待できます</p>
                <p className="text-body text-xs leading-relaxed">
                  訪問看護の採用費は1名あたり80〜100万円が業界相場と言われています。
                  「記録が楽」という働きやすさが口コミとして広がることで、
                  応募増加・採用費削減の効果が期待できます。
                </p>
                <p className="text-body/50 text-xs mt-2">※採用費削減効果は導入環境により異なります</p>
              </div>
            </div>

            <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6 flex items-center gap-6 transition-all duration-700 delay-300 ${statsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="shrink-0 w-12 flex items-center justify-center">
                <span className="text-5xl font-black text-mustard leading-none mb-1">↑</span>
              </div>
              <div className="flex-1 pl-6 border-l border-gray-100">
                <p className="text-navy font-bold text-sm mb-1">報告書が営業ツールになる</p>
                <p className="text-body text-xs leading-relaxed">
                  質の高い報告書がケアマネからの信頼を高め、<br />
                  新規紹介の増加に直結します。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div
          ref={benefitsRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 transition-all duration-700 ${benefitsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {benefits.map((b, i) => {
            const isHovered = hoveredBenefit === i;
            return (
              <div
                key={b.title}
                className="rounded-2xl p-7 border transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: isHovered ? b.color : "#ffffff",
                  borderColor: isHovered ? b.color : "#e5e7eb",
                  boxShadow: isHovered ? `0 8px 24px ${b.color}40` : "0 1px 4px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={() => setHoveredBenefit(i)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? "rgba(255,255,255,0.25)" : b.color,
                      color: "#ffffff",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-bold text-sm transition-colors duration-300"
                    style={{ color: isHovered ? "#ffffff" : "#1a2b4a" }}
                  >
                    {b.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs leading-relaxed transition-colors duration-300"
                      style={{ color: isHovered ? "rgba(255,255,255,0.9)" : "#6b7280" }}
                    >
                      <span
                        className="mt-0.5 shrink-0 font-bold transition-colors duration-300"
                        style={{ color: isHovered ? "rgba(255,255,255,0.9)" : b.color }}
                      >✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
