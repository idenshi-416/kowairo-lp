const steps = [
  {
    title: "ヒアリング・デモ",
    description: "現場の課題や体制をヒアリングし、実際のデモをご覧いただきます。",
    duration: "約30分",
  },
  {
    title: "無料トライアル",
    description: "2週間、実際の訪問現場でお試しいただけます。費用は一切かかりません。",
    duration: "2週間",
  },
  {
    title: "本格導入",
    description: "導入設定はシンプル。既存システムはそのままで、すぐに全スタッフが使い始められます。",
    duration: "最短1日",
  },
  {
    title: "運用サポート",
    description: "導入後もサポートチームが伴走。使い方のコツや活用方法をお伝えします。",
    duration: "継続的に",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="max-w-2xl mb-16">
          <span className="section-label">ONBOARDING</span>
          <h2 className="section-title">
            導入までの
            <span className="text-teal"> 流れ</span>
          </h2>
          <p className="section-subtitle">
            デモから本導入まで、最短2週間。担当者が丁寧にサポートします。
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-8 py-8 first:pt-0 last:pb-0">
              <div className="flex-shrink-0 w-20 pt-0.5">
                <span className="text-xs font-bold text-teal tracking-widest">STEP {i + 1}</span>
                <p className="text-xs text-body mt-1.5">{step.duration}</p>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-body text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
