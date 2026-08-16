import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/common';

export const EducationalPhilosophy = ({ principles = [] }) => {
  const { t } = useTranslation();

  if (!principles || principles.length === 0) return null;

  return (
    <section id="philosophy" className="py-16 sm:py-24 lg:py-28 bg-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.about.philosophy.badge')}
          title={t('pages.about.philosophy.title')}
          subtitle={t('pages.about.philosophy.subtitle')}
        />

        {/* 3 Principles Horizontal Grid with Fine Editorial Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-6">
          {principles.map((item) => (
            <div
              key={item.id}
              className="border-t-2 border-academic-border pt-6 sm:pt-8 space-y-4 hover:border-cta transition-colors duration-300 group"
            >
              {/* Number */}
              <div className="text-2xl sm:text-3xl font-black text-cta font-heading tracking-tight">
                {item.number}
              </div>

              {/* Principle Title */}
              <h3 className="text-lg sm:text-xl font-bold text-academic-heading font-heading tracking-tight leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-academic-body leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationalPhilosophy;
