import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  Trophy,
  Award,
  Star,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@/components/common';
import { formatStudentName } from '@/core';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const ResultsHero = ({ showcaseResults = [], onOpenScorecard }) => {
  const { t, i18n } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Danh sách các bảng điểm tiêu biểu mặc định nếu showcaseResults chưa truyền đủ
  const defaultShowcase = [
    {
      id: 'showcase-1',
      category: 'ielts',
      studentName: 'Nguyễn Diễm Quỳnh',
      score: '8.5',
      badgeKey: 'db.testimonials.r1Badge',
      badge: 'IDP IELTS 8.5 Overall',
      tagKey: 'pages.results.categoryIelts',
      targetKey: 'db.testimonials.r1Target',
      course: 'Lớp IELTS Chuyên Sâu Cấp Tốc',
      image: '/src/assets/feedback-hoc-vien/ket-qua-1.jpg',
      skills: [
        { label: 'Listening', value: '9.0' },
        { label: 'Reading', value: '9.0' },
        { label: 'Speaking', value: '8.5' },
        { label: 'Writing', value: '8.0' },
      ],
      captionKey: 'db.testimonials.r1Caption',
      descriptionKey: 'db.testimonials.r1Desc',
      quote: 'Đạt band điểm tuyệt đối 9.0 Reading & 9.0 Listening nhờ phương pháp tư duy bản chất và chiến thuật xử lý bẫy đề thi tại HEH.',
    },
    {
      id: 'showcase-2',
      category: 'ielts',
      studentName: 'Trần Minh Hoàng',
      score: '8.0',
      badgeKey: 'db.testimonials.r2Badge',
      badge: 'IELTS 8.0 (Reading 9.0)',
      tagKey: 'pages.results.categoryIelts',
      targetKey: 'db.testimonials.r2Target',
      course: 'Lộ trình từ 5.0 lên 8.0 Overall',
      image: '/src/assets/feedback-hoc-vien/ket-qua-2.jpg',
      skills: [
        { label: 'Reading', value: '9.0' },
        { label: 'Listening', value: '8.5' },
        { label: 'Speaking', value: '7.5' },
        { label: 'Writing', value: '7.0' },
      ],
      captionKey: 'db.testimonials.r2Caption',
      descriptionKey: 'db.testimonials.r2Desc',
      quote: 'Lột xác hoàn toàn khả năng đọc hiểu học thuật và phản xạ nói tự nhiên chỉ sau 4 tháng rèn luyện liên tục.',
    },
    {
      id: 'showcase-3',
      category: 'highschool',
      studentName: 'Thanh Trúc',
      score: '9.25',
      badgeKey: 'db.testimonials.r5Badge',
      badge: 'Thủ Khoa Tuyển Sinh 10',
      tagKey: 'pages.results.categoryHighschool',
      targetKey: 'db.testimonials.r5Target',
      course: 'Lớp Luyện Thi Vào Lớp 10 Chuyên',
      image: '/src/assets/feedback-hoc-vien/ket-qua-3.jpg',
      skills: [
        { label: t('pages.results.skills.english', 'Môn Tiếng Anh'), value: `9.25 ${t('pages.results.pointsSuffix', 'đ')}` },
        { label: t('pages.results.skills.rank', 'Xếp hạng'), value: t('db.testimonials.r5Rank', 'Top 1 TP.HCM') },
      ],
      captionKey: 'db.testimonials.r5Caption',
      descriptionKey: 'db.testimonials.r5Desc',
      quote: 'Nắm chắc ngữ pháp nền tảng và bộ từ vựng chuyên đề giúp em tự tin đạt 9.25 điểm môn Tiếng Anh trong kỳ thi vào lớp 10.',
    },
    {
      id: 'showcase-4',
      category: 'ielts',
      studentName: 'Nguyễn Hoàng Hiếu',
      score: '8.0',
      badgeKey: 'db.testimonials.r3Badge',
      badge: 'IDP IELTS 8.0 Overall',
      tagKey: 'pages.results.categoryIelts',
      targetKey: 'db.testimonials.r3Target',
      course: 'Lớp IELTS Luyện Đề Chuyên Sâu',
      image: '/src/assets/feedback-hoc-vien/ket-qua-4.jpg',
      skills: [
        { label: 'Reading', value: '9.0' },
        { label: 'Listening', value: '8.5' },
        { label: 'Speaking', value: '8.0' },
        { label: 'Writing', value: '6.5' },
      ],
      captionKey: 'db.testimonials.r3Caption',
      descriptionKey: 'db.testimonials.r3Desc',
      quote: 'Kỹ năng Listening & Reading được cải thiện vượt bậc, phản xạ tự tin hơn rất nhiều trong phòng thi thực chiến.',
    },
    {
      id: 'showcase-5',
      category: 'ielts',
      studentName: 'Đinh Lê Hoàng Nghĩa',
      score: '7.0',
      badgeKey: 'db.testimonials.r4Badge',
      badge: 'Bứt phá 4.5 -> 7.0 Overall',
      tagKey: 'pages.results.categoryIelts',
      targetKey: 'db.testimonials.r4Target',
      course: 'Lớp Bứt Phá Mục Tiêu',
      image: '/src/assets/feedback-hoc-vien/ket-qua-5.jpg',
      skills: [
        { label: 'Listening', value: '7.5' },
        { label: 'Reading', value: '7.5' },
        { label: 'Writing', value: '6.5' },
        { label: 'Speaking', value: '6.5' },
      ],
      captionKey: 'db.testimonials.r4Caption',
      descriptionKey: 'db.testimonials.r4Desc',
      quote: 'Lộ trình kèm cặp sát sao đã giúp em lấy lại gốc tiếng Anh và vượt chỉ tiêu 6.5 để đạt 7.0 trước hạn xét tuyển.',
    },
    {
      id: 'showcase-6',
      category: 'highschool',
      studentName: 'Minh Anh',
      score: '9.0',
      badgeKey: 'db.testimonials.r6Badge',
      badge: 'Điểm 9.0 Tuyển Sinh 10',
      tagKey: 'pages.results.categoryHighschool',
      targetKey: 'db.testimonials.r6Target',
      course: 'Lớp Ôn Thi Vào 10 Trọng Điểm',
      image: '/src/assets/feedback-hoc-vien/ket-qua-6.jpg',
      skills: [
        { label: t('pages.results.skills.english', 'Môn Tiếng Anh'), value: `9.0 ${t('pages.results.pointsSuffix', 'đ')}` },
        { label: t('pages.results.skills.rank', 'Xếp hạng'), value: t('db.testimonials.r6Rank', 'Đạt nguyện vọng 1') },
      ],
      captionKey: 'db.testimonials.r6Caption',
      descriptionKey: 'db.testimonials.r6Desc',
      quote: 'Thầy Khôi hướng dẫn rất chi tiết các dạng bài biến thể, giúp em giải quyết đề thi nhanh chóng và chính xác tuyệt đối.',
    },
  ];

  const getBadgeText = (item) => {
    if (item.badgeKey) return t(item.badgeKey);
    if (item.score) return `IELTS ${item.score} Overall`;
    return 'Thành tích xuất sắc';
  };

  const getTagText = (item) => {
    if (item.category === 'ielts') return t('pages.results.categoryIelts', 'IELTS Academic');
    if (item.category === 'highschool') return t('pages.results.categoryHighschool', 'Tuyển Sinh 10');
    if (item.category === 'toeic') return t('pages.results.categoryToeic', 'TOEIC / VSTEP');
    return t('pages.results.categoryDefault', 'Học viên HEH');
  };

  const getCourseText = (item) => {
    if (item.targetKey) return t(item.targetKey);
    if (item.descriptionKey) return t(item.descriptionKey);
    return 'Khóa học tại HEH';
  };

  const getQuoteText = (item) => {
    if (item.captionKey) return t(item.captionKey);
    if (item.descriptionKey) return t(item.descriptionKey);
    return '';
  };

  const displayItems = showcaseResults && showcaseResults.length > 0
    ? showcaseResults.map((r, idx) => ({
        id: r.id || `res-${idx}`,
        studentName: formatStudentName(r.studentName, i18n.language),
        score: r.score,
        badge: getBadgeText(r),
        tag: getTagText(r),
        course: getCourseText(r),
        image: r.image,
        skills: r.skills ? Object.entries(r.skills).map(([k, v]) => {
          let label = k.toUpperCase();
          if (k === 'english') label = t('pages.results.skills.english', 'Tiếng Anh');
          else if (k === 'rankKey' || k === 'rank') label = t('pages.results.skills.rank', 'Xếp hạng');
          else if (k === 'listening') label = t('pages.results.skills.listening', 'Listening');
          else if (k === 'reading') label = t('pages.results.skills.reading', 'Reading');
          else if (k === 'writing') label = t('pages.results.skills.writing', 'Writing');
          else if (k === 'speaking') label = t('pages.results.skills.speaking', 'Speaking');

          let value = v;
          if (typeof v === 'string' && v.startsWith('db.')) {
            value = t(v);
          } else if (k === 'english' && !String(v).includes('đ') && !String(v).includes('pts')) {
            value = `${v} ${t('pages.results.pointsSuffix', 'đ')}`;
          }
          return { label, value };
        }) : [],
        quote: getQuoteText(r),
      }))
    : defaultShowcase.map((d) => ({
        ...d,
        studentName: formatStudentName(d.studentName, i18n.language),
        tag: getTagText(d),
      }));

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-4 sm:pt-6 lg:pt-7 pb-8 sm:pb-10 bg-gradient-to-b from-academic-soft-white via-white to-academic-soft-white border-b border-academic-border overflow-hidden">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-academic-light-blue/50 via-blue-50/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="app-container relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. EDITORIAL CENTERED HEADER */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5 mb-8 sm:mb-12">
          
          {/* Top Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-xs backdrop-blur-xs">
            <Sparkles size={15} className="text-cta animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-primary font-heading">
              {t('pages.results.badge')}
            </span>
          </div>

          {/* Main Headline H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-academic-heading font-heading leading-tight tracking-tight">
            {t('pages.results.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-academic-body leading-relaxed max-w-2xl mx-auto font-normal">
            {t('pages.results.subtitle')}
          </p>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-1 text-xs text-academic-heading font-semibold">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
              <span>{t('pages.results.heroVerified')}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <ShieldCheck size={15} className="text-primary flex-shrink-0" />
              <span>{t('pages.results.heroProofCard')}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 shadow-2xs">
              <Star size={14} className="text-amber-500 fill-amber-500 flex-shrink-0" />
              <span>{t('pages.results.heroStatBadge', 'Minh bạch 100% • Đối chứng IDP/BC')}</span>
            </div>
          </div>

          {/* Action Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              className="font-bold shadow-md hover:shadow-lg cursor-pointer px-6"
              icon={<ArrowDown size={16} />}
              onClick={() => scrollToSection('results-catalog')}
            >
              {t('pages.results.heroCtaResults')}
            </Button>
            <Button
              variant="outline"
              size="md"
              className="bg-white hover:bg-slate-50 font-bold border-slate-300 text-academic-heading cursor-pointer shadow-2xs px-6"
              onClick={() => scrollToSection('student-story')}
            >
              {t('pages.results.heroCtaStory')}
            </Button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. 3D CENTERED COVERFLOW SHOWCASE CAROUSEL */}
        {/* ========================================================================= */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-6">
          
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2.2,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="w-full pb-14 pt-2 results-coverflow-swiper"
          >
            {displayItems.map((item, index) => (
              <SwiperSlide
                key={item.id || index}
                className="w-[300px] sm:w-[360px] md:w-[420px] transition-all duration-300 select-none"
              >
                {({ isActive }) => (
                  <div
                    className={`h-full rounded-3xl p-3 sm:p-4 bg-white border transition-all duration-500 flex flex-col justify-between ${
                      isActive
                        ? 'border-primary/40 shadow-2xl ring-2 ring-primary/20 scale-100 bg-white'
                        : 'border-slate-200/80 shadow-md scale-95 opacity-75 hover:opacity-100'
                    }`}
                  >
                    {/* Card Header: Tag & Score Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-academic-light-blue text-primary text-[11px] font-extrabold uppercase font-heading">
                        <Trophy size={13} className="text-cta" />
                        <span>{item.tag}</span>
                      </span>
                      
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xs">
                        <Award size={13} />
                        <span className="text-xs font-black font-heading tracking-wide">
                          {item.score ? `${item.score} OVERALL` : item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Official Scorecard Preview Box */}
                    <button
                      type="button"
                      className="group relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/90 flex items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:border-cta focus:outline-hidden"
                      onClick={() =>
                        onOpenScorecard?.({
                          image: item.image,
                          studentName: item.studentName,
                          score: item.score,
                          caption: item.badge,
                          description: item.quote || item.course,
                        })
                      }
                      title={t('pages.results.zoomTitle', 'Bấm để phóng to xem bảng điểm đầy đủ')}
                    >
                      <img
                        src={item.image}
                        alt={`Bảng điểm ${item.studentName}`}
                        className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Hover Overlay with Zoom Icon */}
                      <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center backdrop-blur-xs text-white">
                        <div className="px-4 py-2 rounded-xl bg-white/25 border border-white/40 shadow-lg flex items-center gap-2 text-xs font-bold font-heading transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <ZoomIn size={16} />
                          <span>{t('pages.results.viewDetails', 'Xem bảng điểm chi tiết')}</span>
                        </div>
                      </div>

                      {/* Corner Verified Stamp */}
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[10px] font-bold shadow-xs flex items-center gap-1">
                        <CheckCircle2 size={11} />
                        <span>{t('pages.results.verifiedBadge', 'Đối chứng thật')}</span>
                      </div>
                    </button>

                    {/* Student Info & Skills Breakdown */}
                    <div className="mt-4 space-y-2.5 text-left">
                      <div className="flex items-baseline justify-between gap-2">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading leading-tight">
                            {item.studentName}
                          </h3>
                          <p className="text-xs text-slate-500 font-medium line-clamp-1 mt-0.5">
                            {item.course}
                          </p>
                        </div>
                        {item.score && (
                          <span className="text-2xl font-black text-primary font-heading">
                            {item.score}
                          </span>
                        )}
                      </div>

                      {/* Skills Chips */}
                      {item.skills && item.skills.length > 0 && (
                        <div className="grid grid-cols-2 gap-1.5 pt-1">
                          {item.skills.slice(0, 4).map((sk) => (
                            <div
                              key={`${item.id}-${sk.label}`}
                              className="px-2 py-1 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[11px]"
                            >
                              <span className="text-slate-500 font-medium">{sk.label}</span>
                              <span className="font-extrabold text-academic-heading font-heading">{sk.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Quote / Highlight Remark */}
                      {item.quote && (
                        <p className="text-xs text-slate-600 italic bg-academic-soft-white p-2.5 rounded-xl border border-slate-200/70 line-clamp-2 leading-relaxed">
                          "{item.quote}"
                        </p>
                      )}
                    </div>

                    {/* Card Footer Button */}
                    <div className="pt-3 mt-1 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() =>
                          onOpenScorecard?.({
                            image: item.image,
                            studentName: item.studentName,
                            score: item.score,
                            caption: item.badge,
                            description: item.quote || item.course,
                          })
                        }
                        className="text-xs font-bold text-cta hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer py-1"
                      >
                        <ZoomIn size={14} />
                        <span>{t('pages.results.viewOriginalCertificate', 'Xem ảnh gốc chứng chỉ')}</span>
                      </button>

                      <span className="text-[10px] text-academic-muted font-semibold uppercase">
                        HEH Verified
                      </span>
                    </div>

                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            ref={prevRef}
            type="button"
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-academic-heading shadow-lg border border-slate-200 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 hover:border-cta focus:outline-hidden"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-academic-heading shadow-lg border border-slate-200 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 hover:border-cta focus:outline-hidden"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default ResultsHero;

