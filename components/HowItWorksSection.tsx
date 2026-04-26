import { MapPin, Mic, Square, FileText } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: MapPin,
    title: "アプリを起動",
    description: "訪問先に着いたらアプリを起動。難しい操作は一切ありません。",
  },
  {
    step: 2,
    icon: Mic,
    title: "いつも通り会話",
    description: "利用者様とのいつも通りの会話を録音。記録システムや他アプリとの同時使用もOK。",
  },
  {
    step: 3,
    icon: Square,
    title: "「停止」を押すだけ",
    description: "訪問終了時に停止ボタンを押すだけ。それだけで作業は完了です。",
  },
  {
    step: 4,
    icon: FileText,
    title: "記録が自動生成",
    description: "AIが「訪問看護記録案」「報告書サマリ」を自動作成。コピペで電子カルテに転記できます。",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-title">
            使い方は
            <span className="text-teal"> 3ステップ</span>
            で完了
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            既存の電子カルテ・レセコンの入れ替えは不要。今日からすぐに使えます。
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal via-teal/50 to-teal/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              const isLast = step.step === 4;
              return (
                <div key={step.step} className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-md ${
                      isLast ? "bg-teal text-white" : "bg-white border-2 border-teal text-teal"
                    }`}
                  >
                    <Icon size={32} />
                  </div>
                  <div className="text-xs font-bold text-teal mb-2 tracking-widest">
                    STEP {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <div className="mt-14 bg-teal/5 border border-teal/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
            <FileText size={22} className="text-teal" />
          </div>
          <div>
            <p className="font-bold text-navy mb-1">既存システムはそのまま使えます</p>
            <p className="text-body text-sm leading-relaxed">
              電子カルテ・レセコンの入れ替えは不要です。kowairoが生成した記録をコピー＆ペーストで転記するだけ。
              導入のハードルを極限まで下げました。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
