import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Headphones, PenTool, Mic, CheckCircle2 } from 'lucide-react';

export default function CourseLearningContent({ course }) {
  const { t } = useTranslation();

  if (!course) return null;

  const courseIdKey = course.titleKey ? course.titleKey.replace('.title', '') : '';
  const translatedSkills = courseIdKey ? t(`${courseIdKey}.skillsContent`, { returnObjects: true }) : null;

  const defaultSkills = {
    reading: [
      t('pages.courseDetail.learningContent.defaultR1', 'Luyện kỹ thuật Skimming & Scanning nắm bắt nhanh ý chính'),
      t('pages.courseDetail.learningContent.defaultR2', 'Xử lý dạng bài câu hỏi khó và phân biệt bẫy thông tin'),
      t('pages.courseDetail.learningContent.defaultR3', 'Mở rộng vốn từ vựng học thuật theo chủ đề trọng tâm')
    ],
    listening: [
      t('pages.courseDetail.learningContent.defaultL1', 'Luyện tai nghe nhận diện ngữ điệu, nối âm và biến âm'),
      t('pages.courseDetail.learningContent.defaultL2', 'Chiến lược bắt từ khóa và xử lý thông tin gây nhiễu'),
      t('pages.courseDetail.learningContent.defaultL3', 'Rèn phản xạ nghe hiểu hội thoại tốc độ tự nhiên')
    ],
    writing: [
      t('pages.courseDetail.learningContent.defaultW1', 'Chuẩn hóa cấu trúc câu, ngữ pháp và tư duy lập luận'),
      t('pages.courseDetail.learningContent.defaultW2', 'Hướng dẫn triển khai dàn ý mạch lạc theo từng dạng bài'),
      t('pages.courseDetail.learningContent.defaultW3', 'Chấm chữa chi tiết từng câu văn và nhận xét 1-1')
    ],
    speaking: [
      t('pages.courseDetail.learningContent.defaultS1', 'Chuẩn hóa 44 âm trong bảng phiên âm quốc tế IPA'),
      t('pages.courseDetail.learningContent.defaultS2', 'Luyện phản xạ trả lời tự nhiên theo chủ đề thi thực tế'),
      t('pages.courseDetail.learningContent.defaultS3', 'Sửa lỗi phát âm, ngập ngừng và tăng độ trôi chảy')
    ]
  };

  const resolveSkillItem = (item, skillType, index) => {
    if (typeof item === 'string') {
      const translated = t(item);
      if (translated && !translated.startsWith('db.courses.')) {
        return translated;
      }
      return defaultSkills[skillType]?.[index] || item;
    }
    return defaultSkills[skillType]?.[index] || String(item);
  };

  const getSkillsForType = (skillType) => {
    if (translatedSkills && Array.isArray(translatedSkills[skillType]) && translatedSkills[skillType].length > 0) {
      return translatedSkills[skillType];
    }
    const rawList = course.skillsContent?.[skillType];
    if (Array.isArray(rawList) && rawList.length > 0) {
      return rawList.map((item, idx) => resolveSkillItem(item, skillType, idx));
    }
    return defaultSkills[skillType] || [];
  };

  const skillCards = [
    {
      id: 'reading',
      titleKey: 'pages.courseDetail.learningContent.reading',
      subtitleKey: 'pages.courseDetail.learningContent.readingSubtitle',
      icon: BookOpen,
      badgeBg: 'bg-academic-light-blue text-cta border-academic-primary-light',
      items: getSkillsForType('reading')
    },
    {
      id: 'listening',
      titleKey: 'pages.courseDetail.learningContent.listening',
      subtitleKey: 'pages.courseDetail.learningContent.listeningSubtitle',
      icon: Headphones,
      badgeBg: 'bg-academic-light-blue text-primary border-academic-primary-light',
      items: getSkillsForType('listening')
    },
    {
      id: 'writing',
      titleKey: 'pages.courseDetail.learningContent.writing',
      subtitleKey: 'pages.courseDetail.learningContent.writingSubtitle',
      icon: PenTool,
      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      items: getSkillsForType('writing')
    },
    {
      id: 'speaking',
      titleKey: 'pages.courseDetail.learningContent.speaking',
      subtitleKey: 'pages.courseDetail.learningContent.speakingSubtitle',
      icon: Mic,
      badgeBg: 'bg-academic-gold-light text-achievement border-amber-200',
      items: getSkillsForType('speaking')
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-academic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-academic-light-blue text-primary mb-3 shadow-2xs font-heading">
            {t('pages.courseDetail.learningContent.badge', 'NỘI DUNG ĐÀO TẠO 4 KỸ NĂNG')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-academic-heading tracking-tight font-heading">
            {t('pages.courseDetail.learningContent.title', 'Trọng Tâm Kiến Thức Từng Kỹ Năng')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-academic-body leading-relaxed max-w-2xl mx-auto">
            {t('pages.courseDetail.learningContent.subtitle', 'Chương trình chuẩn hóa toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết theo tiêu chuẩn khảo thí quốc tế')}
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCards.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
                className="bg-academic-soft-white rounded-2xl p-6 sm:p-8 border border-academic-border shadow-2xs hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Header of card */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.badgeBg} shadow-2xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-academic-heading font-heading">
                        {t(card.titleKey, card.id.toUpperCase())}
                      </h3>
                      <p className="text-xs text-academic-muted font-medium">
                        {t(card.subtitleKey, '')}
                      </p>
                    </div>
                  </div>

                  {/* Items */}
                  <ul className="space-y-3.5">
                    {card.items.map((itemText, i) => (
                      <li key={`skill-${card.id}-${i}`} className="flex items-start gap-3 text-sm sm:text-[15px] text-academic-body">
                        <CheckCircle2 className="w-4 h-4 text-cta shrink-0 mt-1" />
                        <span className="leading-snug">{itemText}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
