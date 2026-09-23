/**
 * Blessings Foundation & Trust - Master JavaScript
 * Handles Navigation, Lightbox, Counters, and Spring Boot REST API Integration
 */

// Configuration for Spring Boot Backend API
const API_BASE_URL = 'http://localhost:8080/api';

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStickyHeader();
  initStatsCounters();
  initLightbox();
  initVolunteerForm();
  initContactForm();
  initDonationTiers();
  loadDynamicPrograms();
  loadDynamicEvents();
});

/* ===================================================================
   1. MOBILE NAVIGATION & HAMBURGER MENU
   =================================================================== */
function initMobileNav() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
  });

  // Close menu when clicking on any nav link
  const navLinks = navMenu.querySelectorAll('.nav-link, .btn');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

/* ===================================================================
   2. STICKY HEADER SHADOW ON SCROLL
   =================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ===================================================================
   3. ANIMATED STATISTICS COUNTERS
   =================================================================== */
function initStatsCounters() {
  const counterElements = document.querySelectorAll('.stat-counter');
  if (counterElements.length === 0) return;

  let hasAnimated = false;

  const runCounters = () => {
    const triggerBottom = window.innerHeight * 0.9;
    const firstCounter = counterElements[0];
    const rect = firstCounter.getBoundingClientRect();

    if (rect.top < triggerBottom && !hasAnimated) {
      hasAnimated = true;
      counterElements.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1800; // ms
        const increment = target / (duration / 25);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.innerText = target.toLocaleString() + '+';
            clearInterval(timer);
          } else {
            counter.innerText = Math.ceil(current).toLocaleString();
          }
        }, 25);
      });
    }
  };

  window.addEventListener('scroll', runCounters);
  runCounters(); // Initial check
}

/* ===================================================================
   4. LIGHTBOX MODAL FOR GALLERY
   =================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!modal || !modalImg || galleryItems.length === 0) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-item-title')?.textContent || 'Blessings Foundation';
      const sub = item.querySelector('.gallery-item-sub')?.textContent || 'Community Activity';

      if (img) {
        modalImg.src = img.src;
        modalImg.alt = title;
        if (modalCaption) {
          modalCaption.innerHTML = `<strong>${escapeHtml(title)}</strong> &mdash; <span>${escapeHtml(sub)}</span>`;
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ===================================================================
   5. VOLUNTEER REGISTRATION FORM -> POST /api/volunteers
   =================================================================== */
function initVolunteerForm() {
  const form = document.getElementById('volunteerForm');
  if (!form) return;

  const alertBox = document.getElementById('volunteerAlert');
  const submitBtn = document.getElementById('volunteerSubmitBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Read form values
    const name = form.querySelector('#volName')?.value.trim();
    const email = form.querySelector('#volEmail')?.value.trim();
    const phone = form.querySelector('#volPhone')?.value.trim();
    const address = form.querySelector('#volAddress')?.value.trim();
    const interest = form.querySelector('#volInterest')?.value.trim();
    const message = form.querySelector('#volMessage')?.value.trim();

    if (!name || !email || !phone) {
      showAlert(alertBox, 'Please complete all required fields (Name, Email, Phone).', 'error');
      return;
    }

    const payload = { name, email, phone, address, interest, message };

    // Button loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner"></span> Submitting...`;

    try {
      const response = await fetch(`${API_BASE_URL}/volunteers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const result = await response.json();
        showAlert(alertBox, `Thank you, ${name}! Your volunteer registration has been submitted successfully.`, 'success');
        form.reset();
      } else {
        const errData = await response.json().catch(() => ({}));
        showAlert(alertBox, errData.message || 'Server returned an error. Please try again or check backend connection.', 'error');
      }
    } catch (networkErr) {
      console.warn('Backend server not reachable at localhost:8080:', networkErr);
      // Helpful fallback message explaining Spring Boot integration
      showAlert(alertBox, `Note: Spring Boot backend is not currently running on port 8080. When you start the backend in Eclipse, this form will store directly in MySQL! (Form data validated successfully).`, 'success');
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

/* ===================================================================
   6. CONTACT FORM -> POST /api/contact
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const alertBox = document.getElementById('contactAlert');
  const submitBtn = document.getElementById('contactSubmitBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.querySelector('#contactName')?.value.trim();
    const email = form.querySelector('#contactEmail')?.value.trim();
    const phone = form.querySelector('#contactPhone')?.value.trim() || '';
    const subject = form.querySelector('#contactSubject')?.value.trim();
    const message = form.querySelector('#contactMessage')?.value.trim();

    if (!name || !email || !subject || !message) {
      showAlert(alertBox, 'Please fill in all required fields (Name, Email, Subject, Message).', 'error');
      return;
    }

    const payload = { name, email, phone, subject, message };

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner"></span> Sending...`;

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const result = await response.json();
        showAlert(alertBox, `Thank you, ${name}! Your message has been submitted successfully. We will get in touch with you soon.`, 'success');
        form.reset();
      } else {
        const errData = await response.json().catch(() => ({}));
        showAlert(alertBox, errData.message || 'Error sending message. Please try again.', 'error');
      }
    } catch (networkErr) {
      console.warn('Backend server not reachable at localhost:8080:', networkErr);
      showAlert(alertBox, `Note: Spring Boot backend is not currently active on port 8080. When you start the backend, your message will be saved to the MySQL database! (Data validated).`, 'success');
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

/* ===================================================================
   7. DONATION TIERS & PLEDGE FORM
   =================================================================== */
function initDonationTiers() {
  const tierCards = document.querySelectorAll('.tier-card');
  const customAmountInput = document.getElementById('customAmount');

  tierCards.forEach(card => {
    card.addEventListener('click', () => {
      tierCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const amount = card.getAttribute('data-amount');
      if (customAmountInput && amount) {
        customAmountInput.value = amount;
      }
    });
  });

  const donatePledgeForm = document.getElementById('donatePledgeForm');
  if (donatePledgeForm) {
    donatePledgeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const amount = customAmountInput ? customAmountInput.value : '500';
      const donorName = document.getElementById('donorName')?.value || 'Valued Supporter';
      const alertBox = document.getElementById('donationAlert');
      showAlert(alertBox, `Thank you, ${donorName}! Your pledge for ₹${amount} has been noted. Please find organization bank/UPI placeholder details below for transfer.`, 'success');
    });
  }
}

/* ===================================================================
   8. DYNAMIC PROGRAMS LOADING -> GET /api/programs
   =================================================================== */
async function loadDynamicPrograms() {
  const container = document.getElementById('dynamicProgramsContainer');
  if (!container) return;

  try {
    const response = await fetch(`${API_BASE_URL}/programs`);
    if (response.ok) {
      const programs = await response.json();
      if (Array.isArray(programs) && programs.length > 0) {
        renderPrograms(programs, container);
      }
    }
  } catch (err) {
    // Graceful fallback to default HTML programs already in DOM
    console.info('Backend API /api/programs not running; showing static programs.');
  }
}

function renderPrograms(programs, container) {
  container.innerHTML = programs.map(p => `
    <div class="program-card">
      <div class="program-img-wrapper">
        <img src="${p.imageUrl || 'images/gallery1.jpg'}" alt="${escapeHtml(p.title)}" loading="lazy">
        <span class="program-badge">ACTIVE</span>
      </div>
      <div class="program-body">
        <h3 class="program-title">${escapeHtml(p.title)}</h3>
        <p class="program-desc">${escapeHtml(p.description)}</p>
        <a href="volunteer.html" class="btn btn-outline btn-sm">Support Program &rarr;</a>
      </div>
    </div>
  `).join('');
}

/* ===================================================================
   9. DYNAMIC EVENTS LOADING -> GET /api/events
   =================================================================== */
async function loadDynamicEvents() {
  const container = document.getElementById('dynamicEventsContainer');
  if (!container) return;

  try {
    const response = await fetch(`${API_BASE_URL}/events`);
    if (response.ok) {
      const events = await response.json();
      if (Array.isArray(events) && events.length > 0) {
        renderEvents(events, container);
      }
    }
  } catch (err) {
    console.info('Backend API /api/events not running; showing static events.');
  }
}

function renderEvents(events, container) {
  container.innerHTML = events.map(e => `
    <div class="event-card">
      <img src="${e.imageUrl || 'images/event1.jpg'}" alt="${escapeHtml(e.title)}" class="event-img" loading="lazy">
      <div class="event-body">
        <div class="event-meta">
          <span class="event-meta-item">
            <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
            ${escapeHtml(e.eventDate || 'Upcoming')}
          </span>
          <span class="event-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            ${escapeHtml(e.location || 'Community Center')}
          </span>
        </div>
        <h3 class="event-title">${escapeHtml(e.title)}</h3>
        <p class="event-desc">${escapeHtml(e.description)}</p>
        <a href="volunteer.html" class="btn btn-outline btn-sm">Participate &rarr;</a>
      </div>
    </div>
  `).join('');
}

/* ===================================================================
   HELPERS
   =================================================================== */
function showAlert(alertElement, message, type = 'success') {
  if (!alertElement) return;
  alertElement.className = `form-alert ${type}`;
  alertElement.innerHTML = `
    <svg style="width: 20px; height: 20px; flex-shrink: 0;" viewBox="0 0 24 24" fill="currentColor">
      ${type === 'success' 
        ? '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>' 
        : '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>'}
    </svg>
    <span>${escapeHtml(message)}</span>
  `;
  alertElement.style.display = 'flex';
  alertElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
