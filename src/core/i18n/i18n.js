import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { STORAGE_KEYS, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants';

/**
 * Autoload all translation files from locales directory using Vite's import.meta.glob
 * Pattern: ./locales/{lang}/{namespace}.json
 */
const loadResources = () => {
  const modules = import.meta.glob('./locales/*/*.json', { eager: true });
  const resources = {};

  for (const path in modules) {
    // Extract lang code from path (e.g., './locales/vi/translation.json' -> 'vi')
    const match = path.match(/\.\/locales\/([a-zA-Z0-9-_]+)\/([a-zA-Z0-9-_]+)\.json$/);
    if (match) {
      const [, lang, ns] = match;
      if (!resources[lang]) {
        resources[lang] = {};
      }
      resources[lang][ns] = modules[path].default || modules[path];
    }
  }

  return resources;
};

const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE) || DEFAULT_LANGUAGE;
const resources = loadResources();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Listen to language change to persist in localStorage and sync HTML lang attribute
i18n.on('languageChanged', (lng) => {
  localStorage.setItem(STORAGE_KEYS.LANGUAGE, lng);
  document.documentElement.lang = lng;
});

export default i18n;
