import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/components/layout';
import { useCoursesData, useProgramsData, useDocumentTitle } from '@/core';
import {
  CoursesHero,
  CourseCatalog,
  LevelRoadmap,
  ProgramOverview,
  CourseFinder,
  CoursesBottomCta,
} from './components';

export const CoursesPage = () => {
  const { t } = useTranslation();
  useDocumentTitle('courses');

  const allCourses = useCoursesData();
  const rawProgramsData = useProgramsData();
  const [searchParams, setSearchParams] = useSearchParams();

  // Programs & Finder JSON from src/db/programs.json
  const programsMap = rawProgramsData?.programs || {};
  const finderData = rawProgramsData?.finder || {};
  const validPrograms = useMemo(() => ['ielts', 'ielts-vip', 'communication', 'toeic-vstep'], []);

  // 1. Program Category (Single source of truth from URL searchParams)
  const programParam = searchParams.get('program');
  const selectedProgram = validPrograms.includes(programParam) ? programParam : 'all';

  // Smooth scroll to element helper
  const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleProgramChange = (progId) => {
    if (progId === 'all') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ program: progId }, { replace: true });
    }
    setSelectedMilestone(0);
  };

  const handleHeroProgramSelect = (progId) => {
    handleProgramChange(progId);
    // Smoothly anchor to the course catalog so the user instantly sees the selected program
    setTimeout(() => {
      scrollToAnchor('course-catalog');
    }, 50);
  };

  // 2. Selected Milestone in Roadmap
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  // Active Program for Roadmap & Overview display
  const activeProgramKey = selectedProgram === 'all' ? 'ielts' : selectedProgram;
  const currentProgramData = programsMap[activeProgramKey] || programsMap.ielts;
  const currentMilestones = currentProgramData?.milestones || [];

  return (
    <MainLayout>
      {/* 1. Academic Hero Hub with 4 Interactive Program Cards */}
      <CoursesHero
        programs={programsMap}
        selectedProgram={selectedProgram}
        onSelectProgram={handleHeroProgramSelect}
        onFinderClick={() => scrollToAnchor('course-finder')}
      />

      {/* 2. PRIORITY: Course Catalog (Search, Basic Filters, Rich Cards like Home) */}
      <CourseCatalog
        allCourses={allCourses}
        selectedCategory={selectedProgram}
        onSelectCategory={handleProgramChange}
      />

      {/* 3. Horizontal Interactive Level Roadmap */}
      <LevelRoadmap
        milestones={currentMilestones}
        selectedMilestone={selectedMilestone}
        onSelectMilestone={setSelectedMilestone}
        onMatchCourseClick={() => scrollToAnchor('course-catalog')}
      />

      {/* 4. Selected Program Overview Block (60/40) */}
      <div id="program-overview">
        <ProgramOverview programData={currentProgramData} />
      </div>

      {/* 5. Interactive Course Finder (3 Steps) */}
      <CourseFinder allCourses={allCourses} finderData={finderData} />

      {/* 6. Bottom Conversion CTA (Dark Navy) */}
      <CoursesBottomCta />
    </MainLayout>
  );
};

export default CoursesPage;
