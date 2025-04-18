import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li><Phone size={16} /> +91 95894 65678</li>
              <li><Mail size={16} /> info@sanskarschool.com</li>
              <li>
                <MapPin size={50} /> 
                127, JAGDAMBA NAGAR, JASWADI ROAD, 
                NEAR MATA CHOUK, KHANDWA (M.P.) PIN-450001
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>School Hours</h3>              
            <ul>
              <li>Monday - Friday</li>
              <li>8:30 AM - 4:30 PM</li>
              <li>Office Hours:</li>
              <li>9:30 AM - 12:30 PM</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Sanskar Public School, Khandwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;