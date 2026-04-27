import { ArrowRight } from "lucide-react";

const challenges = [
  {
    label: "課題 1",
    title: "時間の圧迫と残業",
    description:
      "月末の報告書・サマリ作成負担で残業や持ち帰りが常態化。本来患者様と向き合うべき時間が、書類仕事に奪われています。",
    accentColor: "#E5876B",
  },
  {
    label: "課題 2",
    title: "記録の形骸化",
    description:
      "忙しさから「前回と同じ」になりがち。患者様の些細な変化を残せず、ケアの質が知らないうちに低下していきます。",
    accentColor: "#D4A03B",
  },
  {
    label: "課題 3",
    title: "連携不足による機会損失",
    description:
      "ケアマネへの報告遅延や内容の薄さが、紹介減・減収につながります。質の高い報告書そのものが営業力になる時代です。",
    accentColor: "#4A90D9",
  },
];

export default function ChallengeSection() {
  return (
    <section id="challenge" className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <span className="section-label">CHALLENGE</span>
          <h2 className="section-title">
            現場が疲弊する、
            <br />
            <span className="text-coral">本当の理由</span>
          </h2>
          <p className="section-subtitle">
            「人手が足りない」だけではありません。記録業務が生み出す見えないコストが、スタッフと経営の両方を圧迫しています。
          </p>
        </div>

        <div className="space-y-6">
          {challenges.map((item, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={item.title}
                className={`flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Color panel */}
                <div
                  className="md:w-2 flex-shrink-0"
                  style={{ backgroundColor: item.accentColor }}
                />
                {/* Content */}
                <div className="flex-1 px-8 py-7">
                  <p className="text-xs font-bold tracking-widest mb-2" style={{ color: item.accentColor }}>
                    {item.label}
                  </p>
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-body leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridge */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="flex items-center gap-2 text-teal font-bold text-sm whitespace-nowrap">
            kowairoが解決します
            <ArrowRight size={16} />
          </div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
