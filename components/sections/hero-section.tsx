'use client';

import { Activity, CheckSquare, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Placeholder - replace with actual Halland coastline image */}
        <Image
          src="/images/hero-coastline.jpg"
          alt="Halland Coastline"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-sm font-medium tracking-wider mb-6 fade-in-up uppercase">
          Region Halland, Sweden
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 fade-in-up delay-100">
          Live Longer.
          <br />
          <span className="italic font-light">Live Better.</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-100 mb-10 font-light max-w-2xl mx-auto fade-in-up delay-200">
          Welcome to Sweden&apos;s unofficial &quot;Blue Zone,&quot; where world-class medical data
          meets a culture of art, nature, and community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-up delay-300">
          <Link
            href="#science"
            className="px-8 py-4 bg-white text-amber-900 rounded-full font-semibold hover:bg-stone-100 transition shadow-lg flex items-center justify-center gap-2"
          >
            <Activity className="w-4 h-4" /> The Science
          </Link>
          <Link
            href="#checklist"
            className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            <CheckSquare className="w-4 h-4" /> The Protocol
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </header>
  );
}
