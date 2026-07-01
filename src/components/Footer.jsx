import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-title">Shree Mahakaleshwar Bhakta Niwas</h3>
            <p className="footer-desc">
              Your serene and spiritual retreat in the holy city of Ujjain. Experience unparalleled peace and comfort during your divine journey.
            </p>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <MapPin className="footer-icon" />
                <span>Bharat Mata Temple, Sandipani Parisar, Indira Nagar, Ujjain, Madhya Pradesh 456006</span>
              </li>
              <li>
                <Phone className="footer-icon" />
                <span><a href="tel:+919150763527">+91 9150763527</a></span>
              </li>
              <li>
                <Mail className="footer-icon" />
                <span><a href="mailto:info@shreemahakaleshwarbhaktnivas.in">info@shreemahakaleshwarbhaktnivas.in</a></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shree Mahakaleshwar Bhakta Niwas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

