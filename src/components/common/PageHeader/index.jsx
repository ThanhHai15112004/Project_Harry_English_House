import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Home } from 'lucide-react';
import { ROUTES } from '@/core';

/**
 * Reusable Modern Academic Page Header Banner
 */
export const PageHeader = ({
  badge,
  title,
  subtitle,
  breadcrumbItems = [],
  children,
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white border-b border-academic-border py-10 sm:py-14 lg:py-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-amber-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="app-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-academic-muted mb-4 flex-wrap">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-1 hover:text-primary transition-colors font-semibold"
          >
            <Home size={13} />
            <span>{t('nav.home')}</span>
          </Link>
          {breadcrumbItems.map((item) => (
            <React.Fragment key={item.path || item.label}>
              <ChevronRight size={13} className="text-slate-400" />
              {item.path ? (
                <Link
                  to={item.path}
                  className="hover:text-primary transition-colors font-semibold"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-academic-heading font-bold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Header content */}
        <div className="max-w-3xl space-y-3">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-academic-light-blue border border-blue-200/80 text-primary text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-academic-heading font-heading tracking-tight leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm sm:text-base text-academic-body leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}

          {children && <div className="pt-2">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
