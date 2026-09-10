"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import BlogDetail from "@/components/BlogDetail";

export default function NotFound() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isBlog, setIsBlog] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if current path belongs to blogs
    if (pathname?.includes("/blogs/")) {
      setIsBlog(true);
    }
    
    // Simple entry animation for 404 UI
    if (!pathname?.includes("/blogs/")) {
      gsap.fromTo(
        ".not-found-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [pathname]);

  // If it's a blog path, we render BlogDetail. 
  // BlogDetail now has its own internal loader and H1 for SEO.
  if (isBlog || (pathname && pathname.includes("/blogs/"))) {
    return <BlogDetail />;
  }

  return (
    <div 
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden"
      style={{ opacity: mounted ? 1 : 0 }} // Prevent flash of content before JS determines path
    >
      {/* Background glowing effects to match modern dark theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="not-found-content relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          href="/"
          className="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-transparent border border-indigo-500 rounded-full hover:bg-indigo-600 hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-900 group"
        >
          <span className="mr-2">Return to Homepage</span>
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
