import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { ScienceSection } from '@/components/sections/science-section';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';

export const metadata: Metadata = {
  title: 'The Science — Halland: The Nordic Blue Zone',
  description:
    'Discover how Region Halland uses Information Driven Care, AI research from CAISR Health, and a unique data lake to pioneer predictive healthcare and extend healthy lifespans.',
  openGraph: {
    title: "The Science Behind Halland\u2019s Longevity",
    description:
      'Information Driven Care, CAISR Health AI research, and a unique regional data lake powering predictive healthcare.',
    images: [{ url: '/images/generated/science-facility.png', width: 1200, height: 630 }],
  },
};

export default function SciencePage() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          name: "The Science Behind Halland\u2019s Longevity",
          description:
            'How Region Halland uses Information Driven Care, AI, and a unique data lake to pioneer predictive healthcare.',
          url: 'https://hallandlongevity.se/science',
          about: {
            '@type': 'MedicalCondition',
            name: 'Healthy Aging',
          },
          mainEntity: {
            '@type': 'ResearchOrganization',
            name: 'CAISR Health — Halmstad University',
            description:
              'Center for Applied Intelligent Systems Research, pioneering AI for healthcare at Halmstad University.',
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
        <ScienceSection />
      </main>
      <Footer />
    </>
  );
}
