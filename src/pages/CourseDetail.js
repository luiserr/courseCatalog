import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { createSafeHTMLObject } from '../utils/htmlSanitizer';
import '../styles/CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('perfil');
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Datos mockeados para completar información faltante de la API
  const mockCourseData = {
    universityLogos: {
      'Territorium Life SAPI de CV': '/logo192.png',
      'Centro de Idiomas del Tec de Monterrey': '/logo192.png',
      'default': '/logo192.png'
    },    
  };

  // Función para obtener datos del curso desde la API
  const fetchCourseDetails = async (courseId) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`http://saberesmx.pruebas.local/src/App/Saberes/endpoints/course.php?id=${courseId}`);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.data) {
        const enhancedCourse = enhanceCourseWithMockData(data.data);
        setCourseData(enhancedCourse);
      } else {
        throw new Error('No se encontraron datos del curso');
      }
    } catch (err) {
      setError(err.message);            
      setCourseData(null);
    } finally {
      setLoading(false);
    }
  };

  // Función para mejorar los datos del curso con información mockeada
  const enhanceCourseWithMockData = (apiData) => {
    const courseType = getCourseType(apiData.name);    
    const studentCount = apiData.numberOfStudents;
    const duration = apiData.duration;
    
    return {
      title: apiData.name || 'Curso Sin Título',
      university: apiData.university || 'Universidad Tecnológica',
      universityLogo: mockCourseData.universityLogos[apiData.university] || mockCourseData.universityLogos.default,
      description: apiData.description || getDefaultDescription(courseType),
      students: studentCount.toLocaleString(),
      instructor: apiData.instructor,
      date: apiData.createdAt ? new Date(apiData.createdAt).toLocaleDateString() : new Date().toLocaleDateString(),
      tags: courseType.charAt(0).toUpperCase() + courseType.slice(1),
      stats: {
        students: { value: studentCount.toLocaleString(), label: t('courseDetail.info.students') },
        duration: { value: `${duration} ${t('courseDetail.info.hours')}`, label: t('courseDetail.info.duration') },
        courses: { value: `${Math.floor(Math.random() * 5) + 3} módulos`, label: "contenido estructurado" },
        level: { value: getRandomLevel(), label: t('courseDetail.info.level') }
      },
      content: {
        description: apiData.description || t('courseDetail.content.description_not_found'),        
        syllabus: apiData.syllabus || null
      }
    };
  };

  // Función para crear curso de respaldo en caso de error total
  const createFallbackCourse = (courseId) => {
    return {
      title: `Curso Demo ${courseId}`,
      university: "Universidad Tecnológica",
      universityLogo: "/logo192.png",
      description: "Este es un curso de demostración que muestra las capacidades de nuestra plataforma educativa.",
      students: "1,234",
      instructor: "Prof. Demo",
      date: new Date().toLocaleDateString(),
      tags: "Demo",
      stats: {
        students: { value: "1,234", label: t('courseDetail.info.students') },
        duration: { value: "24 horas", label: t('courseDetail.info.duration') },
        courses: { value: "5 módulos", label: "contenido estructurado" },
        level: { value: "básico", label: t('courseDetail.info.level') }
      },
      content: {
        description: "Este curso te permitirá familiarizarte con nuestra plataforma y explorar las diferentes herramientas de aprendizaje disponibles.",
        syllabus: "Al finalizar tendrás una comprensión completa de cómo utilizar nuestra plataforma educativa."
      }
    };
  };

  // Funciones auxiliares
  const getCourseType = (courseName = '') => {
    const name = courseName.toLowerCase();
    if (name.includes('portugués')) return 'portugues';
    if (name.includes('francés')) return 'frances';
    if (name.includes('alemán')) return 'aleman';
    if (name.includes('demo')) return 'demo';
    return 'default';
  };

  const getDefaultDescription = (courseType) => {
    const descriptions = {
      'demo': 'Curso de demostración para conocer las funcionalidades de la plataforma.',
      'portugues': 'Aprende portugués desde nivel básico hasta avanzado con metodologías innovadoras.',
      'frances': 'Domina el francés con nuestro programa estructurado y dinámico.',
      'aleman': 'Curso completo de alemán para todos los niveles de aprendizaje.',
      'default': 'Curso especializado con contenido de alta calidad y metodologías modernas.'
    };
    return descriptions[courseType] || descriptions.default;
  };

  const getDetailedDescription = (courseType) => {
    const detailed = {
      'demo': `Descubre todas las funcionalidades de nuestra plataforma educativa de vanguardia.

Este curso te guiará paso a paso por todas las herramientas disponibles, desde el registro hasta la evaluación final.

Aprenderás a navegar de manera eficiente y aprovechar al máximo todos los recursos educativos.

Ideal para nuevos usuarios que quieren familiarizarse con el entorno digital de aprendizaje.`,
      'default': `Sumérgete en un programa educativo diseñado con las mejores prácticas pedagógicas.

Nuestro enfoque combina teoría y práctica para garantizar un aprendizaje efectivo y duradero.

Cada módulo está cuidadosamente estructurado para construir conocimiento de manera progresiva.

Este curso está pensado para estudiantes, profesionales o cualquier persona interesada en expandir sus conocimientos.`
    };
    return detailed[courseType] || detailed.default;
  };

  const getRandomLevel = () => {
    const levels = ['básico', 'intermedio', 'avanzado'];
    return levels[Math.floor(Math.random() * levels.length)];
  };

  // Cargar datos del curso cuando el componente se monta
  useEffect(() => {
    if (id) {
      fetchCourseDetails(id);
    }
  }, [id]);

  // Si está cargando o hay error, mostrar estados correspondientes
  if (loading) {
    return (
      <div className="course-detail-page">
        <div className="course-loading">
          <div className="loading-spinner"></div>
          <p>{t('courseDetail.loading')}</p>
        </div>
      </div>
    );
  }

  if (error && !courseData) {
    return (
      <div className="course-detail-page">
        <div className="course-error">
          <h3>{t('courseDetail.error')}</h3>
          <p>{error}</p>
          <button onClick={() => fetchCourseDetails(id)} className="retry-btn">
            {t('courseDetail.retry')}
          </button>
        </div>
      </div>
    );
  }

  // Si no hay datos del curso, no renderizar nada
  if (!courseData) {
    return null;
  }

  return (
    <div className="course-detail-page">
      {/* Breadcrumb */}
      <div className="course-breadcrumb">
        <Link to="/courses" className="breadcrumb-link">
          <i className="fas fa-arrow-left"></i>
          {t('common.back')} al {t('header.titles.courses')}
        </Link>
      </div>

      {/* Course Header */}
      <div className="course-header">
        <div className="course-header-content">
          <div className="course-university">
            <img src={courseData.universityLogo} alt="Universidad" className="university-logo" />
            <span className="university-name">{courseData.university}</span>
            <button className="bookmark-btn">
              <i className="far fa-heart"></i>
            </button>
          </div>

          <h1 className="course-title">{courseData.title}</h1>
          <div 
            className="course-description"
            dangerouslySetInnerHTML={createSafeHTMLObject(courseData.description)}
          />

          <div className="course-meta">
            <span className="course-students">{courseData.students} {t('courseDetail.info.students')}</span>
            <div className="course-info">
              <span className="course-instructor">
                <i className="fas fa-user"></i>
                {t('courseDetail.info.instructor')} {courseData.instructor}
              </span>
              <span className="course-date">
                <i className="fas fa-calendar"></i>
                {courseData.date}
              </span>
              <span className="course-tags">
                <i className="fas fa-tags"></i>
                {courseData.tags}
              </span>
            </div>
          </div>

          <button className="enroll-btn">
            {t('courseDetail.actions.enroll')}
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
            <span className="stat-value">{courseData.stats.students.value}</span>
            <span className="stat-label">{courseData.stats.students.label}</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon duration">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-content">
            <span className="stat-value">{courseData.stats.duration.value}</span>
            <span className="stat-label">{courseData.stats.duration.label}</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon courses">
            <i className="fas fa-book"></i>
          </div>
          <div className="stat-content">
            <span className="stat-value">{courseData.stats.courses.value}</span>
            <span className="stat-label">{courseData.stats.courses.label}</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon level">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="stat-content">
            <span className="stat-value">{courseData.stats.level.value}</span>
            <span className="stat-label">{courseData.stats.level.label}</span>
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
            {t('courseDetail.tabs.profile')}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'contenido' ? 'active' : ''}`}
            onClick={() => setActiveTab('contenido')}
          >
            {t('courseDetail.tabs.content')}
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
              <h3>{t('courseDetail.content.title')}</h3>
              
              <div 
                className="content-text"
                dangerouslySetInnerHTML={createSafeHTMLObject(courseData.content.description)}
              />              

              {courseData.content.syllabus && (
                <div className="syllabus-section">
                  <h4>{t('courseDetail.content.syllabusTitle')}</h4>
                  <div 
                    className="syllabus-content"
                    dangerouslySetInnerHTML={createSafeHTMLObject(courseData.content.syllabus)}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;