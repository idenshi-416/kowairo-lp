"use client";
import { Check } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

const plans = [
  {
    name: "スターター",
    capacity: "〜5名まで",
    price: "19,800",
    description: "小規模ステーション向け",
    features: ["常勤換算5名まで", "利用時間無制限", "訪問看護記録自動生成", "月末サマリ自動生成", "メールサポート"],
    highlighted: false,
    color: "#4A90D9",
  },
  {
    name: "スタンダード",
    capacity: "〜15名まで",
    price: "29,800",
    description: "中規模ステーションに最適",
    features: ["常勤換算15名まで", "利用時間無制限", "訪問看護記録自動生成", "月末サマリ自動生成", "カンファレンス資料対応", "優先サポート"],
    highlighted: true,
    color: "#4A90D9",
  },
  {
    name: "エンタープライズ",
    capacity: "15名以上",
    price: null,
    description: "大規模・多拠点ステーション向け",
    features: ["常勤換算15名以上", "利用時間無制限", "全機能利用可能", "専任サポート担当", "カスタマイズ対応", "SLA保証"],
    highlighted: false,
    color: "#D4A03B",
  },
];

export default function PricingSection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: cardsRef, inView: cardsIn } = useInView();

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-wide">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">PRICING</span>
          <h2 className="section-title">
            シンプルな
            <span className="text-teal"> 料金プラン</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            年契約・税抜・利用時間無制限の定額制。
            <br />
            スタッフが増えても安心の価格体系です。
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-2xl overflow-hidden border-2 flex flex-col transition-all duration-700 ${
                plan.highlighted
                  ? "border-teal shadow-2xl shadow-teal/20"
                  : "border-gray-100 shadow-sm"
              } ${cardsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Header */}
              <div className={`px-8 py-6 ${plan.highlighted ? "bg-teal text-white" : "bg-gray-50 text-navy"}`}>
                {plan.highlighted && (
                  <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    おすすめ
                  </div>
                )}
                <h3 className="text-xl font-black mb-1">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? "text-white/80" : "text-body"}`}>
                  {plan.description}
                </p>
                {plan.price ? (
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-black ${plan.highlighted ? "text-white" : "text-navy"}`}>
                      ¥{plan.price}
                    </span>
                    <span className={`text-sm mb-1 ${plan.highlighted ? "text-white/70" : "text-body"}`}>
                      /月（税抜）
                    </span>
                  </div>
                ) : (
                  <div className="text-3xl font-black">お見積り</div>
                )}
                <p className={`text-sm mt-2 font-medium ${plan.highlighted ? "text-white/70" : "text-body"}`}>
                  {plan.capacity}
                </p>
              </div>

              {/* Features */}
              <div className="bg-white px-8 py-6 flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-body text-sm">
                      <Check size={16} className="text-teal flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#trial"
                  className={`block text-center font-bold py-3 px-6 rounded-xl text-sm transition-colors ${
                    plan.highlighted
                      ? "bg-teal text-white hover:bg-teal-dark"
                      : "border-2 border-teal text-teal hover:bg-teal hover:text-white"
                  }`}
                >
                  {plan.price ? "無料トライアルを始める" : "お問い合わせ"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-body text-sm mt-8">
          ※ 年契約・税抜表示。2週間の無料トライアルをご利用いただけます。
        </p>
      </div>
    </section>
  );
}
