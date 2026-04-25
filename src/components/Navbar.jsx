"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import {
  ChevronDown,
  Globe,
  Megaphone,
  Share2,
  Search,
  Users,
  ShoppingBag,
  Palette,
  ArrowRight,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const dropdownRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const services = [
    {
      name: "Website Development",
      path: "/website-design-and-website-development",
      icon: Globe,
      description: "Custom, high-performance websites built with the latest technologies to drive your business forward.",
      image: "/website.png",
    },
    {
      name: "Graphic Designing",
      path: "/graphic-designing",
      icon: Palette,
      description: "Creative visuals and brand identities that capture your essence and leave a lasting impression.",
      image: "/graphic.png",
    },
    {
      name: "Performance Marketing",
      path: "/performance-marketing-ppc",
      icon: Megaphone,
      description: "Data-driven marketing strategies focused on conversion, ROI, and measurable business growth.",
      image: "/performance.png",
    },
    {
      name: "Social Media Marketing",
      path: "/social-media-marketing",
      icon: Share2,
      description: "Building community and increasing brand engagement across all major social platforms.",
      image: "/social-media.png",
    },
    {
      name: "SEO Optimization",
      path: "/search-engine-optimization",
      icon: Search,
      description: "Search engine strategies designed to improve rankings, drive traffic, and build authority.",
      image: "/seo.png",
    },
    {
      name: "Influencer Marketing",
      path: "/influencer-marketing",
      icon: Users,
      description: "Collaborating with key industry voices to amplify your brand's reach and credibility.",
      image: "/influencer.png",
    },
    {
      name: "E-Commerce Apps",
      path: "/e-commerce-applications",
      icon: ShoppingBag,
      description: "Building powerful online shopping experiences that turn visitors into loyal customers.",
      image: "/ecom.png",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop Dropdown Animation
  useEffect(() => {
    const el = dropdownRef.current;
    if (isServicesOpen) {
      gsap.to(el, { autoAlpha: 1, y: 0, display: "flex", duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(el, { autoAlpha: 0, y: 10, display: "none", duration: 0.2 });
    }
  }, [isServicesOpen]);

  // Mobile Slide-in Animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.3 });
      gsap.to(mobileMenuRef.current, { x: 0, autoAlpha: 1, duration: 0.5, ease: "power4.out" });
    } else {
      document.body.style.overflow = "unset";
      gsap.to(mobileMenuRef.current, { x: "100%", autoAlpha: 0, duration: 0.4, ease: "power3.in" });
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.3 });
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setActiveMobileSubmenu(null);
    router.push(path);
  };

  const isSubPage = pathname !== "/";
  const navLinks_mobile = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/about" },
    { name: "Services", path: "/#services", submenu: true },
    { name: "Products", path: "/portfoliopage" },
    { name: "Cases", path: "/cases" },
    { name: "Contact Us", path: "/lets-connect" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`top-0 left-0 w-full z-50 transition-all duration-300 ${isSubPage ? "sticky" : "fixed"} ${
          isScrolled ? "bg-black/60 backdrop-blur-xl py-4 border-b border-white/5" : isSubPage ? "bg-black py-4 border-b border-white/10" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0 cursor-pointer">
            <img src="/images/logo.png" alt="digiPanda" className="h-14 md:h-18 w-auto object-contain" />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            <button onClick={() => handleNavClick("/")} className="text-sm md:text-lg text-white tracking-wide">Home</button>
            <button onClick={() => handleNavClick("/about")} className="text-sm md:text-lg text-white tracking-wide">Who We Are</button>

            <div className="relative py-2 group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="text-sm md:text-lg text-white flex items-center gap-1.5 focus:outline-none">
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* DROPDOWN CHANGED TO WHITE */}
              <div ref={dropdownRef} className="absolute top-[calc(100%+0px)] left-1/2 -translate-x-1/2 w-[1000px] bg-white border border-gray-200 rounded-[2.5rem] p-2 hidden shadow-2xl z-[60] overflow-hidden">
                <div className="w-[35%] p-8 space-y-1 border-r border-gray-100">
                  {services.map((service) => (
                    <div key={service.name} onMouseEnter={() => setActiveService(service)} onClick={() => handleNavClick(service.path)} className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${activeService.name === service.name ? "bg-gray-50 border border-gray-200 shadow-sm" : "hover:bg-gray-50"}`}>
                      <service.icon size={18} className={activeService.name === service.name ? "text-orange-500" : "text-gray-400"} />
                      <span className={`text-sm font-bold ${activeService.name === service.name ? "text-black" : "text-gray-500"}`}>{service.name}</span>
                    </div>
                  ))}
                </div>
                <div className="w-[65%] p-10 flex flex-col justify-center bg-gray-50/30">
                   <div key={activeService.name} className="animate-in fade-in slide-in-from-right-8 duration-700 w-full">
                      <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-6 shadow-xl border border-gray-200">
                        <img src={activeService.image} alt={activeService.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-5xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-orange-500 font-bold leading-tight">
                        {activeService.name}
                      </h3>
                      <p className="text-gray-600 text-base mt-3 max-w-xl leading-relaxed font-medium">
                        {activeService.description}
                      </p>
                      <div className="pt-6">
                        <button onClick={() => handleNavClick(activeService.path)} className="flex items-center gap-3 text-orange-500 font-bold uppercase text-[10px] tracking-[0.2em] group/btn">
                          Discover More 
                          <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <button onClick={() => handleNavClick("/portfoliopage")} className="text-sm md:text-lg text-white tracking-wide">Portfolio</button>
            <button onClick={() => handleNavClick("/blogs")} className="text-sm md:text-lg text-white tracking-wide">Blogs</button>
            <button onClick={() => handleNavClick("/contact-us")} className="text-sm md:text-lg text-white tracking-wide">Contact Us</button>
         
         
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-6">
            <Link href="/lets-connect" className="hidden lg:block">
               <button className="px-8 py-2.5 bg-white text-black text-sm md:text-lg font-bold rounded-full transition-all shadow-xl active:scale-95">Let's Talk</button>
            </Link>

            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-white/10 rounded-full">
              <span className="w-5 h-[2px] bg-white" />
              <span className="w-5 h-[2px] bg-white" />
              <span className="w-5 h-[2px] bg-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER (ALREADY WHITE) */}
      <div ref={overlayRef} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] invisible opacity-0" onClick={() => setIsMobileMenuOpen(false)} />
      <div ref={mobileMenuRef} className="fixed top-4 right-4 bottom-4 w-[calc(100%-32px)] max-w-[450px] bg-white z-[101] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden invisible translate-x-full">
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
          <button onClick={() => setIsMobileMenuOpen(false)} className="w-9 h-9 flex items-center justify-center bg-black rounded-full text-white"><X size={18} /></button>
        </div>
        <div className="flex-1 px-6 overflow-y-auto no-scrollbar">
          <nav className="flex flex-col">
            {navLinks_mobile.map((link) => (
              <div key={link.name} className="border-b border-gray-100 last:border-none">
                <div className="flex items-center justify-between py-4">
                  <button onClick={() => !link.submenu ? handleNavClick(link.path) : setActiveMobileSubmenu(activeMobileSubmenu === link.name ? null : link.name)} className="text-[24px] font-bold text-black tracking-tight text-left">{link.name}</button>
                  {link.submenu && (
                    <button onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === link.name ? null : link.name)} className="w-7 h-7 flex items-center justify-center bg-orange-500 rounded-full text-white">
                      <ChevronDown size={16} className={`transition-transform duration-300 ${activeMobileSubmenu === link.name ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {link.submenu && (
                  <div className={`overflow-hidden transition-all duration-300 ${activeMobileSubmenu === link.name ? "max-h-[350px] pb-4" : "max-h-0"}`}>
                    <div className="grid grid-cols-1 gap-2 pl-2">
                      {services.map((s) => (
                        <button key={s.name} onClick={() => handleNavClick(s.path)} className="flex items-center gap-2 py-1.5 text-gray-500 text-sm font-medium text-left">
                          <s.icon size={14} className="text-orange-500" /> {s.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="p-6">
          <button onClick={() => handleNavClick("/lets-connect")} className="w-full py-4 bg-orange-500 text-white font-bold text-base rounded-full shadow-lg active:scale-95 transition-all">Let's Talk</button>
        </div>
      </div>

      <style jsx>{` .no-scrollbar::-webkit-scrollbar { display: none; } `}</style>
    </>
  );
}