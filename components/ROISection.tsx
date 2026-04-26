const benefits = [
  {
    title: "生産性向上",
    items: ["記録時間80%削減", "利益率改善", "残業・持ち帰りゼロへ"],
    color: "#3FA39A",
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
  return (
    <section id="roi" className="section-padding bg-cream">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
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

        {/* Main ROI — asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Left: Primary stat */}
          <div className="bg-navy rounded-2xl p-10 flex flex-col justify-between min-h-[260px]">
            <p className="text-white/50 text-sm font-medium">記録時間の削減率</p>
            <div>
              <div className="flex items-end gap-3 mb-3">
                <span className="text-8xl font-black text-teal leading-none">80</span>
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
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6 flex items-center gap-6">
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-coral leading-none">70</span>
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

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6 flex items-center gap-6">
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

        {/* Benefits — divider list */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-t border-gray-200 pt-10">
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
