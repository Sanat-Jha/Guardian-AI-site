import React, { useEffect, useState } from 'react';
import './HeroSection.css';
// import CardSwap, { Card } from './CardSwap';
import TextPressure from './TextPressure';
import Threads from './Threads';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    // Only update isScrolled for navbar effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <div className={`hero-container ${isHoverDialogOpen ? 'dialog-active' : ''}`} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Threads Background */}
      <Threads 
        color={[0.14, 0.82, 0.89]} 
        amplitude={1.2} 
        distance={0.7} 
        enableMouseInteraction={true} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none', // allow interaction with content above
        }}
      />
      
      {/* Hover Dialog Backdrop Blur */}
      {isHoverDialogOpen && <div className="hover-dialog-backdrop" />}
      

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


        {/* Grid Pattern Overlay */}
        <div className="grid-overlay"></div>

        {/* Centered Hero Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', width: '100%' }}>
          <div className="headline-wrapper" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'center' }}>
              <div style={{ height: '70px', display: 'flex', alignItems: 'center' }}>
                <TextPressure 
                  text="EMPOWERING"
                  fontFamily="'Quicksand', sans-serif"
                  fontUrl=""
                  textColor="#FFFFFF"
                  width={true}
                  weight={true}
                  italic={false}
                  alpha={false}
                  flex={false}
                  stroke={false}
                  scale={false}
                  minFontSize={48}
                  className="headline-word"
                />
              </div>
              <div style={{ height: '70px', display: 'flex', alignItems: 'center' }}>
                <TextPressure 
                  text="DIGITAL"
                  fontFamily="'Quicksand', sans-serif"
                  fontUrl=""
                  textColor="#23D2E2"
                  width={true}
                  weight={true}
                  italic={false}
                  alpha={false}
                  flex={false}
                  stroke={false}
                  scale={false}
                  minFontSize={48}
                  className="headline-word"
                />
              </div>
              <div style={{ height: '70px', display: 'flex', alignItems: 'center' }}>
                <TextPressure 
                  text="CHILDHOOD"
                  fontFamily="'Quicksand', sans-serif"
                  fontUrl=""
                  textColor="#FFFFFF"
                  width={true}
                  weight={true}
                  italic={false}
                  alpha={false}
                  flex={false}
                  stroke={false}
                  scale={false}
                  minFontSize={48}
                  className="headline-word"
                />
              </div>
            </div>
          </div>
          <h2 className="headline-subtext" style={{ textAlign: 'center' }}>
            Guarding humanity's future
            <span className="headline-highlight"> — one child at a time.</span>
          </h2>
          <div className="hero-buttons-group" style={{ justifyContent: 'center' }}>
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
