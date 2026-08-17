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

  const getSafeString = (key, fallback) => {
    if (!key) return fallback;
    const translated = t(key);
    if (!translated || translated.startsWith('db.courses.') || translated === key) {
      return fallback;
    }
    return translated;
  };

  const rawList = (course.books && course.books.length > 0) ? course.books : defaultBooks;

  const books = rawList.map((book, idx) => {
    const fallbackBook = defaultBooks[idx] || defaultBooks[0];
    return {
      name: getSafeString(book.nameKey, book.name || fallbackBook.name),
      publisher: getSafeString(book.publisherKey, book.publisher || fallbackBook.publisher),
      phase: getSafeString(book.phaseKey, book.phase || fallbackBook.phase),
      desc: getSafeString(book.descKey, book.desc || fallbackBook.desc)
    };
  });

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-academic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-academic-light-blue text-primary mb-3 shadow-2xs font-heading">
            {t('pages.courseDetail.curriculum.badge', 'GIÁO TRÌNH & TÀI LIỆU')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-academic-heading tracking-tight font-heading">
            {t('pages.courseDetail.curriculum.title', 'Giáo Trình Chuẩn Quốc Tế')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-academic-body leading-relaxed max-w-2xl mx-auto">
            {t('pages.courseDetail.curriculum.subtitle', '100% tài liệu từ các nhà xuất bản uy tín thế giới (Cambridge, Oxford, Macmillan)')}
          </p>
        </div>

        {/* Book Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {books.map((book, idx) => (
            <div 
              key={book.name || `book-item-${idx}`}
              className="bg-academic-soft-white rounded-2xl p-6 sm:p-7 border border-academic-border hover:border-cta/40 shadow-2xs hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Book Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-academic-light-blue text-cta flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-white text-academic-heading border border-academic-border shadow-2xs font-heading">
                    <Layers className="w-3.5 h-3.5 text-cta" />
                    {book.phase}
                  </span>
                </div>

                {/* Book Title */}
                <h3 className="text-lg font-bold text-academic-heading mb-2 leading-snug font-heading group-hover:text-primary transition-colors">
                  {book.name}
                </h3>

                {/* Publisher */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-3">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{book.publisher}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-academic-body leading-relaxed">
                  {book.desc}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-4 border-t border-academic-border flex items-center justify-between text-xs text-academic-muted font-medium">
                <span>Giáo trình chính khóa</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Đã bao gồm trong học phí
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
