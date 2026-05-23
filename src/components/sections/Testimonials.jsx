import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function Testimonials({ t }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? t.testimonials.data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === t.testimonials.data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = t.testimonials.data[currentIndex];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--primary-light)' }}>
      <div className="container">
        <SectionTitle 
          tag={t.testimonials.tag}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="testimonials-carousel-wrapper">
          <div className="testimonial-card glassmorphism">
            <Quote className="quote-icon-top" size={48} />
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.5rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="var(--secondary)" color="var(--secondary)" />
              ))}
            </div>

            <p className="testimonial-quote">"{current.quote}"</p>

            <div className="testimonial-author">
              <div 
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  marginBottom: '1rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '2px solid var(--secondary)'
                }}
              >
                {current.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h4 className="author-name">{current.name}</h4>
              <p className="author-role">{current.role}</p>
            </div>
          </div>

          <div className="testimonial-nav">
            <button 
              onClick={handlePrev} 
              className="nav-btn"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext} 
              className="nav-btn"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
