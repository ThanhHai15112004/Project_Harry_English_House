import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff, Volume2, Radio } from 'lucide-react';

export const PracticePlayer = ({ mediaType, youtubeId, currentSentence, isPlaying }) => {
  const { t } = useTranslation();
  const [videoSize, setVideoSize] = useState('normal'); // 'normal' | 'large'
  const [hideVideo, setHideVideo] = useState(false);

  const isLarge = videoSize === 'large';
  const playerHeightClass = isLarge ? 'aspect-[16/10] sm:h-96' : 'aspect-video sm:h-72';

  const renderVideoContent = () => {
    if (hideVideo) {
      return (
        <div className="h-64 sm:h-72 w-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white space-y-4">
          <div className="h-16 w-16 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400 animate-pulse">
            <Radio size={32} />
          </div>
          <div>
            <p className="text-base font-bold text-white">{t('dictation.practice.audioOnlyMode')}</p>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              {t('dictation.practice.audioOnlyDesc')}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setHideVideo(false)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            <Eye size={14} />
            <span>{t('dictation.practice.showVideo')}</span>
          </button>
        </div>
      );
    }

    return (
      <div className={`relative w-full transition-all duration-300 ${playerHeightClass}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId || 'VzpHyWq_g6A'}?enablejsapi=1&rel=0`}
          title="Dictation Video Player"
          className="w-full h-full object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };

  const renderAudioContent = () => {
    const waveHeights = [40, 65, 30, 85, 95, 45, 70, 100, 60, 40, 80, 50, 90, 30, 75, 60, 45, 85, 95, 35, 60, 40];

    return (
      <div className="p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white flex flex-col justify-between h-64 sm:h-72">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 text-sky-400 text-xs font-bold">
            <Volume2 size={15} />
            <span>{t('dictation.practice.audioExercise')}</span>
          </div>
          <span className="text-xs text-slate-400 font-mono">0:09 / 02:15</span>
        </div>

        {/* Audio Waveform */}
        <div className="flex items-center justify-center gap-1.5 h-20 px-4">
          {waveHeights.map((h, i) => {
            const isBarActive = isPlaying || i < 10;
            return (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className={`w-1.5 rounded-full transition-all ${
                  isBarActive ? 'bg-sky-400' : 'bg-slate-700'
                } ${isPlaying ? 'animate-pulse' : ''}`}
              />
            );
          })}
        </div>

        {/* Audio Progress */}
        <div className="space-y-2">
          <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sky-400 to-blue-500 w-[35%] rounded-full" />
          </div>
          <p className="text-xs text-center text-slate-400 font-medium italic truncate">
            "{currentSentence?.text || t('dictation.practice.listenCarefully')}"
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-3">
      {/* Main Media Container */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-md">
        {mediaType === 'youtube' ? renderVideoContent() : renderAudioContent()}
      </div>

      {/* Media Options Bar (Video Size & Hide Video) */}
      {mediaType === 'youtube' && (
        <div className="flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 dark:text-slate-400 font-semibold">{t('dictation.practice.videoSize')}</span>
            <select
              value={videoSize}
              onChange={(e) => setVideoSize(e.target.value)}
              className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <option value="normal">{t('dictation.practice.videoSizeNormal')}</option>
              <option value="large">{t('dictation.practice.videoSizeLarge')}</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => setHideVideo(!hideVideo)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 font-bold transition-colors cursor-pointer"
          >
            {hideVideo ? <Eye size={14} /> : <EyeOff size={14} />}
            <span>{hideVideo ? t('dictation.practice.showVideo') : t('dictation.practice.hideVideo')}</span>
          </button>
        </div>
      )}
    </div>
  );
};
