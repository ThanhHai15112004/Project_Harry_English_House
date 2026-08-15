import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { LANGUAGE_OPTIONS } from '@/core';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLang = i18n.language || 'vi';

  const currentOption =
    LANGUAGE_OPTIONS.find((opt) => currentLang.startsWith(opt.code)) || LANGUAGE_OPTIONS[0];

  const handleSelectLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      {/* Nút hình tròn chứa lá cờ */}
      <button
        type="button"
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-sm hover:scale-105 active:scale-95 transition-all p-0 flex items-center justify-center bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chọn ngôn ngữ / Select language"
        title={currentOption.label}
      >
        <img
          src={currentOption.flagIcon}
          alt={currentOption.label}
          className="w-full h-full object-cover rounded-full"
        />
      </button>

      {/* Dropdown danh sách ngôn ngữ */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl p-1.5 shadow-xl border border-slate-200 z-50 animate-fadeIn space-y-1">
          <div className="px-2.5 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            {currentLang.startsWith('vi') ? 'Ngôn ngữ' : 'Language'}
          </div>
          {LANGUAGE_OPTIONS.map((opt) => {
            const isActive = currentLang.startsWith(opt.code);
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => handleSelectLanguage(opt.code)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-blue-50 text-primary border border-blue-100 shadow-2xs'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src={opt.flagIcon}
                    alt={opt.label}
                    className="w-5 h-5 rounded-full object-cover border border-slate-200/80 shadow-2xs flex-shrink-0"
                  />
                  <span>{opt.label}</span>
                </div>
                {isActive && <Check size={15} className="text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

