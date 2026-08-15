import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, BookCheck } from 'lucide-react';
import { useRoadmapData, SECTION_IDS } from '@/core';
import { SectionTitle } from '@/components/common';

export const RoadmapSection = () => {
  const { t } = useTranslation();
  const roadmap = useRoadmapData();

  if (!roadmap) return null;

  return (
    <section id={SECTION_IDS.ROADMAP} className="py-16 sm:py-24 bg-white border-y border-slate-100">
      <div className="app-container">
        <SectionTitle
          badge={t('roadmap.badge')}
          title={roadmap.title}
          subtitle={roadmap.description}
        />

        <div className="max-w-4xl mx-auto space-y-8 relative">
          {roadmap.phases.map((phase, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              {/* Step Circle */}
              <div className="flex sm:flex-col items-center gap-3 sm:gap-0 flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 to-sky-500 text-white font-heading font-black text-lg flex items-center justify-center shadow-md shadow-blue-700/20">
                  0{idx + 1}
                </div>
                {idx < roadmap.phases.length - 1 && (
                  <div className="hidden sm:block w-0.5 h-full min-h-[60px] bg-slate-200 my-2 self-center" />
                )}
              </div>

              {/* Phase Card */}
              <div className="flex-1 bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-card hover:border-blue-200 transition-all duration-300 space-y-4">
                <div>
                  <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-blue-700 mb-1">
                    {phase.phase}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                    {phase.title}
                  </h3>
                </div>

                {/* Focus box */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-blue-100/60 text-blue-950 text-xs sm:text-sm font-medium">
                  <BookCheck size={18} className="text-blue-700 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>{t('roadmap.curriculumFocus')}</strong> {phase.focus}
                  </span>
                </div>

                {/* Milestones list */}
                <div className="space-y-2.5 pt-2">
                  {phase.milestones.map((item, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
