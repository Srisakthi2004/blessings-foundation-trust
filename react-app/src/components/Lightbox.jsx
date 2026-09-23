import React, { useEffect } from 'react';

/**
 * Reusable Lightbox modal for gallery images
 */
export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="lightbox-modal active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close photo view">
          &times;
        </button>
        <div className="lightbox-img-wrapper">
          <img src={image.src} alt={image.title} />
        </div>
        <div className="lightbox-caption">
          <strong>{image.title}</strong> &mdash; <span>{image.subtitle}</span>
        </div>
      </div>
    </div>
  );
}
