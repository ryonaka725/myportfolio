import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Aboutセクション：自己紹介 */
export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* セクションタイトル */}
        <header className="text-center mb-16">
          <p className="font-[family-name:var(--font-inter)] text-sm tracking-[0.2em] uppercase text-orange-accent mb-2">
            About
          </p>
          <h2 className="text-3xl font-bold tracking-tight">自己紹介</h2>
          <div className="mt-4 w-12 h-1 bg-orange-accent mx-auto rounded-full" />
        </header>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* プロフィール画像プレースホルダー */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={`${basePath}/images/itsme.svg`}
                alt="Ryo Nakajimaのプロフィール写真"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* 自己紹介テキスト */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4">
              こんにちは、
              <span className="text-orange-accent">Web Developer</span> です。
            </h3>
            <p className="text-gray-sub leading-relaxed mb-4">
              シンプルで使いやすいWebサイトの制作を得意としています。
              デザインからコーディングまで一貫して対応し、
              お客様のビジネスに最適なWebソリューションをご提供します。
            </p>
            <p className="text-gray-sub leading-relaxed mb-6">
              「伝わるデザイン」と「使いやすさ」を大切に、
              一つひとつのプロジェクトに丁寧に向き合っています。
            </p>

            {/* プロフィール情報 */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3">
                <dt className="text-sm text-gray-sub min-w-[80px]">名前</dt>
                <dd className="text-sm font-medium">Ryo Nakajima</dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="text-sm text-gray-sub min-w-[80px]">所在地</dt>
                <dd className="text-sm font-medium">愛知県</dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="text-sm text-gray-sub min-w-[80px]">職業</dt>
                <dd className="text-sm font-medium">プログラマー</dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="text-sm text-gray-sub min-w-[80px]">趣味</dt>
                <dd className="text-sm font-medium">カフェ巡り</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
