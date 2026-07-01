import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="section bg-main">
      <div className="container">
        <h2 className="section-title">Glimpses of Serenity</h2>
        <p className="section-subtitle">
          Take a visual journey through our Bhakta Niwas and experience the peaceful environment we offer.
        </p>

        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="/image%20copy%205.png" alt="Gallery 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="gallery-item">
            <img src="/image%20copy%206.png" alt="Gallery 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="gallery-item">
            <img src="/image%20copy%207.png" alt="Gallery 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="gallery-item">
            <img src="/image.png" alt="Gallery 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="gallery-item">
            <img src="/image%20copy.png" alt="Gallery 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

