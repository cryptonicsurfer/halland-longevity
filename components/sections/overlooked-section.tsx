'use client';

import { FadeInUp } from '@/components/ui/motion';
import { useI18n } from '@/lib/i18n/context';

export function OverlookedSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-stone-100" aria-label="Introduction">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <FadeInUp>
          <p className="text-stone-400 text-sm uppercase tracking-widest mb-6">
            {t.overlooked.label}
          </p>
          <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-light">
            {t.overlooked.text}
          </p>
          <p className="text-lg text-stone-500 mt-6 italic">
            {t.overlooked.quote}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
