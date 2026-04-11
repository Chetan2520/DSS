"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header (Now centered and smaller) */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl  tracking-tighter   mb-3 bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight"
          >
            What Makes Us <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600">Different</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed"
          >
            Our Philosophy is centered around quality, speed, and real-world results. 
            Experience a partnership that prioritizes your business growth.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Column: Text Points */}
          <div className="flex-1 space-y-12 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-12">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-0 md:space-y-3 group"
                >
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight transition-all duration-700 bg-linear-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent">
                    {point.title}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-lg font-normal leading-relaxed max-w-sm group-hover:text-zinc-400 transition-colors">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium 2x2 Image Grid */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "anticipate" }}
              className="grid grid-cols-2 gap-3 md:gap-4 h-full"
            >
              {[
                "/images/grid/office_grid_1_webp_1775279629417.png",
                "/images/grid/office_grid_2_webp_1775279644796.png",
                "/images/grid/office_grid_3_webp_1775279661250.png",
                "/images/grid/office_grid_4_webp_1775279676788.png"
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  className="relative aspect-4/5 md:aspect-square overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/5 shadow-2xl group/img"
                >
                  <Image
                    src={src}
                    alt={`Office insight ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-1000 group-hover/img:scale-110 brightness-75 group-hover/img:brightness-100 saturate-50 group-hover/img:saturate-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff4d4d]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Top Right Floating Video */}
      <div className="absolute top-12 right-12 hidden lg:block z-30">
        <div className="relative w-64 h-40 overflow-hidden shadow-2xl">
          <video
            src="/footer.mp4"
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

export default WhatMakesUsDifferent;
