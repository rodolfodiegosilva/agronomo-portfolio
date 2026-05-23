import React from 'react';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';
import WaveDivider from '../common/WaveDivider';

export default function Footer({ onNavClick, t }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <WaveDivider position="top" alt={false} flip={true} />

      <div className="container footer-grid" style={{ position: 'relative', zIndex: 11 }}>
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="logo-brand" style={{ cursor: 'pointer' }} onClick={() => onNavClick('inicio')}>
            <Leaf className="logo-leaf" size={24} fill="currentColor" />
            <span>Agro<span>Science</span></span>
          </div>
          <p>{t.footer.desc}</p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links-col">
          <h4>{t.footer.linksTitle}</h4>
          <ul className="footer-links">
            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); onNavClick('inicio'); }}>{t.nav.inicio}</a></li>
            <li><a href="#sobre" onClick={(e) => { e.preventDefault(); onNavClick('sobre'); }}>{t.nav.sobre}</a></li>
            <li><a href="#servicos" onClick={(e) => { e.preventDefault(); onNavClick('servicos'); }}>{t.nav.servicos}</a></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); onNavClick('portfolio'); }}>{t.nav.portfolio}</a></li>
            <li><a href="#calculadora" onClick={(e) => { e.preventDefault(); onNavClick('calculadora'); }}>{t.nav.calculadora}</a></li>
            <li><a href="#tecnologia" onClick={(e) => { e.preventDefault(); onNavClick('tecnologia'); }}>{t.nav.tecnologia}</a></li>
            <li><a href="#contato" onClick={(e) => { e.preventDefault(); onNavClick('contato'); }}>{t.nav.contato}</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-contact-col">
          <h4>{t.footer.contactTitle}</h4>
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <Phone className="footer-contact-icon" size={16} />
              <span>+55 (62) 99876-5432</span>
            </div>
            <div className="footer-contact-item">
              <Mail className="footer-contact-icon" size={16} />
              <span>lucas.martins@agroscience.com.br</span>
            </div>
            <div className="footer-contact-item" style={{ alignItems: 'flex-start' }}>
              <MapPin className="footer-contact-icon" size={16} style={{ marginTop: '3px' }} />
              <span style={{ whiteSpace: 'pre-line' }}>{t.footer.contactDetail}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="container footer-bottom" style={{ position: 'relative', zIndex: 11 }}>
        <p className="footer-copy">
          &copy; {currentYear} {t.footer.copy}
        </p>
        <div className="footer-legal-links">
          <a href="#privacy">{t.footer.privacy}</a>
          <a href="#terms">{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}
