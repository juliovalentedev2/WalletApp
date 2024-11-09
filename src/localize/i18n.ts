import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from './locales/en.json';
import pt from './locales/ptBr.json';

i18n
  .use(initReactI18next) 
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    lng: Localization.locale.startsWith('pt') ? 'pt' : 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
