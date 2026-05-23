import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Leaf, Globe } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, lang, toggleLanguage, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: t.nav.inicio },
    { id: 'sobre', label: t.nav.sobre },
    { id: 'servicos', label: t.nav.servicos },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'calculadora', label: t.nav.calculadora },
    { id: 'tecnologia', label: t.nav.tecnologia },
    { id: 'contato', label: t.nav.contato }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY + 150;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]); // re-run scroll tracker when language changes to match new item list

  const handleNavClick = (id) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <nav className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="logo-brand" onClick={() => handleNavClick('inicio')}>
            <Leaf className="logo-leaf" size={26} fill="currentColor" />
            <span>Agro<span>Science</span></span>
          </div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="actions-nav">
            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="theme-toggle hide-on-mobile"
              aria-label="Alternar idioma / Switch language"
              style={{ display: 'flex', gap: '4px', fontSize: '0.85rem', fontWeight: '800', width: 'auto', padding: '0 0.85rem' }}
            >
              <Globe size={16} />
              <span>{lang === 'pt' ? 'EN' : 'PT'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Alternar tema escuro/claro"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="mobile-menu-btn"
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="logo-brand">
            <Leaf className="logo-leaf" size={24} fill="currentColor" />
            <span>AgroScience</span>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="drawer-close-btn"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="drawer-links" style={{ marginBottom: '2rem' }}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`drawer-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer extra action: Language switch in mobile */}
        <button
          onClick={() => {
            toggleLanguage();
            setIsDrawerOpen(false);
          }}
          className="btn btn-secondary"
          style={{ width: '100%', gap: '0.5rem' }}
        >
          <Globe size={18} />
          <span>{lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}</span>
        </button>
      </div>

      {isDrawerOpen && (
        <div className="drawer-backdrop" onClick={() => setIsDrawerOpen(false)} />
      )}
    </>
  );
}
