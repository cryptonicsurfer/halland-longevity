'use client';

import { useState } from 'react';
import { BrainCircuit, Anchor, Lightbulb, Leaf, Palette, Radio, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { FadeInUp } from '@/components/ui/motion';
import { useI18n } from '@/lib/i18n/context';

const museumKeys = ['konstmuseum', 'kulturhistoriska', 'rian', 'askhult', 'teckningsmuseet', 'grimeton'] as const;
const museumIcons = [BrainCircuit, Anchor, Lightbulb, Leaf, Palette, Radio];
const museumLocations = ['Halmstad', 'Varberg', 'Falkenberg', 'Kungsbacka', 'Laholm', 'Varberg'];
const museumImages = [
  '/images/museum-konstmuseum.jpg',
  '/images/museum-varberg.jpg',
  '/images/museum-rian.jpg',
  '/images/museum-askhult.jpg',
  '/images/museum-teckningsmuseet.jpg',
  '/images/museum-grimeton.jpg',
];

export function CultureSection() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const museums = museumKeys.map((key, i) => {
    const m = t.culture.museums[key];
    return {
      id: `museum-${i + 1}`,
      number: i + 1,
      name: m.name,
      location: museumLocations[i],
      tags: m.tags,
      description: m.description,
      benefit: {
        icon: museumIcons[i],
        title: m.benefitTitle,
        text: m.benefitText,
      },
      image: museumImages[i],
    };
  });

  const activeMuseum = museums[activeIndex];

  return (
    <section id="culture" className="py-24 bg-stone-50" aria-label="Culture and museums">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              {t.culture.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t.culture.subtitle}
              <br />
              <span className="italic font-serif text-cyan-700">
                {t.culture.selectPrompt}
              </span>
            </p>
          </div>
        </FadeInUp>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Column: Navigation */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start">
            <h3 className="font-serif text-2xl mb-6 text-stone-800 ml-4">{t.culture.routeTitle}</h3>

            <div role="tablist" aria-label={t.culture.routeTitle} className="relative space-y-2 border-l-2 border-stone-200 ml-4 pl-4">
              {museums.map((museum, index) => (
                <button
                  key={museum.id}
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-controls={`museum-panel-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left group flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-stone-100 -ml-[19px] relative ${
                    activeIndex === index
                      ? 'bg-cyan-50 border-l-4 border-cyan-600'
                      : ''
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full font-bold flex items-center justify-center text-sm transition-colors ${
                      activeIndex === index
                        ? 'bg-cyan-600 text-white'
                        : 'bg-stone-200 text-stone-600'
                    }`}
                    aria-hidden="true"
                  >
                    {museum.number}
                  </span>
                  <span
                    className={`font-medium transition-colors ${
                      activeIndex === index
                        ? 'text-cyan-800 font-bold'
                        : 'text-stone-600'
                    }`}
                  >
                    {museum.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Content Card */}
          <div
            className="w-full lg:w-2/3 min-h-[600px]"
            role="tabpanel"
            id={`museum-panel-${activeIndex}`}
            aria-label={activeMuseum.name}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMuseum.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100"
              >
                <div className="h-64 overflow-hidden relative">
                  <Image
                    src={activeMuseum.image}
                    alt={activeMuseum.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-stone-800 shadow-sm">
                    {activeMuseum.location}
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    {activeMuseum.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                          index === 0
                            ? 'bg-cyan-100 text-cyan-700'
                            : 'bg-stone-100 text-stone-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                    {activeMuseum.name}
                  </h3>
                  <p className="text-lg text-stone-600 leading-relaxed mb-8">
                    {activeMuseum.description}
                  </p>

                  <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 mb-8">
                    <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                      <activeMuseum.benefit.icon className="w-5 h-5 text-cyan-600" aria-hidden="true" />
                      {activeMuseum.benefit.title}
                    </h4>
                    <p className="text-sm text-stone-600">{activeMuseum.benefit.text}</p>
                  </div>

                  <a
                    href="https://www.visithalland.com/sv/din-guide-till-hallands-museer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-cyan-700 text-white rounded-full font-bold hover:bg-cyan-600 transition shadow-md"
                  >
                    {t.culture.planVisit} <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
