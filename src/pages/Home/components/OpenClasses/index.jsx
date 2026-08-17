import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, MapPin, UserCheck, ArrowRight } from 'lucide-react';
import { useClassesData, SECTION_IDS } from '@/core';
import { SectionTitle, Button } from '@/components/common';

export const OpenClasses = () => {
  const { t } = useTranslation();
  const classesData = useClassesData();

  if (!classesData) return null;

  return (
    <section id={SECTION_IDS.CLASSES} className="py-20 lg:py-28 bg-white border-t border-academic-border">
      <div className="app-container">
        <SectionTitle
          badge={t('classes.badge')}
          title={t(classesData.titleKey)}
          subtitle={t(classesData.subtitleKey)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {classesData.classes.map((item) => {
            const percentage = Math.round((item.filledSpots / item.totalSpots) * 100);

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 border border-academic-border shadow-card hover:shadow-card-hover hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Badge & Program */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-primary bg-academic-light-blue px-3 py-1 rounded-full border border-blue-100">
                      {t(item.programKey)} • {t(item.badgeKey)}
                    </span>
                    <span className="text-xs text-academic-muted font-bold">
                      {t(item.levelKey)}
                    </span>
                  </div>

                  {/* Class Name */}
                  <h3 className="text-xl font-extrabold text-academic-heading font-heading leading-snug">
                    {t(item.classNameKey)}
                  </h3>

                  {/* Class Info Details */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-academic-body bg-academic-surface/60 p-4 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <Calendar size={16} className="text-primary flex-shrink-0" />
                      <span><strong>{t('classes.labelSchedule')}</strong> {t(item.scheduleKey)}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock size={16} className="text-cta flex-shrink-0" />
                      <span><strong>{t('classes.labelTime')}</strong> {item.time}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <MapPin size={16} className="text-achievement flex-shrink-0" />
                      <span><strong>{t('classes.labelFormat')}</strong> {t(item.formatKey)}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <UserCheck size={16} className="text-emerald-600 flex-shrink-0" />
                      <span><strong>{t('classes.labelTeacher')}</strong> {t(item.teacherKey)}</span>
                    </div>
                  </div>

                  {/* Spots Available Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-academic-heading">
                        {t('classes.spotsLeft')}
                      </span>
                      <span className="text-cta font-heading">
                        {item.filledSpots} / {item.totalSpots} {t('classes.studentsCount')}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cta rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-6 mt-4 border-t border-slate-100">
                  <a href={`#${SECTION_IDS.CONTACT}`} className="block">
                    <Button fullWidth size="md" variant="primary" icon={<ArrowRight size={16} />}>
                      {t('classes.registerBtn')}
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OpenClasses;
