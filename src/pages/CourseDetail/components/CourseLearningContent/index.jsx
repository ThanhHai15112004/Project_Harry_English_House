import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Headphones, PenTool, Mic, CheckCircle2 } from 'lucide-react';

export default function CourseLearningContent({ course }) {
  const { t } = useTranslation();

  if (!course) return null;

  const skills = course.skillsContent || {
    reading: [
      'Luyện kỹ thuật Skimming & Scanning nắm bắt nhanh ý chính',
      'Xử lý dạng bài câu hỏi khó và phân biệt bẫy thông tin',
      'Mở rộng vốn từ vựng học thuật theo chủ đề trọng tâm'
    ],
    listening: [
      'Luyện tai nghe nhận diện ngữ điệu, nối âm và biến âm',
      'Chiến lược bắt từ khóa và xử lý thông tin gây nhiễu',
      'Rèn phản xạ nghe hiểu hội thoại tốc độ tự nhiên'
    ],
    writing: [
      'Chuẩn hóa cấu trúc câu, ngữ pháp và tư duy lập luận',
      'Hướng dẫn triển khai dàn ý mạch lạc theo từng dạng bài',
      'Chấm chữa chi tiết từng câu văn và nhận xét 1-1'
    ],
    speaking: [
      'Chuẩn hóa 44 âm trong bảng phiên âm quốc tế IPA',
      'Luyện phản xạ trả lời tự nhiên theo chủ đề thi thực tế',
      'Sửa lỗi phát âm, ngập ngừng và tăng độ trôi chảy'
    ]
  };

  const skillCards = [
    {
      id: 'reading',
      titleKey: 'pages.courseDetail.learningContent.reading',
      subtitleKey: 'pages.courseDetail.learningContent.readingSubtitle',
      icon: BookOpen,
      badgeBg: 'bg-blue-50 text-blue-600 border-blue-200',
      items: skills.reading || []
    },
    {
      id: 'listening',
      titleKey: 'pages.courseDetail.learningContent.listening',
      subtitleKey: 'pages.courseDetail.learningContent.listeningSubtitle',
      icon: Headphones,
      badgeBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      items: skills.listening || []
    },
    {
      id: 'writing',
      titleKey: 'pages.courseDetail.learningContent.writing',
      subtitleKey: 'pages.courseDetail.learningContent.writingSubtitle',
      icon: PenTool,
      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      items: skills.writing || []
    },
    {
      id: 'speaking',
      titleKey: 'pages.courseDetail.learningContent.speaking',
      subtitleKey: 'pages.courseDetail.learningContent.speakingSubtitle',
      icon: Mic,
      badgeBg: 'bg-amber-50 text-amber-600 border-amber-200',
      items: skills.speaking || []
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EAF2FF] text-[#1746A2] mb-3">
            {t('pages.courseDetail.learningContent.badge')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10233F] tracking-tight">
            {t('pages.courseDetail.learningContent.title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('pages.courseDetail.learningContent.subtitle')}
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCards.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Header of card */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.badgeBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#10233F]">
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {t(card.subtitleKey)}
                    </p>
                  </div>
                </div>

                {/* Items */}
                <ul className="space-y-3.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" />
                      <span className="leading-snug">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
