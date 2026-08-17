import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  BookOpen,
  MessageSquare,
  Award,
  GraduationCap,
  Video,
  Play,
  Volume2,
  Tv,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const CategoryPlaylists = ({ categories, searchTerm, selectedLevel }) => {
  const { t, i18n } = useTranslation();
  const isVi = i18n.language === 'vi';

  // State quản lý xem danh mục nào đang mở rộng "View all"
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleExpand = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen size={22} className="text-blue-600 dark:text-sky-400" />;
      case 'MessageSquare':
        return <MessageSquare size={22} className="text-emerald-600 dark:text-emerald-400" />;
      case 'Award':
        return <Award size={22} className="text-amber-600 dark:text-amber-400" />;
      case 'GraduationCap':
        return <GraduationCap size={22} className="text-indigo-600 dark:text-indigo-400" />;
      case 'Youtube':
      case 'Video':
        return <Video size={22} className="text-red-600 dark:text-red-400" />;
      default:
        return <BookOpen size={22} className="text-primary dark:text-sky-400" />;
    }
  };

  // Lọc bài tập theo từ khóa tìm kiếm và level
  const filteredCategories = categories.map((category) => {
    const matchingExercises = category.exercises.filter((ex) => {
      const matchSearch =
        !searchTerm ||
        ex.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.titleVi?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchLevel =
        selectedLevel === 'ALL' ||
        ex.level.toLowerCase().includes(selectedLevel.toLowerCase()) ||
        category.badge.toLowerCase().includes(selectedLevel.toLowerCase());

      return matchSearch && matchLevel;
    });

    return {
      ...category,
      filteredExercises: matchingExercises,
    };
  }).filter((cat) => cat.filteredExercises.length > 0);

  return (
    <section className="py-16 md:py-20 bg-slate-50/60 dark:bg-[#070E1E]">
      <div className="app-container space-y-10">
        {/* Section Title */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 dark:bg-slate-800 text-primary dark:text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={14} />
            <span>{t('dictation.home.exercises.badge')}</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-academic-heading dark:text-white tracking-tight">
            {t('dictation.home.exercises.title')}
          </h2>
          <p className="text-xs sm:text-sm text-academic-body dark:text-slate-300 mt-2">
            {t('dictation.home.exercises.subtitle')}
          </p>
        </div>

        {/* Categories Grid (2 Columns Layout) */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <p className="text-base font-bold text-slate-700 dark:text-slate-200">
              {t('dictation.home.exercises.empty')}
            </p>
            <p className="text-xs text-slate-500">{t('dictation.home.exercises.emptyHint')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCategories.map((category) => {
              const isExpanded = !!expandedCategories[category.id];
              const visibleExercises = isExpanded
                ? category.filteredExercises
                : category.filteredExercises.slice(0, 5);

              const displayTitle = isVi && category.titleVi ? category.titleVi : category.title;
              const displaySubTitle = isVi ? category.title : category.titleVi;

              return (
                <div
                  key={category.id}
                  className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100 dark:border-slate-700/80">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-700 flex items-center justify-center flex-shrink-0">
                          {getCategoryIcon(category.iconName)}
                        </div>
                        <div>
                          <h3 className="font-heading font-black text-xl text-primary hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors">
                            <span className="border-b-2 border-primary/30 dark:border-sky-400/30 hover:border-primary">
                              {displayTitle}
                            </span>
                          </h3>
                          {displaySubTitle && (
                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                              {displaySubTitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex-shrink-0">
                        {category.badge}
                      </span>
                    </div>

                    {/* Category Description */}
                    <p className="text-xs sm:text-sm text-academic-body dark:text-slate-300 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Exercise List */}
                    <ul className="space-y-2.5 pt-2">
                      {visibleExercises.map((exercise) => (
                        <li key={exercise.id}>
                          <Link
                            to={`/dictation/${exercise.id}`}
                            className="group flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 hover:bg-blue-50 dark:hover:bg-slate-700/60 border border-slate-200/60 dark:border-slate-800 hover:border-blue-200 dark:hover:border-slate-600 transition-all"
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              {exercise.thumbnailUrl ? (
                                <div className="relative h-9 w-14 rounded-lg overflow-hidden flex-shrink-0 bg-slate-900 shadow-2xs group-hover:ring-1 group-hover:ring-primary/40 transition-all">
                                  <img
                                    src={exercise.thumbnailUrl}
                                    alt={exercise.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                  />
                                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                    <Play size={10} className="fill-white text-white ml-0.5" />
                                  </div>
                                </div>
                              ) : (
                                <span className="h-7 w-7 rounded-xl bg-white dark:bg-slate-800 text-primary dark:text-sky-400 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                                  <Play size={12} className="fill-current ml-0.5" />
                                </span>
                              )}
                              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-sky-400 transition-colors truncate">
                                {exercise.title}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline">
                                {t('dictation.home.exercises.sentencesCount', { count: exercise.totalSentences })}
                              </span>
                              <span className="px-2 py-0.5 rounded-md bg-blue-100/70 dark:bg-slate-800 text-primary dark:text-sky-300 text-[10px] font-bold">
                                {exercise.level}
                              </span>
                              {exercise.mediaType === 'youtube' ? (
                                <Tv size={14} className="text-red-500" title="YouTube Video" />
                              ) : (
                                <Volume2 size={14} className="text-emerald-500" title="Audio" />
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View All / Toggle Button */}
                  {category.filteredExercises.length > 5 && (
                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => toggleExpand(category.id)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary dark:text-sky-400 hover:underline cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            <span>{t('dictation.home.exercises.collapse')}</span>
                            <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            <span>{t('dictation.home.exercises.viewAll', { count: category.filteredExercises.length })}</span>
                            <ChevronDown size={16} />
                          </>
                        )}
                      </button>

                      <Link
                        to={`/dictation/${category.filteredExercises[0].id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-sky-400 transition-colors"
                      >
                        <span>{t('dictation.home.exercises.practiceNow')}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
