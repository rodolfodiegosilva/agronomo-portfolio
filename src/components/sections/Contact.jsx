import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

export default function Contact({ t, lang }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    crop: 'soja',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        crop: 'soja',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfos = [
    {
      icon: <Phone size={22} />,
      title: t.contact.infos[0].title,
      value: '+55 (62) 99876-5432',
      link: 'https://wa.me/5562998765432?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20consulta%20agron%C3%B4mica.',
      linkLabel: t.contact.infos[0].linkLabel
    },
    {
      icon: <Mail size={22} />,
      title: t.contact.infos[1].title,
      value: 'lucas.martins@agroscience.com.br',
      link: 'mailto:lucas.martins@agroscience.com.br',
      linkLabel: t.contact.infos[1].linkLabel
    },
    {
      icon: <MapPin size={22} />,
      title: t.contact.infos[2].title,
      value: lang === 'pt' ? 'Goiás, Mato Grosso, Minas Gerais e São Paulo' : 'Goias, Mato Grosso, Minas Gerais and Sao Paulo',
      link: null,
      linkLabel: t.contact.infos[2].linkLabel
    }
  ];

  return (
    <section id="contato" className="section-padding container">
      <SectionTitle 
        tag={t.contact.tag}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <div className="contact-grid">
        {/* Left Column: Direct Contact cards */}
        <div className="contact-info-cards">
          {contactInfos.map((info, index) => (
            <div key={index} className="contact-info-card">
              <div className="contact-card-icon">
                {info.icon}
              </div>
              <div className="contact-card-content">
                <h4>{info.title}</h4>
                <p>{info.value}</p>
                {info.link ? (
                  <a 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-card-link"
                  >
                    {info.linkLabel} &rarr;
                  </a>
                ) : (
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--secondary)' }}>
                    {info.linkLabel}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Social connections */}
          <div className="contact-socials-wrapper">
            <h4>{t.contact.socialsTitle}</h4>
            <div className="contact-socials">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-circle-btn"
                aria-label="LinkedIn"
              >
                <svg size={20} fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-circle-btn"
                aria-label="Instagram"
              >
                <svg size={20} fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-circle-btn"
                aria-label="YouTube"
              >
                <svg size={20} fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M23.498 6.163c-.272-1.022-1.074-1.825-2.096-2.096c-1.85-.502-9.402-.502-9.402-.502s-7.552 0-9.402.502c-1.022.271-1.824 1.074-2.096 2.096c-.502 1.85-.502 5.707-.502 5.707s0 3.858.502 5.708c.272 1.02 1.074 1.823 2.096 2.094c1.85.502 9.402.502 9.402.502s7.552 0 9.402-.502c1.022-.271 1.824-1.074 2.096-2.094c.502-1.85.502-5.708.502-5.708s0-3.857-.502-5.707zm-14.162 9.297v-6.92l6.002 3.46l-6.002 3.46z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-container glassmorphism">
          {isSubmitted && (
            <div className="form-success-alert">
              {t.contact.form.successAlert}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">{t.contact.form.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control" 
                  placeholder={t.contact.form.namePlaceholder} 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">{t.contact.form.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control" 
                  placeholder={t.contact.form.emailPlaceholder} 
                  required
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">{t.contact.form.phone}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control" 
                  placeholder={t.contact.form.phonePlaceholder} 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="crop" className="form-label">{t.contact.form.crop}</label>
                <select 
                  id="crop" 
                  name="crop" 
                  value={formData.crop}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="soja">{t.contact.form.cropOptions.soja}</option>
                  <option value="citricos">{t.contact.form.cropOptions.citricos}</option>
                  <option value="pastagem">{t.contact.form.cropOptions.pastagem}</option>
                  <option value="cana">{t.contact.form.cropOptions.cana}</option>
                  <option value="outra">{t.contact.form.cropOptions.outra}</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">{t.contact.form.message}</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                className="form-control" 
                placeholder={t.contact.form.messagePlaceholder}
                required
              ></textarea>
            </div>

            <Button 
              type="submit" 
              className="form-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? t.contact.form.btnSubmitting : t.contact.form.btnSubmit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
