'use client';

import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { useI18n } from '@/lib/i18n/context';

const techWeekSchedule = [
  { time: '08:45–09:15', desc: 'Registration, mingle & coffee' },
  { time: '09:15–09:45', desc: 'Opening & Vision — Hannes Sjöblad on lifespan, healthspan and Halland as a longevity destination' },
  { time: '09:45–10:15', desc: 'My Longevity Journey — Peter Ottsjö, science journalist and author' },
  { time: '10:15–10:45', desc: 'Break with fika' },
  { time: '10:45–11:15', desc: 'Future of Health Optimisation — Tine Hertz, CEO One Thirty Labs' },
  { time: '11:15–12:45', desc: 'Longevity Companies Present — Ensolutions (AI & preventive care), Freeage (Martin Kremmer), Strandhälsan (biological age testing), FunMed (functional medicine), LIFE Medicine Academy, GetGain' },
  { time: '12:45–13:30', desc: 'Lunch at Famille, Falkenberg Strandbad' },
  { time: '13:30–13:45', desc: 'Launch: Longevity Zone Halland — vision and roadmap' },
  { time: '13:45–14:40', desc: 'Roundtable dialogues — tourism, funding, innovation & community planning for preventive health. Powered by Envolve Dialogues' },
  { time: '14:40–15:00', desc: 'Closing insights & next steps — Hannes Sjöblad' },
  { time: '15:00', desc: 'Mingle & afterchat' },
];

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
    <section id="events" className="py-24 bg-white" aria-label="Past events">
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

        {/* Blue Zone Workshop (13 Mar 2026) */}
        <FadeInUp>
          <div className="bg-stone-50/60 border border-stone-200 rounded-2xl p-8 md:p-10 mb-8">
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide bg-stone-200 text-stone-600 rounded-full mb-4">
              Past event
            </span>
            <div className="flex flex-wrap gap-4 text-sm text-stone-600 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-stone-400" aria-hidden="true" />
                {t.events.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-stone-400" aria-hidden="true" />
                13.00–15.00
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-stone-400" aria-hidden="true" />
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
                  <div className="flex gap-4 py-2.5 border-b border-stone-100 last:border-0">
                    <span className="text-stone-500 font-mono text-sm whitespace-nowrap pt-0.5 w-28 shrink-0">
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

        {/* Halland Tech Week — Longevity (5 Nov 2025) */}
        <FadeInUp>
          <div className="bg-stone-50/60 border border-stone-200 rounded-2xl p-8 md:p-10">
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide bg-stone-200 text-stone-600 rounded-full mb-4">
              Past event
            </span>

            <div className="flex flex-wrap gap-4 text-sm text-stone-600 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-stone-400" aria-hidden="true" />
                5 November 2025
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-stone-400" aria-hidden="true" />
                08:30–15:00
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-stone-400" aria-hidden="true" />
                Falkenberg Strandbad
              </span>
            </div>

            <h3 className="text-2xl font-serif text-stone-900 mb-3">
              Halland Tech Week — Longevity
            </h3>

            <p className="text-stone-600 leading-relaxed mb-6">
              Can we transform Halland into a globally recognised Blue Zone? During Halland Tech Week the initiative <strong>Longevity Zone Halland</strong> was launched — a venture to make Halland a leading destination for innovation, entrepreneurship and health tourism within longevity and preventive health. The day brought together entrepreneurs, investors, innovators and decision-makers.
            </p>

            <h4 className="text-lg font-medium text-stone-900 mb-4">Program</h4>

            <StaggerContainer className="space-y-2 mb-8">
              {techWeekSchedule.map((slot, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-4 py-2.5 border-b border-stone-100 last:border-0">
                    <span className="text-stone-500 font-mono text-sm whitespace-nowrap pt-0.5 w-28 shrink-0">
                      {slot.time}
                    </span>
                    <span className="text-stone-600 text-sm">
                      {slot.desc}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <h4 className="text-lg font-medium text-stone-900 mb-4">Speakers</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: 'Hannes Sjöblad', role: 'Innovator, futurist & co-founder of Swedish Longevity Cluster' },
                { name: 'Tine Hertz', role: 'CEO One Thirty Labs, creator of Copenhagen Health Week' },
                { name: 'Peter Ottsjö', role: 'Science journalist & author of "Evigt ung"' },
                { name: 'Martin Kremmer', role: 'CEO Freeage — biohacking & longevity healthtech' },
                { name: 'Emma Carlström', role: 'Head of Business, Falkenberg Municipality' },
                { name: 'Lotta Peltoarvo', role: 'CEO Strandhälsan — biological age testing & AI training' },
              ].map((speaker) => (
                <div key={speaker.name} className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-stone-800">{speaker.name}</p>
                    <p className="text-xs text-stone-500">{speaker.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
