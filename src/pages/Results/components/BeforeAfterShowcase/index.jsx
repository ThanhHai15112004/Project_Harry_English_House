import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, TrendingUp, Clock, BookOpen, AlertCircle, CheckCircle2, ZoomIn } from 'lucide-react';
import { SectionTitle } from '@/components/common';

export const BeforeAfterShowcase = ({ beforeAfterList = [], onOpenScorecard }) => {
  const { t } = useTranslation();

  if (!beforeAfterList || beforeAfterList.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-academic-soft-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.results.beforeAfter.badge')}
          title={t('pages.results.beforeAfter.title')}
          subtitle={t('pages.results.beforeAfter.subtitle')}
        />

        {/* Case Studies Stack */}
        <div className="space-y-8 sm:space-y-12">
          {beforeAfterList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-academic-border shadow-card hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left (7 Cols): Visual Comparative Breakdown (Before -> After) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Top Meta: Student Name & Gain Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-academic-heading font-heading">
                        {item.studentName}
                      </h3>
                      <p className="text-xs text-academic-muted font-medium">
                        {item.examType}
                      </p>
                    </div>

                    {/* Band Gain Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-academic-light-blue border border-blue-200">
                      <TrendingUp size={16} className="text-cta" />
                      <span className="text-xs font-bold text-primary uppercase">{t('pages.results.beforeAfter.gainBadge')}:</span>
                      <span className="text-base font-black text-primary font-heading">{item.gain}</span>
                    </div>
                  </div>

                  {/* Before vs After Visual Pill Splitter */}
                  <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 sm:gap-2 items-center">
                    
                    {/* 1. BEFORE BOX (5 cols) */}
                    <div className="sm:col-span-5 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 text-center space-y-2">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                        {t('pages.results.beforeAfter.beforeLabel')}
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-slate-600 font-heading">
                        {item.beforeScore}
                      </div>
                      
                      {/* Skills Grid */}
                      {item.skillsBefore && (
                        <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-200 text-[11px] text-slate-600">
                          <div>L: <span className="font-bold">{item.skillsBefore.listening}</span></div>
                          <div>R: <span className="font-bold">{item.skillsBefore.reading}</span></div>
                          <div>W: <span className="font-bold">{item.skillsBefore.writing}</span></div>
                          <div>S: <span className="font-bold">{item.skillsBefore.speaking}</span></div>
                        </div>
                      )}
                    </div>

                    {/* 2. ARROW CONNECTOR (1 col) */}
                    <div className="sm:col-span-1 flex items-center justify-center py-2 sm:py-0">
                      <div className="w-10 h-10 rounded-full bg-academic-light-blue text-academic-sky flex items-center justify-center shadow-2xs font-bold">
                        <ArrowRight size={20} className="text-cta rotate-90 sm:rotate-0" />
                      </div>
                    </div>

                    {/* 3. AFTER BOX (5 cols) */}
                    <div className="sm:col-span-5 bg-blue-50/60 rounded-2xl p-4 sm:p-5 border border-blue-200 text-center space-y-2 shadow-xs">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-cta">
                        {t('pages.results.beforeAfter.afterLabel')}
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-primary font-heading">
                        {item.afterScore}
                      </div>
                      
                      {/* Skills Grid */}
                      {item.skillsAfter && (
                        <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-blue-200/80 text-[11px] text-primary">
                          <div>L: <span className="font-black text-cta">{item.skillsAfter.listening}</span></div>
                          <div>R: <span className="font-black text-cta">{item.skillsAfter.reading}</span></div>
                          <div>W: <span className="font-black text-cta">{item.skillsAfter.writing}</span></div>
                          <div>S: <span className="font-black text-cta">{item.skillsAfter.speaking}</span></div>
                        </div>
                      )}
                    </div>

                  </div>

                </div>

                {/* Right (5 Cols): Context, Strategy & Proof */}
                <div className="lg:col-span-5 space-y-4 bg-academic-soft-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex flex-col justify-between">
                  
                  <div className="space-y-4">
                    {/* Meta info tags */}
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <div className="inline-flex items-center gap-1.5 text-academic-heading font-semibold">
                        <Clock size={14} className="text-cta" />
                        <span>{t('pages.results.beforeAfter.durationLabel')} <strong className="text-primary">{item.duration}</strong></span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-academic-heading font-semibold">
                        <BookOpen size={14} className="text-achievement" />
                        <span className="truncate max-w-[200px]">{item.course}</span>
                      </div>
                    </div>

                    {/* Challenge Block */}
                    <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                        <AlertCircle size={14} className="text-amber-500" />
                        <span>{t('pages.results.beforeAfter.challengeTitle')}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>

                    {/* Solution Block */}
                    <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                        <CheckCircle2 size={14} className="text-emerald-600" />
                        <span>{t('pages.results.beforeAfter.solutionTitle')}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* Proof Scorecard Link */}
                  {item.image && (
                    <button
                      type="button"
                      className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-cta hover:text-primary transition-colors cursor-pointer w-full text-left"
                      onClick={() =>
                        onOpenScorecard &&
                        onOpenScorecard({
                          image: item.image,
                          studentName: item.studentName,
                          score: item.afterScore,
                          caption: `${item.studentName}: ${item.beforeScore} → ${item.afterScore} (${item.gain})`,
                          description: `${item.course} • ${item.duration}`,
                        })
                      }
                    >
                      <span className="flex items-center gap-1.5">
                        <ZoomIn size={14} />
                        {t('pages.results.beforeAfter.viewProof')}
                      </span>
                      <ArrowRight size={14} />
                    </button>
                  )}

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterShowcase;
