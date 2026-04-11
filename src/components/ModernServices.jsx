"use client";
import React from 'react';
import { motion, useAnimation, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Search, Palette, Code2, Rocket } from 'lucide-react';

const serviceData = [
  {
    title: "Digital Strategy",
    icon: Search,
    description: "Data-driven insights to uncover opportunities and craft a roadmap for sustainable online growth.",
  },
  {
    title: "Creative Design",
    icon: Palette,
    description: "Visually stunning designs that not only look great but convert visitors into customers.",
  },
  {
    title: "Web Solutions",
    icon: Code2,
    description: "High-performance websites built for speed, scalability, and success.",
  },
  {
    title: "Growth Marketing",
    icon: Rocket,
    description: "Smart marketing campaigns designed to boost visibility, engagement, and revenue.",
  }
];



const GrainyBackground = () => (
  <div className="absolute inset-0 z-5 pointer-events-none opacity-[0.45] mix-blend-overlay">
    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);

const ServiceCard = ({ category, idx }) => {
  const controls = useAnimation();

  const animateArrow = async () => {
    // Arrow animation sequence: Exit top-right, Reset bottom-left, Enter center
    await controls.start({ 
      x: 30, 
      y: -30, 
      opacity: 0, 
      transition: { duration: 0.3, ease: [0.45, 0, 0.55, 1] } 
    });
    
    controls.set({ x: -30, y: 30, opacity: 0 });
    
    await controls.start({ 
      x: 0, 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.3, ease: [0.45, 0, 0.55, 1] } 
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={animateArrow}
      onClick={animateArrow}
      className="relative group p-4 md:p-8 rounded-[24px] md:rounded-[40px] border border-white/10 bg-transparent flex flex-col h-full min-h-[220px] md:min-h-[340px] transition-all duration-500 hover:border-white/40 hover:bg-white/5 overflow-hidden cursor-pointer"
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Section - Top Aligned */}
        <div className="mb-3 md:mb-8 text-white opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 origin-left">
          <category.icon className="w-8 h-8 md:w-14 md:h-14" strokeWidth={0.75} />
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="text-sm md:text-2xl font-bold text-white mb-2 md:mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
            {category.title}
          </h3>
          
          <p className="text-gray-300 text-[10px] md:text-sm leading-relaxed font-medium group-hover:text-gray-200 transition-colors line-clamp-3">
            {category.description}
          </p>
        </div>
        
        {/* Arrow Button - Bottom Right Aligned */}
        <div className="mt-4 md:mt-6 flex justify-end">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center overflow-hidden group-hover:scale-105 transition-all duration-500">
            <motion.div animate={controls} className="text-black">
              <img src="/arrow-right.svg" alt="arrow" className="w-4 h-4 md:w-6 md:h-6" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ModernServices = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });

  const pathLength = useSpring(useTransform(scrollYProgress, [0, 0.4], [0, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={sectionRef} className="relative min-h-screen py-24 px-4 md:px-8 overflow-hidden flex flex-col justify-center bg-black">
      {/* Background Image / Background WebP */}
      <div 
        className="absolute inset-0 z-0 opacity-100 bg-cover bg-center bg-no-repeat grayscale-20" 
        style={{ backgroundImage: "url('/services.webp')" }}
      />
      
      {/* Texture Layer */}
      <GrainyBackground />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight mb-12 md:mb-20 text-left drop-shadow-2xl">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600">
Our Services          </span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {serviceData.map((category, idx) => (
            <ServiceCard key={idx} category={category} idx={idx} />
          ))}
        </div>
      </div>
      
      {/* Dark overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Top Right Floating Video */}
      <div className="absolute top-12 right-12 hidden lg:block z-30">
        <div className="relative w-64 h-52 overflow-hidden shadow-2xl">
          <video
            src="/services.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
