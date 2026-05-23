import React, { useState } from 'react';
import caseSoy from '../../assets/images/case_soy.png';
import caseSoil from '../../assets/images/case_soil.png';
import caseIrrigation from '../../assets/images/case_irrigation.png';
import SectionTitle from '../common/SectionTitle';

export default function Portfolio({ t }) {
  // Track active filter by its index (0: Todos/All, 1: Tecnologia, 2: Solo, 3: Irrigação)
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);

  const images = [caseSoy, caseSoil, caseIrrigation];

  // Mathematically map filtered projects based on category index
  // Case 1 is Index 0 (matches Filter 1)
  // Case 2 is Index 1 (matches Filter 2)
  // Case 3 is Index 2 (matches Filter 3)
  const filteredProjects = activeFilterIndex === 0
    ? t.portfolio.cases
    : t.portfolio.cases.filter((_, index) => index === activeFilterIndex - 1);

  return (
    <section id="portfolio" className="section-padding container">
      <SectionTitle 
        tag={t.portfolio.tag}
        title={t.portfolio.title}
        subtitle={t.portfolio.subtitle}
      />

      {/* Filter Buttons in the current language */}
      <div className="portfolio-filters">
        {t.portfolio.categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveFilterIndex(index)}
            className={`filter-btn ${activeFilterIndex === index ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => {
          // Resolve original index to fetch correct image
          const originalIndex = activeFilterIndex === 0 
            ? index 
            : activeFilterIndex - 1;

          return (
            <article key={originalIndex} className="portfolio-card">
              <div className="portfolio-media">
                <img 
                  src={images[originalIndex]} 
                  alt={project.title}
                  className="portfolio-img"
                  loading="lazy"
                />
                <span className="portfolio-tag-badge">{project.category}</span>
              </div>
              
              <div className="portfolio-details">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  {project.location}
                </span>
                <h3 style={{ marginTop: '0.25rem' }}>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="portfolio-metrics">
                  <span className="label">{project.metricLabel}</span>
                  <span className="value">{project.metricValue}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
