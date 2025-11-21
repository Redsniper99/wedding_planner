import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: 'Sarah & John',
      text: 'The team made our wedding day absolutely magical. Everything was perfect!',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=100&h=100&facepad=2',
    },
    {
      name: 'Emily & Michael',
      text: 'Professional, attentive, and creative. They exceeded our expectations!',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=100&h=100&facepad=2',
    },
    {
      name: 'Lisa & David',
      text: 'Our dream wedding came true thanks to their amazing planning and execution.',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=100&h=100&facepad=2',
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
            src="/images/bg2.jpg"
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
            src="/images/bg01.jpg"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
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
                <h1 className="font-playfair font-bold text-white leading-tight">
                  <span className="block text-3xl mb-2">
                    Make Your
                  </span>
                  <span className="block text-4xl mb-2">
                    Dream Wedding
                  </span>
                  <span className="block text-3xl text-white/95">
                    A Reality
                  </span>
                </h1>
              </motion.div>

              {/* Mobile Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white text-sm leading-relaxed max-w-md mx-auto mb-8 font-light"
              >
                Expert planning & flawless execution for your perfect day
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
                className="mt-8 flex justify-center items-center gap-6 text-white text-xs"
              >
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>500+ Couples</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>10+ Years</span>
                </div>
              </motion.div>
            </div>

            {/* DESKTOP VERSION - Shows only on md (768px) and larger screens */}
            <div className="hidden md:block">
              {/* Main Heading - Staggered Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-6"
              >
                <h1 className="font-playfair font-bold text-white leading-tight">
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2">
                    Your Dream Wedding
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
                    Begins Here
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 font-light leading-relaxed"
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
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>500+ Happy Couples</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Award Winning Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
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
          <Typography className="text-lg text-[#5D4037] max-w-2xl mx-auto font-playfair text-center">
            A glimpse into the beautiful moments we've helped create
          </Typography>
        </div>

        {/* Masonry Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              type: 'image',
              url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
              title: 'Elegant Ceremony',
              span: 'md:col-span-2 md:row-span-2',
            },
            {
              type: 'video',
              url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop',
              thumbnail: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop',
              title: 'Wedding Highlights',
              span: '',
            },
            {
              type: 'image',
              url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop',
              title: 'Reception Details',
              span: '',
            },
            {
              type: 'image',
              url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1470&auto=format&fit=crop',
              title: 'Floral Arrangements',
              span: 'md:row-span-2',
            },
            {
              type: 'image',
              url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1470&auto=format&fit=crop',
              title: 'Couple Moments',
              span: '',
            },
            {
              type: 'video',
              url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop',
              thumbnail: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop',
              title: 'Venue Tour',
              span: '',
            },
            {
              type: 'image',
              url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1374&auto=format&fit=crop',
              title: 'Table Settings',
              span: '',
            },
            {
              type: 'image',
              url: 'https://images.unsplash.com/photo-1507504031981-a2368c6e1916?q=80&w=1470&auto=format&fit=crop',
              title: 'Decor Inspiration',
              span: 'md:col-span-2',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span} h-64 md:h-auto md:aspect-square ${item.span.includes('row-span-2') ? 'md:aspect-auto md:h-full' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop';
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Typography className="text-white font-playfair font-semibold text-sm md:text-base">
                    {item.title}
                  </Typography>
                </div>
              </div>

              {/* Video Play Button */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-8 h-8 text-[#8B4513] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
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
          <Typography className="text-lg text-[#5D4037] max-w-2xl mx-auto font-playfair text-center">
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
              image: 'https://images.unsplash.com/photo-1507504031981-a2368c6e1916?q=80&w=1470&auto=format&fit=crop',
              colSpan: 'lg:col-span-1',
            },
            {
              title: 'Entertainment',
              desc: 'Curating the perfect atmosphere with world-class musicians and performers.',
              image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1470&auto=format&fit=crop', // Updated to a more reliable concert/band image
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
                  <p className="text-white/95 text-sm font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-sm">
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
          <Typography className="text-lg text-[#5D4037] max-w-2xl mx-auto font-playfair text-center">
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


      {/* Modern Testimonials Section (Rareblocks-inspired) */}
      < section className="py-10 sm:py-16 lg:py-20 relative" >
        <div className="px-2 sm:px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <Typography
              variant="body1"
              className="font-medium text-gray-600 font-playfair"
              style={{ fontSize: '0.875rem' }}
            >
              2,157 people have said how good Rareblocks
            </Typography>
            <Typography
              variant="h2"
              className="mt-4 font-bold text-gray-900 font-playfair"
              style={{ fontSize: '2.5rem' }}
            >
              Our happy clients say about us
            </Typography>
          </div>
          <div className="mt-8 text-center md:mt-16 md:order-3">
            <button
              type="button"
              className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-playfair focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600 bg-transparent cursor-pointer"
              aria-label="Check all 2,157 reviews"
            >
              Check all 2,157 reviews
            </button>
          </div>
          {/* Blurred Gradient Background */}
          <div className="relative mt-10 md:mt-24 md:order-2 w-full">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6 pointer-events-none z-0">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
            </div>
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3 z-10">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.15, type: 'spring', stiffness: 60 }}
                  viewport={{ once: true }}
                  className="flex flex-col overflow-hidden shadow-2xl rounded-3xl"
                  style={{ boxShadow: '0 12px 32px 0 rgba(222, 184, 135, 0.25), 0 2px 8px 0 rgba(62, 39, 35, 0.10)' }}
                >
                  <div className="flex flex-col justify-between flex-1 p-5 sm:p-6 bg-white lg:py-8 lg:px-7 rounded-3xl backdrop-blur-md border border-[#DEB887] h-full">
                    <div className="flex-1">
                      {/* Stars */}
                      <div className="flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      {/* Testimonial Text */}
                      <blockquote className="flex-1 mt-6 sm:mt-8">
                        <Typography className="text-base sm:text-lg leading-relaxed text-gray-900 font-playfair">“{testimonial.text}”</Typography>
                      </blockquote>
                    </div>
                    {/* Avatar and Name */}
                    <div className="flex items-center mt-6 sm:mt-8 justify-center">
                      <img className="flex-shrink-0 object-cover rounded-full w-10 h-10 sm:w-11 sm:h-11 border-2 border-[#DEB887]" src={testimonial.image} alt={testimonial.name} />
                      <div className="ml-3 sm:ml-4 text-left">
                        <Typography className="text-sm sm:text-base font-bold text-gray-900 font-playfair">{testimonial.name}</Typography>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Home;