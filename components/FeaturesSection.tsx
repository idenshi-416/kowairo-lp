"use client";
import { useInView } from "@/app/hooks/useInView";

export default function FeaturesSection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: card1Ref, inView: card1In } = useInView();
  const { ref: card2Ref, inView: card2In } = useInView();
  const { ref: card3Ref, inView: card3In } = useInView();

  const fade = (inView: boolean) =>
    `transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
  const style = (delay: number): React.CSSProperties => ({ transitionDelay: `${delay}ms` });

  return (
    <section id="features" className="section-padding bg-cream">
      <div className="container-wide">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 ${fade(headIn)}`}
        >
          <span className="section-label">FEATURES</span>
          <h2 className="section-title">
            kowairoの
            <span className="text-teal">3つの特徴</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            訪問看護の現場に特化した、使いやすさと効果を追求した機能。
          </p>
        </div>

        {/* Feature 1 & 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          <div
            ref={card1Ref as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm ${fade(card1In)}`}
            style={style(0)}
          >
            <div>
              <p className="text-xs font-bold text-teal tracking-widest mb-1">TIME SAVING</p>
              <h3 className="text-2xl font-black text-navy mb-1">圧倒的な時短</h3>
              <p className="text-teal font-bold text-sm mb-4">記録時間 80% 削減</p>
              <p className="text-body leading-relaxed mb-6">
                日々の記録から月末サマリ、カンファレンス資料まで対応。
                1日1時間かかっていた記録が<strong className="text-navy">約12分</strong>に。
                残業削減・ワークライフバランス改善に直結します。
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-4xl font-black text-navy">1<span className="text-xl">時間</span></p>
                  <p className="text-xs text-body mt-1">導入前</p>
                </div>
                <div className="text-2xl text-gray-300 font-light">→</div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal">12<span className="text-xl">分</span></p>
                  <p className="text-xs text-body mt-1">導入後</p>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={card2Ref as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm ${fade(card2In)}`}
            style={style(150)}
          >
            <p className="text-xs font-bold text-coral tracking-widest mb-1">CONTEXT</p>
            <h3 className="text-xl font-black text-navy mb-1">生活文脈の蓄積</h3>
            <p className="text-coral font-bold text-sm mb-4">在宅ならではの個別ケア</p>
            <p className="text-body text-sm leading-relaxed">
              自然な会話から「生活上の課題」をAIが自動抽出。
              患者様の些細な変化も逃さず記録。
              利用者様との会話に集中できるようになります。
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div
          ref={card3Ref as React.RefObject<HTMLDivElement>}
          className={`bg-navy rounded-2xl p-8 text-white flex flex-col md:flex-row items-start md:items-center gap-8 ${fade(card3In)}`}
          style={style(100)}
        >
          <div className="flex-1">
            <p className="text-xs font-bold text-mustard tracking-widest mb-1">QUALITY</p>
            <h3 className="text-xl font-black mb-2">記録の標準化</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              スタッフの経験や文章力に依存せず、AIが要点を整理。
              新人からベテランまで、均一に質の高い記録を生成。
              ケアマネへの報告書が、そのまま<span className="text-mustard font-bold">営業ツール</span>になります。
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            {["経験・文章力に左右されない", "ケアマネ報告書を自動生成", "紹介獲得・売上向上に貢献"].map((t) => (
              <span key={t} className="text-xs bg-white/10 text-white/80 px-3 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
