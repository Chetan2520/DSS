"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  Globe,
  MapPin,
  Zap,
  Settings,
  PenTool,
  Building2,
  BadgePercent,
  Flag,
  BarChart3,
  ShieldCheck,
  UserCheck,
  FileText,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import ServiceBanner from "./ServiceBanner";
import ScrollRevealIntro from "./ScrollRevealIntro";
import FAQ from "@/components/FAQ";
import GrowthBreakthrough from "@/components/GrowthBreakthrough";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// --- CONTENT DATA ---
const seoContent = {
  header: {
    title: "SEO Services in Indore ",
    subtitle: "Growing Multiple Businesses in a Short Time.",
    desc: "In today’s digital landscape, a website alone can’t deliver results without visibility. Our SEO services in Indore boost your online presence, drive targeted traffic, and convert visitors into leads. At Digital Success Solutions, we use data driven strategies and advanced tools to create customized SEO plans for long term growth and measurable success.",
  },
  intro:
    "We continuously analyze market trends and competitor strategies to keep your business ahead in search rankings. Our team focuses on delivering sustainable results by adapting to the latest search engine algorithms. With a strong emphasis on performance and ROI, we ensure your business achieves consistent online growth.",

  services: [
    {
      title: "Mobile Optimization",
      desc: "With most users accessing websites through smartphones, we ensure your website delivers a seamless mobile experience that meets search engine standards.",
      icon: Globe,
      color: "blue",
    },
    {
      title: "E-Commerce SEO",
      desc: "We help online businesses enhance product visibility, optimize category structures, and improve conversion rates with targeted SEO strategies.",
      icon: Zap,
      color: "red",
    },
    {
      title: "Local Search Optimization",
      desc: "We focus on improving your visibility in local searches so your business can attract nearby customers and increase footfall or inquiries.",
      icon: MapPin,
      color: "amber",
    },
    {
      title: "Canonical & Duplicate Content Fixing",
      desc: "We implement proper canonical strategies to avoid duplicate content issues and ensure search engines index the correct version of your pages.",
      icon: FileText,
      color: "cyan",
    },
    {
      title: "Technical SEO Optimization",
      desc: "We optimize website structure, improve page speed, fix crawl errors, and enhance indexing to ensure your website performs efficiently on search engines.",
      icon: Settings,
      color: "emerald",
    },
    {
      title: "Keyword Research & Content Strategy",
      desc: "We identify high-performing keywords and create strategic content plans that help your website rank higher and attract the right audience organically.",
      icon: Search,
      color: "indigo",
    },
  ],

  reporting: [
    {
      title: "Ranking Evolution",
      text: "Granular tracking of keyword movements with historical trend analysis.",
      icon: BarChart3,
    },
    {
      title: "Competitor Intel",
      text: "Deep-diving into competitor strategies to identify and seize market gaps.",
      icon: Globe,
    },
    {
      title: "Content Audit",
      text: "Regular assessment of content performance and gap analysis for fresh opportunities.",
      icon: FileText,
    },
    {
      title: "Technical Health",
      text: "Weekly monitoring of indexation, speed, and health metrics to ensure stability.",
      icon: ShieldCheck,
    },
  ],

  techStack: [
    {
      name: "SEMrush",
      logo: "https://tse4.mm.bing.net/th/id/OIP.LgZbPbNyI_YvX_tYFUIhHgHaEK?pid=Api&P=0&h=220",
    },
    
    {
      name: "GA4",
      logo: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg",
    },
    {
      name: "Tag Manager",
      logo: "https://www.svgrepo.com/show/353827/google-tag-manager.svg",
    },
    {
      name: "Yoast",
      logo: "https://tse3.mm.bing.net/th/id/OIP.tle-vbvXxe_bSn2nA4WEawHaDa?pid=Api&P=0&h=220",
    },
    {
      name: "PageSpeed",
      logo: "https://www.svgrepo.com/show/343860/page-speed-website-internet.svg",
    },
  ],
};

const SeoOptimization = () => {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loadGsap = async () => {
      try {
        const ctx = gsap.context(() => {
          gsap.utils.toArray(".animate-card").forEach((card) => {
            gsap.fromTo(
              card,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: { trigger: card, start: "top 90%" },
              },
            );
          });
        }, containerRef);
      } catch (err) {
        console.error(err);
      }
    };
    loadGsap();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white pt-0 pb-40 overflow-hidden selection:bg-blue-500/30"
    >
      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- HERO BANNER SECTION --- */}
      <ServiceBanner
        title="SEO Services in Indore "
        description={seoContent.header.desc}
        imageSrc="/seo.png"
        currentPage="SEO"
      />

      {/* Intro Section */}
      <ScrollRevealIntro text={seoContent.intro} />

      <div className="relative z-10 w-full px-0">
        {/* --- WHAT WE DO SECTION (WHITE GRID) --- */}
        <section
          className="what-we-build-wrapper relative py-20 px-2 md:px-12 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/bg-cover.png')` }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
              <div>
                <h2 className="text-4xl md:text-7xl tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight    ">
                  Search{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600">
                    Authority
                  </span>
                </h2>
              </div>
              <p className="text-zinc-400 text-xs max-w-xs font-medium border-l border-blue-500/30 pl-4 leading-relaxed">
                Dominating search landscapes with data-driven precision and
                technical excellence.
              </p>
            </div>

            <div className="what-we-build-container bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-4xl p-3 md:p-12 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12">
                {seoContent.services.map((service, i) => (
                  <div key={i} className="group relative">
                    <div className="relative p-1 md:p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 transition-all duration-500 h-full flex flex-col justify-center overflow-hidden hover:bg-white hover:border-blue-500 hover:shadow-xl active:scale-95">
                      <h3 className="text-xl md:text-2xl   text-zinc-900 mb-3 tracking-tight  ">
                        {service.title}
                      </h3>
                      <p className=" text-xs md:text-sm leading-relaxed text-zinc-800  ">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-40">
          {/* --- STRATEGY SECTION (EDITORIAL LAYOUT) --- */}
          <div className="mb-40 relative">
            <div className="mb-32 text-center max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-7xl   tracking-tighter leading-[0.8] bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent  ml-2">
                The Ranking <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600 italic">
                  Blueprint
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-16 md:gap-24 max-w-4xl mx-auto">
              {seoContent.reporting.map((item, i) => (
                <div
                  key={i}
                  className="animate-card group flex flex-col md:flex-row gap-8 md:gap-16 relative px-6 md:px-0"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-transparent flex items-center justify-center border border-orange-500 group-hover:border-blue-500 transition-all duration-300 overflow-hidden shrink-0">
                      <item.icon className="w-8 h-8 text-orange-500 group-hover:text-blue-500 transition-colors" />
                    </div>
                    {i !== seoContent.reporting.length - 1 && (
                      <div className="hidden md:block w-px h-full bg-linear-to-b from-orange-500/50 to-transparent" />
                    )}
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-baseline gap-4">
                      <h3 className="text-3xl md:text-5xl tracking-tighter leading-tight bg-linear-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent    ">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl transition-colors group-hover:text-zinc-300 duration-500 font-medium">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- BENEFITS GRID (STANDARD STYLE) --- */}
          <section className="mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Title Card */}
              <div className="animate-card group relative p-10 rounded-4xl bg-white  border border-orange-600 flex flex-col justify-center min-h-[300px]">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tighter leading-[1.1]  ">
                 Our Complete 
 <br /> SEO Services
                </h2>
              </div>

              {[
                {
                  title: "Technical Optimization",
                  text: " We enhance your website’s technical performance to ensure smooth crawling, indexing, and faster loading speed.",
                  icon: <TrendingUp />,
                },
                {
                  title: "On Page Optimization",
                  text: " We optimize your website content and structure to improve relevance, user experience, and search engine rankings",
                  icon: <ShieldCheck />,
                },
                {
                  title: "Off Page Optimization",
                  text: " We build your website’s authority and trust through quality backlinks and strong online presence.",
                  icon: <Zap />,
                },
                {
                  title: "Analytics & Performance Tracking",
                  text: " We monitor SEO performance using advanced tools to track rankings, traffic, and conversions for continuous improvement.",
                  icon: <BarChart3 />,
                },
                {
                  title: "Local SEO",
                  text: "Dominate local search results with Google My Business optimization and location-specific strategies.",
                  icon: <ArrowUpRight />,
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="animate-card opacity-0 translate-y-8 rounded-4xl group p-px bg-[linear-gradient(to_right,transparent,white,transparent,transparent,transparent)] relative h-full"
                >
                  <div className="relative h-full p-10 rounded-4xl bg-black border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col items-start">
                    <div className="mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white tracking-tight  ">
                        {benefit.title}
                      </h4>
                      <p className="text-white/70 text-sm font-medium leading-normal">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-white/5 pt-32 pb-48 overflow-hidden -mx-6 md:-mx-12">
            <div className="text-center mb-32 px-5 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent">
                Technologies We Used
              </h2>
            </div>

            {/* Marquee Container */}
            <div className="relative flex flex-col gap-16 select-none">
              {/* Gradient Fades for depth */}
              <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-linear-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-linear-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

              {/* First Marquee Row */}
              <motion.div
                className="flex whitespace-nowrap items-center gap-24 pr-24"
                animate={{ x: [0, "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                {[...Array(4)].map((_, groupIdx) => (
                  <div
                    key={groupIdx}
                    className="flex items-center gap-24 shrink-0"
                  >
                    {seoContent.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-6 group"
                      >
                        <div className="h-10 md:h-14 w-auto flex items-center justify-center  transition-all duration-500 scale-90 group-hover:scale-110">
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="h-full w-auto object-contain pointer-events-none"
                          />
                        </div>
                        <span className="text-[9px] tracking-[0.3em] text-zinc-600   group-hover:text-white transition-all duration-500 group-hover:tracking-[0.4em]">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* --- GROWTH BREAKTHROUGH CTA --- */}
       
        </div>
           <GrowthBreakthrough />

          {/* --- FAQ SECTION --- */}
          <FAQ />
      </div>
    </div>
  );
};

export default SeoOptimization;
