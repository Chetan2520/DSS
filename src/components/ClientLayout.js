"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientLayout({ children }) {
  useEffect(() => {
    // 1. Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Scroll ki softness (badhaoge toh aur smooth hoga)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Standard premium easing
      smoothWheel: true,
      touchMultiplier: 2, // Mobile pe kitna smooth chale
    });

    // 3. Sync GSAP with Lenis (Main Lag-Free Logic)
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Lenis ko GSAP ke ticker se connect kar diya
    });

    gsap.ticker.lagSmoothing(0); // Lag aur jumps ko khatam karne ke liye

    // Cleanup function
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
}