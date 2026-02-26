import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import FeaturedProject from "@/components/FeaturedProject";
import BroughtInFor from "@/components/BroughtInFor";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="line-accent max-w-6xl mx-auto" />
      <ExpertiseSection />
      <div className="line-accent max-w-6xl mx-auto" />
      <ArchitectureSection />
      <div className="line-accent max-w-6xl mx-auto" />
      <FeaturedProject />
      <div className="line-accent max-w-6xl mx-auto" />
      <BroughtInFor />
      <div className="line-accent max-w-6xl mx-auto" />
      <ContactSection />

      <footer className="py-10 px-6 text-center">
        <p className="text-dim text-sm font-mono">
          © {new Date().getFullYear()} Guillermo Baron · guillo.dev
        </p>
      </footer>
    </div>
  );
};

export default Index;
