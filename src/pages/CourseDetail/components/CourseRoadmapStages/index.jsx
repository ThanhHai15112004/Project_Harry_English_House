import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, CheckCircle2, Sparkles } from 'lucide-react';

export default function CourseRoadmapStages({ course }) {
  const { t } = useTranslation();
  const [activeStage, setActiveStage] = useState(0);

  if (!course) return null;

  const defaultRoadmap = [
    {
      stage: 'GIAI ĐOẠN 01',
      title: 'Xây Dựng Nền Tảng & Phương Pháp Làm Bài',
      duration: 'Tuần 1–4',
      desc: 'Tập trung chuẩn hóa ngữ pháp, bổ sung 500 từ vựng học thuật cốt lõi và làm quen với format các dạng bài thi.',
      focus: ['Ngữ pháp & Từ vựng', 'Chiến thuật Skimming/Scanning', 'Chuẩn hóa phát âm IPA']
    },
    {
      stage: 'GIAI ĐOẠN 02',
      title: 'Phát Triển Kỹ Năng & Tăng Tốc Xử Lý Đề',
      duration: 'Tuần 5–8',
      desc: 'Rèn luyện kỹ năng viết Task 1 & Task 2 theo cấu trúc chuẩn, thực hành phản xạ Speaking theo chủ đề và chấm chữa 1-1.',
      focus: ['Writing Task 1 & 2', 'Speaking Part 1-2-3', 'Reading Matching Headings']
    },
    {
      stage: 'GIAI ĐOẠN 03',
      title: 'Luyện Đề Thực Chiến & Tổng Duyệt Phòng Thi',
      duration: 'Tuần 9–12',
      desc: 'Giải đề bấm giờ sát với áp lực phòng thi thật, tham gia thi thử Mock Test và hoàn thiện các lỗi sai cuối cùng.',
      focus: ['Luyện đề Cambridge mới nhất', 'Chấm chữa 1-1 với Thầy Harry', 'Chiến lược quản lý thời gian']
    }
  ];

  const roadmap = (course.roadmap && course.roadmap.length > 0) ? course.roadmap : defaultRoadmap;
  const currentItem = roadmap[activeStage] || roadmap[0];

  return (
    <section className="bg-[#F7F9FC] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EAF2FF] text-[#1746A2] mb-3">
            {t('pages.courseDetail.roadmap.badge', 'LỘ TRÌNH ĐÀO TẠO')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10233F] tracking-tight">
            {t('pages.courseDetail.roadmap.title', 'Lộ Trình Các Giai Đoạn')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('pages.courseDetail.roadmap.subtitle', 'Từng tuần học đều có mục tiêu cụ thể, bám sát sự tiến bộ của học viên')}
          </p>
        </div>

        {/* Desktop Stage Selector Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {roadmap.map((item, idx) => {
            const isActive = activeStage === idx;

            return (
              <button
                type="button"
                key={item.stageKey}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isActive 
                    ? 'bg-white border-[#2563EB] shadow-md ring-2 ring-[#2563EB]/20' 
                    : 'bg-white/70 hover:bg-white border-[#E2E8F0] shadow-2xs'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#2563EB]" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-black tracking-wider uppercase ${
                    isActive ? 'text-[#2563EB]' : 'text-slate-400'
                  }`}>
                    {t(item.stageKey)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {t(item.durationKey)}
                  </span>
                </div>
                <h3 className={`text-base font-bold line-clamp-1 ${
                  isActive ? 'text-[#10233F]' : 'text-slate-700'
                }`}>
                  {t(item.titleKey)}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Stage Detail Box (White card) */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-[#EAF2FF] text-[#1746A2]">
                  {t(currentItem.stageKey)}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {t('pages.courses.durationLabel')}: {t(currentItem.durationKey)}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#10233F]">
                {t(currentItem.titleKey)}
              </h3>
            </div>
            
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400">{t('pages.courseDetail.roadmap.stageLabel')} {activeStage + 1} / {roadmap.length}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-7">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {t('pages.courseDetail.roadmap.targetTitle')}
              </h4>
              <p className="text-base text-slate-700 leading-relaxed">
                {t(currentItem.descKey)}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#F8FAFC] rounded-xl p-5 border border-slate-200/70">
              <h4 className="text-xs font-bold text-[#1746A2] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {t('pages.courseDetail.roadmap.focusLabel')}
              </h4>
              <ul className="space-y-2.5">
                {(currentItem.focusKeys || []).map((focusKey) => (
                  <li key={focusKey} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>{t(focusKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom navigation buttons */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
              disabled={activeStage === 0}
              className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-lg transition-colors ${
                activeStage === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-700 hover:bg-slate-100 cursor-pointer'
              }`}
            >
              ← {t('pages.courseDetail.roadmap.prevStage')}
            </button>

            <div className="flex items-center gap-1.5">
              {roadmap.map((stageObj, dotIdx) => (
                <button
                  type="button"
                  key={stageObj.stageKey}
                  onClick={() => setActiveStage(dotIdx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeStage === dotIdx ? 'w-6 bg-[#2563EB]' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to stage ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveStage(prev => Math.min(roadmap.length - 1, prev + 1))}
              disabled={activeStage === roadmap.length - 1}
              className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-lg transition-colors ${
                activeStage === roadmap.length - 1 ? 'text-slate-300 cursor-not-allowed' : 'text-[#2563EB] hover:bg-blue-50 cursor-pointer'
              }`}
            >
              {t('pages.courseDetail.roadmap.nextStage')} →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
