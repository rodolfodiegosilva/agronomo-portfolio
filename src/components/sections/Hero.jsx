import React from 'react';
import { ArrowRight, Sprout, ShieldCheck } from 'lucide-react';
import heroImage from '../../assets/images/hero_agronomy.png';
import Button from '../common/Button';

export default function Hero({ onContactClick, onProjectsClick, t }) {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      {/* Floating background leaf particles for agronomy theme */}
      <div className="bg-leaf-particle" style={{ top: '25%', left: '15%', animationDelay: '0s' }}>🍃</div>
      <div className="bg-leaf-particle" style={{ top: '65%', left: '45%', animationDelay: '2s' }}>🌱</div>
      <div className="bg-leaf-particle" style={{ top: '15%', right: '25%', animationDelay: '4s' }}>🌾</div>

      <div className="container hero-grid">
        {/* Text Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sprout size={16} />
            <span>{t.hero.badge}</span>
          </div>
          
          <h1 className="hero-title">
            {t.hero.titlePre}<span>{t.hero.titleSpan1}</span>{t.hero.titleAnd}<span>{t.hero.titleSpan2}</span>
          </h1>
          
          <p className="hero-description">
            {t.hero.description}
          </p>

          <div className="hero-actions">
            <Button onClick={onContactClick} variant="primary">
              {t.hero.btnContact}
              <ArrowRight size={18} />
            </Button>
            <Button onClick={onProjectsClick} variant="secondary">
              {t.hero.btnProjects}
            </Button>
          </div>
        </div>

        {/* Visual Element */}
        <div className="hero-image-wrapper">
          <div className="hero-image-border">
            <img 
              src={heroImage} 
              alt="Lucas Martins" 
              className="hero-image"
              loading="eager"
            />
          </div>

          <div className="hero-floating-card glassmorphism">
            <div className="floating-card-icon">
              <ShieldCheck size={24} />
            </div>
            <div className="floating-card-info">
              <h4>{t.hero.floatCardTitle}</h4>
              <p>{t.hero.floatCardDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
