import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img 
          src="/image%20copy.png" 
          alt="Shree Mahakaleshwar Bhakta Niwas" 
          className="hero-image" 
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content animate-fade-in">
        <h1>Experience Divine Peace at<br/><span className="text-primary">Shree Mahakaleshwar Bhakta Niwas</span></h1>
        <p>A tranquil and spiritual stay located near the holy Sandipani Parisar in Ujjain. Your perfect retreat for a divine journey.</p>
        <div className="hero-buttons">
          <a href="https://wa.me/919150763527" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book on WhatsApp</a>
          <a href="https://wa.me/919150763527" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Enquire Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

