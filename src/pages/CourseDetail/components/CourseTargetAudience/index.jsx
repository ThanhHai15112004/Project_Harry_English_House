import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, UserCheck, ArrowUpRight } from 'lucide-react';

export default function CourseTargetAudience({ course }) {
  const { t } = useTranslation();

  if (!course) return null;

  const targetData = course.targetAudience || {};
  const whoFor = targetData.whoForKey ? t(targetData.whoForKey) : t('pages.courses.programs.ielts.cardSub');
  const inputRequirement = targetData.inputRequirementKey ? t(targetData.inputRequirementKey) : t(course.levelKey);
  const outputTarget = targetData.outputTargetKey ? t(targetData.outputTargetKey) : t(course.targetKey);

  const columns = [
    {
      num: '01',
      icon: UserCheck,
      title: t('pages.courseDetail.targetAudience.whoFor'),
      desc: whoFor,
      borderColor: 'border-t-[#2563EB]',
      badgeBg: 'bg-blue-50 text-blue-700'
    },
    {
      num: '02',
      icon: Target,
      title: t('pages.courseDetail.targetAudience.inputReq'),
      desc: inputRequirement,
      borderColor: 'border-t-indigo-500',
      badgeBg: 'bg-indigo-50 text-indigo-700'
    },
    {
      num: '03',
      icon: ArrowUpRight,
      title: t('pages.courseDetail.targetAudience.outputTarget'),
      desc: outputTarget,
      borderColor: 'border-t-emerald-500',
      badgeBg: 'bg-emerald-50 text-emerald-700'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EAF2FF] text-[#1746A2] mb-3">
            {t('pages.courseDetail.targetAudience.badge')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10233F] tracking-tight">
            {t('pages.courseDetail.targetAudience.title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('pages.courseDetail.targetAudience.subtitle')}
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div 
                key={col.num}
                className={`bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] border-t-4 ${col.borderColor} shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-black text-slate-300 tracking-tighter">
                      {col.num}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${col.badgeBg} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#10233F] mb-3">
                    {col.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {col.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>{t('programs.guaranteeLabel')}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
