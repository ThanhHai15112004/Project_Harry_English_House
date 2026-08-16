import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ZoomIn, ChevronDown, ChevronUp, Handshake } from 'lucide-react';
import { SectionTitle, Button } from '@/components/common';

export const PartnershipGallery = ({ collaborations = [], onOpenPhoto }) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  if (!collaborations || collaborations.length === 0) return null;

  const initialCount = 6;
  const visibleItems = showAll ? collaborations : collaborations.slice(0, initialCount);
  const hasMore = collaborations.length > initialCount;

  return (
    <section className="py-16 sm:py-24 bg-academic-soft-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.about.partnerships.badge')}
          title={t('pages.about.partnerships.title')}
          subtitle={t('pages.about.partnerships.subtitle')}
        />

        {/* Partnership Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visibleItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xs hover:border-academic-cta hover:shadow-card hover:ring-2 hover:ring-academic-cta/20 transition-all duration-300 group cursor-pointer flex flex-col justify-between text-left focus:outline-hidden focus:ring-2 focus:ring-primary/40"
              onClick={() =>
                onOpenPhoto?.({
                  image: item.image,
                  title: item.title,
                  caption: `Hoạt động đối tác & giao lưu học thuật HEH (${item.title})`,
                })
              }
            >
              {/* Photo Frame */}
              <div className="h-52 sm:h-56 w-full overflow-hidden bg-slate-900/5 relative p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-academic-heading/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-2xl m-2">
                  <div className="px-3.5 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-xs font-bold shadow-md">
                    <ZoomIn size={14} />
                    <span>Xem hoạt động</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-2 w-full">
                <div className="min-w-0">
                  <p className="text-xs font-bold text-academic-heading truncate font-heading">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-academic-muted truncate">
                    Đối tác chiến lược & Khảo thí
                  </p>
                </div>
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-cta flex items-center justify-center flex-shrink-0">
                  <Handshake size={14} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* View More / Less Toggle */}
        {hasMore && (
          <div className="text-center pt-8">
            <Button
              variant="outline"
              size="md"
              className="bg-white hover:bg-slate-50 border-slate-300 font-bold text-academic-heading shadow-2xs cursor-pointer"
              icon={showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? t('pages.about.partnerships.viewLessBtn')
                : t('pages.about.partnerships.viewMoreBtn')}
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};

export default PartnershipGallery;
