'use client';

import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

const checklistItems = [
  {
    id: 'task-1',
    title: 'Morning "Kallbad"',
    description: 'A cold dip in the Kattegat sea (or a cold shower) to boost immunity.',
  },
  {
    id: 'task-2',
    title: 'Locavore Lunch',
    description: 'Eat something grown in the "Halland Pantry" (e.g., kale, root vegetables).',
  },
  {
    id: 'task-3',
    title: 'Culture Dose',
    description: '30 minutes of deep focus: Visit a museum or read a book.',
  },
  {
    id: 'task-4',
    title: 'Social "Fika"',
    description: 'Connect with a friend over coffee. Social bonds are key to longevity.',
  },
];

export function ChecklistSection() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [showCompletion, setShowCompletion] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved: Record<string, boolean> = {};
    checklistItems.forEach((item) => {
      const value = localStorage.getItem(item.id);
      if (value === 'true') {
        saved[item.id] = true;
      }
    });
    setCheckedItems(saved);
  }, []);

  // Check for completion
  useEffect(() => {
    const allChecked = checklistItems.every((item) => checkedItems[item.id]);
    setShowCompletion(allChecked);
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    const newChecked = !checkedItems[id];
    setCheckedItems((prev) => ({ ...prev, [id]: newChecked }));
    localStorage.setItem(id, String(newChecked));
  };

  return (
    <section id="checklist" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/protocol1.jpg"
          alt="Halland Protocol background"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Subtle dark overlay for better contrast */}
        <div className="absolute inset-0 bg-stone-900/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Glassmorphism card with grain */}
        <div className="glass-card grain rounded-2xl p-8 md:p-12">
          {/* Content wrapper to sit above the grain */}
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                The Halland Protocol
              </h2>
              <p className="text-white/80 drop-shadow">
                A daily routine inspired by the region&apos;s healthiest centenarians.
              </p>
            </div>

            <div className="space-y-4">
              {checklistItems.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition cursor-pointer group backdrop-blur-sm"
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={checkedItems[item.id] || false}
                    onChange={() => toggleItem(item.id)}
                  />
                  <div
                    className={`w-6 h-6 border-2 rounded-md flex items-center justify-center mr-4 transition-colors ${
                      checkedItems[item.id]
                        ? 'bg-cyan-500 border-cyan-500'
                        : 'border-white/50 group-hover:border-white/80'
                    }`}
                  >
                    {checkedItems[item.id] && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white group-hover:text-cyan-200 drop-shadow">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </div>
                </label>
              ))}
            </div>

            {showCompletion && (
              <div className="mt-8 text-center animate-bounce">
                <span className="inline-block px-4 py-2 bg-cyan-500/90 text-white rounded-full font-bold text-sm shadow-lg">
                  Daily Protocol Complete!
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
