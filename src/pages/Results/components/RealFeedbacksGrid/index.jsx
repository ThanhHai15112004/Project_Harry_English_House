import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Star, MessageSquare, ZoomIn, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { SectionTitle } from '@/components/common';
import { APP_INFO } from '@/core';

import 'swiper/css';
import 'swiper/css/free-mode';

export const RealFeedbacksGrid = ({ feedbacks = [], onOpenFeedback }) => {
  const { t } = useTranslation();
  const pointerPosRef = useRef({ x: 0, y: 0 });

  if (!feedbacks || feedbacks.length === 0) return null;

  // Nhân đôi mảng để Swiper loop vô tận mượt mà không bị giật
  const loopedFeedbacks = [...feedbacks, ...feedbacks];

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
    onOpenFeedback?.(item);
  };

  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-academic-soft-white border-b border-academic-border overflow-hidden">
      {/* Section Header */}
      <div className="app-container mb-8 sm:mb-12">
        <SectionTitle
          badge={t('pages.results.realFeedback.badge')}
          title={t('pages.results.realFeedback.title')}
          subtitle={t('pages.results.realFeedback.subtitle')}
        />
      </div>

      {/* Full-Width Continuous Carousel (Phải sang Trái) */}
      <div className="w-full relative px-2 sm:px-4">
        {/* Subtle Edge Fade Gradients for smooth infinity feeling */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-academic-soft-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-academic-soft-white to-transparent z-10 pointer-events-none" />

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
            reverseDirection: false, // Chạy từ Phải sang Trái
          }}
          className="pb-4 pt-1"
        >
          {loopedFeedbacks.map((item, idx) => (
            <SwiperSlide key={`${item.id}-${idx}`} style={{ width: '310px' }} className="h-auto">
              <button
                type="button"
                className="w-full h-full rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-academic-cta/50 hover:ring-2 hover:ring-academic-cta/20 transition-all duration-300 overflow-hidden group flex flex-col justify-between cursor-grab active:cursor-grabbing text-left select-none focus:outline-hidden"
                onPointerDown={handlePointerDown}
                onClick={(e) => handleCardClick(item, e)}
              >
                {/* Top Meta Bar */}
                <div className="px-4 py-3 bg-white border-b border-slate-100 flex items-center justify-between gap-2 w-full min-w-0">
                  <span className="text-xs font-bold text-academic-heading truncate font-heading flex-1 min-w-0">
                    {t(item.authorKey)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 shadow-2xs flex-shrink-0 max-w-[50%] min-w-0">
                    <Star size={11} className="text-amber-500 fill-amber-500 flex-shrink-0" />
                    <span className="truncate whitespace-nowrap">{t(item.tagKey)}</span>
                  </span>
                </div>

                {/* Screenshot Contain Frame */}
                <div className="h-64 sm:h-72 overflow-hidden bg-slate-900/5 p-3 flex items-center justify-center relative group-hover:bg-slate-900/10 transition-colors w-full pointer-events-none">
                  <img
                    src={item.image}
                    alt={t(item.captionKey)}
                    className="w-full h-full object-contain rounded-xl drop-shadow-sm group-hover:scale-105 transition-transform duration-500 select-none"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-xl m-2.5">
                    <div className="px-3.5 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-xs font-bold shadow-md">
                      <ZoomIn size={14} />
                      <span>{t('pages.results.realFeedback.viewFullChat')}</span>
                    </div>
                  </div>

                  {/* Real Proof Tag */}
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-slate-700 text-[10px] font-extrabold border border-slate-200 shadow-2xs flex items-center gap-1">
                    <ShieldCheck size={11} className="text-primary" />
                    <span>Tin nhắn thật</span>
                  </div>
                </div>

                {/* Caption & Course Tag */}
                <div className="p-4 text-left bg-white border-t border-slate-100 space-y-1.5 w-full">
                  <p className="text-xs font-medium text-slate-700 italic line-clamp-2 leading-relaxed">
                    "{t(item.captionKey)}"
                  </p>
                  {item.courseKey && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-academic-muted font-semibold truncate max-w-full">
                      <BookOpen size={12} className="text-cta flex-shrink-0" />
                      <span className="truncate">{t(item.courseKey)}</span>
                    </span>
                  )}
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fanpage Link Button */}
      <div className="text-center pt-8 sm:pt-10 app-container">
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
    </section>
  );
};

export default RealFeedbacksGrid;


