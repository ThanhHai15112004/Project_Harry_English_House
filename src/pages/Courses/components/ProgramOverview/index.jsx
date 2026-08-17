import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, CheckCircle2 } from 'lucide-react';

export const ProgramOverview = ({ programData }) => {
  const { t } = useTranslation();

  if (!programData) return null;

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 60% (7 cols): Title & Training Philosophy */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-academic-light-blue text-cta text-xs font-bold uppercase tracking-wider border border-blue-100">
              <Award size={13} />
              <span>{t(programData.badgeKey)}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-academic-heading font-heading leading-tight">
              {t(programData.titleKey)}
            </h2>

            <p className="text-xs sm:text-sm font-semibold text-cta font-heading">
              {t(programData.taglineKey)}
            </p>

            <p className="text-xs sm:text-sm text-academic-body leading-relaxed pt-1">
              {t(programData.descKey)}
            </p>
          </div>

          {/* Right 40% (5 cols): 4 Quick Facts (No heavy card border) */}
          <div className="lg:col-span-5 bg-academic-soft-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
            <h3 className="text-xs font-extrabold text-academic-heading uppercase tracking-wider border-b border-slate-200 pb-2.5 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-cta" />
              <span>{t('pages.courses.overviewTitle')}</span>
            </h3>

            <div className="grid grid-cols-2 gap-3.5 text-xs text-academic-body">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/70 space-y-1">
                <span className="text-[11px] text-academic-muted block font-semibold">
                  {t('pages.courses.quickFacts.entry')}
                </span>
                <strong className="text-academic-heading font-heading block truncate">
                  {t(programData.facts?.entryKey)}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200/70 space-y-1">
                <span className="text-[11px] text-academic-muted block font-semibold">
                  {t('pages.courses.quickFacts.target')}
                </span>
                <strong className="text-primary font-heading block truncate">
                  {t(programData.facts?.targetKey)}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200/70 space-y-1">
                <span className="text-[11px] text-academic-muted block font-semibold">
                  {t('pages.courses.quickFacts.format')}
                </span>
                <strong className="text-academic-heading font-heading block truncate">
                  {t(programData.facts?.formatKey)}
                </strong>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200/70 space-y-1">
                <span className="text-[11px] text-academic-muted block font-semibold">
                  {t('pages.courses.quickFacts.classSize')}
                </span>
                <strong className="text-academic-heading font-heading block truncate">
                  {t(programData.facts?.classSizeKey)}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
