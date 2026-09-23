import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../services/api';

export default function Events() {
  const fallbackEvents = [
    {
      img: 'https://assets.telegraphindia.com/telegraph/2025/Feb/1739258712_sundarban-2.jpg',
      date: '15 Oct 2026 (Placeholder)',
      location: 'Community Welfare Hall',
      title: 'Community Health & Vision Camp',
      desc: 'Comprehensive free medical consultations, diabetes and blood pressure checkups, pediatric advice, and vision screenings for senior citizens.'
    },
    {
      img: '/images/event2.svg',
      date: '28 Oct 2026 (Placeholder)',
      location: 'Govt High School Grounds',
      title: 'Youth Education Kit Distribution',
      desc: 'Distributing essential school bags, notebooks, geometry instruments, and stationery kits to children from marginalized households.'
    },
    {
      img: '/images/event3.svg',
      date: '12 Nov 2026 (Placeholder)',
      location: 'Suburban Community Park',
      title: 'Green Earth Tree Plantation Drive',
      desc: 'Uniting youth volunteers, senior citizens, and environmental educators to plant 500 indigenous trees and create a greener tomorrow.'
    }
  ];
  const [events, setEvents] = useState(fallbackEvents);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(() => {
        // Keep the bundled event content visible when the optional API is offline.
        setLoadError('');
      });
  }, []);

  return (
    <div>
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #15304f 100%)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(245,130,32,0.2)', color: '#fed7aa', border: '1px solid rgba(245,130,32,0.4)' }}>
            UPCOMING &amp; RECENT
          </span>
          <h1 style={{ color: '#ffffff', fontSize: '2.75rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Community Drives &amp; Events
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.15rem', maxWidth: '720px' }}>
            Join hands with us in our scheduled healthcare camps, student distribution drives, and awareness campaigns.
          </p>
        </div>
      </section>

      {/* Events Listing */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Calendar of Activities</span>
            <h2 className="section-title">Engage With Our Community</h2>
            <p className="section-subtitle">
              Events are held in coordination with local neighborhood leaders and partner doctors. All dates and venues below are editable placeholders.
            </p>
          </div>

          <div className="events-grid">
            {events.map((evt, idx) => (
              <div key={idx} className="event-card">
                <img src={evt.imageUrl ? `/${evt.imageUrl.replace(/^\//, '')}` : evt.img} alt={evt.title} className="event-img" loading="lazy" />
                <div className="event-body">
                  <div className="event-meta">
                    <span className="event-meta-item">
                      <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
                      {evt.eventDate || evt.date}
                    </span>
                    <span className="event-meta-item">
                      <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      {evt.location}
                    </span>
                  </div>
                  <h3 className="event-title">{evt.title}</h3>
                  <p className="event-desc">{evt.description || evt.desc}</p>
                  <div style={{ marginTop: 'auto' }}>
                    <Link to="/volunteer" className="btn btn-primary btn-sm">Volunteer for Event &rarr;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {loadError && <p className="form-alert error" style={{ display: 'flex', marginTop: '1.5rem' }}>{loadError}</p>}
        </div>
      </section>

      {/* Propose a Drive */}
      <section className="section-padding bg-white">
        <div className="container text-center">
          <span className="section-tag">Collaborate</span>
          <h2 className="section-title">Want to Organize a Drive in Your Area?</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            If you know a community in need of health screenings, student books, or relief supplies, reach out to our program coordinator.
          </p>
          <Link to="/contact" className="btn btn-primary">Propose a Community Drive</Link>
        </div>
      </section>
    </div>
  );
}
