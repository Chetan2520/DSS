"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  Minus,
  Square,
  X,
  MousePointer2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WhyChooseDSS = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 5000;
  const cardRef = useRef(null);
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
  const arrowControls = useAnimation();

  // Dynamically track card dimensions for high-fidelity clipping
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setCardSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const W = cardSize.width;
  const H = cardSize.height;

  // Exact architectural path from /bg-transparent-angle.svg
  const svgPath =
    "M.75 719V50C.75 22.8 22.8.75 50 .75h1090c27.2 0 49.25 22.05 49.25 49.25v477.47c0 27.2-22.05 49.25-49.25 49.25h-43c-55.64 0-100.75 45.107-100.75 100.75V719c0 27.2-22.05 49.25-49.25 49.25H50C22.8 768.25.75 746.2.75 719Z";

  // Signature looping arrow animation logic (Exit Top-Right / Enter Bottom-Left)
  const animateArrow = async () => {
    await arrowControls.start({
      x: 40,
      y: -40,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.45, 0, 0.55, 1] },
    });

    arrowControls.set({ x: -40, y: 40, opacity: 0 });

    await arrowControls.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: [0.45, 0, 0.55, 1] },
    });
  };

  const slides = [
    {
      title: "Mobile\nApps",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <div className="absolute inset-0 " />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden    "
          >
            <img
              src="/images/apps.png"
              alt="Mobile Apps"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      ),
    },
    {
      title: "Web\nDevelopment",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 " />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-[260px] md:max-w-[320px] aspect-[16/10] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="w-full h-7 bg-[#21252b] border-b border-black/20 flex items-center px-3 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="ml-2 px-2 py-0.5 rounded bg-white/5 text-[9px] text-[#abb2bf]   tracking-tighter">
                service.jsx
              </div>
            </div>
            <div className="p-4 font-mono text-[10px] leading-relaxed flex flex-col gap-1.5">
              {[
                { text: "import React from 'react';", color: "text-[#c678dd]" },
                {
                  text: "const DSS_ADVANCE = () => {",
                  color: "text-[#e06c75]",
                },
                { text: "  return (", color: "text-[#c678dd]" },
                {
                  text: "    <div className='success'>",
                  color: "text-[#98c379]",
                },
                { text: "      BUILDING THE FUTURE", color: "text-[#61afef]" },
                { text: "    </div>", color: "text-[#98c379]" },
                { text: "  );", color: "text-[#c678dd]" },
                { text: "};", color: "text-[#e06c75]" },
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.3 }}
                  className={`overflow-hidden whitespace-nowrap ${line.color}`}
                >
                  {line.text}
                </motion.div>
              ))}
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-1.5 h-4 bg-[#528bff]"
              />
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Graphic\nDesigning",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-8">
          <div className="absolute inset-0  " />
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-4/5 h-4/5 stroke-white/20 fill-none stroke-[1.5]"
            >
              <motion.line
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.line
                x1="0"
                y1="100"
                x2="200"
                y2="100"
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M40,100 C40,40 160,40 160,100 C160,160 40,160 40,100 M100,20 L100,180 M20,100 L180,100 Q100,10 180,100 Q100,190 20,100"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="stroke-orange-400 stroke-[2]"
              />
              {[
                { cx: 40, cy: 100 },
                { cx: 160, cy: 100 },
                { cx: 100, cy: 20 },
                { cx: 100, cy: 180 },
              ].map((node, i) => (
                <motion.rect
                  key={i}
                  x={node.cx - 3}
                  y={node.cy - 3}
                  width="6"
                  height="6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.2 }}
                  className="fill-white stroke-orange-500"
                />
              ))}
            </svg>
            <motion.div
              animate={{ x: [0, 60, -40, 20, 0], y: [0, -40, 40, -60, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute pointer-events-none"
            >
              <MousePointer2 className="text-white" size={24} />
              <div className="ml-5 px-3 py-1.5 bg-black/40 rounded border border-white/10 text-[10px] text-white font-medium shadow-xl">
                Mastering Paths...
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Digital\nMarketing",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0    " />
          <div className="relative w-full h-full flex items-center justify-center scale-75 md:scale-100">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-24 h-24   backdrop-blur-3xl rounded-4xl border border-black/40 flex items-center justify-center shadow-2xl z-20 group-hover:rotate-6 transition-transform"
            >
              <span className="text-white  bg-black  text-2xl tracking-tighter">
                <img
                  src="/images/logo.png"
                  alt="DSS Logo"
                  className="w-14 h-14 object-contain"
                />
              </span>
              <div className="absolute inset-0 bg-white/5 rounded-4xl animate-ping" />
            </motion.div>
            {[
              {
                icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
                x: -90,
                y: -90,
                delay: 0,
              },
              {
                icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
                x: 90,
                y: -70,
                delay: 0.2,
              },
              {
                icon: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
                x: -80,
                y: 80,
                delay: 0.4,
              },
              {
                icon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
                x: 80,
                y: 90,
                delay: 0.6,
              },
              {
                icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                x: 0,
                y: -110,
                delay: 0.8,
              },
              {
                /* { icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/twitter.svg", x: 0, y: 110, delay: 1.0 }, */
              },
            ].map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: app.x, y: app.y }}
                transition={{ duration: 1, delay: app.delay, ease: "backOut" }}
                className="absolute w-14 h-14    "
              >
                <img
                  src={app.icon}
                  alt="App"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
            <div className="absolute inset-0 pointer-events-none opacity-20"></div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, slideDuration);
    return () => clearInterval(timer);
  }, [slides.length]);

  const avatars = [
    "https://i.pravatar.cc/100?u=1",
    "https://i.pravatar.cc/100?u=2",
    "https://i.pravatar.cc/100?u=3",
    "https://i.pravatar.cc/100?u=4",
    "https://i.pravatar.cc/100?u=5",
    "https://i.pravatar.cc/100?u=6",
    "https://i.pravatar.cc/100?u=7",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden font-sans bg-[#050505]">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/about.avif"
          alt="Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-1" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 relative group"
            onMouseEnter={animateArrow}
            onClick={animateArrow}
          >
            <div
              ref={cardRef}
              className="h-full relative overflow-visible flex items-center justify-center"
            >
              {/* Architectural SVG Border Frame from Asset */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-30 hidden md:block"
                viewBox="0 0 1190 769"
                preserveAspectRatio="none"
              >
                <path
                  d={svgPath}
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Bulletproof Desktop Clip Path */}
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                  @media (min-width: 768px) {
                    .desktop-clip {
                      clip-path: url(#main-asset-clip);
                      border: none !important;
                      border-radius: 0 !important;
                    }
                  }
                `,
                }}
              />

              {/* Clipped Container using Asset Path */}
              <div className="h-full w-full p-5 pb-20 md:p-12 flex flex-col justify-between relative border border-white/20 rounded-3xl desktop-clip">
                {/* SVG for Responsive ClipPath derivation */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <clipPath
                      id="main-asset-clip"
                      clipPathUnits="objectBoundingBox"
                    >
                      <path d="M 0,0.93 V 0.06 C 0,0.03 0.02,0 0.04,0 H 0.95 C 0.98,0 1,0.03 1,0.06 V 0.62 C 1,0.65 0.98,0.68 0.95,0.68 H 0.92 C 0.87,0.68 0.83,0.72 0.83,0.8 V 0.93 C 0.83,0.96 0.81,0.99 0.78,0.99 H 0.04 C 0.02,1 0,0.97 0,0.93 Z" />
                    </clipPath>
                  </defs>
                </svg>

                {/* <div className="flex gap-2 mb-12 relative z-10">
                  <div className="p-1 rounded-sm border border-white/20 text-white/40">
                    <Minus size={12} />
                  </div>
                  <div className="p-1 rounded-sm border border-white/20 text-white/40">
                    <Square size={10} />
                  </div>
                  <div className="p-1 rounded-sm border border-white/20 text-white/40">
                    <X size={12} />
                  </div>
                </div> */}

                <div className="relative z-10">
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/80 text-xl md:text-2xl font-light mb-4 text-orange-500 font-medium"
                  >
                    Our Journey: Turning Ambition into Digital Reality
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-none"
                  >
                    Who we are.
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/60 text-lg max-w-lg leading-relaxed mb-12"
                  >
                    At Digital Success Solutions (DSS), we are redefining how brands grow in the digital era. As a leading force in Indore’s digital marketing landscape, we go beyond managing campaigns—we engineer complete business transformations using cutting-edge, data-driven strategies.

                  </motion.p>

                  <div className="mb-8 md:mb-12">
                    <p className="text-white/70 font-semibold mb-4 text-xs md:text-sm md:tracking-widest uppercase">
                      Our Expertise
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {[
                        "Digital Strategy",
                        "Creative Design",
                        "Growth Marketing",
                        "Web Solutions",
                      ].map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20 bg-white/5 text-[10px] md:text-xs text-white/90 backdrop-blur-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Continuous Clients Marquee in empty space */}
                  <div
                    className="mt-6 md:mt-8 w-[85%] md:w-[90%] overflow-hidden relative    "
                    style={{
                      maskImage:
                        "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                    }}
                  >
                    <motion.div
                      className="flex w-max"
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    >
                      {[1, 2].map((set) => (
                        <div
                          key={set}
                          className="flex items-center gap-6 md:gap-12 shrink-0 px-3 md:px-6"
                        >
                          {[
                            "10.png",
                            "12.png",
                            "13.png",
                            "14.png",
                            "16.png",
                            "17.png",
                            "19.png",
                            "20.png",
                            "21.png",
                            "22.png",
                            "25.png",
                            "26.png",
                          ].map((img, i) => (
                            <img
                              key={`${set}-${i}`}
                              src={`/images/clients/${img}`}
                              alt={`Client ${i}`}
                              className="h-10 md:h-12 w-auto object-contain "
                            />
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* Refined Arrow Button - Repositioned and Animated Loop */}
              <Link
                href="/lets-connect"
                onClick={(e) => e.stopPropagation()}
                className="absolute z-40 right-2 bottom-2 md:right-[1%] md:bottom-[3%]"
              >
                <motion.div className="w-16 h-16 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all p-5 md:p-8">
                  <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                    <motion.img
                      animate={arrowControls}
                      src="/arrow-right.svg"
                      alt="Arrow Right"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full border border-white/20 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col group bg-zinc-900/20"
            >
              {/* Progress Bar Layer & Controls */}
              <div className="flex items-center gap-4 mb-8 relative z-20">
                <div className="flex flex-1 gap-2">
                  {slides.map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden"
                    >
                      {i === currentSlide ? (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: slideDuration / 1000,
                            ease: "linear",
                          }}
                          className="h-full bg-orange-500"
                        />
                      ) : i < currentSlide ? (
                        <div className="w-full h-full bg-white/60" />
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Title Section */}
              <div className="relative z-10 min-h-[4em] mb-4">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-white text-xl md:text-3xl font-bold leading-tight whitespace-pre-line"
                  >
                    {slides[currentSlide].title}
                  </motion.h3>
                </AnimatePresence>
              </div>

              {/* Visual Container - Fixed for no-cutting */}
              <div className="relative flex-grow flex items-center justify-center overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full flex items-center justify-center p-0"
                  >
                    {/* Important: Visual component ke andar img/video par 'object-contain' class honi chahiye */}
                    <div className="w-full h-full relative">
                      {slides[currentSlide].visual}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-fit lg:mt-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="border border-white/20 rounded-3xl md:rounded-4xl p-6 md:p-8 text-center group hover:bg-white/5 transition-all duration-300"
              >
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  6Y+
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm tracking-widest uppercase font-semibold">
                  of Experience
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="border border-white/20 rounded-3xl md:rounded-4xl p-6 md:p-8 text-center group hover:bg-white/5 transition-all duration-300"
              >
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  1200+
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm tracking-widest uppercase font-semibold">
                  Clients
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDSS;
