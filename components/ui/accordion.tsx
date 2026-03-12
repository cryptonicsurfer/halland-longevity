'use client';

import { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, subtitle, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = useId();
  const triggerId = `accordion-trigger-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div className="border border-cyan-200 rounded-xl overflow-hidden bg-white/40">
      <button
        id={triggerId}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-cyan-50/50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div>
          <h3 className="text-xl font-serif text-stone-900">{title}</h3>
          {subtitle && <p className="text-stone-500 text-sm mt-1">{subtitle}</p>}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-cyan-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2">{children}</div>
      </div>
    </div>
  );
}
