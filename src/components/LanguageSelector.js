import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AVAILABLE_LANGUAGES } from '../config/languages';
import '../styles/LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = AVAILABLE_LANGUAGES[i18n.language] || AVAILABLE_LANGUAGES.es;

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-selector">
      <button
        className="language-selector-btn"
        onClick={toggleDropdown}
        aria-label="Seleccionar idioma"
      >
        <span className="language-flag">{currentLanguage.flag}</span>
        <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {Object.values(AVAILABLE_LANGUAGES).map((language) => (
            <button
              key={language.code}
              className={`language-option ${
                i18n.language === language.code ? 'active' : ''
              }`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="language-flag">{language.flag}</span>
              <span className="language-name">{language.nativeName}</span>
              {i18n.language === language.code && (
                <i className="fas fa-check language-check"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;