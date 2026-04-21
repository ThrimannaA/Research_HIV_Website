import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (menuOpen && !e.target.closest('.nav-menu') && !e.target.closest('.mobile-menu-btn')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>HIV Smart Care</h1>
          </Link>
        </div>
        <div className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#domain" onClick={() => setMenuOpen(false)}>Domain</a></li>
            <li><a href="#milestones" onClick={() => setMenuOpen(false)}>Milestones</a></li>
            <li><a href="#documents" onClick={() => setMenuOpen(false)}>Documents</a></li>            
            <li><a href="#presentations" onClick={() => setMenuOpen(false)}>Presentations</a></li>
            <li><a href="#team" onClick={() => setMenuOpen(false)}>About Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 

