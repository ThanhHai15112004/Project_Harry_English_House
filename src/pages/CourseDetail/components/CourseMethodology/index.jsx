import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, FileCheck2, ClipboardList, Award } from 'lucide-react';

export default function CourseMethodology({ course }) {
  const { t } = useTranslation();

  const methods = [
    {
      num: '01',
      icon: Users,
      title: t('pages.courseDetail.methodology.p1Title', 'Lớp học nhóm nhỏ (6–10 bạn)'),
      desc: t('pages.courseDetail.methodology.p1Desc', 'Tối đa hóa thời lượng tương tác phản xạ 2 chiều giữa giảng viên và từng học viên.'),
      badge: 'Tương tác cao'
    },
    {
      num: '02',
      icon: FileCheck2,
      title: t('pages.courseDetail.methodology.p2Title', 'Sửa bài trực tiếp 1-1'),
      desc: t('pages.courseDetail.methodology.p2Desc', 'Chấm chữa bài Writing Task 1-2 và chỉnh phát âm Speaking chi tiết từng buổi học.'),
      badge: 'Chuyên sâu'
    },
    {
      num: '03',
      icon: ClipboardList,
      title: t('pages.courseDetail.methodology.p3Title', 'Bài tập sau buổi học'),
      desc: t('pages.courseDetail.methodology.p3Desc', 'Hệ thống bài tập củng cố kiến thức có phản hồi và nhận xét cụ thể từ giảng viên.'),
      badge: 'Kèm cặp sát'
    },
    {
      num: '04',
      icon: Award,
      title: t('pages.courseDetail.methodology.p4Title', 'Kiểm tra & Mock Test định kỳ'),
      desc: t('pages.courseDetail.methodology.p4Desc', 'Theo dõi sát tiến độ tăng band qua các bài thi thử tiêu chuẩn phòng thi thật.'),
      badge: 'Chuẩn IDP'
    }
  ];

  return (
    <section className="bg-[#F7F9FC] py-16 sm:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EAF2FF] text-[#1746A2] mb-3">
            {t('pages.courseDetail.methodology.badge', 'PHƯƠNG PHÁP HỌC')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10233F] tracking-tight">
            {t('pages.courseDetail.methodology.title', 'Cách Khóa Học Này Được Triển Khai')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('pages.courseDetail.methodology.subtitle', 'Phương pháp cá nhân hóa từng học viên, lấy sự tiến bộ thực chất làm thước đo')}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black text-[#2563EB] tracking-wider uppercase px-2.5 py-1 bg-blue-50 rounded-md">
                      {item.badge}
                    </span>
                    <span className="text-xl font-black text-slate-300">
                      {item.num}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] text-[#1746A2] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#10233F] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Áp dụng 100% trong khóa học</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
