import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "利用者さまとの会話に集中できるようになった。自力で覚えていなくても記録が自然にできているのがありがたい。",
    company: "ファミリーナース西落合",
    role: "管理者",
    color: "#3FA39A",
  },
  {
    quote:
      "他社のサービスも試したことがあるが、訪問看護での使用に特化しているのでとても使いやすい。",
    company: "のぞみ医療株式会社",
    role: "管理者",
    color: "#E5876B",
  },
];

const clients = [
  { name: "のぞみ医療株式会社", location: "神奈川県川崎市" },
  { name: "株式会社エンスリー", location: "東京都中央区" },
  { name: "株式会社TBEC-SS", location: "東京都足立区" },
  { name: "株式会社ウェチャーアス", location: "東京都新宿区" },
  { name: "株式会社コアエイド", location: "東京都目黒区" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container-wide">
        {/* Client logos section */}
        <div className="text-center mb-16">
          <span className="section-label">CLIENTS</span>
          <h2 className="section-title mb-10">
            導入いただいている
            <span className="text-teal"> 訪問看護ステーション</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm"
              >
                <p className="text-navy font-bold text-sm">{c.name}</p>
                <p className="text-body text-xs mt-0.5">{c.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="section-label">VOICE</span>
          <h2 className="section-title">
            お客様の
            <span className="text-coral"> 声</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative"
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${t.color}15` }}
              >
                <Quote size={18} style={{ color: t.color }} />
              </div>

              {/* Accent line */}
              <div className="w-10 h-1 rounded-full mb-6" style={{ backgroundColor: t.color }} />

              <p className="text-navy text-lg font-medium leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ backgroundColor: t.color }}
                >
                  {t.company[0]}
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{t.company}</p>
                  <p className="text-body text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
