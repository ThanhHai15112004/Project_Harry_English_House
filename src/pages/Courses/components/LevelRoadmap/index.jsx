import React from 'react';
import { useTranslation } from 'react-i18next';
import { Compass, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/common';

export const LevelRoadmap = ({
  milestones = [],
  selectedMilestone = 0,
  onSelectMilestone,
  onMatchCourseClick,
}) => {
  const { t } = useTranslation();
  const activeMilestone = milestones[selectedMilestone] || milestones[0];

  if (!milestones.length) return null;

  return (
    <section className="py-14 sm:py-20 bg-academic-soft-white border-y border-slate-200/80">
      <div className="app-container">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-cta text-xs font-bold uppercase tracking-wider border border-blue-100 shadow-2xs">
            <Compass size={13} className="text-amber-500" />
            <span>{t('pages.courses.roadmapTitle')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-academic-heading font-heading">
            {t('pages.courses.roadmapMainTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-academic-body">
            {t('pages.courses.roadmapSubtitle')}
          </p>
        </div>

        {/* Desktop & Mobile Horizontal Track Nodes */}
        <div className="overflow-x-auto no-scrollbar pb-4 mb-6">
          <div className="min-w-[600px] sm:min-w-full relative px-4">
            {/* Connector Track Line */}
            <div className="absolute top-5 left-10 right-10 h-1 bg-slate-200 rounded-full -z-0" />

            <div
              className="grid gap-3 relative z-10"
              style={{ gridTemplateColumns: `repeat(${milestones.length}, minmax(0, 1fr))` }}
            >
              {milestones.map((m, idx) => {
                const isSelected = selectedMilestone === idx;
                const tag = m.tagKey ? t(m.tagKey) : m.tag;
                return (
                  <button
                    type="button"
                    key={m.num}
                    onClick={() => onSelectMilestone(idx)}
                    className="flex flex-col items-center group cursor-pointer text-center focus:outline-hidden"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-black text-xs transition-all duration-300 border-2 shadow-xs mb-3 ${
                        isSelected
                          ? 'bg-cta text-white border-cta ring-4 ring-blue-400/20 scale-110'
                          : 'bg-white text-slate-600 border-slate-300 group-hover:border-cta group-hover:text-cta'
                      }`}
                    >
                      {m.num}
                    </div>

                    {/* Band / Level Label */}
                    <span
                      className={`text-xs font-extrabold font-heading block transition-colors ${
                        isSelected ? 'text-cta' : 'text-academic-heading'
                      }`}
                    >
                      {m.band}
                    </span>
                    <span className="text-[10px] text-academic-muted font-medium block truncate max-w-full">
                      {tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Active Milestone Information Card */}
        {activeMilestone && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-academic-light-blue text-cta text-xs font-bold">
                    {activeMilestone.band}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                    {activeMilestone.titleKey ? t(activeMilestone.titleKey) : activeMilestone.title}
                  </h3>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-semibold text-academic-muted bg-academic-surface px-3 py-1 rounded-full self-start sm:self-auto border border-slate-100">
                <Clock size={12} className="text-cta" />
                <span>{activeMilestone.duration}</span>
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-academic-body leading-relaxed">
              <div>
                <strong className="text-academic-heading font-heading block mb-1">
                  {t('pages.courses.focusLabel')}
                </strong>
                <p>{activeMilestone.focusKey ? t(activeMilestone.focusKey) : activeMilestone.focus}</p>
              </div>

              <div className="pt-2 border-t border-dashed border-slate-100 flex items-center gap-2 text-emerald-700 font-semibold">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                <span>
                  {activeMilestone.guaranteeKey
                    ? t(activeMilestone.guaranteeKey)
                    : activeMilestone.guarantee}
                </span>
              </div>
            </div>

            {/* Match with Course CTA */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <Button
                size="sm"
                variant="primary"
                icon={<ArrowRight size={14} />}
                onClick={onMatchCourseClick}
              >
                {t('pages.courses.matchingCourseBtn')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LevelRoadmap;
