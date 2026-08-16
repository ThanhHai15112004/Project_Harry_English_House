import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ZoomIn, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionTitle, Button } from '@/components/common';

export const ResultsGallery = ({ galleryItems = [], onOpenGalleryItem }) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  if (!galleryItems || galleryItems.length === 0) return null;

  const initialCount = 8;
  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, initialCount);
  const hasMore = galleryItems.length > initialCount;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.results.gallery.badge')}
          title={t('pages.results.gallery.title')}
          subtitle={t('pages.results.gallery.subtitle')}
        />

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              className="rounded-2xl bg-academic-soft-white border border-slate-200/90 shadow-2xs hover:border-academic-cta hover:shadow-card hover:ring-2 hover:ring-academic-cta/20 transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between"
              onClick={() => onOpenGalleryItem && onOpenGalleryItem(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenGalleryItem && onOpenGalleryItem(item);
                }
              }}
            >
              {/* Image Frame */}
              <div className="h-44 sm:h-52 bg-slate-900/5 p-2 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900/10 transition-colors">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-xl m-1.5">
                  <div className="px-3 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-xs font-bold shadow-md">
                    <ZoomIn size={14} />
                    <span>Xem chi tiết</span>
                  </div>
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs font-bold text-academic-heading truncate font-heading">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-academic-muted truncate">
                    {item.type || 'Chứng nhận khảo thí'}
                  </p>
                </div>
                {item.tag && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-academic-light-blue text-cta flex-shrink-0">
                    {item.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Toggle Button */}
        {hasMore && (
          <div className="text-center pt-10">
            <Button
              variant="outline"
              size="md"
              className="bg-white hover:bg-slate-50 border-slate-300 font-bold text-academic-heading shadow-2xs cursor-pointer"
              icon={showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? t('pages.results.gallery.viewLessBtn')
                : t('pages.results.gallery.viewMoreBtn', { count: galleryItems.length })}
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ResultsGallery;
