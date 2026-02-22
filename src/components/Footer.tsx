/** 現在の年を取得する定数 */
const CURRENT_YEAR = new Date().getFullYear();

/** フッターコンポーネント */
export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-border">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="font-[family-name:var(--font-inter)] text-sm text-gray-sub">
          &copy; {CURRENT_YEAR}{" "}
          <span className="font-medium text-gray-text">Portfolio</span>
          <span className="text-orange-accent">.</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
