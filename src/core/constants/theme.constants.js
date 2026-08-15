/**
 * Harry English House - Color Palette, Typography & Theme Tokens
 * Style: Modern Academic / Editorial Education
 */

export const THEME_COLORS = {
  // Backgrounds (~70% of UI)
  BG_MAIN: '#FFFFFF',          // Pure White (dùng cho phần lớn homepage)
  BG_ALT: '#F7F9FC',           // Soft White (dùng để chia section)
  BG_SURFACE: '#F1F5F9',       // Cool Surface (dùng cho card nhẹ, input, background phụ)
  BG_LIGHT_PRIMARY: '#EAF2FF', // Light Blue (background highlight, banner nhẹ)

  // Typography & Content
  TEXT_HEADING: '#10233F',     // Deep Academic Navy (headline, header, số liệu, icon, block nhấn)
  TEXT_BODY: '#475569',        // Slate Body Text (văn bản chính, dễ đọc, tương phản chuẩn WCAG)
  TEXT_MUTED: '#64748B',       // Muted Subtext (chú thích, thời lượng, nhãn phụ)
  TEXT_WHITE: '#FFFFFF',

  // Brand Identity
  PRIMARY: '#1746A2',          // Harry Blue / Academic Blue (thương hiệu, uy tín, giáo dục)
  ACADEMIC_NAVY: '#10233F',    // Navy đậm dùng cho branding & headline

  // Interactive & CTA
  CTA: '#2563EB',              // Bright Royal Blue (nút đăng ký, CTA, link, active, hover)
  CTA_HOVER: '#1D4ED8',

  // Accents (5–10% of UI)
  SKY_ACCENT: '#38BDF8',       // Sky Blue (underline, icon, tag, đường nét trang trí)
  SKY_LIGHT: '#E8F5FF',

  // Achievement & Accreditations (Bằng cấp, chứng chỉ, giải thưởng)
  ACHIEVEMENT: '#C99A3D',      // Academic Gold (huy hiệu, star, con số nổi bật, cam kết 8.0, đối tác IDP)
  ACHIEVEMENT_LIGHT: '#FDF8EC',

  // Borders & Dividers
  BORDER: '#E2E8F0',           // Border phân cách tiêu chuẩn
  BORDER_LIGHT: '#F1F5F9',
};

export const THEME_FONTS = {
  HEADING: ['Lexend', 'Outfit', 'sans-serif'],
  BODY: ['Lexend', 'Inter', 'sans-serif'],
  SANS: ['Lexend', 'Inter', 'sans-serif'],
  LEXEND: ['Lexend', 'sans-serif'],
  INTER: ['Inter', 'sans-serif'],
  POPPINS: ['Poppins', 'sans-serif'],
};

export const THEME_CONFIG = {
  style: 'Modern Academic / Editorial Education',
  dominantBackground: THEME_COLORS.BG_MAIN,
  palette: THEME_COLORS,
  typography: THEME_FONTS,
};

export default THEME_COLORS;
