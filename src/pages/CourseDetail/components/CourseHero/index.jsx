import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export default function CourseHero({ course, onConsultClick, onViewClassesClick }) {
  const { t } = useTranslation();

  if (!course) return null;

  const categoryLabelMap = {
    'ielts': t('pages.courses.tabIelts'),
    'ielts-vip': t('pages.courses.tabVip'),
    'communication': t('pages.courses.tabComm'),
    'toeic-vstep': t('pages.courses.tabToeic')
  };

  const categoryLabel = categoryLabelMap[course.category] || t('pages.courses.tabIelts');

  return (
    <section className="relative bg-[#F7F9FC] border-b border-[#E2E8F0] overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-indigo-50/50 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content (52% on desktop -> col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category badge & Level */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EAF2FF] text-[#1746A2] border border-[#BFDBFE]">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                {categoryLabel}
              </span>
              {course.badgeKey && (
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {t(course.badgeKey)}
                </span>
              )}
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#10233F] tracking-tight leading-[1.15]">
                {t(course.titleKey)}
              </h1>
              
              {/* Level / Target Chip */}
              <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#DDE6F0] rounded-xl shadow-xs">
                <span className="text-xs text-slate-500 font-medium">{t('pages.courseDetail.targetAudience.outputTarget')}</span>
                <span className="text-sm font-bold text-[#1746A2]">
                  {t(course.levelKey)}
                </span>
              </div>
            </div>

            {/* Target Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {t(course.targetKey)}
            </p>

            {/* 3 Quick Chips */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/90 rounded-xl border border-[#E2E8F0] shadow-2xs">
                <Calendar className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-xs font-medium text-slate-700 truncate">
                  {t(course.durationKey)}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/90 rounded-xl border border-[#E2E8F0] shadow-2xs">
                <Users className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-xs font-medium text-slate-700 truncate">
                  {t(course.classSizeKey)}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/90 rounded-xl border border-[#E2E8F0] shadow-2xs">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-xs font-medium text-slate-700 truncate">
                  {t(course.formatKey)}
                </span>
              </div>
            </div>

            {/* 2 Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onConsultClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
              >
                <span>{t('pages.courseDetail.heroCtaConsult')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onViewClassesClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-[#10233F] font-semibold text-sm sm:text-base rounded-xl border border-[#CBD5E1] hover:border-[#94A3B8] shadow-xs transition-all duration-200 cursor-pointer"
              >
                <span>{t('pages.courseDetail.heroCtaClasses')}</span>
              </button>
            </div>

            {/* Guarantee mini badge */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {t(course.guaranteeKey)}
              </span>
            </div>

          </div>

          {/* Right Visual (48% on desktop -> col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 bg-slate-100 group">
              <img
                src={course.image || '/src/assets/ki-niem/ki-niem-1.jpg'}
                alt={t(course.titleKey)}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/src/assets/ki-niem/ki-niem-1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#10233F]/70 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom floating badge on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium">{t('about.instructorLabel')}</p>
                  <p className="text-sm font-bold text-[#10233F]">Harry (Anh Khôi)</p>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg text-xs font-bold border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>IDP Official</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
