'use client';

import { Database, BrainCircuit, Zap, Microscope } from 'lucide-react';

const aiApplications = [
  {
    title: 'Heart Failure Prediction',
    description:
      'Developing decision support to predict readmission risks for heart failure patients, ensuring timely interventions.',
  },
  {
    title: 'Youth Mental Health',
    description:
      'Using AI to identify young adults at risk of mental illness early, allowing for support before crises occur.',
  },
  {
    title: "Parkinson's Gait Analysis",
    description:
      "Utilizing wearable sensors and gait analysis to detect neuro-physiological disorders like Parkinson's at an earlier stage.",
  },
  {
    title: 'Smart Homes (HINT)',
    description:
      '"Halmstad Intelligent Home" – a realistic research environment for smart sensors that support safe aging in the home.',
  },
  {
    title: 'Sudden Cardiac Death',
    description:
      'Deep neural networks analyzing ECGs to detect subtle patterns indicating risk of sudden cardiac death.',
  },
];

export function ScienceSection() {
  return (
    <section id="science" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 transform skew-x-12" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            The Halland Model
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            From Instinct to Insight
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed">
            Region Halland is not just a healthcare provider; it is a national model for{' '}
            <strong>Information Driven Care (IDV)</strong>. By moving from reactive treatments to
            predictive AI, we are redefining what it means to age healthily.
          </p>
        </div>

        {/* Partners Ticker */}
        <div className="border-y border-slate-700 py-8 mb-20 bg-slate-800/30 backdrop-blur-sm">
          <p className="text-center text-slate-400 text-sm uppercase tracking-widest mb-6">
            In collaboration with world-leading institutions
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-center opacity-80">
            <span className="text-xl md:text-2xl font-serif text-white font-semibold">
              Harvard Medical School
            </span>
            <span className="text-xl md:text-2xl font-serif text-white font-semibold">
              Brigham & Women&apos;s
            </span>
            <span className="text-xl md:text-2xl font-serif text-white font-semibold">
              Stanford University
            </span>
            <span className="text-xl md:text-2xl font-serif text-white font-semibold">
              UC Berkeley
            </span>
            <span className="text-xl md:text-2xl font-serif text-white font-semibold">
              Halmstad University
            </span>
          </div>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1: The Data */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
            <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Database className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">The Unique Data Lake</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Region Halland has built a unique infrastructure that integrates data from the entire
              care chain (primary, emergency, inpatient). This allows for &quot;real-life studies&quot; on
              quality and cost that few other regions in the world can match.
            </p>
          </div>

          {/* Pillar 2: The Intelligence */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
            <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <BrainCircuit className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">CAISR Health</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Halmstad University&apos;s center for AI research (CAISR) has been pioneering machine
              learning for 30 years. Today, <strong>CAISR Health</strong> applies this expertise to
              predict patient outcomes and optimize care flows.
            </p>
          </div>

          {/* Pillar 3: The Innovation Hub */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
            <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Leap for Life</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              The region&apos;s innovation center where academia, healthcare, and business meet. From
              strategic partnerships to the &quot;Health Data Factory,&quot; Leap for Life drives the
              practical implementation of longevity science.
            </p>
          </div>
        </div>

        {/* AI In Practice Section */}
        <div className="bg-blue-950/50 rounded-3xl p-8 md:p-12 border border-blue-900">
          <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
            <Microscope className="text-blue-400" />
            AI in Practice: Saving Lives Today
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiApplications.map((app, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{app.title}</h4>
                  <p className="text-slate-400 text-sm">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
