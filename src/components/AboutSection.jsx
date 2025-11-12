import React, { useEffect, useRef, useState } from 'react';
import Orb from './Orb';
import './AboutSection.css';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      if (cardsRef.current) {
        cardsObserver.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {/* Orb Animated Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <Orb hoverIntensity={0.4} rotateOnHover={false} hue={270} forceHoverState={true} />
        </div>

        {/* Grid Overlay */}
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0, zIndex: 1 }}></div>

        {/* Animated particle field background (optional, can be removed if Orb is enough) */}
        <div className="particle-field" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>

        <div className="about-container" style={{ position: 'relative', zIndex: 3 }}>
          <span className="section-label animate-fade-in">[ABOUT US]</span>
          <h2 className={`section-title ${isVisible ? 'visible' : ''}`} ref={sectionRef}>Our Story</h2>
          <div className={`story-content ${isVisible ? 'visible' : ''}`}>
            <p className="story-text story-paragraph-1">
              The world is advancing faster than childhood can keep up. Technology — once a tool for wonder — now shapes how children see, feel, and grow. Somewhere between connection and consumption, we began to lose something precious.
            </p>
            <p className="story-text story-paragraph-2">
              Social media exposure, rising digital dangers, and emotional harm have turned exploration into erosion. The internet should grow children — not consume them.
            </p>
            <p className="story-text story-emphasis story-quote-box">
              Guardian AI was born to reclaim that balance — not by resisting technology, but by redefining its purpose as a partner in nurturing the human spirit, not a predator of it.
            </p>
            <p className="story-text story-paragraph-3">
              We believe protection is not about control, but about empowerment, awareness, and compassion in design. Guardian AI stands as a bridge between innovation and innocence — an ally that learns, understands, and protects without ever violating trust.
            </p>
          </div>

          <div className={`mission-vision-grid ${cardsVisible ? 'visible' : ''}`} ref={cardsRef}>
            <div className="mv-card mission-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="mv-card-content">
                <h3>Mission</h3>
                <p>
                  To protect and empower children in the digital age — ensuring technology becomes a tool for growth, not harm.
                </p>
              </div>
            </div>

            <div className="mv-card vision-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div className="mv-card-content">
                <h3>Vision</h3>
                <p>
                  A world where every child can explore, learn, and thrive safely — guided by AI guardians that respect privacy and humanity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
