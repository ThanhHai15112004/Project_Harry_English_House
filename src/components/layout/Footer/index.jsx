import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { APP_INFO, ROUTES } from '@/core';
import logoImg from '@/assets/logo/logo-main.jpg';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-academic-soft-white border-t border-academic-border pt-16 pb-12">
      <div className="app-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-academic-border">
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to={ROUTES.HOME} className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Harry English House"
                className="h-12 w-12 object-contain mix-blend-multiply"
              />
              <span className="font-heading font-black text-xl text-academic-heading tracking-tight">
                {APP_INFO.BRAND_NAME || APP_INFO.NAME}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-academic-body leading-relaxed max-w-sm">
              {t('footer.brandDesc')}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-academic-light-blue border border-blue-200/80 text-primary text-xs font-bold">
              <ShieldCheck size={16} />
              <span>{t('footer.partnerBadge')}</span>
            </div>
          </div>

          {/* Col 2: Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-academic-heading uppercase tracking-wider">
              {t('footer.col1Title')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-academic-body">
              <li>
                <Link to={ROUTES.COURSES} className="hover:text-primary transition-colors">
                  {t('footer.courses.ieltsFoundation')}
                </Link>
              </li>
              <li>
                <Link to={ROUTES.COURSES} className="hover:text-primary transition-colors">
                  {t('footer.courses.ieltsBooster')}
                </Link>
              </li>
              <li>
                <Link to={ROUTES.COURSES} className="hover:text-primary transition-colors">
                  {t('footer.courses.ieltsMaster')}
                </Link>
              </li>
              <li>
                <Link to={ROUTES.COURSES} className="hover:text-primary transition-colors">
                  {t('footer.courses.communication')}
                </Link>
              </li>
              <li>
                <Link to={ROUTES.COURSES} className="hover:text-primary transition-colors">
                  {t('footer.courses.toeic')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Explore (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-academic-heading uppercase tracking-wider">
              {t('footer.col2Title')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-academic-body">
              <li>
                <Link to={ROUTES.ABOUT} className="hover:text-primary transition-colors">
                  {t('footer.explore.aboutHarry')}
                </Link>
              </li>
              <li>
                <Link to={ROUTES.RESULTS} className="hover:text-primary transition-colors">
                  {t('footer.explore.results')}
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className="hover:text-primary transition-colors">
                  {t('footer.explore.credentials')}
                </Link>
              </li>
              <li>
                <Link to={`${ROUTES.COURSES}#classes`} className="hover:text-primary transition-colors">
                  {t('footer.explore.classes')}
                </Link>
              </li>
              <li>
                <a
                  href={APP_INFO.SOCIAL_LINKS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <span>{t('footer.explore.fanpage')}</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-academic-heading uppercase tracking-wider">
              {t('footer.col3Title')}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-academic-body">
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a
                  href={`tel:${APP_INFO.CONTACT.HOTLINE_RAW}`}
                  className="font-bold text-academic-heading hover:text-primary transition-colors"
                >
                  {APP_INFO.CONTACT.HOTLINE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="break-all">{APP_INFO.CONTACT.EMAIL}</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin size={16} className="text-achievement flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{APP_INFO.CONTACT.ADDRESS_DISTRICT7}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-academic-muted">
          <p>© {currentYear} {APP_INFO.BRAND_NAME}. {t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-academic-body transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#terms" className="hover:text-academic-body transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
