import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [recentAlbums, setRecentAlbums] = useState([]);

  // Helper to fix paths for GitHub Pages
  const getImagePath = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${process.env.PUBLIC_URL}/${cleanPath}`;
  };

  // Load recent albums
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/gallery-data.json`)
      .then(res => res.json())
      .then(data => {
        // Get the 6 most recent albums
        setRecentAlbums(data.slice(0, 6));
      })
      .catch(err => {
        console.error('Error loading gallery data:', err);
        setRecentAlbums([]);
      });
  }, []);

  const testimonials = [
    {
      name: 'Sanduni & Kasun',
      text: 'Aney, these people are really amazing! They organized everything so nicely. Our wedding was just perfect, no? All our relatives also said it was the best wedding they attended.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=facearea&w=100&h=100&facepad=2',
    },
    {
      name: 'Dilini & Ravindu',
      text: 'These guys are top class! Very professional and they understood exactly what we wanted. From poruwa ceremony to reception, everything was done properly. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&w=100&h=100&facepad=2',
    },
    {
      name: 'Thilini & Chamara',
      text: 'We were so tensed about the wedding planning, but these people made it so easy for us. They handled everything nicely and our day was absolutely beautiful. Thank you so much!',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&w=100&h=100&facepad=2',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDF5E6]">
      {/* Hero Section - Modern & Immersive (Dark Overlay for White Text) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Image Background */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* Mobile Background Image - Shows only on screens smaller than md (768px) */}
          <img
            src={getImagePath("/images/bg2.jpg")}
            alt="Wedding Background Mobile"
            className="md:hidden absolute min-w-full min-h-full object-cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop';
            }}
          />

          {/* Desktop Background Image - Shows only on md (768px) and larger screens */}
          <img
            src={getImagePath("/images/bg01.jpg")}
            alt="Wedding Background Desktop"
            className="hidden md:block absolute min-w-full min-h-full object-cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop';
            }}
          />

          {/* Dark Gradient Overlay for White Text Readability */}
          {/* Dark Gradient Overlay for White Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 md:to-black/60" />
          {/* Mobile-specific stronger bottom gradient for text visibility */}
          <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black via-black/50 to-transparent md:hidden" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* MOBILE VERSION - Shows only on screens smaller than md (768px) */}
            <div className="md:hidden">
              {/* Mobile Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-4"
              >
                <h1 className="text-white leading-tight drop-shadow-lg">
                  <span className="block text-5xl mb-2 font-cormorant italic font-light">
                    Make Your
                  </span>
                  <span className="block text-6xl mb-4 text-[#DEB887] font-great-vibes py-2">
                    Dream Wedding
                  </span>
                  <span className="block text-5xl font-cormorant font-light">
                    A Reality
                  </span>
                </h1>
              </motion.div>

              {/* Mobile Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white text-lg mb-8 font-montserrat font-light"
              >
                Creating unforgettable moments with elegance, precision, and a touch of magic
              </motion.p>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col gap-3"
              >
                <motion.button
                  onClick={() => window.open('https://wa.me/your-number-here', '_blank')}
                  className="w-full px-6 py-3 bg-[#DEB887] rounded-full text-white font-semibold text-sm shadow-xl"
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Start Planning
                  </span>
                </motion.button>
                <motion.button
                  onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold text-sm border-2 border-white/30"
                  whileTap={{ scale: 0.98 }}
                >
                  Our Services
                </motion.button>
              </motion.div>

              {/* Mobile Trust Indicators - Compact */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-8 inline-flex justify-center items-center gap-6 text-white text-xs bg-black/90 backdrop-blur-xl px-6 py-2 rounded-full border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 font-montserrat font-light text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>500+ Couples</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 font-montserrat font-light text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>10+ Years</span>
                </div>
              </motion.div>
            </div>

            {/* DESKTOP VERSION - Shows only on md (768px) and larger screens */}
            <div className="hidden md:block pt-32">
              {/* Main Heading - Staggered Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-white leading-tight">
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 font-cormorant font-light italic">
                    Your Dream Wedding
                  </span>
                  <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#DEB887] font-great-vibes py-4">
                    Begins Here
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 font-montserrat font-light leading-relaxed"
              >
                Creating unforgettable moments with elegance, precision, and a touch of magic
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                {/* Primary CTA */}
                <motion.button
                  onClick={() => window.open('https://wa.me/your-number-here', '_blank')}
                  className="group relative px-8 py-4 bg-[#8B4513] rounded-full text-white font-semibold text-base md:text-lg overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 69, 19, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Start Planning Today
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold text-base md:text-lg border-2 border-white/30 hover:bg-[#8B4513]/20 hover:border-[#8B4513] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Services
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white text-sm font-medium"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 font-montserrat font-light text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>500+ Happy Couples</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white font-montserrat font-light " fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Award Winning Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white font-montserrat font-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>10+ Years Experience</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-white/80 text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gallery Section - Recent Works & Videos */}
      <Container className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FDF5E6] to-white">
        <div className="text-center mb-12 flex flex-col items-center">
          <Typography
            variant="h2"
            className="font-bold leading-tight text-[#3E2723] font-playfair mb-4"
            style={{ fontSize: '2.5rem' }}
          >
            Recent Works
          </Typography>
          <Typography className="text-lg text-[#5D4037] max-w-2xl mx-auto font-montserrat font-light text-center">
            A glimpse into the beautiful moments we've helped create
          </Typography>
        </div>

        {/* Masonry Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {recentAlbums.length === 0 ? (
            // Fallback if no albums
            <div className="col-span-full text-center py-12">
              <Typography className="text-[#5D4037] font-playfair">
                No albums yet. Add folders to <code className="bg-[#8B4513]/10 px-2 py-1 rounded text-sm">public/images/recent-work/</code>
              </Typography>
            </div>
          ) : (
            recentAlbums.map((album, idx) => (
              <motion.div
                key={album.id}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer h-64 md:h-auto md:aspect-square ${idx === 0 ? 'md:col-span-2 md:row-span-2 md:aspect-auto md:h-full' : ''
                  }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => navigate('/gallery')}
              >
                <img
                  src={getImagePath(album.coverThumbnail || album.coverImage)}
                  alt={album.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop';
                  }}
                />

                {/* NEW Badge */}
                {album.isNew && (
                  <div className="absolute top-3 right-3 bg-[#8B4513] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                    NEW
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Typography className="text-white font-playfair font-semibold text-sm md:text-base">
                      {album.name}
                    </Typography>
                    <Typography className="text-white/80 text-xs mt-1">
                      {album.imageCount} photos • {album.category}
                    </Typography>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center">
          <motion.button
            className="px-8 py-3 bg-[#8B4513] text-black rounded-full font-semibold hover:bg-[#6D3710] transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/gallery')}
          >
            View Full Gallery
          </motion.button>
        </div>
      </Container>

      {/* Services Section - Modern Bento Grid */}
      <Container id="services-section" className="py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <Typography
            variant="h2"
            className="font-bold leading-tight text-[#3E2723] font-playfair mb-4"
            style={{ fontSize: '3rem' }}
          >
            Curated Wedding Services
          </Typography>
          <Typography className="text-lg text-[#5D4037] max-w-2xl mx-auto font-montserrat font-light text-center">
            We craft every detail with precision and passion to create the wedding of your dreams.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: 'Full Planning',
              desc: 'From concept to execution, we handle every detail so you can enjoy your journey.',
              image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1470&auto=format&fit=crop',
              colSpan: 'lg:col-span-1',
            },
            {
              title: 'Venue Selection',
              desc: 'Access to exclusive, breathtaking venues that set the perfect stage for your love story.',
              image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop',
              colSpan: 'lg:col-span-2',
            },
            {
              title: 'Gourmet Catering',
              desc: 'Exquisite culinary experiences tailored to your taste and dietary preferences.',
              image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop',
              colSpan: 'lg:col-span-1',
            },
            {
              title: 'Photography',
              desc: 'Capturing timeless moments with our award-winning photography team.',
              image: 'https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=1470&auto=format&fit=crop',
              colSpan: 'lg:col-span-1',
            },
            {
              title: 'Floral & Decor',
              desc: 'Transforming spaces with stunning floral arrangements and bespoke styling.',
              image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop',
              colSpan: 'lg:col-span-1',
            },
            {
              title: 'Entertainment',
              desc: 'Curating the perfect atmosphere with world-class musicians and performers.',
              image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop',
              colSpan: 'lg:col-span-3',
            },
          ].map((service, idx) => (
            <motion.div
              key={service.title}
              className={`group relative overflow-hidden rounded-3xl shadow-lg h-80 ${service.colSpan || ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop'; // Fallback image
                  }}
                />
                {/* Stronger Gradient Overlay for Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold font-playfair mb-2 drop-shadow-md">{service.title}</h3>
                  <p className="text-white/95 text-sm font-montserrat font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-sm">
                    {service.desc}
                  </p>
                  <div className="w-12 h-1 bg-[#DEB887] mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-sm" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Modern Packages Section */}
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="text-center mb-16 flex flex-col items-center">
          <Typography
            variant="h2"
            className="font-bold leading-tight text-[#3E2723] font-playfair mb-4"
            style={{ fontSize: '3rem' }}
          >
            Signature Experiences
          </Typography>
          <Typography className="text-lg text-[#5D4037] max-w-2xl mx-auto font-montserrat font-light text-center">
            Choose the perfect level of service for your celebration, customized to your unique vision.
          </Typography>
        </div>

        <Grid container spacing={3} justifyContent="center">
          {[
            {
              name: 'Day Package',
              subtitle: 'Stress-Free Coordination',
              image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1469&auto=format&fit=crop',
              features: ['Day-of Coordination', 'Vendor Management', 'Timeline Execution', 'Peace of Mind'],
              details: 'Your peace of mind on your wedding day will be worth every rupee that you have spent on your big day.',
              highlight: false,
            },
            {
              name: 'Half Package',
              subtitle: 'Flexible Planning Support',
              image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
              features: ['Partial Planning', 'Vendor Recommendations', 'Design Consultation', 'Guidance till Dream Day'],
              details: 'We can help you at any stage of the wedding planning, till your dream day.',
              highlight: true,
            },
            {
              name: 'Full Package',
              subtitle: 'Complete Guidance A-Z',
              image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop',
              features: ['Full Service Planning', 'Budget Management', 'Concept & Design', 'Unlimited Support'],
              details: 'This package is for the couples who want guidance in planning their wedding from the beginning to the end.',
              highlight: false,
            },
          ].map((pkg, idx) => (
            <Grid item xs={12} md={4} key={pkg.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card
                  className={`h-full rounded-2xl overflow-hidden relative transition-all duration-300 group hover:shadow-xl border-0 ${pkg.highlight ? 'ring-2 ring-[#DEB887]' : ''}`}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#fff',
                    maxWidth: '360px', // Limit width for better compactness
                    margin: '0 auto',
                  }}
                >
                  {/* Image Header - Reduced Height */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    {pkg.highlight && (
                      <div className="absolute top-3 right-3 bg-[#DEB887] text-white px-3 py-0.5 rounded-full text-xs font-medium shadow-md backdrop-blur-sm">
                        Booking Now Open
                      </div>
                    )}
                  </div>

                  <CardContent className="flex flex-col flex-grow p-5">
                    <Typography variant="h5" className="font-playfair font-bold text-[#3E2723] mb-1 text-lg">
                      {pkg.name}
                    </Typography>
                    <Typography variant="subtitle2" className="text-[#8B4513] font-medium mb-3 text-sm">
                      {pkg.subtitle}
                    </Typography>

                    <Typography className="text-[#5D4037] mb-4 text-sm leading-snug min-h-[40px]">
                      {pkg.details}
                    </Typography>

                    <div className="mt-auto space-y-2 mb-5">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#DEB887]/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-2.5 h-2.5 text-[#8B4513]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-[#5D4037] text-xs font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full py-2.5 rounded-lg bg-transparent border-2 border-[#8B4513] text-[#8B4513] text-sm font-semibold hover:bg-white hover:text-[#8B4513] hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg uppercase tracking-wider">
                      Get Now
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>


      {/* Modern Card-Based Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="px-4 sm:px-6 mx-auto max-w-7xl lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Typography
              variant="h2"
              className="font-cormorant font-light text-gray-900 mb-3"
              style={{ fontSize: '2.75rem' }}
            >
              What Our Clients Say
            </Typography>

          </div>

          {/* Testimonials Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    border: '1px solid',
                    borderColor: 'grey.100',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&:hover': {
                      borderColor: 'grey.200',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Quote Icon */}
                    <div style={{ position: 'absolute', top: '24px', right: '24px', opacity: 0.1, transition: 'opacity 0.3s' }}>
                      <svg style={{ width: '48px', height: '48px', color: '#111827' }} fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>

                    {/* Testimonial Content */}
                    <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Text */}
                      <blockquote style={{ marginBottom: '24px', flex: 1 }}>
                        <Typography className="text-gray-700 font-montserrat leading-relaxed text-base">
                          "{testimonial.text}"
                        </Typography>
                      </blockquote>

                      {/* Divider */}
                      <div style={{ width: '48px', height: '1px', background: 'linear-gradient(to right, rgb(209, 213, 219), transparent)', marginBottom: '24px' }}></div>

                      {/* Author Info */}
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                          <img
                            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgb(243, 244, 246)' }}
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '20px', height: '20px', backgroundColor: 'rgb(34, 197, 94)', borderRadius: '50%', border: '2px solid white' }}></div>
                        </div>
                        <div style={{ marginLeft: '16px' }}>
                          <Typography className="font-cormorant font-semibold text-gray-900 text-lg">
                            {testimonial.name}
                          </Typography>
                          <Typography className="font-montserrat text-sm text-gray-500">
                            Happy Client
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;