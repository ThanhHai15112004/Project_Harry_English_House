import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Award,
  Target,
  MessageCircle,
  Trophy,
  Star,
  GraduationCap,
  Users,
  ShieldCheck,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { SECTION_IDS, ROUTES } from '@/core';

import banner1 from '@/assets/banner/banner1.jpg';
import banner2 from '@/assets/banner/banner2.jpg';
import banner3 from '@/assets/banner/banner3.jpg';
import banner4 from '@/assets/banner/banner4.jpg';

import student1 from '@/assets/ki-niem/ki-niem-1.jpg';
import student2 from '@/assets/ki-niem/ki-niem-3.jpg';
import student3 from '@/assets/ki-niem/ki-niem-4.jpg';
import student4 from '@/assets/ki-niem/ki-niem-5.jpg';

import 'swiper/css';
import 'swiper/css/effect-fade';

// Component hiệu ứng số chạy đếm mượt mà (Ease-Out)
const AnimatedCounter = ({ end, decimals = 0, suffix = '', duration = 1600 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Ease out exponential curve
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeOut * end);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, decimals, duration]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export const HeroSection = () => {
  const { t } = useTranslation();

  const studentAvatars = [
    { id: 'student-1', src: student1, alt: 'Học viên 1' },
    { id: 'student-2', src: student2, alt: 'Học viên 2' },
    { id: 'student-3', src: student3, alt: 'Học viên 3' },
    { id: 'student-4', src: student4, alt: 'Học viên 4' },
  ];

  const STAR_KEYS = ['star-1', 'star-2', 'star-3', 'star-4', 'star-5'];

  // Dữ liệu các slide đồng bộ động từ hệ thống i18n
  const heroSlides = [
    {
      id: 'slide-ielts',
      icon: GraduationCap,
      cornerIcon: ShieldCheck,
      cornerBadge: t('hero.slides.ielts.cornerBadge'),
      topIcon: Award,
      topBadge: t('hero.slides.ielts.topBadge'),
      badge: t('hero.slides.ielts.badge'),
      titlePrefix: t('hero.slides.ielts.titlePrefix'),
      titleHighlight: t('hero.slides.ielts.titleHighlight'),
      subtitle: t('hero.slides.ielts.subtitle'),
      primaryBtnText: t('hero.slides.ielts.primaryBtn'),
      primaryBtnLink: ROUTES.COURSES,
      secondaryBtnText: t('hero.slides.ielts.secondaryBtn'),
      secondaryBtnLink: `${ROUTES.COURSES}#roadmap`,
      image: banner1,
      imageAlt: t('hero.slides.ielts.alt'),
    },
    {
      id: 'slide-class-size',
      icon: Users,
      cornerIcon: CheckCircle2,
      cornerBadge: t('hero.slides.classSize.cornerBadge'),
      topIcon: Users,
      topBadge: t('hero.slides.classSize.topBadge'),
      badge: t('hero.slides.classSize.badge'),
      titlePrefix: t('hero.slides.classSize.titlePrefix'),
      titleHighlight: t('hero.slides.classSize.titleHighlight'),
      subtitle: t('hero.slides.classSize.subtitle'),
      primaryBtnText: t('hero.slides.classSize.primaryBtn'),
      primaryBtnLink: ROUTES.ABOUT,
      secondaryBtnText: t('hero.slides.classSize.secondaryBtn'),
      secondaryBtnLink: ROUTES.RESULTS,
      image: banner2,
      imageAlt: t('hero.slides.classSize.alt'),
    },
    {
      id: 'slide-toeic-comm',
      icon: MessageCircle,
      cornerIcon: Target,
      cornerBadge: t('hero.slides.toeic.cornerBadge'),
      topIcon: Zap,
      topBadge: t('hero.slides.toeic.topBadge'),
      badge: t('hero.slides.toeic.badge'),
      titlePrefix: t('hero.slides.toeic.titlePrefix'),
      titleHighlight: t('hero.slides.toeic.titleHighlight'),
      subtitle: t('hero.slides.toeic.subtitle'),
      primaryBtnText: t('hero.slides.toeic.primaryBtn'),
      primaryBtnLink: ROUTES.CONTACT,
      secondaryBtnText: t('hero.slides.toeic.secondaryBtn'),
      secondaryBtnLink: ROUTES.COURSES,
      image: banner3,
      imageAlt: t('hero.slides.toeic.alt'),
    },
    {
      id: 'slide-vstep',
      icon: Trophy,
      cornerIcon: Award,
      cornerBadge: t('hero.slides.vstep.cornerBadge'),
      topIcon: CheckCircle2,
      topBadge: t('hero.slides.vstep.topBadge'),
      badge: t('hero.slides.vstep.badge'),
      titlePrefix: t('hero.slides.vstep.titlePrefix'),
      titleHighlight: t('hero.slides.vstep.titleHighlight'),
      subtitle: t('hero.slides.vstep.subtitle'),
      primaryBtnText: t('hero.slides.vstep.primaryBtn'),
      primaryBtnLink: ROUTES.CONTACT,
      secondaryBtnText: t('hero.slides.vstep.secondaryBtn'),
      secondaryBtnLink: ROUTES.COURSES,
      image: banner4,
      imageAlt: t('hero.slides.vstep.alt'),
    },
  ];

  return (
    <section
      id={SECTION_IDS.HERO}
      className="relative w-full pt-3 sm:pt-5 pb-6 sm:pb-10 bg-white overflow-hidden"
    >
      {/* Background Ambient Glows tạo chiều sâu không gian */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-blue-100/50 via-sky-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-20 w-[380px] h-[380px] bg-gradient-to-tr from-amber-50/40 via-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Khoảng cách thu gọn xuống ~1rem (space-y-3.5 sm:space-y-4) */}
      <div className="app-container space-y-3.5 sm:space-y-4">
        {/* Main Synchronized Hero Slider tự động chuyển đổi mượt mà */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-full hero-swiper"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center py-1">
                {/* Cột trái: Nội dung Text (6 cols rộng rãi) */}
                <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-left">
                  {/* Badge chủ đề slide kèm icon nhận diện */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
                    <slide.icon size={15} className="text-blue-600 flex-shrink-0" />
                    <span>{slide.badge}</span>
                  </div>

                  {/* Tiêu đề chính font-extrabold tinh tế, line-height chuẩn + Gạch vàng */}
                  <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.26] sm:leading-[1.28] font-heading">
                      {slide.titlePrefix}
                      <span className="text-blue-600 font-extrabold">{slide.titleHighlight}</span>
                    </h1>
                    <div className="w-14 h-1 bg-[#D4A017] rounded-full" />
                  </div>

                  {/* Đoạn mô tả mượt mà, tối đa 3 dòng kèm dấu 3 chấm nếu quá dài */}
                  <p className="line-clamp-3 text-sm sm:text-[15.5px] text-slate-600 leading-relaxed max-w-xl font-normal">
                    {slide.subtitle}
                  </p>

                  {/* Cụm 2 nút hành động với hiệu ứng Shimmer trên nút chính */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-1">
                    <Link to={slide.primaryBtnLink}>
                      <button
                        type="button"
                        className="btn-shimmer px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-glow-cta active:scale-95 whitespace-nowrap"
                      >
                        {slide.primaryBtnText}
                      </button>
                    </Link>
                    <Link to={slide.secondaryBtnLink}>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 font-semibold text-sm sm:text-base transition-all shadow-2xs active:scale-95 whitespace-nowrap"
                      >
                        <span>{slide.secondaryBtnText}</span>
                        <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>

                  {/* Social Proof */}
                  <div className="pt-2 space-y-1.5 border-t border-slate-100">
                    <p className="text-xs text-slate-500 font-medium">
                      {t('hero.socialProof')}
                    </p>
                    <div className="flex items-center gap-3">
                      {/* Avatar Stack */}
                      <div className="flex items-center -space-x-2">
                        {studentAvatars.map((student) => (
                          <img
                            key={student.id}
                            src={student.src}
                            alt={student.alt}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-white shadow-2xs"
                          />
                        ))}
                      </div>

                      {/* Sao đánh giá & điểm số */}
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center text-amber-400">
                          {STAR_KEYS.map((key) => (
                            <Star key={key} size={14} fill="currentColor" />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700">
                          {t('hero.rating')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cột phải: Hình ảnh thực tế kèm 2 Corner Badges đối xứng (Top-Right & Bottom-Left) */}
                <div className="lg:col-span-6">
                  <div className="w-full aspect-[4/3] sm:aspect-[16/11] lg:h-[360px] xl:h-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 relative group">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Top-Right Badge (Góc trên bên phải - không che khuôn mặt) */}
                    <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md text-xs font-bold text-slate-800 pointer-events-none">
                      <slide.topIcon size={14} className="text-amber-500 flex-shrink-0" />
                      <span>{slide.topBadge}</span>
                    </div>

                    {/* Bottom-Left Badge (Góc dưới bên trái - không che khuôn mặt) */}
                    <div className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md text-xs font-bold text-slate-800 pointer-events-none">
                      <slide.cornerIcon size={14} className="text-blue-600 flex-shrink-0" />
                      <span>{slide.cornerBadge}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Băng thống kê thành tích 4 cột (Gọn gàng ~1rem, Số chạy đếm tự động) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl py-3 sm:py-3.5 px-4 sm:px-6 border border-slate-100 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {/* Cột 1: IELTS (Số chạy 7.5+) */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3 first:pt-0 first:px-0 group hover:-translate-y-0.5 transition-transform">
            <Award size={24} className="text-amber-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <span className="text-xs font-semibold text-slate-800 block leading-tight">
                {t('hero.stats.ieltsLabel')}
              </span>
              <div className="text-xl sm:text-2xl font-bold text-blue-600 font-heading leading-tight my-0.5">
                <AnimatedCounter end={7.5} decimals={1} suffix="+" duration={1600} />
              </div>
              <span className="text-xs text-slate-400 font-normal block leading-none">
                {t('hero.stats.ieltsDesc')}
              </span>
            </div>
          </div>

          {/* Cột 2: TOEIC (Số chạy 990+) */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3 group hover:-translate-y-0.5 transition-transform">
            <Target size={24} className="text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <span className="text-xs font-semibold text-slate-800 block leading-tight">
                {t('hero.stats.toeicLabel')}
              </span>
              <div className="text-xl sm:text-2xl font-bold text-blue-600 font-heading leading-tight my-0.5">
                <AnimatedCounter end={990} suffix="+" duration={1800} />
              </div>
              <span className="text-xs text-slate-400 font-normal block leading-none">
                {t('hero.stats.toeicDesc')}
              </span>
            </div>
          </div>

          {/* Cột 3: Giao tiếp (Số chạy 95%) */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3 group hover:-translate-y-0.5 transition-transform">
            <MessageCircle size={24} className="text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <span className="text-xs font-semibold text-slate-800 block leading-tight">
                {t('hero.stats.commLabel')}
              </span>
              <div className="text-xl sm:text-2xl font-bold text-blue-600 font-heading leading-tight my-0.5">
                <AnimatedCounter end={95} suffix="%" duration={1600} />
              </div>
              <span className="text-xs text-slate-400 font-normal block leading-none">
                {t('hero.stats.commDesc')}
              </span>
            </div>
          </div>

          {/* Cột 4: VSTEP (B2+) */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3 group hover:-translate-y-0.5 transition-transform">
            <Trophy size={24} className="text-amber-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <span className="text-xs font-semibold text-slate-800 block leading-tight">
                {t('hero.stats.vstepLabel')}
              </span>
              <div className="text-xl sm:text-2xl font-bold text-blue-600 font-heading leading-tight my-0.5">
                {t('hero.stats.vstepVal')}
              </div>
              <span className="text-xs text-slate-400 font-normal block leading-none">
                {t('hero.stats.vstepDesc')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
