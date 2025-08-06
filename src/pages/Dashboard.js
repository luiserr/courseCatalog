import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // Cursos recomendados
  const recommendedCourses = [
    {
      id: 1,
      title: "Cloud",
      university: "Universidad Benemérita Universidad Autónoma de Puebla",
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "cloud",
      buttonText: "Ver Certificación"
    },
    {
      id: 2,
      title: "Certificación en IA",
      university: "Universidad Universidad de Guadalajara",
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "ai",
      buttonText: "Ver Certificación"
    },
    {
      id: 3,
      title: "Ciberseguridad",
      university: "Universidad Instituto Politécnico Nacional",
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "cybersecurity",
      buttonText: "Ver Certificación"
    },
    {
      id: 4,
      title: "ISO 27001 Lead Implementer",
      university: "Universidad Benemérita Universidad Autónoma de Puebla",
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "iso",
      buttonText: "Ver Certificación"
    }
  ];

  // Plan de estudios con progreso
  const studyPlan = [
    {
      id: 1,
      title: "Certificación en IA",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      progress: 0,
      progressLabel: "0%"
    },
    {
      id: 2,
      title: "Curso: Inversión en Bolsa para Principiantes",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      progress: 25,
      progressLabel: "25%"
    },
    {
      id: 3,
      title: "Curso: Planificación Financiera Avanzada",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      progress: 50,
      progressLabel: "50%"
    },
    {
      id: 4,
      title: "Curso: Ciberseguridad",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      progress: 75,
      progressLabel: "75%"
    },
    {
      id: 5,
      title: "Curso: Análisis de Vulnerabilidades",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      progress: 75,
      progressLabel: "75%"
    }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-main-content">
        {/* Header con saludo y búsqueda */}
        <div className="dashboard-header">
          <h1 className="dashboard-greeting">¡Hola!</h1>
          <div className="dashboard-search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Buscar aquí" />
          </div>
        </div>

        {/* Cursos recomendados */}
        <section className="dashboard-section">
          <div className="section-header">
            <h2 className="section-title">Cursos recomendados</h2>
            <button className="carousel-btn prev">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="carousel-btn next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="courses-carousel">
            {recommendedCourses.map(course => (
              <div key={course.id} className="course-carousel-item">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </section>

        {/* Mi aprendizaje */}
        <section className="dashboard-section">
          <h2 className="section-title">Mi aprendizaje</h2>
          
          <div className="learning-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">32</span>
                <span className="stat-label">Cursos pendientes</span>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">33</span>
                <span className="stat-label">Cursos inscritos</span>
              </div>
            </div>
            
            <div className="stat-card completion">
              <div className="stat-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">3%</span>
                <span className="stat-label">Cumplimiento</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tu plan de estudios */}
        <section className="dashboard-section">
          <h2 className="section-title">Tu plan de estudios</h2>
          
          <div className="study-plan">
            {studyPlan.map(course => (
              <div key={course.id} className="study-plan-item">
                <div className="course-thumbnail">
                  <img src={course.image} alt={course.title} />
                </div>
                
                <div className="course-info">
                  <h4 className="course-title">{course.title}</h4>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-label">{course.progressLabel}</span>
                  </div>
                </div>
                
                <button className="expand-btn">
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sidebar derecho - Noticias y Chat */}
      <div className="dashboard-right-sidebar">
        {/* Sección de Noticias */}
        <div className="notifications-section">
          <h3 className="notifications-title">Noticias</h3>
          
          <div className="notification-item">
            <h4>Lanzamiento de nueva plataforma para aprender inglés</h4>
            <p>La UdeG estrena nueva plataforma donde podrás explorar y aprender el idioma ing...</p>
          </div>
          
          <div className="notification-item">
            <h4>Prepárate para el examen de admisión</h4>
            <p>La UANL abre convocatoria para los alumnos que cursarán la preparatoria en el año...</p>
          </div>
          
          <Link to="#" className="see-more-link">Ver más</Link>
        </div>

        {/* Chat de ayuda */}
        <div className="chat-section">
          <div className="chat-bubble">
            <div className="chat-avatar">
              <i className="fas fa-comments"></i>
            </div>
            <div className="chat-content">
              <p>Hola, ¿Te podemos ayudar?</p>
              <button className="chat-button">Iniciar Reporte</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;