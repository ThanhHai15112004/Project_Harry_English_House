import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  GraduationCap,
  ShieldCheck,
  ZoomIn,
  Award,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { SectionTitle } from '@/components/common';

import 'swiper/css';
import 'swiper/css/free-mode';

export const EducationAndCertificates = ({ educationData, certificates = [], onOpenCertificate }) => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-24 bg-academic-soft-white border-b border-academic-border overflow-hidden">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.about.education.badge')}
          title={t('pages.about.education.title')}
          subtitle={t('pages.about.education.subtitle')}
        />

        {/* 1. Degrees & Professional Development (2 Columns) */}
        {educationData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Formal Degrees */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-academic-border shadow-card space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center font-bold">
                  <GraduationCap size={20} className="text-cta" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                  {t('pages.about.education.degreesTitle')}
                </h3>
              </div>

              <div className="space-y-4">
                {educationData.degrees?.map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-academic-soft-white border border-slate-200/80 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-cta">
                      <span>{item.period}</span>
                      <span className="text-[10px] text-academic-muted">{item.institution}</span>
                    </div>
                    <h4 className="text-sm font-bold text-academic-heading font-heading">
                      {t(item.programKey)}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Development */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-academic-border shadow-card space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center font-bold">
                  <ShieldCheck size={20} className="text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                  {t('pages.about.education.developmentTitle')}
                </h3>
              </div>

              <div className="space-y-4">
                {educationData.development?.map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-academic-soft-white border border-slate-200/80 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-primary">
                      <span>{item.org}</span>
                      <span className="text-[10px] font-extrabold text-academic-gold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-academic-heading font-heading">
                      {t(item.titleKey)}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 2. Specialized Certificates Header (Without Arrows) */}
        {certificates && certificates.length > 0 && (
          <div className="space-y-1.5 mb-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-sky-950 text-primary dark:text-sky-300 text-xs font-bold">
              <Award size={14} />
              <span>{t('about.officialRecordsBadge')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-academic-heading dark:text-white font-heading tracking-tight">
              {t('pages.about.education.certTitle')}
            </h3>
          </div>
        )}

      </div>

      {/* 3. Full-Width Bleed Marquee Swiper Slider for Certificates */}
      {certificates && certificates.length > 0 && (
        <div className="relative w-full px-4 sm:px-6 lg:px-8 mt-2">
          {/* Edge Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-academic-soft-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-academic-soft-white to-transparent z-10 pointer-events-none" />

          <Swiper
            modules={[Autoplay, FreeMode]}
            grabCursor={true}
            freeMode={true}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={18}
            slidesPerView={1.5}
            breakpoints={{
              480: { slidesPerView: 2.3, spaceBetween: 18 },
              640: { slidesPerView: 3.2, spaceBetween: 20 },
              1024: { slidesPerView: 4.4, spaceBetween: 22 },
              1280: { slidesPerView: 5.5, spaceBetween: 24 },
              1536: { slidesPerView: 6.5, spaceBetween: 26 },
            }}
            className="w-full !py-4 cursor-grab active:cursor-grabbing select-none [&_.swiper-wrapper]:!ease-linear"
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.id} className="!h-auto">
                <button
                  type="button"
                  onClick={() => onOpenCertificate?.(cert)}
                  className="w-full h-full rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-primary hover:shadow-card hover:ring-2 hover:ring-primary/20 transition-all duration-300 overflow-hidden group cursor-grab active:cursor-grabbing flex flex-col justify-between text-left focus:outline-hidden"
                >
                  <div className="h-44 sm:h-52 w-full bg-slate-900/5 p-2.5 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900/10 transition-colors">
                    <img
                      src={cert.image}
                      alt={t(cert.titleKey)}
                      className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-xl m-2">
                      <div className="px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-xs font-bold shadow-md">
                        <ZoomIn size={14} />
                        <span>{t('pages.about.education.viewCertModal')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border-t border-slate-100 w-full space-y-1">
                    <p className="text-xs font-bold text-academic-heading truncate font-heading group-hover:text-primary transition-colors">
                      {t(cert.titleKey)}
                    </p>
                    <span className="inline-block text-[10px] text-primary dark:text-sky-400 font-bold">
                      {t('pages.about.education.certBadge', 'Chứng nhận Chuyên môn IDP / TESOL')}
                    </span>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default EducationAndCertificates;
