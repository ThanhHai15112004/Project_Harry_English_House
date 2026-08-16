import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, MessageSquare, ZoomIn, BookOpen, ExternalLink } from 'lucide-react';
import { SectionTitle } from '@/components/common';
import { APP_INFO } from '@/core';

export const RealFeedbacksGrid = ({ feedbacks = [], onOpenFeedback }) => {
  const { t } = useTranslation();

  if (!feedbacks || feedbacks.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-academic-soft-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.results.realFeedback.badge')}
          title={t('pages.results.realFeedback.title')}
          subtitle={t('pages.results.realFeedback.subtitle')}
        />

        {/* Real Screenshots Grid (4 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {feedbacks.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              className="rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-academic-cta hover:shadow-card-hover hover:ring-2 hover:ring-academic-cta/20 transition-all duration-300 overflow-hidden group flex flex-col justify-between cursor-pointer"
              onClick={() => onOpenFeedback && onOpenFeedback(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenFeedback && onOpenFeedback(item);
                }
              }}
            >
              {/* Top Meta Bar */}
              <div className="px-3.5 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between gap-2 min-w-0">
                <span className="text-[11px] font-bold text-academic-heading truncate flex-1 min-w-0 font-heading">
                  {item.author || 'Học viên HEH'}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex-shrink-0 max-w-[55%] whitespace-nowrap min-w-0">
                  <Star size={11} className="text-amber-500 fill-amber-500 flex-shrink-0" />
                  <span className="truncate">{item.tag || 'Đánh giá 5 sao'}</span>
                </span>
              </div>

              {/* Screenshot Contain Frame */}
              <div className="h-64 sm:h-72 overflow-hidden bg-slate-900/5 p-2 flex items-center justify-center relative group-hover:bg-slate-900/10 transition-colors w-full">
                <img
                  src={item.image}
                  alt={item.caption || 'Cảm nhận học viên'}
                  className="w-full h-full object-contain rounded-xl drop-shadow-2xs group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-xl m-2">
                  <div className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-xs font-bold shadow-md">
                    <ZoomIn size={15} />
                    <span>{t('pages.results.realFeedback.viewFullChat')}</span>
                  </div>
                </div>
              </div>

              {/* Caption & Course Tag */}
              <div className="p-3.5 text-left bg-white border-t border-slate-100 space-y-1.5 min-w-0">
                <p className="text-xs font-medium text-slate-700 italic line-clamp-2 leading-relaxed">
                  "{item.caption}"
                </p>
                {item.course && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-academic-muted font-semibold truncate max-w-full min-w-0 whitespace-nowrap">
                    <BookOpen size={12} className="text-cta flex-shrink-0" />
                    <span className="truncate">{item.course}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fanpage Link Button */}
        <div className="text-center pt-10 sm:pt-12">
          <a
            href={APP_INFO.SOCIAL_LINKS.FEEDBACK_POST || APP_INFO.SOCIAL_LINKS.FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-blue-200 text-primary font-bold text-xs sm:text-sm shadow-xs hover:shadow-md hover:bg-blue-50 transition-all cursor-pointer"
          >
            <MessageSquare size={16} className="text-cta" />
            <span>{t('pages.results.realFeedback.viewFanpageBtn')}</span>
            <ExternalLink size={14} className="text-academic-muted" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default RealFeedbacksGrid;
