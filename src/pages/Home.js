import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import HandymanIcon from '@mui/icons-material/Handyman';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const Home = () => {

  const testimonials = [
    {
      name: 'Sarah & John',
      text: 'The team made our wedding day absolutely magical. Everything was perfect!',
      image: 'https://source.unsplash.com/random/100x100?portrait=1',
    },
    {
      name: 'Emily & Michael',
      text: 'Professional, attentive, and creative. They exceeded our expectations!',
      image: 'https://source.unsplash.com/random/100x100?portrait=2',
    },
    {
      name: 'Lisa & David',
      text: 'Our dream wedding came true thanks to their amazing planning and execution.',
      image: 'https://source.unsplash.com/random/100x100?portrait=3',
    },
  ];

  // Only lock hero on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const [heroLocked, setHeroLocked] = useState(isMobile);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setHeroLocked(true);
      } else {
        setHeroLocked(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const el = heroContentRef.current;
    const handleScroll = () => {
      if (!heroLocked) return;
      if (!el) return;
      // If scrolled to bottom, unlock hero
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 2) {
        setHeroLocked(false);
      }
    };
    if (heroLocked && el) {
      el.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', handleScroll);
      }
    };
  }, [heroLocked]);

  // Re-lock hero if user scrolls back to top
  useEffect(() => {
    if (!heroLocked && heroContentRef.current) {
      const handleWindowScroll = () => {
        if (window.scrollY === 0) {
          setHeroLocked(true);
        }
      };
      window.addEventListener('scroll', handleWindowScroll);
      return () => window.removeEventListener('scroll', handleWindowScroll);
    }
  }, [heroLocked]);

  return (
    <div className="min-h-screen bg-[#FDF5E6]">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`relative w-full bg-cover bg-center pt-40 md:pt-56 overflow-hidden
          ${typeof window !== 'undefined' && window.innerWidth < 640 ? 'h-screen overflow-y-auto' : ''}
        `}
        style={{
          backgroundImage: 'none',
          scrollSnapAlign: 'start',
        }}
      >
        {/* Blurred background image layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            width: '100%',
            height: '100%',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundImage: 'url(/images/bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(01px)',
          }}
        />
        <div className="absolute inset-0 bg-[#8B4513] bg-opacity-60 backdrop-blur-md" />
        <div className="relative flex flex-col items-center z-10 w-full h-full">
          <div className="relative text-center text-white z-10">
            <Typography
              variant="h1"
              className="font-bold mb-4 font-playfair text-base sm:text-2xl md:text-5xl lg:text-7xl"
            >
              Your Dream Wedding Awaits
            </Typography>
            <Typography
              variant="h5"
              className="mb-8 font-playfair text-xs sm:text-base md:text-2xl"
            >
              Let us make your special day unforgettable
            </Typography>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#DEB887] text-[#8B4513] px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#CD853F] transition-colors"
            >
              Get Started
            </motion.button> */}

            {/* Wooden Cards Row */}
            <Grid container spacing={3} justifyContent="center" className="mb-8 mt-8">
              {[
                {
                  title: 'Rustic Decor',
                  desc: 'Warm, wooden accents for a cozy celebration.',
                  icon: <CelebrationIcon sx={{ fontSize: 64, color: '#DEB887', mb: 2 }} />,
                },
                {
                  title: 'Nature Venues',
                  desc: 'Celebrate in beautiful, natural settings.',
                  icon: <NaturePeopleIcon sx={{ fontSize: 64, color: '#DEB887', mb: 2 }} />,
                },
                {
                  title: 'Handcrafted Touch',
                  desc: 'Personalized, artisanal details for your event.',
                  icon: <HandymanIcon sx={{ fontSize: 64, color: '#DEB887', mb: 2 }} />,
                },
              ].map((card, idx) => (
                <Grid item xs={12} sm={4} key={card.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.2, type: 'spring', stiffness: 60 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="shadow-xl rounded-xl border border-[#3E2723]/20 backdrop-blur-md bg-white/70"
                      sx={{
                        background: 'rgba(255,255,255,0.4)',
                        color: '#3E2723',
                        minHeight: 300,
                        width: 320,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                        border: '1.5px solid rgba(62, 39, 35, 0.2)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                      }}
                    >
                      <CardContent className="text-center flex flex-col items-center">
                        {React.cloneElement(card.icon, { sx: { ...card.icon.props.sx, color: '#ffffff' } })}
                        <Typography variant="subtitle1" className="font-playfair mb-2" sx={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
                          {card.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#fff' }}>{card.desc}</Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <Container className="py-10 sm:py-16 lg:py-20">
        <div className="text-center">
          <Typography variant="h2" className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-playfair">
            Make every step user-centric
          </Typography>
          <Typography className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-playfair">
            Our comprehensive wedding services cover every detail for your perfect day.
          </Typography>
        </div>
        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12 xl:mt-24">
          {[
            {
              title: 'Wedding Planning',
              desc: 'Full-service planning and coordination to make your special day seamless and stress-free.',
              icon: <EventAvailableIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#8B5CF6' }} className="mx-auto mb-2" />,
            },
            {
              title: 'Venue Selection',
              desc: 'Find and secure the perfect venue that matches your vision and guest list.',
              icon: <LocationOnIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#F59E42' }} className="mx-auto mb-2" />,
            },
            {
              title: 'Catering & Menu',
              desc: 'Customizable menus and exquisite catering to delight every guest.',
              icon: <RestaurantIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#10B981' }} className="mx-auto mb-2" />,
            },
            {
              title: 'Photography & Videography',
              desc: 'Capture every magical moment with our professional photo and video team.',
              icon: <PhotoCameraIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#F43F5E' }} className="mx-auto mb-2" />,
            },
            {
              title: 'Entertainment & Music',
              desc: 'Live bands, DJs, and entertainment to keep your guests celebrating all night.',
              icon: <MusicNoteIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#FBBF24' }} className="mx-auto mb-2" />,
            },
            {
              title: 'Decor & Styling',
              desc: 'Personalized decor, floral arrangements, and styling for a beautiful, unique celebration.',
              icon: <LocalFloristIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#22D3EE' }} className="mx-auto mb-2" />,
            },
          ].map((service, idx) => (
            <div
              key={service.title}
              className={
                `p-6 md:p-10 lg:p-16 bg-white rounded-2xl shadow-xl flex flex-col items-center `
              }
            >
              {service.icon}
              <h3 className="mt-6 md:mt-8 text-lg md:text-xl font-bold text-gray-900 font-playfair">{service.title}</h3>
              <p className="mt-4 md:mt-5 text-sm md:text-base text-gray-600 font-playfair">{service.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Modern Packages Section */}
      <Container className="py-20">
        <Typography variant="h2" className="text-4xl font-bold text-center mb-4 text-[#8B4513] font-playfair">
          Our Packages
        </Typography>
        <Typography className="text-center mb-16 text-[#6D4C41]">Choose the perfect plan for your special day</Typography>
        <Grid container spacing={4} justifyContent="center" className="mt-8">
          {[
            {
              name: 'Basic',
              price: 'LKR 150,000',
              subtitle: 'Essential Wedding Package',
              features: ['Venue Setup', 'Basic Decor', 'Support', 'Standard Photography'],
              color: 'from-blue-200 to-blue-400',
              highlight: false,
              details: 'Perfect for intimate gatherings and simple celebrations.',
            },
            {
              name: 'Premium',
              price: 'LKR 350,000',
              subtitle: 'Most Popular',
              features: ['Venue Setup', 'Premium Decor', 'Catering', 'Professional Photography', 'Live Music'],
              color: 'from-yellow-200 to-yellow-400',
              highlight: true,
              details: 'Our most popular package for a complete, memorable wedding experience.',
            },
            {
              name: 'Deluxe',
              price: 'LKR 600,000',
              subtitle: 'Luxury Experience',
              features: ['All Premium Features', 'Luxury Transport', 'Personal Planner', 'Fireworks Show', 'Custom Cake'],
              color: 'from-pink-200 to-pink-400',
              highlight: false,
              details: 'For those who want the ultimate, luxury wedding celebration.',
            },
          ].map((pkg, idx) => (
            <Grid item xs={12} sm={6} md={4} key={pkg.name}>
              <motion.div
                initial={{ opacity: 0, y: 60, rotateY: 30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                whileHover={{ scale: 1.07, rotateY: pkg.highlight ? 8 : 4, boxShadow: '0 16px 40px 0 rgba(222, 184, 135, 0.25)' }}
                transition={{ duration: 0.7, delay: idx * 0.15, type: 'spring', stiffness: 60 }}
                viewport={{ once: true }}
                style={{ perspective: 1000 }}
              >
                <Card
                  className={`shadow-2xl rounded-2xl border-0 overflow-hidden relative bg-gradient-to-br ${pkg.color} hover:shadow-3xl transition-transform duration-300`}
                  sx={{
                    background: 'rgba(255,255,255,0.25)',
                    color: '#3E2723',
                    maxWidth: 330,
                    width: '100%',
                    height: 480,
                    minHeight: 480,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(18px)',
                    boxShadow: pkg.highlight ? '0 16px 40px 0 rgba(222, 184, 135, 0.25)' : '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
                    border: pkg.highlight ? '2.5px solid #DEB887' : 'none',
                  }}
                >
                  {pkg.highlight && (
                    <span className="absolute top-4 right-4 bg-[#DEB887] text-[#3E2723] px-3 py-1 rounded-full text-xs font-bold z-10 shadow">Most Popular</span>
                  )}
                  <CardContent className="flex flex-col items-center text-center w-full relative z-10 flex-1" sx={{ width: '100%', flex: '1 1 auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden' }}>
                    <Typography variant="h6" className="font-playfair" sx={{ color: '#8B4513', fontWeight: 700, fontSize: '1.3rem', mt: 3, mb: 0, lineHeight: 1 }}>{pkg.name}</Typography>
                    <Typography variant="caption" className="mb-2" sx={{ color: pkg.highlight ? '#8B4513' : '#6D4C41', fontWeight: 600, mt: -3, mb: -3 }}>{pkg.subtitle}</Typography>
                    <Typography variant="body2" className="mb-4" sx={{ color: '#3E2723', fontWeight: 400 }}>{pkg.details}</Typography>
                    <ul className="text-[#3E2723] mb-6 space-y-1 text-left w-full max-w-xs mx-auto">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-[#DEB887]">•</span> {f}
                        </li>
                      ))}
                    </ul>
                    <Typography variant="h4" className="mt-auto font-bold" sx={{ color: '#3E2723' }}>{pkg.price}</Typography>
                  </CardContent>
                  {/* Glassy overlay for extra glassmorphism */}
                  <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px)' }} />
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modern Testimonials Section (Rareblocks-inspired) */}
      <section className="py-10 sm:py-16 lg:py-20 relative">
        <div className="px-2 sm:px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <Typography variant="body1" className="text-base sm:text-lg font-medium text-gray-600 font-playfair">2,157 people have said how good Rareblocks</Typography>
            <Typography variant="h2" className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-playfair">Our happy clients say about us</Typography>
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
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'}}></div>
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
      </section>

      
    </div>
  );
};

export default Home;