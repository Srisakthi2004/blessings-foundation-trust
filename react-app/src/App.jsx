import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import Donate from './pages/Donate';

export default function App() {
  return (
    <div className="app-container">
      {/* Top Announcement Bar */}
      <Header />

      {/* Main Navbar with Brand & Hamburger */}
      <Navbar />

      {/* Page Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
