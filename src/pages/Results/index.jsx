import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/components/layout';
import { Modal } from '@/components/common';
import { useTestimonialsData, useDocumentTitle, formatStudentName } from '@/core';
import {
  ResultsHero,
  ResultHighlights,
  StudentResultsCatalog,
  BeforeAfterShowcase,
  FeaturedStudentStory,
  RealFeedbacksGrid,
  ResultsGallery,
  ResultsBottomCta,
} from './components';

export const ResultsPage = () => {
  const { t, i18n } = useTranslation();
  useDocumentTitle('results');

  const testimonials = useTestimonialsData();
  const [activeModalItem, setActiveModalItem] = useState(null);

  const highlights = testimonials?.highlights || [];
  const results = testimonials?.results || [];
  const beforeAfterList = testimonials?.beforeAfter || [];
  const featuredStory = testimonials?.featuredStory || null;
  const feedbacks = testimonials?.feedbacks || [];
  const gallery = testimonials?.gallery || [];

  const modalDisplayName = activeModalItem?.studentName
    ? formatStudentName(activeModalItem.studentName, i18n.language)
    : null;

  return (
    <MainLayout>
      {/* 1. Academic Centered Cinema Hero Showcase */}
      <ResultsHero showcaseResults={results} onOpenScorecard={setActiveModalItem} />

      {/* 2. Transparent Highlights Bar with Dividers */}
      <ResultHighlights highlights={highlights} />

      {/* 3. Program Filter & Student Results Showcase (Masonry 1 Big + Small) */}
      <StudentResultsCatalog
        results={results}
        onOpenScorecard={setActiveModalItem}
      />

      {/* 4. Before -> After Progression Breakdown */}
      <BeforeAfterShowcase
        beforeAfterList={beforeAfterList}
        onOpenScorecard={setActiveModalItem}
      />

      {/* 5. Featured Student Story (50/50 Layout with 3 concise blocks) */}
      <FeaturedStudentStory
        storyData={featuredStory}
        onOpenScorecard={setActiveModalItem}
      />

      {/* 6. Real Feedbacks Grid (Authentic chat screenshots) */}
      <RealFeedbacksGrid
        feedbacks={feedbacks}
        onOpenFeedback={setActiveModalItem}
      />

      {/* 7. Results & Certifications Archive Gallery */}
      <ResultsGallery
        galleryItems={gallery}
        onOpenGalleryItem={setActiveModalItem}
      />

      {/* 8. Conversion Bottom CTA (Dark Navy) */}
      <ResultsBottomCta />

      {/* Shared Lightbox Modal for Uncropped Scorecards & Feedbacks */}
      <Modal
        isOpen={!!activeModalItem}
        onClose={() => setActiveModalItem(null)}
        title={
          modalDisplayName ||
          activeModalItem?.author ||
          activeModalItem?.title ||
          activeModalItem?.caption ||
          t('pages.results.badge')
        }
      >
        {activeModalItem && (
          <div className="space-y-4 p-1">
            <div className="flex items-center justify-center bg-slate-900/5 rounded-2xl p-2 border border-slate-200">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.caption || activeModalItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-md"
              />
            </div>
            
            {(activeModalItem.caption || activeModalItem.description || activeModalItem.sub) && (
              <div className="bg-academic-soft-white p-4 rounded-xl border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-academic-heading font-heading">
                    {activeModalItem.studentName || activeModalItem.author || activeModalItem.title || activeModalItem.caption}
                  </h4>
                  {activeModalItem.score && (
                    <span className="px-2.5 py-0.5 rounded-lg bg-primary text-white text-xs font-bold font-heading">
                      {activeModalItem.score}
                    </span>
                  )}
                </div>
                {activeModalItem.description && (
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeModalItem.description}
                  </p>
                )}
                {activeModalItem.course && (
                  <p className="text-[11px] text-cta font-semibold">
                    {activeModalItem.course}
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
