import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'fas fa-home', label: 'Inicio' },
    { path: '/courses', icon: 'fas fa-book', label: 'Cursos' },
    { path: '/bookmarks', icon: 'fas fa-bookmark', label: 'Guardados' },
    { path: '/settings', icon: 'fas fa-cog', label: 'Configuración' },
    { path: '/history', icon: 'far fa-clock', label: 'Historial' }
  ];

  return (
    <div className="navigation-sidebar">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          title={item.label}
        >
          <i className={item.icon}></i>
        </Link>
      ))}
      
      <div className="nav-item bottom" title="Cerrar sesión">
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </div>
  );
};

export default Sidebar;