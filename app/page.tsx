import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { OverlookedSection } from '@/components/sections/overlooked-section';
import { ConceptSection } from '@/components/sections/concept-section';
import { FoodSection } from '@/components/sections/food-section';
import { ChecklistSection } from '@/components/sections/checklist-section';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';

export default function Home() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Halland: The Nordic Blue Zone',
          url: 'https://hallandlongevity.se',
          description:
            "Sweden's unofficial Blue Zone with the highest life expectancy and highest density of Michelin restaurants per capita.",
        }}
      />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Halland Longevity Initiative',
          url: 'https://hallandlongevity.se',
          logo: 'https://hallandlongevity.se/logo.jpeg',
          description:
            'Promoting Halland, Sweden as the Nordic Blue Zone through healthcare innovation, food culture, and community.',
          areaServed: {
            '@type': 'Place',
            name: 'Halland, Sweden',
          },
        }}
      />
      <Navigation />
      <main id="main-content">
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
