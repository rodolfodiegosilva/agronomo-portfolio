import React from 'react';
import { Cpu, FlaskConical, Bug, BarChart3, Check } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import WaveDivider from '../common/WaveDivider';

export default function Services({ t }) {
  const icons = [
    <Cpu size={28} />,
    <FlaskConical size={28} />,
    <Bug size={28} />,
    <BarChart3 size={28} />
  ];

  return (
    <section id="servicos" className="section-padding" style={{ backgroundColor: 'var(--primary-light)', paddingBottom: '9rem', paddingTop: '9rem' }}>
      <WaveDivider position="top" alt={true} flip={false} />
      <WaveDivider position="bottom" alt={true} flip={true} />

      <div className="container" style={{ position: 'relative', zIndex: 11 }}>
        <SectionTitle 
          tag={t.services.tag}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="services-grid">
          {t.services.cards.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {icons[index]}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              <ul className="service-features-list">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <Check size={14} className="service-bullet" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
