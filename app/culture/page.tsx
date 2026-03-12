import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { CultureSection } from '@/components/sections/culture-section';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';

export const metadata: Metadata = {
  title: 'Culture as Medicine — Halland: The Nordic Blue Zone',
  description:
    'Explore six museums across Halland that serve as mental gymnasiums — from Hallands Konstmuseum to UNESCO World Heritage site Grimeton. Culture as a path to longevity.',
  openGraph: {
    title: 'Culture as Medicine — Halland Museums',
    description:
      "A curated journey through Halland\u2019s cultural destinations that boost mental health and longevity.",
    images: [{ url: '/images/generated/culture-museum.png', width: 1200, height: 630 }],
  },
};

export default function CulturePage() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'TouristAttraction',
          name: 'Halland Cultural Route',
          description:
            'A curated journey through six museums in Halland, Sweden, each offering unique longevity benefits through art, history, and nature.',
          url: 'https://hallandlongevity.se/culture',
          touristType: 'Cultural Tourism',
          isAccessibleForFree: false,
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'Halland',
            addressCountry: 'SE',
          },
        }}
      />
      <Navigation />
      <main id="main-content" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cyan-700 hover:text-cyan-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        <CultureSection />
      </main>
      <Footer />
    </>
  );
}
