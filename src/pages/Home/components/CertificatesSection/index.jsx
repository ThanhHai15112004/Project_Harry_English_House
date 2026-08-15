import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ZoomIn, Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useCertificatesData, SECTION_IDS } from '@/core';
import { SectionTitle, Modal } from '@/components/common';

import 'swiper/css';
import 'swiper/css/pagination';

export const CertificatesSection = () => {
  const { t } = useTranslation();
  const certificates = useCertificatesData();
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id={SECTION_IDS.CERTIFICATES} className="py-16 sm:py-24 bg-white border-y border-slate-100">
      <div className="app-container">
        <SectionTitle
          badge={t('certificates.badge')}
          title={t('certificates.title')}
          subtitle={t('certificates.subtitle')}
        />

        {/* Swiper Carousel */}
        <div className="pb-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm hover:shadow-card cursor-pointer transition-all duration-300"
                  onClick={() => setActiveImage(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex flex-col items-center justify-center gap-2 text-white transition-opacity duration-300 p-4 text-center">
                    <ZoomIn size={24} className="text-white" />
                    <span className="text-xs font-bold">{t('certificates.viewDetail')}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal Lightbox */}
        <Modal
          isOpen={!!activeImage}
          onClose={() => setActiveImage(null)}
          title={activeImage?.title || t('certificates.title')}
        >
          {activeImage && (
            <div className="flex items-center justify-center p-2">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default CertificatesSection;
