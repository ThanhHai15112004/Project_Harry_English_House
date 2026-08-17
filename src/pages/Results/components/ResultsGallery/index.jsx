import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { ZoomIn, ShieldCheck } from 'lucide-react';
import { SectionTitle } from '@/components/common';

import 'swiper/css';
import 'swiper/css/free-mode';

export const ResultsGallery = ({ galleryItems = [], onOpenGalleryItem }) => {
  const { t } = useTranslation();
  const pointerPosRef = useRef({ x: 0, y: 0 });

  if (!galleryItems || galleryItems.length === 0) return null;

  // Nhân đôi mảng để Swiper loop vô tận mượt mà
  const loopedGallery = [...galleryItems, ...galleryItems];

  const handlePointerDown = (e) => {
    pointerPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleCardClick = (item, e) => {
    const diffX = Math.abs(e.clientX - pointerPosRef.current.x);
    const diffY = Math.abs(e.clientY - pointerPosRef.current.y);
    // Nếu di chuyển chuột > 6px nghĩa là đang nắm kéo -> Tuyệt đối không mở modal
    if (diffX > 6 || diffY > 6) {
      return;
    }
    onOpenGalleryItem?.(item);
  };

  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-white border-b border-academic-border overflow-hidden">
      {/* Section Header */}
      <div className="app-container mb-8 sm:mb-12">
        <SectionTitle
          badge={t('pages.results.gallery.badge')}
          title={t('pages.results.gallery.title')}
          subtitle={t('pages.results.gallery.subtitle')}
        />
      </div>

      {/* Full-Width Continuous Carousel (Trái sang Phải - Ngược Hướng) */}
      <div className="w-full relative px-2 sm:px-4">
        {/* Subtle Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={20}
          loop={true}
          speed={6000}
          freeMode={{ enabled: true, momentum: false }}
          grabCursor={true}
          preventClicks={true}
          preventClicksPropagation={true}
          touchRatio={1}
          threshold={5}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true, // Chạy ngược hướng (Trái sang Phải)
          }}
          className="pb-4 pt-1"
        >
          {loopedGallery.map((item, idx) => (
            <SwiperSlide key={`${item.id}-${idx}`} style={{ width: '290px' }} className="h-auto">
              <button
                type="button"
                className="w-full h-full rounded-3xl bg-academic-soft-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-achievement/50 hover:ring-2 hover:ring-achievement/20 transition-all duration-300 overflow-hidden group cursor-grab active:cursor-grabbing flex flex-col justify-between text-left select-none focus:outline-hidden"
                onPointerDown={handlePointerDown}
                onClick={(e) => handleCardClick(item, e)}
              >
                {/* Image Frame */}
                <div className="h-48 sm:h-56 bg-slate-900/5 p-3 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900/10 transition-colors w-full pointer-events-none">
                  <img
                    src={item.image}
                    alt={t(item.titleKey)}
                    className="w-full h-full object-contain rounded-xl drop-shadow-sm group-hover:scale-105 transition-transform duration-500 select-none"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-xl m-2.5">
                    <div className="px-3.5 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-xs font-bold shadow-md">
                      <ZoomIn size={14} />
                      <span>{t('pages.results.resultsCatalog.viewScoreModal')}</span>
                    </div>
                  </div>

                  {/* Corner Verified Badge */}
                  <div className="absolute top-3.5 right-3.5 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-slate-700 text-[10px] font-extrabold border border-slate-200 shadow-2xs flex items-center gap-1">
                    <ShieldCheck size={11} className="text-achievement" />
                    <span>Chứng thực</span>
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between gap-2 w-full min-w-0">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-academic-heading truncate font-heading group-hover:text-cta transition-colors">
                      {t(item.titleKey)}
                    </p>
                    <p className="text-[10px] text-academic-muted truncate mt-0.5">
                      {t(item.typeKey)}
                    </p>
                  </div>
                  {item.tagKey && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-achievement-light text-achievement border border-achievement/30 flex-shrink-0 max-w-[45%] truncate whitespace-nowrap">
                      {t(item.tagKey)}
                    </span>
                  )}
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ResultsGallery;

