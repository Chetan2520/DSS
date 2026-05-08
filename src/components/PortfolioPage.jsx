"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import GrowthBreakthrough from "@/components/GrowthBreakthrough";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceBanner from "./ServiceBanner";

gsap.registerPlugin(ScrollTrigger);

// --- DUMMY DATA ---
const projects = [
  {
    id: 1,
    title: "Jeevan Shaadi",
    category: "Other",
    image: "/images/clients_website/jeevanshaadi.avif",
    desc: "Matrimonial platform with user profiles, matchmaking features, and secure authentication.",
    link: "#",
  },
  {
    id: 2,
    title: "TDSA",
    category: "Ed-tech Platform",
    image: "/images/clients_website/tdsa.avif",
    desc: "EdTech platform offering courses with live teaching and interactive learning experiences.",
    link: "#",
  },
  {
    id: 3,
    title: "Crack4Success",
    category: "Ed-tech Platform",
    image: "/images/clients_website/crack4success.avif",
    desc: "Interactive coding practice platform designed for developers to hone their skills.",
    link: "#",
  },
  {
    id: 4,
    title: "Trade Ved",
    category: "Other",
    image: "/images/clients_website/trade-ved.avif",
    desc: "Advanced trading application providing real-time insights and professional tools.",
    link: "#",
  },
  {
    id: 5,
    title: "Flyzel International",
    category: "Other",
    image: "/images/clients_website/flyzel.avif",
    desc: "Professional visa processing and consultation services for seamless global travel.",
    link: "#",
  },
  {
    id: 6,
    title: "PaushtEAT",
    category: "E-commerce Store",
    image: "/images/clients_website/paushteat.avif",
    desc: "Healthy, maida-free pasta store focusing on nutritious and delicious alternatives.",
    link: "#",
  },
  {
    id: 7,
    title: "Noorzaar",
    category: "E-commerce Store",
    image: "/images/clients_website/noorzar.avif",
    desc: "Shopify store featuring an exclusive collection of traditional Pakistani attire.",
    link: "#",
  },
  {
    id: 8,
    title: "Devangi Vastra",
    category: "E-commerce Store",
    image: "/images/clients_website/devangi.avif",
    desc: "Premium Shopify store offering a curated selection of ethnic dresses for women.",
    link: "#",
  },
  {
    id: 9,
    title: "Starlight Solar",
    category: "Other",
    image: "/images/starlightsolar.webp",
    desc: "Modern solar energy website focused on clean UI, performance, and lead generation.",
    link: "#",
  },
  {
    id: 10,
    title: "Sadabahar Handloom",
    category: "E-commerce Store",
    image: "/images/sadabahaar.webp",
    desc: "Handloom E-commerce Store showcasing traditional fabrics with smooth shopping experience.",
    link: "#",
  },
  {
    id: 11,
    title: "Lithoveda",
    category: "E-commerce Store",
    image: "/images/lithoveda.webp",
    desc: "Ayurvedic and wellness e-commerce platform with product-focused UI and fast checkout.",
    link: "#",
  },
  {
    id: 12,
    title: "Vanya Resort",
    category: "Other",
    image: "/images/vanya.webp",
    desc: "Hospitality website designed for resorts with booking flow and immersive visuals.",
    link: "#",
  },
  {
    id: 13,
    title: "Edmirai",
    category: "Ed-tech Platform",
    image: "/images/edmirai.webp",
    desc: "EdTech platform built for online learning, courses, and student engagement.",
    link: "#",
  },
  {
    id: 14,
    title: "Amla Pharma",
    category: "E-commerce Store",
    image: "/images/amla-pharma.webp",
    desc: "Skincare and pharma product website focused on trust, branding, and product clarity.",
    link: "#",
  },
  {
    id: 15,
    title: "RudraGroup Indore",
    category: "Other",
    image: "/images/rudragroupindore.webp",
    desc: "Professional security service provider website with service listings and enquiry system.",
    link: "#",
  },
  {
    id: 16,
    title: "MJ Finserv",
    category: "Other",
    image: "/images/mjfinserv.webp",
    desc: "Finance and investment services website with clean layout and lead-focused design.",
    link: "#",
  },
  {
    id: 17,
    title: "Rasa Aroma",
    category: "E-commerce Store",
    image: "/images/clients_website/rasaaroma.avif",
    desc: "Herbs and spices store specializing in products for stress relief and wellness.",
    link: "#",
  },
  {
    id: 18,
    title: "SpineJadex",
    category: "E-commerce Store",
    image: "/images/clients_website/spinejadex.avif",
    desc: "Luxury spine massage chairs designed for ergonomic support and ultimate comfort.",
    link: "#",
  },
  {
    id: 19,
    title: "Wardrobe",
    category: "App Development",
    image: "/images/clients_website/wardrobe.avif",
    desc: "Modern clothing store showcasing the latest trends in fashion and lifestyle.",
    link: "#",
  },
];

const categories = [
  "All",
  "E-commerce Store",
  "Ed-tech Platform",
  "App Development",
  "Other"
];

const PortfolioPage = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // --- OPTIMIZED FILTER LOGIC ---
  const handleFilterChange = (cat) => {
    if (activeFilter === cat) return;

    // 1. Fade out current items smoothly
    gsap.to(".project-card", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        // 2. Update State
        setActiveFilter(cat);
        setFilteredProjects(
          cat === "All" ? projects : projects.filter((p) => p.category === cat),
        );
      },
    });
  };

  // --- ANIMATE IN NEW ITEMS (Layout Effect prevents flicker) ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Kill old animations to prevent conflict
      gsap.killTweensOf(".project-card");

      gsap.fromTo(
        ".project-card",
        { y: 30, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.05, // Fast stagger for snappy feel
          duration: 0.6,
          ease: "power3.out",
          clearProps: "transform", // Clean up after animation to let CSS hover work
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [filteredProjects]); // Runs AFTER state update

  // --- INITIAL HEADER ANIMATION ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".page-header-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#050505]">
      <div
        ref={containerRef}
        className="bg-[#050505] text-white min-h-screen pt-0 pb-20 relative overflow-hidden font-sans"
      >
        {/* --- HERO BANNER SECTION --- */}
        <ServiceBanner
          title="Selected Digital Works"
          description="A showcase of high-fidelity digital excellence. From strategic development to creative brand engineering, see how we transform vision into impact."
          imageSrc="/social-media.avif"
          currentPage="Products"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-20">
          {/* --- FILTER TABS --- */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 page-header-item">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-all duration-300 
                      ${
                        activeFilter === cat
                          ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                          : "bg-transparent text-zinc-500 border-white/10 hover:border-white/30 hover:text-white"
                      }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* --- PROJECTS GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[50vh]">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card group relative h-[200px] md:h-[180px] lg:h-[220px] rounded-lg overflow-hidden cursor-pointer bg-[#0a0a0a] border border-white/5"
                style={{ willChange: "transform, opacity" }} // GPU Hint
              >
                {/* Image Layer - Optimized */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy" // Lazy load
                    decoding="async" // Don't block main thread
                    className="w-full h-full object-cover object-top transition-all duration-1000 ease-out group-hover:scale-103 opacity-100 group-hover:opacity-100"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content Layer */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Top Right Icon */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>

                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {/* <span className="text-[#0078f0] text-xs font-bold   tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {project.category}
                    </span> */}
                    <h3 className="text-lg md:text-2xl font-semibold text-white   leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-zinc-200 text-sm line-clamp-2 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 delay-100">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- GROWTH BREAKTHROUGH CTA --- */}
      <GrowthBreakthrough />

      {/* --- FAQ SECTION --- */}
      <FAQ />
    </div>
  );
};

export default PortfolioPage;
