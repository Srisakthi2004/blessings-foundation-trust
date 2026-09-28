import React, { useState } from 'react';
import { submitVolunteer } from '../services/api';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    interest: 'Education Support',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null); // { type: 'success' | 'error', text: '' }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setAlert({
        type: 'error',
        text: 'Please fill in all required fields (Name, Email, Phone).'
      });
      return;
    }

    setLoading(true);
    setAlert(null);

    try {
      const result = await submitVolunteer(formData);
      setLoading(false);
      setAlert({
        type: 'success',
        text: result.message || `Thank you, ${formData.name}! Your volunteer registration has been received successfully. Our coordinator will contact you shortly.`
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        interest: 'Education Support',
        message: ''
      });
    } catch (error) {
      setLoading(false);
      setAlert({
        type: 'error',
        text: error.message || 'Unable to submit your registration. Please try again.'
      });
    }
  };

  return (
    <div>
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #15304f 100%)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(245,130,32,0.2)', color: '#fed7aa', border: '1px solid rgba(245,130,32,0.4)' }}>
            JOIN THE CAUSE
          </span>
          <h1 style={{ color: '#ffffff', fontSize: '2.75rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Become a Volunteer
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.15rem', maxWidth: '720px' }}>
            Lend your time, skills, and empathy. Together, we can touch lives, educate children, and bring healthcare to families in need.
          </p>
        </div>
      </section>

      {/* Volunteer Form & Information */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'flex-start' }}>
            {/* Left: Registration Form */}
            <div>
              <div className="form-card">
                <h2 style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>Volunteer Registration</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                  Fill out your details below. Our volunteer team will review your interest and connect with you for upcoming drives.
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
                  <div className="form-group">
                    <label htmlFor="volName" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="volName"
                      name="name"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="volEmail" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="volEmail"
                        name="email"
                        className="form-control"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="volPhone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        id="volPhone"
                        name="phone"
                        className="form-control"
                        placeholder="e.g. +91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="volAddress" className="form-label">City / Address</label>
                    <input
                      type="text"
                      id="volAddress"
                      name="address"
                      className="form-control"
                      placeholder="Your residential locality or city"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="volInterest" className="form-label">Area of Interest</label>
                    <select
                      id="volInterest"
                      name="interest"
                      className="form-control"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option value="Education Support">Education &amp; Student Tutoring</option>
                      <option value="Healthcare Awareness">Healthcare &amp; Medical Camps</option>
                      <option value="Women Empowerment">Women Vocational Training &amp; Mentorship</option>
                      <option value="Child Welfare">Child Care &amp; Nutrition Support</option>
                      <option value="Environmental Drives">Tree Plantation &amp; Cleanliness</option>
                      <option value="Community Food Relief">Food &amp; Essential Relief Drives</option>
                      <option value="General Volunteer">General Event Coordination</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="volMessage" className="form-label">Why would you like to volunteer? / Any skills?</label>
                    <textarea
                      id="volMessage"
                      name="message"
                      className="form-control"
                      placeholder="Tell us briefly about your background, availability, or any specialized skills..."
                      value={formData.message}
                      onChange={handleChange}
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
                        <span className="spinner"></span> Submitting...
                      </>
                    ) : (
                      'Become a Volunteer'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Why Volunteer */}
            <div>
              <span className="section-tag">Make an Impact</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Why Volunteer With Blessings Foundation?</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
                Volunteering with Blessings Foundation Trust is an opportunity to directly experience the joy of giving back and making a measurable change in grassroots communities.
              </p>

              <div className="about-cards-grid">
                <div className="about-card">
                  <div className="about-card-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  </div>
                  <div>
                    <h3 className="about-card-title">Direct On-Ground Experience</h3>
                    <p className="about-card-text">
                      Work directly alongside dedicated community members, doctors, and teachers during real field drives.
                    </p>
                  </div>
                </div>

                <div className="about-card">
                  <div className="about-card-icon">
                    <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                  </div>
                  <div>
                    <h3 className="about-card-title">Network of Compassionate Peers</h3>
                    <p className="about-card-text">
                      Connect with like-minded volunteers, students, professionals, and mentors who share your dedication to humanity.
                    </p>
                  </div>
                </div>

                <div className="about-card">
                  <div className="about-card-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <div>
                    <h3 className="about-card-title">Certificate of Volunteer Service</h3>
                    <p className="about-card-text">
                      Receive a formal certificate of appreciation recognizing your verified hours of volunteer dedication and social service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
