import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { OverlookedSection } from '@/components/sections/overlooked-section';
import { ConceptSection } from '@/components/sections/concept-section';
import { FoodSection } from '@/components/sections/food-section';
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
        <FoodSection />
        <ChecklistSection />
      </main>
      <Footer />
    </>
  );
}
