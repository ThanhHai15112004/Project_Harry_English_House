import React from 'react';
import { useTranslation } from 'react-i18next';
import { Headphones, Search, CheckCircle2, Sparkles, Volume2 } from 'lucide-react';

export const DictationHero = ({ searchTerm, onSearchChange, selectedLevel, onLevelChange }) => {
  const { t } = useTranslation();
  const levels = ['ALL', 'A1', 'A2', 'B1', 'B2', 'C1', 'TOEIC', 'IELTS'];

  return (
    <section className="relative pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-12 md:pb-14 overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white dark:from-[#091428] dark:via-[#0c1a33] dark:to-[#091224] border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-to-r from-blue-400/10 via-sky-400/15 to-indigo-500/10 dark:from-sky-500/10 dark:via-blue-600/10 dark:to-indigo-600/10 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="app-container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-sky-950/80 border border-blue-200 dark:border-sky-800 text-primary dark:text-sky-300 text-xs sm:text-sm font-bold tracking-wide shadow-2xs">
            <Headphones size={15} className="animate-pulse text-primary dark:text-sky-400" />
            <span>{t('dictation.home.badge')}</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-academic-heading dark:text-white tracking-tight leading-tight">
            {t('dictation.home.titlePrefix')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-sky-500 dark:from-sky-400 dark:to-blue-400">
              {t('dictation.home.titleHighlight')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-academic-body dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {t('dictation.home.description')}
          </p>

          {/* Key Quick Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 pb-4 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>{t('dictation.home.highlights.lessons')}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
              <Volume2 size={16} className="text-primary dark:text-sky-400" />
              <span>{t('dictation.home.highlights.native')}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
              <Sparkles size={16} className="text-amber-500" />
              <span>{t('dictation.home.highlights.instant')}</span>
            </div>
          </div>

          {/* Search & Level Filters */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-xl border border-slate-200/90 dark:border-slate-700 space-y-4 max-w-3xl mx-auto">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t('dictation.home.searchPlaceholder')}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-sky-400 text-sm font-medium transition-all"
              />
            </div>

            {/* Level Tag Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider flex-shrink-0 mr-1">
                {t('dictation.home.levelLabel')}
              </span>
              {levels.map((lvl) => {
                const isActive = selectedLevel === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => onLevelChange(lvl)}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all flex-shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-primary text-white shadow-sm dark:bg-sky-500 dark:text-slate-950'
                        : 'bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
