import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, UserCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function CourseTargetAudience({ course }) {
  const { t } = useTranslation();

  if (!course) return null;

  const targetData = course.targetAudience || {};
  
  // Safe helper to resolve translation or fallback gracefully
  const getTranslatedValue = (key, fallback) => {
    if (!key) return fallback;
    const translated = t(key);
    // If the key is not defined, i18next returns the raw key starting with db.courses
    if (translated === key || translated.startsWith('db.courses.')) {
      return fallback;
    }
    return translated;
  };

  const whoFor = getTranslatedValue(
    targetData.whoForKey,
    t(course.targetKey, 'Học viên muốn xây dựng năng lực tiếng Anh vững chắc và đạt chuẩn đầu ra mong muốn.')
  );
  
  const inputRequirement = getTranslatedValue(
    targetData.inputRequirementKey,
    t(course.levelKey, 'Phù hợp với học viên theo đúng trình độ đầu vào của khóa học.')
  );
  
  const outputTarget = getTranslatedValue(
    targetData.outputTargetKey,
    t(course.guaranteeKey || course.targetKey, 'Đạt chuẩn cam kết đầu ra và thành thạo kỹ năng theo mục tiêu đề ra.')
  );

  const columns = [
    {
      num: '01',
      icon: UserCheck,
      title: t('pages.courseDetail.targetAudience.whoFor', 'Dành cho ai?'),
      desc: whoFor,
      borderColor: 'border-t-cta',
      badgeBg: 'bg-academic-light-blue text-cta',
      numColor: 'text-cta/30',
    },
    {
      num: '02',
      icon: Target,
      title: t('pages.courseDetail.targetAudience.inputReq', 'Yêu cầu đầu vào'),
      desc: inputRequirement,
      borderColor: 'border-t-primary',
      badgeBg: 'bg-academic-light-blue text-primary',
      numColor: 'text-primary/30',
    },
    {
      num: '03',
      icon: ArrowUpRight,
      title: t('pages.courseDetail.targetAudience.outputTarget', 'Mục tiêu đầu ra'),
      desc: outputTarget,
      borderColor: 'border-t-achievement',
      badgeBg: 'bg-academic-gold-light text-achievement',
      numColor: 'text-achievement/40',
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-academic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-academic-light-blue text-primary mb-3 shadow-2xs font-heading">
            {t('pages.courseDetail.targetAudience.badge', 'ĐỐI TƯỢNG · ĐẦU VÀO · ĐẦU RA')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-academic-heading tracking-tight font-heading">
            {t('pages.courseDetail.targetAudience.title', 'Khóa học này có phù hợp với bạn?')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-academic-body leading-relaxed max-w-2xl mx-auto">
            {t('pages.courseDetail.targetAudience.subtitle', 'Xác định rõ xuất phát điểm và cam kết mục tiêu trước khi nhập học')}
          </p>
        </div>

        {/* 3 Unified Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div 
                key={col.num}
                className={`bg-white rounded-2xl p-6 sm:p-8 border border-academic-border border-t-4 ${col.borderColor} shadow-2xs hover:shadow-card transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-3xl sm:text-4xl font-black ${col.numColor} tracking-tighter font-heading`}>
                      {col.num}
                    </span>
                    <div className={`w-11 h-11 rounded-xl ${col.badgeBg} flex items-center justify-center font-bold shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-academic-heading font-heading mb-3">
                    {col.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-academic-body leading-relaxed font-normal">
                    {col.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-academic-border flex items-center gap-2 text-xs font-semibold text-academic-muted">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cta shrink-0" />
                  <span>
                    {getTranslatedValue(course.guaranteeKey, t('programs.guaranteeLabel', 'Cam kết chuẩn đầu ra & Theo sát 1-1'))}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
