"use client";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

const challenges = [
  {
    num: "01",
    title: "時間の圧迫と残業",
    description:
      "月末の報告書・サマリ作成負担で残業や持ち帰りが常態化。本来患者様と向き合うべき時間が、書類仕事に奪われています。",
    accentColor: "#E5876B",
  },
  {
    num: "02",
    title: "記録の形骸化",
    description:
      "忙しさから「前回と同じ」になりがち。患者様の些細な変化を残せず、ケアの質が知らないうちに低下していきます。",
    accentColor: "#D4A03B",
  },
  {
    num: "03",
    title: "連携不足による機会損失",
    description:
      "ケアマネへの報告遅延や内容の薄さが、紹介減・減収につながります。質の高い報告書そのものが営業力になる時代です。",
    accentColor: "#4A90D9",
  },
];

export default function ChallengeSection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: listRef, inView: listIn } = useInView();

  return (
    <section id="challenge" className="section-padding bg-white">
      <div className="container-wide">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mb-16 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
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

        <div
          ref={listRef as React.RefObject<HTMLDivElement>}
          className="space-y-0 divide-y divide-gray-100"
        >
          {challenges.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col md:flex-row items-start gap-8 py-10 transition-all duration-700 ${listIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Large number */}
              <div className="flex-shrink-0 w-20">
                <span
                  className="text-7xl font-black leading-none"
                  style={{ color: item.accentColor, opacity: 0.25 }}
                >
                  {item.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div
                  className="w-6 h-0.5 mb-4"
                  style={{ backgroundColor: item.accentColor }}
                />
                <h3 className="text-2xl font-black text-navy mb-3">{item.title}</h3>
                <p className="text-body leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className="mt-10 flex items-center gap-4">
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
