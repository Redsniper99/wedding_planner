import React from 'react';
import { Container, Typography, Grid, Link, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { text: 'Wedding Planning', href: '#' },
        { text: 'Venue Selection', href: '#' },
        { text: 'Catering', href: '#' },
        { text: 'Photography', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Careers', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '#' },
        { text: 'Terms of Service', href: '#' },
        { text: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FacebookIcon sx={{ color: '#fff' }} />, href: '#' },
    { icon: <InstagramIcon sx={{ color: '#fff' }} />, href: '#' },
    { icon: <TwitterIcon sx={{ color: '#fff' }} />, href: '#' },
    { icon: <PinterestIcon sx={{ color: '#fff' }} />, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <Grid container spacing={8}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className="font-bold mb-4" sx={{ color: '#fff' }}>
              Wedding Planner
            </Typography>
            <Typography variant="body2" className="mb-4" sx={{ color: '#fff' }}>
              Making your dream wedding a reality with our expert planning services and attention to detail.
            </Typography>
            <Box className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#DEB887]"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Typography variant="h6" className="font-semibold mb-4" sx={{ color: '#fff' }}>
                {section.title}
              </Typography>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-[#DEB887] transition-colors text-sm"
                      sx={{ color: '#fff', '&:hover': { color: '#DEB887' }, fontSize: '0.875rem' }}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Bar */}
        <Box className="border-t border-gray-800 mt-12 pt-8">
          <Typography variant="body2" className="text-center" sx={{ color: '#fff' }}>
            © {new Date().getFullYear()} Wedding Planner. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer; 