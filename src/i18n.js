import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    backend: {
      // specify the path to the translation files
      loadPath: '/locales/{{lng}}/common.json'
    },
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;
