"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.5 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-[40px] right-6 z-[9999] w-10 h-10 rounded-full bg-gradient-to-tr from-[#0078f0] to-[#ff9f20] text-white shadow-[0_8px_30px_rgba(0,120,240,0.4)] flex items-center justify-center border border-white/20 backdrop-blur-md cursor-pointer group"
          aria-label="Go to top"
        >
          {/* Subtle glow ring on hover */}
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
          
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <FaArrowUp size={16} className="text-white drop-shadow-md" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoToTop;
