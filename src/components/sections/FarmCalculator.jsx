import React, { useState } from 'react';
import { Sprout, BarChart, ArrowRight, TrendingUp } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function FarmCalculator({ onActionClick, t, lang }) {
  const [area, setArea] = useState(150); // Hectares
  const [crop, setCrop] = useState('soja'); // soja / milho
  const [currentYield, setCurrentYield] = useState(65); // sacas/ha

  // Pricing constants (realistic mock values in Brazilian Real BRL)
  const prices = {
    soja: 135.0, // R$ por saca
    milho: 60.0   // R$ por saca
  };

  // Expected percentage yield increase with precise technical consultation
  const yieldIncreasePercent = {
    soja: 0.12, // 12% average increase
    milho: 0.15  // 15% average increase
  };

  const extraBagsPerHa = currentYield * yieldIncreasePercent[crop];
  const totalExtraBags = area * extraBagsPerHa;
  const grossFinancialGain = totalExtraBags * prices[crop];

  // Estimation of modular service cost
  const estimatedServiceCost = area * 45.0 + 3500.0;
  const netFinancialGain = grossFinancialGain - estimatedServiceCost;
  const roi = (netFinancialGain / estimatedServiceCost) * 100;

  // Max value adjustments for sliders based on crop
  const yieldLimits = crop === 'soja' ? { min: 40, max: 95 } : { min: 60, max: 190 };

  const handleCropChange = (selectedCrop) => {
    setCrop(selectedCrop);
    setCurrentYield(selectedCrop === 'soja' ? 65 : 110);
  };

  // Format currencies professionally based on selected language
  const formatCurrency = (val) => {
    const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculadora" className="section-padding container">
      <div className="bg-leaf-particle" style={{ top: '10%', left: '5%' }}>
        <Sprout size={48} />
      </div>

      <SectionTitle 
        tag={t.calculator.tag}
        title={t.calculator.title}
        subtitle={t.calculator.subtitle}
      />

      <div className="calc-container">
        {/* Left side - Sliders & choices */}
        <div className="calc-panel-input">
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={22} style={{ color: 'var(--primary)' }} />
            {t.calculator.inputsTitle}
          </h3>

          {/* Crop Selector */}
          <div className="calc-slider-wrapper">
            <label className="form-label" style={{ marginBottom: '0.75rem' }}>{t.calculator.cropLabel}</label>
            <div className="calc-crop-selector">
              <button 
                onClick={() => handleCropChange('soja')}
                className={`calc-crop-btn ${crop === 'soja' ? 'active' : ''}`}
                type="button"
              >
                <span>{t.calculator.sojaBtn}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '500', opacity: 0.8 }}>{t.calculator.bagsText}: {formatCurrency(prices.soja)}</span>
              </button>
              <button 
                onClick={() => handleCropChange('milho')}
                className={`calc-crop-btn ${crop === 'milho' ? 'active' : ''}`}
                type="button"
              >
                <span>{t.calculator.milhoBtn}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '500', opacity: 0.8 }}>{t.calculator.bagsText}: {formatCurrency(prices.milho)}</span>
              </button>
            </div>
          </div>

          {/* Slider 1: Farm Area */}
          <div className="calc-slider-wrapper">
            <div className="calc-slider-header">
              <span>{t.calculator.areaLabel}</span>
              <span className="calc-slider-value">{area} Ha</span>
            </div>
            <input 
              type="range" 
              min="20" 
              max="1500" 
              step="10"
              value={area} 
              onChange={(e) => setArea(Number(e.target.value))}
              className="calc-range-input"
            />
          </div>

          {/* Slider 2: Current Yield */}
          <div className="calc-slider-wrapper">
            <div className="calc-slider-header">
              <span>{t.calculator.yieldLabel}</span>
              <span className="calc-slider-value">{currentYield} {t.calculator.bagsPerHaText}</span>
            </div>
            <input 
              type="range" 
              min={yieldLimits.min} 
              max={yieldLimits.max} 
              step="1"
              value={currentYield} 
              onChange={(e) => setCurrentYield(Number(e.target.value))}
              className="calc-range-input"
            />
          </div>
        </div>

        {/* Right side - Calculations display */}
        <div className="calc-panel-results glassmorphism">
          <div>
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BarChart size={22} style={{ color: 'var(--primary)' }} />
              {t.calculator.resultsTitle}
            </h3>

            {/* Metric 1 */}
            <div className="calc-result-row">
              <span className="calc-result-label">{t.calculator.extraHa}</span>
              <span className="calc-result-value">+{extraBagsPerHa.toFixed(1)} {t.calculator.bagsText}</span>
            </div>

            {/* Metric 2 */}
            <div className="calc-result-row">
              <span className="calc-result-label">{t.calculator.totalExtra}</span>
              <span className="calc-result-value">+{totalExtraBags.toFixed(0)} {t.calculator.bagsText}</span>
            </div>

            {/* Metric 3 */}
            <div className="calc-result-row">
              <span className="calc-result-label">{t.calculator.grossGain}</span>
              <span className="calc-result-value" style={{ color: 'var(--secondary)' }}>
                {formatCurrency(grossFinancialGain)}
              </span>
            </div>

            {/* Metric 4 */}
            <div className="calc-result-row">
              <span className="calc-result-label">{t.calculator.netGain}</span>
              <span className="calc-result-value" style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>
                {formatCurrency(netFinancialGain)}
              </span>
            </div>

            {/* Graph Visual for ROI */}
            <div className="calc-chart-container">
              <div className="calc-slider-header" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <span>{t.calculator.roiLabel}</span>
                <span style={{ fontWeight: '800', color: 'var(--primary)' }}>+{roi.toFixed(0)}%</span>
              </div>
              <div className="calc-chart-bar-bg">
                <div 
                  className="calc-chart-bar-fill"
                  style={{ width: `${Math.min(roi / 5, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <button 
            onClick={onActionClick} 
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '2.5rem' }}
          >
            {t.calculator.btnSubmit}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
