import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Pause, Languages } from 'lucide-react';

export const TranscriptTab = ({
  sentences = [],
  currentIndex,
  onSelectSentence,
  isPlaying,
  onTogglePlay,
}) => {
  const { t } = useTranslation();
  const [showTranslation, setShowTranslation] = useState(true);
  const [autoScroll, setAutoScroll] = useState(true);
  const [repeatSentence, setRepeatSentence] = useState(false);

  return (
    <div className="space-y-4">
      {/* 1. Header Toolbar (Translation, Repeat, Auto-scroll) */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/80 dark:border-slate-800 text-xs">
        {/* Translation Selector */}
        <div className="flex items-center gap-2">
          <Languages size={15} className="text-primary dark:text-sky-400" />
          <select
            aria-label={t('dictation.practice.transAria')}
            value={showTranslation ? 'vi' : 'none'}
            onChange={(e) => setShowTranslation(e.target.value === 'vi')}
            className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
          >
            <option value="vi">{t('dictation.practice.transVi')}</option>
            <option value="none">{t('dictation.practice.transNone')}</option>
          </select>
        </div>

        {/* Checkbox Options */}
        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300 font-semibold">
          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={repeatSentence}
              onChange={(e) => setRepeatSentence(e.target.checked)}
              className="rounded text-primary focus:ring-0 cursor-pointer"
            />
            <span>{t('dictation.practice.chkRepeat')}</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={autoScroll}
              onChange={(e) => setAutoScroll(e.target.checked)}
              className="rounded text-primary focus:ring-0 cursor-pointer"
            />
            <span>{t('dictation.practice.chkAutoScroll')}</span>
          </label>
        </div>
      </div>

      {/* 2. Scrollable Sentence List */}
      <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
        {sentences.map((sentence, idx) => {
          const isActive = idx === currentIndex;

          return (
            <div
              key={sentence.id}
              className={`w-full text-left group flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl border transition-all ${
                isActive
                  ? 'bg-blue-50/90 dark:bg-slate-800 border-primary/40 dark:border-sky-500 shadow-sm'
                  : 'bg-white dark:bg-slate-900/60 border-slate-200/70 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300'
              }`}
            >
              {/* Play Button Icon */}
              <button
                type="button"
                onClick={() => {
                  if (isActive) {
                    onTogglePlay();
                  } else {
                    onSelectSentence(idx);
                  }
                }}
                className={`h-8 w-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white dark:bg-sky-500 dark:text-slate-950 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-sky-500 dark:group-hover:text-slate-950'
                }`}
                title={isActive && isPlaying ? 'Pause' : 'Play'}
              >
                {isActive && isPlaying ? (
                  <Pause size={14} className="fill-current" />
                ) : (
                  <Play size={14} className="fill-current ml-0.5" />
                )}
              </button>

              {/* Text & Translation */}
              <button
                type="button"
                onClick={() => onSelectSentence(idx)}
                className="space-y-1 min-w-0 flex-1 text-left bg-transparent border-0 p-0 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold font-mono px-1.5 py-0.2 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    #{idx + 1}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {sentence.startTime} - {sentence.endTime}
                  </span>
                </div>

                <p className={`text-sm sm:text-[15px] leading-relaxed transition-colors ${
                  isActive
                    ? 'font-bold text-primary dark:text-sky-300'
                    : 'font-medium text-slate-800 dark:text-slate-200'
                }`}>
                  {sentence.text}
                </p>

                {showTranslation && sentence.translation && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed pt-0.5">
                    {sentence.translation}
                  </p>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* 3. Bottom Hotkey Guide */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <span>{t('dictation.practice.hotkeySpace')}</span>
        <span>{t('dictation.practice.hotkeyArrows')}</span>
      </div>
    </div>
  );
};
