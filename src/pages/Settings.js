import React from 'react';
import '../styles/Settings.css';

const Settings = () => {
  return (
    <div className="settings-content">
      <div className="settings-header">
        <h1>Configuración</h1>
        <p>Personaliza tu experiencia de aprendizaje</p>
      </div>
      
      <div className="settings-sections">
        <div className="settings-section">
          <h3>Perfil</h3>
          <div className="setting-item">
            <label>Nombre de usuario</label>
            <input type="text" placeholder="Tu nombre" />
          </div>
          <div className="setting-item">
            <label>Email</label>
            <input type="email" placeholder="tu@email.com" />
          </div>
        </div>
        
        <div className="settings-section">
          <h3>Notificaciones</h3>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Notificaciones de nuevos cursos
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Recordatorios de estudio
            </label>
          </div>
        </div>
        
        <div className="settings-section">
          <h3>Privacidad</h3>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Perfil público
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Compartir progreso
            </label>
          </div>
        </div>
      </div>
      
      <div className="settings-actions">
        <button className="primary-btn">Guardar Cambios</button>
        <button className="secondary-btn">Cancelar</button>
      </div>
    </div>
  );
};

export default Settings;