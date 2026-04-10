"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ExpandingVideoHero = ({
  // User's provided video link as default
  videoSrc = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  line1 = "Delivering Great",
  line2Left = "Work",
  line2Right = "For",
  line3 = "18 Years.",
}) => {
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const line1Ref = useRef(null);
  const line3Ref = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const playButtonRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1.5,
          pin: true,
        },
      });

      // 1. Initial Tagline Clean Exit (with User's refined coordinates)
      tl.to(
        leftTextRef.current,
        { x: -100, opacity: 0, duration: 1, ease: "power2.inOut" },
        0,
      )
        .to(
          rightTextRef.current,
          { x: 100, opacity: 0, duration: 1, ease: "power2.inOut" },
          0,
        )
        .to(
          line1Ref.current,
          { y: -150, opacity: 0, duration: 1, ease: "power2.inOut" },
          0,
        )
        .to(
          line3Ref.current,
          { y: 150, opacity: 0, duration: 1, ease: "power2.inOut" },
          0,
        );

      // 2. VIDEO EXPANSION (CLEARING NAVBAR)
      // 75vh height to ensure the expanded video never hits the site Header
      tl.to(
        videoWrapperRef.current,
        {
          width: "92vw",
          height: "75vh",
          borderRadius: "3rem",
          zIndex: 50,
          y: 0,
          duration: 2,
          ease: "power3.inOut",
        },
        0.2,
      );

      // Subtle video zoom
      tl.to(
        videoRef.current,
        {
          scale: 1.1,
          duration: 2,
          ease: "power3.inOut",
        },
        0.2,
      );

      // 3. SHOW PLAY BUTTON (From User's App Version)
      tl.fromTo(
        playButtonRef.current,
        { opacity: 0, scale: 0.4 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        1.5,
      );

      // 4. Background transition
      tl.to(
        sectionRef.current,
        {
          backgroundColor: "#000000",
          duration: 1,
        },
        0.5,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#F9F9F9] overflow-hidden flex items-center justify-center transition-colors duration-1000 select-none pb-4 md:pb-12"
    >
      {/* 
        PREMIUM CONTAINER: 
        Integrated pt-24 (Navbar Safety) + User's Bold Typography 
      */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-[1920px] pointer-events-none px-6 pt-24 md:pt-32">
        {/* Line 1 (User Style: Bold + Tight) */}
        <div ref={line1Ref} className="will-change-transform">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black leading-none mb-1 md:mb-2 text-center underline-offset-8">
            {line1}
          </h1>
        </div>

        {/* Line 2 (Systematic Nesting & Center-Lock) */}
        <div className="flex items-center justify-center gap-6 md:gap-16 w-full will-change-transform">
          {/* LEFT WORD */}
          <h1
            ref={leftTextRef}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-black leading-none"
          >
            {line2Left}
          </h1>

          {/* THE VIDEO BOX (Nesting Logic for Perfect Alignment) */}
          <div
            ref={videoWrapperRef}
            className="relative w-28 md:w-[16rem] h-16 md:h-[10rem] rounded-xl md:rounded-[2.5rem] overflow-hidden shadow-2xl  bg-zinc-200 transition-all duration-300 will-change-transform"
            style={{ flexShrink: 0, transformOrigin: "center center" }}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-125"
            />

            {/* User's Play Button UI (Overlay) */}
            <div
              ref={playButtonRef}
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0"
            >
              <div className="w-14 h-14 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 md:w-10 md:h-10 fill-white ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Reflection Layer */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>

          {/* RIGHT WORD */}
          <h1
            ref={rightTextRef}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-black leading-none"
          >
            {line2Right}
          </h1>
        </div>

        {/* Line 3 */}
        <div ref={line3Ref} className="will-change-transform mt-1 md:mt-2">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black leading-none text-center">
            {line3}
          </h1>
        </div>
      </div>

      {/* Decorative Branding / Scroll Hint */}
      <div className="absolute right-8 bottom-12 opacity-5 pointer-events-none rotate-90 origin-right">
        <span className="text-[10px] tracking-[1em]     text-black">
          SCROLL
        </span>
      </div>
    </section>
  );
};

export default ExpandingVideoHero;
