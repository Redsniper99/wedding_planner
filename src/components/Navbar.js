import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Collapse, Box, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  //const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutOrContact = location.pathname === '/about' || location.pathname === '/contact' || location.pathname === '/gallery';

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
    { text: 'Gallery', path: '/gallery' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const openMenu = () => setMobileMenuOpen(true);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <AppBar
      position="fixed"
      className={`backdrop-blur-md shadow-lg transition-all duration-500 ease-in-out ${!scrolled ? 'rounded-lg' : ''}`}
      sx={{
        backdropFilter: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        left: !scrolled ? '80px' : 0,
        right: !scrolled ? '80px' : 0,
        top: !scrolled ? '20px' : 0,
        width: !scrolled ? 'calc(100vw - 160px)' : '100vw',
        borderRadius: !scrolled ? '12px' : 0,
        border: !scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        margin: 0,
        padding: 0,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        '@media (max-width: 768px)': {
          left: !scrolled ? '16px' : 0,
          right: !scrolled ? '16px' : 0,
          top: !scrolled ? '16px' : 0,
          width: !scrolled ? 'calc(100vw - 32px)' : '100vw',
        },
      }}
    >
      <Toolbar className="justify-between" sx={{ minHeight: { xs: 64, md: 80 } }}>
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo_1.png"
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
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 400,
                fontSize: '1.125rem',
                fontFamily: '"Playfair Display", serif',
                '&:hover': {
                  color: '#DEB887',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }
              }}
              className="transition-colors duration-300"
            >
              {item.text.charAt(0).toUpperCase() + item.text.slice(1).toLowerCase()}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton
            color="inherit"
            aria-label={mobileMenuOpen ? 'close menu' : 'open menu'}
            edge="start"
            onClick={mobileMenuOpen ? closeMenu : openMenu}
            sx={{ color: 'rgba(255, 255, 255, 0.95)' }}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </Toolbar>

      {/* Collapsible dropdown for Mobile */}
      <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
        <Box
          sx={{
            backgroundColor: 'transparent',
            color: 'white',
            mt: 2,
            mb: 2,
            mx: { xs: 2, md: 0 },
          }}
        >
          {/* Animated menu items */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <motion.div
                  key={item.text}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={closeMenu}
                    sx={{
                      justifyContent: 'center',
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.3rem',
                      fontWeight: 400,
                      color: 'white',
                      textAlign: 'center',
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                    }}
                  >
                    <ListItemText primary={item.text} sx={{ textAlign: 'center' }} />
                  </ListItemButton>
                </motion.div>
              ))}
            </List>
          </motion.div>
        </Box>
      </Collapse>
    </AppBar>
  );
};

export default Navbar;