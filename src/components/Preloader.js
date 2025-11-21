import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  // Animation variants for each letter
  const letterVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    blink: (i) => ({
      opacity: [1, 0.3, 1, 0.3, 1],
      transition: {
        delay: i * 0.15 + 0.8,
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.5
      }
    })
  };

  // Icon animation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        delay: 1,
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#FDF5E6] via-[#F5EDD8] to-[#EDE4CE]"
      >
        <div className="relative">
          {/* SVG Logo with Animations */}
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 400 118"
            className="w-80 h-auto md:w-96"
          >
            <defs>
              <style>{`
                .cls-1{fill:url(#linear-gradient);}
                .cls-2{fill:url(#linear-gradient-2);}
                .cls-3{fill:url(#linear-gradient-3);}
                .cls-4{fill:url(#linear-gradient-4);}
                .cls-5{fill:url(#linear-gradient-5);}
                .cls-6{fill:#8B4513;}
                .cls-7{fill:none;stroke:#cec2a1;stroke-miterlimit:10;stroke-width:2px;}
              `}</style>
              <linearGradient id="linear-gradient" x1="114.03" y1="65.6" x2="157.59" y2="65.6" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ece3c1" />
                <stop offset="1" stopColor="#ac9870" />
              </linearGradient>
              <linearGradient id="linear-gradient-2" x1="161.66" y1="73.37" x2="212.57" y2="73.37" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#c7b792" />
                <stop offset="1" stopColor="#b09870" />
              </linearGradient>
              <linearGradient id="linear-gradient-3" x1="241.96" y1="60.81" x2="265.57" y2="60.81" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#b59e77" />
                <stop offset="1" stopColor="#b09870" />
              </linearGradient>
              <linearGradient id="linear-gradient-4" x1="216.2" y1="72.95" x2="239.44" y2="72.95" xlinkHref="#linear-gradient-2" />
              <linearGradient id="linear-gradient-5" x1="218.87" y1="34.93" x2="235.27" y2="34.93" xlinkHref="#linear-gradient-2" />
            </defs>

            {/* Icon - Animated */}
            <motion.g
              id="icon"
              variants={iconVariants}
              initial="hidden"
              animate={["visible", "pulse"]}
            >
              <path className="cls-7" d="M47.44,97.52V58.71S49.72,47.18,59,47.46s11.66,9.66,11.66,9.66L71,97.52" />
              <path className="cls-7" d="M39.82,97.52v-39S40.49,46.8,50,41.37s19.79-1.61,24.26,6.09,3.65,9.28,3.65,9.28L78,97.52" />
              <path className="cls-7" d="M32.62,97.52V57.4a31.41,31.41,0,0,1,11.43-22c11.26-9.28,26.7-5.48,33.93,3.45s7.47,16.33,7.47,16.33V97.52" />
              <path className="cls-7" d="M25,97.52V56.09s.25-17,16.56-28.6,33.71-1.4,35.78,0A38.63,38.63,0,0,1,93,55.24c.5,17.25,0,42.28,0,42.28" />
            </motion.g>

            {/* J - Letter 1 */}
            <motion.g
              id="J"
              variants={letterVariants}
              initial="hidden"
              animate={["visible", "blink"]}
              custom={0}
            >
              <path className="cls-1" d="M138.16,38.08l.18,49s.33,6.84-5.3,8.29-7.54-5.53-7.17-9.6.92-6.89.67-7.5-3.23-3.28-8.24-.38-5,10.59-3,14.72,8.1,9.14,19.75,8.58,16.12-9.19,17-14.5.41-47.56.41-47.56.32-4.62,2.51-5.58,2.69-.7,2.65-1.62,0-1.82-.74-1.85-23.63,0-23.63,0a1.6,1.6,0,0,0-.76,1.57c.06,1.17,1.9,1.22,2.75,1.69A5.22,5.22,0,0,1,138.16,38.08Z" />
            </motion.g>

            {/* A - Letter 2 */}
            <motion.g
              id="A"
              variants={letterVariants}
              initial="hidden"
              animate={["visible", "blink"]}
              custom={1}
            >
              <path className="cls-2" d="M165.34,64.9l10.35-2.67s0-7.78,3.31-10.36,8.07-2.11,9.94,1.55,2.07,11.3,1.78,12.66-17,5.48-22.9,9.89A15.68,15.68,0,0,0,163,94.81c2.9,6.42,11.76,6.42,16,5.39a23.67,23.67,0,0,0,10.39-5.81c2.24-2.21,1.58-2,1.58-2l.05-3.89,0-3.28s-.46,5.62-7.13,7.17-8.45-5.35-8.7-6.52a10.56,10.56,0,0,1,3.27-9.09c3.69-3.56,12.56-6.09,12.56-6.09L191,89.92a31.92,31.92,0,0,0,.15,3.32c.11.09.81,5.21,5.25,6.55a16,16,0,0,0,12.86-1.59c3.21-2.16,3.7-2.38,3.18-4.38s-1.33.13-3.56,0-3.09-3.87-3.15-4.93.15-25.95.15-25.95-.21-8.69-5.51-12.69-14.24-5.78-25.34-2.5-11.09,13.4-11,14.11S164.38,64.44,165.34,64.9Z" />
            </motion.g>

            {/* I - Letter 3 */}
            <motion.g
              id="I"
              variants={letterVariants}
              initial="hidden"
              animate={["visible", "blink"]}
              custom={2}
            >
              <path className="cls-3" d="M246.48,34.58l-.06,58.21s-.66,3-2.37,3.63-2.32,1-2,2,.52,1,.66,1l22.41-.13s1-1.5,0-2.28-3.61-.87-4.19-3.4-.33-71.47-.33-71.47l-18.47,6s-.25,1.94.58,2.1a4.88,4.88,0,0,1,3.17,2A6.23,6.23,0,0,1,246.48,34.58Z" />
            </motion.g>

            {/* L - Letter 4 */}
            <motion.g
              id="L"
              variants={letterVariants}
              initial="hidden"
              animate={["visible", "blink"]}
              custom={3}
            >
              <path className="cls-4" d="M220.66,58.25l-.21,34.12s-.29,2.72-1.95,3.61-2.28.89-2.28,1.36-.16,1.64.63,2,22.15,0,22.15,0,.72-1.33.33-2-3.73-1.68-4-3.37.05-47.48.05-47.48l-19,6.68s-.79,2.27.71,2.29S220.49,56.07,220.66,58.25Z" />
              <ellipse className="cls-5" cx="227.07" cy="34.93" rx="8.2" ry="9.07" />
            </motion.g>

            {/* EVENTS text - Letter by letter */}
            <motion.g id="E" variants={letterVariants} initial="hidden" animate={["visible", "blink"]} custom={4}>
              <polygon className="cls-6" points="276.84 82.95 276.84 98.84 285.99 98.84 285.99 96.5 279.12 96.55 279.12 91.86 284.81 91.77 284.77 89.49 279.18 89.47 279.22 85.28 285.87 85.2 285.99 82.95 276.84 82.95" />
            </motion.g>
            <motion.g id="V" variants={letterVariants} initial="hidden" animate={["visible", "blink"]} custom={5}>
              <polygon className="cls-6" points="294.09 82.95 299.45 98.84 301.6 98.84 306.82 82.95 304.47 82.95 300.46 95.2 296.47 82.95 294.09 82.95" />
            </motion.g>
            <motion.g id="E-2" variants={letterVariants} initial="hidden" animate={["visible", "blink"]} custom={6}>
              <polygon className="cls-6" points="315.43 82.95 315.54 98.84 324.49 98.84 324.49 96.64 317.56 96.52 317.48 91.64 323.35 91.64 323.35 89.52 317.72 89.42 317.75 85.24 324.38 85.17 324.32 82.95 315.43 82.95" />
            </motion.g>
            <motion.g id="N" variants={letterVariants} initial="hidden" animate={["visible", "blink"]} custom={7}>
              <polygon className="cls-6" points="334.26 98.84 334.26 82.95 336.77 82.95 343.18 94.8 343.18 82.95 345.38 82.95 345.38 98.84 342.79 98.84 336.36 86.49 336.55 98.84 334.26 98.84" />
            </motion.g>
            <motion.g id="T" variants={letterVariants} initial="hidden" animate={["visible", "blink"]} custom={8}>
              <polygon className="cls-6" points="358.41 85.24 358.41 98.84 360.67 98.84 360.67 85.24 364.81 85.24 364.81 82.95 354.25 82.95 354.25 85.13 358.41 85.24" />
            </motion.g>
            <motion.g id="S" variants={letterVariants} initial="hidden" animate={["visible", "blink"]} custom={9}>
              <path className="cls-6" d="M380.28,86.56h2.21a4.14,4.14,0,0,0-3.62-3.86c-3.46-.45-4.89,1.15-5.59,3.14a4.11,4.11,0,0,0,2.13,5.36c2.28,1,5,.87,5.18,2.61s-.48,2.85-2.47,3.21A2.68,2.68,0,0,1,375,95c-1.21,0-2.4,0-2.4,0a5.19,5.19,0,0,0,2.85,3.85,5.25,5.25,0,0,0,6.79-1.64c1.16-2,1-4.45-.23-5.78s-3.28-1.56-4.92-2.11a2.31,2.31,0,0,1-1.25-3.56c.87-1.22,3-.92,3.51-.5A5.37,5.37,0,0,1,380.28,86.56Z" />
            </motion.g>
          </svg>

          {/* Loading text */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;