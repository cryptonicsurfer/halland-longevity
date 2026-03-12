'use client';

import { motion } from 'framer-motion';
import { Activity, CheckSquare, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section aria-label="Hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-gradient absolute inset-0" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-sm font-medium tracking-wider mb-6 uppercase"
        >
          {t.hero.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8"
        >
          {t.hero.title1}
          <br />
          <span className="italic font-light">{t.hero.title2}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="text-xl md:text-2xl text-stone-100 mb-10 font-light max-w-2xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/science"
            className="px-8 py-4 bg-white text-cyan-800 rounded-full font-semibold hover:bg-stone-100 transition shadow-lg flex items-center justify-center gap-2"
          >
            <Activity className="w-4 h-4" /> {t.hero.cta1}
          </Link>
          <Link
            href="#checklist"
            className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            <CheckSquare className="w-4 h-4" /> {t.hero.cta2}
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown className="w-8 h-8" aria-hidden="true" />
      </div>
    </section>
  );
}
