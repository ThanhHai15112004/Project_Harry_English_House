import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Award, Star, ZoomIn, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionTitle } from '@/components/common';

export const FeaturedStudentStory = ({ storyData, onOpenScorecard }) => {
  const { t } = useTranslation();

  if (!storyData) return null;

  return (
    <section id="student-story" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.results.studentStory.badge')}
          title={t('pages.results.studentStory.title')}
          subtitle={t('pages.results.studentStory.subtitle')}
        />

        {/* 50/50 Editorial Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-academic-soft-white/60 rounded-3xl p-6 sm:p-10 lg:p-12 border border-academic-border shadow-card">
          
          {/* Left Column (6 Cols): Real Photo & Scorecard Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200/90 shadow-card group">
              
              {/* Main Student Photo */}
              <div className="h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 relative">
                <img
                  src={storyData.image || '/src/assets/ki-niem/ki-niem-1.jpg'}
                  alt={storyData.studentName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-academic-heading/80 via-transparent to-transparent" />
                
                {/* Score badge chip */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-academic-heading/90 backdrop-blur-md border border-white/20 text-white shadow-md text-xs font-bold font-heading">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span>{storyData.score}</span>
                </div>

                {/* Bottom Student Info in Photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="text-lg sm:text-xl font-extrabold font-heading">
                    {storyData.studentName}
                  </div>
                  <p className="text-xs text-slate-200">
                    {storyData.examType}
                  </p>
                </div>
              </div>

              {/* Floating Scorecard Preview Card */}
              {storyData.scorecardImage && (
                <div
                  role="button"
                  tabIndex={0}
                  className="absolute -bottom-3 -right-3 sm:bottom-4 sm:right-4 w-44 sm:w-52 rounded-2xl bg-white p-2.5 border border-slate-200 shadow-xl hover:border-academic-cta transition-all duration-300 cursor-pointer group/card text-left"
                  onClick={() =>
                    onOpenScorecard &&
                    onOpenScorecard({
                      image: storyData.scorecardImage,
                      studentName: storyData.studentName,
                      score: storyData.score,
                      caption: `Bảng điểm ${storyData.score} của ${storyData.studentName}`,
                      description: storyData.tagline,
                    })
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenScorecard &&
                        onOpenScorecard({
                          image: storyData.scorecardImage,
                          studentName: storyData.studentName,
                          score: storyData.score,
                          caption: `Bảng điểm ${storyData.score} của ${storyData.studentName}`,
                          description: storyData.tagline,
                        });
                    }
                  }}
                >
                  <div className="h-24 w-full rounded-xl overflow-hidden bg-slate-900/5 p-1 relative flex items-center justify-center">
                    <img
                      src={storyData.scorecardImage}
                      alt="Bảng điểm chính thức"
                      className="w-full h-full object-contain rounded-lg group-hover/card:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover/card:opacity-100 flex items-center justify-center text-white transition-opacity rounded-lg">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                  <div className="pt-1.5 px-0.5 flex items-center justify-between text-[11px] font-bold text-academic-heading">
                    <span className="truncate">Bảng điểm thi thật</span>
                    <span className="text-cta font-heading">IDP/BC</span>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column (6 Cols): 3 Structured Concise Story Blocks */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header info */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                <Award size={13} className="text-achievement" />
                <span>{storyData.badge}</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-academic-heading font-heading leading-snug">
                {storyData.tagline}
              </h3>
            </div>

            {/* 3 Blocks: Start -> Process -> Result */}
            <div className="space-y-3.5">
              {storyData.blocks?.map((block) => (
                <div
                  key={block.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:border-academic-cta/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-academic-light-blue text-primary flex items-center justify-center text-xs font-black font-heading">
                      {block.stepNumber}
                    </span>
                    <h4 className="text-sm font-bold text-academic-heading font-heading">
                      {block.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    {block.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3">
              <Quote size={20} className="text-cta flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                "{t('pages.results.studentStory.studentQuote')}"
              </p>
            </div>

            {/* CTA action */}
            {storyData.scorecardImage && (
              <div className="pt-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-xs hover:bg-blue-800 transition-all shadow-md cursor-pointer"
                  onClick={() =>
                    onOpenScorecard &&
                    onOpenScorecard({
                      image: storyData.scorecardImage,
                      studentName: storyData.studentName,
                      score: storyData.score,
                      caption: `Bảng điểm ${storyData.score} của ${storyData.studentName}`,
                      description: storyData.tagline,
                    })
                  }
                >
                  <span>{t('pages.results.studentStory.viewScore')}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedStudentStory;
