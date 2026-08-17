import React from 'react';
import { useTranslation } from 'react-i18next';
import { ZoomIn, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { SectionTitle } from '@/components/common';

import 'swiper/css';
import 'swiper/css/free-mode';

export const LifeAtHehMoments = ({ moments = [], onOpenMoment }) => {
  const { t } = useTranslation();

  if (!moments || moments.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-academic-border overflow-hidden">
      <div className="app-container">
        
        {/* Section Header (Without Arrow Controls) */}
        <div className="mb-8 text-left">
          <SectionTitle
            badge={t('pages.about.moments.badge')}
            title={t('pages.about.moments.title')}
            subtitle={t('pages.about.moments.subtitle')}
            className="mb-0 text-left"
          />
        </div>

      </div>

      {/* Full-Width Bleed Swiper Slider */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        {/* Subtle Edge Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          grabCursor={true}
          freeMode={true}
          loop={true}
          speed={5500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={20}
          slidesPerView={1.25}
          breakpoints={{
            480: { slidesPerView: 1.6, spaceBetween: 20 },
            640: { slidesPerView: 2.3, spaceBetween: 22 },
            1024: { slidesPerView: 3.3, spaceBetween: 24 },
            1280: { slidesPerView: 4.2, spaceBetween: 26 },
            1536: { slidesPerView: 5.2, spaceBetween: 28 },
          }}
          className="w-full !py-4 cursor-grab active:cursor-grabbing select-none [&_.swiper-wrapper]:!ease-linear"
        >
          {moments.map((item, index) => {
            const momentId = item.id || index + 1;
            const captionText = t(item.captionKey || item.titleKey || 'pages.about.moments.badge');
            const badgeTag = t(`db.teacher.moments.tags.${momentId}`, captionText);
            
            return (
              <SwiperSlide key={momentId} className="!h-auto">
                <button
                  type="button"
                  onClick={() => {
                    onOpenMoment?.({
                      image: item.image,
                      title: badgeTag,
                      caption: captionText,
                    });
                  }}
                  className="h-[280px] sm:h-[320px] lg:h-[340px] w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-2xs hover:shadow-xl hover:border-primary/50 transition-all duration-500 group cursor-grab active:cursor-grabbing relative text-left focus:outline-hidden"
                >
                  {/* Photo */}
                  <img
                    src={item.image}
                    alt={captionText}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out pointer-events-none"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent transition-opacity pointer-events-none" />

                  {/* Top Meaningful Category Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-[11px] font-bold text-slate-900 dark:text-sky-300 shadow-sm border border-white/40 pointer-events-none">
                    <Heart size={12} className="text-rose-500 fill-rose-500" />
                    <span>{badgeTag}</span>
                  </div>

                  {/* Bottom Caption & Zoom Button */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3 text-white pointer-events-none">
                    <p className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug drop-shadow-sm group-hover:text-sky-300 transition-colors">
                      {captionText}
                    </p>
                    <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <ZoomIn size={15} />
                    </div>
                  </div>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default LifeAtHehMoments;
