import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Send, CheckCircle2, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import { APP_INFO, SECTION_IDS } from '@/core';
import { Button } from '@/components/common';

export const CtaConsultation = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    target: 'ielts-booster',
    format: 'offline-q7',
    notes: '',
  });

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error(t('contact.validationName'));
      return;
    }

    const cleanPhone = formData.phone.trim().replace(/\s+/g, '');
    if (cleanPhone.length < 9) {
      toast.error(t('contact.validationPhone'));
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      triggerConfetti();
      toast.success(t('contact.successTitle'), {
        description: t('contact.successDesc', {
          name: formData.fullName,
          phone: formData.phone,
        }),
        duration: 5000,
      });
    }, 600);
  };

  return (
    <section id={SECTION_IDS.CONTACT} className="py-20 lg:py-28 bg-academic-light-blue border-t border-blue-200/60 relative overflow-hidden">
      {/* Background soft design lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#1746a2_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column (45% / 5 cols) - Persuasion & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-bold shadow-xs border border-blue-200">
              <Sparkles size={14} className="text-achievement" />
              <span>{t('contact.badge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-academic-heading font-heading leading-tight">
              {t('contact.title')}
            </h2>

            <p className="text-sm sm:text-base text-academic-body leading-relaxed">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-blue-100 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-academic-light-blue text-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[11px] text-academic-muted">{t('contact.hotline')}</span>
                  <a
                    href={`tel:${APP_INFO.CONTACT.HOTLINE_RAW}`}
                    className="text-academic-heading font-extrabold hover:text-primary transition-colors font-heading text-sm sm:text-base"
                  >
                    {APP_INFO.CONTACT.HOTLINE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-blue-100 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-achievement flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[11px] text-academic-muted">{t('contact.address')}</span>
                  <p className="text-academic-heading font-semibold text-xs leading-relaxed">
                    {APP_INFO.CONTACT.ADDRESS_DISTRICT7}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 border border-blue-200 text-xs text-primary font-bold flex items-center gap-3 shadow-xs">
              <ShieldCheck size={22} className="text-primary flex-shrink-0" />
              <span>{t('contact.idpDiscountNotice')}</span>
            </div>
          </div>

          {/* Right Column (55% / 7 cols) - Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-academic-border shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black font-heading text-academic-heading">
                  {t('contact.successTitle')}
                </h3>
                <p className="text-sm text-academic-body max-w-md mx-auto leading-relaxed">
                  {t('contact.successDesc', {
                    name: formData.fullName,
                    phone: formData.phone,
                  })}
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        target: 'ielts-booster',
                        format: 'offline-q7',
                        notes: '',
                      });
                    }}
                  >
                    {t('contact.resubmitBtn')}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-extrabold font-heading text-academic-heading mb-6">
                  {t('contact.formTitle')}
                </h3>

                <div className="space-y-1.5">
                  <label htmlFor="cta-fullName" className="text-xs font-bold text-academic-heading block">
                    {t('contact.fullName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cta-fullName"
                    type="text"
                    required
                    placeholder={t('contact.fullNamePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cta-phone" className="text-xs font-bold text-academic-heading block">
                    {t('contact.phone')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cta-phone"
                    type="tel"
                    required
                    placeholder={t('contact.phonePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="cta-target" className="text-xs font-bold text-academic-heading block">
                      {t('contact.course')}
                    </label>
                    <select
                      id="cta-target"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.target}
                      onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                    >
                      <option value="ielts-foundation">{t('contact.courseOptions.ieltsFoundation')}</option>
                      <option value="ielts-booster">{t('contact.courseOptions.ieltsBooster')}</option>
                      <option value="ielts-master">{t('contact.courseOptions.ieltsMaster')}</option>
                      <option value="ielts-vip">{t('contact.courseOptions.ieltsVip')}</option>
                      <option value="communication">{t('contact.courseOptions.communication')}</option>
                      <option value="toeic">{t('contact.courseOptions.toeic')}</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="cta-format" className="text-xs font-bold text-academic-heading block">
                      {t('contact.format')}
                    </label>
                    <select
                      id="cta-format"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    >
                      <option value="offline-q7">{t('contact.formatOptions.offlineQ7')}</option>
                      <option value="offline-q8">{t('contact.formatOptions.offlineQ8')}</option>
                      <option value="offline-q1">{t('contact.formatOptions.offlineQ1')}</option>
                      <option value="online">{t('contact.formatOptions.online')}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cta-notes" className="text-xs font-bold text-academic-heading block">
                    {t('contact.notes')}
                  </label>
                  <textarea
                    id="cta-notes"
                    rows={3}
                    placeholder={t('contact.notesPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    variant="primary"
                    disabled={isSubmitting}
                    icon={<Send size={18} />}
                  >
                    {isSubmitting ? t('contact.submitting') : t('contact.submitBtn')}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaConsultation;
