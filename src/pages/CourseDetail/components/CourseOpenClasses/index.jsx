import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, MapPin, User, Users, ArrowRight, BellRing } from 'lucide-react';
import classesData from '../../../../db/classes.json';

export default function CourseOpenClasses({ course, onSelectClass, onConsultClick }) {
  const { t } = useTranslation();

  if (!course) return null;

  const allClasses = classesData.classes || [];

  // Filter classes matching current course category or level
  const matchedClasses = allClasses.filter(c => {
    if (course.category === 'ielts' || course.category === 'ielts-vip') {
      return c.program === 'IELTS';
    }
    if (course.category === 'communication') {
      return c.program === 'Giao Tiếp';
    }
    return true;
  });

  const displayClasses = matchedClasses.length > 0 ? matchedClasses : allClasses;

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E2E8F0]" id="open-classes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EAF2FF] text-[#1746A2] mb-3">
            {t('pages.courseDetail.openClasses.badge', 'LỚP ĐANG TUYỂN')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10233F] tracking-tight">
            {t('pages.courseDetail.openClasses.title', 'Các Lớp Sắp Khai Giảng')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('pages.courseDetail.openClasses.subtitle', 'Chọn khung giờ và hình thức học phù hợp nhất với lịch trình của bạn')}
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {displayClasses.map((cls, idx) => {
            const spotsRemaining = (cls.totalSpots || 10) - (cls.filledSpots || 0);
            const isNearFull = spotsRemaining <= 3;

            return (
              <div 
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 text-xs font-bold bg-[#EAF2FF] text-[#1746A2] rounded-md">
                      {cls.program} • {cls.level}
                    </span>
                    <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${
                      isNearFull ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {cls.badge || 'Sắp khai giảng'}
                    </span>
                  </div>

                  {/* Class Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#10233F] mb-4">
                    {cls.className}
                  </h3>

                  {/* Details */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 mb-6">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span><strong>Lịch học:</strong> {cls.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span><strong>Thời gian:</strong> {cls.time}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span><strong>Địa điểm:</strong> {cls.format}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <User className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span><strong>Giảng viên:</strong> {cls.teacher}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom spots & CTA */}
                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span>Còn <strong className={isNearFull ? 'text-amber-600 font-black' : 'text-[#10233F]'}>{spotsRemaining}/{cls.totalSpots}</strong> chỗ</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => (onSelectClass ? onSelectClass(cls) : onConsultClick())}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-xs active:scale-98"
                  >
                    <span>{t('pages.courseDetail.openClasses.enrollBtn', 'Đăng ký lớp này')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fallback Banner for Custom Classes */}
        <div className="mt-10 max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#2563EB] flex items-center justify-center shrink-0">
              <BellRing className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#10233F]">
                {t('pages.courseDetail.openClasses.noClassTitle', 'Chưa tìm thấy lịch học phù hợp với bạn?')}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                {t('pages.courseDetail.openClasses.noClassDesc', 'Harry English House sẵn sàng xếp lịch linh hoạt hoặc thông báo lớp mở mới sớm nhất.')}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onConsultClick}
            className="shrink-0 px-4 py-2.5 bg-white hover:bg-slate-100 text-[#10233F] font-bold text-xs sm:text-sm rounded-xl border border-slate-300 transition-colors cursor-pointer"
          >
            {t('pages.courseDetail.openClasses.requestClassBtn', 'Đăng ký nhận tư vấn lớp mới')}
          </button>
        </div>

      </div>
    </section>
  );
}
