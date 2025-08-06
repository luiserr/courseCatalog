import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="catalog-header">
      <div className="catalog-title-section">
        <div className="catalog-logo">
          <img src="/logo192.png" alt="Logo" />
        </div>
        <h1 className="catalog-title">Catálogo de cursos</h1>
      </div>
      
      <div className="catalog-user-section">
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