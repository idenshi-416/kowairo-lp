"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "今使っている電子カルテシステムと一緒に使えますか？",
    a: "はい、使えます。kowairoは既存の電子カルテ・レセコンとは独立したアプリです。kowairoが生成した記録をコピー＆ペーストで転記していただく形式なので、どのシステムとも併用可能です。",
  },
  {
    q: "使えるスマートフォンの機種に制限はありますか？",
    a: "iPhoneおよびAndroidの主要機種に対応しています。詳細な動作確認機種についてはデモ時にご案内します。タブレット端末でもご利用いただけます。",
  },
  {
    q: "スタッフがITに不慣れでも使えますか？",
    a: "はい。操作は「起動する」「停止する」の2タップのみです。導入時の研修もサポートチームが対応しますので、ITが苦手なスタッフでも安心してお使いいただけます。",
  },
  {
    q: "録音された会話データはどのように管理されますか？",
    a: "録音データは暗号化されたサーバーで管理され、第三者への提供は行いません。プライバシーポリシーおよびセキュリティポリシーについては、デモ時に詳細をご説明します。",
  },
  {
    q: "無料トライアル期間中に費用はかかりますか？",
    a: "2週間の無料トライアル期間中は一切費用がかかりません。トライアル後に本導入するかどうかをご判断いただけます。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            よくある
            <span className="text-teal"> ご質問</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-navy text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-teal transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 border-t border-gray-100">
                  <p className="text-body text-sm leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
