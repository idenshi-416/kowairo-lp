import { TrendingUp, Users, Star } from "lucide-react";

const roiItems = [
  {
    value: "80",
    unit: "%",
    label: "記録時間削減",
    detail: "1日1時間 → 約12分",
    color: "#3FA39A",
  },
  {
    value: "48,000",
    unit: "円",
    label: "月間コスト効果/1名",
    detail: "看護師時給3,000円換算",
    color: "#E5876B",
  },
  {
    value: "70",
    unit: "%",
    label: "採用費用削減",
    detail: "1人100万円 → 約30万円",
    color: "#D4A03B",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "生産性向上",
    items: ["記録時間80%削減", "利益率改善", "残業・持ち帰りゼロへ"],
    color: "#3FA39A",
  },
  {
    icon: Star,
    title: "ケアマネ連携強化",
    items: ["質の高い報告書が営業ツールに", "紹介獲得 → 売上UP", "地域内での信頼向上"],
    color: "#E5876B",
  },
  {
    icon: Users,
    title: "採用魅力度UP",
    items: ["応募数向上・離職率低下", "採用コスト圧縮", "「記録が楽」が口コミに"],
    color: "#D4A03B",
  },
];

export default function ROISection() {
  return (
    <section id="roi" className="section-padding bg-navy">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block text-teal-light font-bold text-sm tracking-widest uppercase mb-3">
            ROI & BENEFITS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            数字で見る
            <span className="text-teal-light"> 経営メリット</span>
          </h2>
          <p className="text-white/60 text-lg mt-4 leading-relaxed">
            コスト削減だけでなく、売上向上・採用強化まで。3方向から経営を支援します。
          </p>
        </div>

        {/* ROI big numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {roiItems.map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
            >
              <div className="flex items-end justify-center gap-1 mb-2">
                <span
                  className="text-6xl md:text-7xl font-black leading-none"
                  style={{ color: item.color }}
                >
                  {item.value}
                </span>
                <span className="text-2xl font-bold text-white/70 mb-2">{item.unit}</span>
              </div>
              <p className="text-white font-bold text-lg mb-1">{item.label}</p>
              <p className="text-white/50 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                {/* Accent line */}
                <div className="h-1 rounded-full mb-6" style={{ backgroundColor: b.color }} />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${b.color}22` }}
                >
                  <Icon size={22} style={{ color: b.color }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-4">{b.title}</h3>
                <ul className="space-y-2">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: b.color }}
                      />
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
