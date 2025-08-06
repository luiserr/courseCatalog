import React from 'react';
import '../styles/History.css';

const History = () => {
  const historyItems = [
    {
      id: 1,
      title: "Certificación en IA",
      date: "Hace 2 horas",
      type: "Visto"
    },
    {
      id: 2,
      title: "Cloud Computing",
      date: "Ayer",
      type: "Completado"
    },
    {
      id: 3,
      title: "Ciberseguridad Básica",
      date: "Hace 3 días",
      type: "En progreso"
    }
  ];

  return (
    <div className="history-content">
      <div className="history-header">
        <h1>Historial</h1>
        <p>Revisa tu actividad reciente</p>
      </div>
      
      <div className="history-filters">
        <button className="filter-btn active">Todo</button>
        <button className="filter-btn">Completados</button>
        <button className="filter-btn">En progreso</button>
        <button className="filter-btn">Vistos</button>
      </div>
      
      <div className="history-list">
        {historyItems.map(item => (
          <div key={item.id} className="history-item">
            <div className="history-icon">
              <i className={`fas ${item.type === 'Completado' ? 'fa-check-circle' : 
                              item.type === 'En progreso' ? 'fa-play-circle' : 'fa-eye'}`}></i>
            </div>
            <div className="history-details">
              <h4>{item.title}</h4>
              <span className="history-type">{item.type}</span>
            </div>
            <div className="history-date">
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;