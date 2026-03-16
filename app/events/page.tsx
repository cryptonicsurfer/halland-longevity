import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { EventsSection } from '@/components/sections/events-section';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Events — Halland: The Nordic Blue Zone',
  description:
    'Events and workshops related to Halland as the Nordic Blue Zone.',
};

export default function EventsPage() {
  return (
    <>
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
        <EventsSection />
      </main>
      <Footer />
    </>
  );
}
