import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/core';

export const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const lightLabel = isEn ? 'Switch to Light Mode' : 'Chuyển sang giao diện sáng';
  const darkLabel = isEn ? 'Switch to Dark Mode' : 'Chuyển sang giao diện tối';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 dark:border-slate-700 shadow-2xs hover:shadow-sm hover:scale-105 active:scale-95 transition-all p-0 flex items-center justify-center bg-white dark:bg-slate-800 text-slate-700 dark:text-amber-400 cursor-pointer relative overflow-hidden group ${className}`}
      aria-label={isDark ? lightLabel : darkLabel}
      title={isDark ? lightLabel : darkLabel}
    >
      <div className="relative w-4 h-4 sm:w-[18px] sm:h-[18px] flex items-center justify-center">
        {isDark ? (
          <Sun className="w-full h-full text-amber-400 group-hover:rotate-45 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
        ) : (
          <Moon className="w-full h-full text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
