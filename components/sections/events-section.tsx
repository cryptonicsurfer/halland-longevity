'use client';

import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { useI18n } from '@/lib/i18n/context';

const workshopSchedule = [
  { time: '13.00–13.10', key: 'slot1' },
  { time: '13.10–13.25', key: 'slot2' },
  { time: '13.25–13.40', key: 'slot3' },
  { time: '13.40–14.00', key: 'slot4' },
  { time: '14.00–14.10', key: 'slot5' },
  { time: '14.10–14.30', key: 'slot6' },
  { time: '14.25–14.45', key: 'slot7' },
  { time: '14.45–15.00', key: 'slot8' },
] as const;

export function EventsSection() {
  const { t } = useI18n();

  const schedule = t.events.schedule as Record<string, string>;

  return (
    <section id="events" className="py-24 bg-white" aria-label="Upcoming events">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-12">
            <p className="text-cyan-700 font-medium tracking-wide uppercase text-sm mb-3">
              {t.events.sectionLabel}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
              {t.events.title}
            </h2>
          </div>
        </FadeInUp>

        <FadeInUp>
          <div className="bg-stone-50/60 border border-stone-200 rounded-2xl p-8 md:p-10 opacity-80">
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide bg-stone-200 text-stone-600 rounded-full mb-4">
              Past event
            </span>
            <div className="flex flex-wrap gap-4 text-sm text-stone-600 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-600" aria-hidden="true" />
                {t.events.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-600" aria-hidden="true" />
                13.00–15.00
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-cyan-600" aria-hidden="true" />
                Hannes Sjöblad
              </span>
            </div>

            <h3 className="text-2xl font-serif text-stone-900 mb-4">
              {t.events.workshopTitle}
            </h3>

            <div className="space-y-4 mb-8">
              <p className="text-stone-600 leading-relaxed">
                <span className="font-medium text-stone-800">{t.events.primaryGoalLabel}</span>{' '}
                {t.events.primaryGoal}
              </p>
              <p className="text-stone-600 leading-relaxed">
                <span className="font-medium text-stone-800">{t.events.secondaryGoalLabel}</span>{' '}
                {t.events.secondaryGoal}
              </p>
            </div>

            <h4 className="text-lg font-medium text-stone-900 mb-4">{t.events.programTitle}</h4>

            <StaggerContainer className="space-y-2">
              {workshopSchedule.map((slot) => (
                <StaggerItem key={slot.key}>
                  <div className="flex gap-4 py-2.5 border-b border-cyan-100 last:border-0">
                    <span className="text-cyan-700 font-mono text-sm whitespace-nowrap pt-0.5 w-28 shrink-0">
                      {slot.time}
                    </span>
                    <span className="text-stone-600 text-sm">
                      {schedule[slot.key]}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
