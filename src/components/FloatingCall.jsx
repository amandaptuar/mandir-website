import React from 'react';
import { Phone } from 'lucide-react';
import './FloatingCall.css';

const FloatingCall = () => {
  return (
    <a 
      href="tel:+919001452087" 
      className="floating-call"
      aria-label="Call Us"
    >
      <Phone size={28} />
    </a>
  );
};

export default FloatingCall;
