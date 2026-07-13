import { TopNav } from "@/components/anatomy/TopNav";
import { HeroLab } from "@/components/anatomy/HeroLab";
import { AIAssistant } from "@/components/anatomy/AIAssistant";
import { GlobalSearch } from "@/components/anatomy/GlobalSearch";
import { SystemsOverview } from "@/components/anatomy/sections/SystemsOverview";
import { MicroscopeJourney } from "@/components/anatomy/sections/MicroscopeJourney";
import { Capabilities } from "@/components/anatomy/sections/Capabilities";
import { DiseaseLibrary } from "@/components/anatomy/sections/DiseaseLibrary";
import { EducationModes } from "@/components/anatomy/sections/EducationModes";
import { QuizSection } from "@/components/anatomy/sections/QuizSection";
import { CTASection } from "@/components/anatomy/sections/CTASection";
import { Footer } from "@/components/anatomy/Footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background">
      <TopNav />

      <main className="flex-1">
        <HeroLab />
        <SystemsOverview />
        <MicroscopeJourney />
        <Capabilities />
        <DiseaseLibrary />
        <EducationModes />
        <QuizSection />
        <CTASection />
      </main>

      <Footer />

      {/* Global overlays */}
      <AIAssistant />
      <GlobalSearch />
    </div>
  );
}
