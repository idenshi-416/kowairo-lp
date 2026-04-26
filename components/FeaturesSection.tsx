import { Zap, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    color: "#3FA39A",
    bgColor: "#3FA39A18",
    number: "01",
    title: "圧倒的な時短",
    subtitle: "記録時間 80% 削減",
    description:
      "日々の記録から月末サマリ、カンファレンス資料まで対応。1日1時間かかっていた記録が12分に。残業削減・ワークライフバランス改善に直結します。",
    highlights: ["訪問看護記録の自動生成", "月末サマリを自動作成", "カンファレンス資料も対応"],
  },
  {
    icon: Heart,
    color: "#E5876B",
    bgColor: "#E5876B18",
    number: "02",
    title: "生活文脈の蓄積",
    subtitle: "在宅ならではの個別ケア",
    description:
      "自然な会話から「生活上の課題」をAIが自動抽出。患者様の些細な変化も逃さず記録。在宅ならではの個別性の高いケアを実現します。",
    highlights: ["会話から課題を自動抽出", "些細な変化も逃さず記録", "利用者様との会話に集中できる"],
  },
  {
    icon: Award,
    color: "#D4A03B",
    bgColor: "#D4A03B18",
    number: "03",
    title: "記録の標準化",
    subtitle: "スタッフ全員が質の高い記録",
    description:
      "スタッフの経験や文章力に依存せず、AIが要点を整理。新人からベテランまで、均一に質の高い記録を生成。ケアマネへの報告書が営業ツールになります。",
    highlights: ["経験・文章力に左右されない", "ケアマネ報告書を自動生成", "紹介獲得・売上向上に貢献"],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-cream">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="section-label">FEATURES</span>
          <h2 className="section-title">
            kowairoの
            <span className="text-teal">3つの特徴</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            訪問看護の現場に特化した、使いやすさと効果を追求した機能。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* Top accent */}
                <div className="h-1.5" style={{ backgroundColor: f.color }} />
                <div className="p-8">
                  {/* Number + icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: f.bgColor }}
                    >
                      <Icon size={28} style={{ color: f.color }} />
                    </div>
                    <span className="text-5xl font-black" style={{ color: `${f.color}22` }}>
                      {f.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-navy mb-1">{f.title}</h3>
                  <p className="text-sm font-bold mb-4" style={{ color: f.color }}>
                    {f.subtitle}
                  </p>
                  <p className="text-body text-sm leading-relaxed mb-6">{f.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {f.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-body">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: f.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
