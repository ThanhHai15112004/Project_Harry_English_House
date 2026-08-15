/**
 * Navigation & Section IDs Constants
 */
export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  COURSES: 'courses',
  ROADMAP: 'roadmap',
  PRICING: 'pricing',
  CERTIFICATES: 'certificates',
  FEEDBACK: 'feedback',
  GALLERY: 'gallery',
  CONTACT: 'contact',
};

export const NAV_ITEMS = [
  { id: SECTION_IDS.ABOUT, href: `#${SECTION_IDS.ABOUT}`, i18nKey: 'nav.about' },
  { id: SECTION_IDS.COURSES, href: `#${SECTION_IDS.COURSES}`, i18nKey: 'nav.courses' },
  { id: SECTION_IDS.ROADMAP, href: `#${SECTION_IDS.ROADMAP}`, i18nKey: 'nav.roadmap' },
  { id: SECTION_IDS.PRICING, href: `#${SECTION_IDS.PRICING}`, i18nKey: 'nav.pricing' },
  { id: SECTION_IDS.CERTIFICATES, href: `#${SECTION_IDS.CERTIFICATES}`, i18nKey: 'nav.certificates' },
  { id: SECTION_IDS.FEEDBACK, href: `#${SECTION_IDS.FEEDBACK}`, i18nKey: 'nav.feedback' },
  { id: SECTION_IDS.GALLERY, href: `#${SECTION_IDS.GALLERY}`, i18nKey: 'nav.gallery' },
  { id: SECTION_IDS.CONTACT, href: `#${SECTION_IDS.CONTACT}`, i18nKey: 'nav.contact' },
];
