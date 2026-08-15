import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Sparkles, Heart } from 'lucide-react';
import { APP_INFO, NAV_ITEMS, SECTION_IDS } from '@/core';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="app-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white font-heading font-black text-lg shadow-lg">
                {APP_INFO.SHORT_NAME}
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                {APP_INFO.NAME}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {t('footer.desc')}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300">
              <Sparkles size={14} className="text-amber-400" />
              <span>{t('footer.idpBadge')}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4">
              {t('footer.explore')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="hover:text-sky-400 transition-colors inline-block"
                  >
                    {t(link.i18nKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4">
              {t('footer.courses')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`#${SECTION_IDS.COURSES}`} className="hover:text-sky-400 transition-colors">
                  IELTS Nền Tảng (0 → 3.0)
                </a>
              </li>
              <li>
                <a href={`#${SECTION_IDS.COURSES}`} className="hover:text-sky-400 transition-colors">
                  Pre-IELTS & Luyện Đề (4.5 → 6.5)
                </a>
              </li>
              <li>
                <a href={`#${SECTION_IDS.COURSES}`} className="hover:text-sky-400 transition-colors">
                  IELTS Master Chuyên Sâu (7.0 - 7.5+)
                </a>
              </li>
              <li>
                <a href={`#${SECTION_IDS.COURSES}`} className="hover:text-sky-400 transition-colors">
                  IELTS 1 Kèm 2 VIP Siêu Tốc
                </a>
              </li>
              <li>
                <a href={`#${SECTION_IDS.COURSES}`} className="hover:text-sky-400 transition-colors">
                  Tiếng Anh Giao Tiếp Phản Xạ
                </a>
              </li>
              <li>
                <a href={`#${SECTION_IDS.PRICING}`} className="hover:text-sky-400 transition-colors">
                  Lớp Luyện Thi TOEIC & VSTEP
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-sky-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-slate-500">{t('footer.hotline')}</span>
                  <strong className="text-white">{APP_INFO.CONTACT.HOTLINE_DISPLAY}</strong>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-sky-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-slate-500">{t('footer.email')}</span>
                  <span className="text-slate-300 break-all">{APP_INFO.CONTACT.EMAIL}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sky-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-slate-500">{t('footer.locations')}</span>
                  <span className="text-slate-300">
                    Quận 7 (gần Lotte), Quận 8, Quận 1, Quận 10 & Online
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <p className="flex items-center gap-1">
            <span>{t('footer.credit')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
