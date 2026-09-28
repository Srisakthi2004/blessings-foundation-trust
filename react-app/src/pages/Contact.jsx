import React, { useState } from 'react';
import { submitContactMessage } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setAlert({
        type: 'error',
        text: 'Please fill in all required fields (Name, Email, Subject, Message).'
      });
      return;
    }

    setLoading(true);
    setAlert(null);

    try {
      const result = await submitContactMessage(formData);
      setLoading(false);
      setAlert({
        type: 'success',
        text: result.message || `Thank you, ${formData.name}! Your message has been sent successfully. We will get back to you shortly.`
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setLoading(false);
      setAlert({
        type: 'error',
        text: error.message || 'Unable to send your message. Please try again.'
      });
    }
  };

  return (
    <div>
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #15304f 100%)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(245,130,32,0.2)', color: '#fed7aa', border: '1px solid rgba(245,130,32,0.4)' }}>
            GET IN TOUCH
          </span>
          <h1 style={{ color: '#ffffff', fontSize: '2.75rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Contact Us
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.15rem', maxWidth: '720px' }}>
            We would love to hear from you. Reach out to us for community drives, donation receipts, volunteer inquiries, or collaborations.
          </p>
        </div>
      </section>

      {/* Form & Coordinates */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'flex-start' }}>
            {/* Left: Contact Form */}
            <div>
              <div className="form-card">
                <h2 style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>Send Us a Message</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                  Fill in the form below and our team will get back to you promptly.
                </p>

                {alert && (
                  <div className={`form-alert ${alert.type}`} style={{ display: 'flex' }}>
                    <svg style={{ width: '20px', height: '20px', flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
                      {alert.type === 'success' ? (
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      ) : (
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      )}
                    </svg>
                    <span>{alert.text}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contactName" className="form-label">Your Name *</label>
                      <input
                        type="text"
                        id="contactName"
                        name="name"
                        className="form-control"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contactEmail" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="contactEmail"
                        name="email"
                        className="form-control"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contactPhone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        id="contactPhone"
                        name="phone"
                        className="form-control"
                        placeholder="e.g. +91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contactSubject" className="form-label">Subject *</label>
                      <input
                        type="text"
                        id="contactSubject"
                        name="subject"
                        className="form-control"
                        placeholder="Subject of inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactMessage" className="form-label">Your Message *</label>
                    <textarea
                      id="contactMessage"
                      name="message"
                      className="form-control"
                      placeholder="Write your message or inquiry here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner"></span> Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Office Coordinates & Map Area */}
            <div>
              <span className="section-tag">Direct Coordinates</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Trust Office &amp; Details</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
                Feel free to visit our operational office or contact our representatives during working hours (Mon &ndash; Sat: 9:30 AM &ndash; 6:00 PM).
              </p>

              <div className="about-cards-grid">
                <div className="about-card">
                  <div className="about-card-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div>
                    <h3 className="about-card-title">Registered Office (Placeholder)</h3>
                    <p className="about-card-text">
                      Blessings Foundation Trust<br />
                      [Street / Building Placeholder], [Area Name],<br />
                      [City, State, Postal Code Placeholder]
                    </p>
                  </div>
                </div>

                <div className="about-card">
                  <div className="about-card-icon">
                    <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div>
                    <h3 className="about-card-title">Helpline &amp; WhatsApp (Placeholder)</h3>
                    <p className="about-card-text">
                      Main: +91 [98765 43210 Placeholder]<br />
                      Volunteer Desk: +91 [98765 43211 Placeholder]
                    </p>
                  </div>
                </div>

                <div className="about-card">
                  <div className="about-card-icon">
                    <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div>
                    <h3 className="about-card-title">Official Email (Placeholder)</h3>
                    <p className="about-card-text">
                      contact@blessingsfoundation.org (Placeholder)<br />
                      support@blessingsfoundation.org (Placeholder)
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Area */}
              <div style={{ marginTop: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1.5px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', backgroundColor: 'var(--bg-white)' }}>
                <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--secondary)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Location Map (Interactive Placeholder)</span>
                  <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Google Maps Area</span>
                </div>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#e2e8f0' }}>
                  <iframe
                    title="Blessings Foundation Office Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562064972322!2d77.20653221508215!3d28.612912082424915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
