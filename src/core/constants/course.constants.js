/**
 * Course and Category Constants
 */
export const COURSE_CATEGORIES = {
  ALL: 'all',
  IELTS: 'ielts',
  VIP: 'ielts-vip',
  COMMUNICATION: 'communication',
};

export const COURSE_FILTER_TABS = [
  { key: COURSE_CATEGORIES.ALL, i18nKey: 'courses.filter.all' },
  { key: COURSE_CATEGORIES.IELTS, i18nKey: 'courses.filter.ielts' },
  { key: COURSE_CATEGORIES.VIP, i18nKey: 'courses.filter.vip' },
  { key: COURSE_CATEGORIES.COMMUNICATION, i18nKey: 'courses.filter.communication' },
];

export const PRICING_TERMS = {
  THREE_MONTHS: '3months',
  SIX_MONTHS: '6months',
};

export const GALLERY_TABS = {
  MINISTRY: 'ministry',
  COLLAB: 'collab',
  MEMORIES: 'memories',
};
