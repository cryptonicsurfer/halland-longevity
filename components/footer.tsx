'use client';

import { useI18n } from '@/lib/i18n/context';

export function Footer() {
  const { t } = useI18n();
  const facebookUrl = 'https://www.facebook.com/aldrandefonden/';

  return (
    <footer id="visit" className="bg-gradient-to-b from-cyan-800 via-cyan-900 to-cyan-950 text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-serif font-bold mb-6">{t.footer.title}</h2>
        <p className="text-cyan-200 text-lg mb-10">
          {t.footer.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="https://www.visithalland.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-cyan-900 rounded-full font-bold hover:bg-stone-100 transition shadow-lg"
          >
            {t.footer.planVisit}
          </a>
          <a
            href="https://www.regionhalland.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-cyan-400 text-cyan-100 rounded-full font-bold hover:bg-cyan-800 transition"
          >
            {t.footer.learnRegion}
          </a>
        </div>

        <div className="border-t border-cyan-800 pt-8 mb-8">
          <p className="text-cyan-300 mb-4">{t.footer.community}</p>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-100 rounded-full font-bold hover:bg-cyan-800 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            {t.footer.facebook}
          </a>
        </div>
        <div className="mt-16 pt-8 border-t border-cyan-800 text-cyan-400 text-sm">
          <p>{t.footer.copyright}</p>
          <p className="mt-2 text-xs">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
