import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export default function CourseStickyBars({ course, onConsultClick }) {
  const { t } = useTranslation();

  if (!course) return null;

  return (
    <>
      {/* Mobile Bottom Sticky Bar Only - Đã loại bỏ Desktop Top Sticky Bar dưới Header theo yêu cầu */}
      <aside 
        aria-label="Tư vấn khóa học di động"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-academic-border shadow-2xl p-3 safe-area-inset-bottom"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold text-academic-heading truncate font-heading">
              {t(course.titleKey)}
            </p>
            <p className="text-[11px] font-semibold text-primary">
              {t(course.pricingInfo?.tuitionFeeKey || course.levelKey)}
            </p>
          </div>

          <button
            type="button"
            onClick={onConsultClick}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-cta hover:bg-academic-cta-hover active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>{t('pages.courseDetail.sticky.enrollBtn', 'Nhận tư vấn')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>
    </>
  );
}
