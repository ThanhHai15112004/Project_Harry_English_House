import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowDown, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/common';

export const AboutHero = ({ founderData }) => {
  const { t } = useTranslation();

  const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20 bg-white border-b border-academic-border overflow-hidden">
      {/* Soft Backdrop Geometric Shapes */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-academic-light-blue/50 blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-blue-50/60 blur-2xl pointer-events-none" />

      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[580px] lg:min-h-[640px]">
          
          {/* Content Column (42% -> 5 Cols on desktop) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 shadow-2xs">
              <Sparkles size={14} className="text-cta" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-cta font-heading">
                {t('pages.about.heroBadge')}
              </span>
            </div>

            {/* Name & Academic Titles */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-academic-heading font-heading tracking-tight leading-tight">
                {founderData?.name || t('pages.about.heroName')}
              </h1>
              
              <div className="text-lg sm:text-xl font-bold text-primary font-heading leading-snug">
                {t('pages.about.heroTagline')}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-academic-body leading-relaxed max-w-xl font-normal">
              {t(founderData?.shortBioKey || 'pages.about.heroDesc')}
            </p>

            {/* Credentials Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-academic-soft-white border border-slate-200 text-xs font-bold text-academic-heading shadow-2xs">
                <Award size={15} className="text-achievement" />
                <span>{t('pages.about.heroIeltsBadge')}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-academic-soft-white border border-slate-200 text-xs font-bold text-academic-heading shadow-2xs">
                <ShieldCheck size={15} className="text-primary" />
                <span>{t('about.idpPartner')}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Button
                variant="primary"
                size="md"
                className="font-bold shadow-md hover:shadow-lg cursor-pointer"
                icon={<ArrowDown size={16} />}
                onClick={() => scrollToAnchor('harry-story')}
              >
                {t('pages.about.heroCtaStory')}
              </Button>
              <Button
                variant="outline"
                size="md"
                className="bg-white hover:bg-slate-50 font-bold border-slate-300 text-academic-heading cursor-pointer shadow-2xs"
                onClick={() => scrollToAnchor('philosophy')}
              >
                {t('pages.about.heroCtaPhilosophy')}
              </Button>
            </div>

          </div>

          {/* Visual Column (58% -> 7 Cols on desktop) - Editorial Authority Portrait */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              
              {/* Soft #EAF2FF Background Geometric Accent Block */}
              <div className="absolute inset-0 bg-academic-light-blue rounded-3xl -rotate-2 transform scale-105 transition-transform group-hover:rotate-0" />

              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200/90 shadow-2xl group">
                <div className="h-[440px] sm:h-[500px] w-full rounded-2xl overflow-hidden bg-slate-100 relative">
                  <img
                    src={founderData?.academicPhoto || founderData?.avatar || '/src/assets/Ministry-of-Higher-Education-2025/thuyet-trinh-1.jpg'}
                    alt="Thầy Harry (Anh Khôi) - Founder of Harry English House"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-academic-heading/80 via-transparent to-transparent" />
                  
                  {/* Floating IDP Partner Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-primary font-bold text-xs shadow-md border border-white/80">
                    <ShieldCheck size={16} className="text-primary" />
                    <span>Đối tác chiến lược IDP IELTS</span>
                  </div>

                  {/* Bottom Role & Name */}
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <div className="text-lg sm:text-xl font-extrabold font-heading">
                      Thầy Harry (Anh Khôi)
                    </div>
                    <p className="text-xs text-blue-200 font-medium">
                      Founder & Head Instructor • IELTS 8.0 Official
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Metric Card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-xl flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center font-bold">
                  <CheckCircle2 size={22} className="text-cta" />
                </div>
                <div>
                  <div className="text-xs font-black text-primary font-heading">8+ Năm Giảng Dạy</div>
                  <div className="text-[10px] text-academic-muted">Đào tạo chuyên sâu & May đo lộ trình</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
