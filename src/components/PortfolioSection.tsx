/** ポートフォリオ作品の型定義 */
type PortfolioItem = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  imageSrc?: string;
};

/** ポートフォリオ作品データ（テスト用） */
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "カフェ サンプルサイト",
    description:
      "架空のカフェのWebサイトです。温かみのあるデザインで、メニューや店舗情報を分かりやすく伝えます。",
    tags: ["HTML", "CSS", "JS"],
    url: "https://comorebi-cafe.netlify.app/",
    imageSrc: "/images/cafesite.png",
  },
  {
    title: "清掃業のコーポレートサイト",
    description: "架空の清掃業者のwebサイトです。",
    tags: ["Next.js", "TypeScript", "SEO対策"],
    url: "https://cleanclean-website.netlify.app/",
    imageSrc: "/images/cleaningsite.png",
  },
  {
    title: "スポーツジムサンプルサイト",
    description: "架空のスポーツジムのWEBサイトです。",
    tags: ["Next.js", "Tailwind CSS", "アクセシビリティ"],
    url: "https://sometimefitness-samplesite.netlify.app/",
    imageSrc: "/images/fitnessgymsite.png",
  },
];

/** Portfolioセクション：制作実例 */
export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* セクションタイトル */}
        <header className="text-center mb-16">
          <p className="font-[family-name:var(--font-inter)] text-sm tracking-[0.2em] uppercase text-orange-accent mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight">制作実例</h2>
          <div className="mt-4 w-12 h-1 bg-orange-accent mx-auto rounded-full" />
        </header>

        {/* ポートフォリオカード */}
        <div className="grid md:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <article
              key={item.title}
              className="group bg-white border border-gray-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-orange-accent/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* サムネイル */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title}のサイトを開く`}
                className="relative h-48 bg-gradient-to-br from-orange-light to-gray-bg flex items-center justify-center overflow-hidden block"
              >
                {item.imageSrc ? (
                  <img
                    src={item.imageSrc}
                    alt={`${item.title}のスクリーンショット`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-orange-accent/30 group-hover:text-orange-accent/50 transition-colors">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-xs font-medium">Preview</span>
                  </div>
                )}
                {/* ホバー時のオーバーレイ */}
                <div className="absolute inset-0 bg-orange-accent/0 group-hover:bg-orange-accent/5 transition-colors duration-300" />
              </a>

              {/* カード情報 */}
              <div className="p-6">
                <h3 className="text-base font-bold mb-2 group-hover:text-orange-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-sub leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-orange-light text-orange-accent rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* リンク */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-accent hover:text-orange-dark transition-colors"
                >
                  <span>サイトを見る</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
