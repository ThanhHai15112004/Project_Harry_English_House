import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  Target, 
  Users, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck,
  Flame,
  BookOpen,
  MapPin
} from 'lucide-react';
import { useCoursesData, SECTION_IDS } from '@/core';
import { SectionTitle, Button } from '@/components/common';

export const FeaturedPrograms = () => {
  const { t } = useTranslation();
  const allCourses = useCoursesData();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: t('programs.tabAll') },
    { id: 'ielts', label: t('programs.tabIelts') },
    { id: 'communication', label: t('programs.tabComm') },
    { id: 'ielts-vip', label: t('programs.tabVip') },
    { id: 'toeic-vstep', label: t('programs.tabToeic') },
  ];

  const filteredCourses = activeTab === 'all'
    ? allCourses
    : allCourses.filter((course) => course.category === activeTab);

  // Helper to highlight top flagship courses
  const isFeaturedCourse = (courseId) => courseId === 'ielts-6-75' || courseId === 'ielts-4-5';

  return (
    <section id={SECTION_IDS.PROGRAMS} className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="app-container">
        <SectionTitle
          badge={t('programs.badge')}
          title={t('programs.title')}
          subtitle={t('programs.subtitle')}
        />

        {/* Category Filter Tabs: Swipeable on Mobile, Centered on Desktop */}
        <div className="mt-6 sm:mt-8 mb-8 sm:mb-10 w-full overflow-hidden">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar py-1 px-2 -mx-2 sm:mx-0 sm:px-0">
            <div className="inline-flex p-1 sm:p-1.5 rounded-2xl bg-academic-surface border border-academic-border shadow-xs gap-1 flex-nowrap flex-shrink-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-xs md:text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.id
                      ? 'bg-academic-cta text-white shadow-md shadow-cta/25'
                      : 'text-academic-body hover:text-academic-heading hover:bg-white/80'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Course Grid: 2 Columns on Mobile, 3 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-6 items-stretch">
          {filteredCourses.map((course) => {
            const isFeatured = isFeaturedCourse(course.id);

            return (
              <div
                key={course.id}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl border flex flex-col justify-between transition-all duration-300 overflow-hidden ${
                  isFeatured
                    ? 'border-academic-cta shadow-card hover:shadow-card-hover ring-2 ring-academic-cta/15'
                    : 'border-academic-border hover:border-academic-cta/40 hover:shadow-card-hover'
                }`}
              >
                {/* Popular Ribbon if featured */}
                {isFeatured && (
                  <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-20 inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-sm whitespace-nowrap">
                    <Flame size={12} className="text-amber-200 fill-amber-200 animate-pulse" />
                    <span>{t('programs.popularBadge')}</span>
                  </div>
                )}

                {/* Card Thumbnail Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-academic-surface">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-academic-heading/60 via-transparent to-black/20" />

                  {/* Floating Badges on Image */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1">
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-extrabold text-academic-heading bg-white/95 backdrop-blur-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shadow-xs whitespace-nowrap flex-shrink-0">
                      <Sparkles size={11} className="text-academic-cta" />
                      <span>{course.badge}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium text-white bg-academic-heading/85 backdrop-blur-xs px-2 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg shadow-xs whitespace-nowrap flex-shrink-0">
                      <Clock size={11} className="text-blue-200" />
                      <span>{course.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-2.5 sm:p-4 lg:p-5 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className="text-xs sm:text-sm lg:text-base font-extrabold text-academic-heading font-heading group-hover:text-academic-primary transition-colors line-clamp-2 leading-tight min-h-[2rem] sm:min-h-[2.5rem]">
                      {course.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-academic-body line-clamp-2 leading-relaxed hidden sm:block">
                      {course.target}
                    </p>
                  </div>

                  {/* 1. Core Specs (Cấp độ & Sĩ số) */}
                  <div className="space-y-1 sm:space-y-1.5 pt-1.5 sm:pt-2 border-t border-academic-border/70 text-[10px] sm:text-xs text-academic-body">
                    {/* Cấp độ */}
                    <div className="flex items-center gap-1.5 truncate">
                      <Target size={12} className="text-academic-cta flex-shrink-0" />
                      <span className="truncate"><strong>{t('programs.levelLabel')}</strong> {course.level}</span>
                    </div>

                    {/* Sĩ số */}
                    <div className="flex items-center gap-1.5 truncate">
                      <Users size={12} className="text-academic-cta flex-shrink-0" />
                      <span className="truncate">
                        <strong>{t('programs.classSizeLabel')}</strong> {course.classSize || t('programs.classSizeVal')}
                      </span>
                    </div>
                  </div>

                  {/* 2. Checklist Điểm nổi bật & Cam kết (Dấu tick đa dạng) */}
                  <div className="space-y-1 sm:space-y-1.5 pt-1 border-t border-dashed border-academic-border/70 text-[10px] sm:text-xs text-academic-body">
                    {/* Cam kết chính */}
                    <div className="flex items-start gap-1.5 leading-snug">
                      <CheckCircle2 size={12} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1 text-emerald-700 font-semibold">
                        {course.guarantee || t('programs.guarantee')}
                      </span>
                    </div>

                    {/* Các tiêu chí bổ sung (Giáo trình, Đặc quyền) */}
                    {course.highlights?.slice(0, 2).map((highlight) => (
                      <div key={highlight} className="flex items-start gap-1.5 leading-snug">
                        <CheckCircle2 size={12} className="text-academic-cta flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1 text-academic-heading font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Địa điểm học */}
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-academic-muted pt-1 truncate">
                    <MapPin size={11} className="text-academic-cta flex-shrink-0" />
                    <span className="truncate">{course.format}</span>
                  </div>

                  {/* Footer Solid CTA Button */}
                  <div className="pt-1">
                    <a href={`#${SECTION_IDS.CONTACT}`} className="block">
                      <button
                        type="button"
                        className="w-full py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-lg sm:rounded-xl bg-academic-cta text-white font-bold text-[10px] sm:text-xs hover:bg-academic-cta-hover active:scale-[0.98] transition-all flex items-center justify-center gap-1 sm:gap-1.5 shadow-xs"
                      >
                        <span>{t('programs.consultBtn')}</span>
                        <ArrowRight size={12} className="transition-colors flex-shrink-0" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Placement Test Banner: No overflow on mobile */}
        <div className="mt-10 sm:mt-12 bg-academic-soft-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-academic-border flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xs">
          <div className="flex items-center gap-3 sm:gap-4 text-left w-full md:w-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-academic-light-blue text-academic-primary flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={22} className="sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs sm:text-sm lg:text-base font-bold text-academic-heading font-heading leading-snug">
                {t('programs.writtenGuarantee')}
              </h4>
              <p className="text-[11px] sm:text-xs text-academic-body mt-0.5 line-clamp-2">
                {t('about.desc')}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full md:w-auto items-stretch sm:items-center justify-center flex-shrink-0">
            <a href={`#${SECTION_IDS.ROADMAP}`} className="w-full sm:w-auto">
              <Button fullWidth size="sm" variant="outline" icon={<BookOpen size={14} />}>
                {t('programs.viewRoadmapBtn')}
              </Button>
            </a>
            <a href={`#${SECTION_IDS.CONTACT}`} className="w-full sm:w-auto">
              <Button fullWidth size="sm" variant="primary" icon={<ArrowRight size={14} />}>
                {t('programs.freeTestCta')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
