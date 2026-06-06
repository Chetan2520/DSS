"use client";
import React, { useEffect, useRef } from "react";
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroBg = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 768;

    // Switch video source based on device
    if (videoRef.current) {
      const videoSrc = isMobile ? "/videos/hero-phone.mp4" : "/videos/hero-desktop.mp4";
      if (videoRef.current.src !== window.location.origin + videoSrc) {
        videoRef.current.src = videoSrc;
        videoRef.current.load();
      }
    }

    const ctx = gsap.context(() => {
      if (isMobile) {
        // Mobile: Set initial hero state
        gsap.set(videoRef.current, {
          top: 0,
          left: 0,
          xPercent: 0,
          yPercent: 0,
          width: "100%",
          height: "100%",
          borderRadius: "0rem",
          position: "absolute"
        });
        gsap.set(contentRef.current, { opacity: 1, y: 0 });
        return;
      }

      // Desktop Only Transition
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        }
      });

      gsap.set(videoRef.current, {
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        width: "100%",
        height: "100%",
        borderRadius: "0rem",
      });

      tl.to(videoRef.current, {
        left: "75%",
        top: "50%",
        width: "40%",
        height: "55vh",
        borderRadius: "2rem",
        ease: "power2.inOut",
      }, 0);

      tl.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out"
        },
        0.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-auto md:h-[300vh] bg-black">
      {/* Stage Container - Sticky only on Desktop */}
      <div className="relative md:sticky top-0 md:h-screen w-full overflow-visible md:overflow-hidden flex flex-col md:flex-row items-center px-0 md:px-20 z-0">

        {/* THE VIDEO - Transitions on desktop, Hero section on mobile */}
        <div className="relative w-full h-screen md:absolute md:top-0 md:left-0 md:h-full md:z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 object-cover w-full h-full "
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>

        {/* THE ABOUT CONTENT */}
        <div
          ref={contentRef}
          className="relative z-10 w-full md:w-1/2 pointer-events-none py-20 md:py-0 md:h-full flex flex-col justify-center"
        >
          <div className="pointer-events-auto space-y-4 md:space-y-6 px-4 md:px-0">
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
              Best Digital Marketing Agency in Indore
            </h1>

            <div className="max-w-xl">
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                Welcome to Digital Success Solutions, your trusted digital marketing agency in Indore. We are your growth partners, specializing in boosting your brand visibility, increasing website traffic, and driving measurable business results through data-driven digital marketing strategies.
              </p>
            </div>

            <div className="pt-2 md:pt-4">
              <Link
                href="/about-us"
                className="group relative inline-flex items-center gap-4 px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-500 text-sm md:text-base"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Compact Intense Bottom-Left Glow */}
        <div className="absolute bottom-[-5%] left-[-5%] w-[100px] h-[200px] bg-[#0078f0] blur-[100px] rounded-full pointer-events-none z-0"></div>
      </div>
    </div>
  );
};

export default HeroBg;
