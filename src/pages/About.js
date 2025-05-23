import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: 'Jane Smith',
      role: 'Lead Wedding Planner',
      image: 'https://source.unsplash.com/random/400x400?portrait=1',
      description: 'With over 10 years of experience in wedding planning, Jane brings creativity and expertise to every event.',
    },
    {
      name: 'Michael Johnson',
      role: 'Event Coordinator',
      image: 'https://source.unsplash.com/random/400x400?portrait=2',
      description: 'Michael specializes in creating seamless experiences and managing complex logistics.',
    },
    {
      name: 'Sarah Williams',
      role: 'Design Specialist',
      image: 'https://source.unsplash.com/random/400x400?portrait=3',
      description: 'Sarah has an eye for detail and creates stunning visual experiences for our clients.',
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
              About Us
            </Typography>
            <Typography variant="h5" className="text-center max-w-3xl mx-auto">
              We are passionate about creating unforgettable wedding experiences that reflect your unique love story.
            </Typography>
          </motion.div>
        </Container>
      </div>

      {/* Our Story Section */}
      <Container className="py-20">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h2" className="text-3xl font-bold mb-6">
                Our Story
              </Typography>
              <Typography variant="body1" className="mb-4">
                Founded in 2015, our wedding planning company has been dedicated to making dreams come true. We believe that every couple deserves a wedding that perfectly reflects their unique love story.
              </Typography>
              <Typography variant="body1" className="mb-4">
                Our team of experienced professionals works tirelessly to ensure that every detail is perfect, from the initial consultation to the final celebration.
              </Typography>
              <Typography variant="body1">
                We take pride in our attention to detail, creative approach, and commitment to excellence in every wedding we plan.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://source.unsplash.com/random/800x600?wedding-team"
                alt="Our Team"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Team Section */}
      <div className="bg-gray-100 py-20">
        <Container>
          <Typography variant="h2" className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardMedia
                      component="img"
                      height="300"
                      image={member.image}
                      alt={member.name}
                    />
                    <CardContent>
                      <Typography variant="h5" className="font-semibold mb-2">
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" className="mb-2">
                        {member.role}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {member.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      {/* Values Section */}
      <Container className="py-20">
        <Typography variant="h2" className="text-3xl font-bold text-center mb-12">
          Our Values
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Excellence',
              description: 'We strive for excellence in every detail of our service.',
            },
            {
              title: 'Creativity',
              description: 'We bring innovative ideas to make your wedding unique.',
            },
            {
              title: 'Dedication',
              description: 'We are committed to making your dream wedding a reality.',
            },
          ].map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent>
                    <Typography variant="h5" className="font-semibold mb-2">
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default About; 