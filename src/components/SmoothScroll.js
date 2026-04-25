// components/SmoothScroll.js
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // GSAP ko plugin register karna padega
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Ye raha tumhara code: Syncing GSAP with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy(); // Cleanup to prevent memory leaks
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
}