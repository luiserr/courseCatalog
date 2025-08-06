import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import '../styles/CourseCatalog.css';

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Datos de cursos recomendados
  const recommendedCourses = [
    {
      id: 1,
      title: "Cloud",
      university: "Universidad Benemérita Universidad Autónoma de Puebla",
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "cloud",
      buttonText: "Ver Curso"
    },
    {
      id: 2,
      title: "Certificación en IA",
      university: "Universidad Universidad de Guadalajara",
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "ai",
      buttonText: "Ver Curso"
    },
    {
      id: 3,
      title: "Ciberseguridad",
      university: "Universidad Instituto Politécnico Nacional",
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "cybersecurity",
      buttonText: "Ver Curso"
    },
    {
      id: 4,
      title: "ISO 27001 Lead Implementer",
      university: "Universidad Benemérita Universidad Autónoma de Puebla",
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "iso",
      buttonText: "Ver Curso"
    }
  ];

  // Datos de cursos normales (duplicamos los recomendados para el ejemplo)
  const allCourses = [...recommendedCourses];

  // Datos de universidades
  const universities = [
    {
      id: 1,
      name: "Universidad 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
      color: "#1e40af",
      textColor: "white"
    },
    {
      id: 2,
      name: "Universidad 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
      color: "#7c3aed",
      textColor: "white"
    },
    {
      id: 3,
      name: "Universidad 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
      color: "#1e40af",
      textColor: "white"
    },
    {
      id: 4,
      name: "Universidad 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
      color: "#7c3aed",
      textColor: "white"
    }
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="course-catalog-content">
        {/* Sección de búsqueda y filtros */}
        <div className="catalog-search-section">
          <div className="catalog-filters-toggle" onClick={() => setShowFilters(!showFilters)}>
            <i className="fas fa-filter"></i>
            <span>Filtros</span>
          </div>
          
          <div className="catalog-search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Buscar por palabra clave"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Contenido principal con sidebar derecho */}
        <div className="catalog-main-wrapper">
          {/* Contenido de cursos */}
          <div className="catalog-content">
            {/* Cursos recomendados */}
            <section className="catalog-section">
              <h2 className="section-title">Cursos recomendados</h2>
              <div className="courses-grid">
                {recommendedCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>

            {/* Cursos */}
            <section className="catalog-section">
              <h2 className="section-title">Cursos</h2>
              <div className="courses-grid">
                {allCourses.map(course => (
                  <CourseCard key={`course-${course.id}`} course={course} />
                ))}
              </div>
            </section>

            {/* Universidades y Plataformas */}
            <section className="catalog-section">
              <h2 className="section-title">Universidades y Plataformas</h2>
              <div className="universities-grid">
                {universities.map(university => (
                  <Link 
                    key={university.id} 
                    to={`/university/${university.id}`}
                    className="university-card-link"
                    style={{textDecoration: 'none'}}
                  >
                    <div className="university-card" style={{backgroundColor: university.color}}>
                      <div className="university-content">
                        <h3 className="university-name" style={{color: university.textColor}}>
                          {university.name}
                        </h3>
                        <p className="university-description" style={{color: university.textColor}}>
                          {university.description}
                        </p>
                        <button className="university-button">
                          Ver
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar derecho - Noticias y Chat */}
          <div className="catalog-right-sidebar">
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
              
              <a href="#" className="see-more-link">Ver más</a>
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
    </div>
  );
};

export default CourseCatalog;