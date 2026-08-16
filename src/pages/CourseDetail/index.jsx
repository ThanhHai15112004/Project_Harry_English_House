import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Target,
  BookOpen,
  MapPin,
  ShieldCheck,
  Award,
  Sparkles,
  Phone,
  Calendar,
} from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { PageHeader, Button } from '@/components/common';
import { useCourseDetail, useClassesData, useDocumentTitle, ROUTES, APP_INFO } from '@/core';

export const CourseDetailPage = () => {
  const { courseId } = useParams();
  const { t } = useTranslation();
  const course = useCourseDetail(courseId);
  const classesData = useClassesData();

  const [activeModuleTab, setActiveModuleTab] = useState('overview');

  // Dynamic SEO title
  useDocumentTitle(
    'courseDetail',
    course ? `${course.title} | ${APP_INFO.BRAND_NAME}` : undefined
  );

  if (!course) {
    return (
      <MainLayout>
        <div className="app-container py-24 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-academic-surface text-academic-muted flex items-center justify-center mx-auto mb-4">
            <BookOpen size={32} />
          </div>
          <h1 className="text-2xl font-bold text-academic-heading font-heading">
            {t('pages.courseDetail.notFoundTitle')}
          </h1>
          <p className="text-sm text-academic-body mt-2 mb-6">
            {t('pages.courseDetail.notFoundDesc')}
          </p>
          <Link to={ROUTES.COURSES}>
            <Button variant="primary" icon={<ArrowLeft size={16} />}>
              {t('pages.courseDetail.backToCourses')}
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  // Filter classes related to this course type
  const relatedClasses = classesData?.classes?.filter((c) =>
    course.category === 'ielts' || course.category === 'ielts-vip'
      ? c.program === 'IELTS'
      : c.program.toLowerCase().includes('giao tiếp') || c.program.toLowerCase().includes('toeic')
  ) || [];

  return (
    <MainLayout>
      {/* 1. Header Banner */}
      <PageHeader
        badge={course.badge || t('pages.courses.badge')}
        title={course.title}
        subtitle={course.target}
        breadcrumbItems={[
          { label: t('nav.programs'), path: ROUTES.COURSES },
          { label: course.title },
        ]}
      />

      {/* 2. Main Course Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (7 cols): Detailed Curriculum & Highlights */}
            <div className="lg:col-span-7 space-y-8">
              {/* Course Hero Banner */}
              {course.image && (
                <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <div>
                      <span className="text-xs text-blue-200 font-bold uppercase tracking-wider block">
                        {t('pages.courseDetail.studentPerks')}
                      </span>
                      <span className="text-sm font-semibold">{course.guarantee}</span>
                    </div>
                    <span className="px-3 py-1 rounded-lg bg-white/95 text-primary font-bold text-xs">
                      {course.duration}
                    </span>
                  </div>
                </div>
              )}

              {/* Module Navigation Tabs */}
              <div className="border-b border-academic-border pb-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeModuleTab === 'overview'
                      ? 'bg-primary text-white shadow-xs'
                      : 'text-slate-600 hover:text-academic-heading hover:bg-slate-100'
                  }`}
                  onClick={() => setActiveModuleTab('overview')}
                >
                  {t('pages.courseDetail.tabOverview')}
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeModuleTab === 'curriculum'
                      ? 'bg-primary text-white shadow-xs'
                      : 'text-slate-600 hover:text-academic-heading hover:bg-slate-100'
                  }`}
                  onClick={() => setActiveModuleTab('curriculum')}
                >
                  {t('pages.courseDetail.tabCurriculum')}
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeModuleTab === 'guarantee'
                      ? 'bg-primary text-white shadow-xs'
                      : 'text-slate-600 hover:text-academic-heading hover:bg-slate-100'
                  }`}
                  onClick={() => setActiveModuleTab('guarantee')}
                >
                  {t('pages.courseDetail.tabGuarantee')}
                </button>
              </div>

              {/* Tab 1: Overview & Highlights */}
              {activeModuleTab === 'overview' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-3">
                    <h2 className="text-xl font-bold text-academic-heading font-heading flex items-center gap-2">
                      <Target size={22} className="text-primary" />
                      <span>{t('pages.courseDetail.targetSectionTitle')}</span>
                    </h2>
                    <p className="text-sm text-academic-body leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      {course.target}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-academic-heading font-heading flex items-center gap-2">
                      <Award size={20} className="text-primary" />
                      <span>{t('pages.courseDetail.highlightsTitle')}</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.highlights?.map((h) => (
                        <div
                          key={h}
                          className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-academic-soft-white border border-academic-border"
                        >
                          <CheckCircle2 size={16} className="text-academic-cta flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Curriculum Breakdown */}
              {activeModuleTab === 'curriculum' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
                    <h3 className="text-base font-bold text-academic-heading font-heading flex items-center gap-2">
                      <BookOpen size={18} className="text-primary" />
                      <span>{t('pages.courseDetail.curriculumSectionTitle')}</span>
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {course.curriculum}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-1.5">
                      <div className="text-xs font-bold text-primary uppercase">Listening & Reading</div>
                      <p className="text-xs text-slate-600">
                        {t('pages.courseDetail.listeningReadingDesc')}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-1.5">
                      <div className="text-xs font-bold text-primary uppercase">Writing Task 1 & Task 2</div>
                      <p className="text-xs text-slate-600">
                        {t('pages.courseDetail.writingDesc')}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-1.5">
                      <div className="text-xs font-bold text-primary uppercase">Speaking Part 1, 2, 3</div>
                      <p className="text-xs text-slate-600">
                        {t('pages.courseDetail.speakingDesc')}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-1.5">
                      <div className="text-xs font-bold text-primary uppercase">{t('pages.courseDetail.vocabGrammarTitle')}</div>
                      <p className="text-xs text-slate-600">
                        {t('pages.courseDetail.vocabGrammarDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Guarantee & IDP Perks */}
              {activeModuleTab === 'guarantee' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                    <h3 className="text-base font-bold text-amber-900 font-heading flex items-center gap-2">
                      <ShieldCheck size={20} className="text-achievement" />
                      <span>{t('pages.courseDetail.guaranteeTitle')}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {t('pages.courseDetail.guaranteeDesc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                    <h3 className="text-base font-bold text-primary font-heading flex items-center gap-2">
                      <Sparkles size={20} className="text-primary" />
                      <span>{t('pages.courseDetail.idpPerksTitle')}</span>
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside">
                      <li>{t('pages.courseDetail.idpPerk1')}</li>
                      <li>{t('pages.courseDetail.idpPerk2')}</li>
                      <li>{t('pages.courseDetail.idpPerk3')}</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (5 cols): Sticky Registration Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-academic-border shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-academic-border pb-4">
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase block">{t('pages.courseDetail.enrollCardTitle')}</span>
                    <h3 className="text-lg font-bold text-academic-heading font-heading">
                      {course.title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-primary font-bold text-xs border border-blue-100">
                    {course.badge}
                  </span>
                </div>

                <div className="space-y-3.5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-2 text-xs">
                      <Target size={15} className="text-primary" />
                      <span>{t('pages.courseDetail.level')}</span>
                    </span>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{course.level}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-2 text-xs">
                      <Clock size={15} className="text-primary" />
                      <span>{t('pages.courseDetail.duration')}</span>
                    </span>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{course.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-2 text-xs">
                      <Users size={15} className="text-primary" />
                      <span>{t('pages.courseDetail.classSize')}</span>
                    </span>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{course.classSize}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-2 text-xs">
                      <MapPin size={15} className="text-academic-cta" />
                      <span>{t('pages.courseDetail.format')}</span>
                    </span>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{course.format}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-achievement font-bold flex items-center gap-1.5">
                      <ShieldCheck size={16} />
                      <span>{t('pages.courseDetail.policyLabel')}</span>
                    </span>
                    <span className="text-xs font-bold text-achievement text-right max-w-[180px]">
                      {course.guarantee}
                    </span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <Link to={ROUTES.CONTACT} className="block">
                    <Button fullWidth size="lg" variant="primary" icon={<ArrowRight size={18} />} className="font-bold py-3.5 shadow-glow-cta">
                      {t('pages.courseDetail.enrollBtn')}
                    </Button>
                  </Link>

                  <a
                    href={`tel:${APP_INFO.CONTACT.HOTLINE_RAW}`}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
                  >
                    <Phone size={14} className="text-primary" />
                    <span>Hotline: {APP_INFO.CONTACT.HOTLINE_DISPLAY}</span>
                  </a>
                </div>
              </div>

              {/* Related Class Openings */}
              {relatedClasses.length > 0 && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="font-heading font-bold text-sm text-academic-heading flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span>{t('pages.courseDetail.upcomingClassesTitle')}</span>
                  </h4>
                  {relatedClasses.slice(0, 2).map((cls) => (
                    <div key={cls.id} className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                      <div className="flex items-center justify-between font-bold text-slate-800">
                        <span>{cls.className}</span>
                        <span className="text-primary">{cls.schedule}</span>
                      </div>
                      <p className="text-slate-500">{cls.time} • {cls.format}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CourseDetailPage;
