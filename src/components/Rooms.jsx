import React from 'react';
import { Wifi, Tv, Coffee, Wind } from 'lucide-react';
import './Rooms.css';

const roomsData = [
  {
    id: 1,
    title: 'Executive AC Room',
    price: '₹1,699',
    description: 'Perfect for couples or small families seeking a comfortable, air-conditioned stay.',
    amenities: ['Air Conditioning', 'Free WiFi', 'Flat TV', 'Room Service'],
    image: '/image%20copy%202.png'
  },
  {
    id: 2,
    title: 'Family Suite',
    price: '₹3,199',
    description: 'Spacious suite designed for families, offering premium comfort and a serene atmosphere.',
    amenities: ['Spacious Layout', 'Air Conditioning', 'Free WiFi', 'Extra Bed available'],
    image: '/image%20copy%203.png'
  },
  {
    id: 3,
    title: 'Deluxe Triple Bed',
    price: '₹3,699',
    description: 'Ideal for larger groups or families, featuring three comfortable beds and premium amenities.',
    amenities: ['3 Beds', 'Air Conditioning', 'Premium Toiletries', 'Free WiFi'],
    image: '/image%20copy%204.png'
  }
];

const Rooms = () => {
  return (
    <section id="rooms" className="section">
      <div className="container">
        <h2 className="section-title">Our Sacred Stays</h2>
        <p className="section-subtitle">
          Experience premium comfort with our thoughtfully designed rooms, blending modern amenities with spiritual serenity.
        </p>

        <div className="grid md:grid-cols-3 rooms-grid">
          {roomsData.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-image">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div className="room-price">
                  <span>{room.price}</span> / Night
                </div>
              </div>
              <div className="room-content">
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <div className="room-amenities">
                  <div className="amenity-item"><Wind size={16} /> AC</div>
                  <div className="amenity-item"><Wifi size={16} /> WiFi</div>
                  <div className="amenity-item"><Tv size={16} /> TV</div>
                  <div className="amenity-item"><Coffee size={16} /> Service</div>
                </div>
                <a href="https://wa.me/919150763527" className="btn btn-primary w-100" target="_blank" rel="noreferrer">
                  Book on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;

