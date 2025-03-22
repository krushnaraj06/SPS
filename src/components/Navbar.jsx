import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="spslogo.png" alt="School Logo" />
          <span>Sanskar Public School</span>
        </Link>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/academics" onClick={() => setIsMenuOpen(false)}>Academics</Link></li>
          <li><Link to="/admissions" onClick={() => setIsMenuOpen(false)}>Admissions</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;