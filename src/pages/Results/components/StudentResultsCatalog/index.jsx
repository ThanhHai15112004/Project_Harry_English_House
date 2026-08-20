import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ZoomIn,
  Trophy,
  Award,
  GraduationCap,
  Layers,
  Star,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { SectionTitle } from '@/components/common';
import { formatStudentName } from '@/core';

export const StudentResultsCatalog = ({ results = [], onOpenScorecard }) => {
  const { t, i18n } = useTranslation();
  const [selectedTier, setSelectedTier] = useState('all');

  const filterTabs = [
    {
      id: 'all',
      label: t('pages.results.filter.all'),
      icon: <Layers size={15} />,
    },
    {
      id: 'tier1',
      label: t('pages.results.filter.tier1'),
      icon: <Trophy size={15} className="text-achievement" />,
    },
    {
      id: 'tier2',
      label: t('pages.results.filter.tier2'),
      icon: <Award size={15} className="text-cta" />,
    },
    {
      id: 'tier3',
      label: t('pages.results.filter.tier3'),
      icon: <GraduationCap size={15} className="text-emerald-600" />,
    },
  ];

  // Phân tầng học viên
  // Tier 1: IELTS 8.0 - 8.5+
  const tier1Items = useMemo(() => {
    return results.filter((r) => r.category === 'ielts' && Number.parseFloat(r.score) >= 8.0);
  }, [results]);

  // Tier 2: IELTS 7.0 - 7.5 & TOEIC
  const tier2Items = useMemo(() => {
    return results.filter(
      (r) => (r.category === 'ielts' && Number.parseFloat(r.score) < 8.0) || r.category === 'toeic'
    );
  }, [results]);

  // Tier 3: Tuyển sinh 10 & Điểm 9.0+
  const tier3Items = useMemo(() => {
    return results.filter((r) => r.category === 'highschool');
  }, [results]);

  // Render từng card bảng điểm chuẩn hóa
  const renderScorecard = (item, themeColor = 'gold') => {
    const isGold = themeColor === 'gold';
    const isEmerald = themeColor === 'emerald';
    
    let borderAccent = 'hover:border-academic-cta/50';
    let scoreBadgeStyle = 'bg-primary text-white';
    let tagStyle = 'bg-academic-light-blue text-primary border-blue-200';
    
    if (isGold) {
      borderAccent = 'hover:border-achievement hover:ring-2 hover:ring-achievement/20';
      scoreBadgeStyle = 'bg-gradient-to-r from-achievement to-amber-600 text-white';
      tagStyle = 'bg-achievement-light text-achievement border-achievement/30';
    } else if (isEmerald) {
      borderAccent = 'hover:border-emerald-500 hover:ring-2 hover:ring-emerald-200';
      scoreBadgeStyle = 'bg-emerald-600 text-white';
      tagStyle = 'bg-emerald-50 text-emerald-900 border-emerald-200';
    }

    const displayName = formatStudentName(item.studentName, i18n.language);
    let tagLabel = item.category;
    if (item.badgeKey) {
      tagLabel = t(item.badgeKey);
    } else if (item.category === 'highschool') {
      tagLabel = t('pages.results.categoryHighschool', 'Tuyển Sinh 10');
    }

    return (
      <div
        key={item.id}
        className={`rounded-2xl sm:rounded-3xl bg-white p-3 sm:p-5 border border-slate-200/90 shadow-card hover:shadow-card-hover ${borderAccent} transition-all duration-300 flex flex-col justify-between group`}
      >
        <div className="space-y-2.5 sm:space-y-3.5">
          {/* Card Top: Tag & Score Badge */}
          <div className="flex items-center justify-between gap-1.5 sm:gap-2">
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[9px] sm:text-[11px] font-extrabold uppercase font-heading border truncate max-w-[55%] ${tagStyle}`}
            >
              {isGold && <Trophy size={11} className="text-achievement flex-shrink-0" />}
              {isEmerald && <GraduationCap size={11} className="text-emerald-600 flex-shrink-0" />}
              {!isGold && !isEmerald && <Sparkles size={11} className="text-cta flex-shrink-0" />}
              <span className="truncate">{tagLabel}</span>
            </span>

            <div className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs flex-shrink-0 ${scoreBadgeStyle}`}>
              <span className="text-[9px] sm:text-xs uppercase font-bold text-white/90">Band</span>
              <span className="text-xs sm:text-base font-black font-heading tracking-tight">
                {item.score}
              </span>
            </div>
          </div>

          {/* Uncropped Contain Scorecard Showcase Box */}
          <button
            type="button"
            className="relative h-36 sm:h-56 w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/90 flex items-center justify-center p-1.5 sm:p-2.5 cursor-pointer group-hover:border-primary/40 transition-all duration-300 shadow-inner text-left focus:outline-hidden focus:ring-2 focus:ring-primary/40"
            onClick={() => onOpenScorecard?.({ ...item, studentName: displayName })}
            title={t('pages.results.zoomTitle', 'Bấm để phóng to xem bảng điểm đầy đủ')}
          >
            <img
              src={item.image}
              alt={displayName}
              className="w-full h-full object-contain rounded-lg sm:rounded-xl drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center gap-2 text-white transition-opacity rounded-xl sm:rounded-2xl">
              <div className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-white shadow-lg">
                <ZoomIn size={13} />
                <span>{t('pages.results.resultsCatalog.viewScoreModal')}</span>
              </div>
            </div>

            {/* Corner IDP / Certified Stamp */}
            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-white/90 backdrop-blur-xs text-slate-700 text-[9px] sm:text-[10px] font-extrabold border border-slate-200 shadow-2xs flex items-center gap-1">
              <ShieldCheck size={10} className="text-primary" />
              <span className="hidden sm:inline">{t('pages.results.verifiedBadge', 'Đối chứng')}</span>
            </div>
          </button>

          {/* Student Info & Skills Breakdown */}
          <div className="space-y-2 pt-0.5 text-left">
            <div>
              <h3 className="text-xs sm:text-lg font-bold text-academic-heading font-heading leading-tight group-hover:text-cta transition-colors truncate">
                {displayName}
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium line-clamp-1 mt-0.5">
                {item.targetKey ? t(item.targetKey) : (item.course || 'Học viên Harry English House')}
              </p>
            </div>

            {/* Skills Breakdown Pills */}
            {item.skills && (
              <div className="grid grid-cols-2 gap-1 pt-0.5">
                {item.skills.listening && (
                  <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[9px] sm:text-[11px]">
                    <span className="text-slate-500 font-medium">L:</span>
                    <span className="font-extrabold text-academic-heading font-heading">{item.skills.listening}</span>
                  </div>
                )}
                {item.skills.reading && (
                  <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[9px] sm:text-[11px]">
                    <span className="text-slate-500 font-medium">R:</span>
                    <span className="font-extrabold text-academic-heading font-heading">{item.skills.reading}</span>
                  </div>
                )}
                {item.skills.writing && (
                  <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[9px] sm:text-[11px]">
                    <span className="text-slate-500 font-medium">W:</span>
                    <span className="font-extrabold text-academic-heading font-heading">{item.skills.writing}</span>
                  </div>
                )}
                {item.skills.speaking && (
                  <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[9px] sm:text-[11px]">
                    <span className="text-slate-500 font-medium">S:</span>
                    <span className="font-extrabold text-academic-heading font-heading">{item.skills.speaking}</span>
                  </div>
                )}
                {item.skills.english && (
                  <div className="col-span-2 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[9px] sm:text-[11px]">
                    <span className="text-slate-500 font-medium">{t('pages.results.skills.english', 'Tiếng Anh')}</span>
                    <span className="font-extrabold text-emerald-700 font-heading">{item.skills.english} {t('pages.results.pointsSuffix', 'đ')}</span>
                  </div>
                )}
              </div>
            )}

            {/* Description or Quote */}
            {item.descriptionKey && (
              <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed bg-academic-soft-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-slate-200/70 line-clamp-2">
                {t(item.descriptionKey)}
              </p>
            )}
          </div>
        </div>

        {/* Card Footer Action */}
        <button
          type="button"
          className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs text-cta font-bold cursor-pointer hover:text-primary transition-colors text-left w-full focus:outline-hidden"
          onClick={() => onOpenScorecard?.({ ...item, studentName: displayName })}
        >
          <span className="flex items-center gap-1">
            <ZoomIn size={12} />
            <span>{t('pages.results.resultsCatalog.viewScoreModal')}</span>
          </span>
          <ArrowUpRight size={12} />
        </button>
      </div>
    );
  };

  return (
    <section id="results-catalog" className="py-14 sm:py-18 lg:py-22 bg-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.results.badge')}
          title={t('pages.results.resultsCatalog.title')}
          subtitle={t('pages.results.resultsCatalog.subtitle')}
        />

        {/* Category Tier Filter Pills with Lucide Icons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-14 no-scrollbar">
          {filterTabs.map((tab) => {
            const isSelected = selectedTier === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 focus:outline-hidden ${
                  isSelected
                    ? 'bg-primary text-white shadow-md shadow-primary/20 ring-2 ring-primary/30 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => setSelectedTier(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TIER-BASED LEADERBOARD SECTIONS (2 Columns on Mobile) */}
        {/* ========================================================================= */}
        <div className="space-y-10 sm:space-y-16">
          
          {/* 1. TIER 1: CLB IELTS 8.0 - 8.5+ */}
          {(selectedTier === 'all' || selectedTier === 'tier1') && tier1Items.length > 0 && (
            <div className="space-y-4 sm:space-y-6">
              {/* Tier Banner Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 bg-gradient-to-r from-achievement-light via-white to-transparent p-3.5 sm:p-5 rounded-2xl border border-achievement/40 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-academic-heading text-achievement flex items-center justify-center font-bold shadow-md border border-achievement/40 flex-shrink-0">
                    <Trophy size={18} className="text-achievement drop-shadow-xs sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-black text-academic-heading font-heading tracking-tight">
                      {t('pages.results.resultsCatalog.tier1Title')}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-academic-body font-medium mt-0.5">
                      {t('pages.results.resultsCatalog.tier1Sub')}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-academic-heading text-[11px] sm:text-xs font-bold font-heading self-start sm:self-auto border border-achievement/40 shadow-2xs">
                  <Star size={13} className="fill-achievement text-achievement" />
                  <span>{tier1Items.length} {t('pages.results.resultsCatalog.tier1Count', 'Bảng điểm kỷ lục')}</span>
                </div>
              </div>

              {/* Tier 1 Scorecards Grid (2 Cols Mobile, 3 Cols Desktop) */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {tier1Items.map((item) => renderScorecard(item, 'gold'))}
              </div>
            </div>
          )}

          {/* 2. TIER 2: CLB IELTS 7.0 - 7.5 & TOEIC */}
          {(selectedTier === 'all' || selectedTier === 'tier2') && tier2Items.length > 0 && (
            <div className="space-y-4 sm:space-y-6">
              {/* Tier Banner Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 bg-gradient-to-r from-academic-light-blue via-white to-transparent p-3.5 sm:p-5 rounded-2xl border border-blue-200 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-academic-heading text-sky-400 flex items-center justify-center font-bold shadow-md border border-blue-400/30 flex-shrink-0">
                    <Award size={18} className="text-sky-300 drop-shadow-xs sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-black text-academic-heading font-heading tracking-tight">
                      {t('pages.results.resultsCatalog.tier2Title')}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-academic-body font-medium mt-0.5">
                      {t('pages.results.resultsCatalog.tier2Sub')}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-primary text-[11px] sm:text-xs font-bold font-heading self-start sm:self-auto border border-blue-200 shadow-2xs">
                  <ShieldCheck size={13} className="text-primary" />
                  <span>{tier2Items.length} {t('pages.results.resultsCatalog.tier2Count', 'Kết quả đạt chuẩn')}</span>
                </div>
              </div>

              {/* Tier 2 Scorecards Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {tier2Items.map((item) => renderScorecard(item, 'blue'))}
              </div>
            </div>
          )}

          {/* 3. TIER 3: TUYỂN SINH 10 & ĐIỂM 9.0+ */}
          {(selectedTier === 'all' || selectedTier === 'tier3') && tier3Items.length > 0 && (
            <div className="space-y-4 sm:space-y-6">
              {/* Tier Banner Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 bg-gradient-to-r from-emerald-50 via-white to-transparent p-3.5 sm:p-5 rounded-2xl border border-emerald-200 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-800 text-emerald-100 flex items-center justify-center font-bold shadow-md border border-emerald-600/30 flex-shrink-0">
                    <GraduationCap size={18} className="text-emerald-200 drop-shadow-xs sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-black text-emerald-950 font-heading tracking-tight">
                      {t('pages.results.resultsCatalog.tier3Title')}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-emerald-800/80 font-medium mt-0.5">
                      {t('pages.results.resultsCatalog.tier3Sub')}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-emerald-900 text-[11px] sm:text-xs font-bold font-heading self-start sm:self-auto border border-emerald-300 shadow-2xs">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>{tier3Items.length} {t('pages.results.resultsCatalog.tier3Count', 'Thủ khoa & Điểm 9.0+')}</span>
                </div>
              </div>

              {/* Tier 3 Scorecards Grid (2 Cols) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {tier3Items.map((item) => renderScorecard(item, 'emerald'))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default StudentResultsCatalog;


