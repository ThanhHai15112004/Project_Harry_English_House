import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Compass, CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from '@/components/common';

export const CourseFinder = ({ allCourses = [], finderData = {} }) => {
  const { t } = useTranslation();
  const [finderStep, setFinderStep] = useState(1);
  const [finderGoal, setFinderGoal] = useState('');
  const [finderLevel, setFinderLevel] = useState('');
  const [finderTarget, setFinderTarget] = useState('');

  const defaultGoals = [
    { id: 'ielts', labelKey: 'pages.courses.finder.goalIelts', descKey: 'pages.courses.finder.goalIeltsDesc' },
    { id: 'vip', labelKey: 'pages.courses.finder.goalVip', descKey: 'pages.courses.finder.goalVipDesc' },
    { id: 'comm', labelKey: 'pages.courses.finder.goalComm', descKey: 'pages.courses.finder.goalCommDesc' },
    { id: 'toeic', labelKey: 'pages.courses.finder.goalToeic', descKey: 'pages.courses.finder.goalToeicDesc' },
  ];

  const defaultLevels = [
    { id: 'lost', labelKey: 'pages.courses.finder.levelLost', descKey: 'pages.courses.finder.levelLostDesc' },
    { id: 'basic', labelKey: 'pages.courses.finder.levelBasic', descKey: 'pages.courses.finder.levelBasicDesc' },
    { id: 'advanced', labelKey: 'pages.courses.finder.levelAdvanced', descKey: 'pages.courses.finder.levelAdvancedDesc' },
  ];

  const goals = finderData?.goals || defaultGoals;
  const levels = finderData?.levels || defaultLevels;

  // Handle Course Finder Recommendation
  const getFinderRecommendation = () => {
    if (finderGoal === 'ielts') {
      if (finderLevel === 'lost') return allCourses.find((c) => c.id === 'ielts-0-3');
      if (finderLevel === 'basic') return allCourses.find((c) => c.id === 'ielts-3-4');
      if (finderTarget === '75') return allCourses.find((c) => c.id === 'ielts-6-75');
      return allCourses.find((c) => c.id === 'ielts-4-5');
    }
    if (finderGoal === 'vip') {
      if (finderTarget === 'pair') return allCourses.find((c) => c.id === 'ielts-vip-1-2');
      return allCourses.find((c) => c.id === 'ielts-vip-1-1');
    }
    if (finderGoal === 'comm') {
      if (finderTarget === 'work') return allCourses.find((c) => c.id === 'comm-applied');
      return allCourses.find((c) => c.id === 'comm-basic');
    }
    if (finderGoal === 'toeic') {
      return allCourses.find((c) => c.id === 'toeic-vstep');
    }
    return allCourses[0];
  };

  const recommendedCourse = getFinderRecommendation();

  const getStepLabel = (step) => {
    if (step === 1) return t('pages.courses.finderGoalTab');
    if (step === 2) return t('pages.courses.finderLevelTab');
    return t('pages.courses.finderResultTab');
  };

  const getStepBadgeClass = (step) => {
    if (finderStep === step) return 'bg-cta text-white shadow-xs';
    if (finderStep > step) return 'bg-emerald-100 text-emerald-700';
    return 'bg-slate-100 text-slate-400';
  };

  return (
    <section id="course-finder" className="py-14 sm:py-20 bg-academic-soft-white border-t border-slate-200/80">
      <div className="app-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-cta text-xs font-bold uppercase tracking-wider border border-blue-100 shadow-2xs">
              <Compass size={13} className="text-amber-500" />
              <span>{t('pages.courses.finderBadge')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-academic-heading font-heading">
              {t('pages.courses.finderTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-academic-body max-w-xl mx-auto">
              {t('pages.courses.finderSubtitle')}
            </p>
          </div>

          {/* Interactive Finder Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card">
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between gap-2 mb-8 border-b border-slate-100 pb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-heading transition-colors ${getStepBadgeClass(
                      step
                    )}`}
                  >
                    {finderStep > step ? '✓' : step}
                  </div>
                  <span className="text-xs font-bold text-academic-heading hidden sm:block">
                    {getStepLabel(step)}
                  </span>
                </div>
              ))}
            </div>

            {/* Step 1: Goal */}
            {finderStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                  {t('pages.courses.finderStep1')}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {goals.map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => {
                        setFinderGoal(opt.id);
                        setFinderStep(2);
                      }}
                      className="p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 hover:border-cta hover:bg-blue-50/40 border-slate-200 bg-white group focus:outline-hidden"
                    >
                      <strong className="text-sm font-bold text-academic-heading block group-hover:text-cta transition-colors">
                        {t(opt.labelKey)}
                      </strong>
                      <span className="text-xs text-academic-muted block mt-1 leading-relaxed">
                        {t(opt.descKey)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Current Level */}
            {finderStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                  {t('pages.courses.finderStep2')}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {levels.map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => {
                        setFinderLevel(opt.id);
                        setFinderStep(3);
                      }}
                      className="p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 hover:border-cta hover:bg-blue-50/40 border-slate-200 bg-white group focus:outline-hidden"
                    >
                      <strong className="text-sm font-bold text-academic-heading block group-hover:text-cta transition-colors">
                        {t(opt.labelKey)}
                      </strong>
                      <span className="text-xs text-academic-muted block mt-1 leading-relaxed">
                        {t(opt.descKey)}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setFinderStep(1)}
                  className="text-xs font-bold text-academic-muted hover:text-cta transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  {t('pages.courses.finderBackBtn')}
                </button>
              </div>
            )}

            {/* Step 3: Result Recommendation Card */}
            {finderStep === 3 && recommendedCourse && (
              <div className="space-y-6 animate-fadeIn">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  <CheckCircle2 size={13} />
                  <span>{t('pages.courses.finderResultTitle')}</span>
                </div>

                <div className="p-6 rounded-3xl bg-academic-soft-white border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-cta bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {t(recommendedCourse.badgeKey)}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{t(recommendedCourse.levelKey)}</span>
                  </div>

                  <h4 className="text-xl font-black text-academic-heading font-heading">
                    {t(recommendedCourse.titleKey)}
                  </h4>

                  <p className="text-xs sm:text-sm text-academic-body leading-relaxed">
                    {t(recommendedCourse.targetKey)}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-700 pt-2 border-t border-slate-200">
                    <span>
                      <strong>{t('pages.courses.durationLabel')}</strong> {t(recommendedCourse.durationKey)}
                    </span>
                    <span>
                      <strong>{t('pages.courses.classSizeLabel')}</strong> {t(recommendedCourse.classSizeKey)}
                    </span>
                    <span>
                      <strong>{t('pages.courses.formatLabel')}</strong> {t(recommendedCourse.formatKey)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setFinderStep(1);
                      setFinderGoal('');
                      setFinderLevel('');
                      setFinderTarget('');
                    }}
                    className="text-xs font-bold text-slate-600 hover:text-cta inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw size={13} />
                    <span>{t('pages.courses.finderRestart')}</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <Link to={`/courses/${recommendedCourse.id}`}>
                      <Button size="md" variant="primary" icon={<ArrowRight size={15} />}>
                        {t('pages.courses.viewDetailBtn')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFinder;
