import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Target, 
  GitBranch, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SECTION_IDS, scrollToSection } from '@/core';
import { SectionTitle, Button } from '@/components/common';

export const LearningMethod = () => {
  const { t } = useTranslation();

  const steps = [
    {
      num: '01',
      icon: Target,
      tag: t('method.step1Tag'),
      title: t('method.step1Title'),
      desc: t('method.step1Desc'),
    },
    {
      num: '02',
      icon: GitBranch,
      tag: t('method.step2Tag'),
      title: t('method.step2Title'),
      desc: t('method.step2Desc'),
    },
    {
      num: '03',
      icon: Users,
      tag: t('method.step3Tag'),
      title: t('method.step3Title'),
      desc: t('method.step3Desc'),
    },
    {
      num: '04',
      icon: CheckCircle2,
      tag: t('method.step4Tag'),
      title: t('method.step4Title'),
      desc: t('method.step4Desc'),
    },
    {
      num: '05',
      icon: TrendingUp,
      tag: t('method.step5Tag'),
      title: t('method.step5Title'),
      desc: t('method.step5Desc'),
    },
  ];

  return (
    <section id={SECTION_IDS.METHOD} className="py-16 sm:py-20 lg:py-24 bg-academic-soft-white border-y border-academic-border relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-academic-light-blue/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

      <div className="app-container relative z-10">
        <SectionTitle
          badge={t('method.badge')}
          title={t('method.title')}
          subtitle={t('method.subtitle')}
        />

        {/* DESKTOP LAYOUT (5 Columns with Horizontal Progress Connector) */}
        <div className="hidden lg:block relative mt-12">
          {/* Horizontal Progress Connector Line */}
          <div className="absolute top-6 left-[10%] right-[10%] h-1 bg-gradient-to-r from-academic-primary via-academic-cta to-academic-sky rounded-full -z-0 opacity-40" />

          <div className="grid grid-cols-5 gap-4 xl:gap-5 relative z-10">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.num} className="flex flex-col items-center group">
                  {/* Step Top Node / Bubble */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-academic-primary text-academic-primary flex items-center justify-center font-heading font-black text-sm shadow-md mb-6 group-hover:bg-academic-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-glow-primary transition-all duration-300 z-10">
                    {step.num}
                  </div>

                  {/* Step Card Container */}
                  <div className="w-full flex-1 bg-white rounded-2xl p-5 border border-academic-border hover:border-academic-cta/50 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-xs">
                    {/* Watermark Step Number */}
                    <div className="absolute -top-1 -right-1 text-4xl font-black font-heading text-slate-100/80 group-hover:text-blue-50/70 transition-colors pointer-events-none select-none">
                      {step.num}
                    </div>

                    <div className="relative z-10 space-y-3">
                      {/* Icon & Mini Tag */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-11 h-11 rounded-xl bg-academic-light-blue text-academic-primary flex items-center justify-center group-hover:bg-academic-primary group-hover:text-white group-hover:rotate-3 transition-all duration-300 shadow-xs flex-shrink-0">
                          <IconComponent size={20} />
                        </div>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-academic-surface text-academic-cta border border-blue-100/80">
                          {step.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1.5">
                        <h3 className="text-base font-bold text-academic-heading font-heading group-hover:text-academic-primary transition-colors leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs text-academic-body leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Subtle Accent Bottom Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-academic-primary to-academic-sky opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (Vertical Continuous Timeline) */}
        <div className="lg:hidden relative mt-10 max-w-xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-academic-primary via-academic-cta to-academic-sky rounded-full" />

          <div className="space-y-5 sm:space-y-6">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.num} className="relative flex items-start gap-4 sm:gap-5 pl-1 group">
                  {/* Step Node Marker */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-academic-primary text-academic-primary flex items-center justify-center font-heading font-black text-xs sm:text-sm shadow-sm flex-shrink-0 relative z-10 group-hover:bg-academic-primary group-hover:text-white transition-colors mt-3.5">
                    {step.num}
                  </div>

                  {/* Step Card */}
                  <div className="flex-1 bg-white rounded-2xl p-4 sm:p-5 border border-academic-border shadow-xs hover:border-academic-cta/50 transition-all relative overflow-hidden">
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="inline-flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-academic-light-blue text-academic-primary flex items-center justify-center flex-shrink-0">
                          <IconComponent size={16} />
                        </div>
                        <span className="text-xs font-bold text-academic-cta font-heading">
                          {t('method.stepPrefix')} {step.num}
                        </span>
                      </div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-academic-surface text-academic-cta border border-blue-100">
                        {step.tag}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-academic-heading font-heading mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-academic-body leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM GUARANTEE & CALL TO ACTION BANNER */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-academic-border shadow-card flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle Decorative Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-academic-light-blue/50 via-white to-white pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-academic-primary text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
              <Sparkles size={22} className="text-sky-300" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-academic-cta uppercase tracking-wider">
                <ShieldCheck size={14} />
                <span>{t('method.ctaBannerTag')}</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                {t('method.ctaBannerTitle')}
              </h4>
              <p className="text-xs sm:text-sm text-academic-body">
                {t('method.ctaBannerDesc')}
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
            <Button
              variant="primary"
              className="w-full md:w-auto btn-shimmer shadow-glow-cta px-6 py-3 text-xs sm:text-sm font-bold justify-center"
              onClick={() => scrollToSection(SECTION_IDS.CONTACT)}
              icon={<ArrowRight size={16} />}
            >
              {t('method.ctaBannerBtn')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningMethod;

