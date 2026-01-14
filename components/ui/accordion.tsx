'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, subtitle, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-amber-200 rounded-xl overflow-hidden bg-white/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-amber-50/50 transition-colors"
      >
        <div>
          <h3 className="text-xl font-serif text-stone-900">{title}</h3>
          {subtitle && <p className="text-stone-500 text-sm mt-1">{subtitle}</p>}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-amber-700 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2">{children}</div>
      </div>
    </div>
  );
}
