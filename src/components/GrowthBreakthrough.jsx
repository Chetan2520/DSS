"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const socialLogos = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    x: "10%",
    y: "20%",
    ix: -400,
    iy: -300,
    size: 70,
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    x: "85%",
    y: "15%",
    ix: 400,
    iy: -200,
    size: 65,
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
    x: "75%",
    y: "75%",
    ix: 300,
    iy: 400,
    size: 80,
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
    x: "35%",
    y: "75%",
    ix: -300,
    iy: 300,
    size: 60,
  },
  {
    url: "https://cdn.worldvectorlogo.com/logos/meta-3.svg",
    x: "5%",
    y: "45%",
    ix: -500,
    iy: -100,
    size: 80,
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
    x: "45%",
    y: "8%",
    ix: 0,
    iy: -400,
    size: 50,
  },
  {
    url: "https://cdn.worldvectorlogo.com/logos/youtube-6.svg",
    x: "20%",
    y: "45%",
    ix: -400,
    iy: 0,
    size: 80,
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    x: "75%",
    y: "40%",
    ix: 400,
    iy: 0,
    size: 70,
  },
  {
    url: "https://cdn.worldvectorlogo.com/logos/canva-wordmark-2.svg",
    x: "88%",
    y: "65%",
    ix: 400,
    iy: 300,
    size: 60,
  },
];

const MagneticImage = ({ data, scrollProgress }) => {
  const x = useTransform(scrollProgress, [0, 0.8], [data.ix, 0]);
  const y = useTransform(scrollProgress, [0, 0.8], [data.iy, 0]);
  const scale = useTransform(scrollProgress, [0, 0.8], [0.3, 1]);
  const opacity = useTransform(scrollProgress, [0, 0.4], [0, 1]);

  const springX = useSpring(x, { damping: 20, stiffness: 60 });
  const springY = useSpring(y, { damping: 20, stiffness: 60 });

  return (
    <motion.div
      style={{
        left: data.x,
        top: data.y,
        x: springX,
        y: springY,
        scale,
        opacity,
      }}
      className="absolute pointer-events-none z-10"
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <img
          src={data.url}
          alt="Social Logo"
          style={{ width: data.size, height: data.size }}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

const GrowthBreakthrough = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Background parallax movement
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center py-40 px-6 overflow-hidden bg-black"
    >
      {/* 1. Full Background Image (Cover) */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 h-[120%] -top-[10%]"
      >
        <Image
          src="/images/difference-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-40"
        />
        {/* Dark Overlays for depth */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />
      </motion.div>

      {/* Floating Logos Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {socialLogos.map((logo, idx) => (
          <MagneticImage
            key={idx}
            data={logo}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* Content Layer */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
        >
          <h2 className="text-4xl md:text-8xl tracking-tighter mb-16 bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent leading-[0.9]">
            Transform Potential <br />
            Into Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
              Dominance
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link href="/lets-connect">
            <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-xl tracking-tighter transition-all duration-700 hover:tracking-widest active:scale-95 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] flex items-center gap-4 mx-auto group">
              Let's Talk
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Vignette */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black to-transparent pointer-events-none z-15" />
    </section>
  );
};

export default GrowthBreakthrough;