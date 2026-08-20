import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle2,
  ZoomIn,
} from 'lucide-react';
import { SectionTitle } from '@/components/common';
import { formatStudentName } from '@/core';

export const BeforeAfterShowcase = ({ beforeAfterList = [], onOpenScorecard }) => {
  const { t, i18n } = useTranslation();

  if (!beforeAfterList || beforeAfterList.length === 0) return null;

  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-academic-soft-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.results.beforeAfter.badge')}
          title={t('pages.results.beforeAfter.title')}
          subtitle={t('pages.results.beforeAfter.subtitle')}
        />

        {/* Dual Transformation Cards Grid (1 Col on Mobile, 2 Cols on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {beforeAfterList.map((item, index) => {
            const displayName = formatStudentName(item.studentName, i18n.language);
            const gainText = item.gainKey ? t(item.gainKey) : (item.gain || '+3.0 Band');
            const durationText = item.durationKey ? t(item.durationKey) : (item.duration || '4 tháng');
            const courseText = item.courseKey ? t(item.courseKey) : (item.course || 'Lớp IELTS Chuyên Sâu');
            const challengeText = item.challengeKey ? t(item.challengeKey) : item.challenge;
            const solutionText = item.solutionKey ? t(item.solutionKey) : item.solution;
            const examTypeText = item.examTypeKey ? t(item.examTypeKey) : (item.examType || 'IELTS Academic');

            return (
              <div
                key={item.id || index}
                className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4 sm:space-y-5">
                  
                  {/* Card Header: Student Name & Gain Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 sm:pb-4 border-b border-slate-100">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-xl font-black text-academic-heading font-heading group-hover:text-cta transition-colors">
                          {displayName}
                        </h3>
                        <span className="inline-flex items-center text-[10px] sm:text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          {examTypeText}
                        </span>
                      </div>
                      <p className="text-xs text-academic-muted font-medium mt-0.5 line-clamp-1">
                        {courseText}
                      </p>
                    </div>

                    {/* Band Gain Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-academic-light-blue border border-blue-200 shadow-2xs flex-shrink-0">
                      <TrendingUp size={14} className="text-cta" />
                      <span className="text-xs font-black text-primary font-heading uppercase tracking-wide">
                        {gainText}
                      </span>
                    </div>
                  </div>

                  {/* Visual Transformation Splitter (Before ➔ After) */}
                  <div className="grid grid-cols-11 gap-2 sm:gap-3 items-center">
                    
                    {/* 1. BEFORE BOX */}
                    <div className="col-span-5 bg-slate-50 rounded-2xl p-3 sm:p-4 border border-slate-200/90 text-center space-y-1.5">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 font-heading">
                        {t('pages.results.beforeAfter.beforeLabel')}
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-slate-600 font-heading">
                        {item.beforeScore}
                      </div>
                      
                      {/* Skills Grid */}
                      {item.skillsBefore && (
                        <div className="grid grid-cols-2 gap-1 pt-1.5 border-t border-slate-200 text-[10px] sm:text-[11px] text-slate-600">
                          <div className="bg-white/80 py-0.5 rounded border border-slate-200/60">
                            L: <span className="font-bold">{item.skillsBefore.listening}</span>
                          </div>
                          <div className="bg-white/80 py-0.5 rounded border border-slate-200/60">
                            R: <span className="font-bold">{item.skillsBefore.reading}</span>
                          </div>
                          <div className="bg-white/80 py-0.5 rounded border border-slate-200/60">
                            W: <span className="font-bold">{item.skillsBefore.writing}</span>
                          </div>
                          <div className="bg-white/80 py-0.5 rounded border border-slate-200/60">
                            S: <span className="font-bold">{item.skillsBefore.speaking}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 2. CONNECTOR ARROW */}
                    <div className="col-span-1 flex items-center justify-center">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-academic-light-blue text-cta flex items-center justify-center shadow-2xs font-bold border border-blue-200">
                        <ArrowRight size={15} />
                      </div>
                    </div>

                    {/* 3. AFTER BOX */}
                    <div className="col-span-5 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 rounded-2xl p-3 sm:p-4 border border-blue-200 text-center space-y-1.5 shadow-xs">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-cta font-heading">
                        {t('pages.results.beforeAfter.afterLabel')}
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-primary font-heading">
                        {item.afterScore}
                      </div>
                      
                      {/* Skills Grid */}
                      {item.skillsAfter && (
                        <div className="grid grid-cols-2 gap-1 pt-1.5 border-t border-blue-200/80 text-[10px] sm:text-[11px] text-primary">
                          <div className="bg-white py-0.5 rounded border border-blue-200">
                            L: <span className="font-black text-cta">{item.skillsAfter.listening}</span>
                          </div>
                          <div className="bg-white py-0.5 rounded border border-blue-200">
                            R: <span className="font-black text-cta">{item.skillsAfter.reading}</span>
                          </div>
                          <div className="bg-white py-0.5 rounded border border-blue-200">
                            W: <span className="font-black text-cta">{item.skillsAfter.writing}</span>
                          </div>
                          <div className="bg-white py-0.5 rounded border border-blue-200">
                            S: <span className="font-black text-cta">{item.skillsAfter.speaking}</span>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Context & Progression Strategy Details */}
                  <div className="space-y-2.5 pt-1 text-left">
                    
                    {/* Meta info tags */}
                    <div className="flex flex-wrap items-center gap-2.5 text-xs">
                      <div className="inline-flex items-center gap-1.5 text-academic-heading font-medium bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/80">
                        <Clock size={13} className="text-cta" />
                        <span>{t('pages.results.beforeAfter.durationLabel')} <strong className="text-primary font-bold">{durationText}</strong></span>
                      </div>
                    </div>

                    {/* Challenge Block */}
                    {challengeText && (
                      <div className="space-y-1 bg-amber-50/50 p-3 rounded-xl border border-amber-200/60">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 font-heading">
                          <AlertCircle size={13} className="text-amber-600 flex-shrink-0" />
                          <span>{t('pages.results.beforeAfter.challengeTitle')}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-4">
                          {challengeText}
                        </p>
                      </div>
                    )}

                    {/* Solution Block */}
                    {solutionText && (
                      <div className="space-y-1 bg-emerald-50/50 p-3 rounded-xl border border-emerald-200/60">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 font-heading">
                          <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                          <span>{t('pages.results.beforeAfter.solutionTitle')}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-4">
                          {solutionText}
                        </p>
                      </div>
                    )}

                  </div>

                </div>

                {/* Card Footer Action: Proof Lightbox Button */}
                {item.image && (
                  <button
                    type="button"
                    className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cta hover:text-primary transition-colors cursor-pointer w-full text-left focus:outline-hidden"
                    onClick={() =>
                      onOpenScorecard?.({
                        image: item.image,
                        studentName: displayName,
                        score: item.afterScore,
                        caption: `${displayName}: ${item.beforeScore} → ${item.afterScore} (${gainText})`,
                        description: `${courseText} • ${durationText}`,
                      })
                    }
                  >
                    <span className="flex items-center gap-1.5">
                      <ZoomIn size={14} />
                      <span>{t('pages.results.beforeAfter.viewProof')}</span>
                    </span>
                    <ArrowRight size={14} />
                  </button>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterShowcase;

