import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Pause, Languages, Repeat } from 'lucide-react';

export const TranscriptTab = ({
  sentences = [],
  currentIndex = 0,
  onSelectSentence,
  isPlaying = false,
  onTogglePlay,
  repeatSentence = false,
  onRepeatChange,
}) => {
  const { t } = useTranslation();
  const [showTranslation, setShowTranslation] = useState(true);
  const [autoScroll, setAutoScroll] = useState(true);

  const containerRef = useRef(null);
  const itemRefs = useRef({});

  // Auto-scroll smooth centering to active sentence when currentIndex changes
  useEffect(() => {
    if (autoScroll && containerRef.current && itemRefs.current[currentIndex]) {
      const container = containerRef.current;
      const item = itemRefs.current[currentIndex];
      
      const itemOffsetTop = item.offsetTop - container.offsetTop;
      const targetScrollTop = itemOffsetTop - (container.clientHeight / 2) + (item.clientHeight / 2);

      container.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: 'smooth',
      });
    }
  }, [currentIndex, autoScroll]);

  // Handle native mouse wheel events so scrolling inside transcript never leaks to window
  const handleWheel = useCallback((e) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const { scrollTop, scrollHeight, clientHeight } = container;

    const canScrollUp = e.deltaY < 0 && scrollTop > 0;
    const canScrollDown = e.deltaY > 0 && scrollTop + clientHeight < scrollHeight - 1;

    if (canScrollUp || canScrollDown) {
      container.scrollTop += e.deltaY;
      e.stopPropagation();
      e.preventDefault();
    }
  }, []);

  // Attach non-passive wheel listener to allow e.preventDefault()
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

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
          <label className="flex items-center gap-1.5 cursor-pointer select-none group">
            <input
              type="checkbox"
              checked={repeatSentence}
              onChange={(e) => onRepeatChange?.(e.target.checked)}
              className="rounded text-primary focus:ring-0 cursor-pointer"
            />
            <span className="group-hover:text-primary dark:group-hover:text-sky-400 transition-colors">
              {t('dictation.practice.chkRepeat')}
            </span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer select-none group">
            <input
              type="checkbox"
              checked={autoScroll}
              onChange={(e) => setAutoScroll(e.target.checked)}
              className="rounded text-primary focus:ring-0 cursor-pointer"
            />
            <span className="group-hover:text-primary dark:group-hover:text-sky-400 transition-colors">
              {t('dictation.practice.chkAutoScroll')}
            </span>
          </label>
        </div>
      </div>

      {/* 2. Scrollable Sentence List Container */}
      <section
        ref={containerRef}
        aria-label="Danh sách câu thoại Transcript"
        className="space-y-2.5 max-h-[480px] h-[480px] overflow-y-auto overscroll-y-contain pr-1.5 focus:outline-none select-text"
        style={{ scrollbarWidth: 'thin' }}
      >
        {sentences.map((sentence, idx) => {
          const isActive = idx === currentIndex;

          return (
            <div
              key={sentence.id || `sent-${idx}`}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              role="button"
              tabIndex={0}
              onClick={() => onSelectSentence(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectSentence(idx);
                }
              }}
              className={`w-full text-left group flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-50/90 dark:bg-slate-800/90 border-primary/50 dark:border-sky-500 shadow-md ring-1 ring-primary/20 dark:ring-sky-400/20'
                  : 'bg-white dark:bg-slate-900/60 border-slate-200/70 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300'
              }`}
            >
              {/* Play Button Icon */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (isActive) {
                    onTogglePlay();
                  } else {
                    onSelectSentence(idx);
                  }
                }}
                className={`h-8 w-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white dark:bg-sky-500 dark:text-slate-950 shadow-xs scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-sky-500 dark:group-hover:text-slate-950'
                }`}
                title={isActive && isPlaying ? t('dictation.practice.pauseTooltip') : t('dictation.practice.playTooltip')}
              >
                {isActive && isPlaying ? (
                  <Pause size={14} className="fill-current" />
                ) : (
                  <Play size={14} className="fill-current ml-0.5" />
                )}
              </button>

              {/* Text & Translation */}
              <div className="space-y-1 min-w-0 flex-1 text-left select-text">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-blue-200 text-blue-800 dark:bg-sky-950 dark:text-sky-300 font-black'
                        : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    #{idx + 1}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {sentence.startTime}s - {sentence.endTime}s
                  </span>
                  {isActive && repeatSentence && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.2 rounded border border-amber-200 dark:border-amber-800">
                      <Repeat size={10} />
                      <span>{t('dictation.practice.chkRepeat')}</span>
                    </span>
                  )}
                </div>

                <p
                  className={`text-sm sm:text-[15px] leading-relaxed transition-colors ${
                    isActive
                      ? 'font-bold text-primary dark:text-sky-300'
                      : 'font-medium text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {sentence.text}
                </p>

                {showTranslation && sentence.translation && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed pt-0.5">
                    {sentence.translation}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Bottom Hotkey Guide */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <span className="font-medium">{t('dictation.practice.hotkeyGuide1')}</span>
        <span className="font-medium">{t('dictation.practice.hotkeyGuide2')}</span>
      </div>
    </div>
  );
};

export default TranscriptTab;
