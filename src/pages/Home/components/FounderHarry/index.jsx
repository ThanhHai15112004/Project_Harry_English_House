import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Quote } from 'lucide-react';
import { SECTION_IDS } from '@/core';
import { Button } from '@/components/common';
import founderPresentationImg from '@/assets/Ministry-of-Higher-Education-2025/thuyet-trinh-1.jpg';
import avatarImg from '@/assets/trang-ca-nhan/avatar-me.jpg';

export const FounderHarry = () => {
  const { t } = useTranslation();

  return (
    <section id={SECTION_IDS.FOUNDER} className="py-20 lg:py-28 bg-white border-t border-academic-border">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authoritative Image (6 cols on desktop) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-card border border-academic-border bg-academic-surface">
              <img
                src={founderPresentationImg}
                alt={t('founder.presentationAlt', { name: t('founder.name') })}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-academic-border flex items-center gap-3">
                <img
                  src={avatarImg}
                  alt={t('founder.name')}
                  className="w-11 h-11 rounded-xl object-cover border border-academic-border"
                />
                <div>
                  <strong className="block text-xs sm:text-sm font-bold text-academic-heading">
                    {t('founder.name')}
                  </strong>
                  <span className="text-[11px] text-primary font-bold">
                    {t('founder.badgeLabel')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story & Philosophy (6 cols on desktop) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-cta mb-2">
                {t('founder.badge')}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-academic-heading font-heading leading-tight">
                {t('founder.name')}
              </h2>
              <p className="text-sm font-bold text-primary mt-1">
                {t('founder.role')}
              </p>
            </div>

            <p className="text-sm sm:text-base text-academic-body leading-relaxed">
              {t('founder.bio1')}
            </p>

            <p className="text-sm sm:text-base text-academic-body leading-relaxed">
              {t('founder.bio2')}
            </p>

            {/* Dark Navy Statement Panel */}
            <div className="bg-academic-heading text-white rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-lg border border-slate-800">
              <Quote className="absolute top-4 right-4 text-white/10 w-20 h-20 -rotate-12 pointer-events-none" />
              <div className="space-y-2 relative z-10">
                <p className="text-xs sm:text-sm italic text-slate-200 leading-relaxed font-light">
                  "{t('founder.quote')}"
                </p>
                <span className="block text-xs font-bold text-sky-400">
                  {t('founder.authorLabel')}
                </span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <a href={`#${SECTION_IDS.ACADEMIC}`}>
                <Button size="md" variant="outline" icon={<ArrowRight size={16} />}>
                  {t('founder.viewStory')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderHarry;
