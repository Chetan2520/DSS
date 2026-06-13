"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
import SlidingButton from "./SlidingButton";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);

  // New GSAP curved path refs
  const dropdownContainerRef = useRef(null);
  const svgPathRef = useRef(null);
  const contentRef = useRef(null);
  const menuTl = useRef(null);
  const timeoutRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  // Robust Hover Handlers
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // 150ms buffer prevents gap closing
  };

  const services = [
    {
      name: "Website Development",
      path: "/website-development-company-in-india",
      icon: Globe,
      description:
        "Custom, high-performance websites built with the latest technologies to drive your business forward.",
      image: "/website.avif",
    },
    {
      name: "E-Commerce Apps",
      path: "/ecommerce-development-company-in-indore",
      icon: ShoppingBag,
      description:
        "Building powerful online shopping experiences that turn visitors into loyal customers.",
      image: "/ecom.avif",
    },
    {
      name: "Graphic Designing",
      path: "/graphic-designing-services-in-indore",
      icon: Palette,
      description:
        "Creative visuals and brand identities that capture your essence and leave a lasting impression.",
      image: "/graphic.avif",
    },
    {
      name: "Performance Marketing",
      path: "/performance-marketing-agency-in-indore",
      icon: Megaphone,
      description:
        "Data-driven marketing strategies focused on conversion, ROI, and measurable business growth.",
      image: "/performance.avif",
    },
    {
      name: "Social Media Marketing",
      path: "/social-media-marketing-company-in-indore",
      icon: Share2,
      description:
        "Building community and increasing brand engagement across all major social platforms.",
      image: "/social-media.avif",
    },
    {
      name: "SEO Optimization",
      path: "/seo-company-in-indore",
      icon: Search,
      description:
        "Search engine strategies designed to improve rankings, drive traffic, and build authority.",
      image: "/seo.avif",
    },
    {
      name: "Influencer Marketing",
      path: "/influencer-marketing-agency-in-indore",
      icon: Users,
      description:
        "Collaborating with key industry voices to amplify your brand's reach and credibility.",
      image: "/influencer.avif",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop Curved Full-Screen Dropdown Animation
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    menuTl.current = tl;

    // Initial state
    gsap.set(dropdownContainerRef.current, { display: "none" });
    gsap.set(svgPathRef.current, {
      attr: { d: "M0,0 L1000,0 L1000,0 Q500,0 0,0 Z" },
    });

    // 1. Make visible instantly
    tl.to(dropdownContainerRef.current, { display: "block", duration: 0.01 })
      // 2. Extremely fast, dramatic curve drop
      .to(svgPathRef.current, {
        duration: 0.2,
        attr: { d: "M0,0 L1000,0 L1000,600 Q500,1200 0,600 Z" },
        ease: "power1.in",
      })
      // 3. Smooth deceleration into full rectangle
      .to(svgPathRef.current, {
        duration: 0.35,
        attr: { d: "M0,0 L1000,0 L1000,1000 Q500,1000 0,1000 Z" },
        ease: "power3.out",
      })
      // 4. Content explodes upwards and fades in WITH the curve flattening (zero delay)
      .fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 60, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" },
        "-=0.3",
      );

    return () => tl.kill();
  }, []);

  // Trigger Timeline on Hover
  useEffect(() => {
    if (!menuTl.current) return;
    if (isServicesOpen) {
      menuTl.current.timeScale(1.2).play(); // Plays snappy
    } else {
      menuTl.current.timeScale(1.8).reverse(); // Reverses very fast to feel ultra-responsive
    }
  }, [isServicesOpen]);

  // Mobile Slide-in Animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.3 });
      gsap.to(mobileMenuRef.current, {
        x: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      document.body.style.overflow = "unset";
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        autoAlpha: 0,
        duration: 0.4,
        ease: "power3.in",
      });
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
    { name: "Who We Are", path: "/about-us" },
    { name: "Services", path: "/#services", submenu: true },
    { name: "Products", path: "/portfoliopage" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/lets-connect" },
  ];

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`top-0 left-0 w-full z-50 transition-all duration-300 ${isSubPage ? "sticky" : "fixed"} ${isScrolled
          ? "bg-black/60 backdrop-blur-xl py-2 border-b border-white/5"
          : isSubPage
            ? "bg-black py-2 border-b border-white/10"
            : "bg-transparent py-3"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0 cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="Digital Success Solutions"
              width={200}
              height={80}
              priority
              className="h-12 md:h-16 w-auto object-contain"
              style={{ width: "auto" }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => handleNavClick("/")}
              className={`text-sm md:text-lg tracking-wide transition-colors ${isActive("/") ? "text-[#FF6900] font-semibold" : "text-white hover:text-[#FF6900]"}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/about-us")}
              className={`text-sm md:text-lg tracking-wide transition-colors ${isActive("/about-us") ? "text-[#FF6900] font-semibold" : "text-white hover:text-[#FF6900]"}`}
            >
              Who We Are
            </button>

            <div
              className="relative py-2 group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`text-sm md:text-lg flex items-center gap-1.5 focus:outline-none transition-colors ${isActive("/services") || pathname.includes("service") ? "text-[#FF6900] font-semibold" : "text-white hover:text-[#FF6900]"}`}>
                Services{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            <button
              onClick={() => handleNavClick("/portfoliopage")}
              className={`text-sm md:text-lg tracking-wide transition-colors ${isActive("/portfoliopage") ? "text-[#FF6900] font-semibold" : "text-white hover:text-[#FF6900]"}`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNavClick("/blogs")}
              className={`text-sm md:text-lg tracking-wide transition-colors ${isActive("/blogs") ? "text-[#FF6900] font-semibold" : "text-white hover:text-[#FF6900]"}`}
            >
              Blogs
            </button>
            <button
              onClick={() => handleNavClick("/contact-us")}
              className={`text-sm md:text-lg tracking-wide transition-colors ${isActive("/contact-us") || isActive("/lets-connect") ? "text-[#FF6900] font-semibold" : "text-white hover:text-[#FF6900]"}`}
            >
              Contact Us
            </button>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:block">
              <SlidingButton
                text="Let's Talk"
                href="/lets-connect"
                className="px-8 py-2 bg-[#FF6900] hover:bg-[#0078F0] text-white transition-colors text-sm md:text-lg font-semibold rounded-md shadow-xl"
              />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-white/10 rounded-full"
            >
              <span className="w-5 h-[2px] bg-white" />
              <span className="w-5 h-[2px] bg-white" />
              <span className="w-5 h-[2px] bg-white" />
            </button>
          </div>
        </div>

        {/* FULL-WIDTH CURVED DROPDOWN BACKGROUND */}
        <div
          ref={dropdownContainerRef}
          className="absolute top-full left-0 w-full h-[100vh] pointer-events-none z-[60] hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`w-full h-full relative ${isServicesOpen ? "pointer-events-auto" : ""}`}
          >
            {/* SVG Morphing Background */}
            <svg
              className="absolute top-0 left-0 w-full h-full drop-shadow-2xl"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
            >
              <path
                ref={svgPathRef}
                fill="#ffffff"
                d="M0,0 L1000,0 L1000,0 Q500,0 0,0 Z"
              />
            </svg>

            {/* Inner Content (Centered identically to Navbar, Full Height Takeover) */}
            <div
              ref={contentRef}
              className="absolute inset-0 w-full h-full max-w-[1440px] mx-auto px-6 md:px-12 flex opacity-0 invisible pt-8 pb-20"
            >
              {/* Left Side: Services List */}
              <div className="w-[35%] pr-8 space-y-1.5 border-r border-gray-200 overflow-y-auto no-scrollbar">
                {services.map((service) => (
                  <div
                    key={service.name}
                    onMouseEnter={() => setActiveService(service)}
                    onClick={() => handleNavClick(service.path)}
                    className={`group flex items-center gap-4 p-3.5 rounded-2xl cursor-pointer transition-all ${activeService.name === service.name ? "bg-orange-500" : "hover:bg-gray-50"}`}
                  >
                    <div
                      className={`p-2.5 rounded-xl ${activeService.name === service.name ? "bg-white" : "bg-gray-200"}`}
                    >
                      <service.icon
                        size={20}
                        className={
                          activeService.name === service.name
                            ? "text-orange-500"
                            : "text-gray-700"
                        }
                      />
                    </div>
                    <span
                      className={`text-base font-bold transition-colors ${activeService.name === service.name ? "text-white" : "text-gray-800 group-hover:text-black"}`}
                    >
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Side: Proportional Service Preview */}
              <div className="w-[65%] pl-12 flex flex-col justify-center">
                <div
                  key={activeService.name}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full"
                >
                  <div className="relative h-[220px] lg:h-[280px] w-[60%] max-w-2xl rounded-3xl overflow-hidden mb-6 shadow-xl border border-gray-200">
                    <img
                      src={activeService.image}
                      alt={activeService.name}
                      className="w-full h-full object-cover  "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="text-4xl lg:text-5xl tracking-tight text-black font-semibold leading-tight mb-4">
                    {activeService.name}
                  </h3>
                  <p className="text-gray-800 text-base max-w-2xl leading-relaxed font-medium">
                    {activeService.description}
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => handleNavClick(activeService.path)}
                      className="flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest group/btn hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
                    >
                      Discover More
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1.5 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER (ALREADY WHITE) */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] invisible opacity-0"
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        ref={mobileMenuRef}
        className="fixed top-4 right-4 bottom-4 w-[calc(100%-32px)] max-w-[450px] bg-white z-[101] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden invisible translate-x-full"
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <span className="text-[24px] font-bold text-blue-600 tracking-tight">
            Digital Success Solutions
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center bg-black rounded-full text-white"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 px-6 overflow-y-auto no-scrollbar">
          <nav className="flex flex-col">
            {navLinks_mobile.map((link) => (
              <div
                key={link.name}
                className="border-b border-gray-100 last:border-none"
              >
                <div className="flex items-center justify-between py-4">
                  <button
                    onClick={() =>
                      !link.submenu
                        ? handleNavClick(link.path)
                        : setActiveMobileSubmenu(
                          activeMobileSubmenu === link.name
                            ? null
                            : link.name,
                        )
                    }
                    className="text-[24px] font-semibold text-black tracking-tight text-left"
                  >
                    {link.name}
                  </button>
                  {link.submenu && (
                    <button
                      onClick={() =>
                        setActiveMobileSubmenu(
                          activeMobileSubmenu === link.name ? null : link.name,
                        )
                      }
                      className="w-7 h-7 flex items-center justify-center bg-orange-500 rounded-full text-white"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${activeMobileSubmenu === link.name ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {link.submenu && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${activeMobileSubmenu === link.name ? "max-h-[350px] pb-4" : "max-h-0"}`}
                  >
                    <div className="grid grid-cols-1 gap-2 pl-2">
                      {services.map((s) => (
                        <button
                          key={s.name}
                          onClick={() => handleNavClick(s.path)}
                          className="flex items-center gap-2 py-1.5 text-gray-500 text-sm font-medium text-left"
                        >
                          <s.icon size={14} className="text-orange-500" />{" "}
                          {s.name}
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
          <button
            onClick={() => handleNavClick("/lets-connect")}
            className="w-full py-4 bg-[#FF6900] hover:bg-[#0078F0] text-white font-bold text-base rounded-full shadow-lg active:scale-95 transition-colors"
          >
            Let's Talk
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
