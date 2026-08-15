import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Users, Award, ShieldCheck } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { SECTION_IDS, APP_INFO } from '@/core';
import { Button } from '@/components/common';

import banner1 from '@/assets/banner/banner1.jpg';
import banner2 from '@/assets/banner/banner2.jpg';
import banner3 from '@/assets/banner/banner3.jpg';
import banner4 from '@/assets/banner/banner4.jpg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export const HeroSection = () => {
  const { t } = useTranslation();
  const bannerImages = [
    { src: banner1, alt: 'Harry English House Banner 1' },
    { src: banner2, alt: 'Harry English House Banner 2' },
    { src: banner3, alt: 'Harry English House Banner 3' },
    { src: banner4, alt: 'Harry English House Banner 4' },
  ];

  return (
    <section
      id={SECTION_IDS.HERO}
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white"
    >
      {/* Subtle radial glow in the background */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-academic-light-blue/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (55% / 7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-academic-light-blue border border-blue-200/80 text-primary text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={15} />
              <span>{t('hero.eyebrow')}</span>
              <span className="text-academic-muted font-normal">•</span>
              <span className="text-academic-body lowercase font-medium">{t('hero.idpPartner')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-academic-heading tracking-tight leading-[1.08] font-heading">
              {t('hero.title1')}{' '}
              <span className="text-gradient">
                {t('hero.titleHighlight')}
              </span>{' '}
              {t('hero.title2')}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-academic-body leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>

            {/* Actions CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href={`#${SECTION_IDS.PROGRAMS}`}>
                <Button size="lg" variant="primary" icon={<ArrowRight size={18} />}>
                  {t('hero.exploreBtn')}
                </Button>
              </a>
              <a href={`#${SECTION_IDS.CONTACT}`}>
                <Button size="lg" variant="outline">
                  {t('hero.consultBtn')}
                </Button>
              </a>
            </div>

            {/* Program tags */}
            <div className="pt-2 text-xs font-semibold text-academic-muted flex items-center gap-2">
              <Sparkles size={16} className="text-achievement flex-shrink-0" />
              <span>{t('hero.tags')}</span>
            </div>
          </div>

          {/* Right Column (45% / 5 cols) - Visual with Swiper & 2 Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Swiper Banner Slider */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-academic-border bg-academic-surface">
                <Swiper
                  modules={[Autoplay, EffectFade, Pagination]}
                  effect="fade"
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="w-full h-full"
                >
                  {bannerImages.map((banner, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={banner.src}
                        alt={banner.alt}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Floating Mini Card 1: IELTS 0 -> 7.5+ */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-academic-border shadow-xl flex items-center gap-3.5 z-20 animate-scaleUp">
                <div className="w-11 h-11 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Award size={22} className="text-primary" />
                </div>
                <div>
                  <strong className="block text-sm font-extrabold text-academic-heading font-heading">
                    {t('hero.floating1Title')}
                  </strong>
                  <span className="text-xs text-academic-muted font-medium">
                    {t('hero.floating1Sub')}
                  </span>
                </div>
              </div>

              {/* Floating Mini Card 2: Lớp nhỏ 6-10 bạn */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-academic-border shadow-xl flex items-center gap-3.5 z-20 animate-scaleUp">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Users size={22} className="text-emerald-700" />
                </div>
                <div>
                  <strong className="block text-sm font-extrabold text-academic-heading font-heading">
                    {t('hero.floating2Title')}
                  </strong>
                  <span className="text-xs text-academic-muted font-medium">
                    {t('hero.floating2Sub')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
