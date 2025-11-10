import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './StackingFeatures.css';

const StackingFeatures = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Card 1 transforms (bottom layer)
  const card1Scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [1, 0.95, 0.90, 0.85]);
  const card1Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [0, 20, 40, 60]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [1, 0.8, 0.6, 0.4]);

  // Card 2 transforms
  const card2Scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [1.05, 1, 0.95, 0.90]);
  const card2Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [-100, 0, 20, 40]);
  const card2Opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [0, 1, 0.8, 0.6]);

  // Card 3 transforms
  const card3Scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1.05, 1.05, 1, 0.95, 0.95]);
  const card3Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-100, -100, 0, 20, 20]);
  const card3Opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 1, 0.8, 0.8]);

  // Card 4 transforms (top layer)
  const card4Scale = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [1.05, 1.05, 1, 1]);
  const card4Y = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [-100, -100, 0, 0]);
  const card4Opacity = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [0, 0, 1, 1]);

  const features = [
    {
      id: 1,
      title: "AI Guardian Mode",
      subtitle: "Protected • Secure • Active",
      description: "Advanced AI monitors digital interactions in real-time, filtering harmful content and predatory behavior before it reaches your child. Smart algorithms learn and adapt to emerging threats.",
      color: "#23D2E2",
      icon: "shield",
      scale: card1Scale,
      y: card1Y,
      opacity: card1Opacity,
      zIndex: 1
    },
    {
      id: 2,
      title: "Harmony Mode",
      subtitle: "Empathetic • Balanced • Connected",
      description: "Facilitates healthy parent-child communication with AI-mediated dialogue suggestions, emotion recognition, and conflict resolution tools. Strengthens family bonds in the digital age.",
      color: "#7B6CF6",
      icon: "users",
      scale: card2Scale,
      y: card2Y,
      opacity: card2Opacity,
      zIndex: 2
    },
    {
      id: 3,
      title: "Focus Flow",
      subtitle: "Concentrated • Calm • Productive",
      description: "Creates distraction-free learning environments with intelligent app management, attention tracking, and productivity insights. Helps children develop deep work habits early.",
      color: "#18A4B4",
      icon: "target",
      scale: card3Scale,
      y: card3Y,
      opacity: card3Opacity,
      zIndex: 3
    },
    {
      id: 4,
      title: "Privacy Engine",
      subtitle: "Private • Encrypted • On-Device",
      description: "All processing happens locally on your device. Zero data collection, end-to-end encryption, and complete transparency. Your family's digital life stays yours.",
      color: "#23D2E2",
      icon: "lock",
      scale: card4Scale,
      y: card4Y,
      opacity: card4Opacity,
      zIndex: 4
    }
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      case 'users':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'target':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        );
      case 'lock':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="stacking-container">
      <div className="stacking-grid">
        {/* Left Column - Text Content */}
        <div className="stacking-text-column">
          {features.map((feature, index) => (
            <div key={feature.id} className="feature-text-section">
              <div className="feature-text-content">
                <span className="feature-label">[FEATURE {index + 1}]</span>
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-subtitle" style={{ color: feature.color }}>
                  {feature.subtitle}
                </p>
                <p className="feature-description">{feature.description}</p>
                
                <div className="feature-stats">
                  <div className="stat-item">
                    <span className="stat-value">99.7%</span>
                    <span className="stat-label">Threat Detection</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">&lt;50ms</span>
                    <span className="stat-label">Response Time</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">100%</span>
                    <span className="stat-label">Private</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Sticky Image Stack */}
        <div className="stacking-image-column">
          <div className="sticky-wrapper">
            <div className="card-stack">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className="stack-card"
                  style={{
                    scale: feature.scale,
                    y: feature.y,
                    opacity: feature.opacity,
                    zIndex: feature.zIndex
                  }}
                >
                  {/* Browser Card Effect */}
                  <div className="stack-card-inner">
                    <div className="stack-browser-header">
                      <div className={`stack-browser-tab ${feature.id === 4 ? 'active' : ''}`}>
                        <div className="stack-tab-icon" style={{ color: feature.id === 4 ? feature.color : '#A9B3C1' }}>
                          {getIcon(feature.icon)}
                        </div>
                        <span className="stack-tab-text">{feature.title}</span>
                      </div>
                    </div>
                    <div className="stack-browser-content">
                      <img 
                        src={`/image${feature.id}.png`} 
                        alt={feature.title}
                        loading="lazy"
                      />
                      <div className="stack-content-overlay" style={{
                        background: `linear-gradient(135deg, ${feature.color}15, transparent)`
                      }}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackingFeatures;
