import React from 'react';
import { Compass, Leaf, BarChart2, Shield } from 'lucide-react';
import aboutImage from '../../assets/images/about_agronomy.png';
import SectionTitle from '../common/SectionTitle';

export default function About({ t }) {
  const icons = [
    <Compass size={24} />,
    <Leaf size={24} />,
    <BarChart2 size={24} />,
    <Shield size={24} />
  ];

  return (
    <section id="sobre" className="section-padding container">
      <SectionTitle 
        tag={t.about.tag}
        title={t.about.title}
        subtitle={t.about.subtitle}
      />

      <div className="about-grid">
        {/* Left column: Image Frame */}
        <div className="about-image-wrapper">
          <div className="about-image-frame">
            <img 
              src={aboutImage} 
              alt="Lucas Martins" 
              className="about-image"
              loading="lazy"
            />
            <div className="about-experience-badge glassmorphism">
              <span className="years">08</span>
              <span className="text">{t.about.experienceBadge}</span>
            </div>
          </div>
        </div>

        {/* Right column: Info & Values */}
        <div>
          <h3 className="about-heading">{t.about.heading}</h3>
          <p className="about-bio" style={{ whiteSpace: 'pre-line' }}>
            {t.about.bio}
          </p>

          {/* Grid of Values dynamically translated */}
          <div className="about-values">
            {t.about.values.map((val, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{icons[index]}</div>
                <h4>{val.title}</h4>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
