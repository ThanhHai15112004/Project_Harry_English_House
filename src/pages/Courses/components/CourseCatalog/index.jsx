import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Search,
  X,
  Sparkles,
  Clock,
  Target,
  Users,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Flame,
  Filter,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/common';

const ITEMS_PER_PAGE = 6;

export const CourseCatalog = ({
  allCourses = [],
  selectedCategory = 'all',
  onSelectCategory,
}) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { id: 'all', label: t('pages.courses.filterCategoryAll') },
    { id: 'ielts', label: t('pages.courses.tabIelts') },
    { id: 'ielts-vip', label: t('pages.courses.tabIeltsVip') },
    { id: 'communication', label: t('pages.courses.tabComm') },
    { id: 'toeic-vstep', label: t('pages.courses.tabToeicVstep') },
  ];

  const levels = [
    { id: 'all', label: t('pages.courses.filterLevelAll') },
    { id: 'beginner', label: t('pages.courses.filterLevelBeginner') },
    { id: 'intermediate', label: t('pages.courses.filterLevelIntermediate') },
    { id: 'advanced', label: t('pages.courses.filterLevelAdvanced') },
  ];

  // Helper to detect flagship/popular courses
  const isFeaturedCourse = (courseId) => courseId === 'ielts-6-75' || courseId === 'ielts-4-5';

  // Filter logic
  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      // 1. Category filter
      if (selectedCategory !== 'all' && course.category !== selectedCategory) {
        return false;
      }

      // 2. Level filter
      if (selectedLevel === 'beginner') {
        const isBeginner =
          course.id.includes('0-3') ||
          course.id.includes('3-4') ||
          course.id.includes('comm-basic');
        if (!isBeginner) return false;
      } else if (selectedLevel === 'intermediate') {
        const isInter =
          course.id.includes('4-5') ||
          course.id.includes('comm-applied') ||
          course.id.includes('toeic');
        if (!isInter) return false;
      } else if (selectedLevel === 'advanced') {
        const isAdv = course.id.includes('6-75') || course.id.includes('vip');
        if (!isAdv) return false;
      }

      // 3. Search query filter
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchTitle = course.title?.toLowerCase().includes(term);
        const matchTarget = course.target?.toLowerCase().includes(term);
        const matchLevel = course.level?.toLowerCase().includes(term);
        const matchBadge = course.badge?.toLowerCase().includes(term);
        if (!matchTitle && !matchTarget && !matchLevel && !matchBadge) {
          return false;
        }
      }

      return true;
    });
  }, [allCourses, selectedCategory, selectedLevel, searchTerm]);

  // Reset page to 1 whenever filters or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedLevel, searchTerm]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / ITEMS_PER_PAGE));
  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const el = document.getElementById('course-catalog');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const hasActiveFilters =
    selectedCategory !== 'all' || selectedLevel !== 'all' || searchTerm.trim() !== '';

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedLevel('all');
    if (onSelectCategory) {
      onSelectCategory('all');
    }
  };

  return (
    <section id="course-catalog" className="py-12 sm:py-16 lg:py-20 bg-academic-soft-white border-b border-slate-200/80">
      <div className="app-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-cta text-xs font-bold uppercase tracking-wider border border-blue-200 shadow-2xs">
            <Sparkles size={13} className="text-amber-500" />
            <span>{t('pages.courses.badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-academic-heading font-heading">
            {t('pages.courses.courseListTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-academic-body">
            {t('pages.courses.courseListSubtitle')}
          </p>
        </div>

        {/* Filter Controls Hub */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('pages.courses.searchPlaceholder')}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-academic-heading placeholder:text-slate-400 focus:outline-hidden focus:border-cta focus:ring-2 focus:ring-cta/15 transition-all bg-academic-soft-white/60"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Level Select Dropdown */}
            <div className="flex items-center gap-2">
              <div className="relative flex-shrink-0 w-full sm:w-auto">
                <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full sm:w-auto pl-8 pr-8 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-academic-heading focus:outline-hidden focus:border-cta focus:ring-2 focus:ring-cta/15 transition-all bg-white cursor-pointer appearance-none"
                >
                  {levels.map((lvl) => (
                    <option key={lvl.id} value={lvl.id}>
                      {lvl.label}
                    </option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 pointer-events-none">
                  ▼
                </span>
              </div>

              {/* Clear Filter Button */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-3 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-red-600 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
                >
                  {t('pages.courses.clearFilters')}
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs (Horizontal Scrollable on Mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-slate-100">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border flex-shrink-0 ${
                    isActive
                      ? 'bg-cta text-white border-cta shadow-xs'
                      : 'bg-academic-soft-white text-slate-700 border-slate-200 hover:border-cta hover:text-cta'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between gap-4 mb-6 px-1">
          <span className="text-xs text-academic-muted font-semibold">
            {t('pages.courses.showingCourses', { count: filteredCourses.length })}
          </span>

          {totalPages > 1 && (
            <span className="text-xs font-semibold text-slate-500">
              {t('pages.courses.pageOf', { current: currentPage, total: totalPages })}
            </span>
          )}
        </div>

        {/* Course Grid: 2 Columns on Mobile, 3 Columns on Desktop */}
        {paginatedCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
              {paginatedCourses.map((course) => {
                const isFeatured = isFeaturedCourse(course.id);

                return (
                  <div
                    key={course.id}
                    className={`group relative bg-white rounded-3xl border flex flex-col justify-between transition-all duration-300 overflow-hidden ${
                      isFeatured
                        ? 'border-cta shadow-card hover:shadow-card-hover ring-2 ring-cta/15'
                        : 'border-slate-200 hover:border-cta/60 hover:shadow-card-hover'
                    }`}
                  >
                    {/* Popular Ribbon if featured */}
                    {isFeatured && (
                      <div className="absolute top-3 right-3 z-20 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm whitespace-nowrap">
                        <Flame size={12} className="text-amber-200 fill-amber-200 animate-pulse" />
                        <span>{t('pages.courses.popularBadge')}</span>
                      </div>
                    )}

                    {/* Card Thumbnail Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={course.image}
                        alt={course.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                      {/* Floating Badges on Image */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-academic-heading bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg shadow-xs whitespace-nowrap flex-shrink-0">
                          <Sparkles size={11} className="text-cta" />
                          <span>{course.badge}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-lg shadow-xs whitespace-nowrap flex-shrink-0">
                          <Clock size={11} className="text-sky-300" />
                          <span>{course.duration}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3.5">
                      <div className="space-y-1.5">
                        <h3 className="text-base sm:text-lg font-extrabold text-academic-heading font-heading group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {course.title}
                        </h3>
                        <p className="text-xs text-academic-body line-clamp-2 leading-relaxed">
                          {course.target}
                        </p>
                      </div>

                      {/* Core Specs */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-academic-body">
                        <div className="flex items-center gap-2 truncate">
                          <Target size={13} className="text-cta flex-shrink-0" />
                          <span className="truncate">
                            <strong>{t('pages.courses.levelLabel')}</strong> {course.level}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 truncate">
                          <Users size={13} className="text-cta flex-shrink-0" />
                          <span className="truncate">
                            <strong>{t('pages.courses.classSizeLabel')}</strong> {course.classSize}
                          </span>
                        </div>
                      </div>

                      {/* Checklist Highlights */}
                      <div className="space-y-1.5 pt-2 border-t border-dashed border-slate-100 text-xs text-academic-body">
                        <div className="flex items-start gap-2 leading-snug">
                          <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1 text-emerald-700 font-semibold">
                            {course.guarantee}
                          </span>
                        </div>

                        {course.highlights?.slice(0, 2).map((highlight) => (
                          <div key={`${course.id}-${highlight.slice(0, 15)}`} className="flex items-start gap-2 leading-snug">
                            <CheckCircle2 size={13} className="text-cta flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1 text-slate-700 font-medium">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Location Format */}
                      <div className="flex items-center gap-1.5 text-[11px] text-academic-muted pt-1 truncate">
                        <MapPin size={12} className="text-cta flex-shrink-0" />
                        <span className="truncate">{course.format}</span>
                      </div>

                      {/* Footer Action Button */}
                      <div className="pt-3 border-t border-slate-100">
                        <Link to={`/courses/${course.id}`} className="block">
                          <Button
                            fullWidth
                            size="sm"
                            variant="primary"
                            icon={<ArrowRight size={14} />}
                            className="font-bold shadow-xs"
                          >
                            {t('pages.courses.viewDetailBtn')}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    currentPage === 1
                      ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-cta hover:text-cta shadow-2xs'
                  }`}
                >
                  <ChevronLeft size={14} />
                  <span>{t('pages.courses.prevPage')}</span>
                </button>

                {/* Page Number Pills */}
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const isActive = currentPage === pageNum;
                    return (
                      <button
                        type="button"
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          isActive
                            ? 'bg-cta text-white border-cta shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-cta hover:text-cta'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    currentPage === totalPages
                      ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-cta hover:text-cta shadow-2xs'
                  }`}
                >
                  <span>{t('pages.courses.nextPage')}</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
            <p className="text-sm font-semibold text-slate-600">
              {t('pages.courses.noCoursesFound')}
            </p>
            <Button size="sm" variant="outline" onClick={handleResetFilters}>
              {t('pages.courses.clearFilters')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseCatalog;
