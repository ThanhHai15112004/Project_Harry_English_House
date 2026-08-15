import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Award, ZoomIn, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCertificatesData, useMediaData, SECTION_IDS } from '@/core';
import { SectionTitle, Modal, Button } from '@/components/common';

export const AcademicActivities = () => {
  const { t } = useTranslation();
  const certificates = useCertificatesData();
  const media = useMediaData();
  const [activeItem, setActiveItem] = useState(null);

  // Curate top 3 certificates and top 2 academic events
  const topCertificates = certificates.slice(0, 3);
  const topEvents = media?.ministry2025?.slice(0, 2) || [];

  return (
    <section id={SECTION_IDS.ACADEMIC} className="py-20 lg:py-28 bg-academic-soft-white border-y border-academic-border">
      <div className="app-container">
        <SectionTitle
          badge={t('academic.badge')}
          title={t('academic.title')}
          subtitle={t('academic.subtitle')}
        />

        {/* Curated Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch mb-12">
          {/* Top 2 Academic Events (Large Left Block - 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topEvents.map((evt) => (
              <div
                key={evt.id}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-academic-border shadow-card hover:shadow-card-hover cursor-pointer transition-all duration-300 flex flex-col justify-end p-5"
                onClick={() => setActiveItem(evt)}
              >
                <img
                  src={evt.image}
                  alt={evt.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-academic-heading/90 via-academic-heading/30 to-transparent" />

                <div className="relative z-10 space-y-1 text-white">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-achievement-light bg-achievement/80 px-2 py-0.5 rounded-md">
                    {t('academic.eventBadge')}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2">
                    {evt.title}
                  </h4>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={16} />
                </div>
              </div>
            ))}
          </div>

          {/* Top 3 Verified Certificates (Right Block - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            {topCertificates.map((cert, idx) => (
              <div
                key={cert.id || idx}
                className="bg-white rounded-2xl p-4 border border-academic-border hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all duration-200 flex items-center gap-4 group"
                onClick={() => setActiveItem(cert)}
              >
                <div className="w-20 h-16 rounded-xl overflow-hidden bg-academic-surface flex-shrink-0 relative border border-slate-100">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-academic-heading/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                    <ZoomIn size={16} />
                  </div>
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-achievement">
                    <Award size={13} className="text-achievement flex-shrink-0" />
                    <span>{t('academic.certBadge')}</span>
                  </div>
                  <h4 className="text-xs font-bold text-academic-heading font-heading line-clamp-2">
                    {cert.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Collaborations Highlights Bar */}
        <div className="bg-white rounded-2xl p-6 border border-academic-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck size={28} className="text-primary flex-shrink-0" />
            <div>
              <strong className="block text-sm font-bold text-academic-heading">
                {t('academic.collabTitle')}
              </strong>
              <p className="text-xs text-academic-body">
                {t('academic.collabDesc')}
              </p>
            </div>
          </div>

          <a href={`#${SECTION_IDS.CONTACT}`}>
            <Button size="sm" variant="outline" icon={<ArrowRight size={14} />}>
              {t('academic.exploreAll')}
            </Button>
          </a>
        </div>

        {/* Modal Lightbox */}
        <Modal
          isOpen={!!activeItem}
          onClose={() => setActiveItem(null)}
          title={activeItem?.title || t('academic.badge')}
        >
          {activeItem && (
            <div className="flex items-center justify-center p-2">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default AcademicActivities;
