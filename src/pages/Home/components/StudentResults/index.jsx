import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ZoomIn,
  Star,
  ExternalLink,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Trophy,
  MessageSquare,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useTestimonialsData, SECTION_IDS, APP_INFO, ROUTES } from '@/core';
import { SectionTitle, Modal, Button } from '@/components/common';

import 'swiper/css';
import 'swiper/css/pagination';

export const StudentResults = () => {
  const { t } = useTranslation();
  const testimonials = useTestimonialsData();
  const [activeImage, setActiveImage] = useState(null);

  if (!testimonials) return null;

  const results = testimonials.results || [];
  const featuredResult = results.find((r) => r.isFeatured) || results[0];
  const sideResults = results.filter((r) => r.id !== featuredResult?.id).slice(0, 4);
  const feedbacks = testimonials.feedbacks || [];

  return (
    <section id={SECTION_IDS.RESULTS} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="app-container">
        {/* Section Header */}
        <SectionTitle
          badge={t('results.badge')}
          title={t('results.title')}
          subtitle={t('results.subtitle')}
        />

        {/* 1. Trust & Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-12">
          <div className="bg-academic-soft-white rounded-2xl p-4 border border-slate-200/80 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center flex-shrink-0 font-bold">
              <Trophy size={20} className="text-cta" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-academic-heading font-heading">8.5 IELTS</div>
              <div className="text-[11px] text-academic-muted font-medium">{t('results.statHighest')}</div>
            </div>
          </div>

          <div className="bg-academic-soft-white rounded-2xl p-4 border border-slate-200/80 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center flex-shrink-0 font-bold">
              <CheckCircle2 size={20} className="text-emerald-600" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-academic-heading font-heading">100%</div>
              <div className="text-[11px] text-academic-muted font-medium">{t('results.statPassRate')}</div>
            </div>
          </div>

          <div className="bg-academic-soft-white rounded-2xl p-4 border border-slate-200/80 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center flex-shrink-0 font-bold">
              <Award size={20} className="text-achievement" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-academic-heading font-heading">1.000+</div>
              <div className="text-[11px] text-academic-muted font-medium">{t('results.statAlumni')}</div>
            </div>
          </div>

          <div className="bg-academic-soft-white rounded-2xl p-4 border border-slate-200/80 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center flex-shrink-0 font-bold">
              <ShieldCheck size={20} className="text-primary" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-academic-heading font-heading">IDP Partner</div>
              <div className="text-[11px] text-academic-muted font-medium">{t('results.idpCertified')}</div>
            </div>
          </div>
        </div>

        {/* 2. Top Real Exam Results Showcase (Left Featured + Right List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Featured Student Scorecard Card (7 Cols) */}
          {featuredResult && (
            <div className="lg:col-span-7 bg-academic-soft-white rounded-3xl p-5 sm:p-7 border border-academic-border shadow-card flex flex-col justify-between group transition-all duration-300 hover:shadow-xl">
              <div className="space-y-5">
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 shadow-xs">
                    <Star size={13} className="text-amber-500 fill-amber-500" />
                    {t('results.featuredBadge')}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cta bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                      <Sparkles size={12} />
                      {featuredResult.badge || t('results.verifiedScore')}
                    </span>
                    <span className="text-xs text-academic-muted font-semibold">
                      {featuredResult.examType || t('results.categoryIelts')}
                    </span>
                  </div>
                </div>

                {/* Scorecard Visual Showcase (No Cropping - Object Contain & High Res Frame) */}
                <button
                  type="button"
                  className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/90 flex items-center justify-center p-3 cursor-pointer group-hover:border-primary/40 transition-all duration-300 shadow-inner text-left focus:outline-hidden focus:ring-2 focus:ring-primary/50"
                  onClick={() => setActiveImage(featuredResult)}
                >
                  <img
                    src={featuredResult.image}
                    alt={featuredResult.caption}
                    className="w-full h-full object-contain rounded-xl drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center gap-2 text-white transition-opacity rounded-2xl">
                    <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-2 text-xs font-bold text-white shadow-lg">
                      <ZoomIn size={16} />
                      <span>{t('results.viewScore')}</span>
                    </div>
                  </div>
                </button>

                {/* Rich Score Breakdown & Info */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                        {featuredResult.studentName || featuredResult.caption}
                      </h4>
                      <p className="text-xs text-academic-muted font-medium">
                        {featuredResult.scoreType} • {featuredResult.target}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-white font-extrabold text-sm sm:text-base shadow-sm self-start sm:self-auto">
                      <span>Overall:</span>
                      <span className="text-amber-300 font-heading text-lg">{featuredResult.score}</span>
                    </div>
                  </div>

                  {/* 4 Skills Breakdown Pill Grid */}
                  {featuredResult.skills && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                        <div className="text-[11px] font-bold text-slate-500 uppercase">{t('results.listening')}</div>
                        <div className="text-base font-extrabold text-cta font-heading">{featuredResult.skills.listening}</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                        <div className="text-[11px] font-bold text-slate-500 uppercase">{t('results.reading')}</div>
                        <div className="text-base font-extrabold text-cta font-heading">{featuredResult.skills.reading}</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                        <div className="text-[11px] font-bold text-slate-500 uppercase">{t('results.writing')}</div>
                        <div className="text-base font-extrabold text-cta font-heading">{featuredResult.skills.writing}</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                        <div className="text-[11px] font-bold text-slate-500 uppercase">{t('results.speaking')}</div>
                        <div className="text-base font-extrabold text-cta font-heading">{featuredResult.skills.speaking}</div>
                      </div>
                    </div>
                  )}

                  {featuredResult.description && (
                    <p className="text-xs text-slate-600 leading-relaxed bg-white/80 p-3 rounded-xl border border-slate-200/60">
                      {featuredResult.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer Action */}
              <button
                type="button"
                className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-cta font-bold cursor-pointer hover:text-primary transition-colors text-left w-full"
                onClick={() => setActiveImage(featuredResult)}
              >
                <span className="flex items-center gap-1.5">
                  <ZoomIn size={15} />
                  {t('results.viewScoreLink')}
                </span>
                <ArrowRight size={15} className="transition-colors" />
              </button>
            </div>
          )}

          {/* Side Results List (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="space-y-2.5 sm:space-y-3">
              {sideResults.map((res) => (
                <button
                  type="button"
                  key={res.id}
                  className="w-full text-left bg-academic-soft-white rounded-2xl p-2.5 sm:p-3.5 border border-academic-border hover:border-academic-cta hover:shadow-card hover:ring-2 hover:ring-academic-cta/20 cursor-pointer transition-all duration-200 flex items-center gap-3 sm:gap-3.5 group focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                  onClick={() => setActiveImage(res)}
                >
                  {/* Thumbnail with uncropped contain image */}
                  <div className="w-20 sm:w-22 h-20 sm:h-22 rounded-xl overflow-hidden bg-white flex-shrink-0 relative border border-slate-200/90 p-1 group-hover:border-primary/40 transition-colors">
                    <img
                      src={res.image}
                      alt={res.caption}
                      className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-academic-heading/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-xl">
                      <ZoomIn size={18} />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-1 sm:space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-bold text-cta bg-academic-light-blue px-2 py-0.5 rounded-md border border-blue-200 truncate max-w-[65%] whitespace-nowrap min-w-0">
                        {res.badge || t('results.categoryOfficial')}
                      </span>
                      {res.score && (
                        <span className="text-xs font-extrabold text-primary font-heading flex-shrink-0">
                          {res.score}
                        </span>
                      )}
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-academic-heading font-heading leading-snug line-clamp-1 group-hover:text-cta transition-colors">
                      {res.studentName || res.caption}
                    </h4>

                    {res.skills && (
                      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-slate-600 font-medium">
                        {res.skills.reading && (
                          <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-[10px]">
                            R: {res.skills.reading}
                          </span>
                        )}
                        {res.skills.listening && (
                          <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-[10px]">
                            L: {res.skills.listening}
                          </span>
                        )}
                        {res.skills.speaking && (
                          <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-[10px]">
                            S: {res.skills.speaking}
                          </span>
                        )}
                        {res.skills.english && (
                          <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-[10px]">
                            {t('results.english')}: {res.skills.english}
                          </span>
                        )}
                      </div>
                    )}

                    <p className="text-[11px] text-academic-muted line-clamp-1">
                      {res.caption}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* View All Achievements Link */}
            <div className="pt-2">
              <Link to={ROUTES.RESULTS} className="block">
                <Button
                  variant="outline"
                  size="md"
                  className="w-full justify-center bg-white hover:bg-academic-light-blue hover:border-cta text-primary font-bold shadow-xs"
                  icon={<ArrowRight size={16} />}
                >
                  {t('results.viewAllBtn')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Direct Feedback Slider (Full-Width Edge-to-Edge Without Hard Separator Line) */}
      <div className="mt-14 sm:mt-20">
        <div className="app-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cta uppercase tracking-wider">
                <MessageSquare size={14} />
                <span>{t('results.feedbackGalleryBadge')}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-academic-heading font-heading">
                {t('results.feedbackGalleryTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-academic-muted">
                {t('results.feedbackGallerySubtitle')}
              </p>
            </div>

            <a
              href={testimonials.fbUrl || APP_INFO.SOCIAL_LINKS.FEEDBACK_POST || APP_INFO.SOCIAL_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-xs font-bold text-cta hover:bg-blue-100 hover:text-primary transition-all flex-shrink-0 self-start sm:self-auto shadow-xs"
            >
              <span>{t('results.viewMoreResults')}</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Full-Width Carousel Breakout */}
        <div className="w-full relative px-2 sm:px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.3}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              480: { slidesPerView: 1.8, spaceBetween: 16 },
              640: { slidesPerView: 2.4, spaceBetween: 18 },
              768: { slidesPerView: 3.2, spaceBetween: 20 },
              1024: { slidesPerView: 4.2, spaceBetween: 20 },
              1280: { slidesPerView: 5.2, spaceBetween: 22 },
              1536: { slidesPerView: 6.0, spaceBetween: 24 },
            }}
            className="pb-12 !px-2"
          >
            {feedbacks.map((fb) => (
              <SwiperSlide key={fb.id} className="h-auto">
                <button
                  type="button"
                  className="w-full text-left group relative rounded-2xl bg-academic-soft-white border border-slate-200 shadow-xs hover:border-academic-cta hover:shadow-card-hover hover:ring-2 hover:ring-academic-cta/20 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                  onClick={() => setActiveImage(fb)}
                >
                  {/* Top Meta Bar */}
                  <div className="px-3.5 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between gap-2 w-full min-w-0">
                    <span className="text-[11px] font-bold text-academic-heading truncate flex-1 min-w-0">
                      {fb.author || 'Học viên HEH'}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex-shrink-0 max-w-[55%] whitespace-nowrap min-w-0">
                      <Star size={11} className="text-amber-500 fill-amber-500 flex-shrink-0" />
                      <span className="truncate">{fb.tag || 'Đánh giá 5 sao'}</span>
                    </span>
                  </div>

                  {/* Screenshot Image Frame - Contain to keep full chat readable */}
                  <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-900/5 relative p-1.5 flex items-center justify-center">
                    <img
                      src={fb.image}
                      alt={fb.caption}
                      loading="lazy"
                      className="w-full h-full object-contain rounded-xl drop-shadow-xs group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-xl">
                      <div className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-xs font-bold shadow-md">
                        <ZoomIn size={15} />
                        <span>{t('results.viewScore')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Caption & Course Tag Footer */}
                  <div className="p-3 bg-white border-t border-slate-100 flex flex-col justify-between flex-1 space-y-2 w-full min-w-0">
                    <p className="text-xs text-slate-700 font-medium leading-snug line-clamp-2 italic">
                      "{fb.caption}"
                    </p>
                    {fb.course && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-academic-muted truncate max-w-full min-w-0 whitespace-nowrap">
                        <BookOpen size={12} className="text-cta flex-shrink-0" />
                        <span className="truncate">{fb.course}</span>
                      </span>
                    )}
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!activeImage}
        onClose={() => setActiveImage(null)}
        title={activeImage?.studentName || activeImage?.author || activeImage?.caption || t('results.badge')}
      >
        {activeImage && (
          <div className="space-y-4 p-1">
            <div className="flex items-center justify-center bg-slate-900/5 rounded-2xl p-2 border border-slate-200">
              <img
                src={activeImage.image}
                alt={activeImage.caption}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-md"
              />
            </div>
            {(activeImage.caption || activeImage.description) && (
              <div className="bg-academic-soft-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-academic-heading">
                    {activeImage.studentName || activeImage.author || activeImage.caption}
                  </h4>
                  {activeImage.score && (
                    <span className="px-2.5 py-0.5 rounded-md bg-primary text-white text-xs font-bold">
                      {activeImage.score}
                    </span>
                  )}
                </div>
                {activeImage.description && (
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeImage.description}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default StudentResults;
