/** ファーストビュー：キャッチコピーとスクロール誘導 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景のデコレーション */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* オレンジのグラデーション円 */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-accent/10 to-orange-accent/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-orange-accent/8 to-transparent blur-3xl" />
        {/* ドットパターン */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #F97316 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        {/* サブテキスト */}
        <p className="font-[family-name:var(--font-inter)] text-sm tracking-[0.3em] uppercase text-orange-accent mb-6">
          Web Developer
        </p>

        {/* メインキャッチ */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          つくる、届ける、
          <br />
          <span className="text-orange-accent">想いをカタチに。</span>
        </h1>

        {/* 説明文 */}
        <p className="text-base sm:text-lg text-gray-sub max-w-md mx-auto leading-relaxed mb-12">
          シンプルで美しいWebサイトを通じて、
          <br className="hidden sm:block" />
          あなたのビジネスの価値を届けます。
        </p>

        {/* スクロール誘導 */}
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm text-gray-sub hover:text-orange-accent transition-colors group"
        >
          <span className="font-[family-name:var(--font-inter)] tracking-wider">
            Scroll
          </span>
          <svg
            className="w-4 h-4 animate-bounce group-hover:text-orange-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
