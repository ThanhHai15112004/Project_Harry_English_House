import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles,
  Gift
} from 'lucide-react';

export default function CourseInfoAndPricing({ course, onConsultClick }) {
  const { t } = useTranslation();

  if (!course) return null;

  const pricing = course.pricingInfo || {};

  const getTranslatedValue = (key, fallback) => {
    if (!key) return fallback;
    const translated = t(key);
    if (translated === key || translated.startsWith('db.courses.')) {
      return fallback;
    }
    return translated;
  };

  const defaultIncludes = [
    'Giáo trình & bộ tài liệu độc quyền từ NXB uy tín',
    'Chấm chữa bài Writing Task 1-2 & Sửa phát âm Speaking 1-1',
    'Thi thử Mock Test định kỳ theo chuẩn đề thi thật',
    'Voucher ưu đãi 100.000đ khi đăng ký thi IELTS tại IDP'
  ];

  const infoRows = [
    { id: 'duration', label: t('pages.courses.durationLabel', 'Thời lượng:'), value: t(course.durationKey), icon: Clock },
    { id: 'schedule', label: t('pages.courseDetail.quickOverview.schedule', 'Lịch học:'), value: t(course.weeklyScheduleKey), icon: Calendar },
    { id: 'format', label: t('pages.courses.formatLabel', 'Hình thức:'), value: t(course.formatKey), icon: MapPin },
    { id: 'classSize', label: t('pages.courses.classSizeLabel', 'Quy mô lớp:'), value: t(course.classSizeKey), icon: Users },
    { id: 'guarantee', label: t('programs.guaranteeLabel', 'Cam kết đầu ra:'), value: t(course.guaranteeKey), icon: ShieldCheck }
  ];

  const tuitionFeeText = getTranslatedValue(pricing.tuitionFeeKey, 'Học phí trọn gói minh bạch');
  const perMonthText = pricing.perMonthKey ? getTranslatedValue(pricing.perMonthKey, 'Hỗ trợ chia kỳ linh hoạt') : null;
  const totalSessionsText = getTranslatedValue(pricing.totalSessionsKey, t(course.durationKey));

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-academic-border" id="course-pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-academic-light-blue text-primary mb-3 shadow-2xs font-heading">
            {t('pages.courseDetail.infoPricing.badge', 'THÔNG TIN & BIỂU PHÍ')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-academic-heading tracking-tight font-heading">
            {t('pages.courseDetail.infoPricing.title', 'Thông Tin Khóa Học & Biểu Phí')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-academic-body leading-relaxed max-w-2xl mx-auto">
            {t('pages.courseDetail.infoPricing.subtitle', 'Học phí minh bạch, đã bao gồm toàn bộ giáo trình và đặc quyền thi thử IDP')}
          </p>
        </div>

        {/* 2 Columns: Left 55% / Right 45% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (55% -> col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-academic-heading flex items-center gap-2 font-heading">
              <Sparkles className="w-5 h-5 text-cta" />
              <span>{t('pages.courseDetail.infoPricing.infoTitle', 'Thông Số Khóa Học')}</span>
            </h3>

            <div className="bg-academic-soft-white rounded-2xl p-6 border border-academic-border divide-y divide-slate-200/70 shadow-2xs">
              {infoRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.id} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white border border-academic-border flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Icon className="w-4 h-4 text-cta" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-academic-muted uppercase tracking-wider">
                        {row.label}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-academic-heading mt-0.5 font-heading">
                        {row.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note box */}
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-start gap-3">
              <Gift className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed font-medium">
                {t('pages.courseDetail.infoPricing.policyNote', 'Học viên được kiểm tra trình độ 4 kỹ năng miễn phí & xếp lớp thử 1 buổi trước khi quyết định đăng ký chính thức.')}
              </p>
            </div>
          </div>

          {/* Right Column: Pricing Box (45% -> col-span-5) */}
          <div className="lg:col-span-5">
            <div className="bg-academic-light-blue border border-academic-primary-light rounded-2xl p-6 sm:p-8 shadow-card relative overflow-hidden">
              
              {/* Top pill */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary text-white text-xs font-black rounded-lg uppercase tracking-wider font-heading">
                  {t('pages.courseDetail.infoPricing.pricingTitle', 'HỌC PHÍ')}
                </span>
                <span className="text-xs font-bold text-primary font-heading">
                  {totalSessionsText}
                </span>
              </div>

              {/* Course Title */}
              <h4 className="text-lg font-bold text-academic-heading mb-1 font-heading">
                {t(course.titleKey)}
              </h4>
              <p className="text-xs text-academic-body mb-6">
                {t('pages.courseDetail.infoPricing.allInclusive', 'Trọn gói toàn khóa')}
              </p>

              {/* Price Tag */}
              <div className="mb-6 p-4 bg-white/90 backdrop-blur-xs rounded-xl border border-white shadow-2xs">
                <div className="text-2xl sm:text-3xl font-black text-primary tracking-tight font-heading">
                  {tuitionFeeText}
                </div>
                {perMonthText && (
                  <div className="text-xs font-semibold text-academic-muted mt-1">
                    {t('pages.courseDetail.infoPricing.perMonth', 'Hoặc đóng linh hoạt:')} <span className="text-academic-heading font-bold">{perMonthText}</span>
                  </div>
                )}
              </div>

              {/* Included Perks List */}
              <div className="mb-8">
                <h5 className="text-xs font-bold text-academic-heading uppercase tracking-wider mb-3 font-heading">
                  {t('pages.courseDetail.infoPricing.privilegesTitle', 'Quyền lợi bao gồm:')}
                </h5>
                <ul className="space-y-2.5">
                  {(pricing.includesKeys && pricing.includesKeys.length > 0 ? pricing.includesKeys : defaultIncludes).map((inc, index) => {
                    const incText = typeof inc === 'string' && inc.startsWith('db.') ? getTranslatedValue(inc, defaultIncludes[index] || inc) : inc;
                    return (
                      <li key={typeof inc === 'string' ? inc : `inc-${index}`} className="flex items-start gap-2.5 text-xs sm:text-sm text-academic-heading">
                        <CheckCircle2 className="w-4 h-4 text-cta shrink-0 mt-0.5" />
                        <span className="leading-snug">{incText}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={onConsultClick}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-cta hover:bg-academic-cta-hover active:scale-98 text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>{t('pages.courseDetail.infoPricing.consultBtn', 'Nhận tư vấn xếp lớp')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-academic-muted mt-3 font-medium">
                {t('contact.badge', 'ĐĂNG KÝ TƯ VẤN MIỄN PHÍ')}
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
