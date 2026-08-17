import React, { useState, useEffect } from 'react';
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
import { getDictationLessonById, getDictationCategories } from '@/db';
import { Headphones, FileText, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const DictationPracticePage = () => {
  const { t, i18n } = useTranslation();
  const isVi = i18n.language === 'vi';
  const { lessonId } = useParams();

  // Load lesson from master db
  const defaultLesson = getDictationCategories()[0]?.exercises?.[0] || {};
  const currentLesson = getDictationLessonById(lessonId) || defaultLesson;

  const lessonTitle = isVi && currentLesson.titleVi ? currentLesson.titleVi : currentLesson.title;
  const categoryTitle = isVi && currentLesson.categoryTitleVi ? currentLesson.categoryTitleVi : currentLesson.categoryTitle;

  useDocumentTitle(`${lessonTitle} - ${t('nav.dictation')}`);

  const [activeTab, setActiveTab] = useState('dictation'); // 'dictation' | 'transcript'
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [playTrigger, setPlayTrigger] = useState(0);
  const [completedSentences, setCompletedSentences] = useState({});

  const sentences = currentLesson.sentences || [];
  const currentSentence = sentences[currentSentenceIndex] || sentences[0];

  // Load progress from localStorage
  useEffect(() => {
    if (!currentLesson?.id) return;
    try {
      const saved = localStorage.getItem(`dictation_progress_${currentLesson.id}`);
      if (saved) {
        setCompletedSentences(JSON.parse(saved));
      } else {
        setCompletedSentences({});
      }
    } catch {
      // Ignore
    }
  }, [currentLesson?.id]);

  // Reset start state when lesson changes
  useEffect(() => {
    setHasStarted(false);
    setIsPlaying(false);
    setCurrentSentenceIndex(0);
  }, [currentLesson?.id]);

  // Save progress
  const handleMarkSentenceComplete = (sentenceId) => {
    setCompletedSentences((prev) => {
      const updated = { ...prev, [sentenceId]: true };
      try {
        localStorage.setItem(`dictation_progress_${currentLesson.id}`, JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const handleStartPractice = () => {
    setHasStarted(true);
    setIsPlaying(true);
    setPlayTrigger(Date.now());
  };

  const handlePrevSentence = () => {
    if (currentSentenceIndex > 0) {
      setCurrentSentenceIndex((prev) => prev - 1);
      if (hasStarted) {
        setIsPlaying(true);
        setPlayTrigger(Date.now());
      }
    }
  };

  const handleNextSentence = () => {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex((prev) => prev + 1);
      if (hasStarted) {
        setIsPlaying(true);
        setPlayTrigger(Date.now());
      }
    }
  };

  const handleSelectSentence = (idx) => {
    setCurrentSentenceIndex(idx);
    setHasStarted(true);
    setIsPlaying(true);
    setPlayTrigger(Date.now());
  };

  const handleTogglePlay = () => {
    if (!hasStarted) {
      handleStartPractice();
      return;
    }
    setIsPlaying((prev) => {
      const nextState = !prev;
      setPlayTrigger(Date.now());
      return nextState;
    });
  };

  const completedCount = Object.keys(completedSentences).length;
  const progressPercent = sentences.length > 0 ? Math.round((completedCount / sentences.length) * 100) : 0;

  return (
    <MainLayout>
      <div className="pt-20 md:pt-24 pb-14 bg-slate-50/50 dark:bg-[#070E1E] min-h-screen">
        <div className="app-container space-y-6 max-w-7xl">
          {/* Top Bar: Back button & Progress bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to={ROUTES.DICTATION}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
            >
              <ArrowLeft size={15} />
              <span>{t('dictation.practice.backToList')}</span>
            </Link>

            {/* Completion Progress Badge */}
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold shadow-2xs">
                <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400" />
                <span>Tiến độ: {completedCount}/{sentences.length} câu ({progressPercent}%)</span>
              </div>
            </div>
          </div>

          <PracticeBreadcrumbs
            categoryTitle={categoryTitle}
            lessonTitle={lessonTitle}
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
                    mediaType={currentLesson.mediaType || 'youtube'}
                    youtubeId={currentLesson.youtubeId}
                    currentSentence={currentSentence}
                    isPlaying={isPlaying}
                    onPlayStateChange={setIsPlaying}
                    hasStarted={hasStarted}
                    onStart={handleStartPractice}
                    playTrigger={playTrigger}
                    thumbnailUrl={currentLesson.thumbnailUrl}
                    lessonTitle={lessonTitle}
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
                      onSelectSentence={handleSelectSentence}
                      sentences={sentences}
                      completedSentences={completedSentences}
                      onMarkComplete={handleMarkSentenceComplete}
                      hasStarted={hasStarted}
                      onStart={handleStartPractice}
                    />
                  ) : (
                    <TranscriptTab
                      sentences={sentences}
                      currentIndex={currentSentenceIndex}
                      onSelectSentence={handleSelectSentence}
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
