import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { OverlookedSection } from '@/components/sections/overlooked-section';
import { ConceptSection } from '@/components/sections/concept-section';
import { ScienceSection } from '@/components/sections/science-section';
import { FoodSection } from '@/components/sections/food-section';
import { CultureSection } from '@/components/sections/culture-section';
import { ChecklistSection } from '@/components/sections/checklist-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <OverlookedSection />
        <ConceptSection />
        <ScienceSection />
        <FoodSection />
        <CultureSection />
        <ChecklistSection />
      </main>
      <Footer />
    </>
  );
}
