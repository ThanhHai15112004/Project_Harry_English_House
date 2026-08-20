import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, GraduationCap, ShieldCheck } from 'lucide-react';

export default function CourseInstructorProfile({ course }) {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EAF2FF] text-[#1746A2] mb-3">
            {t('pages.courseDetail.instructor.badge', 'GIẢNG VIÊN PHỤ TRÁCH')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10233F] tracking-tight">
            {t('pages.courseDetail.instructor.title', 'Người Đồng Hành Cùng Bạn')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('pages.courseDetail.instructor.subtitle', 'Thầy Harry Khôi trực tiếp dẫn dắt, theo sát và chấm chữa bài')}
          </p>
        </div>

        {/* Instructor Card (2-column layout) */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-xs max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Photo (md:col-span-5) */}
            <div className="md:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-3/4 max-w-sm mx-auto bg-slate-200">
                <img
                  src="/src/assets/Ministry-of-Higher-Education-2025/3.jpg"
                  alt={t('pages.courseDetail.instructor.name', 'Thầy Harry Khôi')}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/src/assets/ki-niem/ki-niem-1.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#10233F]/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Badge on Photo */}
                <div className="absolute bottom-4 left-4 right-4 text-center bg-white/95 backdrop-blur-md rounded-xl py-2 px-3 shadow-md border border-white/60">
                  <p className="text-xs font-bold text-[#10233F]">
                    {t('pages.courseDetail.instructor.ieltsBadge', 'IELTS 8.0 Official')}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium">
                    {t('pages.courseDetail.instructor.partnerBadge', 'Đối tác khảo thí IDP Vietnam')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Details (md:col-span-7) */}
            <div className="md:col-span-7 space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-[#EAF2FF] text-[#1746A2]">
                  {t('pages.courseDetail.instructor.roleBadge', 'Founder')}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700">
                  {t('pages.courseDetail.instructor.expBadge', '8+ Năm Kinh Nghiệm')}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#10233F]">
                  {t('pages.courseDetail.instructor.name', 'Thầy Harry Khôi')}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#2563EB] mt-0.5">
                  {t('pages.courseDetail.instructor.degree', 'Cử nhân Sư phạm Tiếng Anh • Đại học Sư phạm TP.HCM')}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t('pages.courseDetail.instructor.bio', 'Với hơn 8 năm chuyên sâu luyện thi IELTS và tiếng Anh học thuật, Thầy Harry Khôi kiên định theo đuổi phương pháp giảng dạy thực chất, tập trung sửa từng lỗi phát âm và bẻ gãy từng câu văn chưa chuẩn xác, giúp học viên tiến bộ vững chắc mà không học vẹt.')}
              </p>

              {/* 3 Key Credentials Pills */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <GraduationCap className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>{t('pages.courseDetail.instructor.cred1', 'Chứng chỉ Nghiệp vụ Sư phạm Quốc tế TESOL Standard')}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>{t('pages.courseDetail.instructor.cred2', 'Đối tác chính thức đào tạo và đăng ký thi cùng IDP IELTS')}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <BookOpen className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>{t('pages.courseDetail.instructor.cred3', 'Trực tiếp chấm chữa 1-1 không giới hạn số lượng bài viết')}</span>
                </div>
              </div>

              {/* Link to About Page */}
              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8] group transition-colors"
                >
                  <span>{t('pages.courseDetail.instructor.viewProfileBtn', 'Tìm hiểu thêm về Thầy Harry →')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
