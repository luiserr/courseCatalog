import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Bookmarks.css';

const Bookmarks = () => {
  return (
    <div className="bookmarks-content">
      <div className="bookmarks-header">
        <h1>Cursos Guardados</h1>
        <p>Accede rápidamente a tus cursos favoritos</p>
      </div>
      
      <div className="empty-state">
        <div className="empty-icon">
          <i className="fas fa-bookmark"></i>
        </div>
        <h3>No tienes cursos guardados</h3>
        <p>Guarda cursos que te interesen para acceder a ellos más tarde</p>
        <Link to="/courses" className="primary-btn">Explorar Cursos</Link>
      </div>
    </div>
  );
};

export default Bookmarks;