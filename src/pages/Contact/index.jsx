import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { PageHeader, Button } from '@/components/common';
import { useDocumentTitle, APP_INFO } from '@/core';

export const ContactPage = () => {
  const { t } = useTranslation();
  useDocumentTitle('contact');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    course: 'ielts-foundation',
    format: 'offline-q7',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const campuses = [
    {
      id: 'q7',
      name: t('pages.contact.campus1Name'),
      address: t('pages.contact.campus1Address'),
      desc: t('pages.contact.campus1Desc'),
      hotline: APP_INFO.CONTACT.HOTLINE_DISPLAY,
      tag: t('pages.contact.mainHq'),
    },
    {
      id: 'q8',
      name: t('pages.contact.campus2Name'),
      address: t('pages.contact.campus2Address'),
      desc: t('pages.contact.campus2Desc'),
      hotline: APP_INFO.CONTACT.HOTLINE_DISPLAY,
      tag: t('pages.contact.smallGroup'),
    },
    {
      id: 'q1-q10',
      name: t('pages.contact.campus3Name'),
      address: t('pages.contact.campus3Address'),
      desc: t('pages.contact.campus3Desc'),
      hotline: APP_INFO.CONTACT.HOTLINE_DISPLAY,
      tag: t('pages.contact.centerLoc'),
    },
    {
      id: 'online',
      name: t('pages.contact.campus4Name'),
      address: t('pages.contact.campus4Address'),
      desc: t('pages.contact.campus4Desc'),
      hotline: APP_INFO.CONTACT.HOTLINE_DISPLAY,
      tag: t('pages.contact.nationwide'),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error(t('pages.contact.errFullName'));
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 9) {
      toast.error(t('pages.contact.errPhone'));
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success(t('pages.contact.successMessage', { name: formData.fullName, phone: formData.phone }));
    }, 800);
  };

  return (
    <MainLayout>
      {/* 1. Header Banner */}
      <PageHeader
        badge={t('pages.contact.badge')}
        title={t('pages.contact.title')}
        subtitle={t('pages.contact.subtitle')}
        breadcrumbItems={[{ label: t('nav.contact') }]}
      />

      {/* 2. Main Contact Grid (Campuses + Consultation Form) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column (5 cols): Contact Information & Campus Locator */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  {t('pages.contact.campusesBadge')}
                </span>
                <h2 className="text-2xl font-extrabold text-academic-heading font-heading tracking-tight">
                  {t('pages.contact.campusesTitle')}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  {t('pages.contact.campusesDesc')}
                </p>
              </div>

              {/* Campus Cards List */}
              <div className="space-y-4">
                {campuses.map((campus) => (
                  <div
                    key={campus.id}
                    className="p-4 sm:p-5 rounded-2xl bg-academic-soft-white border border-academic-border space-y-2 hover:border-primary transition-all shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-sm sm:text-base text-academic-heading flex items-center gap-2">
                        <Building2 size={16} className="text-primary" />
                        <span>{campus.name}</span>
                      </h3>
                      <span className="text-[10px] font-bold text-primary bg-white px-2 py-0.5 rounded border border-blue-100">
                        {campus.tag}
                      </span>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <MapPin size={14} className="text-academic-cta flex-shrink-0 mt-0.5" />
                      <span>{campus.address}</span>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {campus.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Hotline Box */}
              <div className="p-5 rounded-2xl bg-academic-light-blue border border-blue-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-bold block">{t('pages.contact.directHotline')}</span>
                    <a
                      href={`tel:${APP_INFO.CONTACT.HOTLINE_RAW}`}
                      className="text-base sm:text-lg font-bold text-academic-heading hover:text-primary transition-colors"
                    >
                      {APP_INFO.CONTACT.HOTLINE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-blue-200/80">
                  <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-bold block">{t('pages.contact.academicEmail')}</span>
                    <span className="text-xs font-semibold text-slate-800 break-all">{APP_INFO.CONTACT.EMAIL}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Interactive Placement Test & Consultation Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-academic-border shadow-xl space-y-6">
                <div className="space-y-2 border-b border-academic-border pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider">
                    <Sparkles size={13} className="text-amber-500" />
                    <span>{t('pages.contact.formFreeBadge')}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-academic-heading font-heading tracking-tight">
                    {t('pages.contact.formTitle')}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {t('pages.contact.formDesc')}
                  </p>
                </div>

                {isSuccess ? (
                  <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                    <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 size={32} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-emerald-900 font-heading">
                        {t('pages.contact.successTitle')}
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                        {t('pages.contact.successMessage', { name: formData.fullName, phone: formData.phone })}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          course: 'ielts-foundation',
                          format: 'offline-q7',
                          notes: '',
                        });
                      }}
                    >
                      {t('pages.contact.registerAnother')}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label htmlFor="contact-fullName" className="text-xs font-bold text-slate-700 block">
                        {t('pages.contact.fieldFullName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        required
                        placeholder={t('pages.contact.placeholderFullName')}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    {/* Phone / Zalo */}
                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="text-xs font-bold text-slate-700 block">
                        {t('pages.contact.fieldPhone')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder={t('pages.contact.placeholderPhone')}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    {/* Course Selection */}
                    <div className="space-y-1">
                      <label htmlFor="contact-course" className="text-xs font-bold text-slate-700 block">
                        {t('pages.contact.fieldCourse')}
                      </label>
                      <select
                        id="contact-course"
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      >
                        <option value="ielts-foundation">{t('pages.contact.optIeltsFoundation')}</option>
                        <option value="ielts-booster">{t('pages.contact.optIeltsBooster')}</option>
                        <option value="ielts-master">{t('pages.contact.optIeltsMaster')}</option>
                        <option value="ielts-vip">{t('pages.contact.optIeltsVip')}</option>
                        <option value="communication">{t('pages.contact.optComm')}</option>
                        <option value="toeic-vstep">{t('pages.contact.optToeicVstep')}</option>
                      </select>
                    </div>

                    {/* Preferred Format */}
                    <div className="space-y-1">
                      <label htmlFor="contact-format" className="text-xs font-bold text-slate-700 block">
                        {t('pages.contact.fieldFormat')}
                      </label>
                      <select
                        id="contact-format"
                        value={formData.format}
                        onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      >
                        <option value="offline-q7">{t('pages.contact.optQ7')}</option>
                        <option value="offline-q8">{t('pages.contact.optQ8')}</option>
                        <option value="offline-q1">{t('pages.contact.optQ1')}</option>
                        <option value="online">{t('pages.contact.optOnline')}</option>
                      </select>
                    </div>

                    {/* Notes & Target */}
                    <div className="space-y-1">
                      <label htmlFor="contact-notes" className="text-xs font-bold text-slate-700 block">
                        {t('pages.contact.fieldNotes')}
                      </label>
                      <textarea
                        id="contact-notes"
                        rows="3"
                        placeholder={t('pages.contact.placeholderNotes')}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                      />
                    </div>

                    {/* IDP Discount Notice */}
                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                      <ShieldCheck size={16} className="text-achievement flex-shrink-0" />
                      <span>{t('pages.contact.idpNotice')}</span>
                    </div>

                    {/* Submit button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        fullWidth
                        size="lg"
                        variant="primary"
                        disabled={isSubmitting}
                        icon={<Send size={16} />}
                        className="font-bold py-3.5 shadow-glow-cta"
                      >
                        {isSubmitting ? t('pages.contact.submittingBtn') : t('pages.contact.submitBtn')}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
