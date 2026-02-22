/** スキルデータの型定義 */
type Skill = {
  name: string;
  level: number;
  category: string;
};

/** スキル一覧データ */
const SKILLS: Skill[] = [
  { name: "HTML / CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 80, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "React / Next.js", level: 75, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Git / GitHub", level: 70, category: "Tools" },
  { name: "Figma", level: 65, category: "Design" },
  { name: "Responsive Design", level: 85, category: "Design" },
];

/** カテゴリ別にスキルをグルーピング */
const SKILL_CATEGORIES = ["Frontend", "Design", "Tools"] as const;

/** Skillsセクション：スキル紹介 */
export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-bg">
      <div className="max-w-4xl mx-auto px-6">
        {/* セクションタイトル */}
        <header className="text-center mb-16">
          <p className="font-[family-name:var(--font-inter)] text-sm tracking-[0.2em] uppercase text-orange-accent mb-2">
            Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight">スキル</h2>
          <div className="mt-4 w-12 h-1 bg-orange-accent mx-auto rounded-full" />
        </header>

        {/* カテゴリ別スキル表示 */}
        <div className="space-y-12">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category}>
              <h3 className="font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wider text-orange-accent uppercase mb-6">
                {category}
              </h3>
              <div className="space-y-5">
                {SKILLS.filter((skill) => skill.category === category).map(
                  (skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="font-[family-name:var(--font-inter)] text-xs text-gray-sub">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-accent to-orange-dark rounded-full animate-skill-bar"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
