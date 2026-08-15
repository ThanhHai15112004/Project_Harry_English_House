import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, APP_INFO, SECTION_IDS } from '@/core';
import { LanguageSwitcher, Button } from '@/components/common';
import logoImg from '@/assets/logo/logo-main.jpg';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-academic-border py-3'
          : 'bg-white/90 backdrop-blur-xs py-4 border-b border-slate-100'
      }`}
    >
      <div className="app-container flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Harry English House Logo"
            className="w-10 h-10 rounded-xl object-cover border border-academic-border shadow-xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base sm:text-lg text-academic-heading tracking-tight group-hover:text-primary transition-colors leading-tight">
              {APP_INFO.BRAND_NAME}
            </span>
            <span className="text-[10px] text-academic-muted font-semibold tracking-wider uppercase">
              {APP_INFO.TAGLINE_VI}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-academic-body hover:text-primary hover:bg-academic-light-blue transition-all"
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        {/* Actions (Language Switcher + CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          <LanguageSwitcher />
          <a href={`#${SECTION_IDS.CONTACT}`}>
            <Button size="sm" variant="primary" icon={<ArrowRight size={14} />}>
              {t('nav.ctaBtn')}
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="p-2 rounded-xl text-academic-body hover:text-academic-heading hover:bg-academic-surface transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-academic-border px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-1.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-3 py-2 rounded-lg text-xs font-semibold text-academic-body hover:text-primary hover:bg-academic-light-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <a href={`#${SECTION_IDS.CONTACT}`} onClick={() => setMobileMenuOpen(false)}>
              <Button fullWidth size="md" variant="primary" icon={<ArrowRight size={16} />}>
                {t('nav.ctaBtn')}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
