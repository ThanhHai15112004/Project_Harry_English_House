import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/common';

export const AreasOfExpertise = ({ expertiseList = [] }) => {
  const { t } = useTranslation();

  if (!expertiseList || expertiseList.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.about.expertise.badge')}
          title={t('pages.about.expertise.title')}
          subtitle={t('pages.about.expertise.subtitle')}
        />

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4">
          {expertiseList.map((item) => (
            <div
              key={item.id}
              className="bg-academic-soft-white/60 rounded-3xl p-6 sm:p-8 border border-academic-border hover:border-academic-cta/50 hover:bg-white hover:shadow-card transition-all duration-300 space-y-4 group"
            >
              {/* Top Tag with Number */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-cta font-heading bg-academic-light-blue px-3 py-1 rounded-lg">
                  Lĩnh vực {item.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-academic-heading font-heading leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-academic-body leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AreasOfExpertise;
