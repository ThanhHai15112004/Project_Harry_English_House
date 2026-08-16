import React from 'react';
import { MainLayout } from '@/components/layout';
import { useDocumentTitle } from '@/core';
import {
  HeroSection,
  AboutOverview,
  FeaturedPrograms,
  LearningMethod,
  RoadmapSection,
  FounderHarry,
  StudentResults,
  AcademicActivities,
  CtaConsultation,
} from './components';

export const HomePage = () => {
  useDocumentTitle('home');

  return (
    <MainLayout>
      <HeroSection />
      <AboutOverview />
      <FeaturedPrograms />
      <LearningMethod />
      <RoadmapSection />
      <FounderHarry />
      <StudentResults />
      <AcademicActivities />
      <CtaConsultation />
    </MainLayout>
  );
};

export default HomePage;
