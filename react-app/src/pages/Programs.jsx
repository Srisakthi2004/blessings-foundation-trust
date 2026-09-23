import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchPrograms } from '../services/api';

export default function Programs() {
  const location = useLocation();
  const fallbackPrograms = [
    {
      badge: 'Education',
      title: 'Education Support Program',
      desc: 'Distributes comprehensive school supply kits (bags, books, pens, geometry tools) and sponsors basic tuition for promising rural students.',
      img: 'https://www.tnpscthervupettagam.com/assets/home/media/general/original_image/a587.png'
    },
    {
      badge: 'Healthcare',
      title: 'Healthcare Awareness Program',
      desc: 'Periodic free medical screening camps, doctor consultations, pediatric checkups, and nutritional advice for families with limited healthcare access.',
      img: 'https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/WhatsApp-Image-2019-12-21-at-12.28.37-PM.jpeg'
    },
    {
      badge: 'Community',
      title: 'Community Support Program',
      desc: 'Grassroots community aid including clean drinking water distribution, winter blanket drives, and elderly welfare assistance programs.',
      img: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/4c092438-50f5-4882-d19b-3ea11a23fc00/publicContain'
    },
    {
      badge: 'Livelihood',
      title: 'Women Empowerment Program',
      desc: 'Tailoring, embroidery, candle making, and basic accounts training to help women generate household income with dignity.',
      img: 'https://awareeveryonefoundation.org/wp-content/uploads/2022/11/women-empower.jpg'
    },
    {
      badge: 'Youth Skills',
      title: 'Skill Development Program',
      desc: 'Basic computer literacy, English communication, resume building, and vocational skills for youth entering the job market.',
      img: 'https://static.vecteezy.com/system/resources/previews/011/139/420/large_2x/skill-development-word-concepts-mint-banner-enhancing-student-proficiency-infographics-with-icons-on-color-background-isolated-typography-illustration-with-text-vector.jpg'
    },
    {
      badge: 'Food Relief',
      title: 'Food & Essential Support Program',
      desc: 'Emergency ration kits comprising rice, pulses, oil, and hygiene supplies distributed to families during distress, floods, or seasonal unemployment.',
      img: 'https://tse3.mm.bing.net/th/id/OIP.FNhXMOjMoc854zT0PUBq3wHaHa?r=0&pid=Api&h=220&P=0'
    }
  ];
  const [allPrograms, setAllPrograms] = useState(fallbackPrograms);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    fetchPrograms()
      .then((programs) => setAllPrograms(programs.map((program) => ({
        ...program,
        img: program.imageUrl
          ? `/${program.imageUrl.replace(/^\//, '')}`
          : program.title?.toLowerCase().includes('education')
            ? 'https://www.tnpscthervupettagam.com/assets/home/media/general/original_image/a587.png'
          : program.title?.toLowerCase().includes('healthcare')
            ? 'https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/WhatsApp-Image-2019-12-21-at-12.28.37-PM.jpeg'
            : '/images/gallery1.jpg',
        desc: program.description,
        badge: 'Community Program'
      }))))
      .catch(() => {
        // Keep the bundled program content visible when the optional API is offline.
        setLoadError('');
      });
  }, []);

  useEffect(() => {
    if (!location.hash) return;

    const target = document.getElementById(location.hash.slice(1));
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [location.hash]);

  return (
    <div>
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #15304f 100%)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(245,130,32,0.2)', color: '#fed7aa', border: '1px solid rgba(245,130,32,0.4)' }}>
            COMMUNITY IMPACT
          </span>
          <h1 style={{ color: '#ffffff', fontSize: '2.75rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Our Work &amp; Specialized Programs
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.15rem', maxWidth: '720px' }}>
            Addressing systemic obstacles with practical, grassroots interventions across education, health, welfare, and sustainable livelihoods.
          </p>
        </div>
      </section>

      {/* Six Pillars of Our Community Work */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Key Areas of Focus</span>
            <h2 className="section-title">Six Pillars of Our Community Work</h2>
            <p className="section-subtitle">
              Our integrated approach ensures vulnerable individuals receive support at every critical stage of life.
            </p>
          </div>

          <div className="work-grid">
            <div className="work-card" id="education">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
              </div>
              <h3 className="work-title">Education Support</h3>
              <p className="work-desc">
                Ensuring no child drops out of school due to lack of resources. We supply books, uniforms, digital literacy workshops, and after-school tutoring.
              </p>
              <Link to="/volunteer" className="btn btn-outline btn-sm">Join as Tutor &rarr;</Link>
            </div>

            <div className="work-card" id="healthcare">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
              </div>
              <h3 className="work-title">Healthcare Awareness</h3>
              <p className="work-desc">
                Organizing free basic health diagnosis, eye vision examinations, hygiene supply distribution, and preventive lifestyle awareness drives.
              </p>
              <Link to="/volunteer" className="btn btn-outline btn-sm">Support Medical Drive &rarr;</Link>
            </div>

            <div className="work-card" id="women">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </div>
              <h3 className="work-title">Women Empowerment</h3>
              <p className="work-desc">
                Conducting vocational tailoring courses, financial budgeting workshops, and micro-entrepreneurship support to foster independent female livelihood.
              </p>
              <Link to="/volunteer" className="btn btn-outline btn-sm">Mentor Women &rarr;</Link>
            </div>

            <div className="work-card" id="child">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <h3 className="work-title">Child Welfare</h3>
              <p className="work-desc">
                Protecting vulnerable children from malnutrition and child labor through supplementary nourishment, learning aids, and protective child rights care.
              </p>
              <Link to="/volunteer" className="btn btn-outline btn-sm">Help Children &rarr;</Link>
            </div>

            <div className="work-card" id="community">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <h3 className="work-title">Community Development</h3>
              <p className="work-desc">
                Assisting marginalized settlements with clean drinking water provisions, sanitation education, and immediate relief kits during unexpected crises.
              </p>
              <Link to="/volunteer" className="btn btn-outline btn-sm">Support Neighborhoods &rarr;</Link>
            </div>

            <div className="work-card" id="environment">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>
              </div>
              <h3 className="work-title">Environmental Awareness</h3>
              <p className="work-desc">
                Conducting mass sapling plantation drives, neighborhood cleanliness walkathons, waste segregation workshops, and eco-friendly habit campaigns.
              </p>
              <Link to="/volunteer" className="btn btn-outline btn-sm">Plant Trees With Us &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Flagship Programs */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Structured Initiatives</span>
            <h2 className="section-title">Our Active Programs</h2>
            <p className="section-subtitle">
              These ongoing flagship programs welcome donor support and volunteer participation throughout the year.
            </p>
          </div>

          <div className="programs-grid">
            {allPrograms.map((p, idx) => (
              <div key={idx} className="program-card">
                <div className="program-img-wrapper">
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <span className="program-badge">{p.badge}</span>
                </div>
                <div className="program-body">
                  <h3 className="program-title">{p.title}</h3>
                  <p className="program-desc">{p.desc}</p>
                  <Link to="/volunteer" className="btn btn-outline btn-sm">Participate in Program &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
          {loadError && <p className="form-alert error" style={{ display: 'flex', marginTop: '1.5rem' }}>{loadError}</p>}
        </div>
      </section>
    </div>
  );
}
