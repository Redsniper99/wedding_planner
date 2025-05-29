import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const About = () => {
  return (
    <section className="min-h-screen bg-[#FDF5E6] py-12 md:py-25 mt-24">
      <Container maxWidth="lg">
        {/* Owner Information Section */}
        <div className="mb-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Owner Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#DEB887] shadow-xl">
              <img
                src="/images/owner.jpg"
                alt="Owner"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Owner Description */}
            <div className="max-w-xl text-center md:text-left">
              <Typography variant="h3" className="font-playfair font-bold text-[#8B4513] text-2xl md:text-3xl mb-4">
                Meet Our Founder
              </Typography>
              <Typography className="text-[#6D4C41] font-playfair text-lg md:text-xl mb-4">
                Sarah Johnson
              </Typography>
              <Typography className="text-[#6D4C41] font-playfair text-base md:text-lg leading-relaxed">
                With over 15 years of experience in the wedding industry, Sarah has dedicated her life to creating magical moments for couples. Her passion for design and attention to detail has made her one of the most sought-after wedding planners in the region.
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Images Section */}
          <div className="flex w-full md:w-1/2 gap-4 relative">
            <div className="flex w-full gap-4">
              <div className="w-1/3 h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden relative">
                <img
                  src="/images/s1.jpg"
                  alt="About 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-1/3 h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden relative">
                <img
                  src="/images/s2.jpg"
                  alt="About 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-1/3 h-56 sm:h-72 md:h-88 rounded-2xl overflow-hidden relative">
                <img
                  src="/images/s3.jpg"
                  alt="About 3"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-6 -bottom-6 z-0 opacity-60 hidden md:block">
              <svg width={134} height={106} viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1.66667" cy={104} r="1.66667" transform="rotate(-90 1.66667 104)" fill="#8B4513" />
                <circle cx="16.3333" cy={104} r="1.66667" transform="rotate(-90 16.3333 104)" fill="#8B4513" />
                <circle cx={31} cy={104} r="1.66667" transform="rotate(-90 31 104)" fill="#8B4513" />
                <circle cx="45.6667" cy={104} r="1.66667" transform="rotate(-90 45.6667 104)" fill="#8B4513" />
                <circle cx="60.3334" cy={104} r="1.66667" transform="rotate(-90 60.3334 104)" fill="#8B4513" />
                <circle cx="88.6667" cy={104} r="1.66667" transform="rotate(-90 88.6667 104)" fill="#8B4513" />
                <circle cx="117.667" cy={104} r="1.66667" transform="rotate(-90 117.667 104)" fill="#8B4513" />
                <circle cx="74.6667" cy={104} r="1.66667" transform="rotate(-90 74.6667 104)" fill="#8B4513" />
                <circle cx={103} cy={104} r="1.66667" transform="rotate(-90 103 104)" fill="#8B4513" />
                <circle cx={132} cy={104} r="1.66667" transform="rotate(-90 132 104)" fill="#8B4513" />
              </svg>
            </div>
          </div>
          {/* Glassy Content Card */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="rounded-3xl shadow-2xl border border-[#DEB887]/30 bg-white/70 backdrop-blur-lg p-8 md:p-12 max-w-xl w-full flex flex-col gap-6 text-center md:text-left items-center md:items-start">
              <Typography variant="h4" className="font-playfair font-bold text-[#8B4513] text-2xl md:text-4xl mb-2 md:mb-4">
                About Us
              </Typography>
              <Typography className="text-[#6D4C41] font-playfair text-base md:text-lg leading-relaxed">
                We are passionate about creating unforgettable wedding experiences that reflect your unique love story. Our team of experienced professionals works tirelessly to ensure that every detail is perfect, from the initial consultation to the final celebration.
              </Typography>
              <Typography className="text-[#6D4C41] font-playfair text-base md:text-lg leading-relaxed">
                Founded in 2015, our wedding planning company has been dedicated to making dreams come true. We believe that every couple deserves a wedding that perfectly reflects their unique love story.
              </Typography>
              <Typography className="text-[#6D4C41] font-playfair text-base md:text-lg leading-relaxed">
                We take pride in our attention to detail, creative approach, and commitment to excellence in every wedding we plan.
              </Typography>
              <Button
                variant="contained"
                className="bg-[#8B4513] hover:bg-[#DEB887] text-white font-playfair rounded-full px-8 py-3 shadow-lg transition-all duration-300 mt-2"
                sx={{
                  backgroundColor: '#8B4513',
                  borderRadius: '9999px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  boxShadow: '0 8px 32px 0 rgba(222, 184, 135, 0.15)',
                  '&:hover': {
                    backgroundColor: '#DEB887',
                    color: '#3E2723',
                  },
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About; 