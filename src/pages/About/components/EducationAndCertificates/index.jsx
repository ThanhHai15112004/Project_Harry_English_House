import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, ShieldCheck, ZoomIn, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionTitle, Button } from '@/components/common';

export const EducationAndCertificates = ({ educationData, certificates = [], onOpenCertificate }) => {
  const { t } = useTranslation();
  const [showAllCerts, setShowAllCerts] = useState(false);

  const initialCount = 8;
  const visibleCerts = showAllCerts ? certificates : certificates.slice(0, initialCount);
  const hasMore = certificates.length > initialCount;

  return (
    <section className="py-16 sm:py-24 bg-academic-soft-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.about.education.badge')}
          title={t('pages.about.education.title')}
          subtitle={t('pages.about.education.subtitle')}
        />

        {/* 1. Degrees & Professional Development (2 Columns) */}
        {educationData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            
            {/* Formal Degrees */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-academic-border shadow-card space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center font-bold">
                  <GraduationCap size={20} className="text-cta" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                  {t('pages.about.education.degreesTitle')}
                </h3>
              </div>

              <div className="space-y-4">
                {educationData.degrees?.map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-academic-soft-white border border-slate-200/80 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-cta">
                      <span>{item.period}</span>
                      <span className="text-[10px] text-academic-muted">{item.institution}</span>
                    </div>
                    <h4 className="text-sm font-bold text-academic-heading font-heading">
                      {t(item.programKey)}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Development */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-academic-border shadow-card space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center font-bold">
                  <ShieldCheck size={20} className="text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                  {t('pages.about.education.developmentTitle')}
                </h3>
              </div>

              <div className="space-y-4">
                {educationData.development?.map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-academic-soft-white border border-slate-200/80 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-primary">
                      <span>{item.org}</span>
                      <span className="text-[10px] font-extrabold text-academic-gold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-academic-heading font-heading">
                      {t(item.titleKey)}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 2. Certificates Showcase Grid with Hierarchy */}
        {certificates && certificates.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-academic-heading font-heading">
                  {t('pages.about.education.certTitle')}
                </h3>
                <p className="text-xs text-academic-muted">
                  {t('about.officialRecordsBadge')}
                </p>
              </div>
            </div>

            {/* Grid of Certificates */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {visibleCerts.map((cert) => (
                <button
                  key={cert.id}
                  type="button"
                  className="rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-academic-cta hover:shadow-card hover:ring-2 hover:ring-academic-cta/20 transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between text-left focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                  onClick={() => onOpenCertificate?.(cert)}
                >
                  <div className="h-40 sm:h-48 w-full bg-slate-900/5 p-2 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900/10 transition-colors">
                    <img
                      src={cert.image}
                      alt={t(cert.titleKey)}
                      className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-academic-heading/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-xl m-1.5">
                      <div className="px-3 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-xs font-bold shadow-md">
                        <ZoomIn size={14} />
                        <span>{t('pages.about.education.viewCertModal')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white border-t border-slate-100 w-full">
                    <p className="text-xs font-bold text-academic-heading truncate font-heading">
                      {t(cert.titleKey)}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* View More Toggle */}
            {hasMore && (
              <div className="text-center pt-6">
                <Button
                  variant="outline"
                  size="md"
                  className="bg-white hover:bg-slate-50 border-slate-300 font-bold text-academic-heading shadow-2xs cursor-pointer"
                  icon={showAllCerts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  onClick={() => setShowAllCerts(!showAllCerts)}
                >
                  {showAllCerts
                    ? t('pages.results.gallery.viewLessBtn')
                    : t('pages.results.gallery.viewMoreBtn', { count: certificates.length })}
                </Button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default EducationAndCertificates;
