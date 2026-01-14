'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-stone-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center text-white font-serif font-bold">
              H
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-amber-900">
              Halland Longevity
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
            <Link href="#concept" className="hover:text-amber-800 transition-colors">
              The Nordic Blue Zone
            </Link>
            <Link href="#science" className="hover:text-amber-800 transition-colors">
              The Science
            </Link>
            <Link href="#food" className="hover:text-amber-800 transition-colors">
              Food Culture
            </Link>
            <Link href="#culture" className="hover:text-amber-800 transition-colors">
              Culture & Mind
            </Link>
            <Link href="#checklist" className="hover:text-amber-800 transition-colors">
              Daily Protocol
            </Link>
            <Link
              href="#visit"
              className="px-5 py-2.5 bg-amber-800 text-white rounded-full hover:bg-amber-700 transition-all shadow-md"
            >
              Visit Halland
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
