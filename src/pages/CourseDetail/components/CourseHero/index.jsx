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
  const { t, i18n } = useTranslation();

  if (!course) return null;

  const categoryLabelMap = {
    'ielts': t('pages.courses.tabIelts', 'IELTS Academic'),
    'ielts-vip': t('pages.courses.tabVip', 'IELTS VIP 1:1 & 1:2'),
    'communication': t('pages.courses.tabComm', 'Tiếng Anh Giao Tiếp'),
    'toeic-vstep': t('pages.courses.tabToeic', 'TOEIC & VSTEP')
  };

  const categoryLabel = categoryLabelMap[course.category] || t('pages.courses.tabIelts', 'IELTS Academic');

  return (
    <section className="relative bg-academic-soft-white border-b border-academic-border overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-18">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-academic-light-blue/50 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-indigo-50/50 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content (58% on desktop -> col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category badge & Level */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-academic-light-blue text-primary border border-academic-primary-light font-heading">
                <Sparkles className="w-3.5 h-3.5 text-cta" />
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-academic-heading tracking-tight leading-[1.15] font-heading">
                {t(course.titleKey)}
              </h1>
              
              {/* Level / Target Chip */}
              <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-academic-border rounded-xl shadow-2xs">
                <span className="text-xs text-academic-muted font-medium">
                  {t('pages.courseDetail.targetAudience.outputTarget', 'Mục tiêu đầu ra:')}
                </span>
                <span className="text-sm font-bold text-primary font-heading">
                  {t(course.levelKey)}
                </span>
              </div>
            </div>

            {/* Target Description */}
            <p className="text-base sm:text-lg text-academic-body leading-relaxed max-w-2xl font-normal">
              {t(course.targetKey)}
            </p>

            {/* 3 Quick Chips */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/90 rounded-xl border border-academic-border shadow-2xs">
                <Calendar className="w-4 h-4 text-cta shrink-0" />
                <span className="text-xs font-medium text-academic-heading truncate">
                  {t(course.durationKey)}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/90 rounded-xl border border-academic-border shadow-2xs">
                <Users className="w-4 h-4 text-cta shrink-0" />
                <span className="text-xs font-medium text-academic-heading truncate">
                  {t(course.classSizeKey)}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/90 rounded-xl border border-academic-border shadow-2xs">
                <MapPin className="w-4 h-4 text-cta shrink-0" />
                <span className="text-xs font-medium text-academic-heading truncate">
                  {t(course.formatKey)}
                </span>
              </div>
            </div>

            {/* 2 Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onConsultClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cta hover:bg-academic-cta-hover active:scale-98 text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>{t('pages.courseDetail.heroCtaConsult', 'Nhận tư vấn khóa học')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onViewClassesClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-academic-heading font-semibold text-sm sm:text-base rounded-xl border border-academic-border hover:border-slate-400 shadow-xs transition-all duration-200 cursor-pointer"
              >
                <span>{t('pages.courseDetail.heroCtaClasses', 'Xem lớp đang mở')}</span>
              </button>
            </div>

            {/* Guarantee mini badge */}
            <div className="flex items-center gap-2 text-xs text-academic-muted pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {t(course.guaranteeKey, 'Cam kết chất lượng đào tạo & Đồng hành cùng học viên')}
              </span>
            </div>

          </div>

          {/* Right Visual (42% on desktop -> col-span-5) */}
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
              <div className="absolute inset-0 bg-linear-to-t from-academic-navy-primary/70 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom floating badge on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs text-academic-muted font-medium">{t('about.instructorLabel', 'Giảng viên phụ trách')}</p>
                  <p className="text-sm font-bold text-academic-heading font-heading">
                    {i18n.language?.startsWith('en') ? 'Harry (Anh Khoi)' : 'Harry (Anh Khôi)'}
                  </p>
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
