import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle } from 'lucide-react';
import { APP_INFO } from '@/core';

export const MobileStickyContact = ({ onScrollToForm }) => {
  const { t } = useTranslation();

  return (
    <aside
      aria-label={t('pages.contact.heroBadge')}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl safe-area-bottom"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${APP_INFO.CONTACT.HOTLINE_RAW}`}
          className="h-11 px-4 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
        >
          <Phone size={16} />
          <span>{t('pages.contact.stickyCall')}</span>
        </a>

        {/* Chat / Scroll to Form Button */}
        <button
          type="button"
          onClick={onScrollToForm}
          className="h-11 px-4 rounded-xl bg-academic-light-blue border border-blue-200 text-primary font-bold text-xs flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer"
        >
          <MessageCircle size={16} className="text-cta" />
          <span>{t('pages.contact.stickyChat')}</span>
        </button>
      </div>
    </aside>
  );
};

export default MobileStickyContact;
