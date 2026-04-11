"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  BarChart3,
  Target,
  MousePointer2,
  PieChart,
  Zap,
  ShieldCheck,
  ArrowUpRight,
  Globe,
  ShoppingCart,
  CreditCard,
  Box,
  Search,
} from "lucide-react";
import ServiceBanner from "./ServiceBanner";
import ScrollRevealIntro from "./ScrollRevealIntro";
import FAQ from "@/components/FAQ";
import GrowthBreakthrough from "@/components/GrowthBreakthrough";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// --- CONTENT DATA ---
const serviceData = {
  id: "performance-marketing",
  title: "Performance Marketing",
  subtitle: "Clicks. Conversions. ROI.",
  description:
    "Performance marketing focuses on delivering outcomes like leads, sales, and conversions, where every rupee spent is tracked, analyzed, and optimized for maximum return.",
  intro:
    "In today’s highly competitive digital world, businesses require more than visibility,they need measurable and impactful outcomes. As a leading performance marketing agency in Indore, Digital Success Solutions helps businesses achieve consistent growth through data driven strategies and high converting campaigns.",

  sectors: [
    {
      title: "Google Ads Campaigns",
      desc: "We create and manage high performance campaigns on Google Ads to drive targeted traffic, leads, and conversions.",
      icon: Target,
      color: "red",
    },
    {
      title: "Social Media Advertising",
      desc: "Our expert team runs ROI focused campaigns on Facebook and Instagram to maximize engagement and sales.",
      icon: TrendingUp,
      color: "blue",
    },
    {
      title: "Lead Generation Campaigns",
      desc: "We design campaigns specifically to generate high quality leads that convert into customers.",
      icon: MousePointer2,
      color: "emerald",
    },
    {
      title: "E-commerce Marketing",
      desc: "Scale your online store with strategic advertising and conversion focused marketing.",
      icon: ShoppingCart,
      color: "orange",
    },
    {
      title: "Remarketing Campaigns",
      desc: "Reach out again to interested prospects and convert their intent into real results.",
      icon: Zap,
      color: "amber",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc: "We continuously improve landing pages and ad performance to increase conversions.",
      icon: BarChart3,
      color: "indigo",
    },
  ],

  process: [
    {
      step: "1. Audit & Analysis",
      text: "We begin by evaluating your current marketing efforts, identifying gaps, and understanding your business goals. This helps us build a strong foundation for high-performing campaigns.",
      icon: Search,
    },
    {
      step: "2. Creative Testing",
      text: "Our team continuously tests different ad creatives, headlines, and visuals to discover what resonates best with your target audience and drives conversions.",
      icon: Zap,
    },
    {
      step: "3. Media Buying",
      text: "We run highly targeted ad campaigns across platforms like Google, Meta, and LinkedIn, ensuring your ads reach the right people at the right time.",
      icon: Target,
    },
    {
      step: "4. Conversion Optimization",
      text: "We optimize landing pages, user journeys, and funnels to improve conversion rates and maximize the value of your traffic.",
      icon: TrendingUp,
    },
  ],

  techStack: [
    {
      name: "Meta Ads",
      logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg",
    },
    {
      name: "Google Ads",
      logo: "https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg",
    },
    
    {
      name: "Tag Manager",
      logo: "https://www.svgrepo.com/show/353827/google-tag-manager.svg",
    }
  ],
};

const performanceFaqs = [
  {
    question: "What does performance marketing mean for my business?",
    answer: "Performance marketing is a strategy where your investment is directly linked to results. It focuses on generating measurable actions such as leads, inquiries, or sales, ensuring your budget is used efficiently."
  },
  {
    question: "Why should I choose performance marketing over other marketing methods?",
    answer: "Performance marketing gives you complete transparency and control. You can track every campaign, measure outcomes in real time, and adjust strategies instantly to achieve better results."
  },
  {
    question: "How do you ensure better ROI in performance marketing campaigns?",
    answer: "We use advanced targeting, continuous monitoring, and data-driven optimization to focus on high-performing audiences, ensuring maximum returns with minimum wasted spend."
  },
  {
    question: "Which industries can benefit from performance marketing services?",
    answer: "Performance marketing works for almost every industry, including e-commerce, healthcare, real estate, education, and service-based businesses looking to generate leads and sales."
  },
  {
    question: "Do I need a large budget to start performance marketing?",
    answer: "No, performance marketing is flexible and works with different budget sizes. Campaigns can be scaled up or down based on your goals and performance results."
  },
  {
    question: "How do you track and measure campaign success?",
    answer: "We track key performance indicators like clicks, conversions, cost per lead, and return on ad spend using advanced analytics tools, ensuring complete transparency in campaign performance."
  }
];

const PerformanceMarketing = () => {
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
      className="relative min-h-screen bg-black text-white pt-0 pb-40 overflow-hidden selection:bg-orange-500/30"
    >
      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- HERO BANNER SECTION --- */}
      <ServiceBanner
        title="Performance Marketing"
        description={serviceData.description}
        imageSrc="/performance.png"
        currentPage="Performance"
      />

      {/* Intro Section */}
      <ScrollRevealIntro text={serviceData.intro} />

      <div className="relative z-10 w-full px-0">
        {/* --- WHAT WE DO SECTION (WHITE GRID) --- */}
        <section
          className="what-we-build-wrapper relative py-20 px-2 md:px-12 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/services.webp')` }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
              <div>
                <h2 className="text-4xl md:text-5xl tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight    ">
                  Our Performance <br />
                  <span className="bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600">
                    Marketing Services in Indore
                  </span>
                </h2>
              </div>
              <p className="text-zinc-400 text-xs max-w-xs font-medium border-l border-orange-500/30 pl-4 leading-relaxed">
                Result-driven ad strategies designed to scale your business.
              </p>
            </div>

            <div className="what-we-build-container bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-4xl p-3 md:p-12 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12">
                {serviceData.sectors.map((sector, i) => (
                  <div key={i} className="group relative">
                    <div className="relative p-1 md:p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 transition-all duration-500 h-full flex flex-col justify-center overflow-hidden hover:bg-white hover:border-blue-500 hover:shadow-xl active:scale-95">
                      <h3 className="text-xl md:text-2xl   text-zinc-900 mb-3 tracking-tight  ">
                        {sector.title}
                      </h3>
                      <p className=" text-xs md:text-sm leading-relaxed text-zinc-800  ">
                        {sector.desc}
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
              <h2 className="text-3xl md:text-5xl   tracking-tighter leading-[1.1] bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent  ml-2">
                Our Performance <br />
                <span className="bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600 italic">
                  Marketing Strategy
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-16 md:gap-24 max-w-4xl mx-auto">
              {serviceData.process.map((item, i) => (
                <div
                  key={i}
                  className="animate-card group flex flex-col md:flex-row gap-8 md:gap-16 relative px-6 md:px-0"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-transparent flex items-center justify-center border border-orange-500 group-hover:border-blue-500 transition-all duration-300 overflow-hidden shrink-0">
                      <item.icon className="w-8 h-8 text-orange-500 group-hover:text-blue-500 transition-colors" />
                    </div>
                    {i !== serviceData.process.length - 1 && (
                      <div className="hidden md:block w-px h-full bg-linear-to-b from-orange-500/50 to-transparent" />
                    )}
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-baseline gap-4">
                      <h3 className="text-3xl md:text-5xl tracking-tighter leading-tight bg-linear-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent    ">
                        {item.step}
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
                  Why Choose <br /> Performance <br /> Marketing?
                </h2>
              </div>

              {[
                {
                  title: "Pay for Real Results",
                  text: "You invest only when specific actions are completed, such as clicks, leads, or sales—ensuring every rupee is spent effectively.",
                  icon: <ShieldCheck />,
                },
                {
                  title: "Highly Measurable Campaigns",
                  text: "Track every metric in real time, from impressions to conversions, giving you complete control and clarity over performance.",
                  icon: <Zap />,
                },
                {
                  title: "Better ROI & Cost Efficiency",
                  text: "Optimized campaigns focus on high-converting audiences, maximizing returns while minimizing wasted ad spend.",
                  icon: <Globe />,
                },
                {
                  title: "Targeted Audience Reach",
                  text: "Reach the right audience based on demographics, interests, behavior, and intent for higher engagement and conversions.",
                  icon: <Target />,
                },
                {
                  title: "Continuous Optimization",
                  text: "Campaigns are constantly analyzed and improved to deliver better results over time with data-driven strategies.",
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
                    {serviceData.techStack.map((tech, i) => (
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
          <GrowthBreakthrough />

          {/* --- FAQ SECTION --- */}
          <FAQ faqs={performanceFaqs} />
        </div>
      </div>
    </div>
  );
};

export default PerformanceMarketing;
