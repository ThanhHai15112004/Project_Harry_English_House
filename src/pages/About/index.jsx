import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { PageHeader, Button } from '@/components/common';
import { useTeacherData, useCertificatesData, useDocumentTitle, ROUTES, APP_INFO } from '@/core';

export const AboutPage = () => {
  const { t } = useTranslation();
  useDocumentTitle('about');

  const teacherData = useTeacherData();
  const certificates = useCertificatesData();

  return (
    <MainLayout>
      {/* 1. Header Banner */}
      <PageHeader
        badge={t('pages.about.badge')}
        title={t('pages.about.title')}
        subtitle={t('pages.about.subtitle')}
        breadcrumbItems={[{ label: t('nav.founder') }]}
      />

      {/* 2. Founder Profile & Story Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Founder Avatar & Visual Credential Badges */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200 group">
                <img
                  src={teacherData?.founder?.avatar || APP_INFO.FOUNDER.AVATAR}
                  alt={teacherData?.founder?.name || APP_INFO.FOUNDER.NAME}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                {/* Floating IDP Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-primary font-bold text-xs shadow-md border border-white/80">
                  <ShieldCheck size={16} className="text-primary" />
                  <span>{t('pages.about.idpPartnerBadge')}</span>
                </div>

                {/* Bottom Name & Role */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="text-xl font-bold font-heading">{teacherData?.founder?.name || APP_INFO.FOUNDER.NAME}</h3>
                  <p className="text-xs text-blue-200 font-medium">{t('pages.about.founderRole')}</p>
                </div>
              </div>

              {/* Quick stats under avatar */}
              <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="text-lg font-bold text-primary font-heading">8.0</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">{t('pages.about.statIeltsLabel')}</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary font-heading">{t('pages.about.statExpVal')}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">{t('pages.about.statExpLabel')}</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary font-heading">{t('pages.about.statStudentsVal')}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">{t('pages.about.statStudentsLabel')}</div>
                </div>
              </div>
            </div>

            {/* Founder Biography & Teaching Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-wider">
                  <GraduationCap size={15} />
                  <span>{t('pages.about.headInstructorBadge')}</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-academic-heading font-heading tracking-tight leading-tight">
                  "{t('pages.about.quoteTitle')}"
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  {t('pages.about.bioP1')}
                </p>
                <p>
                  {t('pages.about.bioP2')}
                </p>
              </div>

              {/* Quote box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-academic-light-blue border-l-4 border-primary text-slate-800 space-y-1">
                <p className="text-xs sm:text-sm font-medium italic leading-relaxed">
                  "{teacherData?.founder?.philosophy || t('about.statement')}"
                </p>
                <span className="text-xs font-bold text-primary block">{t('pages.about.quoteAuthor')}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to={ROUTES.COURSES}>
                  <Button size="md" variant="primary" icon={<BookOpen size={16} />}>
                    {t('pages.about.viewCoursesBtn')}
                  </Button>
                </Link>
                <Link to={ROUTES.CONTACT}>
                  <Button size="md" variant="outline" icon={<ArrowRight size={16} />}>
                    {t('pages.about.bookConsultBtn')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Teaching Values (4 Trụ Cột Đào Tạo) */}
      <section className="py-14 sm:py-20 bg-academic-soft-white border-y border-academic-border">
        <div className="app-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={14} />
              <span>{t('pages.about.coreValuesBadge')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-academic-heading font-heading tracking-tight">
              {t('pages.about.coreValuesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-academic-border shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-heading font-bold text-base text-academic-heading">{t('pages.about.p1Title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('pages.about.p1Desc')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-academic-border shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                <Users size={24} />
              </div>
              <h3 className="font-heading font-bold text-base text-academic-heading">{t('pages.about.p2Title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('pages.about.p2Desc')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-academic-border shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="font-heading font-bold text-base text-academic-heading">{t('pages.about.p3Title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('pages.about.p3Desc')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-academic-border shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                <Award size={24} />
              </div>
              <h3 className="font-heading font-bold text-base text-academic-heading">{t('pages.about.p4Title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('pages.about.p4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Credentials & Academic Activities Gallery */}
      {certificates && certificates.length > 0 && (
        <section className="py-14 sm:py-20 bg-white">
          <div className="app-container">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                <Award size={14} />
                <span>{t('pages.about.credentialsBadge')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-academic-heading font-heading tracking-tight">
                {t('pages.about.credentialsTitle')}
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {certificates.slice(0, 8).map((cert, index) => (
                <div key={cert.id || `cert-${index}`} className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs group bg-slate-50">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cert.image || cert}
                      alt={cert.title || `Chứng chỉ ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  {cert.title && (
                    <div className="p-3 text-center">
                      <span className="text-xs font-bold text-slate-800 line-clamp-1">{cert.title}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Consultation CTA Banner */}
      <section className="py-14 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="app-container text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading">
            {t('pages.about.bottomCtaTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            {t('pages.about.bottomCtaDesc')}
          </p>
          <div className="pt-2">
            <Link to={ROUTES.CONTACT}>
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold shadow-lg" icon={<ArrowRight size={16} />}>
                {t('pages.about.bottomCtaBtn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
