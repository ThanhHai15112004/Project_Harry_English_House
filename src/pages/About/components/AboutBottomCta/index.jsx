import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/common';
import { ROUTES } from '@/core';

export const AboutBottomCta = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-academic-heading text-white relative overflow-hidden">
      {/* Soft Glow Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-academic-sky/10 blur-3xl pointer-events-none" />

      <div className="app-container relative z-10 text-center max-w-3xl mx-auto space-y-6">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-2xs">
          <Sparkles size={14} className="text-academic-sky animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-blue-200 font-heading">
            {t('pages.about.bottomCta.badge')}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white leading-tight">
          {t('pages.about.bottomCta.title')}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
          {t('pages.about.bottomCta.desc')}
        </p>

        {/* Conversion Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link to={ROUTES.CONTACT}>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-slate-100 font-extrabold shadow-xl hover:shadow-2xl transition-all cursor-pointer border-0"
              icon={<ArrowRight size={18} />}
            >
              {t('pages.about.bottomCta.consultBtn')}
            </Button>
          </Link>

          <Link to={ROUTES.COURSES}>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border border-white/40 text-white hover:bg-white/10 font-bold transition-all cursor-pointer"
              icon={<BookOpen size={17} />}
            >
              {t('pages.about.bottomCta.coursesBtn')}
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutBottomCta;
