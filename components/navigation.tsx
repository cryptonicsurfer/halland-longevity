'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/#concept', label: 'The Nordic Blue Zone' },
  { href: '/science', label: 'The Science' },
  { href: '/#food', label: 'Food Culture' },
  { href: '/culture', label: 'Culture & Mind' },
  { href: '/#checklist', label: 'Daily Protocol' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Longevity Halland"
              width={180}
              height={40}
              className="h-16 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-cyan-700 transition-colors">
                {link.label}
              </Link>
            ))}
            <Link
              href="/#visit"
              className="px-5 py-2.5 bg-cyan-700 text-white rounded-full hover:bg-cyan-600 transition-all shadow-md"
            >
              Visit Halland
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-stone-600 hover:text-cyan-700 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 pb-6 pt-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 text-stone-600 hover:text-cyan-700 hover:bg-cyan-50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#visit"
              onClick={() => setOpen(false)}
              className="mt-2 py-3 px-4 bg-cyan-700 text-white rounded-full font-bold text-center hover:bg-cyan-600 transition-all shadow-md"
            >
              Visit Halland
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
