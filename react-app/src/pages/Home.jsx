import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from '../components/Lightbox';

export default function Home() {
  const [activePhoto, setActivePhoto] = useState(null);

  const galleryItems = [
    { src: 'https://excelsioramericanschooladmissions.com/blogs/wp-content/uploads/2024/02/Digital-Literacy-in-Education-Integrating-Technology-at-Excelsior-American-School.jpg', title: 'Education & Literacy', subtitle: 'Classroom Learning Drive' },
    { src: 'https://azbigmedia.com/wp-content/uploads/2023/11/Free-Medical-Camp.jpg', title: 'Healthcare & Vision Camp', subtitle: 'Free Medical Screening' },
    { src: 'https://ykkasia.com/wp-content/uploads/2007/01/IND-Vocational-Training-Center-1.jpg', title: 'Women Vocational Training', subtitle: 'Tailoring & Handicrafts' },
    { src: 'https://tse1.mm.bing.net/th/id/OIP.H5_inKpJ-rhC9TnMHCb8PgHaE8?r=0&pid=Api&h=220&P=0', title: 'Child Nutrition Drive', subtitle: 'Healthy Meals & Care' },
    { src: 'https://static.vecteezy.com/system/resources/previews/022/171/704/large_2x/people-helping-planting-tree-in-nature-for-save-earth-environment-eco-concept-free-photo.jpg', title: 'Green Earth Plantation', subtitle: 'Tree Planting Campaign' },
    { src: 'https://tse1.mm.bing.net/th/id/OIP.3etlX8ZW0cNYW13z9ZEm5gHaE7?r=0&pid=Api&h=220&P=0', title: 'Community Food Relief', subtitle: 'Essential Supplies Distribution' }
  ];

  return (
    <div>
      {/* Hero Banner Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>&#10024; Empowering Lives &bull; Building Stronger Communities</span>
            </div>
            <h1 className="hero-headline">
              Together We Can Create a <span>Better Tomorrow</span>
            </h1>
            <p className="hero-text">
              Blessings Foundation Trust is committed to supporting communities, empowering people, and creating opportunities for a brighter and more inclusive future.
            </p>
            <div className="hero-buttons">
              <Link to="/donate" className="btn btn-primary">Donate Now</Link>
              <Link to="/about" className="btn btn-outline-white">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Impact Ribbon */}
      <div className="container">
        <div className="impact-ribbon">
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-icon-wrapper">
                <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div>
                <div className="impact-number">5,000+</div>
                <div className="impact-label">Lives Touched</div>
                <span className="placeholder-note">*Editable Metric</span>
              </div>
            </div>

            <div className="impact-item">
              <div className="impact-icon-wrapper">
                <svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
              </div>
              <div>
                <div className="impact-number">1,200+</div>
                <div className="impact-label">Students Supported</div>
                <span className="placeholder-note">*Editable Metric</span>
              </div>
            </div>

            <div className="impact-item">
              <div className="impact-icon-wrapper">
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
              </div>
              <div>
                <div className="impact-number">45+</div>
                <div className="impact-label">Health Camps Organised</div>
                <span className="placeholder-note">*Editable Metric</span>
              </div>
            </div>

            <div className="impact-item">
              <div className="impact-icon-wrapper">
                <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <div>
                <div className="impact-number">350+</div>
                <div className="impact-label">Active Volunteers</div>
                <span className="placeholder-note">*Editable Metric</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Preview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-tag">About Our Foundation</span>
              <h2 className="section-title">Dedicated to Bringing Hope, Dignity and Growth</h2>
              <p>
                Blessings Foundation Trust works toward community development, education, healthcare awareness, social welfare, and empowerment. We believe that sustainable transformation begins at the grassroots level by uplifting underprivileged individuals and families with care, resources, and continuous guidance.
              </p>
              <p>
                Our dedicated team coordinates with local volunteers, educators, and doctors to ensure every initiative reaches those who need it most, upholding the highest standards of transparency and service.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <Link to="/about" className="btn btn-primary">Our Complete Story</Link>
                <Link to="/volunteer" className="btn btn-outline">Join As Volunteer</Link>
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
                    To uplift vulnerable communities through accessible quality education, healthcare awareness drives, livelihood skills, and emergency social welfare assistance.
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
                    A compassionate and inclusive society where every person, child, and family has the opportunity to live with dignity, self-reliance, and health.
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
                    Compassion, Transparency, Inclusiveness, Grassroots Integrity, and Sustainable Community Partnership guide each of our actions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Work Areas */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Core Focus Areas</span>
            <h2 className="section-title">What We Do to Empower Communities</h2>
            <p className="section-subtitle">
              From basic literacy to holistic healthcare and environmental sustainability, our initiatives address root challenges facing underserved populations.
            </p>
          </div>

          <div className="work-grid">
            <div className="work-card">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
              </div>
              <h3 className="work-title">Education</h3>
              <p className="work-desc">
                Equipping underprivileged children with learning kits, remedial tutoring, school bags, and mentorship to prevent school dropouts and build bright careers.
              </p>
              <Link to="/programs" className="card-link-btn">Read More &rarr;</Link>
            </div>

            <div className="work-card">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
              </div>
              <h3 className="work-title">Healthcare</h3>
              <p className="work-desc">
                Organising preventive health checkup camps, vision screenings, blood donation awareness, and hygiene supply drives in rural and urban colonies.
              </p>
              <Link to="/programs" className="card-link-btn">Read More &rarr;</Link>
            </div>

            <div className="work-card">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </div>
              <h3 className="work-title">Women Empowerment</h3>
              <p className="work-desc">
                Providing vocational sewing, handicrafts, financial literacy workshops, and self-help group mentorship to foster female economic independence.
              </p>
              <Link to="/programs" className="card-link-btn">Read More &rarr;</Link>
            </div>

            <div className="work-card">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <h3 className="work-title">Child Welfare</h3>
              <p className="work-desc">
                Safeguarding child rights, distributing nutritional supplements, supporting orphanages, and running recreational development workshops.
              </p>
              <Link to="/programs" className="card-link-btn">Read More &rarr;</Link>
            </div>

            <div className="work-card">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <h3 className="work-title">Community Development</h3>
              <p className="work-desc">
                Strengthening local community infrastructure, clean drinking water drives, sanitation workshops, and emergency community disaster relief.
              </p>
              <Link to="/programs" className="card-link-btn">Read More &rarr;</Link>
            </div>

            <div className="work-card">
              <div className="work-icon-box">
                <svg viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>
              </div>
              <h3 className="work-title">Environmental Awareness</h3>
              <p className="work-desc">
                Promoting mass tree sapling plantation drives, clean neighborhood campaigns, plastic reduction awareness, and climate care education.
              </p>
              <Link to="/programs" className="card-link-btn">Read More &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Ongoing Initiatives</span>
            <h2 className="section-title">Our Active Programs</h2>
            <p className="section-subtitle">
              Each program is structured to provide direct, measurable community relief and sustainable long-term advancement.
            </p>
          </div>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-img-wrapper">
                <img src="https://www.tnpscthervupettagam.com/assets/home/media/general/original_image/a587.png" alt="Education Support Program" />
                <span className="program-badge">Education</span>
              </div>
              <div className="program-body">
                <h3 className="program-title">Education Support Program</h3>
                <p className="program-desc">
                  Providing learning kits, textbooks, school fees assistance, and extracurricular tutoring to deserving children in rural schools.
                </p>
                <Link to="/volunteer" className="btn btn-outline btn-sm">Support Program &rarr;</Link>
              </div>
            </div>

            <div className="program-card">
              <div className="program-img-wrapper">
                <img src="https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/WhatsApp-Image-2019-12-21-at-12.28.37-PM.jpeg" alt="Healthcare Awareness Program" />
                <span className="program-badge">Health</span>
              </div>
              <div className="program-body">
                <h3 className="program-title">Healthcare Awareness Program</h3>
                <p className="program-desc">
                  Conducting free medical consultations, maternal health workshops, and preventative screenings in low-income settlements.
                </p>
                <Link to="/volunteer" className="btn btn-outline btn-sm">Support Program &rarr;</Link>
              </div>
            </div>

            <div className="program-card">
              <div className="program-img-wrapper">
                <img src="https://awareeveryonefoundation.org/wp-content/uploads/2022/11/women-empower.jpg" alt="Women Empowerment Program" />
                <span className="program-badge">Livelihood</span>
              </div>
              <div className="program-body">
                <h3 className="program-title">Women Empowerment Program</h3>
                <p className="program-desc">
                  Hands-on vocational tailoring, computer literacy, and small-business mentorship to help homemakers gain financial independence.
                </p>
                <Link to="/volunteer" className="btn btn-outline btn-sm">Support Program &rarr;</Link>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/programs" className="btn btn-secondary">Explore All 6 Programs &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview with Lightbox */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Moments of Hope</span>
            <h2 className="section-title">Our Visual Gallery</h2>
            <p className="section-subtitle">
              Glimpses into our community drives, medical camps, classroom sessions, and vocational workshops.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setActivePhoto(item)}
                tabIndex={0}
                role="button"
                aria-label={`View photo: ${item.title}`}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h4 className="gallery-item-title">{item.title}</h4>
                  <span className="gallery-item-sub">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn btn-outline">View Full Gallery &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Community Drives</span>
            <h2 className="section-title">Upcoming &amp; Recent Events</h2>
            <p className="section-subtitle">
              Join our upcoming community drives or volunteer for on-ground assistance.
            </p>
          </div>

          <div className="events-grid">
            <div className="event-card">
              <img src="https://assets.telegraphindia.com/telegraph/2025/Feb/1739258712_sundarban-2.jpg" alt="Community Health & Vision Camp" className="event-img" />
              <div className="event-body">
                <div className="event-meta">
                  <span className="event-meta-item">
                    <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
                    15 Oct 2026 (Placeholder)
                  </span>
                  <span className="event-meta-item">
                    <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    Community Center
                  </span>
                </div>
                <h3 className="event-title">Community Health &amp; Vision Camp</h3>
                <p className="event-desc">
                  Free basic health checkups, blood pressure screenings, vision tests, and distribution of generic wellness essentials.
                </p>
                <Link to="/volunteer" className="btn btn-outline btn-sm">Volunteer for Event &rarr;</Link>
              </div>
            </div>

            <div className="event-card">
              <img src="/images/event2.svg" alt="Youth Education & Kit Distribution" className="event-img" />
              <div className="event-body">
                <div className="event-meta">
                  <span className="event-meta-item">
                    <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
                    28 Oct 2026 (Placeholder)
                  </span>
                  <span className="event-meta-item">
                    <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    Govt High School
                  </span>
                </div>
                <h3 className="event-title">Youth Education Kit Distribution</h3>
                <p className="event-desc">
                  Distributing school bags, geometry kits, notebooks, and learning modules to over 300 primary grade students.
                </p>
                <Link to="/volunteer" className="btn btn-outline btn-sm">Volunteer for Event &rarr;</Link>
              </div>
            </div>

            <div className="event-card">
              <img src="/images/event3.svg" alt="Green Earth Tree Plantation" className="event-img" />
              <div className="event-body">
                <div className="event-meta">
                  <span className="event-meta-item">
                    <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
                    12 Nov 2026 (Placeholder)
                  </span>
                  <span className="event-meta-item">
                    <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    Suburban Park
                  </span>
                </div>
                <h3 className="event-title">Green Earth Tree Plantation</h3>
                <p className="event-desc">
                  A community plantation drive targeting 500 indigenous fruit and shade trees with citizen volunteers and students.
                </p>
                <Link to="/volunteer" className="btn btn-outline btn-sm">Volunteer for Event &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-text">
              <h2 className="cta-title">Ready to Make a Real Difference?</h2>
              <p className="cta-subtitle">
                Whether you donate your time as a volunteer or contribute funds toward a child's education, every gesture changes lives.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/volunteer" className="btn btn-outline-white">Become a Volunteer</Link>
              <Link to="/donate" className="btn btn-primary">Support Our Mission</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox image={activePhoto} onClose={() => setActivePhoto(null)} />
    </div>
  );
}
