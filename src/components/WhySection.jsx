import React, { useEffect, useRef, useState } from 'react';
import './WhySection.css';

const WhySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const narrativeLines = [
    "The world our children inherit is nothing like the one we knew.",
    "Their playgrounds are screens; their companions, algorithms.",
    "Every tap and scroll is engineered to capture attention — not inspire imagination.",
    "Digital childhood has become a battlefield —",
    "curiosity vs. control, learning vs. distraction, innocence vs. influence.",
    "",
    "Guardian AI was born from a simple conviction:",
    "",
    "Technology should serve childhood — not steal it.",
    "It stands beside parents, not above them —",
    "a silent ally nurturing digital wisdom, empathy, and balance.",
    "Together, they forge a new kind of guardianship —",
    "where human love and artificial intelligence unite to raise a stronger generation.",
    "",
    "Because protecting a child's mind today",
    "is the surest way to protect humanity's tomorrow."
  ];

  return (
    <section className="why-section" ref={sectionRef}>
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

      <div className="why-container">
        <div className={`why-content ${isVisible ? 'visible' : ''}`}>
          <h2 className="why-title">Why Guardian AI?</h2>
          <div className="narrative">
            {narrativeLines.map((line, index) => {
              const isEmpty = line === "";
              const isHighlight = 
                line.includes("Technology should serve childhood") ||
                line.includes("protecting a child's mind today") ||
                line.includes("protect humanity's tomorrow");
              
              return (
                <p 
                  key={index} 
                  className={`narrative-line ${isEmpty ? 'empty' : ''} ${isHighlight ? 'highlight' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {line || '\u00A0'}
                </p>
              );
            })}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="why-decoration">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glow-orb orb-3"></div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
