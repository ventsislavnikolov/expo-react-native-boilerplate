import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import languages from './languages';
import languageDetector from './languageDetector';

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: languages,
    compatibilityJSON: 'v3',
    react: {
      useSuspense: false,
    },
  });

export default i18n;
