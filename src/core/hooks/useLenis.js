import { useEffect } from 'react';
import Lenis from 'lenis';

let globalLenisInstance = null;

/**
 * Get current active Lenis instance
 */
export const getLenis = () => globalLenisInstance;

/**
 * Scroll to top helper supporting Lenis
 */
export const lenisScrollToTop = (immediate = true) => {
  if (globalLenisInstance) {
    if (immediate) {
      globalLenisInstance.scrollTo(0, { immediate: true });
    } else {
      globalLenisInstance.scrollTo(0, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    }
  }

  try {
    window.scrollTo({ top: 0, left: 0, behavior: immediate ? 'instant' : 'smooth' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: immediate ? 'instant' : 'smooth' });
    document.body.scrollTo({ top: 0, left: 0, behavior: immediate ? 'instant' : 'smooth' });
  } catch {
    window.scrollTo(0, 0);
  }
};

/**
 * Hook to initialize Lenis Smooth Scrolling automatically
 */
export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    globalLenisInstance = lenis;
    window.__lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      globalLenisInstance = null;
      window.__lenis = null;
    };
  }, []);
};

export default useLenis;

