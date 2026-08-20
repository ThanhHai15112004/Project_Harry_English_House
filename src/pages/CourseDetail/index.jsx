import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen, ArrowLeft, X, CheckCircle2, Phone, User, Send } from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { useCourseDetail, useDocumentTitle, ROUTES, APP_INFO } from '@/core';

import {
  CourseHero,
  CourseQuickOverview,
  CourseTargetAudience,
  CourseLearningContent,
  CourseRoadmapStages,
  CourseCurriculumBooks,
  CourseMethodology,
  CourseInfoAndPricing,
  CourseInstructorProfile,
  CourseRelatedResults,
  CourseOpenClasses,
  CourseFaq,
  CourseBottomCta,
  CourseStickyBars
} from './components';

export const CourseDetailPage = () => {
  const { courseId } = useParams();
  const { t } = useTranslation();
  const course = useCourseDetail(courseId);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [formData, setFormData] = useState({ fullName: '', phone: '', note: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  // Dynamic SEO Title
  let courseTitle = '';
  if (course) {
    courseTitle = course.titleKey ? t(course.titleKey) : (course.title || '');
  }
  useDocumentTitle(
    'courseDetail',
    courseTitle ? `${courseTitle} | ${APP_INFO.BRAND_NAME}` : undefined
  );

  // Smooth scroll helper
  const handleScrollToClasses = () => {
    const el = document.getElementById('open-classes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultModal = (cls = null) => {
    setSelectedClass(cls);
    setFormSubmitted(false);
    setPhoneError('');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClass(null);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.trim().length < 9) {
      setPhoneError(t('pages.courseDetail.modal.errorPhone', 'Vui lòng nhập số điện thoại hoặc Zalo hợp lệ (tối thiểu 9 số).'));
      return;
    }
    setPhoneError('');
    setFormSubmitted(true);
  };

  // If course not found
  if (!course) {
    return (
      <MainLayout>
        <div className="max-w-xl mx-auto px-4 py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mx-auto mb-5 shadow-xs">
            <BookOpen size={32} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#10233F]">
            {t('pages.courseDetail.notFoundTitle', 'Không tìm thấy khóa học')}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 mb-8 leading-relaxed">
            {t('pages.courseDetail.notFoundDesc', 'Khóa học bạn tìm kiếm không tồn tại hoặc đã được chuyển sang lộ trình mới.')}
          </p>
          <Link
            to={ROUTES.COURSES}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-bold text-sm rounded-xl hover:bg-[#1D4ED8] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>{t('pages.courseDetail.backToCourses', 'Quay lại danh mục khóa học')}</span>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* 1. Hero Khóa Học (#F7F9FC) */}
      <CourseHero 
        course={course}
        onConsultClick={() => handleOpenConsultModal()}
        onViewClassesClick={handleScrollToClasses}
      />

      {/* 2. Tổng Quan Nhanh (#FFFFFF) */}
      <CourseQuickOverview course={course} />

      {/* 3. Đối Tượng · Đầu Vào · Đầu Ra (#FFFFFF) */}
      <CourseTargetAudience course={course} />

      {/* 4. Nội Dung Học (#FFFFFF) */}
      <CourseLearningContent course={course} />

      {/* 5. Lộ Trình 3 Giai Đoạn (#F7F9FC) */}
      <CourseRoadmapStages course={course} />

      {/* 6. Giáo Trình Chuẩn Quốc Tế (#FFFFFF) */}
      <CourseCurriculumBooks course={course} />

      {/* 7. Phương Pháp Học (#F7F9FC) */}
      <CourseMethodology course={course} />

      {/* 8. Thông Tin Khóa Học & Biểu Phí (#FFFFFF) */}
      <CourseInfoAndPricing 
        course={course}
        onConsultClick={() => handleOpenConsultModal()}
      />

      {/* 9. Giảng Viên Phụ Trách (#FFFFFF) */}
      <CourseInstructorProfile course={course} />

      {/* 10. Kết Quả Học Viên Liên Quan (#F7F9FC) */}
      <CourseRelatedResults course={course} />

      {/* 11. Lớp Đang Tuyển (#FFFFFF) */}
      <CourseOpenClasses 
        course={course}
        onSelectClass={handleOpenConsultModal}
        onConsultClick={() => handleOpenConsultModal()}
      />

      {/* 12. FAQ Khóa Học (#FFFFFF) */}
      <CourseFaq course={course} />

      {/* 13. CTA Cuối Trang (Dark Navy #10233F) */}
      <CourseBottomCta 
        course={course}
        onConsultClick={() => handleOpenConsultModal()}
        onViewClassesClick={handleScrollToClasses}
      />

      {/* 14. Desktop Mini Sticky Bar & Mobile Bottom Bar */}
      <CourseStickyBars 
        course={course}
        onConsultClick={() => handleOpenConsultModal()}
        onViewClassesClick={handleScrollToClasses}
      />

      {/* Consultation Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="fixed inset-0"
            onClick={handleCloseModal}
          />
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden z-10"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
              aria-label={t('pages.courseDetail.modal.closeBtn', 'Đóng cửa sổ')}
            >
              <X size={18} />
            </button>

            {!formSubmitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase bg-[#EAF2FF] text-[#1746A2]">
                    {t('pages.courseDetail.modal.badge1on1', 'Tư vấn 1-1')}
                  </span>
                  {selectedClass && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                      {t('pages.courseDetail.modal.classPrefix', 'Lớp: ')}{selectedClass.className}
                    </span>
                  )}
                </div>

                <h3 id="modal-title" className="text-xl sm:text-2xl font-black text-[#10233F] mb-1">
                  {t('pages.courseDetail.modal.title', 'Đăng Ký Tư Vấn Khóa Học')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  {courseTitle}
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="course-modal-fullname" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {t('pages.courseDetail.modal.fullName', 'Họ và tên của bạn')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="course-modal-fullname"
                        type="text"
                        required
                        placeholder={t('pages.courseDetail.modal.fullNamePlaceholder', 'Ví dụ: Nguyễn Văn A')}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 pl-10 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course-modal-phone" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {t('pages.courseDetail.modal.phone', 'Số điện thoại / Zalo')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="course-modal-phone"
                        type="tel"
                        required
                        placeholder={t('pages.courseDetail.modal.phonePlaceholder', 'Ví dụ: 036 559 2895')}
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (phoneError) setPhoneError('');
                        }}
                        className={`w-full px-3.5 py-2.5 pl-10 rounded-xl border text-sm focus:outline-hidden focus:ring-2 transition-all ${
                          phoneError 
                            ? 'border-red-400 focus:ring-red-300' 
                            : 'border-slate-300 focus:ring-[#2563EB] focus:border-transparent'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    </div>
                    {phoneError && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="course-modal-note" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {t('pages.courseDetail.modal.note', 'Ghi chú thêm (Mục tiêu điểm số / Khung giờ rảnh)')}
                    </label>
                    <textarea
                      id="course-modal-note"
                      rows={2}
                      placeholder={t('pages.courseDetail.modal.notePlaceholder', 'Chia sẻ thêm về trình độ hiện tại hoặc thắc mắc của bạn...')}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-6 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{t('pages.courseDetail.modal.submitBtn', 'Gửi yêu cầu nhận tư vấn')}</span>
                    <Send size={16} />
                  </button>

                  <p className="text-[11px] text-center text-slate-400 font-medium">
                    {t('pages.courseDetail.modal.privacy', 'Cam kết bảo mật thông tin & Liên hệ trong vòng 24h làm việc')}
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-black text-[#10233F] mb-2">
                  {t('pages.courseDetail.modal.successTitle', 'Đã nhận thông tin thành công!')}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto mb-6">
                  {t('pages.courseDetail.modal.successMessage', { name: formData.fullName, phone: formData.phone })}
                </p>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 bg-[#2563EB] text-white font-bold text-sm rounded-xl cursor-pointer"
                >
                  {t('pages.courseDetail.modal.closeBtn', 'Đóng cửa sổ')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default CourseDetailPage;
