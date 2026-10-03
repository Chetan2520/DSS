"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import CreativeFooter from "@/components/CreativeFooter";
import Lenis from "lenis";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname === "/adminsurendraseo";
  const [lenis, setLenis] = useState(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    setLenis(lenisInstance);

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el);
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 500);
    } else {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, lenis]);

  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <CreativeFooter />}
    </>
  );
}
