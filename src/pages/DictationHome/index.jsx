import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/components/layout';
import { useDocumentTitle } from '@/core';
import { DictationHero, HowItWorks, CategoryPlaylists } from './components';
import { getDictationCategories } from '@/db';

export const DictationHomePage = () => {
  const { t } = useTranslation();
  useDocumentTitle(`${t('nav.dictation')} - Harry English House`);

  const categories = getDictationCategories();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('ALL');

  return (
    <MainLayout>
      {/* 1. Academic Hero Section with Search & Filter */}
      <DictationHero
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
      />

      {/* 2. Core 4-Step Methodology Guide */}
      <HowItWorks />

      {/* 3. Available Exercises Categorized by Playlists */}
      <CategoryPlaylists
        categories={categories}
        searchTerm={searchTerm}
        selectedLevel={selectedLevel}
      />
    </MainLayout>
  );
};

export default DictationHomePage;
