import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { useTeacherData, SECTION_IDS } from '@/core';
import { Button } from '@/components/common';

export const HeroSection = () => {
  const { t } = useTranslation();
  const teacher = useTeacherData();

  if (!teacher) return null;

  return (
    <section
      id={SECTION_IDS.HOME}
      className="relative overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-blue-50/50 via-slate-50 to-slate-50"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
              <Sparkles size={16} className="text-amber-500" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              {t('hero.titlePrefix')}{' '}
              <span className="text-gradient block sm:inline">{teacher.founder.name}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.desc')}
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                <span>{t('hero.checkIdp')}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                <span>{t('hero.checkTeacher')}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                <span>{t('hero.checkSmallClass')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a href={`#${SECTION_IDS.COURSES}`}>
                <Button size="lg" variant="primary" icon={<ArrowRight size={18} />}>
                  {t('hero.viewRoadmap')}
                </Button>
              </a>
              <a href={`#${SECTION_IDS.CONTACT}`}>
                <Button size="lg" variant="outline">
                  {t('hero.getConsultation')}
                </Button>
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-sky-400 rounded-3xl opacity-30 blur-lg animate-pulse" />

              <div className="relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xl">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100 shadow-inner">
                  <img
                    src={teacher.founder.avatar}
                    alt={teacher.founder.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md text-white py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold shadow-md">
                    <Star size={16} className="text-amber-400 fill-amber-400" />
                    <span>{t('hero.experience')}</span>
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-xl font-extrabold text-slate-900 font-heading">
                    {teacher.founder.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500">
                    {teacher.founder.role}
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {t('hero.teamTag')}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      <ShieldCheck size={12} className="text-amber-600" />
                      {t('hero.partnerTag')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
