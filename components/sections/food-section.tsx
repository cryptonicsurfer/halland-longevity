'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { useI18n } from '@/lib/i18n/context';

const michelinRestaurants = [
  {
    name: 'ÄNG',
    location: 'Ästad Vingård',
    description:
      'Opened 2019, starred 2021. Chef Filip Gemzell creates tasting menus from ingredients foraged the same morning from surrounding meadows and forests. Wines from their own vineyard.',
  },
  {
    name: 'Knystaforsen',
    location: 'Rydöbruk, Hylte',
    description:
      "Danish couple Eva & Nicolai Tram transformed an old sawmill into an intimate fine dining experience. 4-hour meals cooked over open fire. Featured in World's 50 Best Discovery 2025.",
  },
];

const countyComparison = [
  { county: 'Halland', restaurants: 2, perCapita: '0.58', highlight: true },
  { county: 'Kronoberg', restaurants: 1, perCapita: '0.49', highlight: false },
  { county: 'Stockholm', restaurants: 12, perCapita: '0.49', highlight: false },
  { county: 'Västra Götaland', restaurants: 5, perCapita: '0.28', highlight: false },
  { county: 'Skåne', restaurants: 2, perCapita: '0.14', highlight: false },
];

const flagshipProducers = [
  {
    name: 'Bertegruppen',
    established: '1569',
    description:
      "Sweden's oldest family business, now in its 14th generation. Owns Berte Qvarn (flour mill), SIA Glass, Berte Gård, and as of 2025, HaFi—IKEA's jam supplier since the 1980s. They supply oats to Oatly and flour to Polarbröd and ICA.",
    location: 'Slöinge',
  },
  {
    name: 'Wapnö',
    established: '1600s',
    description:
      "Sweden's largest dairy farm with 1,400 free-range cows across 3,000 hectares. The milk travels just 30 meters from cow to their own dairy. Also runs charcuterie, brewery, hotel and restaurant on site.",
    location: 'Halmstad',
  },
  {
    name: 'Ästad Vingård',
    established: '2011',
    description:
      '30,000 organic Solaris vines producing sparkling wine using the traditional Champagne method. Home to Michelin-starred Restaurang ÄNG and a nature spa.',
    location: 'Åkulla',
  },
  {
    name: 'Kvibille Mejeri',
    established: '1916',
    description:
      'Famous for Kvibille Ädel blue cheese, which has won world championships in the USA. Founded by Danish cheesemaker Marius Boel, known as "Mr. Danablue." Over 100 years of artisan cheese-making.',
    location: 'Kvibille',
  },
];

const localProducers = [
  { name: 'HaFi', detail: "IKEA's jam supplier since the 1980s, joined Bertegruppen 2025", location: 'Brännarp' },
  { name: 'Skrea Backe Destilleri', detail: 'Gold at World Gin Awards 2023, Country Winner 2025', location: 'Falkenberg' },
  { name: 'Öströö Fårfarm', detail: '350 ewes, 600 lambs yearly, 50,000 visitors per year', location: 'Tvååker' },
  { name: 'Skrea Ost', detail: 'KRAV-certified organic dairy since 2013', location: 'Skrea' },
  { name: 'Ugglarps Grönt', detail: 'Supplies vegetables to Nobel dinners and royal weddings', location: 'Halmstad' },
  { name: 'Skottorps Mejeri', detail: 'Award-winning artisan cheeses at historic Skottorps slott', location: 'Laholm' },
  { name: 'Dönardalens Delikatess', detail: 'Lamb, local honey, and rapeseed oil', location: 'Laholm' },
  { name: 'Thuressons Gårdsbutik', detail: 'Premium meat and charcuterie from own farm', location: 'Falkenberg' },
  { name: 'Hallands Bär', detail: 'Berry farming on rolling fields since the 1950s', location: 'Falkenberg' },
  { name: 'Warberg Tomatera', detail: 'Heirloom tomatoes, vegetables, bakery and café', location: 'Varberg' },
];

export function FoodSection() {
  const { t } = useI18n();

  return (
    <section id="food" className="py-24 bg-cyan-50/50" aria-label="Food culture">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-12">
            <p className="text-cyan-700 font-medium tracking-wide uppercase text-sm mb-3">
              {t.food.sectionLabel}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
              {t.food.title}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
              {t.food.subtitle}
            </p>
          </div>
        </FadeInUp>

        <FadeInUp>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-16">
            <Image
              src="/images/generated/food-halland.jpg"
              alt="Nordic farm-to-table cuisine spread with local Halland seafood and produce"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </FadeInUp>

        <FadeInUp>
          <div className="prose prose-stone max-w-none mb-12">
            <p className="text-lg text-stone-600 leading-relaxed">
              {t.food.intro}
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer className="space-y-4 mb-16">
          <StaggerItem>
            <Accordion
              title={t.food.michelin}
              subtitle={t.food.michelinSub}
            >
              <div className="space-y-6 mb-8">
                {michelinRestaurants.map((restaurant, index) => (
                  <div key={index} className="border-l-2 border-cyan-300 pl-6">
                    <h4 className="text-lg font-serif text-stone-900 mb-1">{restaurant.name}</h4>
                    <p className="text-cyan-600 text-sm mb-2 flex items-center gap-1">
                      <MapPin className="w-3 h-3" aria-hidden="true" /> {restaurant.location}
                    </p>
                    <p className="text-stone-600 leading-relaxed text-sm">{restaurant.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-50 rounded-lg p-5 border border-cyan-100">
                <p className="text-xs text-stone-500 mb-3 uppercase tracking-wide">{t.food.michelinPer100k}</p>
                <div className="space-y-1">
                  {countyComparison.map((row, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-1.5 text-sm ${row.highlight ? 'text-stone-900 font-medium' : 'text-stone-500'
                        }`}
                    >
                      <span>{row.highlight && '→ '}{row.county}</span>
                      <span className={row.highlight ? 'text-cyan-600 font-semibold' : ''}>
                        {row.perCapita}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Accordion>
          </StaggerItem>

          <StaggerItem>
            <Accordion
              title={t.food.generations}
              subtitle={t.food.generationsSub}
            >
              <div className="space-y-8">
                {flagshipProducers.map((producer, index) => (
                  <div key={index}>
                    <div className="flex items-baseline gap-3 mb-2">
                      <h4 className="text-lg font-medium text-stone-900">{producer.name}</h4>
                      <span className="text-cyan-600 text-sm">{t.food.since} {producer.established}</span>
                    </div>
                    <p className="text-stone-600 leading-relaxed text-sm mb-1">{producer.description}</p>
                    <p className="text-stone-400 text-xs">{producer.location}</p>
                  </div>
                ))}
              </div>
            </Accordion>
          </StaggerItem>

          <StaggerItem>
            <Accordion
              title={t.food.farmShops}
              subtitle={t.food.farmShopsSub}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {localProducers.map((producer, index) => (
                  <div key={index} className="py-2 border-b border-stone-200">
                    <p className="font-medium text-stone-900 text-sm">{producer.name}</p>
                    <p className="text-stone-500 text-xs">{producer.detail}</p>
                  </div>
                ))}
              </div>
            </Accordion>
          </StaggerItem>
        </StaggerContainer>

        <FadeInUp>
          <div className="bg-white/60 rounded-xl p-8 border border-cyan-400 mb-16">
            <h3 className="text-lg font-serif text-stone-900 mb-4">{t.food.supplyChainTitle}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t.food.supplyChainP1}
            </p>
            <p className="text-stone-600 leading-relaxed mt-4">
              {t.food.supplyChainP2}
            </p>
          </div>
        </FadeInUp>

        <FadeInUp>
          <div className="text-center max-w-2xl mx-auto border-t border-stone-200 pt-12">
            <p className="text-stone-500 text-sm uppercase tracking-wide mb-4">{t.food.blueZoneConnection}</p>
            <p className="text-stone-600 leading-relaxed font-serif text-lg italic font-bold">
              {t.food.blueZoneP1}
            </p>
            <p className="text-stone-600 leading-relaxed font-serif text-lg mt-4">
              {t.food.blueZoneP2}
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
