import React, { useState, useEffect } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const whatsappNumber = 'YOUR_PHONE_NUMBER'; // Replace with your WhatsApp number
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon style={{ fontSize: 32 }} />
      </a>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={handleScrollTop}
          className="bg-[#3E2723] hover:bg-[#5D4037] text-black rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <KeyboardArrowUpIcon style={{ fontSize: 32 }} />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons; 