import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  //const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      className={`bg-white/70 backdrop-blur-md shadow-lg transition-all duration-300 ${!scrolled ? 'rounded-lg' : ''}`}
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255,255,255,0.4)',
        left: !scrolled ? '80px' : 0,
        right: !scrolled ? '80px' : 0,
        top: !scrolled ? '20px' : 0,
        width: !scrolled ? 'auto' : '100vw',
        borderRadius: !scrolled ? '12px' : 0,
        boxShadow: 3,
        margin: 0,
        padding: 0,
        transition: 'left 0.3s, right 0.3s, top 0.3s, width 0.3s, border-radius 0.3s',
        '@media (max-width: 768px)': {
          left: !scrolled ? '16px' : 0,
          right: !scrolled ? '16px' : 0,
          top: !scrolled ? '16px' : 0,
        }
      }}
    >
      <Toolbar className="justify-between" sx={{ minHeight: { xs: 64, md: 80 } }}>
        <Link to="/" className="flex items-center">
          <img
            src={scrolled ? "/images/logo_2.png" : "/images/logo_1.png"}
            alt="Wedding Planner Logo"
            className={`h-12 w-auto mr-2 transition-all duration-500 ${scrolled ? 'opacity-100 scale-100' : 'opacity-100 scale-100'}`}
            style={{ transition: 'opacity 0.5s, transform 0.5s' }}
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                color: scrolled ? '#222' : 'white',
                fontWeight: 400,
                fontSize: '1.125rem',
                fontFamily: '"Playfair Display", serif',
                '&:hover': {
                  color: scrolled ? '#8B4513' : '#A1887F',
                  backgroundColor: 'transparent'
                }
              }}
              className="transition-colors duration-300"
            >
              {item.text.charAt(0).toUpperCase() + item.text.slice(1).toLowerCase()}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="md:hidden">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileMenuOpen(true)}
            sx={{ color: scrolled ? '#222' : 'white' }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>

      {/* Custom Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed left-0 right-0 z-50 flex items-start justify-center"
            style={{ top: 64 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Overlay below navbar */}
            <motion.div
              className="absolute left-0 right-0 bottom-0 bg-black/30"
              style={{ top: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            {/* Menu Card */}
            <motion.div
              className="relative w-full max-w-md mx-auto mt-4 rounded-2xl shadow-2xl border border-gray-200 backdrop-blur-md"
              style={{ background: 'rgba(255,255,255,0.8)' }}
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32, duration: 0.35 }}
            >
              <div className="flex justify-between items-center px-6">
                <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src={scrolled ? "/images/logo_2.png" : "/images/logo_2.png"}
                    alt="Wedding Planner Logo"
                    className="h-8 w-auto mr-2"
                  />
                </Link>
                <IconButton onClick={() => setMobileMenuOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </div>
              <nav className="flex flex-col  items-center justify-center mb-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.text}
                    to={item.path}
                    className="flex justify-center items-center w-full max-w-xs rounded-xl shadow-md my-2 py-3 px-4 text-base font-semibold text-black transition-all duration-200 hover:text-[#8B5CF6] focus:text-[#8B5CF6] text-center backdrop-blur-md"
                    style={{ background: 'rgba(255,255,255,0.8)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.text.charAt(0).toUpperCase() + item.text.slice(1).toLowerCase()}
                  </Link>
                ))}
               
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AppBar>
  );
};

export default Navbar; 