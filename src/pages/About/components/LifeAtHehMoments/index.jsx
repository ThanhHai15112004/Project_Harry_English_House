import React from 'react';
import { useTranslation } from 'react-i18next';
import { ZoomIn } from 'lucide-react';
import { SectionTitle } from '@/components/common';

export const LifeAtHehMoments = ({ moments = [], onOpenMoment }) => {
  const { t } = useTranslation();

  if (!moments || moments.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.about.moments.badge')}
          title={t('pages.about.moments.title')}
          subtitle={t('pages.about.moments.subtitle')}
        />

        {/* Masonry Grid (Asymmetric 6-9 Photos) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-4">
          {moments.slice(0, 6).map((item, index) => {
            const isLarge = index === 0 || index === 4;
            return (
              <button
                key={item.id || index}
                type="button"
                className={`rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xs hover:shadow-card hover:border-academic-cta/50 transition-all duration-300 group cursor-pointer relative text-left focus:outline-hidden focus:ring-2 focus:ring-primary/40 ${
                  isLarge ? 'md:row-span-2 min-h-[260px] md:min-h-[380px]' : 'min-h-[180px] sm:min-h-[220px]'
                }`}
                onClick={() =>
                  onOpenMoment?.({
                    image: item.image,
                    title: item.caption || 'Khoảnh khắc tại HEH',
                    caption: item.caption || 'Khoảnh khắc học tập và kết nối tại Harry English House',
                  })
                }
              >
                <img
                  src={item.image}
                  alt={item.caption || 'Khoảnh khắc HEH'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-academic-heading/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white flex items-center justify-between w-full">
                    <span className="text-xs font-bold truncate max-w-[80%]">{item.caption}</span>
                    <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LifeAtHehMoments;
