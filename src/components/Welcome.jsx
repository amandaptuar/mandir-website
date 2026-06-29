import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className="section bg-card">
      <div className="container">
        <div className="welcome-grid">
          <div className="welcome-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Welcome to Shree Mahakaleshwar Bhakta Niwas</h2>
            <p className="welcome-text">
              Embrace the divine serenity of Ujjain with a comfortable stay that feels just like home. 
              Our Bhakta Niwas is designed with the spirit of 'Atithi Devo Bhava', ensuring every devotee 
              experiences unparalleled peace and hospitality during their spiritual journey.
            </p>
            <p className="welcome-text">
              Conveniently located near the holy Sandipani Parisar, we provide easy access to 
              major temples while offering a tranquil retreat away from the city's hustle. Our clean, 
              well-maintained rooms and dedicated staff are here to make your pilgrimage truly memorable.
            </p>
            <div className="welcome-features">
              <div className="feature-item">✔ 24/7 Front Desk</div>
              <div className="feature-item">✔ Spiritual Environment</div>
              <div className="feature-item">✔ Impeccable Hygiene</div>
              <div className="feature-item">✔ Secure Parking</div>
            </div>
            <a href="https://wa.me/919001452087" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: '2rem' }}>Book on WhatsApp</a>
          </div>
          <div className="welcome-image-wrapper">
            <img 
              src="/image%20copy%208.png" 
              alt="Hotel Exterior" 
              className="welcome-image"
              style={{ objectFit: 'cover', width: '100%' }}
            />
            <div className="experience-badge">
              <span className="badge-number">10+</span>
              <span className="badge-text">Years of<br/>Hospitality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
