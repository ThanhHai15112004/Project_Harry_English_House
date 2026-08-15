import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, Target, Award, CheckCircle } from 'lucide-react';
import { useCoursesData, SECTION_IDS } from '@/core';
import { SectionTitle, Button } from '@/components/common';

export const FeaturedPrograms = () => {
  const { t } = useTranslation();
  const allCourses = useCoursesData();

  // Highlight IELTS as the primary featured course
  const ieltsCourse = allCourses.find((c) => c.id === 'ielts-all') || allCourses[0];
  const otherCourses = allCourses.filter((c) => c.id !== 'ielts-all').slice(0, 3);

  return (
    <section id={SECTION_IDS.PROGRAMS} className="py-20 lg:py-28 bg-white">
      <div className="app-container">
        <SectionTitle
          badge={t('programs.badge')}
          title={t('programs.title')}
          subtitle={t('programs.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Large Featured IELTS Card (7 cols on desktop) */}
          {ieltsCourse && (
            <div className="lg:col-span-7 bg-gradient-to-br from-academic-light-blue via-white to-blue-50/40 rounded-3xl p-8 sm:p-10 border border-blue-200 shadow-card flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-6 relative z-10">
                {/* Featured Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary text-white text-xs font-bold shadow-xs">
                  <Award size={15} />
                  <span>{t('programs.featuredBadge')}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-academic-heading font-heading mb-2">
                    {ieltsCourse.title}
                  </h3>
                  <p className="text-sm sm:text-base text-academic-body leading-relaxed max-w-xl">
                    {t('programs.featuredDesc')}
                  </p>
                </div>

                {/* Key Features / Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-academic-body bg-white/80 p-3 rounded-xl border border-blue-100">
                    <Target size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>{t('programs.levelLabel')}</strong> 0 → 7.5+ IELTS</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-academic-body bg-white/80 p-3 rounded-xl border border-blue-100">
                    <BookOpen size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>{t('programs.classSizeLabel')}</strong> {t('programs.classSizeVal')}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-academic-body bg-white/80 p-3 rounded-xl border border-blue-100 sm:col-span-2">
                    <CheckCircle size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{t('programs.guarantee')}</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-8 mt-6 border-t border-blue-100/80 flex items-center justify-between">
                <a href={`#${SECTION_IDS.ROADMAP}`}>
                  <Button size="md" variant="primary" icon={<ArrowRight size={16} />}>
                    {t('programs.viewRoadmapBtn')}
                  </Button>
                </a>
                <span className="text-xs font-bold text-primary hidden sm:inline">
                  {t('programs.writtenGuarantee')}
                </span>
              </div>
            </div>
          )}

          {/* 3 Smaller Right Cards (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {otherCourses.map((course, idx) => (
              <div
                key={course.id || idx}
                className="bg-white rounded-2xl p-6 border border-academic-border hover:border-blue-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cta bg-academic-light-blue px-2.5 py-0.5 rounded-full">
                      {course.badge}
                    </span>
                    <span className="text-xs text-academic-muted font-medium">
                      {course.duration}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-academic-heading font-heading group-hover:text-primary transition-colors">
                    {course.title}
                  </h4>

                  <p className="text-xs text-academic-body line-clamp-2 leading-relaxed">
                    {course.target}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-academic-muted font-medium">
                    {course.format}
                  </span>
                  <a
                    href={`#${SECTION_IDS.CONTACT}`}
                    className="inline-flex items-center gap-1 font-bold text-cta hover:text-primary transition-colors"
                  >
                    <span>{t('programs.consultBtn')}</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
