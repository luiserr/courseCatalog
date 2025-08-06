import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return t('header.titles.dashboard');
      case '/courses':
        return t('header.titles.courses');
      case '/bookmarks':
        return t('header.titles.bookmarks');
      case '/settings':
        return t('header.titles.settings');
      case '/history':
        return t('header.titles.history');
      case '/home':
        return t('header.titles.home');
      default:
        if (location.pathname.startsWith('/university/')) {
          return t('header.titles.university');
        }
        if (location.pathname.startsWith('/course/')) {
          return t('header.titles.courseDetail');
        }
        return t('header.titles.dashboard');
    }
  };

  return (
    <div className="catalog-header">
      <div className="catalog-title-section">
        <div className="catalog-logo">
          <img src="/logo192.png" alt="Logo" />
        </div>
        <h1 className="catalog-title">{getPageTitle()}</h1>
      </div>
      
      <div className="catalog-user-section">
        <LanguageSelector />
        <div className="catalog-notifications">
          <i className="fas fa-bell"></i>
        </div>
        <div className="catalog-user-profile">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" />
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;