import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, ArrowDown, Sparkles, CheckCircle2, ShieldCheck, ZoomIn } from 'lucide-react';
import { Button } from '@/components/common';

export const ResultsHero = ({ onOpenScorecard }) => {
  const { t } = useTranslation();

  const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-academic-soft-white border-b border-academic-border overflow-hidden">
      {/* Background Soft Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-academic-light-blue/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-blue-100/40 blur-2xl pointer-events-none" />

      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Content Column (45% -> 5 Cols on desktop) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Academic Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-academic-light-blue border border-blue-200 shadow-2xs">
              <Sparkles size={14} className="text-cta animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-primary font-heading">
                {t('pages.results.badge')}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-academic-heading font-heading leading-tight tracking-tight">
              {t('pages.results.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-academic-body leading-relaxed max-w-xl font-normal">
              {t('pages.results.subtitle')}
            </p>

            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-academic-heading font-semibold">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>{t('pages.results.heroVerified')}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <ShieldCheck size={15} className="text-primary" />
                <span>{t('pages.results.heroProofCard')}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Button
                variant="primary"
                size="md"
                className="font-bold shadow-md hover:shadow-lg cursor-pointer"
                icon={<ArrowDown size={16} />}
                onClick={() => scrollToAnchor('results-catalog')}
              >
                {t('pages.results.heroCtaResults')}
              </Button>
              <Button
                variant="outline"
                size="md"
                className="bg-white hover:bg-slate-50 font-bold border-slate-300 text-academic-heading cursor-pointer shadow-2xs"
                onClick={() => scrollToAnchor('student-story')}
              >
                {t('pages.results.heroCtaStory')}
              </Button>
            </div>
          </div>

          {/* Visual Column (55% -> 7 Cols on desktop) - Editorial Collage */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Collage Container */}
              <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
                
                {/* 1. Large Real Student Class / Activity Photo (Col 1-7) */}
                <div className="col-span-7 rounded-3xl overflow-hidden bg-white p-2 border border-slate-200/90 shadow-card relative group">
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src="/src/assets/ki-niem/ki-niem-1.jpg"
                      alt="Học viên Harry English House"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-academic-heading/70 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/90 backdrop-blur-xs text-[10px] font-bold text-white uppercase">
                        <Award size={11} />
                        <span>IELTS 8.5 Overall</span>
                      </div>
                      <p className="text-xs font-bold font-heading truncate">Nguyễn Diễm Quỳnh</p>
                      <p className="text-[10px] text-slate-200 truncate">{t('pages.results.heroStudentRole')}</p>
                    </div>
                  </div>
                </div>

                {/* 2. Official Scorecard & Certificate Stack (Col 8-12) */}
                <div className="col-span-5 space-y-3 sm:space-y-4">
                  
                  {/* Real Scorecard Thumbnail Card */}
                  <button
                    type="button"
                    className="w-full rounded-2xl bg-white p-2.5 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-academic-cta hover:ring-2 hover:ring-academic-cta/20 transition-all duration-300 cursor-pointer group text-left focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                    onClick={() =>
                      onOpenScorecard?.({
                        image: '/src/assets/feedback-hoc-vien/ket-qua-1.jpg',
                        studentName: 'Nguyễn Diễm Quỳnh',
                        score: '8.5',
                        caption: 'Bảng điểm IELTS 8.5 Overall (L: 9.0 • R: 9.0 • S: 8.5 • W: 8.0)',
                        description: 'Đạt điểm tuyệt đối 9.0 Listening & 9.0 Reading cùng 8.5 Speaking sau lộ trình rèn luyện chuyên sâu tại HEH.',
                      })
                    }
                  >
                    <div className="h-32 sm:h-36 w-full rounded-xl overflow-hidden bg-slate-900/5 p-1 relative flex items-center justify-center">
                      <img
                        src="/src/assets/feedback-hoc-vien/ket-qua-1.jpg"
                        alt="Bảng điểm IELTS 8.5"
                        className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-lg">
                        <div className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1 text-[11px] font-bold">
                          <ZoomIn size={13} />
                          <span>Xem bảng điểm</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 px-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-academic-heading font-heading">IDP IELTS 8.5</span>
                      <span className="text-[10px] font-extrabold text-cta bg-blue-50 px-1.5 py-0.5 rounded">9.0 L/R</span>
                    </div>
                  </button>

                  {/* Second Scorecard (Minh Hoàng 8.0) */}
                  <button
                    type="button"
                    className="w-full rounded-2xl bg-white p-2.5 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-academic-cta hover:ring-2 hover:ring-academic-cta/20 transition-all duration-300 cursor-pointer group text-left focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                    onClick={() =>
                      onOpenScorecard?.({
                        image: '/src/assets/feedback-hoc-vien/ket-qua-2.jpg',
                        studentName: 'Trần Minh Hoàng',
                        score: '8.0',
                        caption: 'Chinh phục IELTS 8.0 ấn tượng (Reading 9.0, Listening 8.5)',
                        description: 'Nâng band điểm toàn diện với phương pháp làm bài tối ưu và chiến thuật xử lý đề thi thực chiến.',
                      })
                    }
                  >
                    <div className="h-28 sm:h-32 w-full rounded-xl overflow-hidden bg-slate-900/5 p-1 relative flex items-center justify-center">
                      <img
                        src="/src/assets/feedback-hoc-vien/ket-qua-2.jpg"
                        alt="Bảng điểm IELTS 8.0"
                        className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-lg">
                        <div className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1 text-[11px] font-bold">
                          <ZoomIn size={13} />
                          <span>Xem bảng điểm</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-1.5 px-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-academic-heading font-heading">IELTS 8.0</span>
                      <span className="text-[10px] font-extrabold text-achievement bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">Reading 9.0</span>
                    </div>
                  </button>

                </div>

              </div>

              {/* Floating Highlight Metric Chip */}
              <div className="absolute -bottom-4 left-4 sm:left-8 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/90 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center font-bold">
                  <Award size={20} className="text-cta" />
                </div>
                <div>
                  <div className="text-xs font-bold text-academic-heading font-heading">Học Thật - Điểm Thật</div>
                  <div className="text-[10px] text-academic-muted">100% Bảng điểm có giá trị đối chứng</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsHero;
