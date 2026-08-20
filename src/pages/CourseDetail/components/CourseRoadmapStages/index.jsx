import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, CheckCircle2, Sparkles } from 'lucide-react';

export default function CourseRoadmapStages({ course }) {
  const { t } = useTranslation();
  const [activeStage, setActiveStage] = useState(0);

  if (!course) return null;

  const courseIdKey = course.titleKey ? course.titleKey.replace('.title', '') : '';
  const translatedRoadmap = courseIdKey ? t(`${courseIdKey}.roadmap`, { returnObjects: true }) : null;

  const defaultRoadmap = [
    {
      stage: t('pages.courseDetail.roadmap.defaultS1Stage', 'GIAI ĐOẠN 01'),
      title: t('pages.courseDetail.roadmap.defaultS1Title', 'Xây Dựng Nền Tảng & Phương Pháp Làm Bài'),
      duration: t('pages.courseDetail.roadmap.defaultS1Duration', 'Tuần 1–4'),
      desc: t('pages.courseDetail.roadmap.defaultS1Desc', 'Tập trung chuẩn hóa ngữ pháp, bổ sung 500 từ vựng học thuật cốt lõi và làm quen với format các dạng bài thi.'),
      focus: [
        t('pages.courseDetail.roadmap.defaultF1', 'Ngữ pháp & Từ vựng'),
        t('pages.courseDetail.roadmap.defaultF2', 'Chiến thuật Skimming/Scanning'),
        t('pages.courseDetail.roadmap.defaultF3', 'Chuẩn hóa phát âm IPA')
      ]
    },
    {
      stage: t('pages.courseDetail.roadmap.defaultS2Stage', 'GIAI ĐOẠN 02'),
      title: t('pages.courseDetail.roadmap.defaultS2Title', 'Phát Triển Kỹ Năng & Tăng Tốc Xử Lý Đề'),
      duration: t('pages.courseDetail.roadmap.defaultS2Duration', 'Tuần 5–8'),
      desc: t('pages.courseDetail.roadmap.defaultS2Desc', 'Rèn luyện kỹ năng viết Task 1 & Task 2 theo cấu trúc chuẩn, thực hành phản xạ Speaking theo chủ đề và chấm chữa 1-1.'),
      focus: [
        t('pages.courseDetail.roadmap.defaultF4', 'Writing Task 1 & 2'),
        t('pages.courseDetail.roadmap.defaultF5', 'Speaking Part 1-2-3'),
        t('pages.courseDetail.roadmap.defaultF6', 'Reading Matching Headings')
      ]
    },
    {
      stage: t('pages.courseDetail.roadmap.defaultS3Stage', 'GIAI ĐOẠN 03'),
      title: t('pages.courseDetail.roadmap.defaultS3Title', 'Luyện Đề Thực Chiến & Tổng Duyệt Phòng Thi'),
      duration: t('pages.courseDetail.roadmap.defaultS3Duration', 'Tuần 9–12'),
      desc: t('pages.courseDetail.roadmap.defaultS3Desc', 'Giải đề bấm giờ sát với áp lực phòng thi thật, tham gia thi thử Mock Test và hoàn thiện các lỗi sai cuối cùng.'),
      focus: [
        t('pages.courseDetail.roadmap.defaultF7', 'Luyện đề Cambridge mới nhất'),
        t('pages.courseDetail.roadmap.defaultF8', 'Chấm chữa 1-1 với Thầy Harry'),
        t('pages.courseDetail.roadmap.defaultF9', 'Chiến lược quản lý thời gian')
      ]
    }
  ];

  const getSafeString = (key, fallback) => {
    if (!key) return fallback;
    const translated = t(key);
    if (!translated || translated.startsWith('db.courses.') || translated === key) {
      return fallback;
    }
    return translated;
  };

  let roadmap = [];
  if (Array.isArray(translatedRoadmap) && translatedRoadmap.length > 0 && typeof translatedRoadmap[0] === 'object') {
    roadmap = translatedRoadmap.map((item, idx) => ({
      stage: item.stage || `STAGE 0${idx + 1}`,
      title: item.title || '',
      duration: item.duration || '',
      desc: item.desc || '',
      focus: Array.isArray(item.focus) ? item.focus : []
    }));
  } else {
    const rawList = (course.roadmap && course.roadmap.length > 0) ? course.roadmap : defaultRoadmap;
    roadmap = rawList.map((item, idx) => {
      const fallbackItem = defaultRoadmap[idx] || defaultRoadmap[0];
      
      let resolvedFocus = fallbackItem.focus;
      if (item.focusKeys && item.focusKeys.length > 0) {
        resolvedFocus = item.focusKeys.map((fk, fIdx) => getSafeString(fk, fallbackItem.focus?.[fIdx] || fk));
      } else if (item.focus && item.focus.length > 0) {
        resolvedFocus = item.focus;
      }

      return {
        stage: getSafeString(item.stageKey, item.stage || fallbackItem.stage || `GIAI ĐOẠN 0${idx + 1}`),
        title: getSafeString(item.titleKey, item.title || fallbackItem.title),
        duration: getSafeString(item.durationKey, item.duration || fallbackItem.duration),
        desc: getSafeString(item.descKey, item.desc || fallbackItem.desc),
        focus: resolvedFocus
      };
    });
  }

  const currentItem = roadmap[activeStage] || roadmap[0];

  return (
    <section className="bg-academic-soft-white py-16 sm:py-20 border-b border-academic-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-academic-light-blue text-primary mb-3 shadow-2xs font-heading">
            {t('pages.courseDetail.roadmap.badge', 'LỘ TRÌNH ĐÀO TẠO')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-academic-heading tracking-tight font-heading">
            {t('pages.courseDetail.roadmap.title', 'Lộ Trình Các Giai Đoạn')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-academic-body leading-relaxed max-w-2xl mx-auto">
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
                key={item.stage || `stage-node-${idx}`}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isActive 
                    ? 'bg-white border-cta shadow-card ring-2 ring-cta/20' 
                    : 'bg-white/70 hover:bg-white border-academic-border shadow-2xs'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-cta" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-black tracking-wider uppercase font-heading ${
                    isActive ? 'text-cta' : 'text-academic-muted'
                  }`}>
                    {item.stage}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-academic-muted bg-academic-soft-white px-2 py-0.5 rounded-md border border-academic-border">
                    <Clock className="w-3 h-3 text-cta" />
                    {item.duration}
                  </span>
                </div>
                <h3 className={`text-base font-bold line-clamp-1 font-heading ${
                  isActive ? 'text-academic-heading' : 'text-academic-body'
                }`}>
                  {item.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Stage Detail Box (White card) */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-academic-border shadow-card relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-academic-border">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-academic-light-blue text-primary font-heading uppercase">
                  {currentItem.stage}
                </span>
                <span className="text-xs font-bold text-academic-muted">
                  {t('pages.courses.durationLabel', 'Thời lượng:')} {currentItem.duration}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-academic-heading font-heading">
                {currentItem.title}
              </h3>
            </div>
            
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-xs font-bold text-academic-muted font-heading">
                {t('pages.courseDetail.roadmap.stageLabel', 'Giai đoạn')} {activeStage + 1} / {roadmap.length}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-7">
              <h4 className="text-xs font-bold text-academic-muted uppercase tracking-wider mb-2 font-heading">
                {t('pages.courseDetail.roadmap.targetTitle', 'Mục tiêu giai đoạn:')}
              </h4>
              <p className="text-sm sm:text-base text-academic-body leading-relaxed">
                {currentItem.desc}
              </p>
            </div>

            <div className="lg:col-span-5 bg-academic-soft-white rounded-xl p-5 border border-academic-border shadow-2xs">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5 font-heading">
                <Sparkles className="w-3.5 h-3.5 text-cta" />
                <span>{t('pages.courseDetail.roadmap.focusLabel', 'Trọng tâm giai đoạn:')}</span>
              </h4>
              <ul className="space-y-2.5">
                {(currentItem.focus || []).map((focusItem, fIdx) => (
                  <li key={`focus-${activeStage}-${fIdx}`} className="flex items-center gap-2 text-sm font-medium text-academic-heading">
                    <CheckCircle2 className="w-4 h-4 text-cta shrink-0" />
                    <span>{focusItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom navigation buttons */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-academic-border">
            <button
              type="button"
              onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
              disabled={activeStage === 0}
              className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-lg transition-colors ${
                activeStage === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-academic-heading hover:bg-slate-100 cursor-pointer'
              }`}
            >
              ← {t('pages.courseDetail.roadmap.prevStage', 'Giai đoạn trước')}
            </button>

            <div className="flex items-center gap-1.5">
              {roadmap.map((stageObj, dotIdx) => (
                <button
                  type="button"
                  key={stageObj.stage || `dot-stage-${dotIdx}`}
                  onClick={() => setActiveStage(dotIdx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeStage === dotIdx ? 'w-6 bg-cta' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
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
                activeStage === roadmap.length - 1 ? 'text-slate-300 cursor-not-allowed' : 'text-cta hover:bg-blue-50 cursor-pointer'
              }`}
            >
              {t('pages.courseDetail.roadmap.nextStage', 'Giai đoạn tiếp theo')} →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
