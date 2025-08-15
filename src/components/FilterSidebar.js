import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/FilterSidebar.css';

const FilterSidebar = ({ onFilterChange }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    areaConocimiento: [],
    nivel: [],
    institucion: []
  });

  const [expandedSections, setExpandedSections] = useState({
    areaConocimiento: true,
    nivel: false,
    institucion: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterChange = (category, value, isChecked) => {
    const newFilters = { ...filters };
    if (isChecked) {
      newFilters[category] = [...newFilters[category], value];
    } else {
      newFilters[category] = newFilters[category].filter(item => item !== value);
    }
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const filterSections = [
    {
      key: 'areaConocimiento',
      title: t('courseCatalog.filters.area'),
      options: [
        { value: 'tecnologia', label: t('areas.tecnologia') },
        { value: 'idiomas', label: t('areas.idiomas') },
        { value: 'negocios', label: t('areas.negocios') },
        { value: 'ciencias', label: t('areas.ciencias') },
        { value: 'arte', label: t('areas.arte') }
      ]
    },
    {
      key: 'nivel',
      title: t('courseCatalog.filters.level'),
      options: [
        { value: 'basico', label: t('levels.basico') },
        { value: 'intermedio', label: t('levels.intermedio') },
        { value: 'avanzado', label: t('levels.avanzado') }
      ]
    },
    {
      key: 'institucion',
      title: t('courseCatalog.filters.institution'),
      options: [
        { value: 'territorium', label: t('institutions.territorium') },
        { value: 'tec_monterrey', label: t('institutions.tec_monterrey') },
        { value: 'unam', label: t('institutions.unam') }
      ]
    }
  ];

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <h3>{t('courseCatalog.filters.title')}</h3>
      </div>

      {filterSections.map((section) => (
        <div key={section.key} className="filter-section">
          <button
            className={`filter-section-header ${expandedSections[section.key] ? 'expanded' : ''}`}
            onClick={() => toggleSection(section.key)}
          >
            <span className="section-title">{section.title}</span>
            <i className={`fas fa-chevron-${expandedSections[section.key] ? 'up' : 'down'}`}></i>
          </button>

          {expandedSections[section.key] && (
            <div className="filter-options">
              {section.options.map((option) => (
                <label key={option.value} className="filter-option">
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={filters[section.key].includes(option.value)}
                    onChange={(e) => handleFilterChange(section.key, option.value, e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  <span className="option-label">{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;