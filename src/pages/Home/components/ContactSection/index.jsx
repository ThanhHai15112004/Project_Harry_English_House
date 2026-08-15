import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, Send, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import { useTeacherData, APP_INFO, SECTION_IDS } from '@/core';
import { SectionTitle, Card, Button } from '@/components/common';

export const ContactSection = () => {
  const { t } = useTranslation();
  const teacher = useTeacherData();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    target: 'ielts-foundation',
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
    } catch (e) {
      // ignore
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    triggerConfetti();
    toast.success(
      t('contact.successTitle'),
      {
        description: t('contact.successDesc', {
          name: formData.fullName,
          phone: formData.phone,
        }),
        duration: 5000,
      }
    );
  };

  return (
    <section id={SECTION_IDS.CONTACT} className="py-16 sm:py-24 bg-slate-50">
      <div className="app-container">
        <SectionTitle
          badge={t('contact.badge')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading mb-2">
                  {t('contact.directInfoTitle')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t('contact.directInfoDesc')}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500">{t('contact.hotlineLabel')}</span>
                    <strong className="text-slate-900 font-bold">{APP_INFO.CONTACT.HOTLINE_DISPLAY}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500">{t('contact.emailLabel')}</span>
                    <strong className="text-slate-900 font-bold break-all">{APP_INFO.CONTACT.EMAIL}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500">{t('contact.locationsLabel')}</span>
                    <p className="text-slate-700 leading-relaxed font-medium">{t('contact.locationsVal')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-3">
              <Sparkles size={20} className="text-amber-600 flex-shrink-0" />
              <span>{t('contact.idpDiscountNotice')}</span>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black font-heading text-slate-900">
                  {t('contact.successTitle')}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
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
                        target: 'ielts-foundation',
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
                <h3 className="text-xl font-extrabold font-heading text-slate-900 mb-6">
                  {t('contact.formTitle')}
                </h3>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {t('contact.fullNameLabel')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('contact.fullNamePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {t('contact.phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t('contact.phonePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {t('contact.courseInterestLabel')}
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      value={formData.target}
                      onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                    >
                      <option value="ielts-foundation">IELTS Nền Tảng (0 - 3.0 / 4.0)</option>
                      <option value="ielts-boost">IELTS Bứt Phá (4.5 - 6.5)</option>
                      <option value="ielts-master">IELTS Chuyên Sâu (6.5 - 7.5+)</option>
                      <option value="ielts-vip">IELTS 1 Kèm 2 VIP (Cá nhân hóa)</option>
                      <option value="communication">Tiếng Anh Giao Tiếp Thực Chiến</option>
                      <option value="toeic">Luyện Thi TOEIC / VSTEP</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {t('contact.formatLabel')}
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    >
                      <option value="offline-q7">Offline tại Quận 7</option>
                      <option value="offline-q8">Offline tại Quận 8</option>
                      <option value="offline-q1">Offline tại Quận 1 / Q10</option>
                      <option value="online">Học Online (Meet / Zoom)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {t('contact.notesLabel')}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t('contact.notesPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" fullWidth size="lg" variant="primary" icon={<Send size={18} />}>
                    {t('contact.submitBtn')}
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

export default ContactSection;
