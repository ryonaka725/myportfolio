import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import LinksSection from "@/components/LinksSection";
import Footer from "@/components/Footer";

/** トップページ：1ページ完結のポートフォリオ */
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <LinksSection />
      </main>
      <Footer />
    </>
  );
}
