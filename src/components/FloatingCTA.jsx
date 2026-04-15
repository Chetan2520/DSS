"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FloatingCTA() {
  const ref = useRef(null);

  // Smooth Magnetic Effect
  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.4); 
    y.set((clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-none">
      <Link href="/lets-connect" className="pointer-events-auto">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x, y }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-20 h-20 md:w-24 md:h-24 bg-[#1a56db] rounded-full flex items-center justify-center shadow-lg shadow-blue-900/20 cursor-pointer group"
        >
          {/* 1. White Circular Text Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full p-1"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                fill="none"
              />
              <text className="text-[9px] font-black fill-white uppercase tracking-[3px]">
                <textPath xlinkHref="#circlePath">
                  • LET'S CONNECT • GET IN TOUCH 
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* 2. Center Icon (Minimalist) */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.2 }}
              className="text-white"
            >
              <ArrowUpRight size={24} strokeWidth={2.5} />
            </motion.div>
          </div>

          {/* 3. Subtle Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
        </motion.div>
      </Link>
    </div>
  );
}