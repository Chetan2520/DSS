"use client";
import { useEffect } from "react";
import { usePathname } from 'next/navigation';


export default function ScrollToTop() {
  const { pathname, hash } = usePathname();

  useEffect(() => {
    // Agar URL me #hash NAHI hai, tabhi top pe jao.
    // Agar hash hai, to App.jsx ka logic sambhal lega.
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}