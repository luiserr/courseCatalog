import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <div className="layout-wrapper">
        {/* Sidebar de navegación */}
        <div className="layout-sidebar">
          <Sidebar />
        </div>

        {/* Contenido principal */}
        <div className="layout-main">
          {/* Header */}
          <Header />
          
          {/* Contenido de la página */}
          <div className="layout-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;