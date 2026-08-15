import React from 'react';
import { MainLayout } from '@/components';
import {
  HeroSection,
  AboutFounder,
  CoursesSection,
  RoadmapSection,
  PricingSection,
  CertificatesSection,
  FeedbacksSection,
  ActivitiesGallery,
  ContactSection,
} from './components';

/**
 * Home Page Component
 * File page chỉ đóng vai trò ráp nối các component section con.
 * Khi cần chỉnh sửa nội dung hoặc UI phần nào, chỉ cần vào component con tương ứng trong ./components/
 */
export const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutFounder />
      <CoursesSection />
      <RoadmapSection />
      <PricingSection />
      <CertificatesSection />
      <FeedbacksSection />
      <ActivitiesGallery />
      <ContactSection />
    </MainLayout>
  );
};

export default HomePage;
