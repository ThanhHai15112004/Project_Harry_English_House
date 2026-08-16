import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  BookOpen,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  CreditCard,
  Search,
} from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { PageHeader, Button } from '@/components/common';
import { useCoursesData, usePricingData, useClassesData, useDocumentTitle, ROUTES } from '@/core';

export const CoursesPage = () => {
  const { t } = useTranslation();
  useDocumentTitle('courses');

  const allCourses = useCoursesData();
  const pricingData = usePricingData();
  const classesData = useClassesData();

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: t('pages.courses.tabAll') },
    { id: 'ielts', label: t('pages.courses.tabIelts') },
    { id: 'ielts-vip', label: t('pages.courses.tabVip') },
    { id: 'communication', label: t('pages.courses.tabComm') },
    { id: 'toeic-vstep', label: t('pages.courses.tabToeic') },
  ];

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      {/* 1. Dedicated Page Header Banner */}
      <PageHeader
        badge={t('pages.courses.badge')}
        title={t('pages.courses.title')}
        subtitle={t('pages.courses.subtitle')}
        breadcrumbItems={[{ label: t('nav.programs') }]}
      >
        {/* Search & Filter Bar */}
        <div className="pt-2 max-w-xl">
          <div className="relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('pages.courses.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 shadow-xs transition-all"
            />
          </div>
        </div>
      </PageHeader>

      {/* 2. Course Catalog & Filters */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="app-container">
          {/* Category Tabs */}
          <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-academic-cta text-white shadow-md shadow-cta/25'
                    : 'bg-academic-surface text-academic-body hover:text-academic-heading hover:bg-slate-200/80 border border-slate-200'
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col h-full rounded-2xl bg-white border border-academic-border hover:border-blue-400 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-xs text-primary font-bold text-xs shadow-xs">
                      <Sparkles size={12} className="text-amber-500" />
                      <span>{course.badge}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs font-semibold text-blue-200 block">
                      {t('programs.levelLabel')} {course.level}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <Link to={`/courses/${course.id}`}>
                      <h3 className="font-heading font-bold text-lg text-academic-heading group-hover:text-primary transition-colors leading-snug line-clamp-1">
                        {course.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-academic-body line-clamp-2 leading-relaxed">
                      {course.target}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <div className="flex items-start gap-2">
                      <ShieldCheck size={14} className="text-achievement flex-shrink-0 mt-0.5" />
                      <span className="font-semibold text-achievement">{course.guarantee}</span>
                    </div>
                    {course.highlights?.slice(0, 2).map((h) => (
                      <div key={h} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 size={13} className="text-academic-cta flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta Specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 truncate">
                      <Clock size={13} className="text-primary flex-shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <Users size={13} className="text-primary flex-shrink-0" />
                      <span>{course.classSize}</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link to={`/courses/${course.id}`}>
                      <Button fullWidth size="sm" variant="outline" className="text-xs font-bold py-2">
                        {t('nav.courseDetail')}
                      </Button>
                    </Link>
                    <Link to={ROUTES.CONTACT}>
                      <Button fullWidth size="sm" variant="primary" icon={<ArrowRight size={13} />} className="text-xs font-bold py-2">
                        {t('programs.consultBtn')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <BookOpen size={36} className="mx-auto mb-3 text-slate-400" />
              <p className="text-base font-bold">{t('pages.courses.notFoundSearch', { query: searchQuery })}</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 text-primary text-sm font-bold underline cursor-pointer"
              >
                {t('pages.courses.resetSearch')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Tuition Fee Table & Policy */}
      {pricingData && (
        <section className="py-14 sm:py-20 bg-academic-soft-white border-y border-academic-border">
          <div className="app-container">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-academic-light-blue text-primary text-xs font-bold uppercase tracking-wider mb-2">
                <CreditCard size={14} />
                <span>{t('pages.courses.pricingBadge')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-academic-heading font-heading tracking-tight">
                {pricingData.title || t('pricing.title')}
              </h2>
              <p className="text-xs sm:text-sm text-academic-body mt-2">
                {pricingData.note}
              </p>
            </div>

            {/* Packages 3 Months Table */}
            <div className="bg-white rounded-2xl border border-academic-border shadow-xs overflow-hidden mb-8">
              <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-academic-border flex items-center justify-between">
                <h3 className="font-heading font-bold text-sm sm:text-base text-academic-heading flex items-center gap-2">
                  <Award size={18} className="text-primary" />
                  <span>{t('pages.courses.pricingTableTitle')}</span>
                </h3>
                <span className="text-xs text-primary font-bold bg-white px-2.5 py-1 rounded-lg border border-blue-100">
                  {t('pages.courses.pricingFlexible')}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3.5 sm:p-4">{t('pages.courses.colProgram')}</th>
                      <th className="p-3.5 sm:p-4">{t('pages.courses.colClass24')}</th>
                      <th className="p-3.5 sm:p-4">{t('pages.courses.colClass57')}</th>
                      <th className="p-3.5 sm:p-4">{t('pages.courses.colClass810')}</th>
                      <th className="p-3.5 sm:p-4">{t('pages.courses.colPromo')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {pricingData.packages3Months?.map((pkg) => (
                      <tr key={pkg.program} className="hover:bg-blue-50/40 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-academic-heading">{pkg.program}</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-primary">{pkg.class2_4}</td>
                        <td className="p-3.5 sm:p-4 font-semibold">{pkg.class5_7}</td>
                        <td className="p-3.5 sm:p-4 font-semibold">{pkg.class8_10}</td>
                        <td className="p-3.5 sm:p-4 text-achievement font-medium">{pkg.promotion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* VIP Coaching Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingData.specialClasses?.map((sp) => (
                <div key={sp.title} className="p-6 rounded-2xl bg-white border border-blue-200 shadow-xs space-y-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 font-bold text-xs border border-purple-100">
                    VIP Personalized
                  </span>
                  <h4 className="font-heading font-bold text-base text-academic-heading">{sp.title}</h4>
                  <div className="text-xl font-bold text-primary">{sp.price}</div>
                  <ul className="space-y-1.5 pt-2 text-xs text-academic-body">
                    {sp.features?.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Upcoming Classes Schedule */}
      {classesData?.classes && (
        <section id="classes" className="py-14 sm:py-20 bg-white">
          <div className="app-container">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                <Clock size={14} />
                <span>{t('pages.courses.classesBadge')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-academic-heading font-heading tracking-tight">
                {classesData.title || t('classes.title')}
              </h2>
              <p className="text-xs sm:text-sm text-academic-body mt-2">
                {classesData.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {classesData.classes.map((cls) => (
                <div key={cls.id} className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-4 hover:border-primary transition-all">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-100/80 text-primary font-bold text-xs">
                      {cls.program}
                    </span>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {cls.badge}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-academic-heading">{cls.className}</h3>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <p><strong>Lịch học:</strong> {cls.schedule}</p>
                    <p><strong>Thời gian:</strong> {cls.time}</p>
                    <p><strong>Hình thức:</strong> {cls.format}</p>
                    <p><strong>Giảng viên:</strong> {cls.teacher}</p>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs mb-1 font-bold">
                      <span className="text-slate-600">{t('pages.courses.spotsBooked')}</span>
                      <span className="text-primary">{cls.filledSpots}/{cls.totalSpots}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${(cls.filledSpots / cls.totalSpots) * 100}%` }}
                      />
                    </div>
                  </div>
                  <Link to={ROUTES.CONTACT} className="block pt-1">
                    <Button fullWidth size="sm" variant="primary" icon={<ArrowRight size={14} />}>
                      {t('pages.courses.bookSpotBtn')}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Bottom Consultation Banner */}
      <section className="py-12 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="app-container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              {t('pages.courses.bottomCtaTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              {t('pages.courses.bottomCtaDesc')}
            </p>
          </div>
          <Link to={ROUTES.CONTACT} className="flex-shrink-0">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold shadow-lg" icon={<ArrowRight size={16} />}>
              {t('pages.courses.bottomCtaBtn')}
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default CoursesPage;
