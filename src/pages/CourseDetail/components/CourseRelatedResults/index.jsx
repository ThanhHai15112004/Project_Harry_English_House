import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import testimonialsData from '../../../../db/testimonials.json';

export default function CourseRelatedResults({ course }) {
  const { t } = useTranslation();

  if (!course) return null;

  const allResults = testimonialsData.results || [];
  
  // Filter related results based on course category
  let matchedResults = allResults.filter(item => {
    if (course.category === 'ielts' || course.category === 'ielts-vip') {
      return item.category === 'ielts';
    }
    if (course.category === 'toeic-vstep') {
      return item.category === 'toeic';
    }
    if (course.category === 'communication') {
      return item.category === 'comm';
    }
    return true;
  });

  // Fallback if not enough results
  if (matchedResults.length < 3) {
    matchedResults = allResults.slice(0, 3);
  } else {
    matchedResults = matchedResults.slice(0, 3);
  }

  return (
    <section className="bg-[#F7F9FC] py-16 sm:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EAF2FF] text-[#1746A2] mb-3">
            {t('pages.courseDetail.relatedResults.badge', 'KẾT QUẢ THỰC TẾ')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10233F] tracking-tight">
            {t('pages.courseDetail.relatedResults.title', 'Thành Tích Từ Học Viên Khóa Này')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('pages.courseDetail.relatedResults.subtitle', 'Bảng điểm và sự tiến bộ thực tế của các học viên đã hoàn thành lộ trình')}
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {matchedResults.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black px-2.5 py-1 bg-[#EAF2FF] text-[#1746A2] rounded-md">
                      {t(item.examTypeKey)}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    {t(item.badgeKey)}
                  </span>
                </div>

                {/* Score Banner */}
                <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/70 mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{item.studentName}</p>
                    <p className="text-xs font-bold text-[#10233F]">
                      {t(item.scoreTypeKey)}
                    </p>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#1746A2]">
                    {item.score}
                  </div>
                </div>

                {/* Skills subscore chips if available */}
                {item.skills && (
                  <div className="grid grid-cols-4 gap-1.5 mb-4 text-center">
                    {item.skills.listening && (
                      <div className="bg-slate-50 py-1 px-1 rounded border border-slate-100">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">L</div>
                        <div className="text-xs font-extrabold text-slate-800">{item.skills.listening}</div>
                      </div>
                    )}
                    {item.skills.reading && (
                      <div className="bg-slate-50 py-1 px-1 rounded border border-slate-100">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">R</div>
                        <div className="text-xs font-extrabold text-slate-800">{item.skills.reading}</div>
                      </div>
                    )}
                    {item.skills.writing && (
                      <div className="bg-slate-50 py-1 px-1 rounded border border-slate-100">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">W</div>
                        <div className="text-xs font-extrabold text-slate-800">{item.skills.writing}</div>
                      </div>
                    )}
                    {item.skills.speaking && (
                      <div className="bg-slate-50 py-1 px-1 rounded border border-slate-100">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">S</div>
                        <div className="text-xs font-extrabold text-slate-800">{item.skills.speaking}</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Caption / Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {t(item.descriptionKey || item.captionKey)}
                </p>
              </div>

              {/* Bottom verification */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t('results.verifiedScore')}
                </span>
                <span>{t('about.officialRecordsBadge')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Results Link Button */}
        <div className="text-center">
          <Link
            to="/results"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-[#1746A2] font-bold text-sm sm:text-base rounded-xl border border-[#CBD5E1] shadow-xs hover:shadow-md transition-all duration-200"
          >
            <span>{t('pages.courseDetail.relatedResults.viewAllBtn')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
