import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Clock, Laptop, Users2, CalendarDays } from 'lucide-react';

export default function CourseQuickOverview({ course }) {
  const { t } = useTranslation();

  if (!course) return null;

  const overviewItems = [
    {
      id: 'level',
      icon: Award,
      label: t('pages.courseDetail.quickOverview.level'),
      value: t(course.levelKey),
      highlight: true
    },
    {
      id: 'duration',
      icon: Clock,
      label: t('pages.courseDetail.quickOverview.duration'),
      value: t(course.durationKey),
      highlight: false
    },
    {
      id: 'format',
      icon: Laptop,
      label: t('pages.courseDetail.quickOverview.format'),
      value: t(course.formatKey),
      highlight: false
    },
    {
      id: 'classSize',
      icon: Users2,
      label: t('pages.courseDetail.quickOverview.classSize'),
      value: t(course.classSizeKey),
      highlight: false
    },
    {
      id: 'schedule',
      icon: CalendarDays,
      label: t('pages.courseDetail.quickOverview.schedule'),
      value: t(course.weeklyScheduleKey),
      highlight: false
    }
  ];

  return (
    <section className="bg-white border-b border-[#E2E8F0] py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0] -mx-4 sm:mx-0">
          {overviewItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className={`px-4 sm:px-6 py-4 flex flex-col justify-center ${
                  idx === 0 ? 'border-t-0' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-[#EAF2FF] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <div className={`text-sm sm:text-base font-bold ${
                  item.highlight ? 'text-[#1746A2]' : 'text-[#10233F]'
                }`}>
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
