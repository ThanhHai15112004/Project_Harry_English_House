import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Trophy,
  ExternalLink,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { PageHeader, Button } from '@/components/common';
import { useTestimonialsData, useDocumentTitle, ROUTES, APP_INFO } from '@/core';

export const ResultsPage = () => {
  const { t } = useTranslation();
  useDocumentTitle('results');

  const testimonials = useTestimonialsData();
  const [activeTab, setActiveTab] = useState('scorecards');

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
              <div className="text-3xl sm:text-4xl font-extrabold text-primary font-heading">8.0</div>
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

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
                {scorecards.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.caption || 'Bảng điểm IELTS'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 text-center bg-white border-t border-slate-100">
                      <span className="text-xs font-bold text-academic-heading block truncate">
                        {item.caption}
                      </span>
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

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {feedbacks.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.caption || 'Cảm nhận học viên'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 text-center bg-white border-t border-slate-100">
                      <span className="text-xs font-semibold text-slate-700 block truncate">
                        {item.caption}
                      </span>
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
    </MainLayout>
  );
};

export default ResultsPage;
