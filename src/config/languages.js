// Configuración de idiomas disponibles
export const AVAILABLE_LANGUAGES = {
  es: {
    code: 'es',
    name: 'Español',
    nativeName: 'Español',
    flag: '🇪🇸'
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇧🇷'
  },
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  }
};

// Idioma por defecto
export const DEFAULT_LANGUAGE = 'es';

// Lista de códigos de idiomas disponibles
export const LANGUAGE_CODES = Object.keys(AVAILABLE_LANGUAGES);

// Función para obtener información de un idioma
export const getLanguageInfo = (langCode) => {
  return AVAILABLE_LANGUAGES[langCode] || AVAILABLE_LANGUAGES[DEFAULT_LANGUAGE];
};