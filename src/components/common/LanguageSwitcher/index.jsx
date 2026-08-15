import React from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_OPTIONS } from '@/core';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'vi';

  const currentOption =
    LANGUAGE_OPTIONS.find((opt) => opt.code === currentLang) || LANGUAGE_OPTIONS[0];

  const toggleLanguage = () => {
    const nextLang = currentLang.startsWith('vi') ? 'en' : 'vi';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="inline-flex items-center">
      <button
        type="button"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-white border border-slate-200/80 hover:border-blue-500 text-xs font-bold text-slate-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
        onClick={toggleLanguage}
        title="Đổi ngôn ngữ / Switch language"
      >
        <img
          src={currentOption.flagIcon}
          alt={currentOption.label}
          className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
        />
        <span className="font-heading tracking-wider">{currentOption.shortLabel}</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
