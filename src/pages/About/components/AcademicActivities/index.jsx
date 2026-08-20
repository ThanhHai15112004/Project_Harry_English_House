import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Building2, ZoomIn, ArrowRight } from 'lucide-react';
import { SectionTitle } from '@/components/common';

export const AcademicActivities = ({ activitiesData, onOpenPhoto }) => {
  const { t } = useTranslation();

  if (!activitiesData) return null;
  const event = activitiesData.featuredEvent;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.about.academicActivities.badge')}
          title={activitiesData.title || t('pages.about.academicActivities.title')}
          subtitle={activitiesData.subtitle || t('pages.about.academicActivities.subtitle')}
        />

        {/* Featured International Academic Event (Card 50/50) */}
        {event && (
          <div className="bg-academic-soft-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-academic-border shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left (6 Cols): Event Photos Showcase */}
              <div className="lg:col-span-6 space-y-4">
                <button
                  type="button"
                  className="w-full rounded-2xl overflow-hidden bg-white p-2 border border-slate-200/90 shadow-md group cursor-pointer text-left focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                  onClick={() =>
                    onOpenPhoto?.({
                      image: event.mainImage,
                      title: event.event,
                      caption: `${event.event} • ${event.year} (${event.location})`,
                      description: event.desc,
                    })
                  }
                >
                  <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden relative">
                    <img
                      src={event.mainImage}
                      alt={event.event}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-academic-heading/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                      <div className="px-3.5 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-xs font-bold shadow-md">
                        <ZoomIn size={15} />
                        <span>{t('pages.about.academicActivities.viewPhoto', 'Xem ảnh sự kiện')}</span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Secondary Photo Row */}
                {event.secondaryImage && (
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="w-full rounded-xl overflow-hidden bg-white p-1.5 border border-slate-200 shadow-2xs group cursor-pointer text-left focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                      onClick={() =>
                        onOpenPhoto?.({
                          image: event.secondaryImage,
                          title: t('pages.about.academicActivities.aseanDelegationTitle', 'Đoàn đại biểu giáo dục ASEAN 2025'),
                          caption: t('pages.about.academicActivities.aseanDelegationCaption', 'Đoàn đại biểu và chuyên gia giáo dục tại EMGS Malaysia'),
                        })
                      }
                    >
                      <div className="h-28 w-full rounded-lg overflow-hidden relative">
                        <img
                          src={event.secondaryImage}
                          alt="Đoàn đại biểu ASEAN"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-academic-heading/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                          <ZoomIn size={14} />
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      className="w-full rounded-xl overflow-hidden bg-white p-1.5 border border-slate-200 shadow-2xs group cursor-pointer text-left focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                      onClick={() =>
                        onOpenPhoto?.({
                          image: '/src/assets/Ministry-of-Higher-Education-2025/thuyet-trinh-2.jpg',
                          title: t('pages.about.academicActivities.trainingPresentationTitle', 'Thuyết trình chuyên đề đào tạo'),
                          caption: t('pages.about.academicActivities.trainingPresentationCaption', 'Thầy Harry chia sẻ về phương pháp rèn phản xạ ngôn ngữ'),
                        })
                      }
                    >
                      <div className="h-28 w-full rounded-lg overflow-hidden relative">
                        <img
                          src="/src/assets/Ministry-of-Higher-Education-2025/thuyet-trinh-2.jpg"
                          alt="Thuyết trình chuyên đề"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-academic-heading/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                          <ZoomIn size={14} />
                        </div>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Right (6 Cols): Event Details & Credibility Narrative */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-academic-light-blue border border-blue-200 text-primary text-xs font-bold">
                  <Globe size={14} className="text-cta" />
                  <span>{event.year} • {event.locationKey ? t(event.locationKey) : event.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-academic-heading font-heading leading-tight">
                  {event.eventKey ? t(event.eventKey) : event.event}
                </h3>

                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2 text-academic-heading font-semibold">
                    <Building2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{event.organizerKey ? t(event.organizerKey) : event.organizer}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
                  {event.descKey ? t(event.descKey) : event.desc}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-cta">
                  <span>{t('pages.about.academicActivities.intlWorkshopNote', 'Hội thảo quốc tế thúc đẩy phương pháp sư phạm tiếng Anh')}</span>
                  <ArrowRight size={14} />
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default AcademicActivities;
