import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);

      // Calculate progress percentage
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = (scrolled / windowHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVGs measurements for circle progress
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  if (!isVisible) return null;

  return (
    <button 
      onClick={scrollToTop} 
      className="scroll-to-top-btn"
      aria-label="Voltar ao topo da página"
    >
      <svg className="scroll-progress-svg" width="50" height="50">
        <circle 
          className="scroll-progress-circle" 
          cx="25" 
          cy="25" 
          r={radius}
        />
        <circle 
          className="scroll-progress-bar" 
          cx="25" 
          cy="25" 
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset
          }}
        />
      </svg>
      <ArrowUp size={20} style={{ position: 'relative', zIndex: 1 }} />
    </button>
  );
}
