import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <Image
              src="/images/ceo.jpg"
              alt="代表取締役医師 宗 大貴"
              width={560}
              height={640}
              className="w-full max-w-md mx-auto lg:mx-0 object-cover rounded-2xl"
            />
          </div>

          {/* Message */}
          <div>
            <span className="section-label">FOUNDER</span>
            <h2 className="section-title mb-8">
              医師として、
              <br />
              <span className="text-teal">現場を変えたかった。</span>
            </h2>

            <div className="space-y-5 text-body leading-relaxed">
              <p>
                私が訪問看護の現場と向き合う中で、強く感じたことがあります。看護師たちが本当に大切にしたいのは、患者様との時間なのに、その時間が書類仕事に奪われている。
              </p>
              <p>
                「もっと患者さんを見ていたいのに、記録が追いつかない」という声を何度も聞きました。優秀なスタッフが疲弊し、辞めていく。その繰り返しを、医師として看過できませんでした。
              </p>
              <p>
                kowairoは、テクノロジーで「記録の負担」をゼロに近づけ、スタッフが本来の仕事に集中できる環境をつくるために開発しました。訪問看護の現場が、もっと豊かになることを信じています。
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="font-black text-navy text-lg">宗 大貴</p>
              <p className="text-body text-sm mt-1">株式会社医伝士 代表取締役医師</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
