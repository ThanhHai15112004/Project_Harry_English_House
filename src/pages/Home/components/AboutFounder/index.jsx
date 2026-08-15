import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, CheckCircle, Quote } from 'lucide-react';
import { useTeacherData, SECTION_IDS } from '@/core';
import { SectionTitle, Card } from '@/components/common';

export const AboutFounder = () => {
  const { t } = useTranslation();
  const teacher = useTeacherData();

  if (!teacher) return null;

  return (
    <section id={SECTION_IDS.ABOUT} className="py-16 sm:py-24 bg-white border-y border-slate-100">
      <div className="app-container">
        <SectionTitle
          badge={t('about.badge')}
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Founder Philosophy & Story */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-card flex flex-col justify-between relative overflow-hidden">
            <Quote className="absolute top-6 right-6 text-blue-500/10 w-24 h-24 -rotate-12 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {t('about.greeting', { name: teacher.founder.name })}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {teacher.founder.philosophy}
              </p>

              {/* IDP Callout Box */}
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-blue-100/70 border border-blue-200/80">
                <ShieldCheck className="text-blue-700 w-7 h-7 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="block text-sm sm:text-base font-bold text-blue-900">
                    {teacher.founder.idpPartner}
                  </strong>
                  <p className="text-xs sm:text-sm text-blue-800/80 leading-relaxed">
                    {t('about.idpDetail')}
                  </p>
                </div>
              </div>

              {/* Check items */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" />
                  <span>{t('about.check1')}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" />
                  <span>{t('about.check2')}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" />
                  <span>{t('about.check3')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {teacher.highlights.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card hover:border-blue-300 transition-all duration-200 flex flex-col justify-center space-y-2 group"
              >
                <span className="font-heading font-black text-2xl text-sky-500 group-hover:text-blue-700 transition-colors">
                  0{idx + 1}
                </span>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
