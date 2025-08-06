import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-content">
      <div className="home-header">
        <h1>¡Bienvenido al Catálogo de Cursos!</h1>
        <p>Descubre miles de cursos y oportunidades de aprendizaje</p>
      </div>
      
      <div className="home-stats">
        <div className="stat-card">
          <h3>1,500+</h3>
          <p>Cursos Disponibles</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Universidades</p>
        </div>
        <div className="stat-card">
          <h3>25,000+</h3>
          <p>Estudiantes</p>
        </div>
        <div className="stat-card">
          <h3>100+</h3>
          <p>Certificaciones</p>
        </div>
      </div>
      
      <div className="home-actions">
        <Link to="/courses" className="primary-btn">Explorar Cursos</Link>
        <Link to="/courses" className="secondary-btn">Ver Universidades</Link>
      </div>
    </div>
  );
};

export default Home;