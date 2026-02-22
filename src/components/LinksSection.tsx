/** SNSリンクの型定義 */
type SocialLink = {
  name: string;
  url: string;
  icon: "x" | "instagram";
};

/** SNSリンクデータ */
const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "X (Twitter)",
    url: "https://x.com/",
    icon: "x",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/",
    icon: "instagram",
  },
];

/** X (Twitter) アイコン */
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/** Instagram アイコン */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

/** アイコンコンポーネントの選択 */
function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  switch (icon) {
    case "x":
      return <XIcon />;
    case "instagram":
      return <InstagramIcon />;
  }
}

/** Linksセクション：SNSリンク */
export default function LinksSection() {
  return (
    <section id="links" className="py-24 bg-gray-bg">
      <div className="max-w-4xl mx-auto px-6">
        {/* セクションタイトル */}
        <header className="text-center mb-16">
          <p className="font-[family-name:var(--font-inter)] text-sm tracking-[0.2em] uppercase text-orange-accent mb-2">
            Links
          </p>
          <h2 className="text-3xl font-bold tracking-tight">リンク</h2>
          <div className="mt-4 w-12 h-1 bg-orange-accent mx-auto rounded-full" />
        </header>

        {/* SNSリンクカード */}
        <div className="flex justify-center gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-gray-border hover:border-orange-accent/30 hover:shadow-lg hover:shadow-orange-accent/5 transition-all duration-300 hover:-translate-y-1 w-40"
              aria-label={`${link.name}を開く`}
            >
              <div className="text-gray-sub group-hover:text-orange-accent transition-colors duration-300">
                <SocialIcon icon={link.icon} />
              </div>
              <span className="text-sm font-medium text-gray-sub group-hover:text-gray-text transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
