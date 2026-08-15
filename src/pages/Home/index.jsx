import React from 'react';
import { MainLayout } from '@/components/layout';
import {
  HeroSection,
  AboutOverview,
  FeaturedPrograms,
  LearningMethod,
  RoadmapSection,
  FounderHarry,
  StudentResults,
  AcademicActivities,
  OpenClasses,
  CtaConsultation,
} from './components';

export const HomePage = () => {
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
      <OpenClasses />
      <CtaConsultation />
    </MainLayout>
  );
};

export default HomePage;
