import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export default function CourseStickyBars({ course, onConsultClick }) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past Hero (> 450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!course || !isVisible) return null;

  return (
    <>
      {/* Desktop Sticky Bar: Below Top Header */}
      <aside 
        aria-label="Khóa học điều hướng nhanh"
        className="hidden md:block fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-md transition-all duration-300 transform translate-y-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          
          {/* Left Course Info */}
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-black bg-[#EAF2FF] text-[#1746A2]">
              {course.level || 'IELTS'}
            </span>
            <h4 className="text-sm font-bold text-[#10233F] truncate max-w-md">
              {course.title}
            </h4>
            <span className="hidden lg:inline-block text-xs text-slate-400">•</span>
            <span className="hidden lg:inline-block text-xs font-semibold text-slate-500">
              {course.duration || '3 tháng'}
            </span>
          </div>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            {course.pricingInfo?.tuitionFee && (
              <span className="hidden sm:inline-block text-sm font-extrabold text-[#1746A2]">
                {course.pricingInfo.tuitionFee}
              </span>
            )}
            <button
              type="button"
              onClick={onConsultClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors cursor-pointer active:scale-98"
            >
              <span>{t('pages.courseDetail.sticky.consultBtn', 'Nhận tư vấn')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </aside>

      {/* Mobile Bottom Sticky Bar */}
      <aside 
        aria-label="Tư vấn khóa học di động"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] shadow-2xl p-3 safe-area-inset-bottom"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold text-[#10233F] truncate">
              {course.title}
            </p>
            <p className="text-[11px] font-semibold text-[#1746A2]">
              {course.pricingInfo?.tuitionFee || course.level}
            </p>
          </div>

          <button
            type="button"
            onClick={onConsultClick}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#2563EB] active:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <span>{t('pages.courseDetail.sticky.enrollBtn', 'Đăng ký tư vấn')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>
    </>
  );
}
