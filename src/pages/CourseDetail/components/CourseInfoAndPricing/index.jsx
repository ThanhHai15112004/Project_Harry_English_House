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

  const pricing = course.pricingInfo || {
    tuitionFee: '7.380.000 VNĐ',
    perMonth: 'Từ 2.460.000 VNĐ/tháng',
    totalSessions: '36 buổi (3 tháng)',
    includes: [
      'Trọn bộ giáo trình & tài liệu in ấn độc quyền',
      'Chấm chữa bài viết Task 1-2 & chỉnh âm 1-1',
      '2 buổi thi thử Mock Test chuẩn phòng thi thật',
      'Voucher giảm lệ phí thi IELTS tại đối tác IDP Vietnam'
    ]
  };

  const infoRows = [
    { label: 'Thời lượng đào tạo', value: course.duration || '3 tháng (~36 buổi)', icon: Clock },
    { label: 'Lịch học trong tuần', value: course.weeklySchedule || '3 buổi / tuần (90 phút/buổi)', icon: Calendar },
    { label: 'Hình thức học', value: course.format || 'Offline Q7, Q8 / Online qua Zoom/Meet', icon: MapPin },
    { label: 'Quy mô lớp học', value: course.classSize || 'Nhóm nhỏ 6–10 học viên', icon: Users },
    { label: 'Cam kết chuẩn đầu ra', value: course.guarantee || 'Cam kết đầu ra bằng văn bản & Hỗ trợ học bù', icon: ShieldCheck }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E2E8F0]" id="course-pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EAF2FF] text-[#1746A2] mb-3">
            {t('pages.courseDetail.infoPricing.badge', 'THÔNG TIN & BIỂU PHÍ')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10233F] tracking-tight">
            {t('pages.courseDetail.infoPricing.title', 'Thông Tin Khóa Học & Biểu Phí')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('pages.courseDetail.infoPricing.subtitle', 'Học phí minh bạch, đã bao gồm toàn bộ giáo trình và đặc quyền thi thử IDP')}
          </p>
        </div>

        {/* 2 Columns: Left 55% / Right 45% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (55% -> col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-[#10233F] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#2563EB]" />
              <span>{t('pages.courseDetail.infoPricing.infoTitle', 'Thông Số Đào Tạo Khóa Học')}</span>
            </h3>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] divide-y divide-slate-200/70">
              {infoRows.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {row.label}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-[#10233F] mt-0.5">
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
                <strong>Chính sách linh hoạt:</strong> Hỗ trợ đóng học phí theo từng tháng, 3 tháng hoặc 6 tháng kèm chính sách ưu đãi giảm 5–10% khi đăng ký sớm.
              </p>
            </div>
          </div>

          {/* Right Column: Pricing Box (45% -> col-span-5) */}
          <div className="lg:col-span-5">
            <div className="bg-[#EAF2FF] border border-[#BFDBFE] rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
              
              {/* Top pill */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[#2563EB] text-white text-xs font-extrabold rounded-lg uppercase tracking-wider">
                  {t('pages.courseDetail.infoPricing.pricingTitle', 'HỌC PHÍ')}
                </span>
                <span className="text-xs font-bold text-[#1746A2]">
                  {pricing.totalSessions || '36 buổi'}
                </span>
              </div>

              {/* Course Title */}
              <h4 className="text-lg font-bold text-[#10233F] mb-1">
                {course.title}
              </h4>
              <p className="text-xs text-slate-600 mb-6">
                {t('pages.courseDetail.infoPricing.allInclusive', 'Học phí trọn gói toàn khóa (Đã gồm giáo trình)')}
              </p>

              {/* Price Tag */}
              <div className="mb-6 p-4 bg-white/80 backdrop-blur-xs rounded-xl border border-white">
                <div className="text-2xl sm:text-3xl font-black text-[#1746A2] tracking-tight">
                  {pricing.tuitionFee}
                </div>
                {pricing.perMonth && (
                  <div className="text-xs font-semibold text-slate-500 mt-1">
                    {t('pages.courseDetail.infoPricing.perMonth', 'Hoặc:')} <span className="text-[#10233F]">{pricing.perMonth}</span>
                  </div>
                )}
              </div>

              {/* Included Perks List */}
              <div className="mb-8">
                <h5 className="text-xs font-bold text-[#10233F] uppercase tracking-wider mb-3">
                  {t('pages.courseDetail.infoPricing.privilegesTitle', 'Quyền lợi bao gồm:')}
                </h5>
                <ul className="space-y-2.5">
                  {(pricing.includes || []).map((inc, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span className="leading-snug">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={onConsultClick}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
              >
                <span>{t('pages.courseDetail.infoPricing.consultBtn', 'Nhận tư vấn xếp lớp')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-slate-500 mt-3 font-medium">
                Kiểm tra trình độ đầu vào 4 kỹ năng hoàn toàn miễn phí
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
