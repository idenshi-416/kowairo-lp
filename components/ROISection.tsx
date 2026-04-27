"use client";
import { useInView } from "@/app/hooks/useInView";
import { useCountUp } from "@/app/hooks/useCountUp";

const benefits = [
  {
    title: "生産性向上",
    items: ["記録時間80%削減", "利益率改善", "残業・持ち帰りゼロへ"],
    color: "#4A90D9",
  },
  {
    title: "ケアマネ連携強化",
    items: ["質の高い報告書が営業ツールに", "紹介獲得 → 売上UP", "地域内での信頼向上"],
    color: "#E5876B",
  },
  {
    title: "採用魅力度UP",
    items: ["応募数向上・離職率低下", "採用コスト圧縮", "「記録が楽」が口コミに"],
    color: "#D4A03B",
  },
];

export default function ROISection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: statsRef, inView: statsIn } = useInView();
  const { ref: calcRef, inView: calcIn } = useInView();
  const { ref: benefitsRef, inView: benefitsIn } = useInView();

  const count80 = useCountUp(80, 1600, statsIn);
  const count70 = useCountUp(70, 1600, statsIn);
  const count480 = useCountUp(480000, 1800, calcIn);
  const count29 = useCountUp(29800, 1800, calcIn);
  const count450 = useCountUp(450000, 1800, calcIn);

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
              <p className="text-white/70 text-sm">
                1日1時間かかっていた記録が
                <strong className="text-white"> 約12分</strong>に。
                看護師時給3,000円換算で、
                <strong className="text-white">月間約48,000円/1名</strong>のコスト効果。
              </p>
            </div>
          </div>

          {/* Right: Two smaller stats */}
          <div className="grid grid-rows-2 gap-6">
            <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6 flex items-center gap-6 transition-all duration-700 delay-150 ${statsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-coral leading-none">{count70}</span>
                  <span className="text-2xl font-black text-coral/60 mb-1">%</span>
                </div>
                <p className="text-body text-xs mt-1">採用費用削減</p>
              </div>
              <div className="flex-1 pl-6 border-l border-gray-100">
                <p className="text-navy font-bold text-sm mb-1">採用コストが大幅に下がる</p>
                <p className="text-body text-xs leading-relaxed">
                  1人100万円 → 約30万円。
                  「記録が楽」という口コミが応募増につながります。
                </p>
              </div>
            </div>

            <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6 flex items-center gap-6 transition-all duration-700 delay-300 ${statsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-mustard leading-none">↑</span>
                </div>
                <p className="text-body text-xs mt-1">紹介獲得数</p>
              </div>
              <div className="flex-1 pl-6 border-l border-gray-100">
                <p className="text-navy font-bold text-sm mb-1">報告書が営業ツールになる</p>
                <p className="text-body text-xs leading-relaxed">
                  質の高い報告書がケアマネからの信頼を高め、
                  新規紹介の増加に直結します。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI calculation */}
        <div
          ref={calcRef as React.RefObject<HTMLDivElement>}
          className={`border-t border-b border-gray-200 py-8 mb-10 transition-all duration-700 ${calcIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs font-bold text-teal tracking-widest mb-5">コスト試算 — スタッフ10名のステーション</p>
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
            <div>
              <span className="text-4xl font-black text-navy">{count480.toLocaleString()}</span>
              <span className="text-sm text-body ml-1.5">円/月 節約効果</span>
            </div>
            <span className="text-2xl text-gray-300 font-light">−</span>
            <div>
              <span className="text-3xl font-black text-coral">{count29.toLocaleString()}</span>
              <span className="text-sm text-body ml-1.5">円/月 kowairo費用</span>
            </div>
            <span className="text-2xl text-gray-300 font-light">=</span>
            <div>
              <span className="text-4xl font-black text-teal">約{count450.toLocaleString()}</span>
              <span className="text-sm text-body ml-1.5">円/月 の純利益</span>
            </div>
          </div>
          <p className="text-xs text-body/60 mt-4">※ 看護師時給3,000円、1日1時間の記録業務を想定。料金はスタンダードプラン（〜15名）の場合。</p>
        </div>

        {/* Benefits */}
        <div
          ref={benefitsRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-t border-gray-200 pt-10 transition-all duration-700 ${benefitsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {benefits.map((b) => (
            <div key={b.title} className="md:px-8 py-6 md:py-0 first:md:pl-0 last:md:pr-0">
              <h3
                className="font-bold text-navy text-sm mb-3 pl-3"
                style={{ borderLeft: `3px solid ${b.color}` }}
              >
                {b.title}
              </h3>
              <ul className="space-y-1.5 pl-3">
                {b.items.map((item) => (
                  <li key={item} className="text-body text-xs leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
