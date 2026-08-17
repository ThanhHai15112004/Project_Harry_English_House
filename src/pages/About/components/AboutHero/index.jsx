import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Sparkles,
  ArrowDown,
  Award,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Trophy,
  Zap,
  Target,
  Users,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Button } from '@/components/common';

import thuyetTrinh1 from '@/assets/Ministry-of-Higher-Education-2025/thuyet-trinh-1.jpg';
import kiNiem1 from '@/assets/ki-niem/ki-niem-1.jpg';
import anhNhom1 from '@/assets/Ministry-of-Higher-Education-2025/anh-chup-nhom-1.jpg';
import kiNiem4 from '@/assets/ki-niem/ki-niem-4.jpg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export const AboutHero = ({ founderData }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const slides = [
    {
      id: 'slide-founder',
      icon: Sparkles,
      badge: t('pages.about.heroSlides.founder.badge'),
      title: founderData?.name || t('pages.about.heroSlides.founder.title'),
      titleHighlight: '',
      tagline: t('pages.about.heroSlides.founder.tagline'),
      desc: t('pages.about.heroSlides.founder.desc'),
      badge1: {
        icon: Award,
        text: t('pages.about.heroSlides.founder.badge1'),
        iconColor: 'text-achievement',
      },
      badge2: {
        icon: ShieldCheck,
        text: t('pages.about.heroSlides.founder.badge2'),
        iconColor: 'text-primary',
      },
      cta1: {
        text: t('pages.about.heroSlides.founder.cta1'),
        anchor: 'harry-story',
      },
      cta2: {
        text: t('pages.about.heroSlides.founder.cta2'),
        anchor: 'philosophy',
      },
      image: founderData?.academicPhoto || founderData?.avatar || thuyetTrinh1,
      imageAlt: 'Thầy Harry (Anh Khôi) - Founder of Harry English House',
      cornerIcon: ShieldCheck,
      cornerBadge: t('pages.about.heroSlides.founder.cornerBadge'),
      cardRole: t('pages.about.heroSlides.founder.cardRole'),
      cardSub: t('pages.about.heroSlides.founder.cardSub'),
      statIcon: CheckCircle2,
      statTitle: t('pages.about.heroSlides.founder.statTitle'),
      statDesc: t('pages.about.heroSlides.founder.statDesc'),
    },
    {
      id: 'slide-philosophy',
      icon: GraduationCap,
      badge: t('pages.about.heroSlides.philosophy.badge'),
      title: t('pages.about.heroSlides.philosophy.title'),
      titleHighlight: t('pages.about.heroSlides.philosophy.titleHighlight'),
      tagline: t('pages.about.heroSlides.philosophy.tagline'),
      desc: t('pages.about.heroSlides.philosophy.desc'),
      badge1: {
        icon: CheckCircle2,
        text: t('pages.about.heroSlides.philosophy.badge1'),
        iconColor: 'text-cta',
      },
      badge2: {
        icon: Zap,
        text: t('pages.about.heroSlides.philosophy.badge2'),
        iconColor: 'text-achievement',
      },
      cta1: {
        text: t('pages.about.heroSlides.philosophy.cta1'),
        anchor: 'philosophy',
      },
      cta2: {
        text: t('pages.about.heroSlides.philosophy.cta2'),
        anchor: 'expertise',
      },
      image: kiNiem1,
      imageAlt: 'Triết lý đào tạo thực chất tại Harry English House',
      cornerIcon: GraduationCap,
      cornerBadge: t('pages.about.heroSlides.philosophy.cornerBadge'),
      cardRole: t('pages.about.heroSlides.philosophy.cardRole'),
      cardSub: t('pages.about.heroSlides.philosophy.cardSub'),
      statIcon: Zap,
      statTitle: t('pages.about.heroSlides.philosophy.statTitle'),
      statDesc: t('pages.about.heroSlides.philosophy.statDesc'),
    },
    {
      id: 'slide-academic',
      icon: Award,
      badge: t('pages.about.heroSlides.academic.badge'),
      title: t('pages.about.heroSlides.academic.title'),
      titleHighlight: t('pages.about.heroSlides.academic.titleHighlight'),
      tagline: t('pages.about.heroSlides.academic.tagline'),
      desc: t('pages.about.heroSlides.academic.desc'),
      badge1: {
        icon: Trophy,
        text: t('pages.about.heroSlides.academic.badge1'),
        iconColor: 'text-achievement',
      },
      badge2: {
        icon: Target,
        text: t('pages.about.heroSlides.academic.badge2'),
        iconColor: 'text-primary',
      },
      cta1: {
        text: t('pages.about.heroSlides.academic.cta1'),
        anchor: 'academic-activities',
      },
      cta2: {
        text: t('pages.about.heroSlides.academic.cta2'),
        anchor: 'education',
      },
      image: anhNhom1,
      imageAlt: 'Diễn đàn Giáo dục Đại học Quốc tế EMGS 2025',
      cornerIcon: Award,
      cornerBadge: t('pages.about.heroSlides.academic.cornerBadge'),
      cardRole: t('pages.about.heroSlides.academic.cardRole'),
      cardSub: t('pages.about.heroSlides.academic.cardSub'),
      statIcon: Trophy,
      statTitle: t('pages.about.heroSlides.academic.statTitle'),
      statDesc: t('pages.about.heroSlides.academic.statDesc'),
    },
    {
      id: 'slide-community',
      icon: Users,
      badge: t('pages.about.heroSlides.community.badge'),
      title: t('pages.about.heroSlides.community.title'),
      titleHighlight: t('pages.about.heroSlides.community.titleHighlight'),
      tagline: t('pages.about.heroSlides.community.tagline'),
      desc: t('pages.about.heroSlides.community.desc'),
      badge1: {
        icon: Users,
        text: t('pages.about.heroSlides.community.badge1'),
        iconColor: 'text-cta',
      },
      badge2: {
        icon: Sparkles,
        text: t('pages.about.heroSlides.community.badge2'),
        iconColor: 'text-achievement',
      },
      cta1: {
        text: t('pages.about.heroSlides.community.cta1'),
        anchor: 'teaching-team',
      },
      cta2: {
        text: t('pages.about.heroSlides.community.cta2'),
        anchor: 'moments',
      },
      image: kiNiem4,
      imageAlt: 'Môi trường học tập đồng hành và gắn kết tại HEH',
      cornerIcon: Users,
      cornerBadge: t('pages.about.heroSlides.community.cornerBadge'),
      cardRole: t('pages.about.heroSlides.community.cardRole'),
      cardSub: t('pages.about.heroSlides.community.cardSub'),
      statIcon: Sparkles,
      statTitle: t('pages.about.heroSlides.community.statTitle'),
      statDesc: t('pages.about.heroSlides.community.statDesc'),
    },
  ];

  return (
    <section className="relative pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-12 bg-white border-b border-academic-border overflow-hidden">
      {/* Soft Backdrop Ambient Glows */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-academic-light-blue/50 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-academic-sky-light/60 blur-2xl pointer-events-none -z-10" />

      <div className="app-container relative z-10">
        {/* Main Swiper Hero Slider */}
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="w-full hero-about-swiper"
        >
          {slides.map((slide) => {
            const Icon = slide.icon;
            const CornerIcon = slide.cornerIcon;
            const StatIcon = slide.statIcon;
            const Badge1Icon = slide.badge1.icon;
            const Badge2Icon = slide.badge2.icon;

            return (
              <SwiperSlide key={slide.id}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-1 sm:py-2">
                  
                  {/* Content Column (5 Cols on desktop) */}
                  <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-left">
                    
                    {/* Eyebrow Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-academic-light-blue border border-blue-200/70 shadow-2xs">
                      <Icon size={14} className="text-cta" />
                      <span className="text-xs font-extrabold uppercase tracking-wider text-cta font-heading">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Name & Headline */}
                    <div className="space-y-2">
                      <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-academic-heading font-heading tracking-tight leading-[1.2]">
                        {slide.title}
                        {slide.titleHighlight && (
                          <span className="block text-primary font-extrabold mt-1">
                            {slide.titleHighlight}
                          </span>
                        )}
                      </h1>
                      
                      {slide.tagline && (
                        <div className="text-base sm:text-lg font-bold text-primary font-heading leading-snug">
                          {slide.tagline}
                        </div>
                      )}
                      <div className="w-14 h-1 bg-achievement rounded-full mt-1.5" />
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-[15px] text-academic-body leading-relaxed max-w-xl font-normal">
                      {slide.desc}
                    </p>

                    {/* Credentials / Feature Badges */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-academic-soft-white border border-academic-border text-xs font-bold text-academic-heading shadow-2xs">
                        <Badge1Icon size={15} className={slide.badge1.iconColor} />
                        <span>{slide.badge1.text}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-academic-soft-white border border-academic-border text-xs font-bold text-academic-heading shadow-2xs">
                        <Badge2Icon size={15} className={slide.badge2.iconColor} />
                        <span>{slide.badge2.text}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <Button
                        variant="primary"
                        size="md"
                        className="font-bold shadow-md hover:shadow-lg cursor-pointer"
                        icon={<ArrowDown size={16} />}
                        onClick={() => scrollToAnchor(slide.cta1.anchor)}
                      >
                        {slide.cta1.text}
                      </Button>
                      <Button
                        variant="outline"
                        size="md"
                        className="bg-white hover:bg-academic-soft-white font-bold border-academic-border text-academic-heading cursor-pointer shadow-2xs"
                        onClick={() => scrollToAnchor(slide.cta2.anchor)}
                      >
                        {slide.cta2.text}
                      </Button>
                    </div>

                  </div>

                  {/* Visual Column (7 Cols on desktop) */}
                  <div className="lg:col-span-7 relative">
                    <div className="relative mx-auto max-w-md lg:max-w-lg">
                      
                      {/* Geometric Accent Block */}
                      <div className="absolute inset-0 bg-academic-light-blue rounded-3xl -rotate-2 transform scale-105 transition-transform group-hover:rotate-0" />

                      {/* Main Photo Frame */}
                      <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-academic-border shadow-2xl group">
                        <div className="h-[380px] sm:h-[420px] lg:h-[440px] w-full rounded-2xl overflow-hidden bg-academic-surface relative">
                          <img
                            src={slide.image}
                            alt={slide.imageAlt}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-academic-heading/90 via-academic-heading/25 to-transparent" />
                          
                          {/* Floating Top Badge */}
                          <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-primary font-bold text-xs shadow-md border border-white/80">
                            <CornerIcon size={16} className="text-primary" />
                            <span>{slide.cornerBadge}</span>
                          </div>

                          {/* Bottom Caption */}
                          <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-0.5">
                            <div className="text-base sm:text-lg font-extrabold font-heading">
                              {slide.cardRole}
                            </div>
                            <p className="text-xs text-academic-light-blue font-medium">
                              {slide.cardSub}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Floating Highlight Metric Card */}
                      <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white rounded-2xl p-3 border border-academic-border shadow-xl flex items-center gap-3 z-20">
                        <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center font-bold flex-shrink-0">
                          <StatIcon size={20} className="text-cta" />
                        </div>
                        <div>
                          <div className="text-xs font-black text-primary font-heading">{slide.statTitle}</div>
                          <div className="text-[10px] text-academic-muted">{slide.statDesc}</div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Slider Indicator & Pagination Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-academic-border max-w-4xl mx-auto">
          {/* Pagination Pills */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? 'w-8 h-2 bg-primary shadow-sm'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide index */}
          <div className="text-xs font-bold text-academic-muted font-heading">
            0{activeIndex + 1} / 0{slides.length}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
