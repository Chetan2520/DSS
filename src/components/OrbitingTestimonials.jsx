"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Mohit Sharma",
    role: "Marketing Director @ Amla Pharma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohit",
    orbit: 1,
    angle: 45,
    speed: 15,
  },
  {
    id: 2,
    name: "Anjali Gupta",
    role: "Operations Head @ OYO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    orbit: 2,
    angle: 160,
    speed: 25,
  },
  {
    id: 3,
    name: "Raghav Singh",
    role: "Product Manager @ Nexa",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raghav",
    orbit: 2,
    angle: 320,
    speed: 25,
  },
  {
    id: 4,
    name: "Vikram Mehta",
    role: "CEO @ Starlight Solar",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    orbit: 3,
    angle: 10,
    speed: 35,
  },
  {
    id: 5,
    name: "Sanya Kapoor",
    role: "Founder @ Vanya Resort",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanya",
    orbit: 3,
    angle: 190,
    speed: 35,
  },
  // Small dots/stars as decorative elements
  { id: 6, isDot: true, orbit: 1, angle: 180, speed: 15 },
  { id: 7, isDot: true, orbit: 2, angle: 90, speed: 25 },
  { id: 8, isDot: true, orbit: 3, angle: 270, speed: 35 },
  { id: 9, isDot: true, orbit: 1, angle: 0, speed: 15 },
];

const Orbit = ({ radius, speed, children, direction = 1 }) => {
  return (
    <div className="absolute flex items-center justify-center pointer-events-none">
      {/* The visible path with glow */}
      <div 
        className="absolute border border-white/5 rounded-full"
        style={{
          width: radius * 2,
          height: radius * 2,
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.02), inset 0 0 20px rgba(255, 255, 255, 0.02)',
        }}
      />
      {/* Rotating container for items */}
      <motion.div
        className="absolute transform-gpu"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
        animate={{ rotate: direction * 360 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const OrbitingItem = ({ item, radius, direction = 1 }) => {
  const x = radius * Math.cos((item.angle * Math.PI) / 180);
  const y = radius * Math.sin((item.angle * Math.PI) / 180);

  return (
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        animate={{ 
          rotate: direction * -360,
          y: [0, -10, 0], // Subtle bobbing
        }}
        transition={{ 
          rotate: { duration: item.speed, repeat: Infinity, ease: "linear" },
          y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="pointer-events-auto"
      >
        {item.isDot ? (
          <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
        ) : (
          <div className="flex items-center gap-3 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full p-1.5 pr-5 transition-all duration-500 group cursor-default hover:border-zinc-500 hover:bg-zinc-800/60 shadow-2xl">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
              <img src={item.avatar} alt={item.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            
            <div className="flex flex-col relative z-10">
              <span className="text-zinc-200 text-[11px] font-bold tracking-tight whitespace-nowrap leading-none mb-1 group-hover:text-white transition-colors">
                {item.name}
              </span>
              <span className="text-zinc-500 text-[9px] font-medium tracking-wide whitespace-nowrap leading-none uppercase">
                {item.role}
              </span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default function OrbitingTestimonials() {
  return (
    <section className="relative h-[800px] w-full bg-[#050505] overflow-hidden flex items-center justify-center font-sans">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{ background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%)' }}
      />

      {/* Orbits Container */}
      <div className="relative w-full h-full flex items-center justify-center scale-75 md:scale-100">
        <Orbit radius={180} speed={40} direction={1}>
          {testimonials
            .filter((t) => t.orbit === 1)
            .map((t) => (
              <OrbitingItem key={t.id} item={t} radius={180} direction={1} />
            ))}
        </Orbit>

        <Orbit radius={320} speed={60} direction={-1}>
          {testimonials
            .filter((t) => t.orbit === 2)
            .map((t) => (
              <OrbitingItem key={t.id} item={t} radius={320} direction={-1} />
            ))}
        </Orbit>

        <Orbit radius={460} speed={80} direction={1}>
          {testimonials
            .filter((t) => t.orbit === 3)
            .map((t) => (
              <OrbitingItem key={t.id} item={t} radius={460} direction={1} />
            ))}
        </Orbit>

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-white text-6xl md:text-8xl font-medium tracking-tighter leading-[0.85]">
              Join Our
              <br />
              <span className="text-white font-bold">Community</span>
            </h2>
            <div className="pt-10">
              <button className="group relative px-12 py-4 bg-transparent overflow-hidden rounded-full transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
                <span className="relative z-10 text-white text-sm font-bold tracking-[0.2em] uppercase">
                  Join Us
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blur Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[#050505] to-transparent z-20" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#050505] to-transparent z-20" />
    </section>
  );
}
