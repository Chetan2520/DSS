"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const progressRef = useRef(null);
  const numberRef = useRef(null);

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          gsap.set(containerRef.current, { display: "none" });
        },
      });

      tl.to(numberRef.current, {
        innerText: 100,
        duration: 1.2,
        snap: { innerText: 1 },
        ease: "power3.inOut",
        onUpdate: function () {
          const val = Math.ceil(this.targets()[0].innerText);
          if (progressRef.current) {
            progressRef.current.style.width = `${val}%`;
          }
        },
      });

      tl.to(
        contentRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: -20,
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.3",
      );

      tl.to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "-=0.2",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-screen bg-[#050505] z-[9999] flex flex-col items-center justify-center overflow-hidden will-change-transform"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center w-full max-w-sm px-6"
      >
        <div className="mb-6 text-center">
          <h2 className="text-white text-3xl md:text-4xl   tracking-tighter   mb-2">
            Digital Success
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-[10px] font-mono tracking-[0.3em]  ">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0078f0] animate-pulse" />
            Initializing...
          </div>
        </div>
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-3 relative">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-[#0078f0] to-[#ff9f20] w-0"
            style={{ width: "0%" }}
          />
        </div>
        <div className="flex justify-between w-full text-white font-mono text-sm font-bold opacity-80">
          <span>00</span>
          <span ref={numberRef}>0</span>
        </div>
      </div>
      <div
        ref={(el) => {
          if (el) gsap.set(el, { opacity: 0.3 });
        }}
        className="absolute bottom-8 text-white text-[9px]   tracking-widest pointer-events-none"
      >
        Indore • MP • India
      </div>
    </div>
  );
};

export default Preloader;
