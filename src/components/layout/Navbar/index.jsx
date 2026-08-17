import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  BookOpen,
  Award,
  GraduationCap,
  PhoneCall,
  Phone,
  Sparkles,
  Headphones,
} from 'lucide-react';
import { NAV_ITEMS, APP_INFO, ROUTES } from '@/core';
import { LanguageSwitcher, ThemeToggle, Button } from '@/components/common';
import logoImg from '@/assets/logo/logo-main.jpg';

export const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cuộn mượt lên đầu trang khi bấm vào logo hoặc Trang chủ (nếu đang ở trang chủ)
  const handleHomeClick = () => {
    if (location.pathname === ROUTES.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Kiểm tra trạng thái đang kích hoạt (active) của menu
  const isItemActive = (item) => {
    if (item.path === ROUTES.HOME) {
      return location.pathname === ROUTES.HOME;
    }
    return location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
  };

  // Icon mapping cho các mục điều hướng trên mobile
  const getNavIcon = (id) => {
    switch (id) {
      case 'home':
        return <Home size={18} className="text-primary dark:text-sky-400" />;
      case 'dictation':
        return <Headphones size={18} className="text-primary dark:text-sky-400" />;
      case 'programs':
        return <BookOpen size={18} className="text-primary dark:text-sky-400" />;
      case 'results':
        return <Award size={18} className="text-achievement" />;
      case 'founder':
        return <GraduationCap size={18} className="text-primary dark:text-sky-400" />;
      case 'contact':
        return <PhoneCall size={18} className="text-primary dark:text-sky-400" />;
      default:
        return <Sparkles size={18} className="text-primary dark:text-sky-400" />;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0F1D33] transition-all duration-300 ${
          isScrolled
            ? 'shadow-md border-b border-slate-200 dark:border-slate-800 py-2 sm:py-2.5'
            : 'shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="app-container flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            to={ROUTES.HOME}
            onClick={handleHomeClick}
            className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0"
          >
            <img
              src={logoImg}
              alt="Harry English House Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain flex-shrink-0 group-hover:scale-105 transition-transform mix-blend-multiply dark:bg-white dark:rounded-lg dark:p-0.5"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-heading font-black text-base sm:text-xl text-academic-heading dark:text-white tracking-tight group-hover:text-primary dark:group-hover:text-sky-400 transition-colors leading-tight truncate">
                {APP_INFO.BRAND_NAME || APP_INFO.NAME}
              </span>
              <span className="text-[10px] sm:text-xs text-primary dark:text-sky-400 font-bold tracking-wider uppercase leading-tight truncate">
                {t('header.tagline')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item);

              if (item.dropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`px-3.5 py-2 rounded-xl text-[15px] sm:text-base font-bold transition-all flex items-center gap-1.5 ${
                        active
                          ? 'text-primary dark:text-sky-400 bg-academic-light-blue dark:bg-slate-800 shadow-2xs'
                          : 'text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 hover:bg-academic-light-blue/70 dark:hover:bg-slate-800/70'
                      }`}
                    >
                      <span>{t(item.labelKey)}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          dropdownOpen ? 'rotate-180 text-primary dark:text-sky-400' : 'text-slate-500 dark:text-slate-400'
                        }`}
                      />
                    </Link>

                    {/* Desktop Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white dark:bg-slate-900 rounded-2xl p-2 shadow-xl border border-academic-border dark:border-slate-700 space-y-1 animate-fadeIn">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.id}
                            to={sub.path}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 hover:bg-academic-light-blue dark:hover:bg-slate-800 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={item.path === ROUTES.HOME ? handleHomeClick : undefined}
                  className={`px-3.5 py-2 rounded-xl text-[15px] sm:text-base font-bold transition-all ${
                    active
                      ? 'text-primary dark:text-sky-400 bg-academic-light-blue dark:bg-slate-800 shadow-2xs'
                      : 'text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 hover:bg-academic-light-blue/70 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>

          {/* Actions (Theme Toggle + Language Switcher + CTA) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link to={ROUTES.CONTACT}>
              <Button size="md" variant="primary" className="font-bold">
                {t('nav.ctaBtn')}
              </Button>
            </Link>
          </div>

          {/* Mobile Right Bar: Theme Toggle + Language Switcher & Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              type="button"
              className="p-1 text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 transition-colors bg-transparent border-0 shadow-none outline-none flex items-center justify-center cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} className="text-slate-900 dark:text-white" /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xl px-4 pt-3 pb-6 space-y-2.5 rounded-b-3xl z-50 animate-fadeIn max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);

                if (item.dropdown) {
                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 overflow-hidden transition-all shadow-2xs"
                    >
                      <button
                        type="button"
                        className="w-full flex items-center justify-between px-3.5 py-3 text-left font-bold text-[15px] text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 transition-colors bg-transparent cursor-pointer"
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-xl bg-white dark:bg-slate-700 shadow-xs text-primary dark:text-sky-400 flex-shrink-0 border border-slate-100 dark:border-slate-600">
                            {getNavIcon(item.id)}
                          </span>
                          <span className={active ? 'text-primary dark:text-sky-400' : ''}>{t(item.labelKey)}</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                            mobileDropdownOpen ? 'rotate-180 text-primary dark:text-sky-400' : ''
                          }`}
                        />
                      </button>

                      {mobileDropdownOpen && (
                        <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-slate-200/80 dark:border-slate-700/80 bg-slate-100/60 dark:bg-slate-800/80">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.id}
                              to={sub.path}
                              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 hover:bg-blue-50/80 dark:hover:bg-slate-600 border border-slate-200/80 dark:border-slate-600 shadow-2xs transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span>{sub.label}</span>
                              <ChevronRight size={14} className="text-slate-400" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-2xl font-bold text-[15px] transition-all border shadow-2xs ${
                      active
                        ? 'bg-blue-50/90 dark:bg-slate-800 text-primary dark:text-sky-400 border-blue-200 dark:border-slate-700'
                        : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 border-slate-200/90 dark:border-slate-700/80'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-xl bg-white dark:bg-slate-700 shadow-xs text-primary dark:text-sky-400 flex-shrink-0 border border-slate-100 dark:border-slate-600">
                        {getNavIcon(item.id)}
                      </span>
                      <span>{t(item.labelKey)}</span>
                    </div>
                    <ChevronRight size={16} className="text-slate-400" />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Actions & Quick Contact on Mobile */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <Link to={ROUTES.CONTACT} onClick={() => setMobileMenuOpen(false)}>
                <Button fullWidth size="md" variant="primary" className="font-bold py-3 text-[15px] shadow-glow-cta">
                  {t('nav.ctaBtn')}
                </Button>
              </Link>

              <div className="flex items-center justify-between px-1 text-xs">
                <a
                  href={`tel:${APP_INFO.CONTACT.HOTLINE_RAW}`}
                  className="inline-flex items-center gap-1.5 font-bold text-academic-heading dark:text-slate-200 hover:text-primary dark:hover:text-sky-400 transition-colors py-1.5 px-3 rounded-xl bg-blue-50/90 dark:bg-slate-800 border border-blue-100 dark:border-slate-700"
                >
                  <Phone size={13} className="text-primary dark:text-sky-400" />
                  <span>Hotline: {APP_INFO.CONTACT.HOTLINE}</span>
                </a>
                <span className="text-slate-500 dark:text-slate-400 font-semibold">{APP_INFO.CONTACT.HOTLINE_CONTACT_PERSON}</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay when mobile menu is active */}
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile navigation backdrop"
          className="fixed inset-0 w-full h-full bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden animate-fadeIn cursor-default border-none outline-none"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
