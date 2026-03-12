'use client';

import { Database, BrainCircuit, Zap, Microscope } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { useI18n } from '@/lib/i18n/context';

export function ScienceSection() {
  const { t } = useI18n();

  const aiApplications = [
    { title: t.science.heartFailure, description: t.science.heartFailureDesc },
    { title: t.science.youthMental, description: t.science.youthMentalDesc },
    { title: t.science.parkinsons, description: t.science.parkinsonsDesc },
    { title: t.science.smartHomes, description: t.science.smartHomesDesc },
    { title: t.science.cardiacDeath, description: t.science.cardiacDeathDesc },
  ];

  const pillars = [
    {
      icon: Database,
      title: t.science.dataLakeTitle,
      description: t.science.dataLakeDesc,
    },
    {
      icon: BrainCircuit,
      title: t.science.caisrTitle,
      description: t.science.caisrDesc,
    },
    {
      icon: Zap,
      title: t.science.leapTitle,
      description: t.science.leapDesc,
    },
  ];

  return (
    <section id="science" className="py-24 bg-gradient-to-b from-cyan-900 via-cyan-950 to-cyan-950 text-white overflow-hidden relative" aria-label="Science and healthcare">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-800/15 transform skew-x-12" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              {t.science.label}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              {t.science.title}
            </h2>
            <p
              className="text-cyan-200 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.science.subtitle }}
            />
          </div>
        </FadeInUp>

        <FadeInUp>
          <div className="border-y border-cyan-800 py-8 mb-20 bg-cyan-900/30 backdrop-blur-sm">
            <p className="text-center text-cyan-300 text-sm uppercase tracking-widest mb-6">
              {t.science.partners}
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-center opacity-80">
              {['Harvard Medical School', "Brigham & Women\u2019s", 'Stanford University', 'UC Berkeley', 'Halmstad University'].map((name) => (
                <span key={name} className="text-xl md:text-2xl font-serif text-white font-semibold">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="bg-cyan-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-800 hover:border-cyan-500/50 transition-colors group h-full">
                <div className="w-14 h-14 bg-cyan-800/50 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <pillar.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p
                  className="text-cyan-300 text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: pillar.description }}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp>
          <div className="bg-cyan-900/50 rounded-3xl p-8 md:p-12 border border-cyan-800">
            <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
              <Microscope className="text-cyan-400" aria-hidden="true" />
              {t.science.aiTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiApplications.map((app) => (
                <div key={app.title} className="flex gap-4">
                  <div className="mt-1" aria-hidden="true">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{app.title}</h4>
                    <p className="text-cyan-300 text-sm">{app.description}</p>
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
