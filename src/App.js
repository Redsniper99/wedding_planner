import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = [
        '/images/bg01.jpg',
        '/images/bg2.jpg',
        // Add other critical large images here if needed
      ];

      const cacheImages = async (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Resolve even on error to avoid blocking
        });
      };

      // Wait for minimum animation time (2.5s) and image loading
      const minTimePromise = new Promise(resolve => setTimeout(resolve, 2500));
      const imagePromises = Promise.all(imageUrls.map(src => cacheImages(src)));

      await Promise.all([minTimePromise, imagePromises]);
      setLoading(false);
    };

    preloadImages();
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <div key="content" className="min-h-screen bg-[#FDF5E6]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <FloatingButtons />

          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
