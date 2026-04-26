import { Clock, FileX, TrendingDown } from "lucide-react";

const challenges = [
  {
    icon: Clock,
    title: "時間の圧迫と残業",
    description:
      "月末の報告書・サマリ作成負担で残業や持ち帰りが常態化。スタッフの疲弊が進んでいる。",
    color: "coral",
    accentColor: "#E5876B",
  },
  {
    icon: FileX,
    title: "記録の形骸化",
    description:
      "忙しさから「前回と同じ」になりがち。患者様の些細な変化を残せず、ケアの質が低下する。",
    color: "mustard",
    accentColor: "#D4A03B",
  },
  {
    icon: TrendingDown,
    title: "連携不足による機会損失",
    description:
      "ケアマネへの報告遅延が紹介減・減収につながる。質の高い報告書が営業力になる時代。",
    color: "teal",
    accentColor: "#3FA39A",
  },
];

export default function ChallengeSection() {
  return (
    <section id="challenge" className="section-padding bg-white">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">CHALLENGE</span>
          <h2 className="section-title">
            訪問看護の現場が抱える
            <br />
            <span className="text-coral">3つの課題</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            記録業務に追われるあまり、本来大切にしたい「患者様との時間」が削られていませんか？
          </p>
        </div>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="card relative overflow-hidden group hover:shadow-md transition-shadow"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: item.accentColor }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 mt-2"
                  style={{ backgroundColor: `${item.accentColor}18` }}
                >
                  <Icon size={24} style={{ color: item.accentColor }} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-body leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bridge to solution */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-navy rounded-2xl px-8 py-6 text-white max-w-2xl">
            <p className="text-lg font-bold leading-relaxed">
              これらの課題を、kowairoは
              <span className="text-teal-light"> 「話すだけ」</span>
              で解決します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
