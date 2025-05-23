import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Address',
      content: '123 Wedding Street, Celebration City, WC 12345',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      content: 'info@weddingplanner.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-pink-600 text-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h1" className="text-4xl md:text-6xl font-bold text-center mb-6">
              Contact Us
            </Typography>
            <Typography variant="h5" className="text-center max-w-3xl mx-auto">
              Let's start planning your perfect wedding together
            </Typography>
          </motion.div>
        </Container>
      </div>

      {/* Contact Form and Info Section */}
      <Container className="py-20">
        <Grid container spacing={8}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6">
                <Typography variant="h4" className="font-bold mb-6">
                  Send us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        className="w-full bg-pink-600 hover:bg-pink-700"
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent>
                  <Typography variant="h4" className="font-bold mb-6">
                    Contact Information
                  </Typography>
                  <Box className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="text-pink-600">{info.icon}</div>
                        <div>
                          <Typography variant="h6" className="font-semibold">
                            {info.title}
                          </Typography>
                          <Typography variant="body1" color="textSecondary">
                            {info.content}
                          </Typography>
                        </div>
                      </motion.div>
                    ))}
                  </Box>

                  {/* Map Section */}
                  <Box className="mt-8">
                    <Typography variant="h6" className="font-semibold mb-4">
                      Our Location
                    </Typography>
                    <div className="w-full h-64 bg-gray-200 rounded-lg">
                      {/* Add your map component here */}
                      <img
                        src="https://source.unsplash.com/random/800x400?map"
                        alt="Location Map"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact; 