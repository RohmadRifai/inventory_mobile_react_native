import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import id from '../../locales/id';
import en from '../../locales/en';

const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default bahasa
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React sudah melakukan escaping
    },
  });

export default i18n;
