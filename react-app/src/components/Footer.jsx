import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Footer Component
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand */}
          <div className="footer-brand">
            <h4>
              <span style={{ color: 'var(--primary)', fontSize: '1.6rem' }}>&#9829;</span>
              Blessings Foundation Trust
            </h4>
            <p>
              Blessings Foundation Trust is committed to supporting communities, empowering people, and creating opportunities for a brighter, healthier, and more inclusive tomorrow.
            </p>
            <div className="social-links">
              <a href="#facebook" className="social-btn" aria-label="Facebook (Placeholder)">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#twitter" className="social-btn" aria-label="Twitter (Placeholder)">
                <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#instagram" className="social-btn" aria-label="Instagram (Placeholder)">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#linkedin" className="social-btn" aria-label="LinkedIn (Placeholder)">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">&rarr; Home</Link></li>
              <li><Link to="/about">&rarr; About Us</Link></li>
              <li><Link to="/programs">&rarr; Our Work</Link></li>
              <li><Link to="/gallery">&rarr; Photo Gallery</Link></li>
              <li><Link to="/events">&rarr; Events &amp; Drives</Link></li>
              <li><Link to="/volunteer">&rarr; Become a Volunteer</Link></li>
              <li><Link to="/contact">&rarr; Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="footer-col-title">Our Programs</h4>
            <ul className="footer-links">
              <li><Link to="/programs#education">&rarr; Education Support</Link></li>
              <li><Link to="/programs#healthcare">&rarr; Healthcare Camps</Link></li>
              <li><Link to="/programs#women">&rarr; Women Empowerment</Link></li>
              <li><Link to="/programs#child">&rarr; Child Welfare</Link></li>
              <li><Link to="/programs#community">&rarr; Community Aid</Link></li>
              <li><Link to="/programs#environment">&rarr; Green Initiatives</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="footer-col-title">Contact Information</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>[Organization Address Placeholder]<br />Main Road, City, State - PIN</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>+91 [Phone Placeholder]</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>contact@[domain-placeholder].org</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Blessings Foundation Trust. All Rights Reserved.</p>
          <p>A Dedicated Grassroots Welfare and Community Development Trust.</p>
        </div>
      </div>
    </footer>
  );
}
