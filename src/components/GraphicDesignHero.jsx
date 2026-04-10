"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GraphicDesignHero = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const finalHeadingRef = useRef(null);
  const scrollBtnRef = useRef(null);
  const gettyLogoRef = useRef(null);

  // Generate 30 diverse placeholders for the "Archive" look
  const artImages = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    url: `https://picsum.photos/seed/getty-art-${i}/400/500`,
  }));

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1.2,
        },
      });

      // 1. INITIAL STATE: Compact "S-Curve" Stacking
      imagesRef.current.forEach((img, i) => {
        const progress = i / (artImages.length - 1);

        // REFINED: Curve is now more compact (50% width and 10% height amplitude)
        const startX = -25 + progress * 50;
        const startY = Math.sin(progress * Math.PI * 2) * 5;

        gsap.set(img, {
          xPercent: startX * 10,
          yPercent: startY * 10,
          rotation: (progress - 0.5) * 30,
          scale: 0.5, // Slightly smaller initial scale for tighter look
          opacity: 1,
          zIndex: i,
        });

        const seed = i * 1.5;
        const randomX = ((Math.sin(seed) * 1000) % 110) - 55;
        const randomY = ((Math.cos(seed) * 1000) % 100) - 50;
        const finalOpacity = i % 4 === 0 ? 0.45 + Math.random() * 0.3 : 0.12;

        tl.to(
          img,
          {
            x: `${randomX}vw`,
            y: `${randomY}vh`,
            rotation: (Math.random() - 0.5) * 120,
            scale: 0.2 + Math.random() * 0.2,
            opacity: finalOpacity,
            duration: 2.5,
            ease: "power2.inOut",
          },
          0,
        );
      });

      // 2. TEXT & BG TRANSITION (TO BLACK)
      tl.to(
        [title1Ref.current, title2Ref.current],
        {
          opacity: 0,
          y: -60,
          scale: 0.9,
          duration: 1.2,
          ease: "power2.in",
        },
        0,
      );

      tl.to(
        sectionRef.current,
        {
          backgroundColor: "#000000",
          duration: 1.5,
          ease: "power2.inOut",
        },
        0.8,
      );

      tl.to(
        gettyLogoRef.current,
        { color: "#ffffff", opacity: 0.4, duration: 1 },
        1,
      );

      tl.fromTo(
        finalHeadingRef.current,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          color: "#ffffff",
          duration: 1.8,
          ease: "power3.out",
        },
        1.2,
      );

      tl.fromTo(
        scrollBtnRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          color: "#ffffff",
          borderColor: "rgba(255,255,255,0.2)",
          duration: 1,
        },
        1.8,
      );
    },
    { scope: sectionRef },
  );

  return (
    <div className="bg-black min-h-[100vh] selection:bg-pink-500 selection:text-white font-serif italic">
      {/* HEADER LOGO */}

      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-white"
      >
        {/* SCROLLING IMAGE GALLERY */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          {artImages.map((img, idx) => (
            <div
              key={img.id}
              ref={(el) => (imagesRef.current[idx] = el)}
              className="absolute w-40 h-52 md:w-64 md:h-80 bg-zinc-50 shadow-2xl border border-white/5 overflow-hidden will-change-transform rounded-[2.5rem]"
            >
              <img
                src={img.url}
                alt="Archive Art"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          ))}
        </div>

        {/* INITIAL TAGLINE (Refined Visibility) */}
        <div className="relative z-20 flex items-center justify-between w-full max-w-5xl px-12 pointer-events-none">
          <h2
            ref={title1Ref}
            className="text-6xl md:text-[130px] font-medium tracking-tighter text-black"
          >
            Tracing
          </h2>
          <h2
            ref={title2Ref}
            className="text-6xl md:text-[130px] font-medium tracking-tighter text-black"
          >
            Art
          </h2>
        </div>

        {/* FINAL EDITORIAL SCENE */}
        <div
          ref={finalHeadingRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-30 px-10 opacity-0 pointer-events-none transition-colors duration-700"
        >
          <p className="text-[10px] md:text-[11px]  tracking-[0.5em] text-zinc-500 mb-8   ">
            Millions of Resources, Spanning Five Centuries
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-[62px] text-center leading-[1.15] max-w-5xl font-medium tracking-tight px-4 will-change-transform">
            Here&apos;s how the Getty Provenance Index is transforming research
            on the social life of art.
          </h1>

          {/* PREMIUM SCROLL BUTTON */}
          <div
            ref={scrollBtnRef}
            className="mt-16 pointer-events-auto opacity-0 translate-y-5"
          >
            <button className="px-10 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-[10px]   font-bold tracking-[0.25em] flex items-center gap-4 shadow-sm hover:border-white transition-all group">
              <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-125 transition-transform animate-pulse" />
              Scroll down
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignHero;
