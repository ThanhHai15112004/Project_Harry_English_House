import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Settings,
  Mic,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Lightbulb,
  Headphones,
} from 'lucide-react';

export const DictationTab = ({
  currentIndex,
  totalSentences,
  currentSentence,
  onPrevSentence,
  onNextSentence,
  isPlaying,
  onTogglePlay,
  sentences = [],
  completedSentences = {},
  onMarkComplete,
  hasStarted,
  onStart,
}) => {
  const { t } = useTranslation();
  const [userInput, setUserInput] = useState('');
  const [checkStatus, setCheckStatus] = useState(null); // null | 'correct' | 'wrong' | 'skipped'
  const [showSettings, setShowSettings] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');
  const [autoRepeatCount, setAutoRepeatCount] = useState('2');

  const cleanText = (str) =>
    (str || '')
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'’]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const handleCheck = () => {
    if (!userInput.trim()) return;

    const cleanUser = cleanText(userInput);
    const cleanTarget = cleanText(currentSentence?.text);

    if (cleanUser === cleanTarget) {
      setCheckStatus('correct');
      if (currentSentence?.id) {
        onMarkComplete?.(currentSentence.id);
      }
    } else {
      setCheckStatus('wrong');
    }
  };

  const handleSkip = () => {
    setCheckStatus('skipped');
  };

  const handleReset = () => {
    setUserInput('');
    setCheckStatus(null);
  };

  const handleNext = () => {
    handleReset();
    onNextSentence();
  };

  const handlePrev = () => {
    handleReset();
    onPrevSentence();
  };

  // Word-by-word diff comparison for wrong status
  const renderWordDiff = () => {
    const userWords = cleanText(userInput).split(' ');
    const targetWords = (currentSentence?.text || '').split(' ');

    return (
      <div className="flex flex-wrap gap-1 text-sm font-medium">
        {targetWords.map((word, i) => {
          const targetClean = cleanText(word);
          const userWord = userWords[i];
          const userClean = cleanText(userWord);
          const isMatch = targetClean === userClean;

          return (
            <span
              key={`diff-${word}-${i}`}
              className={`px-1.5 py-0.5 rounded-md font-semibold ${
                isMatch
                  ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300'
                  : 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 underline'
              }`}
            >
              {word}
            </span>
          );
        })}
      </div>
    );
  };

  // 1. Initial State: Clean Branded Start Card matching Harry English House design system
  if (!hasStarted) {
    return (
      <div className="rounded-3xl p-6 sm:p-10 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-6 min-h-[340px] animate-fadeIn">
        {/* Icon */}
        <div className="h-16 w-16 rounded-2xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 flex items-center justify-center text-primary dark:text-sky-400 shadow-2xs">
          <Headphones size={28} />
        </div>

        {/* Header & Subtitle */}
        <div className="space-y-2 max-w-sm">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-100/70 dark:bg-slate-800 text-primary dark:text-sky-300 text-xs font-bold">
            <span>{t('dictation.home.exercises.sentencesCount', { count: totalSentences })}</span>
          </div>
          <h3 className="font-heading font-black text-xl sm:text-2xl text-academic-heading dark:text-white">
            {t('dictation.practice.titleDictation', { defaultValue: 'Luyện Nghe & Chép Chính Tả' })}
          </h3>
          <p className="text-xs sm:text-sm text-academic-body dark:text-slate-400 leading-relaxed">
            {t('dictation.practice.startHint', {
              defaultValue: 'Hệ thống sẽ phát từng câu ngắn, tự động dừng để bạn nghe kỹ và gõ lại chính xác từng từ.',
            })}
          </p>
        </div>

        {/* Start Action */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-primary hover:bg-blue-700 active:scale-95 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Play size={16} className="fill-current ml-0.5" />
            <span>{t('dictation.practice.startLesson', { defaultValue: 'Bắt đầu làm bài' })}</span>
          </button>
          <p className="text-xs text-slate-400">
            {t('dictation.practice.startShortcut', { defaultValue: 'Hoặc nhấn phím Space để bắt đầu' })}
          </p>
        </div>
      </div>
    );
  }

  const isCurrentCompleted = !!completedSentences[currentSentence?.id];

  const playButtonClass = isPlaying
    ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20'
    : 'bg-primary text-white hover:bg-blue-700 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400';
  const playButtonTitle = isPlaying
    ? 'Tạm dừng (Phím Space)'
    : 'Phát lại câu này từ đầu (Phím Space)';

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 1. Upper Control Bar */}
      <div className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
        {/* Play / Pause Segment Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onTogglePlay}
            className={`h-10 w-10 rounded-xl flex items-center justify-center shadow-sm transition-all cursor-pointer ${playButtonClass}`}
            title={playButtonTitle}
          >
            {isPlaying ? (
              <Pause size={18} className="fill-current" />
            ) : (
              <Play size={18} className="fill-current ml-0.5" />
            )}
          </button>

          {/* Sentence Navigation */}
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={handlePrev}
              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              title="Câu trước"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="font-mono text-xs sm:text-sm px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
              <span>{currentIndex + 1} / {totalSentences}</span>
              {isCurrentCompleted && <CheckCircle2 size={13} className="text-emerald-500" />}
            </span>

            <button
              type="button"
              disabled={currentIndex === totalSentences - 1}
              onClick={handleNext}
              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              title="Câu kế tiếp"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Settings Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            title={t('dictation.practice.settingsTitle')}
          >
            <Settings size={18} />
          </button>

          {/* Settings Dropdown Popover */}
          {showSettings && (
            <div className="absolute right-0 top-full mt-2 w-60 rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-xl border border-slate-200 dark:border-slate-700 z-30 space-y-3 animate-fadeIn text-xs">
              <div className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">
                {t('dictation.practice.settingsTitle')}
              </div>
              <div className="space-y-1">
                <label htmlFor="playback-speed-select" className="text-slate-600 dark:text-slate-400 font-semibold">
                  {t('dictation.practice.playbackSpeed')}
                </label>
                <select
                  id="playback-speed-select"
                  value={playbackSpeed}
                  onChange={(e) => setPlaybackSpeed(e.target.value)}
                  className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold"
                >
                  <option value="0.75x">{t('dictation.practice.speedSlow')}</option>
                  <option value="1x">{t('dictation.practice.speedNormal')}</option>
                  <option value="1.25x">{t('dictation.practice.speedFast')}</option>
                </select>
              </div>
              <div className="space-y-1">
                <label htmlFor="auto-repeat-select" className="text-slate-600 dark:text-slate-400 font-semibold">
                  {t('dictation.practice.repeatCount')}
                </label>
                <select
                  id="auto-repeat-select"
                  value={autoRepeatCount}
                  onChange={(e) => setAutoRepeatCount(e.target.value)}
                  className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold"
                >
                  <option value="1">{t('dictation.practice.repeat1')}</option>
                  <option value="2">{t('dictation.practice.repeat2')}</option>
                  <option value="3">{t('dictation.practice.repeat3')}</option>
                  <option value="infinite">{t('dictation.practice.repeatInfinite')}</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. Textarea Workspace */}
      <div className="relative">
        <textarea
          rows={4}
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
            if (checkStatus) setCheckStatus(null);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleCheck();
            }
          }}
          placeholder={t('dictation.practice.typePlaceholder')}
          className="w-full p-4 pr-10 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-primary dark:focus:border-sky-400 text-base font-medium shadow-inner transition-all resize-none"
        />

        <div className="absolute right-3.5 bottom-4 text-slate-400 hover:text-primary transition-colors cursor-pointer" title="Speech to text">
          <Mic size={18} />
        </div>
      </div>

      {/* 3. Action Buttons & Feedback result */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCheck}
            className="px-6 py-2.5 rounded-xl bg-primary text-white hover:bg-blue-700 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 font-bold text-sm shadow-sm transition-all cursor-pointer"
          >
            {t('dictation.practice.btnCheck')}
          </button>

          <button
            type="button"
            onClick={handleSkip}
            className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-sm transition-colors cursor-pointer"
          >
            {t('dictation.practice.btnSkip')}
          </button>

          {checkStatus && (
            <button
              type="button"
              onClick={handleReset}
              className="p-2.5 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer ml-auto"
              title={t('dictation.practice.btnRedo')}
            >
              <RotateCcw size={17} />
            </button>
          )}
        </div>

        {/* Result Feedback Banner */}
        {checkStatus === 'correct' && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm">
                <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400" />
                <span>{t('dictation.practice.correctMessage')}</span>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="px-3.5 py-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold transition-colors cursor-pointer"
              >
                {t('dictation.practice.btnNext')}
              </button>
            </div>
            <p className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">
              {t('dictation.practice.correctAnswer')} <strong>"{currentSentence?.text}"</strong>
            </p>
            {currentSentence?.translation && (
              <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                {currentSentence.translation}
              </p>
            )}
          </div>
        )}

        {checkStatus === 'wrong' && (
          <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200 space-y-3 animate-fadeIn">
            <div className="flex items-center gap-2 font-bold text-sm">
              <AlertCircle size={18} className="text-rose-600 dark:text-rose-400" />
              <span>{t('dictation.practice.wrongMessage')}</span>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">So sánh chi tiết:</p>
              {renderWordDiff()}
            </div>
          </div>
        )}

        {checkStatus === 'skipped' && (
          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm">
                <HelpCircle size={18} className="text-primary dark:text-sky-400" />
                <span>{t('dictation.practice.skippedTitle')}</span>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="px-3.5 py-1 rounded-lg bg-primary text-white hover:bg-blue-700 dark:bg-sky-500 dark:text-slate-950 text-xs font-bold transition-colors cursor-pointer"
              >
                {t('dictation.practice.btnContinue')}
              </button>
            </div>
            <p className="text-sm font-bold text-primary dark:text-sky-400">
              "{currentSentence?.text}"
            </p>
            {currentSentence?.translation && (
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                {t('dictation.practice.translationLabel')} {currentSentence.translation}
              </p>
            )}
          </div>
        )}
      </div>

      {/* 4. Tip box */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 font-medium flex items-center gap-2">
        <Lightbulb size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0" />
        <span><strong>{t('dictation.practice.tipTitle')}</strong> {t('dictation.practice.tipContent')}</span>
      </div>
    </div>
  );
};

export default DictationTab;
