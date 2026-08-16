import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

export default function CourseFaq({ course }) {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  if (!course) return null;

  const defaultFaqs = [
    {
      q: 'Tôi chưa chắc chắn trình độ hiện tại thì có đăng ký khóa này được không?',
      a: 'Hoàn toàn được! Bạn không cần lo lắng về việc chọn nhầm lớp. Harry English House sẽ tổ chức bài kiểm tra đánh giá năng lực 4 kỹ năng miễn phí và Thầy Harry sẽ trực tiếp tư vấn lộ trình phù hợp nhất cho bạn trước khi nhập học.'
    },
    {
      q: 'Nếu tôi bận việc đột xuất và nghỉ một buổi thì có được học bù không?',
      a: 'Có. Đối với lớp Online, toàn bộ bài giảng đều được ghi hình video chất lượng cao để bạn xem lại. Đối với lớp Offline, học viên được hỗ trợ học bù tại lớp song song hoặc được trợ giảng giải đáp thắc mắc 1-1.'
    },
    {
      q: 'Học phí của khóa học đã bao gồm toàn bộ giáo trình và tài liệu chưa?',
      a: 'Học phí tại Harry English House là trọn gói và minh bạch 100%. Toàn bộ giáo trình in ấn độc quyền, tài liệu tham khảo và phí thi thử Mock Test định kỳ đều đã được bao gồm, không phát sinh bất kỳ chi phí nào trong quá trình học.'
    },
    {
      q: 'Khóa học có cam kết chuẩn đầu ra bằng văn bản không?',
      a: 'Có. Học viên tham gia đầy đủ từ 90% số buổi học và hoàn thành các bài tập chấm chữa theo đúng hướng dẫn sẽ được cam kết chuẩn đầu ra bằng văn bản. Trong trường hợp chưa đạt mục tiêu, học viên được học lại hoàn toàn miễn phí.'
    },
    {
      q: 'Tôi có được hỗ trợ chấm chữa bài viết và chỉnh phát âm ngoài giờ học không?',
      a: 'Được. Đội ngũ trợ giảng học vụ và Thầy Harry luôn sẵn sàng giải đáp thắc mắc và chấm bài qua nhóm học tập hàng tuần để đảm bảo bạn không bị dồn ứ kiến thức.'
    }
  ];

  const faqs = (course.faqs && course.faqs.length > 0) ? course.faqs : defaultFaqs;

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E2E8F0]" id="course-faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EAF2FF] text-[#1746A2] mb-3">
            {t('pages.courseDetail.faq.badge', 'FAQ KHÓA HỌC')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10233F] tracking-tight">
            {t('pages.courseDetail.faq.title', 'Giải Đáp Thắc Mắc Về Khóa Học')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('pages.courseDetail.faq.subtitle', 'Những câu hỏi học viên thường quan tâm nhất trước khi đăng ký khóa học này')}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#2563EB]/40 bg-[#F8FAFC] shadow-xs' : 'border-[#E2E8F0] bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#10233F]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#EAF2FF] text-[#2563EB] rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
