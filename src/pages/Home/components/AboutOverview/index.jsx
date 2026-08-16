import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Compass, Users, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SECTION_IDS } from '@/core';

export const AboutOverview = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      num: '01',
      icon: Compass,
      title: t('about.pillar1Title'),
      desc: t('about.pillar1Desc'),
      highlightColor: 'from-blue-600 to-indigo-600',
    },
    {
      num: '02',
      icon: Users,
      title: t('about.pillar2Title'),
      desc: t('about.pillar2Desc'),
      highlightColor: 'from-sky-500 to-blue-600',
    },
    {
      num: '03',
      icon: CheckCircle2,
      title: t('about.pillar3Title'),
      desc: t('about.pillar3Desc'),
      highlightColor: 'from-amber-500 to-orange-500',
    },
  ];

  const trustTags = [
    t('about.tag1'),
    t('about.tag2'),
    t('about.tag3'),
  ];

  return (
    <section id={SECTION_IDS.ABOUT} className="relative py-20 lg:py-28 bg-academic-soft-white border-y border-academic-border overflow-hidden">
      {/* Subtle Academic Background Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-academic-light-blue/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Statement & Vision (7 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-academic-light-blue text-academic-primary border border-blue-200/80 text-xs font-extrabold uppercase tracking-wider shadow-xs">
              <Sparkles size={14} className="text-academic-cta" />
              <span>{t('about.eyebrow')}</span>
            </div>

            {/* Main Statement */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-academic-heading font-heading leading-tight tracking-tight">
              {t('about.statement')}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-academic-body leading-relaxed">
              {t('about.desc')}
            </p>

            {/* Trust Highlights Pill Bar */}
            <div className="pt-3 border-t border-academic-border/80 flex flex-wrap gap-2.5">
              {trustTags.map((tag) => (
                <div
                  key={tag}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-academic-border text-xs sm:text-sm font-bold text-academic-heading shadow-xs hover:border-academic-cta/40 hover:bg-academic-light-blue/30 transition-colors"
                >
                  <ShieldCheck size={16} className="text-academic-cta flex-shrink-0" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3 Core Pillars Cards (6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-4">
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-academic-border hover:border-academic-cta/50 hover:shadow-card-hover transition-all duration-300 flex items-start gap-4 sm:gap-5"
                >
                  {/* Left Icon Pill */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-academic-light-blue text-academic-primary flex items-center justify-center flex-shrink-0 group-hover:bg-academic-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <IconComponent size={24} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Content */}
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading group-hover:text-academic-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <span className="font-heading font-black text-sm text-academic-muted/50 group-hover:text-academic-cta transition-colors">
                        {pillar.num}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-academic-body leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Subtle Accent Glow Indicator */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-academic-cta/5 to-transparent rounded-tr-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
