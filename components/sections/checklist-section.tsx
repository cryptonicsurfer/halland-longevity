'use client';

import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { useI18n } from '@/lib/i18n/context';

export function ChecklistSection() {
  const { t } = useI18n();
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [showCompletion, setShowCompletion] = useState(false);

  const checklistItems = [
    { id: 'task-1', title: t.checklist.task1, description: t.checklist.task1desc },
    { id: 'task-2', title: t.checklist.task2, description: t.checklist.task2desc },
    { id: 'task-3', title: t.checklist.task3, description: t.checklist.task3desc },
    { id: 'task-4', title: t.checklist.task4, description: t.checklist.task4desc },
  ];

  useEffect(() => {
    const saved: Record<string, boolean> = {};
    checklistItems.forEach((item) => {
      const value = localStorage.getItem(item.id);
      if (value === 'true') {
        saved[item.id] = true;
      }
    });
    setCheckedItems(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const allChecked = checklistItems.every((item) => checkedItems[item.id]);
    setShowCompletion(allChecked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    const newChecked = !checkedItems[id];
    setCheckedItems((prev) => ({ ...prev, [id]: newChecked }));
    localStorage.setItem(id, String(newChecked));
  };

  return (
    <section id="checklist" className="relative py-24 overflow-hidden" aria-label="Daily protocol checklist">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/kallbad-morning.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="glass-card grain rounded-2xl p-8 md:p-12">
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                {t.checklist.title}
              </h2>
              <p className="text-white/80 drop-shadow">
                {t.checklist.subtitle}
              </p>
            </div>

            <StaggerContainer className="space-y-4">
              {checklistItems.map((item) => (
                <StaggerItem key={item.id}>
                  <label
                    className="flex items-center p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition cursor-pointer group backdrop-blur-sm"
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={checkedItems[item.id] || false}
                      onChange={() => toggleItem(item.id)}
                      aria-checked={checkedItems[item.id] || false}
                    />
                    <div
                      className={`w-6 h-6 border-2 rounded-md flex items-center justify-center mr-4 transition-colors ${
                        checkedItems[item.id]
                          ? 'bg-cyan-500 border-cyan-500'
                          : 'border-white/50 group-hover:border-white/80'
                      }`}
                      aria-hidden="true"
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
                </StaggerItem>
              ))}
            </StaggerContainer>

            {showCompletion && (
              <div className="mt-8 text-center animate-bounce">
                <span className="inline-block px-4 py-2 bg-cyan-500/90 text-white rounded-full font-bold text-sm shadow-lg">
                  {t.checklist.complete}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
