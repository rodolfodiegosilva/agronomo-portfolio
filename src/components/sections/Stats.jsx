import React from 'react';
import { Layers, TrendingUp, Home, Award } from 'lucide-react';

export default function Stats({ t }) {
  const statsData = [
    {
      icon: <Layers size={32} />,
      number: '15k+',
      label: t.stats.hectares
    },
    {
      icon: <TrendingUp size={32} />,
      number: '+25%',
      label: t.stats.productivity
    },
    {
      icon: <Home size={32} />,
      number: '80+',
      label: t.stats.farms
    },
    {
      icon: <Award size={32} />,
      number: '8+',
      label: t.stats.experience
    }
  ];

  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
