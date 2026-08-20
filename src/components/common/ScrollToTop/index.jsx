import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { lenisScrollToTop, getLenis } from '@/core';

/**
 * ScrollToTop Component
 * 1. Automatically scrolls to top (Y = 0) on every route transition.
 * 2. Synchronized with Lenis smooth scrolling engine and anchor hash offsets.
 * 3. Renders an interactive Floating Back-To-Top Button above FloatingContact.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Handle route change scroll reset & anchor hash
  useEffect(() => {
    // 1. Purge unwanted #hero hash immediately and scroll to top
    if (hash === '#hero') {
      window.history.replaceState(null, '', pathname);
      lenisScrollToTop(true);
      return;
    }

    // 2. If target hash is specified (e.g. #roadmap, #classes), scroll to element
    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        const lenis = getLenis();

        if (element) {
          if (lenis) {
            lenis.scrollTo(element, { offset: -80, duration: 1.2 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 120);

      return () => clearTimeout(timer);
    }

    // 3. Default behavior: Reset scroll to absolute top immediately on page change
    lenisScrollToTop(true);
  }, [pathname, hash]);

  // Handle visibility of the Floating Scroll-To-Top button (Native + Lenis scroll listener)
  useEffect(() => {
    const checkScrollPosition = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;
      setShowButton(currentScroll > 250);
    };

    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    
    // Check if Lenis is initialized and attach listener
    const lenis = getLenis();
    if (lenis) {
      lenis.on('scroll', checkScrollPosition);
    }

    checkScrollPosition();

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      if (lenis) {
        lenis.off('scroll', checkScrollPosition);
      }
    };
  }, [pathname]);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    lenisScrollToTop(false);
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label={t('common.scrollToTop', 'Cuộn lên đầu trang')}
      title={t('common.scrollToTop', 'Cuộn lên đầu trang')}
      className={`fixed bottom-24 right-7 z-40 w-11 h-11 rounded-full bg-slate-900/90 backdrop-blur-md text-white flex items-center justify-center shadow-xl hover:bg-primary hover:ring-2 hover:ring-primary/40 transition-all duration-300 group cursor-pointer border border-white/20 ${
        showButton
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <ArrowUp size={20} className="transition-colors" />
    </button>
  );
};

export default ScrollToTop;
