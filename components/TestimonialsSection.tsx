"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/app/hooks/useInView";

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
  "のぞみ医療株式会社",
  "株式会社エンスリー",
  "株式会社TBEC-SS",
  "株式会社ウェチャーアス",
  "株式会社コアエイド",
  "ファミリーナース西落合",
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { ref: marqueeRef, inView: marqueeIn } = useInView(0.1);
  const { ref: voiceRef, inView: voiceIn } = useInView();

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, []);

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
            {/* Left/right fade */}
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

        {/* Testimonials carousel */}
        <div
          ref={voiceRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${voiceIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">VOICE</span>
          <h2 className="section-title mb-12">
            お客様の
            <span className="text-coral"> 声</span>
          </h2>

          <div className="relative">
            {/* Quote card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 md:px-16 py-12 min-h-[220px] flex flex-col justify-between">
              <div
                key={current}
                className="animate-fade-in"
              >
                <div className="w-8 h-0.5 mb-8" style={{ backgroundColor: testimonials[current].color }} />
                <p className="text-navy text-xl md:text-2xl font-medium leading-relaxed mb-8">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-navy text-sm">{testimonials[current].company}</p>
                  <p className="text-body text-xs mt-1">{testimonials[current].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current ? "w-6 h-2 bg-teal" : "w-2 h-2 bg-gray-300"
                    }`}
                    aria-label={`${i + 1}件目`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:border-teal hover:text-teal transition-colors"
                  aria-label="前へ"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:border-teal hover:text-teal transition-colors"
                  aria-label="次へ"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
