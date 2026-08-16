import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ZoomIn, Star, Sparkles, Trophy, BookOpen, ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '@/components/common';

export const StudentResultsCatalog = ({ results = [], onOpenScorecard }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterTabs = [
    { id: 'all', label: t('pages.results.filter.all') },
    { id: 'ielts', label: t('pages.results.filter.ielts') },
    { id: 'highschool', label: t('pages.results.filter.highschool') },
    { id: 'toeic', label: t('pages.results.filter.toeic') },
    { id: 'comm', label: t('pages.results.filter.comm') },
  ];

  const filteredResults = useMemo(() => {
    if (selectedCategory === 'all') return results;
    if (selectedCategory === 'ielts') return results.filter((r) => r.category === 'ielts');
    if (selectedCategory === 'highschool') return results.filter((r) => r.category === 'highschool');
    if (selectedCategory === 'toeic') return results.filter((r) => r.category === 'toeic');
    if (selectedCategory === 'comm') return results.filter((r) => r.category === 'comm');
    return results;
  }, [results, selectedCategory]);

  const featuredResult = useMemo(() => {
    return filteredResults.find((r) => r.isFeatured) || filteredResults[0];
  }, [filteredResults]);

  const regularResults = useMemo(() => {
    if (!featuredResult) return filteredResults;
    return filteredResults.filter((r) => r.id !== featuredResult.id);
  }, [filteredResults, featuredResult]);

  return (
    <section id="results-catalog" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.results.badge')}
          title={t('pages.results.resultsCatalog.title')}
          subtitle={t('pages.results.resultsCatalog.subtitle')}
        />

        {/* 1. Category Filter Pill Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-12 no-scrollbar">
          {filterTabs.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 ${
                  isSelected
                    ? 'bg-primary text-white shadow-md shadow-primary/20 ring-2 ring-primary/30'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
                onClick={() => setSelectedCategory(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 2. Asymmetric / Masonry Results Grid */}
        {filteredResults.length === 0 ? (
          <div className="text-center py-12 bg-academic-soft-white rounded-3xl border border-slate-200">
            <BookOpen className="mx-auto text-slate-400 mb-3" size={36} />
            <p className="text-sm text-slate-600 font-medium">
              Chưa có dữ liệu bảng điểm cho danh mục này. Vui lòng chọn danh mục khác.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* Top Layout: 1 Featured Big Result (7 cols) + 2 Medium Results (5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              
              {/* Featured Big Card (7 Cols) */}
              {featuredResult && (
                <div className="lg:col-span-7 rounded-3xl bg-academic-soft-white p-5 sm:p-7 border border-academic-border shadow-card flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:border-academic-cta/50">
                  <div className="space-y-5">
                    
                    {/* Header Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
                        <Star size={13} className="text-amber-500 fill-amber-500" />
                        <span>{t('pages.results.resultsCatalog.featuredBadge')}</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cta bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-100">
                          <Sparkles size={12} />
                          {featuredResult.badge || 'Verified'}
                        </span>
                        <span className="text-xs text-academic-muted font-semibold">
                          {featuredResult.examType}
                        </span>
                      </div>
                    </div>

                    {/* Uncropped Contain Scorecard Showcase */}
                    <button
                      type="button"
                      className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/90 flex items-center justify-center p-3 cursor-pointer group-hover:border-primary/40 transition-all duration-300 shadow-inner text-left focus:outline-hidden focus:ring-2 focus:ring-primary/50"
                      onClick={() => onOpenScorecard && onOpenScorecard(featuredResult)}
                    >
                      <img
                        src={featuredResult.image}
                        alt={featuredResult.caption}
                        className="w-full h-full object-contain rounded-xl drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 backdrop-blur-2xs flex items-center justify-center gap-2 text-white transition-opacity rounded-2xl">
                        <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-2 text-xs font-bold text-white shadow-lg">
                          <ZoomIn size={16} />
                          <span>{t('pages.results.resultsCatalog.viewScoreModal')}</span>
                        </div>
                      </div>
                    </button>

                    {/* Score & Student Details */}
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-academic-heading font-heading">
                            {featuredResult.studentName || featuredResult.caption}
                          </h3>
                          <p className="text-xs text-academic-muted font-medium">
                            {featuredResult.scoreType} • {featuredResult.target}
                          </p>
                        </div>

                        {/* Huge Score Badge */}
                        <div className="inline-flex items-baseline gap-1.5 px-4 py-2 rounded-2xl bg-primary text-white shadow-md self-start sm:self-auto">
                          <span className="text-xs uppercase font-bold text-blue-200">Overall</span>
                          <span className="text-2xl sm:text-3xl font-black font-heading text-amber-300">
                            {featuredResult.score}
                          </span>
                        </div>
                      </div>

                      {/* 4 Skills Breakdown */}
                      {featuredResult.skills && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                          {featuredResult.skills.listening && (
                            <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                              <div className="text-[11px] font-bold text-slate-500 uppercase">{t('pages.results.resultsCatalog.listening')}</div>
                              <div className="text-base font-extrabold text-cta font-heading">{featuredResult.skills.listening}</div>
                            </div>
                          )}
                          {featuredResult.skills.reading && (
                            <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                              <div className="text-[11px] font-bold text-slate-500 uppercase">{t('pages.results.resultsCatalog.reading')}</div>
                              <div className="text-base font-extrabold text-cta font-heading">{featuredResult.skills.reading}</div>
                            </div>
                          )}
                          {featuredResult.skills.writing && (
                            <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                              <div className="text-[11px] font-bold text-slate-500 uppercase">{t('pages.results.resultsCatalog.writing')}</div>
                              <div className="text-base font-extrabold text-cta font-heading">{featuredResult.skills.writing}</div>
                            </div>
                          )}
                          {featuredResult.skills.speaking && (
                            <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                              <div className="text-[11px] font-bold text-slate-500 uppercase">{t('pages.results.resultsCatalog.speaking')}</div>
                              <div className="text-base font-extrabold text-cta font-heading">{featuredResult.skills.speaking}</div>
                            </div>
                          )}
                        </div>
                      )}

                      {featuredResult.description && (
                        <p className="text-xs text-slate-600 leading-relaxed bg-white/80 p-3 rounded-xl border border-slate-200/60">
                          {featuredResult.description}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Card Action Link */}
                  <button
                    type="button"
                    className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-cta font-bold cursor-pointer hover:text-primary transition-colors text-left w-full"
                    onClick={() => onOpenScorecard && onOpenScorecard(featuredResult)}
                  >
                    <span className="flex items-center gap-1.5">
                      <ZoomIn size={15} />
                      {t('pages.results.resultsCatalog.viewScoreModal')}
                    </span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              )}

              {/* Regular Side Result Cards (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                <div className="space-y-3 sm:space-y-3.5">
                  {regularResults.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      role="button"
                      tabIndex={0}
                      className="w-full text-left bg-academic-soft-white rounded-2xl p-3 sm:p-4 border border-academic-border hover:border-academic-cta hover:shadow-card hover:ring-2 hover:ring-academic-cta/20 cursor-pointer transition-all duration-200 flex items-center gap-3 sm:gap-4 group focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                      onClick={() => onOpenScorecard && onOpenScorecard(item)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onOpenScorecard && onOpenScorecard(item);
                        }
                      }}
                    >
                      {/* Thumbnail with uncropped contain image */}
                      <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-xl overflow-hidden bg-white flex-shrink-0 relative border border-slate-200/90 p-1 group-hover:border-primary/40 transition-colors">
                        <img
                          src={item.image}
                          alt={item.caption}
                          className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-academic-heading/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-lg">
                          <ZoomIn size={18} />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="space-y-1 sm:space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[10px] font-bold text-cta bg-academic-light-blue px-2 py-0.5 rounded-md border border-blue-200 truncate max-w-[65%] whitespace-nowrap min-w-0">
                            {item.badge || 'Verified'}
                          </span>
                          {item.score && (
                            <span className="text-sm font-black text-primary font-heading flex-shrink-0">
                              {item.score}
                            </span>
                          )}
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-academic-heading font-heading leading-snug line-clamp-1 group-hover:text-cta transition-colors">
                          {item.studentName || item.caption}
                        </h4>

                        {item.skills && (
                          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[10px] text-slate-600 font-medium">
                            {item.skills.reading && (
                              <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200">
                                R: {item.skills.reading}
                              </span>
                            )}
                            {item.skills.listening && (
                              <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200">
                                L: {item.skills.listening}
                              </span>
                            )}
                            {item.skills.english && (
                              <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200">
                                {t('pages.results.resultsCatalog.englishSubject')}: {item.skills.english}
                              </span>
                            )}
                          </div>
                        )}

                        <p className="text-[11px] text-academic-muted line-clamp-1">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Remaining Result Cards in 3 Columns Grid if any */}
            {regularResults.length > 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
                {regularResults.slice(3).map((item) => (
                  <div
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    className="rounded-3xl bg-academic-soft-white border border-slate-200 shadow-2xs hover:border-academic-cta hover:shadow-card-hover hover:ring-2 hover:ring-academic-cta/20 transition-all duration-300 overflow-hidden group flex flex-col justify-between cursor-pointer"
                    onClick={() => onOpenScorecard && onOpenScorecard(item)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onOpenScorecard && onOpenScorecard(item);
                      }
                    }}
                  >
                    <div className="p-3.5 bg-white border-b border-slate-100 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-academic-light-blue text-cta text-[11px] font-bold border border-blue-200">
                        {item.badge || 'Verified'}
                      </span>
                      {item.score && (
                        <span className="px-2.5 py-0.5 rounded-xl bg-primary text-white text-xs font-black font-heading">
                          {item.score}
                        </span>
                      )}
                    </div>

                    <div className="h-48 sm:h-52 overflow-hidden bg-slate-900/5 p-2 flex items-center justify-center relative">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-xl">
                        <div className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1 text-xs font-bold">
                          <ZoomIn size={14} />
                          <span>Xem bảng điểm</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white border-t border-slate-100 space-y-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-academic-heading font-heading">
                        {item.studentName || item.caption}
                      </h4>
                      <p className="text-[11px] text-slate-600 line-clamp-2">
                        {item.description || item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};

export default StudentResultsCatalog;
