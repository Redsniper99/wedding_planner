import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
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
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative w-full bg-cover bg-center h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: 'none',
        }}
      >
        {/* Video background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute min-w-full min-h-full object-cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/video/bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[#8B4513] bg-opacity-60 backdrop-blur-md" />
        <div className="relative flex flex-col items-center z-10 w-full -mt-20">
          <div className="relative text-center text-white z-10">
            {/* Mobile Title */}
            <Typography
              variant="h2"
              className="font-bold mb-2 font-playfair text-base xs:text-lg sm:text-xl md:hidden"
            >
              <span className="block">Dream</span>
              <span className="block">Wedding</span>
              <span className="block">Awaits</span>
            </Typography>
            {/* Desktop Title */}
            <Typography
              variant="h1"
              className="font-bold mb-4 font-playfair text-base sm:text-2xl md:text-5xl lg:text-7xl hidden md:block"
            >
              Your Dream Wedding Awaits
            </Typography>
            <Typography
              variant="h5"
              className="mb-8 font-playfair text-[8px] xs:text-[8px] sm:text-sm md:text-2xl"
            >
              Let us make your special day unforgettable
            </Typography>

            <motion.button
              onClick={() => window.open('https://wa.me/your-number-here', '_blank')}
              style={{
                backgroundImage: 'url(/images/wood.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#FFFFFF',
                border: '2px solid rgba(139, 69, 19, 0.5)',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.5rem',
                marginBottom: '1rem',
                fontWeight: 500,
                fontSize: '0.875rem',
                position: 'relative',
                overflow: 'hidden',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                whiteSpace: 'nowrap',
                width: 'auto',
                minWidth: 'fit-content',
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                transition: {
                  scale: '0.3s ease',
                  boxShadow: '0.3s ease'
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(139, 69, 19, 0.4)',
                backdropFilter: 'blur(0.5px)',
              }} />
              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Let's Plan Your Dream Wedding
              </span>
            </motion.button>
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
              icon: <EventAvailableIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#8B4513' }} className="mx-auto mb-2" />,
            },
            {
              title: 'Venue Selection',
              desc: 'Find and secure the perfect venue that matches your vision and guest list.',
              icon: <LocationOnIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#8B4513' }} className="mx-auto mb-2" />,
            },
            {
              title: 'Catering & Menu',
              desc: 'Customizable menus and exquisite catering to delight every guest.',
              icon: <RestaurantIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#8B4513' }} className="mx-auto mb-2" />,
            },
            {
              title: 'Photography & Videography',
              desc: 'Capture every magical moment with our professional photo and video team.',
              icon: <PhotoCameraIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#8B4513' }} className="mx-auto mb-2" />,
            },
            {
              title: 'Entertainment & Music',
              desc: 'Live bands, DJs, and entertainment to keep your guests celebrating all night.',
              icon: <MusicNoteIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#8B4513' }} className="mx-auto mb-2" />,
            },
            {
              title: 'Decor & Styling',
              desc: 'Personalized decor, floral arrangements, and styling for a beautiful, unique celebration.',
              icon: <LocalFloristIcon sx={{ fontSize: { xs: 40, sm: 48, md: 56 }, color: '#8B4513' }} className="mx-auto mb-2" />,
            },
          ].map((service, idx) => (
            <motion.div
              key={service.title}
              className="p-6 md:p-10 lg:p-16 bg-white rounded-2xl shadow-xl flex flex-col items-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="mt-6 md:mt-8 text-lg md:text-xl font-bold text-gray-900 font-playfair">{service.title}</h3>
              <p className="mt-4 md:mt-5 text-sm md:text-base text-gray-600 font-playfair">{service.desc}</p>
            </motion.div>
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