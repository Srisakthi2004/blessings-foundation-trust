import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  const galleryItems = [
    { src: 'https://excelsioramericanschooladmissions.com/blogs/wp-content/uploads/2024/02/Digital-Literacy-in-Education-Integrating-Technology-at-Excelsior-American-School.jpg', title: 'Education & Literacy', subtitle: 'Classroom Learning & Kit Distribution' },
    { src: 'https://azbigmedia.com/wp-content/uploads/2023/11/Free-Medical-Camp.jpg', title: 'Free Healthcare Camp', subtitle: 'Doctor Consultations & Screenings' },
    { src: 'https://ykkasia.com/wp-content/uploads/2007/01/IND-Vocational-Training-Center-1.jpg', title: 'Women Empowerment', subtitle: 'Tailoring & Handicrafts Workshop' },
    { src: 'https://tse1.mm.bing.net/th/id/OIP.H5_inKpJ-rhC9TnMHCb8PgHaE8?r=0&pid=Api&h=220&P=0', title: 'Child Nutrition & Care', subtitle: 'Nutritious Meals & Development' },
    { src: 'https://static.vecteezy.com/system/resources/previews/022/171/704/large_2x/people-helping-planting-tree-in-nature-for-save-earth-environment-eco-concept-free-photo.jpg', title: 'Green Earth Plantation', subtitle: '1,000 Saplings Community Initiative' },
    { src: 'https://tse1.mm.bing.net/th/id/OIP.3etlX8ZW0cNYW13z9ZEm5gHaE7?r=0&pid=Api&h=220&P=0', title: 'Food & Relief Support', subtitle: 'Essential Groceries & Ration Kits' }
  ];

  return (
    <div>
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #15304f 100%)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(245,130,32,0.2)', color: '#fed7aa', border: '1px solid rgba(245,130,32,0.4)' }}>
            PHOTO ARCHIVE
          </span>
          <h1 style={{ color: '#ffffff', fontSize: '2.75rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Impact Gallery
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.15rem', maxWidth: '720px' }}>
            Click on any photo to view in high resolution with activity details.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Ground Realities</span>
            <h2 className="section-title">Visual Stories of Change</h2>
            <p className="section-subtitle">
              Capturing our volunteers, community members, and beneficiaries collaborating for a better future.
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
                aria-label={`Open ${item.title} photo in lightbox`}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h4 className="gallery-item-title">{item.title}</h4>
                  <span className="gallery-item-sub">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox image={activePhoto} onClose={() => setActivePhoto(null)} />
    </div>
  );
}
