'use client';

import { useState } from 'react';
import { BrainCircuit, Anchor, Lightbulb, Leaf, Palette, Radio, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const museums = [
  {
    id: 'museum-1',
    number: 1,
    name: 'Hallands Konstmuseum',
    location: 'Halmstad',
    tags: ['Social Connection', 'Art'],
    description:
      'Located beautifully by the Nissan river. The museum buzzes with life through exhibitions and events. Enjoy "Fika" in the garden or the café—a perfect spot for the social interactions that studies show extend lifespan.',
    benefit: {
      icon: BrainCircuit,
      title: 'Longevity Benefit',
      text: 'Engaging with art reduces cortisol levels (stress) and communal spaces combat loneliness, a key factor in the Blue Zone lifestyle.',
    },
    image: '/images/museum-konstmuseum.jpg',
  },
  {
    id: 'museum-2',
    number: 2,
    name: 'Hallands Kulturhistoriska',
    subtitle: 'Varbergs Fästning',
    location: 'Varberg',
    tags: ['Ancestry', 'History'],
    description:
      'Home to the 14th-century "Bockstensmannen." Connecting with history creates a sense of belonging and continuity. The fortress walls breathe history, offering a perspective on time that grounds the soul.',
    benefit: {
      icon: Anchor,
      title: 'Longevity Benefit',
      text: 'A sense of heritage and belonging ("roots") is often cited in centenarian studies as a source of resilience and mental stability.',
    },
    image: '/images/museum-varberg.jpg',
  },
  {
    id: 'museum-3',
    number: 3,
    name: 'Rian Designmuseum',
    location: 'Falkenberg',
    tags: ['Creativity', 'Design'],
    description:
      "Innovation meets folk design. Engaging with complex design and creative works stimulates cognitive function. Don't miss the coffee bar inside—a modern meeting place for creative minds.",
    benefit: {
      icon: Lightbulb,
      title: 'Longevity Benefit',
      text: 'Continuous learning and exposure to new ideas (neuroplasticity) help maintain cognitive sharpness well into old age.',
    },
    image: '/images/museum-rian.jpg',
  },
  {
    id: 'museum-4',
    number: 4,
    name: 'Äskhults By',
    location: 'Kungsbacka',
    tags: ['Nature', 'Slow Living'],
    description:
      "A place where time has stood still for 200 years. Timber cottages, ancient stone fences, and honest food. A visceral reminder of the agrarian lifestyle that originally laid the foundation for Halland's longevity.",
    benefit: {
      icon: Leaf,
      title: 'Longevity Benefit',
      text: '"Downshifting" and spending time in nature reduces blood pressure. The clean air and walking paths here are pure medicine.',
    },
    image: '/images/museum-askhult.jpg',
  },
  {
    id: 'museum-5',
    number: 5,
    name: 'Teckningsmuseet',
    location: 'Laholm',
    tags: ['Play', 'Expression'],
    description:
      "The Nordic region's only museum for drawing art. Located in an old fire station, it offers free admission and an open atelier where families create together—bridging generations through art.",
    benefit: {
      icon: Palette,
      title: 'Longevity Benefit',
      text: 'Intergenerational connection is vital. Creating art also induces a "flow state" similar to meditation.',
    },
    image: '/images/museum-teckningsmuseet.jpg',
  },
  {
    id: 'museum-6',
    number: 6,
    name: 'Grimeton World Heritage',
    location: 'Varberg',
    tags: ['Global', 'Communication'],
    description:
      'A living UNESCO World Heritage site from 1924. It represents the human drive to connect across distances. A symbol of communication, which is the heartbeat of any healthy community.',
    benefit: {
      icon: Radio,
      title: 'Longevity Benefit',
      text: 'Feeling connected to the wider world prevents isolation. Grimeton is a monument to the importance of staying in touch.',
    },
    image: '/images/museum-grimeton.jpg',
  },
];

export function CultureSection() {
  const [activeMuseum, setActiveMuseum] = useState(museums[0]);

  return (
    <section id="culture" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Culture as Medicine
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            A curated journey through Halland&apos;s mental gymnasiums.
            <br />
            <span className="italic font-serif text-amber-800">
              Select a destination to explore.
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Column: Navigation */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start">
            <h3 className="font-serif text-2xl mb-6 text-stone-800 ml-4">The Cultural Route</h3>

            {/* Vertical Tab List */}
            <div className="relative space-y-2 border-l-2 border-stone-200 ml-4 pl-4">
              {museums.map((museum) => (
                <button
                  key={museum.id}
                  onClick={() => setActiveMuseum(museum)}
                  className={`w-full text-left group flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-stone-100 -ml-[19px] relative ${
                    activeMuseum.id === museum.id
                      ? 'bg-amber-50 border-l-4 border-amber-700'
                      : ''
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full font-bold flex items-center justify-center text-sm transition-colors ${
                      activeMuseum.id === museum.id
                        ? 'bg-amber-700 text-white'
                        : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {museum.number}
                  </span>
                  <span
                    className={`font-medium transition-colors ${
                      activeMuseum.id === museum.id
                        ? 'text-amber-900 font-bold'
                        : 'text-stone-600'
                    }`}
                  >
                    {museum.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Content Card */}
          <div className="w-full lg:w-2/3 min-h-[600px]">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={activeMuseum.image}
                  alt={activeMuseum.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-stone-800 shadow-sm">
                  {activeMuseum.location}
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  {activeMuseum.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                        index === 0
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                  {activeMuseum.name}
                </h3>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                  {activeMuseum.description}
                </p>

                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 mb-8">
                  <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                    <activeMuseum.benefit.icon className="w-5 h-5 text-amber-700" />
                    {activeMuseum.benefit.title}
                  </h4>
                  <p className="text-sm text-stone-600">{activeMuseum.benefit.text}</p>
                </div>

                <a
                  href="https://www.visithalland.com/sv/din-guide-till-hallands-museer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-amber-800 text-white rounded-full font-bold hover:bg-amber-700 transition shadow-md"
                >
                  Plan Visit <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
