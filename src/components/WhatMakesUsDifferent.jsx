"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const centerCardRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1200", // Shortened from 2000 to make the section unpin much sooner
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // 1. Fade out all other grid items as we scroll, so only the center remains
      tl.to(".grid-item-fade", {
        opacity: 0,
        ease: "power2.inOut",
      }, 0);

      // 2. Scale the ENTIRE grid together so EVERYTHING zooms
      // At exactly 2.0x scale, the 50vw center card hits EXACTLY 100vw (Full Width)
      // And the 35vh height hits EXACTLY 70vh (fully visible, no bleeding)
      tl.to(gridRef.current, {
        scale: 2.0,
        transformOrigin: "50% 40%", // Moved origin up to mathematically push the final zoomed image DOWN
        ease: "power2.inOut",
      }, 0);
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full block">
      {/* Pinned Animation Section */}
      <section ref={sectionRef} className="relative w-full h-screen bg-black overflow-hidden z-10 flex items-center justify-center">
        
        {/* 
          Masterfully engineered CSS Grid layout.
          Center item is 50vw wide and 35vh tall. 
          When scaled by 1.85, it hits ~92vw and ~64vh (Very wide, fully visible).
        */}
        <div 
          ref={gridRef}
          className="absolute inset-0 w-full h-full p-1 md:p-2 origin-center"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            gridTemplateRows: "repeat(100, 1fr)",
            gap: "4px",
          }}
        >
          {/* Column 1 (Left Side) */}
          <div className="grid-item-fade relative w-full h-full bg-zinc-900 overflow-hidden" style={{ gridColumn: "1 / 2", gridRow: "1 / 40" }}>
            <img src="/images/team/4.jpeg" alt="Team member 1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="grid-item-fade relative w-full h-full bg-zinc-900 overflow-hidden" style={{ gridColumn: "1 / 2", gridRow: "40 / 70" }}>
            <img src="/images/team/2.jpeg" alt="Team member 2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="grid-item-fade relative w-full h-full bg-zinc-900 overflow-hidden" style={{ gridColumn: "1 / 2", gridRow: "70 / 101" }}>
            <img src="/images/team/3.jpeg" alt="Team member 3" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Column 2 (Center Area) */}
          <div className="grid-item-fade relative w-full h-full bg-zinc-900 overflow-hidden" style={{ gridColumn: "2 / 3", gridRow: "1 / 30" }}>
            <img src="/images/team/5.jpeg" alt="Team member 4" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          
          {/* EXACT CENTER ZOOM TARGET - Pure Simple Image */}
          <div 
            ref={centerCardRef}
            className="relative w-full h-full bg-black overflow-hidden z-20" 
            style={{ gridColumn: "2 / 3", gridRow: "30 / 65" }}
          >
            <img src="/images/team/1.jpeg" alt="Team Lead" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          
          <div className="grid-item-fade relative w-full h-full bg-zinc-900 overflow-hidden" style={{ gridColumn: "2 / 3", gridRow: "65 / 101" }}>
            <img src="/images/team/2.jpeg" alt="Team member 6" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Column 3 (Right Side) */}
          <div className="grid-item-fade relative w-full h-full bg-zinc-900 overflow-hidden" style={{ gridColumn: "3 / 4", gridRow: "1 / 50" }}>
            <img src="/images/team/6.jpeg" alt="Team member 7" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="grid-item-fade relative w-full h-full bg-zinc-900 overflow-hidden" style={{ gridColumn: "3 / 4", gridRow: "50 / 80" }}>
            <img src="/images/team/8.jpeg" alt="Team member 8" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="grid-item-fade relative w-full h-full bg-zinc-900 overflow-hidden" style={{ gridColumn: "3 / 4", gridRow: "80 / 101" }}>
            <img src="/images/team/9.jpeg" alt="Team member 9" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

      </section>

      {/* Content Below (Margin adjusted to perfectly align with the lower image) */}
      <section className="relative bg-black text-white z-20 pb-32 -mt-[10vh] pt-8">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-white">
            Here is some content
          </h2>

          <div className="space-y-6 text-zinc-300 text-base leading-relaxed font-light">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default WhatMakesUsDifferent;