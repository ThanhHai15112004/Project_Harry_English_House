import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Navigation, Clock, Building2, ExternalLink } from 'lucide-react';
import { SectionTitle, Button } from '@/components/common';

export const ContactMapSection = () => {
  const { t } = useTranslation();

  // Google Maps directions search link for District 7 Lotte Mart area
  const googleMapsDirectionsUrl = 'https://www.google.com/maps/search/?api=1&query=Lotte+Mart+Quan+7+Ho+Chi+Minh';

  return (
    <section id="contact-map" className="py-16 sm:py-24 bg-academic-soft-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.contact.mapBadge')}
          title={t('pages.contact.mapTitle')}
          subtitle={t('pages.contact.mapSubtitle')}
        />

        {/* 70% Map / 30% Info Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch pt-4">
          
          {/* Map Frame (70% -> 8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-card relative min-h-[320px] sm:min-h-[420px] lg:min-h-[460px]">
            <iframe
              title="Harry English House Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9538356910684!2d106.69747977583768!3d10.738042459899321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f99723cf75f%3A0x6b8d9dc134aa75c4!2sLotte%20Mart%20District%207!5e0!3m2!1sen!2svn!4v1709900000000!5m2!1sen!2svn"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '340px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Location Info Box (30% -> 4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-white p-6 sm:p-8 border border-academic-border shadow-card flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Header */}
              <div className="space-y-2 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center font-bold shadow-2xs">
                  <Building2 size={20} className="text-cta" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-academic-heading font-heading leading-tight">
                  {t('pages.contact.mapHqName')}
                </h3>
              </div>

              {/* Address detail */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <MapPin size={15} className="text-cta" />
                  <span>{t('pages.contact.addressTitle')}</span>
                </div>
                <p className="text-xs sm:text-sm text-academic-body leading-relaxed pl-6">
                  {t('pages.contact.mapHqAddress')}
                </p>
              </div>

              {/* Opening Hours */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Clock size={15} className="text-cta" />
                  <span>{t('pages.contact.hoursTitle')}</span>
                </div>
                <p className="text-xs sm:text-sm text-academic-body leading-relaxed pl-6">
                  {t('pages.contact.mapHqHours')}
                </p>
              </div>

            </div>

            {/* Directions Action */}
            <div className="pt-4 border-t border-slate-100">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="primary"
                  fullWidth
                  size="md"
                  className="font-bold shadow-xs cursor-pointer"
                  icon={<Navigation size={16} />}
                >
                  <span>{t('pages.contact.directionsBtn')}</span>
                  <ExternalLink size={14} className="ml-1 opacity-80" />
                </Button>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMapSection;
