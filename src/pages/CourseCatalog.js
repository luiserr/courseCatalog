import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CourseCard from '../components/CourseCard';
import FilterSidebar from '../components/FilterSidebar';
import '../styles/CourseCatalog.css';

const CourseCatalog = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    areaConocimiento: [],
    nivel: [],
    institucion: []
  });
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Datos mockeados para completar información que no viene de la API
  const mockDataMapping = {
    // Mapeo de universidades a áreas de conocimiento
    "Territorium Life SAPI de CV": { areaConocimiento: "tecnologia", nivel: "intermedio", institucion: "territorium" },
    "Centro de Idiomas del Tec de Monterrey": { areaConocimiento: "idiomas", nivel: "basico", institucion: "tec_monterrey" },
    // Imágenes por defecto según el tipo de curso
    defaultImages: {
      "tecnologia": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "idiomas": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "portugues": "https://images.unsplash.com/photo-1589653766968-b1e72c991186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "frances": "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "aleman": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "default": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    // Descripciones por defecto según el tipo de curso
    courseDescriptions: {
      "portugues": "Aprende portugués desde nivel básico hasta avanzado con nuestros cursos especializados. Ideal para expandir tus oportunidades profesionales.",
      "frances": "Domina el francés con métodos modernos de enseñanza. Desde conversación básica hasta nivel profesional.",
      "aleman": "Cursos de alemán estructurados para todos los niveles. Aprende uno de los idiomas más importantes en Europa.",
      "idiomas": "Cursos especializados en idiomas extranjeros con metodologías innovadoras y certificaciones reconocidas.",
      "default": "Domina las tecnologías más demandadas y consigue tu certificado para abrir nuevas oportunidades laborales."
    }
  };

  // Función para transformar los datos de la API
  const transformApiData = (apiData) => {
    console.log('transformApiData - apiData recibida:', apiData);
    
    // La API devuelve: { success: true, data: { data: [...] } }
    const coursesArray = apiData?.data?.data || apiData?.data || [];
    
    if (!Array.isArray(coursesArray)) {
      console.error('coursesArray no es un array:', coursesArray);
      return [];
    }

    console.log('coursesArray:', coursesArray);
    return coursesArray.map((course, index) => {
      const universityMapping = mockDataMapping[course.university] || {
        areaConocimiento: "general",
        nivel: "intermedio",
        institucion: `institucion_${index + 1}`
      };

      const category = course.name.toLowerCase().includes('portugués') ? 'portuguese' :
                      course.name.toLowerCase().includes('francés') ? 'french' :
                      course.name.toLowerCase().includes('alemán') ? 'german' :
                      course.name.toLowerCase().includes('inglés') ? 'english' :
                      course.name.toLowerCase().includes('idioma') ? 'languages' :
                      'general';

      // Determinar el tipo de curso para imágenes y descripciones
      const courseType = course.name.toLowerCase().includes('portugués') ? 'portugues' :
                        course.name.toLowerCase().includes('francés') ? 'frances' :
                        course.name.toLowerCase().includes('alemán') ? 'aleman' :
                        course.name.toLowerCase().includes('idioma') ? 'idiomas' :
                        universityMapping.areaConocimiento;

      const imageUrl = course.image || 
                      mockDataMapping.defaultImages[courseType] ||
                      mockDataMapping.defaultImages[universityMapping.areaConocimiento] ||
                      mockDataMapping.defaultImages.default;

      const description = mockDataMapping.courseDescriptions[courseType] ||
                         mockDataMapping.courseDescriptions.default;

      return {
        id: course.id,
        title: course.name,
        university: course.university,
        description: course.description,
        image: imageUrl,
        category: category,
        areaConocimiento: universityMapping.areaConocimiento,
        nivel: universityMapping.nivel,
        institucion: universityMapping.institucion,
                            buttonText: t('courseCard.moreButton'),
        pdf: course.pdf || null
      };
    });
  };

  // Función para obtener datos de la API
  const fetchCourses = async () => {
    try {
      setLoading(true);
      console.log('Intentando obtener cursos de la API...');
      
      const response = await fetch('http://saberesmx.pruebas.local/src/App/Saberes/endpoints/courses.php');
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Data recibida:', data);
      
      if (data.success) {
        const transformedCourses = transformApiData(data);
        console.log('Cursos transformados:', transformedCourses);
        setCourses(transformedCourses);
      } else {
        throw new Error('La API retornó success: false');
      }
    } catch (err) {
      console.error('Error al obtener cursos:', err);
      setError(err.message);
      // En caso de error, usar datos fallback
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    fetchCourses();
  }, []);

  // Usar los datos de la API en lugar de datos estáticos
  const allCourses = courses;

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Filtrar cursos basado en los filtros seleccionados
  const filteredCourses = allCourses.filter(course => {
    const matchesArea = filters.areaConocimiento.length === 0 || 
                       filters.areaConocimiento.includes(course.areaConocimiento);
    const matchesNivel = filters.nivel.length === 0 || 
                        filters.nivel.includes(course.nivel);
    const matchesInstitucion = filters.institucion.length === 0 || 
                              filters.institucion.includes(course.institucion);
    
    return matchesArea && matchesNivel && matchesInstitucion;
  });

  return (
    <div className="course-catalog-layout">
      {/* Sidebar de filtros */}
      <FilterSidebar onFilterChange={handleFilterChange} />
      
      {/* Contenido principal */}
      <div className="catalog-main-content">
        {/* Estado de carga */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>{t('courseCatalog.loading')}</p>
          </div>
        )}
        
        {/* Estado de error */}
        {error && !loading && (
          <div className="error-container">
            <h4>{t('courseCatalog.error')}</h4>
            <p>{error}</p>
            <button onClick={fetchCourses} className="retry-button">
              {t('courseCatalog.retry')}
            </button>
          </div>
        )}
        
        {/* Grid de cursos */}
        {!loading && !error && (
          <div className="courses-container">
            <div className="courses-grid">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            
            {filteredCourses.length === 0 && allCourses.length > 0 && (
              <div className="no-results">
                <h4>{t('courseCatalog.noResults')}</h4>
                <p>Intenta ajustar los filtros para ver más resultados</p>
              </div>
            )}
            
            {allCourses.length === 0 && (
              <div className="no-results">
                <h4>No hay cursos disponibles</h4>
                <p>No se pudieron cargar los cursos en este momento</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sidebar derecho - Noticias */}
      <div className="catalog-right-sidebar">
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

export default CourseCatalog;