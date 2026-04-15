"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function UniqueReveal() {
  const containerRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const circleRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(visionRef.current, {
        scale: 0.8,
        opacity: 0,
        filter: "blur(15px)",
        borderRadius: "100px",
        duration: 1,
        ease: "power2.inOut",
      })
      .to(circleRef.current, {
        scale: 40, // Expanded for full coverage
        duration: 1.5,
        ease: "power2.inOut",
      }, "-=0.5")
      .fromTo(missionRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=1"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full bg-[#050505] overflow-hidden">
      
      {/* SECTION 1: VISION (The Shrinking Card) */}
      <div 
        ref={visionRef} 
        className="absolute inset-0 z-10 flex items-center justify-center p-6 bg-zinc-900/40 border border-white/5 mx-4 my-4 rounded-[0px]"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block">01. Future Perspective</span>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-none">
              OUR <br /> <span className="text-zinc-500">VISION</span>
            </h2>
            <div className="absolute -left-4 top-0 w-1 h-full bg-orange-500" />
          </div>
          <div className="text-zinc-400 text-lg md:text-xl space-y-6 font-light leading-relaxed">
            <p>
              To become a leading digital marketing company in India that empowers 
              <span className="text-white font-medium"> startups, small businesses, and growing brands </span> 
              to succeed in the digital world.
            </p>
            <p className="text-sm md:text-base opacity-70">
              We aim to support Digital India by helping businesses build a strong online presence, 
              turning ideas into brands and achieving long-term success.
            </p>
          </div>
        </div>
      </div>

      {/* THE REVEAL CIRCLE (Animation Layer) */}
      <div 
        ref={circleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-orange-600 rounded-full z-20 scale-0 pointer-events-none"
      />

      {/* SECTION 2: MISSION (The Expanding Content) */}
      <div 
        ref={missionRef}
        className="absolute inset-0 z-30 flex items-center justify-center p-6 opacity-0 pointer-events-none"
      >
        <div className="max-w-6xl w-full text-center space-y-10">
          <div className="inline-block px-4 py-1 border border-black/20 rounded-full text-black font-bold text-xs uppercase tracking-tighter bg-white/20">
            02. Action & Impact
          </div>
          <h2 className="text-7xl md:text-[10rem] font-black text-black leading-none tracking-tighter">
            MISSION
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left border-t border-black/10 pt-10">
            {/* Mission Pillar 1 */}
            <div className="space-y-3">
              <h4 className="font-bold text-black uppercase text-sm tracking-widest">Result-Driven</h4>
              <p className="text-black/80 text-sm leading-relaxed">
                Delivering solutions that create real impact across industries like 
                <strong> e-commerce, healthcare, real estate, and education.</strong>
              </p>
            </div>
            
            {/* Mission Pillar 2 */}
            <div className="space-y-3">
              <h4 className="font-bold text-black uppercase text-sm tracking-widest">Cost-Effective</h4>
              <p className="text-black/80 text-sm leading-relaxed">
                Focusing on startups with affordable SEO, PPC, and web development 
                so they can grow faster and compete effectively.
              </p>
            </div>
            
            {/* Mission Pillar 3 */}
            <div className="space-y-3">
              <h4 className="font-bold text-black uppercase text-sm tracking-widest">Sustainability</h4>
              <p className="text-black/80 text-sm leading-relaxed">
                Empowering the Indian startup ecosystem and helping brands achieve 
                sustainable digital growth for the long haul.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Big Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[40vw] font-bold text-white tracking-tighter">DIGIPANDA</h1>
      </div>
    </div>
  );
}