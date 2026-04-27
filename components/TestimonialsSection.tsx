const testimonials = [
  {
    quote:
      "利用者さまとの会話に集中できるようになった。自力で覚えていなくても記録が自然にできているのがありがたい。",
    company: "ファミリーナース西落合",
    role: "管理者",
    color: "#4A90D9",
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
        {/* Client list */}
        <div className="mb-20">
          <span className="section-label">CLIENTS</span>
          <h2 className="section-title mb-10">
            導入いただいている
            <span className="text-teal"> 訪問看護ステーション</span>
          </h2>
          <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-gray-200 pt-8">
            {clients.map((c) => (
              <div key={c.name}>
                <p className="text-navy font-bold text-sm">{c.name}</p>
                <p className="text-body text-xs mt-0.5">{c.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <span className="section-label">VOICE</span>
          <h2 className="section-title mb-12">
            お客様の
            <span className="text-coral"> 声</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {testimonials.map((t) => (
              <div key={t.company}>
                <div className="w-8 h-0.5 mb-8" style={{ backgroundColor: t.color }} />
                <p className="text-navy text-xl font-medium leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-navy text-sm">{t.company}</p>
                  <p className="text-body text-xs mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
