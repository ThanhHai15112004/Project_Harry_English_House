import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/common';
import { APP_INFO } from '@/core';

export const ContactHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-academic-soft-white border-b border-academic-border overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] flex items-center justify-center">
      {/* Soft #EAF2FF Abstract Backdrop Shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-academic-light-blue/60 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-blue-50/70 blur-2xl pointer-events-none" />

      <div className="app-container relative z-10 text-center max-w-3xl mx-auto space-y-5 sm:space-y-6">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 shadow-2xs">
          <Sparkles size={14} className="text-cta animate-pulse" />
          <span className="text-xs font-extrabold uppercase tracking-wider text-cta font-heading">
            {t('pages.contact.heroBadge')}
          </span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-academic-heading font-heading tracking-tight leading-tight">
          {t('pages.contact.heroTitle')}
        </h1>

        {/* Subtitle Body */}
        <p className="text-sm sm:text-base text-academic-body leading-relaxed max-w-2xl mx-auto font-normal">
          {t('pages.contact.heroSubtitle')}
        </p>

        {/* 2 Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <a href={`tel:${APP_INFO.CONTACT.HOTLINE_RAW}`}>
            <Button
              variant="primary"
              size="md"
              className="font-bold shadow-md hover:shadow-lg cursor-pointer"
              icon={<Phone size={16} />}
            >
              {t('pages.contact.heroCallBtn')}
            </Button>
          </a>

          <a
            href={APP_INFO.SOCIAL_LINKS.FACEBOOK_FANPAGE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="md"
              className="bg-white hover:bg-slate-50 border-slate-300 font-bold text-academic-heading shadow-2xs cursor-pointer"
              icon={<MessageCircle size={16} className="text-cta" />}
            >
              {t('pages.contact.heroChatBtn')}
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;
