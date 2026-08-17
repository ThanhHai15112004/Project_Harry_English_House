import React, { useState, useEffect, useCallback } from 'react';
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
  const [seekTime, setSeekTime] = useState(null);
  const [completedSentences, setCompletedSentences] = useState({});
  const [repeatSentence, setRepeatSentence] = useState(false);
  const [autoRepeatCount, setAutoRepeatCount] = useState('1'); // '1' | '2' | '3' | 'infinite'
  const [playbackRate, setPlaybackRate] = useState(1);
  const [dictationRepeatsDone, setDictationRepeatsDone] = useState(0);

  const sentences = currentLesson.sentences || [];
  const currentSentence = sentences[currentSentenceIndex] || sentences[0];

  // Helper to replay current sentence
  const handleReplay = useCallback(() => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    setIsPlaying(true);
    setDictationRepeatsDone(0);
    if (currentSentence) {
      setSeekTime(currentSentence.startTime + Math.random() * 0.0001);
    }
    setPlayTrigger(Date.now());
  }, [hasStarted, currentSentence]);

  // Sync sentence index with real-time video progress when in Transcript mode & auto-pause in Dictation mode
  const handleTimeUpdate = useCallback((currentTime) => {
    if (!sentences.length) return;

    if (activeTab === 'transcript') {
      // In Transcript mode: check if repeating current sentence
      if (repeatSentence && currentSentence) {
        if (currentTime >= currentSentence.endTime) {
          setSeekTime(currentSentence.startTime + Math.random() * 0.0001);
          return;
        }
      }

      // Find current active sentence based on time
      const idx = sentences.findIndex((s, i) => {
        const nextStart = sentences[i + 1]?.startTime ?? (s.endTime + 4);
        return currentTime >= s.startTime && currentTime < nextStart;
      });

      if (idx !== -1 && idx !== currentSentenceIndex) {
        setCurrentSentenceIndex(idx);
      }
    } else if (activeTab === 'dictation') {
      // In Dictation mode: check if current sentence reached endTime
      if (currentSentence && currentTime >= currentSentence.endTime) {
        const maxRepeats = autoRepeatCount === 'infinite' ? Infinity : (Number.parseInt(autoRepeatCount, 10) || 1);
        if (dictationRepeatsDone + 1 < maxRepeats) {
          setDictationRepeatsDone((prev) => prev + 1);
          setSeekTime(currentSentence.startTime + Math.random() * 0.0001);
        } else {
          // Pause at end of sentence
          setIsPlaying(false);
          setDictationRepeatsDone(0);
        }
      }
    }
  }, [activeTab, repeatSentence, currentSentence, sentences, currentSentenceIndex, autoRepeatCount, dictationRepeatsDone]);

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
    setDictationRepeatsDone(0);
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
    setDictationRepeatsDone(0);
    setPlayTrigger(Date.now());
  };

  const handlePrevSentence = useCallback(() => {
    if (currentSentenceIndex > 0) {
      setCurrentSentenceIndex((prev) => prev - 1);
      setDictationRepeatsDone(0);
      if (hasStarted) {
        setIsPlaying(true);
        setPlayTrigger(Date.now());
      }
    }
  }, [currentSentenceIndex, hasStarted]);

  const handleNextSentence = useCallback(() => {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex((prev) => prev + 1);
      setDictationRepeatsDone(0);
      if (hasStarted) {
        setIsPlaying(true);
        setPlayTrigger(Date.now());
      }
    }
  }, [currentSentenceIndex, sentences.length, hasStarted]);

  const handleSelectSentence = (idx) => {
    setCurrentSentenceIndex(idx);
    setDictationRepeatsDone(0);
    setHasStarted(true);
    setIsPlaying(true);
    setPlayTrigger(Date.now());
  };

  const handleTogglePlay = useCallback(() => {
    if (!hasStarted) {
      handleStartPractice();
      return;
    }
    setIsPlaying((prev) => {
      const nextState = !prev;
      setPlayTrigger(Date.now());
      return nextState;
    });
  }, [hasStarted]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);

      // Ctrl+Space or Alt+Space: Replay current sentence even inside textarea
      if ((e.ctrlKey || e.altKey) && e.code === 'Space') {
        e.preventDefault();
        handleReplay();
        return;
      }

      // Space when not typing in textarea: Toggle Play/Pause
      if (e.code === 'Space' && !isInput) {
        e.preventDefault();
        handleTogglePlay();
        return;
      }

      // Ctrl + ArrowLeft / Ctrl + ArrowRight: Prev / Next
      if (e.ctrlKey && e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrevSentence();
        return;
      }
      if (e.ctrlKey && e.code === 'ArrowRight') {
        e.preventDefault();
        handleNextSentence();
        return;
      }

      // ArrowLeft / ArrowRight when not typing in textarea: Prev / Next
      if (!isInput) {
        if (e.code === 'ArrowLeft') {
          e.preventDefault();
          handlePrevSentence();
        } else if (e.code === 'ArrowRight') {
          e.preventDefault();
          handleNextSentence();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleReplay, handleTogglePlay, handlePrevSentence, handleNextSentence]);

  const completedCount = Object.keys(completedSentences).length;
  const progressPercent = sentences.length > 0 ? Math.round((completedCount / sentences.length) * 100) : 0;

  return (
    <MainLayout>
      <div className="pt-5 sm:pt-6 md:pt-8 pb-12 sm:pb-14 bg-slate-50/50 dark:bg-[#070E1E] min-h-screen">
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
                <span>
                  {t('dictation.practice.progress', {
                    completed: completedCount,
                    total: sentences.length,
                    percent: progressPercent,
                  })}
                </span>
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
                    seekTime={seekTime}
                    thumbnailUrl={currentLesson.thumbnailUrl}
                    lessonTitle={lessonTitle}
                    activeTab={activeTab}
                    repeatSentence={repeatSentence}
                    playbackRate={playbackRate}
                    onPlaybackRateChange={setPlaybackRate}
                    onTimeUpdate={handleTimeUpdate}
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
                      onReplay={handleReplay}
                      onSelectSentence={handleSelectSentence}
                      sentences={sentences}
                      completedSentences={completedSentences}
                      onMarkComplete={handleMarkSentenceComplete}
                      hasStarted={hasStarted}
                      onStart={handleStartPractice}
                      playbackRate={playbackRate}
                      onPlaybackRateChange={setPlaybackRate}
                      autoRepeatCount={autoRepeatCount}
                      onAutoRepeatCountChange={setAutoRepeatCount}
                    />
                  ) : (
                    <TranscriptTab
                      sentences={sentences}
                      currentIndex={currentSentenceIndex}
                      onSelectSentence={handleSelectSentence}
                      isPlaying={isPlaying}
                      onTogglePlay={handleTogglePlay}
                      repeatSentence={repeatSentence}
                      onRepeatChange={setRepeatSentence}
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
