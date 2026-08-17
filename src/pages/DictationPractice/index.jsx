import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@/components/layout';
import { useDocumentTitle, ROUTES } from '@/core';
import {
  PracticeBreadcrumbs,
  PracticePlayer,
  DictationTab,
  TranscriptTab,
} from './components';
import { SAMPLE_LESSON_DETAILS } from '../DictationHome/mockDictationData';
import { Headphones, FileText, ArrowLeft } from 'lucide-react';

export const DictationPracticePage = () => {
  const { t } = useTranslation();
  const { lessonId } = useParams();

  // Load lesson detail by id or default to 'beauty-and-the-beast'
  const currentLesson =
    SAMPLE_LESSON_DETAILS[lessonId] ||
    SAMPLE_LESSON_DETAILS['beauty-and-the-beast'];

  useDocumentTitle(`${currentLesson.title} - ${t('nav.dictation')}`);

  const [activeTab, setActiveTab] = useState('dictation'); // 'dictation' | 'transcript'
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const sentences = currentLesson.sentences || [];
  const currentSentence = sentences[currentSentenceIndex] || sentences[0];

  const handlePrevSentence = () => {
    if (currentSentenceIndex > 0) {
      setCurrentSentenceIndex((prev) => prev - 1);
    }
  };

  const handleNextSentence = () => {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex((prev) => prev + 1);
    }
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <MainLayout>
      <div className="pt-28 pb-20 bg-slate-50/50 dark:bg-[#070E1E] min-h-screen">
        <div className="app-container space-y-6 max-w-7xl">
          {/* Back button */}
          <div className="flex items-center justify-between">
            <Link
              to={ROUTES.DICTATION}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
            >
              <ArrowLeft size={15} />
              <span>{t('dictation.practice.backToList')}</span>
            </Link>
          </div>

          <PracticeBreadcrumbs
            categoryTitle={currentLesson.categoryTitle}
            lessonTitle={currentLesson.title}
            level={currentLesson.level}
          />

          {/* Main Interactive Exercise Workspace Card */}
          <div className="rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700 shadow-xl overflow-hidden">
            {/* Top Tabs: Dictation & Full transcript */}
            <div className="flex items-center border-b border-slate-200/90 dark:border-slate-700/90 px-4 pt-3 bg-slate-100/60 dark:bg-slate-900/60">
              <button
                type="button"
                onClick={() => setActiveTab('dictation')}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-t-2xl font-bold text-sm transition-all border-t-2 border-x-2 -mb-[2px] cursor-pointer ${
                  activeTab === 'dictation'
                    ? 'bg-white dark:bg-slate-800 text-primary dark:text-sky-400 border-slate-200 dark:border-slate-700 shadow-2xs'
                    : 'bg-transparent text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Headphones size={16} />
                <span>{t('dictation.practice.tabDictation')}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('transcript')}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-t-2xl font-bold text-sm transition-all border-t-2 border-x-2 -mb-[2px] cursor-pointer ${
                  activeTab === 'transcript'
                    ? 'bg-white dark:bg-slate-800 text-primary dark:text-sky-400 border-slate-200 dark:border-slate-700 shadow-2xs'
                    : 'bg-transparent text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <FileText size={16} />
                <span>{t('dictation.practice.tabTranscript')}</span>
              </button>
            </div>

            {/* Tab Body: 2 Columns Layout on Desktop */}
            <div className="p-5 sm:p-7">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Media Player (Video or Audio) - 6 cols */}
                <div className="lg:col-span-6 space-y-4">
                  <PracticePlayer
                    mediaType={currentLesson.mediaType}
                    youtubeId={currentLesson.youtubeId}
                    currentSentence={currentSentence}
                    isPlaying={isPlaying}
                  />
                </div>

                {/* Right Column: Interactive Workspace (Dictation or Transcript) - 6 cols */}
                <div className="lg:col-span-6">
                  {activeTab === 'dictation' ? (
                    <DictationTab
                      currentIndex={currentSentenceIndex}
                      totalSentences={currentLesson.totalSentences || sentences.length}
                      currentSentence={currentSentence}
                      onPrevSentence={handlePrevSentence}
                      onNextSentence={handleNextSentence}
                      isPlaying={isPlaying}
                      onTogglePlay={handleTogglePlay}
                      onSelectSentence={setCurrentSentenceIndex}
                      sentences={sentences}
                    />
                  ) : (
                    <TranscriptTab
                      sentences={sentences}
                      currentIndex={currentSentenceIndex}
                      onSelectSentence={setCurrentSentenceIndex}
                      isPlaying={isPlaying}
                      onTogglePlay={handleTogglePlay}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DictationPracticePage;
