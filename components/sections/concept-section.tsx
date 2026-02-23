'use client';

import Image from 'next/image';

export function ConceptSection() {
  return (
    <section id="concept" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-800 mb-6">
              The Unofficial Blue Zone
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Blue Zones are regions of the world where people live much longer than average.
              While Okinawa and Sardinia are famous, <strong>Halland</strong> is quietly emerging
              as the Nordic contender.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              With the <strong>highest life expectancy in Sweden</strong> (approx. 85 years for
              women, 81.5 for men), Halland&apos;s secret isn&apos;t just one thing. It could be the synergy of
              advanced &quot;Information Driven Care&quot; and a lifestyle deeply rooted in locally produced food,culture, cold
              baths, and community. In truth, we don't know for sure.</p>
            <div className="cta-shimmer relative mb-8 rounded-xl bg-cyan-50/60 border border-cyan-200/60 px-6 py-5">
              <p className="text-lg text-cyan-900 leading-relaxed font-medium">
                But we invite you, and others like you, to unravel the mystery together with us. Maybe, you would like to build your longevity journey from one of the best and most unexplored starting fields out there.
              </p>
            </div>

          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full z-0 opacity-50" />
            <Image
              src="/images/nature-walk.jpg"
              alt="Elderly couple walking in nature"
              width={600}
              height={500}
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              unoptimized
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl z-20 max-w-xs border-l-4 border-cyan-600">
              <p className="font-serif text-xl italic text-cyan-800">
                &quot;The art of longevity is keeping the mind as active as the body.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
