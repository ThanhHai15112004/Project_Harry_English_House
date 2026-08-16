import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  BookOpen,
  Award,
} from 'lucide-react';
import { Button } from '@/components/common';
import { APP_INFO, ROUTES } from '@/core';

export const ContactMainSection = ({ onScrollToMap }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: 'undecided',
    goal: 'ielts',
    customGoal: '',
    format: 'flexible',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const goalOptions = [
    { id: 'ielts', label: t('pages.contact.goalIelts') },
    { id: 'toeic', label: t('pages.contact.goalToeic') },
    { id: 'vstep', label: t('pages.contact.goalVstep') },
    { id: 'comm', label: t('pages.contact.goalComm') },
    { id: 'work', label: t('pages.contact.goalWork') },
    { id: 'other', label: t('pages.contact.goalOther') },
  ];

  const formatOptions = [
    { id: 'online', label: t('pages.contact.formatOnline') },
    { id: 'offline', label: t('pages.contact.formatOffline') },
    { id: 'flexible', label: t('pages.contact.formatFlexible') },
  ];

  const validateField = (field, value) => {
    let newErrors = { ...errors };

    if (field === 'fullName') {
      if (!value.trim()) {
        newErrors.fullName = t('pages.contact.errFullName');
      } else {
        delete newErrors.fullName;
      }
    }

    if (field === 'phone') {
      const cleanPhone = value.replace(/\s+/g, '');
      if (!cleanPhone.trim()) {
        newErrors.phone = t('pages.contact.errPhone');
      } else if (!/^[0-9+]{9,15}$/.test(cleanPhone)) {
        newErrors.phone = t('pages.contact.errPhoneInvalid');
      } else {
        delete newErrors.phone;
      }
    }

    setErrors(newErrors);
  };

  const handleBlur = (field) => {
    validateField(field, formData[field]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = t('pages.contact.errFullName');
    }

    const cleanPhone = formData.phone.replace(/\s+/g, '');
    if (!cleanPhone.trim()) {
      newErrors.phone = t('pages.contact.errPhone');
    } else if (!/^[0-9+]{9,15}$/.test(cleanPhone)) {
      newErrors.phone = t('pages.contact.errPhoneInvalid');
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleResetForm = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      course: 'undecided',
      goal: 'ielts',
      customGoal: '',
      format: 'flexible',
      notes: '',
    });
    setErrors({});
  };

  return (
    <section id="contact-form-section" className="py-14 sm:py-20 bg-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Outer Split Container (38% Navy Info / 62% White Form) */}
        <div className="rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* ========================================================================= */}
          {/* Left Column (38% -> 5 Cols on desktop): Dark Navy #10233F Info Panel     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 bg-academic-heading text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden">
            {/* Background Soft Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-academic-sky/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              
              {/* Header Title */}
              <div className="space-y-2 border-b border-white/10 pb-5">
                <div className="text-xs font-black uppercase tracking-widest text-academic-sky font-heading">
                  {t('pages.contact.heroBadge')}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight">
                  {t('pages.contact.infoTitle')}
                </h2>
              </div>

              {/* Contact Information List */}
              <div className="space-y-6">
                
                {/* 1. Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-academic-sky flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                    <MapPin size={19} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      {t('pages.contact.addressTitle')}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Harry English House
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      {t('pages.contact.addressValue')}
                    </div>
                    <button
                      type="button"
                      onClick={onScrollToMap}
                      className="inline-flex items-center gap-1 text-xs font-bold text-academic-sky hover:text-white transition-colors pt-1 cursor-pointer"
                    >
                      <span>{t('pages.contact.addressMapLink')}</span>
                    </button>
                  </div>
                </div>

                {/* 2. Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-academic-sky flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                    <Phone size={19} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      {t('pages.contact.phoneTitle')}
                    </div>
                    <div className="text-base sm:text-lg font-black text-white font-heading">
                      {t('pages.contact.phoneValue')}
                    </div>
                    <a
                      href={`tel:${APP_INFO.CONTACT.HOTLINE_RAW}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-academic-sky hover:text-white transition-colors pt-0.5"
                    >
                      <span>{t('pages.contact.phoneCallLink')}</span>
                    </a>
                  </div>
                </div>

                {/* 3. Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-academic-sky flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                    <Mail size={19} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      {t('pages.contact.emailTitle')}
                    </div>
                    <a
                      href={`mailto:${t('pages.contact.emailValue')}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors break-all block"
                    >
                      {t('pages.contact.emailValue')}
                    </a>
                  </div>
                </div>

                {/* 4. Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-academic-sky flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                    <Clock size={19} />
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      {t('pages.contact.hoursTitle')}
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>{t('pages.contact.hoursWeekdayLabel')}</span>
                      <span className="font-bold text-white">{t('pages.contact.hoursWeekdayValue')}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>{t('pages.contact.hoursSundayLabel')}</span>
                      <span className="font-bold text-slate-300">{t('pages.contact.hoursSundayValue')}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Social Media Links */}
            <div className="relative z-10 pt-6 border-t border-white/10 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {t('pages.contact.socialTitle')}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={APP_INFO.SOCIAL_LINKS.FACEBOOK_FANPAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white flex items-center gap-1.5 transition-all"
                >
                  <span>Facebook Fanpage</span>
                  <ExternalLink size={12} className="text-slate-400" />
                </a>

                <a
                  href={APP_INFO.SOCIAL_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white flex items-center gap-1.5 transition-all"
                >
                  <span>Instagram</span>
                  <ExternalLink size={12} className="text-slate-400" />
                </a>

                <a
                  href={APP_INFO.SOCIAL_LINKS.THREADS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white flex items-center gap-1.5 transition-all"
                >
                  <span>Threads</span>
                  <ExternalLink size={12} className="text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* Right Column (62% -> 7 Cols on desktop): High-Conversion White Form       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            
            {isSuccess ? (
              /* Inline Success State */
              <div className="py-8 sm:py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 size={36} />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-bold">
                    <Sparkles size={13} />
                    <span>{t('pages.contact.successBadge')}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-academic-heading font-heading">
                    {t('pages.contact.successTitle')}
                  </h3>
                  <p className="text-xs sm:text-sm text-academic-body leading-relaxed">
                    {t('pages.contact.successMessage', { name: formData.fullName, phone: formData.phone })}
                  </p>
                </div>

                {/* Suggested Next Actions */}
                <div className="pt-4 border-t border-slate-100 max-w-md mx-auto space-y-3">
                  <p className="text-xs font-bold text-academic-muted">
                    {t('pages.contact.successNextStep')}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link to={ROUTES.COURSES}>
                      <Button
                        variant="primary"
                        size="sm"
                        className="font-bold shadow-xs cursor-pointer"
                        icon={<BookOpen size={15} />}
                      >
                        {t('pages.contact.successViewCourses')}
                      </Button>
                    </Link>

                    <Link to={ROUTES.RESULTS}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white hover:bg-slate-50 border-slate-300 font-bold text-academic-heading shadow-2xs cursor-pointer"
                        icon={<Award size={15} className="text-achievement" />}
                      >
                        {t('pages.contact.successViewResults')}
                      </Button>
                    </Link>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-xs font-semibold text-slate-500 hover:text-primary transition-colors underline cursor-pointer"
                    >
                      {t('pages.contact.successRegisterAnother')}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Main Consultation Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Form Header */}
                <div className="space-y-1.5 border-b border-slate-100 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-cta text-xs font-bold uppercase tracking-wider">
                    <Sparkles size={13} />
                    <span>{t('pages.contact.formBadge')}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-academic-heading font-heading tracking-tight">
                    {t('pages.contact.formTitle')}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {t('pages.contact.formDesc')}
                  </p>
                </div>

                {/* Row 1: Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-fullName" className="text-xs font-bold text-slate-700 block">
                      {t('pages.contact.fullName')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-fullName"
                      type="text"
                      placeholder={t('pages.contact.fullNamePlaceholder')}
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) validateField('fullName', e.target.value);
                      }}
                      onBlur={() => handleBlur('fullName')}
                      className={`w-full h-12 px-4 rounded-xl bg-white border text-sm text-academic-heading placeholder:text-slate-400 focus:outline-hidden focus:border-cta focus:ring-3 focus:ring-blue-100 transition-all ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] font-semibold text-red-600 animate-fadeIn">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-bold text-slate-700 block">
                      {t('pages.contact.phone')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder={t('pages.contact.phonePlaceholder')}
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) validateField('phone', e.target.value);
                      }}
                      onBlur={() => handleBlur('phone')}
                      className={`w-full h-12 px-4 rounded-xl bg-white border text-sm text-academic-heading placeholder:text-slate-400 focus:outline-hidden focus:border-cta focus:ring-3 focus:ring-blue-100 transition-all ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] font-semibold text-red-600 animate-fadeIn">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                </div>

                {/* Row 2: Email & Course Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 block">
                      {t('pages.contact.email')}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder={t('pages.contact.emailPlaceholder')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white border border-slate-300 text-sm text-academic-heading placeholder:text-slate-400 focus:outline-hidden focus:border-cta focus:ring-3 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  {/* Course of Interest */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-course" className="text-xs font-bold text-slate-700 block">
                      {t('pages.contact.courseInterest')}
                    </label>
                    <select
                      id="contact-course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white border border-slate-300 text-sm text-academic-heading focus:outline-hidden focus:border-cta focus:ring-3 focus:ring-blue-100 transition-all cursor-pointer"
                    >
                      <option value="undecided">{t('pages.contact.optUndecided')}</option>
                      <option value="ielts">{t('pages.contact.optIelts')}</option>
                      <option value="toeic">{t('pages.contact.optToeic')}</option>
                      <option value="comm">{t('pages.contact.optComm')}</option>
                      <option value="vstep">{t('pages.contact.optVstep')}</option>
                    </select>
                  </div>

                </div>

                {/* Row 3: Learning Goal Quick Selection Chips */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    {t('pages.contact.goalLabel')}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {goalOptions.map((opt) => {
                      const isSelected = formData.goal === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary/40 ${
                            isSelected
                              ? 'bg-academic-light-blue border-2 border-cta text-primary shadow-xs'
                              : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700'
                          }`}
                          onClick={() => setFormData({ ...formData, goal: opt.id })}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Additional Input if 'Other' Goal is Selected */}
                  {formData.goal === 'other' && (
                    <div className="pt-1.5 animate-fadeIn">
                      <input
                        type="text"
                        placeholder={t('pages.contact.goalOtherPlaceholder')}
                        value={formData.customGoal}
                        onChange={(e) => setFormData({ ...formData, customGoal: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-300 text-xs text-academic-heading placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:border-cta transition-all"
                      />
                    </div>
                  )}
                </div>

                {/* Row 4: Preferred Study Format (3 Cards) */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    {t('pages.contact.formatLabel')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {formatOptions.map((opt) => {
                      const isSelected = formData.format === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          className={`p-3 rounded-xl text-xs font-bold text-center transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary/40 ${
                            isSelected
                              ? 'bg-academic-light-blue border-2 border-cta text-primary shadow-xs'
                              : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700'
                          }`}
                          onClick={() => setFormData({ ...formData, format: opt.id })}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 5: Notes & Questions (Textarea 120-140px) */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-notes" className="text-xs font-bold text-slate-700 block">
                    {t('pages.contact.notesLabel')}
                  </label>
                  <textarea
                    id="contact-notes"
                    rows={3}
                    placeholder={t('pages.contact.notesPlaceholder')}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full min-h-[120px] p-3.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-academic-heading placeholder:text-slate-400 focus:outline-hidden focus:border-cta focus:ring-3 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    variant="primary"
                    disabled={isSubmitting}
                    icon={isSubmitting ? null : <Send size={16} />}
                    className="font-extrabold py-3.5 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    {isSubmitting ? t('pages.contact.submittingBtn') : t('pages.contact.submitBtn')}
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

export default ContactMainSection;
