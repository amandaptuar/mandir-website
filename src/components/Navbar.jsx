import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'glass scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          <span className="logo-text">Shree Mahakaleshwar<br/><small>Bhakta Niwas</small></span>
        </a>

        <div className="nav-actions">
          <a href="https://wa.me/919001452087" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <Phone size={18} />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
