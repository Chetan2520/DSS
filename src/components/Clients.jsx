"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ClientsCreative() {
  const containerRef = useRef(null);
  const [logos, setLogos] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    const checkImages = async () => {
      const promises = [];
      // Using numerical IDs from your local /images/clients/ folder
      const availableIds = [
        10, 12, 13, 14, 16, 17, 19, 20, 21, 22, 25, 26, 27, 28, 29, 31, 32, 33,
        34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 6, 9,
      ];
      for (let i of availableIds) {
        const src = `/images/clients/${i}.png`;
        const promise = new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve({ id: i, src, valid: true });
          img.onerror = () => resolve({ id: i, valid: false });
        });
        promises.push(promise);
      }
      const results = await Promise.all(promises);
      // We need 17 logos for a 3-row (18 slot) grid
      setLogos(results.filter((r) => r.valid).slice(0, 17));
    };
    checkImages();
  }, []);

  useEffect(() => {
    if (logos.length === 0) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".anim-text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".logo-item",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [logos]);

  const animateArrow = async () => {
    // Arrow animation sequence: Exit top-right, Reset bottom-left, Enter center
    await controls.start({
      x: 35,
      y: -35,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.45, 0, 0.55, 1] },
    });

    controls.set({ x: -35, y: 35, opacity: 0 });

    await controls.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: [0.45, 0, 0.55, 1] },
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-black py-20 md:py-40 px-4 md:px-8 flex flex-col items-center overflow-hidden font-sans"
    >
      {/* Top Left Floating Video */}
      <div className="absolute top-12 left-12 hidden lg:block z-30">
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

      {/* Soft Glow in background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/4 blur-[120px] -mr-40 -mt-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px]">
        {/* Typography exactly as image */}
        <div className="text-center mb-28">
          <p className="anim-text text-white text-lg md:text-xl font-medium mb-3 tracking-normal">
            Strategic Growth, Global Impact
          </p>
          <h2 className="anim-text text-4xl md:text-6xl tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight">
            Leading Brands That <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600">
              Trust Our Digital Vision
            </span>
          </h2>
        </div>

        {/* The Precise Grid Structure (3 Rows) */}
        <div className="relative mx-auto max-w-[1300px]">
          {/* --- Responsive Horizontal Fading Separators --- */}
          {/* Mobile (6 Rows -> 5 Lines) */}
          <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0 flex md:hidden flex-col justify-between">
            <div className="h-0" />
            {[...Array(5)].map((_, i) => (
              <div key={`h-mob-${i}`} className="w-full h-[1.5px] bg-linear-to-r from-transparent via-white/40 to-transparent" />
            ))}
            <div className="h-0" />
          </div>
          {/* Tablet (5 Rows -> 4 Lines) */}
          <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0 hidden md:flex lg:hidden flex-col justify-between">
            <div className="h-0" />
            {[...Array(4)].map((_, i) => (
              <div key={`h-tab-${i}`} className="w-full h-[1.5px] bg-linear-to-r from-transparent via-white/40 to-transparent" />
            ))}
            <div className="h-0" />
          </div>
          {/* Desktop (3 Rows -> 2 Lines) */}
          <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0 hidden lg:flex flex-col justify-between">
            <div className="h-0" />
            {[...Array(2)].map((_, i) => (
              <div key={`h-dt-${i}`} className="w-full h-[1.5px] bg-linear-to-r from-transparent via-white/40 to-transparent" />
            ))}
            <div className="h-0" />
          </div>

          {/* --- Responsive Vertical Fading Separators --- */}
          {/* Mobile (3 Cols -> 2 Lines) */}
          <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-0 flex md:hidden justify-between">
            <div className="w-0" />
            {[...Array(2)].map((_, i) => (
              <div key={`v-mob-${i}`} className="w-[1.5px] h-full bg-linear-to-b from-transparent via-white/40 to-transparent" />
            ))}
            <div className="w-0" />
          </div>
          {/* Tablet (4 Cols -> 3 Lines) */}
          <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-0 hidden md:flex lg:hidden justify-between">
            <div className="w-0" />
            {[...Array(3)].map((_, i) => (
              <div key={`v-tab-${i}`} className="w-[1.5px] h-full bg-linear-to-b from-transparent via-white/40 to-transparent" />
            ))}
            <div className="w-0" />
          </div>
          {/* Desktop (6 Cols -> 5 Lines) */}
          <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-0 hidden lg:flex justify-between">
            <div className="w-0" />
            {[...Array(5)].map((_, i) => (
              <div key={`v-dt-${i}`} className="w-[1.5px] h-full bg-linear-to-b from-transparent via-white/40 to-transparent" />
            ))}
            <div className="w-0" />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 relative z-10">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="logo-item h-24 sm:h-32 md:h-48 lg:h-56 xl:h-64 flex items-center justify-center p-4 md:p-8 transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={`Client ${logo.id}`}
                  className="max-h-[70%] max-w-[80%] object-contain"
                />
              </div>
            ))}

            <Link
              href="/portfoliopage"
              className="logo-item h-24 sm:h-32 md:h-48 lg:h-56 xl:h-64 flex items-center justify-center p-4 md:p-8 group cursor-pointer lg:translate-y-1"
              onMouseEnter={animateArrow}
            >
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden">
                <motion.div
                  animate={controls}
                  className="flex items-center justify-center"
                >
                  <img
                    src="/arrow-right.svg"
                    alt="Arrow"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-12 md:h-12 relative z-10 transition-all duration-500 "
                  />
                </motion.div>
              </div>
            </Link>
          </div>
        </div>

        {logos.length === 0 && (
          <div className="text-center text-white/20 py-20   tracking-widest text-xs">
            Discovering our ecosystem...
          </div>
        )}
      </div>
    </section>
  );
}
