import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowRight, BookOpen, Target } from 'lucide-react';
import { SECTION_IDS } from '@/core';
import { SectionTitle, Button } from '@/components/common';

export const RoadmapSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('ielts');
  const [selectedMilestone, setSelectedMilestone] = useState(2); // Default to 5.0 -> 6.5

  const roadmapData = {
    ielts: [
      {
        phase: '0 → 3.0',
        band: 'Foundation',
        title: 'Xây Dựng Nền Tảng Ngữ Pháp & Phát Âm',
        target: 'Lấy lại căn bản tiếng Anh, phát âm chuẩn IPA, làm quen từ vựng học thuật cơ bản.',
        focus: 'Phát âm IPA chuẩn, ngữ pháp câu ghép/câu phức, 1000 từ vựng cốt lõi thường gặp trong IELTS.',
        curriculum: 'English Grammar in Use, Oxford Word Skills (Basic), Sách phát âm độc quyền Harry English House.',
      },
      {
        phase: '3.0 → 4.5',
        band: 'Pre-IELTS',
        title: 'Làm Quen Định Dạng & Kỹ Năng Làm Bài',
        target: 'Nắm vững cấu trúc 4 phần thi IELTS, xây dựng tư duy phân tích đề bài Listening/Reading.',
        focus: 'Kỹ thuật Skimming/Scanning, xử lý dạng bài True/False/Not Given, Speaking Part 1 phản xạ tự nhiên.',
        curriculum: 'Complete IELTS Bands 4-5, Mindset for IELTS Level 1, Bộ tài liệu phân loại dạng bài Harry Khôi.',
      },
      {
        phase: '4.5 → 6.5',
        band: 'Intensive Booster',
        title: 'Bứt Phá Điểm Số & Hoàn Thiện Viết / Nói',
        target: 'Đạt band điểm 6.5 toàn diện phục vụ xét tuyển đại học, ra trường hoặc định cư.',
        focus: 'Chiến thuật Task 1 & Task 2 Writing đạt chuẩn Coherence & Lexical, Speaking Part 2 & 3 mở rộng ý tưởng sâu.',
        curriculum: 'Cambridge IELTS 14-19, Collins for IELTS, Tuyển tập bài mẫu Band 8.0 do Thầy Harry trực tiếp biên soạn.',
      },
      {
        phase: '6.5 → 7.5+',
        band: 'Master Class',
        title: 'Chinh Phục Điểm Cao & Tư Duy Học Thuật',
        target: 'Hoàn thiện kỹ năng phản xạ tự nhiên, tư duy phản biện cao cấp, tối ưu hóa điểm số 7.5 - 8.0+.',
        focus: 'Nâng cấp từ vựng C1/C2 (Collocations, Idiomatic expressions), kiểm soát thời gian làm bài, khắc phục triệt để lỗi diễn đạt.',
        curriculum: 'Advanced Cambridge Practice, IELTS Advantage Writing & Speaking, Bộ đề dự đoán thực chiến cập nhật hàng quý.',
      },
    ],
    toeic: [
      {
        phase: '0 → 450',
        band: 'TOEIC Căn Bản',
        title: 'Khôi Phục Nền Tảng Nghe & Đọc Cơ Bản',
        target: 'Nắm chắc ngữ pháp nền tảng cho Part 5, 6 và phát âm từ vựng thông dụng Part 1, 2.',
        focus: '500 từ vựng cốt lõi trong môi trường công sở, kỹ năng nhận diện thì và cấu trúc câu.',
        curriculum: 'Very Easy TOEIC, Hackers TOEIC Start.',
      },
      {
        phase: '450 → 750+',
        band: 'TOEIC Chuyên Sâu',
        title: 'Chiến Thuật Bẫy Đề Thi & Bứt Phá Điểm',
        target: 'Đạt 750 - 850+ TOEIC đáp ứng chuẩn đầu ra đại học và ứng tuyển các tập đoàn đa quốc gia.',
        focus: 'Mẹo phân tích bẫy nghe Part 3, 4; tốc độ đọc hiểu văn bản dài Part 7.',
        curriculum: 'ETS TOEIC Test 2024, Hackers TOEIC Reading & Listening.',
      },
    ],
    communication: [
      {
        phase: 'Level 1',
        band: 'Phản Xạ Cơ Bản',
        title: 'Xóa Bỏ Rào Cản Tâm Lý Tự Tin Giao Tiếp',
        target: 'Giao tiếp trôi chảy các chủ đề đời sống hàng ngày, phỏng vấn xin việc cơ bản.',
        focus: 'Phát âm chuẩn ngữ điệu, nối âm, từ vựng theo chủ đề gia đình, sở thích, du lịch, công việc.',
        curriculum: 'Giáo trình giao tiếp phản xạ thực chiến Harry English House.',
      },
      {
        phase: 'Level 2',
        band: 'Business English',
        title: 'Tiếng Anh Công Sở & Thuyết Trình Chuyên Nghiệp',
        target: 'Tự tin thuyết trình, viết email thương mại, đàm phán và trao đổi với đối tác nước ngoài.',
        focus: 'Tư duy phản biện bằng tiếng Anh, viết báo cáo kinh doanh, kỹ năng dẫn dắt cuộc họp.',
        curriculum: 'Market Leader, Business Result Advanced.',
      },
    ],
  };

  const currentPhases = roadmapData[activeTab] || roadmapData.ielts;
  const currentMilestone = currentPhases[selectedMilestone] || currentPhases[0];

  return (
    <section id={SECTION_IDS.ROADMAP} className="py-20 lg:py-28 bg-academic-soft-white border-y border-academic-border">
      <div className="app-container">
        <SectionTitle
          badge={t('roadmap.badge')}
          title={t('roadmap.title')}
          subtitle={t('roadmap.subtitle')}
        />

        {/* Track Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-academic-border shadow-xs">
            <button
              type="button"
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'ielts'
                  ? 'bg-cta text-white shadow-md shadow-cta/20'
                  : 'text-academic-body hover:text-academic-heading'
              }`}
              onClick={() => {
                setActiveTab('ielts');
                setSelectedMilestone(0);
              }}
            >
              {t('roadmap.tabIelts')}
            </button>
            <button
              type="button"
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'toeic'
                  ? 'bg-cta text-white shadow-md shadow-cta/20'
                  : 'text-academic-body hover:text-academic-heading'
              }`}
              onClick={() => {
                setActiveTab('toeic');
                setSelectedMilestone(0);
              }}
            >
              {t('roadmap.tabToeic')}
            </button>
            <button
              type="button"
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'communication'
                  ? 'bg-cta text-white shadow-md shadow-cta/20'
                  : 'text-academic-body hover:text-academic-heading'
              }`}
              onClick={() => {
                setActiveTab('communication');
                setSelectedMilestone(0);
              }}
            >
              {t('roadmap.tabComm')}
            </button>
          </div>
        </div>

        {/* 65 / 35 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Milestone Progression Nodes (65% / 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {currentPhases.map((phase, idx) => (
              <div
                key={phase.phase}
                className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                  selectedMilestone === idx
                    ? 'bg-white border-cta shadow-md shadow-cta/10 ring-2 ring-cta/20'
                    : 'bg-white/80 border-academic-border hover:border-blue-300 hover:bg-white'
                }`}
                onClick={() => setSelectedMilestone(idx)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-heading font-black text-sm transition-colors ${
                      selectedMilestone === idx
                        ? 'bg-cta text-white'
                        : 'bg-academic-surface text-academic-heading group-hover:bg-academic-light-blue'
                    }`}
                  >
                    {phase.phase}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cta block mb-0.5">
                      {phase.band}
                    </span>
                    <h4 className="text-base font-bold text-academic-heading font-heading">
                      {phase.title}
                    </h4>
                  </div>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    selectedMilestone === idx
                      ? 'bg-cta text-white'
                      : 'text-slate-300 group-hover:text-cta'
                  }`}
                >
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Selected Milestone Detail Card (35% / 5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-academic-border shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-cta bg-academic-light-blue px-3 py-1 rounded-full mb-3">
                  {t('roadmap.phasePrefix')} {currentMilestone.phase} ({currentMilestone.band})
                </span>
                <h3 className="text-xl font-extrabold text-academic-heading font-heading leading-snug">
                  {currentMilestone.title}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="space-y-1">
                  <strong className="flex items-center gap-2 text-academic-heading font-bold">
                    <Target size={16} className="text-cta flex-shrink-0" />
                    {t('roadmap.target')}
                  </strong>
                  <p className="text-academic-body leading-relaxed pl-6">
                    {currentMilestone.target}
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="flex items-center gap-2 text-academic-heading font-bold">
                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                    {t('roadmap.focus')}
                  </strong>
                  <p className="text-academic-body leading-relaxed pl-6">
                    {currentMilestone.focus}
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="flex items-center gap-2 text-academic-heading font-bold">
                    <BookOpen size={16} className="text-primary flex-shrink-0" />
                    {t('roadmap.curriculum')}
                  </strong>
                  <p className="text-academic-body leading-relaxed pl-6">
                    {currentMilestone.curriculum}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a href={`#${SECTION_IDS.CONTACT}`} className="block">
                <Button fullWidth size="md" variant="primary" icon={<ArrowRight size={16} />}>
                  {t('roadmap.cta')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
