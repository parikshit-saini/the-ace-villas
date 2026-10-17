import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Loads translations from a backend
  .use(LanguageDetector) // Detects language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Default language
    debug: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Translation file path
    },
  });

export default i18n;