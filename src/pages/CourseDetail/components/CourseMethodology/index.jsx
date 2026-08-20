import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, FileCheck2, ClipboardList, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function CourseMethodology({ course }) {
  const { t } = useTranslation();

  const methods = [
    {
      num: '01',
      icon: Users,
      title: t('pages.courseDetail.methodology.p1Title', 'Lớp học nhóm nhỏ (2–10 bạn)'),
      desc: t('pages.courseDetail.methodology.p1Desc', 'Tối đa hóa thời lượng tương tác phản xạ 2 chiều giữa giảng viên và từng học viên.'),
      badge: t('pages.courseDetail.methodology.b1', 'Tương tác cao'),
      badgeColor: 'bg-academic-light-blue text-cta',
      borderAccent: 'border-t-cta',
    },
    {
      num: '02',
      icon: FileCheck2,
      title: t('pages.courseDetail.methodology.p2Title', 'Sửa bài trực tiếp 1-1'),
      desc: t('pages.courseDetail.methodology.p2Desc', 'Chấm chữa bài Writing Task 1-2 và chỉnh phát âm Speaking chi tiết từng buổi học.'),
      badge: t('pages.courseDetail.methodology.b2', 'Chuyên sâu 1-1'),
      badgeColor: 'bg-academic-light-blue text-primary',
      borderAccent: 'border-t-primary',
    },
    {
      num: '03',
      icon: ClipboardList,
      title: t('pages.courseDetail.methodology.p3Title', 'Bài tập sau buổi học'),
      desc: t('pages.courseDetail.methodology.p3Desc', 'Hệ thống bài tập củng cố kiến thức có phản hồi và nhận xét cụ thể từ giảng viên.'),
      badge: t('pages.courseDetail.methodology.b3', 'Kèm cặp sát'),
      badgeColor: 'bg-indigo-50 text-indigo-700',
      borderAccent: 'border-t-indigo-600',
    },
    {
      num: '04',
      icon: Award,
      title: t('pages.courseDetail.methodology.p4Title', 'Kiểm tra & Mock Test định kỳ'),
      desc: t('pages.courseDetail.methodology.p4Desc', 'Theo dõi sát tiến độ tăng band qua các bài thi thử tiêu chuẩn phòng thi thật.'),
      badge: t('pages.courseDetail.methodology.b4', 'Chuẩn IDP'),
      badgeColor: 'bg-academic-gold-light text-achievement',
      borderAccent: 'border-t-achievement',
    }
  ];

  return (
    <section className="bg-academic-soft-white py-16 sm:py-20 border-b border-academic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-academic-light-blue text-primary mb-3 shadow-2xs font-heading">
            {t('pages.courseDetail.methodology.badge', 'PHƯƠNG PHÁP HỌC')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-academic-heading tracking-tight font-heading">
            {t('pages.courseDetail.methodology.title', 'Cách Khóa Học Này Được Triển Khai')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-academic-body leading-relaxed max-w-2xl mx-auto">
            {t('pages.courseDetail.methodology.subtitle', 'Phương pháp cá nhân hóa từng học viên, lấy sự tiến bộ thực chất làm thước đo')}
          </p>
        </div>

        {/* 4 Cards Grid with Rich Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num || idx}
                className={`bg-white rounded-2xl p-6 sm:p-7 border border-academic-border border-t-4 ${item.borderAccent} shadow-2xs hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-md font-heading ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-xl font-black text-academic-heading/20 group-hover:text-academic-heading/40 transition-colors font-heading">
                      {item.num}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-academic-light-blue text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300 shadow-2xs group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading mb-2 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-academic-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-academic-border flex items-center justify-between text-xs text-academic-muted">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{t('pages.courseDetail.methodology.applied100', 'Áp dụng 100%')}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
