import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, GitBranch, Users, CheckCircle2, TrendingUp } from 'lucide-react';
import { useMethodologyData, SECTION_IDS } from '@/core';
import { SectionTitle } from '@/components/common';

export const LearningMethod = () => {
  const { t } = useTranslation();
  const methodology = useMethodologyData();

  const iconMap = {
    Target: <Target size={20} />,
    GitBranch: <GitBranch size={20} />,
    Users: <Users size={20} />,
    CheckCircle2: <CheckCircle2 size={20} />,
    TrendingUp: <TrendingUp size={20} />,
  };

  if (!methodology) return null;

  return (
    <section id={SECTION_IDS.METHOD} className="py-20 lg:py-28 bg-white border-t border-academic-border">
      <div className="app-container">
        <SectionTitle
          badge={t('method.badge')}
          title={methodology.title}
          subtitle={methodology.subtitle}
        />

        {/* Process Steps (Desktop horizontal with connector line, Mobile vertical) */}
        <div className="relative mt-16">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-0.5 bg-academic-border -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5 relative z-10">
            {methodology.steps.map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 group"
              >
                {/* Step Circle Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-academic-border text-cta flex items-center justify-center shadow-sm group-hover:border-cta group-hover:bg-academic-light-blue group-hover:scale-105 transition-all duration-200">
                  {iconMap[item.icon] || <CheckCircle2 size={20} />}
                </div>

                {/* Step Details */}
                <div className="space-y-1.5">
                  <span className="font-heading font-black text-xs text-cta tracking-wider">
                    {t('method.stepPrefix')} {item.step}
                  </span>
                  <h3 className="text-base font-bold text-academic-heading font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-academic-body leading-relaxed max-w-xs mx-auto lg:mx-0">
                    {item.description}
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

export default LearningMethod;
