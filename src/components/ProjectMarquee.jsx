"use client";
import React from "react";
import { motion } from "framer-motion";

const marqueeText = [
  "BRANDING", "EXPERIENCE", "INTERFACE", "DEVELOPMENT", 
  "UI/UX", "FULL STACK", "BACKEND", "STRATEGY"
];

const ProjectMarquee = () => {
  return (
    <div className="relative w-full bg-black py-20 overflow-hidden flex flex-col justify-center gap-0">
      
      {/* --- ORANGE TAPE (Tilting Left) --- */}
      <div className="relative z-20 -rotate-2 origin-center translate-y-6">
        <div className="bg-orange-500 py-3 md:py-5 border-y-2 border-black flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                {marqueeText.map((text, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-black text-2xl md:text-5xl font-black tracking-tighter px-4 md:px-8">
                      {text}
                    </span>
                    <span className="w-2 h-2 md:w-4 md:h-4 bg-black rounded-full mx-2" />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- BLUE TAPE (Tilting Right) --- */}
      <div className="relative z-10 rotate-3 origin-center -translate-y-6">
        <div className="bg-blue-600 py-3 md:py-5 border-y-2 border-black flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{ x: ["-50%", 0] }} // Reverse Direction
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                {marqueeText.map((text, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-white text-2xl md:text-5xl font-black tracking-tighter px-4 md:px-8">
                      {text}
                    </span>
                    <span className="w-2 h-2 md:w-4 md:h-4 bg-white rounded-full mx-2" />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Edge Fading Overlays */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-linear-to-r from-black to-transparent z-30 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-linear-to-l from-black to-transparent z-30 pointer-events-none" />
    </div>
  );
};

export default ProjectMarquee;