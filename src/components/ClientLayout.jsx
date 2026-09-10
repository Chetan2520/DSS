"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import CreativeFooter from "@/components/CreativeFooter";
import Lenis from "@studio-freight/lenis";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname === "/adminsurendraseo";

  // Scroll to top on route change
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <CreativeFooter />}
    </>
  );
}
