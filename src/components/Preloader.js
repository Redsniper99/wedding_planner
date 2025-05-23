import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import lottie from 'lottie-web';

const Preloader = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://cdn.lottielab.com/l/4eRUrizq3E7uvf.json'
      });
      return () => {
        animation.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FDF5E6]"
    >
      <div className="w-64 h-64 mx-auto">
        <div 
          ref={containerRef} 
          className="w-full h-full"
        />
      </div>
    </motion.div>
  );
};

export default Preloader; 