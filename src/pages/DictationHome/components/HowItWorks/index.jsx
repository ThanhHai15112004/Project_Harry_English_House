import React from 'react';
import { useTranslation } from 'react-i18next';
import { Headphones, Keyboard, CheckCircle, Volume2, Sparkles } from 'lucide-react';

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: '1',
      title: t('dictation.home.howItWorks.step1.title'),
      desc: t('dictation.home.howItWorks.step1.desc'),
      icon: Headphones,
      gradient: 'from-blue-500/10 to-sky-500/10 dark:from-blue-500/20 dark:to-sky-500/20',
      iconColor: 'text-primary dark:text-sky-400',
      borderColor: 'border-blue-200 dark:border-blue-800/60',
      badgeBg: 'bg-blue-500 text-white',
    },
    {
      step: '2',
      title: t('dictation.home.howItWorks.step2.title'),
      desc: t('dictation.home.howItWorks.step2.desc'),
      icon: Keyboard,
      gradient: 'from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20',
      iconColor: 'text-amber-600 dark:text-amber-400',
      borderColor: 'border-amber-200 dark:border-amber-800/60',
      badgeBg: 'bg-amber-500 text-white',
    },
    {
      step: '3',
      title: t('dictation.home.howItWorks.step3.title'),
      desc: t('dictation.home.howItWorks.step3.desc'),
      icon: CheckCircle,
      gradient: 'from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      borderColor: 'border-emerald-200 dark:border-emerald-800/60',
      badgeBg: 'bg-emerald-500 text-white',
    },
    {
      step: '4',
      title: t('dictation.home.howItWorks.step4.title'),
      desc: t('dictation.home.howItWorks.step4.desc'),
      icon: Volume2,
      gradient: 'from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
      borderColor: 'border-purple-200 dark:border-purple-800/60',
      badgeBg: 'bg-purple-500 text-white',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#0B1329] border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="app-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 dark:bg-slate-800 text-primary dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} />
            <span>{t('dictation.home.howItWorks.badge')}</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-academic-heading dark:text-white tracking-tight">
            {t('dictation.home.howItWorks.title')}
          </h2>
          <p className="text-sm sm:text-base text-academic-body dark:text-slate-300 max-w-xl mx-auto">
            {t('dictation.home.howItWorks.subtitle')}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-800/70 border ${item.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
              >
                {/* Background Tint */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10 space-y-4">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className={`h-8 w-8 rounded-xl ${item.badgeBg} flex items-center justify-center font-heading font-black text-sm shadow-xs`}>
                      {item.step}
                    </span>
                    <div className={`h-12 w-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center ${item.iconColor} shadow-2xs group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="font-heading font-black text-base sm:text-lg text-academic-heading dark:text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
