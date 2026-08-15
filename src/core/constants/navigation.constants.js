export const SECTION_IDS = {
  HERO: 'hero',
  ABOUT: 'about',
  PROGRAMS: 'programs',
  METHOD: 'method',
  ROADMAP: 'roadmap',
  FOUNDER: 'founder',
  RESULTS: 'results',
  ACADEMIC: 'academic',
  CLASSES: 'classes',
  CONTACT: 'contact',
};

export const NAV_ITEMS = [
  { id: 'home', labelKey: 'nav.home', href: `#${SECTION_IDS.HERO}` },
  {
    id: 'programs',
    labelKey: 'nav.programs',
    href: `#${SECTION_IDS.PROGRAMS}`,
    dropdown: [
      { id: 'ielts', label: 'IELTS Toàn Diện (0 - 7.5+)', href: `#${SECTION_IDS.PROGRAMS}` },
      { id: 'roadmap', label: 'Lộ Trình Từng Band Điểm', href: `#${SECTION_IDS.ROADMAP}` },
      { id: 'classes', label: 'Lịch Tuyển Sinh Lớp Mới', href: `#${SECTION_IDS.CLASSES}` },
    ],
  },
  { id: 'results', labelKey: 'nav.results', href: `#${SECTION_IDS.RESULTS}` },
  { id: 'founder', labelKey: 'nav.founder', href: `#${SECTION_IDS.FOUNDER}` },
  { id: 'contact', labelKey: 'nav.contact', href: `#${SECTION_IDS.CONTACT}` },
];
