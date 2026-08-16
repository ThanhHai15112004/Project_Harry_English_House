import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Trophy,
  ExternalLink,
  MessageSquare,
  ArrowRight,
  ZoomIn,
  Star,
  BookOpen,
} from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { PageHeader, Button, Modal } from '@/components/common';
import { useTestimonialsData, useDocumentTitle, ROUTES, APP_INFO } from '@/core';

export const ResultsPage = () => {
  const { t } = useTranslation();
  useDocumentTitle('results');

  const testimonials = useTestimonialsData();
  const [activeTab, setActiveTab] = useState('scorecards');
  const [activeImage, setActiveImage] = useState(null);

  const scorecards = testimonials?.results || [];
  const feedbacks = testimonials?.feedbacks || [];

  return (
    <MainLayout>
      {/* 1. Header Banner */}
      <PageHeader
        badge={t('pages.results.badge')}
        title={t('pages.results.title')}
        subtitle={t('pages.results.subtitle')}
        breadcrumbItems={[{ label: t('nav.results') }]}
      />

      {/* 2. Achievement Highlights Numbers */}
      <section className="py-10 bg-white border-b border-academic-border">
        <div className="app-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-academic-soft-white border border-slate-200 text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary font-heading">8.5</div>
              <div className="text-xs font-bold text-slate-800 uppercase">{t('pages.results.stat1Label')}</div>
              <p className="text-[11px] text-slate-500">{t('pages.results.stat1Desc')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-academic-soft-white border border-slate-200 text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary font-heading">1.000+</div>
              <div className="text-xs font-bold text-slate-800 uppercase">{t('pages.results.stat2Label')}</div>
              <p className="text-[11px] text-slate-500">{t('pages.results.stat2Desc')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-academic-soft-white border border-slate-200 text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary font-heading">990+</div>
              <div className="text-xs font-bold text-slate-800 uppercase">{t('pages.results.stat3Label')}</div>
              <p className="text-[11px] text-slate-500">{t('pages.results.stat3Desc')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-academic-soft-white border border-slate-200 text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-achievement font-heading">100%</div>
              <div className="text-xs font-bold text-slate-800 uppercase">{t('pages.results.stat4Label')}</div>
              <p className="text-[11px] text-slate-500">{t('pages.results.stat4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Results & Feedbacks Section with Tabs */}
      <section className="py-14 sm:py-20 bg-academic-soft-white">
        <div className="app-container">
          {/* Tab Selector */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <button
              type="button"
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'scorecards'
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
              onClick={() => setActiveTab('scorecards')}
            >
              <Trophy size={16} />
              <span>{t('pages.results.tabScorecards')} ({scorecards.length})</span>
            </button>

            <button
              type="button"
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'feedbacks'
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
              onClick={() => setActiveTab('feedbacks')}
            >
              <MessageSquare size={16} />
              <span>{t('pages.results.tabFeedbacks')} ({feedbacks.length})</span>
            </button>
          </div>

          {/* Tab 1: Real Exam Scorecards */}
          {activeTab === 'scorecards' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <h3 className="text-xl font-bold text-academic-heading font-heading">
                  {t('pages.results.scorecardsTitle')}
                </h3>
                <p className="text-xs text-slate-600">
                  {t('pages.results.scorecardsDesc')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {scorecards.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-academic-cta hover:shadow-card-hover hover:ring-2 hover:ring-academic-cta/20 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
                  >
                    {/* Header */}
                    <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-academic-light-blue text-cta text-[11px] font-bold border border-blue-200">
                          {item.badge || 'Verified'}
                        </span>
                        <span className="text-xs text-academic-muted font-semibold truncate">
                          {item.examType}
                        </span>
                      </div>
                      {item.score && (
                        <span className="px-2.5 py-1 rounded-xl bg-primary text-white text-xs font-extrabold font-heading">
                          {item.score}
                        </span>
                      )}
                    </div>

                    {/* Uncropped Contain Frame */}
                    <button
                      type="button"
                      className="h-60 sm:h-64 overflow-hidden bg-slate-900/5 p-3 flex items-center justify-center relative cursor-pointer group-hover:bg-slate-900/10 transition-colors w-full focus:outline-hidden"
                      onClick={() => setActiveImage(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.caption || 'Bảng điểm IELTS'}
                        className="w-full h-full object-contain rounded-xl drop-shadow-xs group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center gap-2 text-white transition-opacity rounded-xl m-2">
                        <div className="px-3.5 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-xs font-bold shadow-md">
                          <ZoomIn size={15} />
                          <span>{t('results.viewScore')}</span>
                        </div>
                      </div>
                    </button>

                    {/* Info */}
                    <div className="p-4.5 bg-white border-t border-slate-100 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-academic-heading font-heading">
                          {item.studentName || item.caption}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                          {item.description || item.caption}
                        </p>
                      </div>

                      {item.skills && (
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 text-[11px]">
                          {item.skills.listening && (
                            <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                              L: {item.skills.listening}
                            </span>
                          )}
                          {item.skills.reading && (
                            <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                              R: {item.skills.reading}
                            </span>
                          )}
                          {item.skills.writing && (
                            <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                              W: {item.skills.writing}
                            </span>
                          )}
                          {item.skills.speaking && (
                            <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                              S: {item.skills.speaking}
                            </span>
                          )}
                          {item.skills.english && (
                            <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                              Tiếng Anh: {item.skills.english}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Feedbacks & Messages */}
          {activeTab === 'feedbacks' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <h3 className="text-xl font-bold text-academic-heading font-heading">
                  {t('pages.results.feedbacksTitle')}
                </h3>
                <p className="text-xs text-slate-600">
                  {t('pages.results.feedbacksDesc')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {feedbacks.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-academic-cta hover:shadow-card-hover hover:ring-2 hover:ring-academic-cta/20 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
                  >
                    <div className="px-3.5 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between gap-2 min-w-0">
                      <span className="text-[11px] font-bold text-academic-heading truncate flex-1 min-w-0">
                        {item.author || 'Học viên HEH'}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex-shrink-0 max-w-[55%] whitespace-nowrap min-w-0">
                        <Star size={11} className="text-amber-500 fill-amber-500 flex-shrink-0" />
                        <span className="truncate">{item.tag || 'Đánh giá 5 sao'}</span>
                      </span>
                    </div>

                    <button
                      type="button"
                      className="h-64 sm:h-72 overflow-hidden bg-slate-900/5 p-2 flex items-center justify-center relative cursor-pointer group-hover:bg-slate-900/10 transition-colors w-full focus:outline-hidden"
                      onClick={() => setActiveImage(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.caption || 'Cảm nhận học viên'}
                        className="w-full h-full object-contain rounded-xl drop-shadow-xs group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-xl m-2">
                        <div className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-xs font-bold shadow-md">
                          <ZoomIn size={15} />
                          <span>{t('results.viewScore')}</span>
                        </div>
                      </div>
                    </button>

                    <div className="p-3.5 text-left bg-white border-t border-slate-100 space-y-1 min-w-0">
                      <p className="text-xs font-medium text-slate-700 italic line-clamp-2">
                        "{item.caption}"
                      </p>
                      {item.course && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-academic-muted font-semibold truncate max-w-full min-w-0 whitespace-nowrap">
                          <BookOpen size={12} className="text-cta flex-shrink-0" />
                          <span className="truncate">{item.course}</span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Social Proof Link */}
          <div className="text-center pt-10">
            <a
              href={APP_INFO.SOCIAL_LINKS.FEEDBACK_POST || APP_INFO.SOCIAL_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-blue-200 text-primary font-bold text-sm shadow-xs hover:shadow-md hover:bg-blue-50 transition-all"
            >
              <span>{t('pages.results.viewFanpageBtn')}</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Consultation Banner */}
      <section className="py-14 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="app-container text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading">
            {t('pages.results.bottomCtaTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            {t('pages.results.bottomCtaDesc')}
          </p>
          <div className="pt-2">
            <Link to={ROUTES.CONTACT}>
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold shadow-lg" icon={<ArrowRight size={16} />}>
                {t('pages.results.bottomCtaBtn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!activeImage}
        onClose={() => setActiveImage(null)}
        title={activeImage?.studentName || activeImage?.author || activeImage?.caption || t('pages.results.badge')}
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
    </MainLayout>
  );
};

export default ResultsPage;

