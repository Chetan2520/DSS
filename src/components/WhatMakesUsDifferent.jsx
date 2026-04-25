"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    title: "Results-Driven",
    description: "Focusing on delivering business results that truly help you scale.",
  },
  {
    title: "Strategic Growth",
    description: "Customized strategies tailored specifically to your unique goals.",
  },
  {
    title: "Performance Dev",
    description: "Clean, scalable, and optimized code for lightning-fast speeds.",
  },
  {
    title: "Conversion Focused",
    description: "Every project is designed with SEO and conversions in mind.",
  },
];

const WhatMakesUsDifferent = () => {
  const bgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Parallax effect for the background image
    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden bg-black"
    >
      
      {/* 1. Full Background Image (FIXED: Full Cover) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgRef} className="relative w-full h-[120%] -top-[10%]">
          <Image
            src="/images/difference-bg.png"
            alt="Background pattern"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40" // object-contain -> object-cover
          />
        </div>
        {/* Deep Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black z-10" /> 
      </div>

      {/* 2. Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-20">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl tracking-tighter mb-6 bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent leading-[0.9]"
          >
            What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">Different</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Our Philosophy is centered around quality, speed, and real-world results. 
            Experience a partnership that prioritizes your business growth.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Column: Text Points */}
          <div className="flex-1 space-y-12 order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-12 md:gap-16">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="space-y-3 group"
                >
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter transition-all duration-700 text-white">
                    {point.title}
                  </h3>
                  <p className="text-zinc-400 text-base md:text-xl font-light leading-relaxed max-w-md ">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium 2x2 Image Grid */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {[
                "/images/grid/2.jpg",
                "/images/grid/3.jpg",
                "/images/grid/4.jpg",
                "/images/grid/6.jpg"
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl group/img"
                >
                  <Image
                    src={src}
                    alt={`Insight ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-all duration-1000 group-hover/img:scale-110 brightness-75 group-hover/img:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-10" />

      {/* Floating Video Layer */}
      <div className="absolute top-20 right-20 hidden xl:block z-30">
        <div className="relative w-72 h-44 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 rounded-2xl backdrop-blur-md">
          <video
            src="/footer.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;