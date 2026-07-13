"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const liquidRef = useRef(null);
  const whiteArrowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      let scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      if (scroll > 1) scroll = 1;
      if (scroll < 0) scroll = 0;
      
      // translateY goes from 125% (fully hidden) to 0% (fully filled)
      const translateY = (1 - scroll) * 125;
      
      if (liquidRef.current) {
        liquidRef.current.style.transform = `translateY(${translateY}%)`;
      }
      if (whiteArrowRef.current) {
        whiteArrowRef.current.style.clipPath = `inset(${translateY}% 0 0 0)`;
      }

      if (totalScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>
        {`
          @keyframes wave-animation {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.5 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-[40px] right-6 z-[9999] flex flex-col items-center gap-3"
          >
            {/* GoToTop Liquid Fill Button */}
            <button
              onClick={scrollToTop}
              className="relative w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden cursor-pointer group border border-zinc-100 hover:scale-105 transition-transform"
              aria-label="Go to top"
            >
              {/* Base Layer: White bg with Blue Arrow */}
              <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                  <FaArrowUp size={18} className="text-blue-600" />
                </motion.div>
              </div>

              {/* Liquid Wave Layer */}
              <div 
                ref={liquidRef}
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ transform: "translateY(125%)" }}
              >
                {/* SVG Wave with translate-y-[1px] to fix sub-pixel white line gap */}
                <svg 
                  className="absolute bottom-full translate-y-[1px] left-0 w-[200%] h-3 fill-blue-600" 
                  viewBox="0 0 100 20" 
                  preserveAspectRatio="none"
                  style={{ animation: 'wave-animation 1.5s linear infinite' }}
                >
                  <path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10 V20 H0 Z" />
                </svg>
                {/* Solid Blue Fill below wave */}
                <div className="absolute top-0 bottom-[-100%] left-0 right-0 bg-blue-600" />
              </div>

              {/* Top Layer: White Arrow (Clipped to only show over solid blue) */}
              <div 
                ref={whiteArrowRef}
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                style={{ clipPath: "inset(125% 0 0 0)" }}
              >
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                  <FaArrowUp size={18} className="text-white" />
                </motion.div>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GoToTop;
