import React from 'react';
import { Heart, Sparkles, MapPin, Coffee, Shield, Wifi } from 'lucide-react';
import './Amenities.css';

const Amenities = () => {
  return (
    <section className="section bg-main">
      <div className="container">
        <h2 className="section-title">Facilities & Amenities</h2>
        <p className="section-subtitle">
          We provide everything you need for a comfortable and spiritually uplifting stay in Ujjain.
        </p>

        <div className="grid md:grid-cols-3 amenities-grid">
          <div className="amenity-card">
            <div className="icon-wrapper"><Heart className="icon" /></div>
            <h3>Atithi Devo Bhava</h3>
            <p>Warm hospitality and personal care that makes you feel right at home.</p>
          </div>
          <div className="amenity-card">
            <div className="icon-wrapper"><Sparkles className="icon" /></div>
            <h3>Divine Cleanliness</h3>
            <p>Immaculate environment reflecting the sanctity of the holy city.</p>
          </div>
          <div className="amenity-card">
            <div className="icon-wrapper"><MapPin className="icon" /></div>
            <h3>Prime Location</h3>
            <p>Easy access to the main temple and situated near Sandipani Parisar.</p>
          </div>
          <div className="amenity-card">
            <div className="icon-wrapper"><Coffee className="icon" /></div>
            <h3>Room Service</h3>
            <p>Prompt and courteous room service available round the clock.</p>
          </div>
          <div className="amenity-card">
            <div className="icon-wrapper"><Shield className="icon" /></div>
            <h3>Secure Parking</h3>
            <p>Safe and ample parking space for all guest vehicles.</p>
          </div>
          <div className="amenity-card">
            <div className="icon-wrapper"><Wifi className="icon" /></div>
            <h3>Free Wi-Fi</h3>
            <p>Stay connected with high-speed internet access throughout the premises.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;

