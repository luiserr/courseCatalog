import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('perfil');

  // Datos de ejemplo del curso (en una app real vendrían de una API)
  const courseData = {
    1: {
      title: "Nombre del curso",
      university: "Universidad de Guadalajara",
      universityLogo: "/logo192.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      students: "5,600",
      instructor: "NOMBRE DEL INSTRUCTOR",
      date: "Fecha dd/mm/aaaa",
      tags: "Tags",
      stats: {
        students: { value: "5,600", label: "estudiantes que ya lo tomaron" },
        duration: { value: "72 horas", label: "duración del curso" },
        courses: { value: "9 cursos", label: "mínimos" },
        level: { value: "medio", label: "nivel de dificultad" }
      },
      content: {
        description: `Descubre qué es la inteligencia artificial, cómo funciona y por qué está transformando el mundo.

En este curso aprenderás los conceptos clave de la IA, incluyendo machine learning, redes neuronales, algoritmos de búsqueda, y aplicaciones reales en diversas industrias.

No necesitas experiencia previa: comenzarás desde cero con ejemplos prácticos y explicaciones claras. Ideal para estudiantes, profesionales o cualquier persona interesada en el futuro de la tecnología.

Este curso no requiere experiencia previa en programación o matemáticas avanzadas. Está pensado para estudiantes, docentes, profesionales de cualquier área o simplemente personas curiosas que quieren entender el impacto y el potencial de esta tecnología.`,
        learningPoints: [
          "Qué es la inteligencia artificial y cómo ha evolucionado",
          "Diferencia entre IA, machine learning y deep learning",
          "Algoritmos básicos y cómo se entrenan modelos inteligentes",
          "Casos de uso actuales en diferentes industrias",
          "Consideraciones éticas y sociales de la IA",
          "Introducción a herramientas y lenguajes como Python (nivel básico)"
        ],
        conclusion: "Al finalizar tendrás una base sólida para continuar con cursos más avanzados en ciencia de datos, programación o IA aplicada."
      }
    }
    // Agregar más cursos según sea necesario
  };

  const course = courseData[id] || courseData[1];

  return (
    <div className="course-detail-page">
      {/* Breadcrumb */}
      <div className="course-breadcrumb">
        <Link to="/courses" className="breadcrumb-link">
          <i className="fas fa-arrow-left"></i>
          Regresar a Catálogo de cursos
        </Link>
      </div>

      {/* Course Header */}
      <div className="course-header">
        <div className="course-header-content">
          <div className="course-university">
            <img src={course.universityLogo} alt="Universidad" className="university-logo" />
            <span className="university-name">{course.university}</span>
            <button className="bookmark-btn">
              <i className="far fa-heart"></i>
            </button>
          </div>

          <h1 className="course-title">{course.title}</h1>
          <p className="course-description">{course.description}</p>

          <div className="course-meta">
            <span className="course-students">{course.students} estudiantes que ya lo tomaron</span>
            <div className="course-info">
              <span className="course-instructor">
                <i className="fas fa-user"></i>
                Impartido por {course.instructor}
              </span>
              <span className="course-date">
                <i className="fas fa-calendar"></i>
                {course.date}
              </span>
              <span className="course-tags">
                <i className="fas fa-tags"></i>
                {course.tags}
              </span>
            </div>
          </div>

          <button className="enroll-btn">
            Inscribirme al curso
          </button>
        </div>
      </div>

      {/* Course Stats */}
      <div className="course-stats">
        <div className="stat-item">
          <div className="stat-icon students">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-content">
            <span className="stat-value">{course.stats.students.value}</span>
            <span className="stat-label">{course.stats.students.label}</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon duration">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-content">
            <span className="stat-value">{course.stats.duration.value}</span>
            <span className="stat-label">{course.stats.duration.label}</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon courses">
            <i className="fas fa-book"></i>
          </div>
          <div className="stat-content">
            <span className="stat-value">{course.stats.courses.value}</span>
            <span className="stat-label">{course.stats.courses.label}</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon level">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="stat-content">
            <span className="stat-value">{course.stats.level.value}</span>
            <span className="stat-label">{course.stats.level.label}</span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="course-content">
        {/* Tabs */}
        <div className="course-tabs">
          <button 
            className={`tab-btn ${activeTab === 'perfil' ? 'active' : ''}`}
            onClick={() => setActiveTab('perfil')}
          >
            Perfil de curso
          </button>
          <button 
            className={`tab-btn ${activeTab === 'contenido' ? 'active' : ''}`}
            onClick={() => setActiveTab('contenido')}
          >
            Contenido del curso
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'perfil' && (
            <div className="perfil-content">
              <h3>Perfil del curso</h3>
              <p>Información general sobre el perfil del curso...</p>
            </div>
          )}

          {activeTab === 'contenido' && (
            <div className="contenido-content">
              <h3>Conoce el contenido del curso</h3>
              
              <div className="content-text">
                {course.content.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="learning-section">
                <h4>Lo que aprenderás:</h4>
                <ul className="learning-list">
                  {course.content.learningPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="conclusion-section">
                <p>{course.content.conclusion}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;