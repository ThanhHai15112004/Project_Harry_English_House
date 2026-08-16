import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  X,
  Phone,
  Mail,
  Headphones,
} from 'lucide-react';
import { APP_INFO } from '@/core';

/**
 * Custom SVG Icon for Facebook
 */
const FacebookIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

/**
 * Custom SVG Icon for Threads
 */
const ThreadsIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.186 24C5.467 24 0 18.533 0 11.814 0 5.096 5.467 0 12.186 0c6.64 0 12.07 5.253 12.184 11.889v.111c0 .61-.5 1.11-1.11 1.11s-1.11-.5-1.11-1.11C22.036 5.986 17.525 1.5 12.186 1.5 6.294 1.5 1.5 6.294 1.5 12.186c0 5.892 4.794 10.686 10.686 10.686 4.475 0 8.44-2.768 9.948-6.945.207-.574.839-.877 1.413-.67.574.207.877.839.67 1.413C22.428 21.362 17.618 24 12.186 24zm4.845-12.721c-.244-.135-.555-.054-.69.19-.344.622-.813 1.162-1.396 1.584-.582.423-1.258.647-1.982.647-1.748 0-3.17-1.422-3.17-3.17s1.422-3.17 3.17-3.17c1.396 0 2.593.914 3.003 2.228.183.585.801.916 1.386.733.585-.183.916-.801.733-1.386C17.378 6.444 15.02 4.886 12.963 4.886c-3.125 0-5.666 2.541-5.666 5.666s2.541 5.666 5.666 5.666c1.312 0 2.535-.444 3.522-1.244.757-.613 1.353-1.4 1.736-2.288.135-.244.054-.555-.19-.69z" />
  </svg>
);

/**
 * Custom SVG Icon for Zalo
 */
const ZaloIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.5 5.42 3.84 7.02-.17 1.25-.8 2.86-1.58 3.89-.14.19-.04.46.18.52.4.11 1.63.15 3.32-.73 1.36.35 2.8.55 4.24.55 5.52 0 10-4.03 10-9S17.52 2 12 2zm1.2 12.8h-4.4c-.44 0-.8-.36-.8-.8s.36-.8.8-.8h2.8l-3.2-4.1c-.2-.26-.18-.63.05-.86.23-.23.6-.25.86-.05l3.9 5.01V8.8c0-.44.36-.8.8-.8s.8.36.8.8v5.2c0 .44-.36.8-.8.8z" />
  </svg>
);

/**
 * Custom SVG Icon for Instagram
 */
const InstagramIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

/**
 * Custom SVG Icon for LinkedIn
 */
const LinkedinIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.37 9.74V9.93H5.1v8.57h2.73z" />
  </svg>
);

/**
 * FloatingContact Speed-Dial Widget (Compact, High Contrast, Modern Support Icon)
 */
export const FloatingContact = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const contactChannels = [
    {
      id: 'facebook',
      label: t('floatingContact.facebook'),
      url: APP_INFO.SOCIAL_LINKS.FACEBOOK_FANPAGE,
      icon: <FacebookIcon size={20} />,
      bg: 'bg-[#1877F2] text-white hover:bg-[#166fe5] shadow-blue-500/30',
    },
    {
      id: 'zalo',
      label: t('floatingContact.zalo', { phone: APP_INFO.CONTACT.HOTLINE_DISPLAY }),
      url: `https://zalo.me/${APP_INFO.CONTACT.HOTLINE_RAW}`,
      icon: <ZaloIcon size={20} />,
      bg: 'bg-[#0068FF] text-white hover:bg-[#0054cc] shadow-blue-600/30',
    },
    {
      id: 'phone',
      label: t('floatingContact.phone', { phone: APP_INFO.CONTACT.HOTLINE_DISPLAY }),
      url: `tel:${APP_INFO.CONTACT.HOTLINE_RAW}`,
      icon: <Phone size={19} />,
      bg: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/30',
    },
    {
      id: 'instagram',
      label: t('floatingContact.instagram'),
      url: APP_INFO.SOCIAL_LINKS.INSTAGRAM,
      icon: <InstagramIcon size={19} />,
      bg: 'bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:opacity-95 shadow-pink-500/30',
    },
    {
      id: 'threads',
      label: t('floatingContact.threads'),
      url: APP_INFO.SOCIAL_LINKS.THREADS,
      icon: <ThreadsIcon size={18} />,
      bg: 'bg-neutral-900 text-white hover:bg-black ring-1 ring-white/30 shadow-slate-900/40',
    },
    {
      id: 'linkedin',
      label: t('floatingContact.linkedin'),
      url: APP_INFO.SOCIAL_LINKS.LINKEDIN,
      icon: <LinkedinIcon size={18} />,
      bg: 'bg-[#0A66C2] text-white hover:bg-[#084e96] shadow-blue-700/30',
    },
    {
      id: 'email',
      label: t('floatingContact.email'),
      url: `mailto:${APP_INFO.CONTACT.EMAIL}`,
      icon: <Mail size={18} />,
      bg: 'bg-[#EA4335] text-white hover:bg-[#d33828] shadow-red-500/30',
    },
  ];

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none"
    >
      {/* Speed Dial Menu Items */}
      <div
        className={`flex flex-col items-end gap-2.5 mb-3 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        {contactChannels.map((channel, index) => (
          <a
            key={channel.id}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 group/item transition-all duration-200 hover:-translate-x-1.5 cursor-pointer"
            style={{
              transitionDelay: isOpen ? `${index * 25}ms` : '0ms',
            }}
          >
            {/* Compact Tooltip Label */}
            <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 shadow-lg text-right hidden sm:block">
              <span className="text-xs font-bold text-white whitespace-nowrap block">
                {channel.label}
              </span>
            </div>

            {/* Circular Channel Action Button */}
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center ring-2 ring-white/90 shadow-xl transition-all duration-200 group-hover/item:scale-110 active:scale-95 ${channel.bg}`}
              title={channel.label}
            >
              {channel.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Main Floating Trigger Button with Pulsing Customer Support Icon */}
      <div className="relative pointer-events-auto">
        {/* Radiating Ripple Glow Animation */}
        {!isOpen && (
          <>
            <span className="absolute -inset-1 rounded-full bg-blue-500/40 animate-ping pointer-events-none" />
            <span className="absolute -inset-2.5 rounded-full bg-blue-400/25 animate-pulse pointer-events-none" />
          </>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t('floatingContact.buttonAria')}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl ring-2 ring-white transition-all duration-300 group cursor-pointer ${
            isOpen
              ? 'bg-slate-900 text-white rotate-90 scale-100 shadow-slate-900/40'
              : 'bg-gradient-to-tr from-[#15419A] via-[#1E56C8] to-[#2563EB] text-white hover:scale-105 active:scale-95 shadow-blue-600/50'
          }`}
        >
          {isOpen ? (
            <X size={26} className="transition-transform" />
          ) : (
            <div className="flex items-center justify-center">
              <Headphones size={24} className="group-hover:scale-110 transition-transform" />
              {/* Online Indicator Green Dot */}
              <span className="absolute top-2.5 right-2.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full shadow-xs" />
            </div>
          )}
        </button>

        {/* Small floating helper badge when closed */}
        {!isOpen && (
          <div className="absolute -top-2.5 -left-16 pointer-events-none hidden sm:block animate-bounce">
            <span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-bold text-[10px] shadow-lg border border-white whitespace-nowrap">
              {t('floatingContact.badge')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingContact;
