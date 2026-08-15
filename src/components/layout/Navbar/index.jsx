import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { NAV_ITEMS, APP_INFO, SECTION_IDS } from '@/core';
import { Button, LanguageSwitcher } from '@/components/common';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="app-container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-sky-500 flex items-center justify-center text-white font-heading font-black text-lg shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
            {APP_INFO.SHORT_NAME}
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
              {APP_INFO.NAME}
            </span>
            <span className="text-xs font-semibold text-blue-600 flex items-center gap-1">
              <Sparkles size={11} className="text-amber-500" /> {APP_INFO.FOUNDER.NAME}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              {t(link.i18nKey)}
            </a>
          ))}
        </nav>

        {/* Action Controls & Switcher */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <a href={`#${SECTION_IDS.CONTACT}`} className="hidden sm:inline-flex">
            <Button size="sm" variant="primary" icon={<Phone size={14} />}>
              {t('nav.ctaBtn')}
            </Button>
          </a>

          <button
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-semibold text-slate-800 py-2 border-b border-slate-100 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(link.i18nKey)}
              </a>
            ))}
            <div className="pt-3">
              <a href={`#${SECTION_IDS.CONTACT}`} onClick={() => setMobileMenuOpen(false)}>
                <Button fullWidth size="md" variant="primary" icon={<Phone size={16} />}>
                  {t('nav.ctaBtn')}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
