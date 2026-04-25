import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const AgencyWelcome = () => {
  const containerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Initial Reveal: Pillar lines niche se halke se upar aayengi
      gsap.fromTo([leftTextRef.current, rightTextRef.current], 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 0.5, duration: 1, stagger: 0.2, ease: "power3.out" }
      );

      // Scroll Parallax: Opposite direction slide
      gsap.to(leftTextRef.current, {
        x: -60,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      gsap.to(rightTextRef.current, {
        x: 60,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      // Card Appearance: Chota card jo thoda bada hokar fix ho jaye
      gsap.fromTo(cardRef.current, 
        { scale: 0.92, opacity: 0, y: 40 },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden py-16 px-6"
    >
      {/* Pillar Lines - Refined & Larger */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-4">
        <div ref={leftTextRef} className="will-change-transform">
          <p className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-zinc-400">
            Strategy <span className="text-blue-600">•</span> Design
          </p>
        </div>
        <div ref={rightTextRef} className="will-change-transform self-end md:self-auto mt-4 md:mt-0">
          <p className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-zinc-400">
            Performance <span className="text-blue-600">•</span> Growth
          </p>
        </div>
      </div>

      {/* Main Content Card - Compact & Premium */}
      <div 
        ref={cardRef}
        className="relative w-full max-w-4xl rounded-[40px] p-10 md:p-16 overflow-hidden"
      >
        {/* Subtle Inner Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tighter">
            Digital <span className="italic font-light text-zinc-500">Success</span> Solutions
          </h2>
          
          <div className="h-[1px] w-20 bg-zinc-800 mb-8"></div>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            Indore's trusted partners, specializing in boosting visibility and 
            driving <span className="text-white">measurable business results</span> 
            through data-driven digital strategies.
          </p>

          <Link href="/lets-connect" className="mt-10 px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-all duration-300 active:scale-95 inline-block">
            Let's Scale Together
          </Link>
        </div>
      </div>

      {/* Background Decor Layer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default AgencyWelcome;