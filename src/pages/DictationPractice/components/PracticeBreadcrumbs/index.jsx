import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Sparkles } from 'lucide-react';
import { ROUTES } from '@/core';

export const PracticeBreadcrumbs = ({ categoryTitle, lessonTitle, level }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
        <Link to={ROUTES.DICTATION} className="hover:text-primary dark:hover:text-sky-400 transition-colors">
          {t('dictation.practice.allTopics')}
        </Link>
        <ChevronRight size={14} />
        <span className="hover:text-primary dark:hover:text-sky-400 transition-colors cursor-pointer">
          {categoryTitle || t('dictation.practice.defaultCategory')}
        </span>
        <ChevronRight size={14} />
        <span className="text-slate-900 dark:text-white font-bold truncate">
          {lessonTitle}
        </span>
      </nav>

      {/* Lesson Header Title & Level */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-academic-heading dark:text-white tracking-tight">
            {lessonTitle}
          </h1>
          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-sky-950 border border-blue-200 dark:border-sky-800 text-primary dark:text-sky-300 text-xs font-black tracking-wide">
            {t('dictation.practice.vocabLevel', { level })}
          </span>
        </div>
      </div>

      {/* Interactive Helper Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-center justify-between text-xs sm:text-sm text-amber-900 dark:text-amber-200 shadow-2xs">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0" />
          <span>
            {t('dictation.practice.helperBanner')}
          </span>
        </div>
      </div>
    </div>
  );
};
