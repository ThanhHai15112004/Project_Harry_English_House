import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/common';
import { ROUTES, APP_INFO } from '@/core';

export const CoursesBottomCta = () => {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-academic-heading text-white relative overflow-hidden">
      {/* Subtle Background Abstract Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_50%)] pointer-events-none" />

      <div className="app-container relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold border border-white/15">
              <ShieldCheck size={14} />
              <span>{t('footer.partnerBadge')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading leading-tight text-white">
              {t('pages.courses.bottomCtaTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              {t('pages.courses.bottomCtaDesc')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link to={ROUTES.CONTACT} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-academic-heading hover:bg-slate-100 font-extrabold shadow-xl"
                icon={<ArrowRight size={16} />}
              >
                {t('pages.courses.bottomCtaBtn')}
              </Button>
            </Link>

            <a
              href={`tel:${APP_INFO.CONTACT.HOTLINE_RAW}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 text-sm font-bold transition-colors"
            >
              <Phone size={16} />
              <span>{t('pages.courses.bottomHotlineBtn')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesBottomCta;
