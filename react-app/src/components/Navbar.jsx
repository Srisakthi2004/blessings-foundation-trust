import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

/**
 * Main Navigation Bar Component with Mobile Hamburger Menu
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer upon page change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMenu} aria-label="Blessings Foundation Trust Home">
          <img src="/images/blessings-foundation-logo.jpeg" alt="Blessings Foundation Trust Logo" className="brand-logo-img" />
          <div className="brand-logo-text">
            <span className="brand-title">Blessings</span>
            <span className="brand-subtitle">Foundation Trust</span>
          </div>
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/programs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Our Work
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Gallery
          </NavLink>
          <NavLink to="/events" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Events
          </NavLink>
          <NavLink to="/volunteer" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Get Involved
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Contact Us
          </NavLink>
          <div className="header-action">
            <Link to="/donate" className="btn btn-primary btn-sm" onClick={closeMenu}>
              Donate Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
