import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ZoomIn, Star, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useTestimonialsData, SECTION_IDS, APP_INFO } from '@/core';
import { SectionTitle, Modal } from '@/components/common';

import 'swiper/css';
import 'swiper/css/pagination';

export const StudentResults = () => {
  const { t } = useTranslation();
  const testimonials = useTestimonialsData();
  const [activeImage, setActiveImage] = useState(null);

  if (!testimonials) return null;

  const featuredResult = testimonials.results[0];
  const otherResults = testimonials.results.slice(1, 4);

  return (
    <section id={SECTION_IDS.RESULTS} className="py-20 lg:py-28 bg-white border-t border-academic-border">
      <div className="app-container">
        <SectionTitle
          badge={t('results.badge')}
          title={t('results.title')}
          subtitle={t('results.subtitle')}
        />

        {/* Top: 1 Featured Story (Left) + 2-3 Scorecards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Featured Student Story Card (7 cols) */}
          {featuredResult && (
            <div
              className="lg:col-span-7 bg-academic-soft-white rounded-3xl p-6 sm:p-8 border border-academic-border shadow-card flex flex-col justify-between cursor-pointer group"
              onClick={() => setActiveImage(featuredResult)}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-academic-light-blue text-cta border border-blue-200">
                    <Star size={14} className="text-achievement fill-achievement" />
                    {t('results.featuredBadge')}
                  </span>
                  <span className="text-xs text-academic-muted font-semibold">
                    {t('results.categoryIelts')}
                  </span>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-academic-border">
                  <img
                    src={featuredResult.image}
                    alt={featuredResult.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center gap-2 text-white transition-opacity">
                    <ZoomIn size={22} />
                    <span className="text-xs font-bold">{t('results.viewScore')}</span>
                  </div>
                </div>

                <p className="text-sm font-bold text-academic-heading font-heading">
                  {featuredResult.caption}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-cta font-bold">
                <span>{t('results.viewScoreLink')}</span>
                <ZoomIn size={16} />
              </div>
            </div>
          )}

          {/* 2-3 Right Scorecards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {otherResults.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-academic-border hover:border-blue-300 hover:shadow-card cursor-pointer transition-all duration-200 flex items-center gap-4 group"
                onClick={() => setActiveImage(res)}
              >
                <div className="w-24 h-20 sm:w-28 sm:h-20 rounded-xl overflow-hidden bg-academic-surface flex-shrink-0 relative border border-slate-200">
                  <img
                    src={res.image}
                    alt={res.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-academic-heading/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                    <ZoomIn size={16} />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-cta bg-academic-light-blue px-2 py-0.5 rounded-md">
                    {t('results.categoryOfficial')}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-academic-heading font-heading leading-snug line-clamp-2">
                    {res.caption}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Direct Feedback Message Slider */}
        <div className="pt-10 border-t border-academic-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="text-lg sm:text-xl font-extrabold text-academic-heading font-heading">
              {t('results.feedbackGalleryTitle')}
            </h3>
            <a
              href={testimonials.fbUrl || APP_INFO.SOCIAL_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-cta hover:text-primary transition-colors"
            >
              <span>{t('results.viewMoreResults')}</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
            className="pb-12"
          >
            {testimonials.feedbacks.map((fb) => (
              <SwiperSlide key={fb.id}>
                <div
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-academic-surface border border-academic-border shadow-xs hover:shadow-card cursor-pointer transition-all"
                  onClick={() => setActiveImage(fb)}
                >
                  <img
                    src={fb.image}
                    alt={fb.caption}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Lightbox Modal */}
        <Modal
          isOpen={!!activeImage}
          onClose={() => setActiveImage(null)}
          title={activeImage?.caption || t('results.badge')}
        >
          {activeImage && (
            <div className="flex items-center justify-center p-2">
              <img
                src={activeImage.image}
                alt={activeImage.caption}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default StudentResults;
