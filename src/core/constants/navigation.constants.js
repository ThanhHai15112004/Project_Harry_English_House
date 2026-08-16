export const ROUTES = {
  HOME: '/',
  COURSES: '/courses',
  COURSE_DETAIL: '/courses/:courseId',
  RESULTS: '/results',
  ABOUT: '/about',
  CONTACT: '/contact',
};

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
  { id: 'home', labelKey: 'nav.home', path: ROUTES.HOME },
  {
    id: 'programs',
    labelKey: 'nav.programs',
    path: ROUTES.COURSES,
    dropdown: [
      { id: 'all-courses', label: 'Tất Cả Khóa Học', path: ROUTES.COURSES },
      { id: 'roadmap', label: 'Lộ Trình Từng Band Điểm', path: `${ROUTES.COURSES}#roadmap` },
      { id: 'method', label: 'Phương Pháp Đào Tạo', path: `${ROUTES.COURSES}#method` },
    ],
  },
  { id: 'results', labelKey: 'nav.results', path: ROUTES.RESULTS },
  { id: 'founder', labelKey: 'nav.founder', path: ROUTES.ABOUT },
  { id: 'contact', labelKey: 'nav.contact', path: ROUTES.CONTACT },
];

