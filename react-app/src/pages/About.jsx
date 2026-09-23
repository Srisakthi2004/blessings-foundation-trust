import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #15304f 100%)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(245,130,32,0.2)', color: '#fed7aa', border: '1px solid rgba(245,130,32,0.4)' }}>
            WHO WE ARE
          </span>
          <h6 style={{ color: '#fbd2a2', fontSize: '0.9rem', margin: '0.9rem 0 0.2rem', letterSpacing: '0.16rem', textTransform: 'uppercase' }}>
            About
          </h6>
          <h1 style={{ color: '#ffffff', fontSize: '2.75rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Blessings Foundation Trust
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.15rem', maxWidth: '700px' }}>
            Committed to community development, education, healthcare awareness, social welfare, and empowerment.
          </p>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-tag">Our Foundational Pillars</span>
              <h2 className="section-title">Bringing Hope, Uplifting Humanity</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                Blessings Foundation Trust was established with a singular objective: to stand alongside vulnerable individuals and families, bridging gaps in basic opportunities and nurturing human dignity.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                We operate transparently through direct community drives, partnering with local change-makers, volunteers, teachers, and compassionate healthcare workers.
              </p>
              <div style={{ marginTop: '1.75rem' }}>
                <Link to="/volunteer" className="btn btn-primary">Join Our Volunteer Team</Link>
              </div>
            </div>

            <div className="about-cards-grid">
              <div className="about-card">
                <div className="about-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.51L20.08 19H3.92L12 5.51zM11 10h2v4h-2zm0 6h2v2h-2z"/></svg>
                </div>
                <div>
                  <h3 className="about-card-title">Our Mission</h3>
                  <p className="about-card-text">
                    To work diligently toward sustainable community development, accessible education for underprivileged children, healthcare awareness, women's empowerment, and essential welfare support.
                  </p>
                </div>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </div>
                <div>
                  <h3 className="about-card-title">Our Vision</h3>
                  <p className="about-card-text">
                    A fair and compassionate world where every individual is empowered with knowledge, health, and equal opportunity to build an honorable, self-reliant future.
                  </p>
                </div>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <div>
                  <h3 className="about-card-title">Our Values</h3>
                  <p className="about-card-text">
                    Uncompromising integrity, deep empathy, respect for community ownership, complete transparency in resource utilization, and selfless dedication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Operating Principles</span>
            <h2 className="section-title">How We Deliver Lasting Change</h2>
            <p className="section-subtitle">
              Sustainable grassroots development is anchored on participatory decision making and ethical practices.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <h3 className="why-title">Grassroots Involvement</h3>
              <p className="why-desc">
                We work directly with residents to identify real needs before deploying educational supplies or health camps.
              </p>
            </div>

            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
              </div>
              <h3 className="why-title">Responsible Transparency</h3>
              <p className="why-desc">
                Every donation and resource is directed towards the specified program with zero administrative leakage.
              </p>
            </div>

            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>
              </div>
              <h3 className="why-title">Sustainable Upliftment</h3>
              <p className="why-desc">
                We emphasize education and livelihood training so beneficiaries can achieve long-term self-sufficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Leadership Placeholders */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Governance &amp; Leadership</span>
            <h2 className="section-title">Guided by Dedicated Trustees &amp; Advisors</h2>
            <p className="section-subtitle">
              Our governing board and volunteer leaders bring decades of combined passion for community service.
            </p>
          </div>

          <div className="work-grid">
            <div className="work-card text-center" style={{ alignItems: 'center' }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <svg style={{ width: '44px', height: '44px' }} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <h3 className="work-title" style={{ marginBottom: '0.25rem' }}>[Managing Trustee Placeholder]</h3>
              <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.85rem' }}>Founder &amp; Trustee</span>
              <p className="work-desc">
                Oversees organizational direction, core outreach ethics, and community alignment across all regional chapters.
              </p>
            </div>

            <div className="work-card text-center" style={{ alignItems: 'center' }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <svg style={{ width: '44px', height: '44px' }} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <h3 className="work-title" style={{ marginBottom: '0.25rem' }}>[Program Director Placeholder]</h3>
              <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.85rem' }}>Operations &amp; Field Lead</span>
              <p className="work-desc">
                Coordinates on-ground volunteer teams, logistics for healthcare camps, and school distribution drives.
              </p>
            </div>

            <div className="work-card text-center" style={{ alignItems: 'center' }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <svg style={{ width: '44px', height: '44px' }} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <h3 className="work-title" style={{ marginBottom: '0.25rem' }}>[Community Coordinator Placeholder]</h3>
              <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.85rem' }}>Volunteer Coordinator</span>
              <p className="work-desc">
                Welcomes, trains, and facilitates volunteers, ensuring every volunteer is placed where their skills shine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
