import React, { useState, useEffect, useRef } from 'react';
import './ProductSection.css';

const ProductSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);
  const [ecosystemVisible, setEcosystemVisible] = useState(false);

  const sectionRef = useRef(null);
  const stepsRef = useRef(null);
  const carouselRef = useRef(null);
  const ecosystemRef = useRef(null);

  const coreFeatures = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "AI Guardian Mode",
      description: "Detects risk behaviors including cyberbullying, addiction patterns, and explicit content in real-time with advanced AI analysis.",
      color: "#23D2E2"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Harmony Mode",
      description: "Mediates parent-child conversations with empathy, fostering understanding and healthy communication in the digital space.",
      color: "#7B6CF6"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      title: "Focus Flow",
      description: "Helps kids refocus after emotional stress with adaptive learning environments and intelligent distraction management.",
      color: "#18A4B4"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      title: "AI Privacy Engine",
      description: "All data processed on-device with zero cloud storage. Your family's privacy is not just protected—it's guaranteed.",
      color: "#23D2E2"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % coreFeatures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating, coreFeatures.length]);

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      });
    }, observerOptions);

    const stepsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStepsVisible(true);
        }
      });
    }, observerOptions);

    const carouselObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCarouselVisible(true);
        }
      });
    }, observerOptions);

    const ecosystemObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setEcosystemVisible(true);
        }
      });
    }, observerOptions);

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    if (stepsRef.current) stepsObserver.observe(stepsRef.current);
    if (carouselRef.current) carouselObserver.observe(carouselRef.current);
    if (ecosystemRef.current) ecosystemObserver.observe(ecosystemRef.current);

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      if (stepsRef.current) stepsObserver.unobserve(stepsRef.current);
      if (carouselRef.current) carouselObserver.unobserve(carouselRef.current);
      if (ecosystemRef.current) ecosystemObserver.unobserve(ecosystemRef.current);
    };
  }, []);

  const handleCardClick = (index) => {
    setCurrentCardIndex(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 8000);
  };

  const getCardStyle = (index) => {
    const diff = index - currentCardIndex;
    const total = coreFeatures.length;
    const normalizedDiff = ((diff % total) + total) % total;
    
    if (normalizedDiff === 0) {
      return { transform: 'translateX(0) scale(1.1) rotateY(0deg)', zIndex: 4, opacity: 1 };
    } else if (normalizedDiff === 1) {
      return { transform: 'translateX(280px) scale(0.85) rotateY(-25deg)', zIndex: 3, opacity: 0.6 };
    } else if (normalizedDiff === total - 1) {
      return { transform: 'translateX(-280px) scale(0.85) rotateY(25deg)', zIndex: 3, opacity: 0.6 };
    } else {
      return { transform: 'translateX(0) scale(0.5) rotateY(0deg)', zIndex: 1, opacity: 0 };
    }
  };

  const howItWorks = [
    {
      step: "01",
      title: "Real-time Monitoring",
      description: "Tracks screen time, emotional signals, and app usage patterns with intelligent behavioral analysis.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      )
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Advanced emotion and context analysis powered by cutting-edge machine learning algorithms.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4M12 8h.01"/>
        </svg>
      )
    },
    {
      step: "03",
      title: "Smart Alerts",
      description: "On-device alerts and parental insights delivered in real-time without compromising privacy.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      )
    },
    {
      step: "04",
      title: "Child Empowerment",
      description: "Positive reinforcement and guidance modules that help children develop healthy digital habits.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      )
    }
  ];

  return (
    <section id="product" className="product-section">
      {/* Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="product-container">
        <div className={`product-header ${sectionVisible ? 'visible' : ''}`} ref={sectionRef}>
          <span className="section-label">[THE PRODUCT]</span>
          <h2 className="section-title">Guardian AI</h2>
          <p className="product-tagline">
            Your child's digital co-pilot — built with emotional intelligence, privacy, and love.
          </p>
        </div>

        {/* How It Works */}
        <div className={`how-it-works ${stepsVisible ? 'visible' : ''}`} ref={stepsRef}>
          <h3 className="subsection-title">How It Works</h3>
          <div className="steps-grid">
            {howItWorks.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Features */}
        <div className={`core-features ${carouselVisible ? 'visible' : ''}`} ref={carouselRef}>
          <h3 className="subsection-title">Core Features</h3>
          <div className="carousel-container">
            <div className="carousel-3d">
              {coreFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`feature-card-3d ${index === currentCardIndex ? 'active' : ''}`}
                  style={getCardStyle(index)}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {coreFeatures.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentCardIndex ? 'active' : ''}`}
                  onClick={() => handleCardClick(index)}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Ecosystem Diagram */}
        <div className={`ecosystem-section ${ecosystemVisible ? 'visible' : ''}`} ref={ecosystemRef}>
          <h3 className="subsection-title">Guardian AI Ecosystem</h3>
          <p className="ecosystem-subtitle">Privacy-first architecture — no cloud spying, ever.</p>
          
          <div className="ecosystem-diagram">
            <div className="ecosystem-node">
              <div className="node-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12" y2="18"/>
                </svg>
              </div>
              <p>Kid Device</p>
            </div>

            <div className="ecosystem-arrow">
              <svg viewBox="0 0 100 20" fill="none">
                <line x1="0" y1="10" x2="80" y2="10" stroke="#23D2E2" strokeWidth="2"/>
                <line x1="70" y1="5" x2="80" y2="10" stroke="#23D2E2" strokeWidth="2"/>
                <line x1="70" y1="15" x2="80" y2="10" stroke="#23D2E2" strokeWidth="2"/>
              </svg>
            </div>

            <div className="ecosystem-node ecosystem-core">
              <div className="node-icon core-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <circle cx="12" cy="11" r="3" fill="currentColor"/>
                </svg>
              </div>
              <p>Guardian AI Core</p>
              <span className="core-label">On-Device Processing</span>
            </div>

            <div className="ecosystem-arrow">
              <svg viewBox="0 0 100 20" fill="none">
                <line x1="20" y1="10" x2="100" y2="10" stroke="#7B6CF6" strokeWidth="2"/>
                <line x1="20" y1="10" x2="30" y2="5" stroke="#7B6CF6" strokeWidth="2"/>
                <line x1="20" y1="10" x2="30" y2="15" stroke="#7B6CF6" strokeWidth="2"/>
              </svg>
            </div>

            <div className="ecosystem-node">
              <div className="node-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <p>Parent Dashboard</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="product-cta-container">
            <button className="product-cta-button">
              <span className="cta-text">
                See Guardian AI in Action
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
