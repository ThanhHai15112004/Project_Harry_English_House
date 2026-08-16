import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/components/layout';
import { Modal } from '@/components/common';
import { useTeacherData, useCertificatesData, useMediaData, useDocumentTitle } from '@/core';
import {
  AboutHero,
  HarryStory,
  HehOrigin,
  EducationalPhilosophy,
  AreasOfExpertise,
  EducationAndCertificates,
  AcademicActivities,
  PartnershipGallery,
  TeachingTeam,
  LifeAtHehMoments,
  AboutBottomCta,
} from './components';

export const AboutPage = () => {
  const { t } = useTranslation();
  useDocumentTitle('about');

  const teacherData = useTeacherData();
  const certificates = useCertificatesData();
  const mediaData = useMediaData();

  const [activeModalItem, setActiveModalItem] = useState(null);

  const founder = teacherData?.founder;
  const story = teacherData?.story;
  const origin = teacherData?.origin;
  const philosophyPrinciples = teacherData?.philosophyPrinciples || [];
  const expertise = teacherData?.expertise || [];
  const education = teacherData?.education;
  const academicActivities = teacherData?.academicActivities;
  const team = teacherData?.team || [];
  const moments = teacherData?.moments || mediaData?.memories || [];
  const collaborations = mediaData?.collaborations || [];

  return (
    <MainLayout>
      {/* 1. Hero Harry Khoi (42% Text / 58% Real Photo Authority) */}
      <AboutHero founderData={founder} />

      {/* 2. Story: Harry đến với việc giảng dạy tiếng Anh như thế nào */}
      <HarryStory storyData={story} />

      {/* 3. Origin: Từ một cách dạy đến một môi trường học (Vấn đề -> Tiếp cận -> HEH) */}
      <HehOrigin originData={origin} />

      {/* 4. Educational Philosophy: 3 Nguyên tắc "Không học nhiều hơn. Học đúng hơn." */}
      <EducationalPhilosophy principles={philosophyPrinciples} />

      {/* 5. Areas of Expertise: 4 Lĩnh vực chuyên môn thực chất */}
      <AreasOfExpertise expertiseList={expertise} />

      {/* 6. Education & Credentials: Học vấn chính quy & Lưới chứng chỉ */}
      <EducationAndCertificates
        educationData={education}
        certificates={certificates}
        onOpenCertificate={setActiveModalItem}
      />

      {/* 7. Academic Activities: Hoạt động học thuật & Sự kiện quốc tế EMGS 2025 */}
      <AcademicActivities
        activitiesData={academicActivities}
        onOpenPhoto={setActiveModalItem}
      />

      {/* 8. Partnerships: Hoạt động đối tác & Giao lưu học thuật */}
      <PartnershipGallery
        collaborations={collaborations}
        onOpenPhoto={setActiveModalItem}
      />

      {/* 9. Teaching Team: Những người đồng hành cùng Harry */}
      <TeachingTeam teamList={team} />

      {/* 10. Moments: Những khoảnh khắc chân thực tại Harry */}
      <LifeAtHehMoments
        moments={moments}
        onOpenMoment={setActiveModalItem}
      />

      {/* 11. Conversion Bottom CTA: Dark Navy #10233F */}
      <AboutBottomCta />

      {/* Shared Lightbox Modal for Full View */}
      <Modal
        isOpen={!!activeModalItem}
        onClose={() => setActiveModalItem(null)}
        title={
          activeModalItem?.title ||
          activeModalItem?.name ||
          activeModalItem?.caption ||
          t('pages.about.heroBadge')
        }
      >
        {activeModalItem && (
          <div className="space-y-4 p-1">
            <div className="flex items-center justify-center bg-slate-900/5 rounded-2xl p-2 border border-slate-200">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title || activeModalItem.caption}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-md"
              />
            </div>
            
            {(activeModalItem.caption || activeModalItem.description || activeModalItem.title) && (
              <div className="bg-academic-soft-white p-4 rounded-xl border border-slate-200 space-y-1">
                <h4 className="text-sm font-bold text-academic-heading font-heading">
                  {activeModalItem.title || activeModalItem.name || activeModalItem.caption}
                </h4>
                {activeModalItem.description && (
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeModalItem.description}
                  </p>
                )}
                {activeModalItem.caption && activeModalItem.caption !== activeModalItem.title && (
                  <p className="text-xs text-academic-muted italic">
                    {activeModalItem.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </Modal>
    </MainLayout>
  );
};

export default AboutPage;
