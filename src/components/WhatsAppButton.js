import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/your-number-here" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-40 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
    >
      <WhatsAppIcon sx={{ fontSize: 32 }} />
    </motion.a>
  );
};

export default WhatsAppButton; 