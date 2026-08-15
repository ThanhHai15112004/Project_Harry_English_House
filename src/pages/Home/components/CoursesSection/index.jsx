import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, ArrowRight, BookOpen, Target, MapPin } from 'lucide-react';
import { useCoursesData, COURSE_CATEGORIES, COURSE_FILTER_TABS, SECTION_IDS } from '@/core';
import { SectionTitle, Button } from '@/components/common';

export const CoursesSection = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(COURSE_CATEGORIES.ALL);
  const courses = useCoursesData(selectedCategory);

  const getBadgeColor = (color) => {
    switch (color) {
      case 'cyan':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'emerald':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'amber':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'purple':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'orange':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'indigo':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200';
    }
  };

  return (
    <section id={SECTION_IDS.COURSES} className="py-16 sm:py-24 bg-slate-50">
      <div className="app-container">
        <SectionTitle
          badge={t('courses.badge')}
          title={t('courses.title')}
          subtitle={t('courses.subtitle')}
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {COURSE_FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
                selectedCategory === tab.key
                  ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/20 -translate-y-0.5'
                  : 'bg-white text-slate-600 border-slate-200/80 hover:border-blue-300 hover:text-blue-700'
              }`}
              onClick={() => setSelectedCategory(tab.key)}
            >
              {t(tab.i18nKey)}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Badge & Duration */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getBadgeColor(
                      course.color
                    )}`}
                  >
                    {course.badge}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                    <Clock size={14} className="text-slate-400" />
                    {course.duration}
                  </span>
                </div>

                {/* Title & Level */}
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading mb-1.5 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 pb-3 border-b border-slate-100">
                    <strong>{t('courses.labels.level')}</strong> {course.level}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <Target size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs text-slate-900 font-bold mb-0.5">
                        {t('courses.labels.target')}
                      </strong>
                      <p className="text-xs leading-relaxed text-slate-600">{course.target}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <BookOpen size={16} className="text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs text-slate-900 font-bold mb-0.5">
                        {t('courses.labels.curriculum')}
                      </strong>
                      <p className="text-xs leading-relaxed text-slate-600">{course.curriculum}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs text-slate-900 font-bold mb-0.5">
                        {t('courses.labels.format')}
                      </strong>
                      <p className="text-xs leading-relaxed text-slate-600">{course.format}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-4 border-t border-slate-100">
                <a href={`#${SECTION_IDS.CONTACT}`} className="block">
                  <Button fullWidth size="md" variant="outline" icon={<ArrowRight size={16} />}>
                    {t('courses.labels.registerBtn')}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
