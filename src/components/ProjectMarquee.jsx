"use client";
import React from "react";
import { motion } from "framer-motion";

const marqueeText = [
  "BRANDING", "EXPERIENCE", "INTERFACE", "DEVELOPMENT", 
  "UI/UX", "FULL STACK", "BACKEND", "STRATEGY"
];

const ProjectMarquee = () => {
  return (
    <div className="relative w-full bg-black py-24 overflow-hidden flex items-center justify-center min-h-[300px]">
      
      {/* --- ELITE METALLIC SHINE --- */}
      <style jsx>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-150%) skewX(-25deg); }
          100% { transform: translateX(150%) skewX(-25deg); }
        }

        .crossing-tape {
          position: absolute;
          width: 120%; /* Extra width for rotation coverage */
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
        }

        /* Glass Reflection Overlay */
        .crossing-tape::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: shine-sweep 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          z-index: 5;
          pointer-events: none;
        }

        /* Center Intersection Glow */
        .intersection-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(0,120,240,0.15) 0%, transparent 70%);
          z-index: 25;
          pointer-events: none;
        }
      `}</style>

      {/* Center Glow for Depth */}
      <div className="intersection-glow" />

      {/* --- BLUE TAPE (Lower Layer - Tilting Down) --- */}
      <div className="crossing-tape bg-[#0078f0] py-3 md:py-5 rotate-[4deg] z-10 border-y border-white/10">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["-50%", 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeText.map((text, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-white text-xl md:text-4xl font-black tracking-tight px-6 md:px-12 select-none opacity-90">
                    {text}
                  </span>
                  <div className="w-1.5 h-1.5 bg-white rounded-full mx-1 opacity-40" />
                </React.Fragment>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- ORANGE TAPE (Upper Layer - Tilting Up) --- */}
      <div className="crossing-tape bg-[#f97316] py-3 md:py-5 -rotate-[4deg] z-20 border-y border-black/20 shadow-[-10px_0_30px_rgba(0,0,0,0.3)]">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeText.map((text, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-black text-xl md:text-4xl font-black tracking-tight px-6 md:px-12 select-none opacity-90">
                    {text}
                  </span>
                  <div className="w-1.5 h-1.5 bg-black rounded-full mx-1 opacity-40" />
                </React.Fragment>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Premium Side Fades */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-black via-black/80 to-transparent z-40 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-black via-black/80 to-transparent z-40 pointer-events-none" />
    </div>
  );
};

export default ProjectMarquee;