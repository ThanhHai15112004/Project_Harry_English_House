import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, AlertCircle, Compass, Home } from 'lucide-react';
import { SectionTitle } from '@/components/common';

export const HehOrigin = ({ originData }) => {
  const { t } = useTranslation();

  if (!originData) return null;

  const iconMap = {
    problem: <AlertCircle size={22} className="text-amber-600" />,
    approach: <Compass size={22} className="text-cta" />,
    heh: <Home size={22} className="text-primary" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-academic-soft-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.about.origin.badge')}
          title={t(originData.titleKey || 'pages.about.origin.title')}
          subtitle={t(originData.subtitleKey || 'pages.about.origin.subtitle')}
        />

        {/* 3 Step Evolution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-4">
          {originData.steps?.map((step, index) => (
            <div
              key={step.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-academic-border shadow-card hover:shadow-xl hover:border-academic-cta/50 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-black text-slate-300 font-heading group-hover:text-cta transition-colors">
                  {step.stepNumber}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-academic-soft-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  {iconMap[step.id] || <Compass size={22} className="text-primary" />}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                  {t(step.titleKey)}
                </h3>
                <p className="text-xs sm:text-sm text-academic-body leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>

              {/* Bottom Subtle Step Indicator */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-academic-muted">
                <span>{t('pages.courseDetail.roadmap.stageLabel')} {step.stepNumber}</span>
                {index < 2 && (
                  <ArrowRight size={14} className="text-slate-300 hidden md:block" />
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HehOrigin;
