import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import '../styles/University.css';

const University = () => {
  const { id } = useParams();

  // Datos de ejemplo de la universidad (en una app real vendrían de una API)
  const universityData = {
    1: {
      name: "Nombre de la Universidad",
      description: "Dirección de la universidad",
      banner: "UNI",
      bannerColor: "#4a90e2",
      rating: 4,
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum, justo a placerat feugiat, sapien orci gravida eros, nec fermentum justo ligula sed mauris. Integer fringilla, tortor vitae vehicula tincidunt, lorem arcu finibus libero, ut pretium metus sit eget lorem. Fusce nec lorem quis libero bibendum porttitor.

Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec accumsan dignissim augue, sit amet porta sapien fermentum sed. Ut ac nisl non metus tincidunt lacinia. Vivamus eu magna vel risus tincidunt consequat. In hac habitasse platea dictumst.

Maecenas interdum, augue id imperdiet fermentum, justo sapien pretium nulla, sit amet luctus justo purus sit amet est. Quisque tristique, metus ac sodales feugiat, magna ligula scelerisque leo, in convallis nunc nunc sit amet purus. Aliquam erat volutpat.`
    },
    2: {
      name: "Universidad 2",
      description: "Dirección de la universidad 2",
      banner: "UNI",
      bannerColor: "#7c3aed",
      rating: 5,
      about: "Información sobre la Universidad 2..."
    },
    // Agregar más universidades según sea necesario
  };

  const university = universityData[id] || universityData[1];

  // Cursos de ejemplo de la universidad
  const universityCourses = [
    {
      id: 1,
      title: "Cloud",
      university: university.name,
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "cloud",
      buttonText: "Ver Curso"
    },
    {
      id: 2,
      title: "Certificación en IA",
      university: university.name,
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "ai",
      buttonText: "Ver Curso"
    },
    {
      id: 3,
      title: "Ciberseguridad",
      university: university.name,
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "cybersecurity",
      buttonText: "Ver Curso"
    },
    {
      id: 4,
      title: "ISO 27001 Lead Implementer",
      university: university.name,
      description: "Domina las tecnologías en la nube más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "iso",
      buttonText: "Ver Curso"
    }
  ];

  return (
    <div className="university-page">
      {/* Breadcrumb */}
      <div className="university-breadcrumb">
        <Link to="/courses" className="breadcrumb-link">
          <i className="fas fa-arrow-left"></i>
          Regresar a Catálogo de cursos
        </Link>
      </div>

      {/* University Header */}
      <div className="university-header">
        <div className="university-banner" style={{ backgroundColor: university.bannerColor }}>
          <h1 className="university-banner-text">{university.banner}</h1>
        </div>
        
        <div className="university-info">
          <h2 className="university-name">{university.name}</h2>
          <p className="university-address">{university.description}</p>
          
          <div className="university-rating">
            {[...Array(5)].map((_, index) => (
              <i 
                key={index}
                className={`fas fa-star ${index < university.rating ? 'star-filled' : 'star-empty'}`}
              ></i>
            ))}
          </div>
        </div>
      </div>

      {/* University Content */}
      <div className="university-content">
        {/* About Section */}
        <section className="university-about">
          <h3>Quiénes somos</h3>
          <div className="about-text">
            {university.about.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section className="university-courses">
          <h3>Nuestros cursos</h3>
          <div className="courses-grid">
            {universityCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default University;