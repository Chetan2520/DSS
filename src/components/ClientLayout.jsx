"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import CreativeFooter from "@/components/CreativeFooter";

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

  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <CreativeFooter />}
    </>
  );
}
