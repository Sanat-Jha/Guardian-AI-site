import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <span className="footer-title">Guardian AI</span>
        <span className="footer-copy">© {new Date().getFullYear()} Guardian AI. All rights reserved.</span>
      </div>
      <div className="footer-divider"></div>
      <nav className="footer-nav">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="footer-social">
        <a href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub">
          <Github size={22} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <Linkedin size={22} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter">
          <Twitter size={22} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
