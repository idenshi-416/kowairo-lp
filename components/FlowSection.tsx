import { MessageSquare, PlayCircle, CheckCircle, LifeBuoy } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "ヒアリング・デモ",
    description: "現場の課題や体制をヒアリングし、実際のデモをご覧いただきます。",
    duration: "約30分",
  },
  {
    icon: PlayCircle,
    title: "無料トライアル",
    description: "2週間、実際の訪問現場でお試しいただけます。費用は一切かかりません。",
    duration: "2週間",
  },
  {
    icon: CheckCircle,
    title: "本格導入",
    description: "導入設定はシンプル。既存システムはそのままで、すぐに全スタッフが使い始められます。",
    duration: "最短1日",
  },
  {
    icon: LifeBuoy,
    title: "運用サポート",
    description: "導入後もサポートチームが伴走。使い方のコツや活用方法をお伝えします。",
    duration: "継続的に",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="section-label">ONBOARDING</span>
          <h2 className="section-title">
            導入までの
            <span className="text-teal"> 流れ</span>
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            デモから本導入まで、最短2週間。担当者が丁寧にサポートします。
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <div className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  {/* Step number + icon */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center">
                      <Icon size={26} className="text-teal" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 h-6 bg-teal/20 mt-3" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-teal tracking-widest">
                          STEP {i + 1}
                        </span>
                        <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                      </div>
                      <span className="text-xs bg-teal/10 text-teal font-bold px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-body text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
