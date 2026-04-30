"use client";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

const challenges = [
  {
    num: "01",
    title: "帰宅後の記録に30分〜1時間かかっている",
    description:
      "訪問中は患者さんに集中できても、帰宅後の入力・月末のサマリ・報告書作成で毎日時間が消費されます。深夜まで記録が終わらない日も珍しくありません。",
    accentColor: "#E5876B",
  },
  {
    num: "02",
    title: "忙しくて「前回と同じ」でコピペしてしまう",
    description:
      "時間が足りず、記録が形式化しがちです。患者さんの小さな変化を書き残せず、ケアの質が知らないうちに低下していきます。",
    accentColor: "#D4A03B",
  },
  {
    num: "03",
    title: "ケアマネへの報告がどうしても遅れてしまう",
    description:
      "タイムリーな報告の大切さはわかっていても、記録作業に追われて連携が後手になりがちです。質の高い報告書が紹介増加につながる時代です。",
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
