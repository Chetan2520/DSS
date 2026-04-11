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
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
      description:
        "Custom, high-performance websites built with the latest technologies to drive your business forward.",
      image: "/website.png",
    },
    {
      name: "Graphic Designing",
      path: "/graphic-designing",
      icon: Palette,
      description:
        "Creative visuals and brand identities that capture your essence and leave a lasting impression.",
      image: "/graphic.png",
    },
    {
      name: "Performance Marketing",
      path: "/performance-marketing-ppc",
      icon: Megaphone,
      description:
        "Data-driven marketing strategies focused on conversion, ROI, and measurable business growth.",
      image: "/performance.png",
    },
    {
      name: "Social Media Marketing",
      path: "/social-media-marketing",
      icon: Share2,
      description:
        "Building community and increasing brand engagement across all major social platforms.",
      image: "/social-media.png",
    },
    {
      name: "SEO Optimization",
      path: "/search-engine-optimization",
      icon: Search,
      description:
        "Search engine strategies designed to improve rankings, drive traffic, and build authority.",
      image: "/seo.png",
    },
    {
      name: "Influencer Marketing",
      path: "/influencer-marketing",
      icon: Users,
      description:
        "Collaborating with key industry voices to amplify your brand's reach and credibility.",
      image: "/influencer.png",
    },
    {
      name: "E-Commerce Apps",
      path: "/e-commerce-applications",
      icon: ShoppingBag,
      description:
        "Building powerful online shopping experiences that turn visitors into loyal customers.",
      image: "/ecom.png",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = dropdownRef.current;
    if (isServicesOpen) {
      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        display: "flex",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(el, { autoAlpha: 0, y: 10, display: "none", duration: 0.2 });
    }
  }, [isServicesOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.3 });
      gsap.to(mobileMenuRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        y: -20,
        autoAlpha: 0,
        duration: 0.25,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.25 });
    }
  }, [isMobileMenuOpen]);

  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setActiveMobileSubmenu(null);
    router.push(path);
    if (path.startsWith("/#")) {
      const id = path.split("#")[1];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const isSubPage = pathname !== "/";

  return (
    <>
      <nav
        ref={navRef}
        className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSubPage ? "sticky" : "fixed"
        } ${
          isScrolled
            ? "bg-black/60 backdrop-blur-xl py-4 border-b border-white/5"
            : isSubPage
              ? "bg-black py-4 border-b border-white/10"
              : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0 cursor-pointer">
            <img
              src="/images/logo.png"
              alt="digiPanda"
              className="h-14 md:h-18 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => handleNavClick("/")}
              className="text-sm md:text-lg text-white hover:text-white transition-colors cursor-pointer tracking-wide"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className="text-sm md:text-lg text-white hover:text-white transition-colors cursor-pointer tracking-wide"
            >
              Who We Are
            </button>

            <div
              className="relative py-2 group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-sm md:text-lg text-white group-hover:text-white transition-colors cursor-pointer tracking-wide flex items-center gap-1.5 focus:outline-none">
                Services{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* MODERN MEGA MENU DROPDOWN - INCREASED WIDTH */}
              <div
                ref={dropdownRef}
                className="absolute top-[calc(100%+0px)] left-1/2 -translate-x-1/2 w-[1000px] bg-zinc-950 border border-white/10 rounded-[2.5rem] p-2 flex shadow-2xl backdrop-blur-3xl origin-top z-[60] overflow-hidden"
                style={{ display: "none", opacity: 0, visibility: "hidden" }}
              >
                {/* Left Side: Service List */}
                <div className="w-[35%] p-8 space-y-1">
                  {/* <div className="px-4 mb-4">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Expertise</span>
                  </div> */}
                  {services.map((service) => (
                    <div
                      key={service.name}
                      onMouseEnter={() => setActiveService(service)}
                      onClick={() => handleNavClick(service.path)}
                      className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all border border-transparent group/item ${activeService.name === service.name ? "bg-zinc-950 border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" : "hover:bg-white/5"}`}
                    >
                      <div
                        className={`shrink-0 ${activeService.name === service.name ? "text-orange-500 scale-110" : "text-white/30 group-hover/item:text-white group-hover/item:scale-110"} transition-all`}
                      >
                        <service.icon size={18} />
                      </div>
                      <span
                        className={`text-sm font-bold transition-all ${activeService.name === service.name ? "text-white" : "text-white/60 group-hover/item:text-white"}`}
                      >
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right Side: Structured Preview */}
                <div className="w-[65%] p-10  flex flex-col items-center">
                  <div
                    key={activeService.name}
                    className="animate-in fade-in slide-in-from-right-8 duration-700 flex flex-col h-full w-full"
                  >
                    {/* Image at Top */}
                    <div className="relative   h-64 w-96 rounded-3xl overflow-hidden mb-4 shadow-2xl">
                      <img
                        src={activeService.image}
                        alt={activeService.name}
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Content below Image - Gradient Heading */}
                    <div className="space-y-1 px-2">
                      <h3 className="text-5xl   tracking-tight leading-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-zinc-400 to-orange-500">
                          {activeService.name}
                        </span>
                      </h3>
                      <p className="text-zinc-500 text-base leading-relaxed max-w-2xl font-medium">
                        {activeService.description}
                      </p>

                      <div className="pt-6">
                        <button
                          onClick={() => handleNavClick(activeService.path)}
                          className="flex items-center gap-3 text-orange-500 font-bold tracking-[0.2em] text-[10px] uppercase group/btn"
                        >
                          Discover More
                          <ArrowRight
                            size={14}
                            className="group-hover/btn:translate-x-2 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNavClick("/portfoliopage")}
              className="text-sm md:text-lg text-white hover:text-white transition-colors cursor-pointer tracking-wide"
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNavClick("/blogs")}
              className="text-sm md:text-lg text-white hover:text-white transition-colors cursor-pointer tracking-wide"
            >
              Blogs
            </button>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/lets-connect">
              <button className="relative group overflow-hidden px-8 py-2.5 bg-white text-black text-[13px] font-bold rounded-full transition-all shadow-xl active:scale-95 cursor-pointer">
                {/* Moving Border Glow */}
                <div className="absolute inset-0 p-[2px] rounded-full bg-linear-to-r from-orange-500 via-blue-600 to-orange-500 animate-border-flow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Button Background */}
                <div className="absolute inset-[1px] bg-white group-hover:bg-black transition-colors duration-300 rounded-full" />

                {/* Text */}
                <span className="relative z-10 group-hover:text-white transition-colors text-sm md:text-lg duration-300">
                  Let's Talk
                </span>

                {/* Sweep Shine Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine pointer-events-none" />
              </button>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-white/10 rounded-full active:scale-95 transition-transform cursor-pointer"
            >
              <span
                className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-0" : ""}`}
              />
              <span
                className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden opacity-0 invisible"
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        ref={mobileMenuRef}
        className="fixed top-24 left-6 right-6 z-40 lg:hidden bg-[#0d0d0d] border border-white/5 rounded-[1rem] p-8 opacity-0 invisible -translate-y-4 shadow-2xl overflow-y-auto max-h-[80vh]"
      >
        <nav className="flex flex-col gap-2">
          {navLinks_mobile.map((link) => (
            <div key={link.name} className="flex flex-col">
              {link.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setActiveMobileSubmenu(
                        activeMobileSubmenu === link.name ? null : link.name,
                      )
                    }
                    className="flex items-center justify-between text-lg font-bold text-white/70 hover:text-white w-full text-left py-4 border-b border-white/5 transition-colors cursor-pointer tracking-widest  text-xs"
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${activeMobileSubmenu === link.name ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${activeMobileSubmenu === link.name ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0"}`}
                  >
                    <div className="grid grid-cols-1 gap-4 pl-4">
                      {services.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleNavClick(service.path)}
                          className="flex items-center gap-3 text-white/50 hover:text-white py-2 transition-colors"
                        >
                          <service.icon size={16} className="text-orange-500" />
                          <span className="text-sm font-medium">
                            {service.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => handleNavClick(link.path)}
                  className="text-lg font-bold text-white/70 hover:text-white w-full text-left py-4 border-b border-white/5 transition-colors cursor-pointer tracking-widest uppercase text-xs"
                >
                  {link.name}
                </button>
              )}
            </div>
          ))}
          <button
            onClick={() => handleNavClick("/lets-connect")}
            className="mt-6 w-full py-4 bg-[#0078f0] text-white font-bold text-center rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer tracking-widest text-[11px] uppercase"
          >
            Start Project
          </button>
        </nav>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes border-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-border-flow {
          background-size: 200% 200%;
          animation: border-flow 3s linear infinite;
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .animate-shine {
          animation: shine 0.75s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}

const navLinks_mobile = [
  { name: "Home", path: "/" },
  { name: "Who We Are", path: "/about" },
  { name: "Services", path: "/#services", submenu: true },
  { name: "Products", path: "/portfoliopage" },
  { name: "Blogs", path: "/blogs" },
];
