"use client";
import { useInView } from "@/app/hooks/useInView";

const testimonials = [
  {
    quote:
      "利用者さまとの会話に集中できるようになった。自力で覚えていなくても記録が自然にできているのがありがたい。",
    role: "東京都・訪問看護ステーション管理者（看護師歴20年）",
    color: "#4A90D9",
  },
  {
    quote:
      "他社のサービスも試したことがあるが、訪問看護での使用に特化しているのでとても使いやすい。",
    role: "神奈川県・訪問看護ステーション 所長（理学療法士歴10年以上）",
    color: "#E5876B",
  },
];

const clients = [
  "のぞみ医療株式会社",
  "株式会社エンスリー",
  "株式会社TBEC-SS",
  "株式会社ウェチャーアス",
  "株式会社コアエイド",
  "ファミリーナース西落合",
];

export default function TestimonialsSection() {
  const { ref: marqueeRef, inView: marqueeIn } = useInView(0.1);
  const { ref: voiceRef, inView: voiceIn } = useInView();

  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container-wide">

        {/* Marquee client strip */}
        <div
          ref={marqueeRef as React.RefObject<HTMLDivElement>}
          className={`mb-20 transition-all duration-700 ${marqueeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">CLIENTS</span>
          <h2 className="section-title mb-8">
            導入いただいている
            <span className="text-teal"> 訪問看護ステーション</span>
          </h2>

          {/* Scrolling strip */}
          <div className="relative overflow-hidden border-t border-b border-gray-200 py-5">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...clients, ...clients].map((name, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-3 mx-8 text-navy font-bold text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials list */}
        <div
          ref={voiceRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${voiceIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">VOICE</span>
          <h2 className="section-title mb-12">
            お客様の
            <span className="text-coral"> 声</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-0.5 mb-8" style={{ backgroundColor: t.color }} />
                  <p className="text-navy text-lg md:text-xl font-medium leading-relaxed mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <p className="text-body text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
