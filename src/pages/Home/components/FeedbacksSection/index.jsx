import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquareQuote, ExternalLink, ZoomIn } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useTestimonialsData, SECTION_IDS } from '@/core';
import { SectionTitle, Modal } from '@/components/common';

import 'swiper/css';
import 'swiper/css/pagination';

export const FeedbacksSection = () => {
  const { t } = useTranslation();
  const testimonials = useTestimonialsData();
  const [activeImage, setActiveImage] = useState(null);

  if (!testimonials) return null;

  return (
    <section id={SECTION_IDS.FEEDBACK} className="py-16 sm:py-24 bg-slate-50">
      <div className="app-container">
        <SectionTitle
          badge={t('feedback.badge')}
          title={t('feedback.title')}
          subtitle={t('feedback.subtitle')}
        />

        {/* Quote Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 border-l-8 border-l-blue-700">
          <MessageSquareQuote size={42} className="text-blue-700 flex-shrink-0" />
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-bold text-slate-900 font-heading leading-snug">
              {testimonials.quote}
            </p>
            <a
              href={testimonials.fbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>{t('feedback.viewOriginal')}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Testimonial Scorecards Grid / Swiper */}
        <div className="mb-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {testimonials.results.map((res) => (
              <SwiperSlide key={res.id}>
                <div
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-card cursor-pointer transition-all duration-300 group"
                  onClick={() => setActiveImage(res)}
                >
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={res.image}
                      alt={res.caption}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center gap-2 text-white transition-opacity duration-300">
                      <ZoomIn size={22} />
                      <span className="text-xs font-bold">{t('feedback.viewScore')}</span>
                    </div>
                  </div>
                  <p className="p-4 text-xs sm:text-sm font-bold text-slate-800 text-center">
                    {res.caption}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Feedback Messages Gallery */}
        <div className="pt-8 border-t border-slate-200/80">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading text-center mb-8">
            {t('feedback.subGalleryTitle')}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {testimonials.feedbacks.slice(0, 6).map((fb) => (
              <div
                key={fb.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm hover:shadow-card cursor-pointer transition-all"
                onClick={() => setActiveImage(fb)}
              >
                <img
                  src={fb.image}
                  alt={fb.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                  <ZoomIn size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Lightbox */}
        <Modal
          isOpen={!!activeImage}
          onClose={() => setActiveImage(null)}
          title={activeImage?.caption || t('feedback.badge')}
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

export default FeedbacksSection;
