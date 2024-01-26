/* eslint-disable no-restricted-exports */
/* eslint-disable import/extensions */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from './languageDetector';
import languages from './languages';

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    lng: 'en',
    react: {
      useSuspense: false,
    },
    resources: languages,
  });

export { default } from 'i18next';
