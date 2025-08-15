import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { createSafeHTML } from '../utils/htmlSanitizer';
import '../styles/CourseCard.css';

const CourseCard = ({ course }) => {
  const { t } = useTranslation();

  return (
    <Card className="catalog-course-card">
      <div className="course-image-wrapper">
        <Card.Img 
          variant="top" 
          src={course.image} 
          className="catalog-course-image"
          alt={course.title}
        />
      </div>
      
      <Card.Body className="catalog-course-body">
        {/* University logo and info */}
        <div className="university-info">
          <div className="university-logo">
            <img src="/logo192.png" alt="University" />
          </div>
                  <div className="university-details">
          <span className="university-type">{t('courseCard.university')}</span>
          <span className="university-name">{course.university}</span>
        </div>
        </div>

        {/* Course title */}
        <h3 className="catalog-course-title">{course.title}</h3>
        
        {/* Course description */}
        <div 
          className="catalog-course-description"
          dangerouslySetInnerHTML={{__html: createSafeHTML(course.description)}}
        />
        
        {/* Action button */}
        <div className="course-button-wrapper">
          <Link to={`/course/${course.id}`} className="catalog-course-btn">
            {course.buttonText || t('courseCard.defaultButton')}
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;