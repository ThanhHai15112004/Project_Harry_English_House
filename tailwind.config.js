import { THEME_COLORS, THEME_FONTS } from './src/core/constants/theme.constants.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nhận trực tiếp từ Single Source of Truth (theme.constants.js)
        academic: {
          white: THEME_COLORS.BG_MAIN,
          'soft-white': THEME_COLORS.BG_ALT,
          surface: THEME_COLORS.BG_SURFACE,
          'light-blue': THEME_COLORS.BG_LIGHT_PRIMARY,
          heading: THEME_COLORS.TEXT_HEADING,
          body: THEME_COLORS.TEXT_BODY,
          muted: THEME_COLORS.TEXT_MUTED,
          primary: THEME_COLORS.PRIMARY,
          cta: THEME_COLORS.CTA,
          'cta-hover': THEME_COLORS.CTA_HOVER,
          sky: THEME_COLORS.SKY_ACCENT,
          'sky-light': THEME_COLORS.SKY_LIGHT,
          gold: THEME_COLORS.ACHIEVEMENT,
          'gold-light': THEME_COLORS.ACHIEVEMENT_LIGHT,
          border: THEME_COLORS.BORDER,
        },
        primary: {
          DEFAULT: THEME_COLORS.PRIMARY,
          light: THEME_COLORS.BG_LIGHT_PRIMARY,
          hover: THEME_COLORS.ACADEMIC_NAVY,
        },
        cta: {
          DEFAULT: THEME_COLORS.CTA,
          hover: THEME_COLORS.CTA_HOVER,
        },
        heading: {
          DEFAULT: THEME_COLORS.TEXT_HEADING,
        },
        achievement: {
          DEFAULT: THEME_COLORS.ACHIEVEMENT,
          light: THEME_COLORS.ACHIEVEMENT_LIGHT,
        },
        surface: {
          DEFAULT: THEME_COLORS.BG_SURFACE,
          soft: THEME_COLORS.BG_ALT,
        },
      },
      fontFamily: {
        heading: THEME_FONTS.HEADING,
        sans: THEME_FONTS.SANS,
        lexend: THEME_FONTS.LEXEND,
        body: THEME_FONTS.BODY,
        inter: THEME_FONTS.INTER,
        poppins: THEME_FONTS.POPPINS,
      },
      boxShadow: {
        'glow-primary': `0 0 25px rgba(23, 70, 162, 0.2)`,
        'glow-cta': `0 4px 20px rgba(37, 99, 235, 0.35)`,
        'glow-gold': `0 0 20px rgba(201, 154, 61, 0.25)`,
        'card': '0 4px 20px -2px rgba(16, 35, 63, 0.05), 0 2px 6px -1px rgba(16, 35, 63, 0.02)',
        'card-hover': '0 15px 30px -5px rgba(16, 35, 63, 0.1), 0 6px 12px -2px rgba(16, 35, 63, 0.04)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
