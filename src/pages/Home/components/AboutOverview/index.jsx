import React from 'react';
import { useTranslation } from 'react-i18next';
import { SECTION_IDS } from '@/core';

export const AboutOverview = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      num: '01',
      title: t('about.pillar1Title'),
      desc: t('about.pillar1Desc'),
    },
    {
      num: '02',
      title: t('about.pillar2Title'),
      desc: t('about.pillar2Desc'),
    },
    {
      num: '03',
      title: t('about.pillar3Title'),
      desc: t('about.pillar3Desc'),
    },
  ];

  return (
    <section id={SECTION_IDS.ABOUT} className="py-20 lg:py-28 bg-academic-soft-white border-y border-academic-border">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Statement & Vision (55% / 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-cta">
              {t('about.eyebrow')}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-academic-heading font-heading leading-snug">
              {t('about.statement')}
            </h2>

            <p className="text-sm sm:text-base text-academic-body leading-relaxed max-w-xl">
              {t('about.desc')}
            </p>
          </div>

          {/* Right: 3 Core Pillars (45% / 5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="flex items-start gap-5 group">
                <span className="font-heading font-black text-2xl sm:text-3xl text-cta group-hover:scale-110 transition-transform flex-shrink-0">
                  {pillar.num}
                </span>
                <div className="space-y-1.5 pt-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-academic-body leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
