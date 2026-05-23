import React, { useState } from 'react';
import useTheme from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import FarmCalculator from './components/sections/FarmCalculator';
import TechStack from './components/sections/TechStack';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Import translation dictionary
import { translations } from './utils/translations';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  
  // Manage language state using localStorage for persistence
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'pt';
  });

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === 'pt' ? 'en' : 'pt';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  // Select active translations
  const t = translations[lang];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Navbar with theme and language state */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLanguage={toggleLanguage} 
        t={t}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onContactClick={() => scrollToSection('contato')} 
          onProjectsClick={() => scrollToSection('portfolio')} 
          t={t}
        />
        
        {/* Stats */}
        <Stats t={t} />
        
        {/* About */}
        <About t={t} />
        
        {/* Services */}
        <Services t={t} />
        
        {/* Portfolio / Cases */}
        <Portfolio t={t} />
        
        {/* Farm ROI Simulator */}
        <FarmCalculator 
          onActionClick={() => scrollToSection('contato')} 
          t={t} 
          lang={lang} 
        />
        
        {/* Tech Stack */}
        <TechStack t={t} />
        
        {/* Testimonials */}
        <Testimonials t={t} />
        
        {/* Contact Form */}
        <Contact t={t} lang={lang} />
      </main>

      {/* Footer */}
      <Footer onNavClick={scrollToSection} t={t} />

      {/* Radial Scroll To Top progress button */}
      <ScrollToTop />
    </>
  );
}
