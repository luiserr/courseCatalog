import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { DEFAULT_LANGUAGE, LANGUAGE_CODES } from '../config/languages';

// Importar traducciones
import es from '../locales/es.json';
import pt from '../locales/pt.json';
import en from '../locales/en.json';

const resources = {
  es: {
    translation: es
  },
  pt: {
    translation: pt
  },
  en: {
    translation: en
  }
};

i18n
  // Detectar idioma del navegador
  .use(LanguageDetector)
  // Conectar con React
  .use(initReactI18next)
  // Inicializar i18next
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: LANGUAGE_CODES,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
    
    react: {
      useSuspense: false
    }
  });

export default i18n;