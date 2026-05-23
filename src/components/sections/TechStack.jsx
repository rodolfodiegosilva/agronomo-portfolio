import React from 'react';
import { Plane, Map, Wifi, Database } from 'lucide-react';

export default function TechStack({ t }) {
  const icons = [
    <Plane size={36} />,
    <Map size={36} />,
    <Wifi size={36} />,
    <Database size={36} />
  ];

  return (
    <section id="tecnologia" className="section-padding container">
      <div className="tech-container">
        <div className="tech-intro">
          <span className="section-tag">{t.tech.tag}</span>
          <h2 className="section-title">{t.tech.title}</h2>
          <p className="section-subtitle" style={{ margin: '1rem auto' }}>
            {t.tech.subtitle}
          </p>
        </div>

        <div className="tech-grid">
          {t.tech.techs.map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-icon-wrapper">
                {icons[index]}
              </div>
              <h4>{tech.name}</h4>
              <p style={{ fontWeight: '700', fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                {tech.detail}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
