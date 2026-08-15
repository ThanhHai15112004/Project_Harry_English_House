import vnFlag from '@/assets/common/vietnam-flag.png';
import enFlag from '@/assets/common/english-flag.png';

/**
 * Internationalization (i18n) Constants
 */
export const SUPPORTED_LANGUAGES = {
  VI: 'vi',
  EN: 'en',
};

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.VI;

export const LANGUAGE_OPTIONS = [
  {
    code: SUPPORTED_LANGUAGES.VI,
    label: 'Tiếng Việt',
    flagIcon: vnFlag,
    shortLabel: 'VI',
  },
  {
    code: SUPPORTED_LANGUAGES.EN,
    label: 'English',
    flagIcon: enFlag,
    shortLabel: 'EN',
  },
];
