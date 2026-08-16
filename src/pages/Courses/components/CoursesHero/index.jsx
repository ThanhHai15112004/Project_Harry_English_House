import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Sparkles,
  BookOpen,
  Crown,
  MessageSquare,
  Target,
  Compass,
  ArrowDown,
  CheckCircle2,
} from 'lucide-react';

const ICON_MAP = {
  BookOpen,
  Crown,
  MessageSquare,
  Target,
};

export const CoursesHero = ({
  programs = {},
  selectedProgram,
  onSelectProgram,
  onFinderClick,
}) => {
  const { t } = useTranslation();

  const programList = Object.values(programs);

  return (
    <section className="bg-gradient-to-b from-blue-50/50 via-white to-academic-soft-white border-b border-slate-200/80 pt-8 sm:pt-12 pb-10 lg:pb-14 relative overflow-hidden">
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-0">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl" />
      </div>

      <div className="app-container relative z-10">
        {/* Academic Page Header (Centered & Elegant) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-blue-100/80 text-cta text-[11px] sm:text-xs font-extrabold tracking-wider border border-blue-200/60 shadow-2xs">
            <Sparkles size={12} className="text-amber-500" />
            <span>{t('pages.courses.heroEyebrow')}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-academic-heading font-heading leading-tight tracking-tight">
            {t('pages.courses.heroTitle')}
          </h1>

          <p className="text-xs sm:text-base text-academic-body leading-relaxed max-w-2xl mx-auto">
            {t('pages.courses.heroSubtitle')}
          </p>

          <div className="pt-1 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={onFinderClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-cta bg-white border border-blue-200 shadow-2xs hover:bg-blue-50/70 hover:border-cta transition-all cursor-pointer"
            >
              <Compass size={14} className="text-cta" />
              <span>{t('pages.courses.finderTitle')}</span>
              <ArrowDown size={12} className="text-slate-400" />
            </button>
          </div>
        </div>

        {/* 4 Interactive Program Cards Hub (2 Columns on Mobile, 4 on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
          {programList.map((prog) => {
            const isSelected = selectedProgram === prog.id;
            const IconComponent = ICON_MAP[prog.icon] || BookOpen;
            const title = prog.tabKey ? t(prog.tabKey) : prog.title;
            const sub = prog.cardSubtitleKey ? t(prog.cardSubtitleKey) : prog.tagline;
            const tag = prog.cardTagKey ? t(prog.cardTagKey) : prog.badge;

            return (
              <button
                type="button"
                key={prog.id}
                onClick={() => onSelectProgram(prog.id)}
                className={`group relative text-left p-3.5 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer border flex flex-col justify-between focus:outline-hidden ${
                  isSelected
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/30 scale-[1.02]'
                    : 'bg-white text-academic-heading border-slate-200 hover:border-cta hover:shadow-card hover:-translate-y-0.5'
                }`}
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between gap-1.5 mb-2.5 sm:mb-4">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-blue-50 text-cta group-hover:bg-blue-100/70'
                      }`}
                    >
                      <IconComponent size={16} className="sm:w-5 sm:h-5" />
                    </div>

                    <span
                      className={`text-[9px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full border truncate max-w-[55%] ${
                        isSelected
                          ? 'bg-white/15 text-sky-200 border-white/20'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3
                    className={`text-xs sm:text-base lg:text-lg font-bold font-heading leading-snug mb-1 line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-academic-heading group-hover:text-cta'
                    }`}
                  >
                    {title}
                  </h3>

                  {/* Short Subtitle */}
                  <p
                    className={`text-[11px] sm:text-xs leading-relaxed line-clamp-2 ${
                      isSelected ? 'text-blue-100' : 'text-academic-muted'
                    }`}
                  >
                    {sub}
                  </p>
                </div>

                {/* Bottom Active Indicator */}
                <div
                  className={`mt-3 pt-2 sm:mt-4 sm:pt-3 border-t flex items-center justify-between text-[10px] sm:text-xs font-bold ${
                    isSelected
                      ? 'border-white/20 text-white'
                      : 'border-slate-100 text-slate-400 group-hover:text-cta'
                  }`}
                >
                  <span className="truncate">
                    {isSelected
                      ? t('pages.courses.viewingProgram')
                      : t('pages.courses.selectProgram')}
                  </span>
                  {isSelected ? (
                    <CheckCircle2 size={13} className="text-sky-300 flex-shrink-0" />
                  ) : (
                    <span className="text-xs font-bold text-slate-400 group-hover:text-cta flex-shrink-0">
                      -
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
