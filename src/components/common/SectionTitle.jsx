import React from 'react';

export default function SectionTitle({ tag, title, subtitle }) {
  return (
    <div className="section-title-wrapper">
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
