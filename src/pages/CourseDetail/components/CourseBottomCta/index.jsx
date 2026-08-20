import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function CourseBottomCta({ course, onConsultClick, onViewClassesClick }) {
  const { t } = useTranslation();

  return (
    <section className="bg-[#10233F] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle background glow circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-blue-200 border border-white/15 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          {t('pages.courseDetail.bottomCta.badge', 'BẮT ĐẦU NGAY')}
        </span>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
          {t('pages.courseDetail.bottomCta.title', 'Khóa học này có phù hợp với mục tiêu của bạn?')}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
          {t('pages.courseDetail.bottomCta.desc', 'Trao đổi trực tiếp với Harry English House để kiểm tra đầu vào 4 kỹ năng miễn phí và chọn lớp học tối ưu nhất.')}
        </p>

        {/* 2 Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onConsultClick}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-100 text-[#10233F] font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-98"
          >
            <span>{t('pages.courseDetail.bottomCta.consultBtn', 'Nhận tư vấn khóa học')}</span>
            <ArrowRight className="w-4 h-4 text-[#2563EB]" />
          </button>

          <button
            type="button"
            onClick={onViewClassesClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base rounded-xl border border-white/20 hover:border-white/30 transition-all duration-200 cursor-pointer"
          >
            <span>{t('pages.courseDetail.bottomCta.classesBtn', 'Xem lớp đang tuyển')}</span>
          </button>
        </div>

        {/* Small trust indicator */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t('pages.courseDetail.bottomCta.privacyNotice', 'Cam kết bảo mật thông tin & Tư vấn đúng năng lực không chèo kéo')}</span>
        </div>

      </div>
    </section>
  );
}
