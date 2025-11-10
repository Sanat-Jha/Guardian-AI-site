import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import CardSwap, { Card } from './CardSwap';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHoverDialogOpen, setIsHoverDialogOpen] = useState(false);

  // Array of 4 images for card swap
  const images = [
    '/image1.png',
    '/image2.png',
    '/image3.png',
    '/image4.png'
  ];

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Parallax scroll effect
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isHoverDialogOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isHoverDialogOpen]);

  return (
    <div className={`hero-container ${isHoverDialogOpen ? 'dialog-active' : ''}`}>
      {/* Hover Dialog Backdrop Blur */}
      {isHoverDialogOpen && <div className="hover-dialog-backdrop" />}
      
      {/* Top Banner */}
      <div className="top-banner">
        <p>Protecting childhood, securing tomorrow</p>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo">
              <span className="logo-text">GUARDIAN AI</span>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="nav-menu">
              <a href="#home" className="nav-item">HOME</a>
              <a href="#about" className="nav-item">ABOUT US</a>
              <a href="#product" className="nav-item">THE PRODUCT</a>
              <a href="#contact" className="nav-item">CONTACT</a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <a href="#home" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>HOME</a>
            <a href="#about" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</a>
            <a href="#product" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>THE PRODUCT</a>
            <a href="#contact" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
            <button className="mobile-cta-btn">GET EARLY ACCESS</button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Floating Particles Background */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div className="grid-overlay"></div>

        <div className="hero-grid">
          {/* Left Column - Content */}
          <div 
            className={`hero-left ${isVisible ? 'visible' : ''}`}
          >
            <div className="content-wrapper">
              <span className="hero-label">[HOME]</span>
              <h1 className="headline">
                Empowering digital childhood and guarding humanity's future
                <span className="headline-highlight"> — one child at a time.</span>
              </h1>
              <div className="hero-buttons-group">
                <button className="why-button" onClick={() => {
                  setIsModalOpen(true);
                  setIsHoverDialogOpen(true);
                }}>
                  <span>Why Guardian AI?</span>
                </button>
                
                <button className="hero-cta-btn">
                  <span>GET EARLY ACCESS</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image with Card Swap */}
          <div 
            className={`hero-right ${isVisible ? 'visible' : ''}`}
          >
            <CardSwap
              width={500}
              height={400}
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
              skewAmount={6}
              easing="power2"
            >
              {/* Card 1 - Shield Protection */}
              <Card key={0}>
                <div className="holographic-content holo-shield">
                  <div className="holo-grid"></div>
                  <svg className="holo-icon" viewBox="0 0 200 200" fill="none">
                    <path d="M100 20 L160 40 L160 90 C160 130 140 160 100 180 C60 160 40 130 40 90 L40 40 Z" 
                          stroke="#23D2E2" strokeWidth="3" fill="rgba(35, 210, 226, 0.1)">
                      <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                    </path>
                    <circle cx="100" cy="100" r="30" stroke="#23D2E2" strokeWidth="2" fill="none">
                      <animate attributeName="r" values="20;35;20" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                  <div className="holo-scan-line"></div>
                </div>
              </Card>

              {/* Card 2 - Network Empowerment */}
              <Card key={1}>
                <div className="holographic-content holo-network">
                  <div className="holo-grid"></div>
                  <svg className="holo-icon" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="8" fill="#7B6CF6"/>
                    <circle cx="60" cy="60" r="6" fill="#23D2E2"/>
                    <circle cx="140" cy="60" r="6" fill="#23D2E2"/>
                    <circle cx="60" cy="140" r="6" fill="#23D2E2"/>
                    <circle cx="140" cy="140" r="6" fill="#23D2E2"/>
                    <line x1="100" y1="100" x2="60" y2="60" stroke="#23D2E2" strokeWidth="2">
                      <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite"/>
                    </line>
                    <line x1="100" y1="100" x2="140" y2="60" stroke="#23D2E2" strokeWidth="2">
                      <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
                    </line>
                    <line x1="100" y1="100" x2="60" y2="140" stroke="#23D2E2" strokeWidth="2">
                      <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="1.5s" begin="0.6s" repeatCount="indefinite"/>
                    </line>
                    <line x1="100" y1="100" x2="140" y2="140" stroke="#23D2E2" strokeWidth="2">
                      <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="1.5s" begin="0.9s" repeatCount="indefinite"/>
                    </line>
                  </svg>
                  <div className="holo-wave"></div>
                </div>
              </Card>

              {/* Card 3 - Target Safety */}
              <Card key={2}>
                <div className="holographic-content holo-target">
                  <div className="holo-grid"></div>
                  <svg className="holo-icon" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="60" stroke="#23D2E2" strokeWidth="2" opacity="0.3"/>
                    <circle cx="100" cy="100" r="45" stroke="#23D2E2" strokeWidth="2" opacity="0.5">
                      <animate attributeName="r" values="45;50;45" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="100" cy="100" r="30" stroke="#7B6CF6" strokeWidth="3" opacity="0.7">
                      <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="100" cy="100" r="5" fill="#23D2E2">
                      <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
                    </circle>
                    <line x1="100" y1="40" x2="100" y2="70" stroke="#23D2E2" strokeWidth="2"/>
                    <line x1="100" y1="130" x2="100" y2="160" stroke="#23D2E2" strokeWidth="2"/>
                    <line x1="40" y1="100" x2="70" y2="100" stroke="#23D2E2" strokeWidth="2"/>
                    <line x1="130" y1="100" x2="160" y2="100" stroke="#23D2E2" strokeWidth="2"/>
                  </svg>
                  <div className="holo-corner-brackets"></div>
                </div>
              </Card>

              {/* Card 4 - Lock Security */}
              <Card key={3}>
                <div className="holographic-content holo-lock">
                  <div className="holo-grid"></div>
                  <svg className="holo-icon" viewBox="0 0 200 200" fill="none">
                    <rect x="70" y="100" width="60" height="60" rx="5" stroke="#23D2E2" strokeWidth="3" fill="rgba(35, 210, 226, 0.1)">
                      <animate attributeName="fill-opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite"/>
                    </rect>
                    <path d="M80 100 V80 Q80 60 100 60 Q120 60 120 80 V100" stroke="#7B6CF6" strokeWidth="3" fill="none">
                      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                    </path>
                    <circle cx="100" cy="125" r="8" fill="#23D2E2">
                      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    <line x1="100" y1="133" x2="100" y2="145" stroke="#23D2E2" strokeWidth="2"/>
                  </svg>
                  <div className="holo-data-stream"></div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>

        {/* Subheadline at bottom */}
        <p className="subheadline">
          AI that protects, empowers, and enlightens — nurturing the next generation to thrive in a digital world.
        </p>
      </div>

      {/* Hover Dialog - Outside hero content to avoid blur */}
      {isHoverDialogOpen && (
        <div className="hover-dialog">
          <button 
            className="hover-dialog-close" 
            onClick={() => {
              setIsHoverDialogOpen(false);
              setIsModalOpen(false);
            }}
          >
            <span>×</span>
          </button>
          <h2 className="hover-dialog-title">Why Guardian AI?</h2>
          <div className="hover-dialog-content">
            <div className="dialog-section">
              <p className="dialog-text">
                The world our children inherit is nothing like the one we knew.
              </p>
              <p className="dialog-text">
                Their playgrounds are screens; their companions, algorithms.
              </p>
              <p className="dialog-text">
                Every tap and scroll is engineered to capture attention — not inspire imagination.
              </p>
            </div>

            <div className="dialog-divider"></div>

            <div className="dialog-section dialog-highlight">
              <p className="dialog-text-emphasis">
                Digital childhood has become a battlefield — curiosity vs. control, learning vs. distraction, innocence vs. influence.
              </p>
            </div>

            <div className="dialog-divider"></div>

            <div className="dialog-section">
              <p className="dialog-text">
                Guardian AI was born from a simple conviction:
              </p>
            </div>

            <div className="dialog-quote">
              <span className="quote-mark">"</span>
              <p className="quote-text">Technology should serve childhood — not steal it.</p>
              <span className="quote-mark">"</span>
            </div>

            <div className="dialog-divider"></div>

            <div className="dialog-section">
              <p className="dialog-text">
                It stands beside parents, not above them — a silent ally nurturing digital wisdom, empathy, and balance.
              </p>
              <p className="dialog-text">
                Together, they forge a new kind of guardianship — where human love and artificial intelligence unite to raise a stronger generation.
              </p>
            </div>

            <div className="dialog-divider"></div>

            <div className="dialog-section dialog-highlight">
              <p className="dialog-text-emphasis">
                Because protecting a child's mind today is the surest way to protect humanity's tomorrow.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal - Hidden since we're using hover dialog */}
      {false && isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <h2 className="modal-title">Why Guardian AI?</h2>
            <div className="modal-cards-grid">
              <div className="modal-card">
                <div className="modal-card-content">
                  <p>The world our children inherit is nothing like the one we knew.</p>
                  <p>Their playgrounds are screens; their companions, algorithms.</p>
                  <p>Every tap and scroll is engineered to capture attention — not inspire imagination.</p>
                </div>
              </div>
              <div className="modal-card modal-card-emphasis">
                <div className="modal-card-content">
                  <p>Digital childhood has become a battlefield — curiosity vs. control, learning vs. distraction, innocence vs. influence.</p>
                </div>
              </div>
              <div className="modal-card">
                <div className="modal-card-content">
                  <p>Guardian AI was born from a simple conviction:</p>
                </div>
              </div>
              <div className="modal-card modal-card-emphasis">
                <div className="modal-card-content">
                  <p>Technology should serve childhood — not steal it.</p>
                </div>
              </div>
              <div className="modal-card">
                <div className="modal-card-content">
                  <p>It stands beside parents, not above them — a silent ally nurturing digital wisdom, empathy, and balance.</p>
                  <p>Together, they forge a new kind of guardianship — where human love and artificial intelligence unite to raise a stronger generation.</p>
                </div>
              </div>
              <div className="modal-card modal-card-emphasis">
                <div className="modal-card-content">
                  <p>Because protecting a child's mind today is the surest way to protect humanity's tomorrow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
