import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Eye,
  EyeOff,
  Volume2,
  Radio,
  RotateCcw,
  Gauge,
  ExternalLink,
} from 'lucide-react';

export const PracticePlayer = ({
  mediaType = 'youtube',
  youtubeId,
  currentSentence,
  isPlaying,
  onPlayStateChange,
  hasStarted,
  onStart,
  playTrigger,
  activeTab = 'dictation',
  repeatSentence = false,
  playbackRate = 1,
  onPlaybackRateChange,
  onTimeUpdate,
  seekTime = null,
}) => {
  const { t } = useTranslation();
  const [videoSize, setVideoSize] = useState('normal'); // 'normal' | 'large'
  const [hideVideo, setHideVideo] = useState(false);

  const iframeRef = useRef(null);
  const audioRef = useRef(null);
  const isLarge = videoSize === 'large';
  const playerHeightClass = isLarge ? 'aspect-[16/10] sm:h-96' : 'aspect-video sm:h-72';

  // Helper to send postMessage commands to YouTube IFrame
  const sendYouTubeCommand = useCallback((func, args = []) => {
    if (iframeRef.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func, args }),
          '*'
        );
      } catch {
        // Ignore postMessage errors
      }
    }
  }, []);

  // Handshake when iframe loads
  const handleIframeLoad = useCallback(() => {
    if (iframeRef.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'listening' }),
          '*'
        );
        sendYouTubeCommand('setPlaybackRate', [playbackRate]);
      } catch {
        // Ignore
      }
    }
  }, [playbackRate, sendYouTubeCommand]);

  // Play current sentence segment
  const playCurrentSentence = useCallback(() => {
    if (mediaType === 'youtube') {
      if (!youtubeId || !currentSentence) return;
      const startTime = currentSentence.startTime || 0;
      sendYouTubeCommand('seekTo', [startTime, true]);
      sendYouTubeCommand('playVideo');
      sendYouTubeCommand('setPlaybackRate', [playbackRate]);
      onPlayStateChange?.(true);
    } else if (mediaType === 'audio' && audioRef.current) {
      if (currentSentence) {
        audioRef.current.currentTime = currentSentence.startTime || 0;
      }
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.play().catch(() => {});
      onPlayStateChange?.(true);
    }
  }, [mediaType, youtubeId, currentSentence, playbackRate, sendYouTubeCommand, onPlayStateChange]);

  // Pause playback
  const pauseCurrentSentence = useCallback(() => {
    if (mediaType === 'youtube') {
      sendYouTubeCommand('pauseVideo');
      onPlayStateChange?.(false);
    } else if (mediaType === 'audio' && audioRef.current) {
      audioRef.current.pause();
      onPlayStateChange?.(false);
    }
  }, [mediaType, sendYouTubeCommand, onPlayStateChange]);

  // Handle external seek requests
  useEffect(() => {
    if (seekTime !== null && typeof seekTime === 'number') {
      if (mediaType === 'youtube') {
        sendYouTubeCommand('seekTo', [seekTime, true]);
      } else if (mediaType === 'audio' && audioRef.current) {
        audioRef.current.currentTime = seekTime;
      }
    }
  }, [seekTime, mediaType, sendYouTubeCommand]);

  // Trigger playback when sentence changes (only if already started)
  useEffect(() => {
    if (hasStarted && currentSentence) {
      const timer = setTimeout(() => {
        playCurrentSentence();
      }, 150);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [currentSentence?.id, hasStarted, playCurrentSentence]);

  // Trigger playback on external playTrigger change (e.g. clicking Play button on DictationTab)
  useEffect(() => {
    if (hasStarted && playTrigger) {
      if (isPlaying) {
        playCurrentSentence();
      } else {
        pauseCurrentSentence();
      }
    }
  }, [playTrigger, isPlaying, hasStarted, playCurrentSentence, pauseCurrentSentence]);

  // Sync playback rate with YouTube
  useEffect(() => {
    if (mediaType === 'youtube') {
      sendYouTubeCommand('setPlaybackRate', [playbackRate]);
    } else if (mediaType === 'audio' && audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate, mediaType, sendYouTubeCommand]);

  // High-frequency polling for YouTube currentTime & state sync
  useEffect(() => {
    if (mediaType !== 'youtube') return undefined;

    // Send initial handshake ping
    sendYouTubeCommand('listening');

    const interval = setInterval(() => {
      sendYouTubeCommand('getCurrentTime');
    }, 150);

    return () => clearInterval(interval);
  }, [mediaType, sendYouTubeCommand]);

  // Listen to messages from YouTube iframe
  useEffect(() => {
    if (mediaType !== 'youtube') return undefined;

    const handleWindowMessage = (event) => {
      try {
        if (typeof event.data === 'string') {
          const data = JSON.parse(event.data);

          // State changes from YouTube player
          if (data.event === 'onStateChange') {
            if (data.info === 1) {
              // Playing
              onPlayStateChange?.(true);
              if (!hasStarted) onStart?.();
            } else if (data.info === 2 || data.info === 0) {
              // Paused or Ended
              onPlayStateChange?.(false);
            }
          }

          // Real-time time & state delivery
          if (data.event === 'infoDelivery' && data.info) {
            if (typeof data.info.currentTime === 'number') {
              onTimeUpdate?.(data.info.currentTime);
            }
            if (typeof data.info.playerState === 'number') {
              if (data.info.playerState === 1) {
                onPlayStateChange?.(true);
                if (!hasStarted) onStart?.();
              } else if (data.info.playerState === 2 || data.info.playerState === 0) {
                onPlayStateChange?.(false);
              }
            }
          } else if (typeof data.info === 'number') {
            onTimeUpdate?.(data.info);
          }
        }
      } catch {
        // Ignore non-json messages
      }
    };

    window.addEventListener('message', handleWindowMessage);
    return () => window.removeEventListener('message', handleWindowMessage);
  }, [mediaType, hasStarted, onPlayStateChange, onStart, onTimeUpdate]);

  // Handle Playback Rate click
  const handleRateChange = (rate) => {
    onPlaybackRateChange?.(rate);
  };

  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?enablejsapi=1&playsinline=1&rel=0&autoplay=0${
    origin ? `&origin=${encodeURIComponent(origin)}` : ''
  }`;

  const renderVideoContent = () => {
    return (
      <div className={`relative w-full transition-all duration-300 ${playerHeightClass} overflow-hidden rounded-3xl bg-slate-950`}>
        {/* Always mounted iframe so audio and state are preserved uninterrupted */}
        <iframe
          ref={iframeRef}
          onLoad={handleIframeLoad}
          src={embedUrl}
          title="YouTube Dictation Player"
          className="w-full h-full object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* Visual Audio-Only Overlay when video is hidden */}
        {hideVideo && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white space-y-4 animate-fadeIn">
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
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all hover:scale-105 cursor-pointer shadow-sm"
            >
              <Eye size={14} />
              <span>{t('dictation.practice.showVideo')}</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderAudioContent = () => {
    const waveHeights = [40, 65, 30, 85, 95, 45, 70, 100, 60, 40, 80, 50, 90, 30, 75, 60, 45, 85, 95, 35, 60, 40];

    return (
      <div className="p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white flex flex-col justify-between h-64 sm:h-72 rounded-3xl">
        <audio
          ref={audioRef}
          onTimeUpdate={(e) => onTimeUpdate?.(e.target.currentTime)}
          onPlay={() => onPlayStateChange?.(true)}
          onPause={() => onPlayStateChange?.(false)}
          onEnded={() => onPlayStateChange?.(false)}
        />
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 text-sky-400 text-xs font-bold">
            <Volume2 size={15} />
            <span>{t('dictation.practice.audioExercise')}</span>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {currentSentence ? `${currentSentence.startTime}s - ${currentSentence.endTime}s` : '00:00'}
          </span>
        </div>

        {/* Audio Waveform */}
        <div className="flex items-center justify-center gap-1.5 h-20 px-4">
          {waveHeights.map((h, i) => {
            const isBarActive = isPlaying || i < 10;
            return (
              <span
                key={`wave-${i}`}
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
            <div className="h-full bg-gradient-to-r from-sky-400 to-blue-500 w-[45%] rounded-full" />
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

      {/* Media Options Bar (Video Size, Replay, Speed, Open on YouTube & Hide Video) */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs p-1">
        {/* Left Quick Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (!hasStarted) {
                onStart?.();
              }
              playCurrentSentence();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-white hover:bg-blue-700 active:scale-95 font-bold transition-all shadow-xs cursor-pointer"
            title={t('dictation.practice.replayTooltip')}
          >
            <RotateCcw size={13} />
            <span>{t('dictation.practice.btnReplay')}</span>
          </button>

          {/* Speed Selector */}
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 px-2 py-1 rounded-xl border border-slate-200 dark:border-slate-700">
            <Gauge size={13} className="text-slate-400" />
            {[0.75, 1, 1.25].map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => handleRateChange(rate)}
                className={`px-1.5 py-0.5 rounded-md font-bold text-[11px] transition-colors cursor-pointer ${
                  playbackRate === rate
                    ? 'bg-blue-100 text-primary dark:bg-sky-950 dark:text-sky-300'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>

        {/* Right Layout & View Controls */}
        {mediaType === 'youtube' && (
          <div className="flex items-center gap-2.5">
            {/* Open on YouTube link */}
            <a
              href={`https://www.youtube.com/watch?v=${youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-sky-400 font-semibold transition-colors"
              title={t('dictation.practice.openOnYouTube')}
            >
              <ExternalLink size={13} />
              <span className="hidden sm:inline">YouTube</span>
            </a>

            <div className="flex items-center gap-1.5">
              <span className="text-slate-500 dark:text-slate-400 font-semibold">{t('dictation.practice.videoSize')}</span>
              <select
                value={videoSize}
                onChange={(e) => setVideoSize(e.target.value)}
                className="px-2 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
              >
                <option value="normal">{t('dictation.practice.videoSizeNormal')}</option>
                <option value="large">{t('dictation.practice.videoSizeLarge')}</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => setHideVideo(!hideVideo)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 font-bold transition-colors cursor-pointer"
            >
              {hideVideo ? <Eye size={13} /> : <EyeOff size={13} />}
              <span>{hideVideo ? t('dictation.practice.showVideo') : t('dictation.practice.hideVideo')}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticePlayer;
