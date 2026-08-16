import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Users, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  GraduationCap,
  Award,
  BookOpenCheck,
  Languages,
  Clock,
  Gift
} from 'lucide-react';
import { SECTION_IDS, scrollToSection } from '@/core';
import { SectionTitle, Button } from '@/components/common';

export const RoadmapSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('ielts');
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const roadmapData = {
    ielts: [
      {
        num: '01',
        band: '0 - 3.0',
        name: 'IELTS Nền Tảng (Foundation)',
        tag: 'Mất gốc',
        duration: '~40 buổi',
        classSize: 'Nhóm nhỏ 3–6 bạn',
        format: 'Offline Q7, Q8 / Online kèm sát',
        instructor: 'Thầy Harry (IELTS 8.0) & Đội ngũ 7.5+',
        target: 'Xây chắc ngữ pháp câu đơn/ghép, chuẩn hóa phát âm IPA & làm quen 4 kỹ năng IELTS.',
        highlights: [
          'Xây chắc ngữ pháp câu đơn, câu ghép & 1.000 từ vựng cốt lõi',
          'Sĩ số tinh gọn 3–6 bạn, sửa phát âm IPA trực tiếp từng buổi',
          'Tập thói quen phản xạ tự nhiên, xóa bỏ rào cản sợ tiếng Anh'
        ],
        curriculum: ['Raymond Murphy Basic', 'Oxford Phonics World', 'Get Ready for IELTS'],
        guarantee: 'Lấy lại căn bản & Sửa lỗi phát âm IPA từng buổi học',
      },
      {
        num: '02',
        band: '3.0 - 4.5',
        name: 'Pre-IELTS (Xây Nền)',
        tag: 'Xây nền',
        duration: '~30 buổi',
        classSize: 'Lớp 3 bạn (Kèm sát)',
        format: 'Offline Q7 (gần Lotte), Q8 / Online',
        instructor: 'Thầy Harry & Giảng viên 7.5+ IDP Partner',
        target: 'Nắm vững format 4 kỹ năng chuẩn đề thi, rèn kỹ thuật Skimming/Scanning và viết câu đoạn ngắn chuẩn xác.',
        highlights: [
          'Làm quen dạng bài 4 kỹ năng theo đúng chuẩn đề thi IELTS',
          'Sĩ số chỉ 3 bạn (Lớp Q7 gần Lotte / Online nhóm tương tác)',
          'Rèn kỹ năng Skimming/Scanning Listening/Reading và viết đoạn ngắn chuẩn ngữ pháp'
        ],
        curriculum: ['Basic IELTS 4 kỹ năng', 'Complete IELTS Band 4.0 - 5.0', 'Collins Vocabulary'],
        guarantee: 'Nắm chắc dạng bài thi & Viết đoạn văn không lỗi ngữ pháp',
      },
      {
        num: '03',
        band: '4.5 - 6.0',
        name: 'IELTS Bứt Phá (Tăng Tốc)',
        tag: 'Tăng tốc',
        duration: '~3 tháng (48 buổi)',
        classSize: 'Nhóm 5–7 bạn',
        format: 'Offline Q7 (T7, CN) / Q8 / Online',
        instructor: 'Thầy Harry trực tiếp giảng dạy chính',
        target: 'Làm chủ các dạng bài, tăng vốn từ học thuật B2, rèn phản xạ Nói & Viết Task 1-2 bám sát đề thi.',
        highlights: [
          'Tăng vốn từ vựng học thuật Destination B2 và phát triển tư duy phản xạ',
          'Luyện viết Task 1 (Biểu đồ) & Task 2 phát triển luận điểm mạch lạc',
          'Chấm chữa Writing & Speaking chi tiết từng học viên theo tiêu chí chấm thi thật'
        ],
        curriculum: ['Mindset for IELTS Level 2', 'Destination B2', 'Listening for IELTS'],
        guarantee: 'Chấm chữa Writing Task 1-2 & Luyện Speaking theo chủ đề thi thật',
      },
      {
        num: '04',
        band: '6.0 - 7.5+',
        name: 'IELTS Chuyên Sâu (Master)',
        tag: 'Band cao',
        duration: '3–6 tháng',
        classSize: '7 bạn (Thầy trực tiếp kèm)',
        format: 'Offline Q7 (T7 16h30, CN 15h30)',
        instructor: 'Thầy Harry (IELTS 8.0 - Đối tác IDP) kèm 1-1',
        target: 'Thầy Harry trực tiếp kèm 1-1, tối ưu chiến thuật giải đề Cambridge thực chiến bứt phá band 7.0 - 7.5+.',
        highlights: [
          'Thầy Harry (IELTS 8.0) trực tiếp đứng lớp và sửa bài 1-1 không giới hạn',
          'Bộ đề dự đoán độc quyền cập nhật liên tục hàng quý bám sát xu hướng thi thật',
          'Sĩ số giới hạn 7 bạn học tập nghiêm túc bứt phá band điểm cao xét tuyển & du học'
        ],
        curriculum: ['Cambridge IELTS 15-18', 'IELTS Advantage', 'Bộ đề dự đoán HEH'],
        guarantee: 'Thầy Harry trực tiếp sửa bài 1-1 chi tiết sát band 7.5+',
      },
    ],
    toeic: [
      {
        num: '01',
        band: 'Target 650+ / B2-C1',
        name: 'Luyện Thi TOEIC & VSTEP Cấp Tốc',
        tag: 'Cấp tốc',
        duration: '~2.5 tháng',
        classSize: 'Nhóm 5 học viên',
        format: 'Offline Q1, Q6, Q7, Q8 / Online',
        instructor: 'Đội ngũ Giảng viên Chuyên Ngữ 8.0+',
        target: 'Chiến thuật bẫy đề thi, ngân hàng đề chuẩn hóa, cam kết chuẩn đầu ra xét tốt nghiệp Đại học & Sau ĐH.',
        highlights: [
          'Bộ chiến thuật xử lý bẫy đề thi TOEIC Part 1–7 và VSTEP 4 kỹ năng',
          'Ngân hàng đề thi chuẩn hóa ETS TOEIC 2024 & VSTEP cập nhật liên tục',
          'Sĩ số giới hạn 5 bạn, kèm sát tiến độ từng buổi học'
        ],
        curriculum: ['ETS TOEIC Test 2024', 'Hackers TOEIC', 'Ngân hàng đề VSTEP B2-C1'],
        guarantee: 'Cam kết chuẩn đầu ra văn bản xét tuyển tốt nghiệp ĐH',
      },
    ],
    communication: [
      {
        num: '01',
        band: 'Level 1',
        name: 'Tiếng Anh Giao Tiếp Phản Xạ',
        tag: 'Phản xạ',
        duration: '3 tháng',
        classSize: 'Nhóm 2–3 bạn',
        format: 'Offline Q7, Q10 / Online (T4, T6)',
        instructor: 'Giảng viên Bản ngữ & Trợ giảng kèm sát',
        target: 'Chuẩn hóa phát âm IPA, phản xạ câu hỏi đáp nhanh, xóa bỏ rào cản ngại nói và tự tin giao tiếp đời sống.',
        highlights: [
          'Chuẩn hóa phiên âm quốc tế IPA & xóa bỏ rào cản ngại nói',
          'Mẫu câu hội thoại phản xạ nhanh theo chủ đề đời sống thực tế',
          'Sĩ số nhóm nhỏ 2–3 bạn tối đa thời lượng tương tác thực hành'
        ],
        curriculum: ['Pronunciation in Use', 'English Grammar', 'Mẫu câu phản xạ độc quyền HEH'],
        guarantee: 'Ưu đãi 5% khóa mới & Tự tin phản xạ giao tiếp sau 3 tháng',
      },
      {
        num: '02',
        band: 'Level 2',
        name: 'Giao Tiếp Công Sở & Thuyết Trình',
        tag: 'Công sở',
        duration: '6 tháng',
        classSize: 'Nhóm 3–5 bạn',
        format: 'Offline Q7 (T5 19h30, CN 10h) / Online',
        instructor: 'Giảng viên Giàu kinh nghiệm Doanh nghiệp',
        target: 'Thuyết trình, viết email thương mại, đàm phán và giao tiếp tự nhiên với đối tác nước ngoài.',
        highlights: [
          'Kỹ năng thuyết trình, đàm phán và dẫn dắt cuộc họp chuyên nghiệp',
          'Viết email thương mại chuẩn văn phong kinh doanh quốc tế',
          'Xử lý tình huống giao tiếp công sở và đàm phán thực tế'
        ],
        curriculum: ['Business Speaking English', 'English File Intermediate', 'Tình huống công sở HEH'],
        guarantee: 'Ưu đãi 10% cho khóa học & Tự tin giao tiếp đàm phán công việc',
      },
    ],
  };

  const currentPhases = roadmapData[activeTab] || roadmapData.ielts;
  const currentMilestone = currentPhases[selectedMilestone] || currentPhases[0];

  const tabs = [
    { id: 'ielts', label: t('roadmap.tabIelts') },
    { id: 'toeic', label: t('roadmap.tabToeic') },
    { id: 'communication', label: t('roadmap.tabComm') },
  ];

  const getMobileGridCols = (length) => {
    if (length >= 2) return 'grid-cols-2';
    return 'grid-cols-1';
  };

  const getMilestoneIcon = (category) => {
    switch (category) {
      case 'toeic':
        return <Award size={32} className="text-academic-cta flex-shrink-0" />;
      case 'communication':
        return <Languages size={32} className="text-academic-cta flex-shrink-0" />;
      case 'ielts':
      default:
        return <GraduationCap size={34} className="text-academic-primary flex-shrink-0" />;
    }
  };

  return (
    <section id={SECTION_IDS.ROADMAP} className="py-14 sm:py-20 lg:py-24 bg-academic-soft-white border-y border-academic-border">
      <div className="app-container">
        <SectionTitle
          badge={t('roadmap.badge')}
          title={t('roadmap.title')}
          subtitle={t('roadmap.subtitle')}
          className="max-w-4xl mx-auto sm:[&_h2]:whitespace-nowrap"
        />

        {/* Category Filter Tabs */}
        <div className="mt-4 sm:mt-6 mb-6 sm:mb-10 flex justify-center">
          <div className="w-full max-w-md sm:max-w-2xl p-1 rounded-2xl bg-white border border-academic-border shadow-xs grid grid-cols-3 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`py-2 px-2 sm:px-5 rounded-xl text-center text-xs sm:text-sm font-bold transition-all truncate sm:overflow-visible sm:whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-academic-cta text-white shadow-sm'
                    : 'text-academic-body hover:text-academic-heading hover:bg-academic-surface'
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedMilestone(0);
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW: Grid of Levels (Super Compact & Clean) */}
        <div className="lg:hidden mb-5">
          <div className={`grid gap-2 ${getMobileGridCols(currentPhases.length)}`}>
            {currentPhases.map((phase, idx) => {
              const isSelected = selectedMilestone === idx;
              return (
                <button
                  key={phase.num}
                  type="button"
                  onClick={() => setSelectedMilestone(idx)}
                  className={`p-2.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-academic-cta ring-2 ring-cta/15 shadow-xs'
                      : 'bg-white/80 border-academic-border hover:bg-white'
                  }`}
                >
                  <div className="min-w-0">
                    <span className={`block font-heading font-black text-xs ${isSelected ? 'text-academic-cta' : 'text-academic-heading'}`}>
                      {phase.band}
                    </span>
                    <span className="block text-[11px] text-academic-muted truncate">
                      {phase.tag}
                    </span>
                  </div>
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                    isSelected ? 'bg-academic-cta text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {phase.num}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-COLUMN MASTER-DETAIL LAYOUT (Desktop & Tablet) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT COLUMN: COMPACT LEVEL LIST (4 cols on Desktop) */}
          <div className="hidden lg:block lg:col-span-4 space-y-2.5">
            {currentPhases.map((phase, idx) => {
              const isSelected = selectedMilestone === idx;
              return (
                <button
                  type="button"
                  key={phase.num}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-academic-cta shadow-card ring-2 ring-cta/15'
                      : 'bg-white/70 border-academic-border hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-heading font-bold text-xs flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-academic-cta text-white shadow-glow-cta'
                          : 'bg-academic-surface text-academic-muted'
                      }`}
                    >
                      {phase.num}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-heading font-bold text-sm ${
                            isSelected ? 'text-academic-cta' : 'text-academic-heading'
                          }`}
                        >
                          {phase.band}
                        </span>
                        <span className="text-[10px] font-bold text-academic-muted px-1.5 py-0.5 rounded bg-academic-surface border border-slate-200">
                          {phase.tag}
                        </span>
                      </div>
                      <p className="text-xs text-academic-body truncate mt-0.5 font-medium">
                        {phase.name}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: PREPEDU-INSPIRED CLEAN & HIGH-CONVERTING SPOTLIGHT CARD (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-academic-border shadow-card flex flex-col justify-between">
            <div>
              {/* Card Header: Icon + Title + Inline Badge on the SAME ROW */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1 flex-wrap">
                    {/* Big Raw Icon without background box */}
                    {getMilestoneIcon(activeTab)}

                    {/* Course Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-academic-heading font-heading leading-tight">
                      {currentMilestone.name}
                    </h3>

                    {/* Inline Badge right next to title */}
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-bold bg-academic-light-blue text-academic-primary border border-blue-200/80">
                      <Sparkles size={12} className="text-academic-cta" />
                      <span>{currentMilestone.band}</span>
                      <span className="text-blue-300">•</span>
                      <span>{currentMilestone.tag}</span>
                    </span>
                  </div>

                  {/* Duration Tag */}
                  <span className="text-xs font-bold text-academic-cta bg-academic-surface px-2.5 py-1 rounded-md border border-blue-100 flex-shrink-0 flex items-center gap-1">
                    <Clock size={12} />
                    {currentMilestone.duration}
                  </span>
                </div>

                {/* Quick Meta Pills (Sĩ số, Hình thức, Giảng viên) */}
                <div className="flex flex-wrap gap-2 text-xs text-academic-body pt-1">
                  <span className="inline-flex items-center gap-1.5 bg-academic-surface px-2.5 py-1 rounded-md font-medium">
                    <Users size={13} className="text-academic-cta" />
                    <strong>{t('roadmap.classSizeLabel')}:</strong> {currentMilestone.classSize}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-academic-surface px-2.5 py-1 rounded-md font-medium">
                    <MapPin size={13} className="text-academic-cta" />
                    <strong>{t('roadmap.formatLabel')}:</strong> {currentMilestone.format}
                  </span>
                  {currentMilestone.instructor && (
                    <span className="inline-flex items-center gap-1.5 bg-academic-surface px-2.5 py-1 rounded-md font-medium">
                      <GraduationCap size={13} className="text-academic-primary" />
                      {currentMilestone.instructor}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button Prominent Banner */}
              <div className="my-5">
                <Button
                  variant="primary"
                  fullWidth
                  className="btn-shimmer shadow-glow-cta py-3 sm:py-3.5 text-xs sm:text-sm font-bold justify-center"
                  onClick={() => scrollToSection(SECTION_IDS.CONTACT)}
                  icon={<ArrowRight size={16} />}
                >
                  {t('roadmap.ctaPhaseBtn')} ({currentMilestone.band})
                </Button>
              </div>

              <div className="border-t border-academic-border pt-4" />

              {/* Rich Information Checklist Section (Filled with authentic Excel Data) */}
              <div className="space-y-4">
                <div className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  {t('roadmap.featuresTitle')}
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  {/* 1. Target Output */}
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-academic-cta flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-academic-heading">{t('roadmap.targetLabel')}:</strong>{' '}
                      <span className="text-academic-body">{currentMilestone.target}</span>
                    </div>
                  </div>

                  {/* 2. Core Highlights (Excel list) */}
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-academic-cta flex-shrink-0 mt-0.5" />
                    <div className="space-y-1 w-full">
                      <strong className="text-academic-heading block">{t('roadmap.highlightsLabel')}:</strong>
                      <ul className="space-y-1 text-academic-body pl-2">
                        {currentMilestone.highlights.map((hl) => (
                          <li key={hl} className="flex items-start gap-1.5">
                            <span className="text-academic-cta font-bold mt-0.5">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 3. Curriculum Books */}
                  <div className="flex items-start gap-2.5">
                    <BookOpenCheck size={17} className="text-academic-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <strong className="text-academic-heading block mb-1">{t('roadmap.curriculumLabel')}:</strong>
                      <div className="flex flex-wrap gap-1.5">
                        {currentMilestone.curriculum.map((book) => (
                          <span
                            key={book}
                            className="inline-block text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium border border-slate-200"
                          >
                            {book}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 4. Academic Guarantee & IDP Exam Perk */}
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">{t('roadmap.guaranteeLabel')}:</strong>{' '}
                      <span className="text-emerald-800 font-medium">{currentMilestone.guarantee}</span>
                    </div>
                  </div>

                  {/* 5. Special IDP Exam Voucher Perk Banner */}
                  <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-2.5 sm:p-3 flex items-center gap-2 text-xs text-amber-900 font-medium">
                    <Gift size={15} className="text-amber-600 flex-shrink-0" />
                    <span>{t('roadmap.idpPerk')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;






