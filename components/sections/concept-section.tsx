'use client';

import Image from 'next/image';
import { FadeInUp } from '@/components/ui/motion';
import { useI18n } from '@/lib/i18n/context';

export function ConceptSection() {
  const { t } = useI18n();

  return (
    <section id="concept" className="py-24 bg-white" aria-label="Blue Zone concept">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-800 mb-6">
              {t.concept.title}
            </h2>
            <p
              className="text-lg text-stone-600 mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.concept.p1 }}
            />
            <p
              className="text-lg text-stone-600 mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.concept.p2 }}
            />
            <div className="cta-shimmer relative mb-8 rounded-xl bg-cyan-50/60 border border-cyan-200/60 px-6 py-5">
              <p className="text-lg text-cyan-900 leading-relaxed font-medium">
                {t.concept.cta}
              </p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full z-0 opacity-50" aria-hidden="true" />
              <Image
                src="/images/generated/nature-walk.jpg"
                alt="Elderly couple walking through a Halland beech forest in warm afternoon light"
                width={600}
                height={500}
                className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl z-20 max-w-xs border-l-4 border-cyan-600">
                <p className="font-serif text-xl italic text-cyan-800">
                  {t.concept.quote}
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
