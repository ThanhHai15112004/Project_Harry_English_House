import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookMarked, Building2, Layers } from 'lucide-react';

export default function CourseCurriculumBooks({ course }) {
  const { t } = useTranslation();

  if (!course) return null;

  const defaultBooks = [
    {
      name: 'Mindset for IELTS Level 2',
      publisher: 'Cambridge University Press',
      phase: 'Giai đoạn 1 & 2',
      desc: 'Giáo trình chính thống biên soạn bởi các giám khảo khảo thí Cambridge với hệ thống bài học chuyên sâu 4 kỹ năng.'
    },
    {
      name: 'Destination B2: Grammar & Vocabulary',
      publisher: 'Macmillan Education',
      phase: 'Xuyên suốt khóa học',
      desc: 'Tài liệu vàng củng cố ngữ pháp học thuật nâng cao, cụm từ cố định collocations và từ vựng band B2/C1.'
    },
    {
      name: 'Cambridge IELTS Practice Tests 16–18',
      publisher: 'Cambridge Assessment English',
      phase: 'Giai đoạn 3 (Luyện đề)',
      desc: 'Bộ đề thi thật chuẩn format IDP/BC phục vụ luyện giải đề bấm giờ và tổng duyệt chiến thuật phòng thi.'
    }
  ];

  const books = (course.books && course.books.length > 0) ? course.books : defaultBooks;

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EAF2FF] text-[#1746A2] mb-3">
            {t('pages.courseDetail.curriculum.badge', 'GIÁO TRÌNH & TÀI LIỆU')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10233F] tracking-tight">
            {t('pages.courseDetail.curriculum.title', 'Giáo Trình Chuẩn Quốc Tế')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('pages.courseDetail.curriculum.subtitle', '100% tài liệu từ các nhà xuất bản uy tín thế giới (Cambridge, Oxford, Macmillan)')}
          </p>
        </div>

        {/* Book Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {books.map((book, idx) => {
            const bookName = book.nameKey ? t(book.nameKey) : book.name;
            const bookPublisher = book.publisherKey ? t(book.publisherKey) : book.publisher;
            const bookPhase = book.phaseKey ? t(book.phaseKey) : book.phase;
            const bookDesc = book.descKey ? t(book.descKey) : book.desc;

            return (
              <div 
                key={book.nameKey || book.name || idx}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] hover:border-[#2563EB]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Book Header Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                      <BookMarked className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-white text-slate-600 border border-slate-200">
                      <Layers className="w-3 h-3 text-[#2563EB]" />
                      {bookPhase}
                    </span>
                  </div>

                  {/* Book Title */}
                  <h3 className="text-lg font-bold text-[#10233F] mb-2 leading-snug">
                    {bookName}
                  </h3>

                  {/* Publisher */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1746A2] mb-3">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{bookPublisher}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {bookDesc}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Giáo trình chính khóa</span>
                  <span className="text-emerald-600 font-bold">Đã bao gồm trong học phí</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
