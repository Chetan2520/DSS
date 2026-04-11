"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectMarquee = () => {
  return (
    <div className="relative w-full bg-black py-5 md:py-12  overflow-hidden flex items-center">
      {/* Background Subtle Gradient Overlay to fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap items-center gap-0"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {/* We use two sets of images for a seamless loop */}
        <div className="flex shrink-0">
          <img
            src="/marque.png"
            alt="Project Marquee"
            className="h-16 md:h-28  object-contain"
          />
          <img
            src="/marque.png"
            alt="Project Marquee"
            className="h-16 md:h-28  object-contain"
          />
          <img
            src="/marque.png"
            alt="Project Marquee"
            className="h-16 md:h-28  object-contain"
          />
        </div>
        <div className="flex shrink-0">
          <img
            src="/marque.png"
            alt="Project Marquee"
            className="h-16 md:h-28  object-contain"
          />
          <img
            src="/marque.png"
            alt="Project Marquee"
            className="h-16 md:h-28  object-contain"
          />
          <img
            src="/marque.png"
            alt="Project Marquee"
            className="h-16 md:h-28  object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectMarquee;
