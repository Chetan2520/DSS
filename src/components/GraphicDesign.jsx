"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Palette,
  PenTool,
  Layout,
  Image as ImageIcon,
  Layers,
  Check,
  Sparkles,
  Box,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  TrendingUp,
  Target,
  Search,
  Lightbulb,
} from "lucide-react";
import ServiceBanner from "./ServiceBanner";
import ScrollRevealIntro from "./ScrollRevealIntro";
import FAQ from "@/components/FAQ";
import GrowthBreakthrough from "@/components/GrowthBreakthrough";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// --- HELPER COMPONENTS ---
const GridBackground = () => (
  <div className="absolute inset-0 pointer-events-none opacity-20">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  </div>
);

// --- CONTENT DATA ---
const serviceData = {
  id: "graphic-design",
  title: "Graphic Designing",
  subtitle: "Visual. Vibrant. Valuable.",
  description:
    "Design is the silent ambassador of your brand. We create high-impact visuals that don't just look beautiful but strategically communicate your message to the right audience.",
  intro:
    "From logo creation to full brand identities, we blend artistic creativity with marketing psychology. Our designs are built to differentiate your brand in a crowded digital landscape.",

  types: [
    {
      title: "Brand Identity & Logo Design",
      desc: "Beyond just logos, we build comprehensive visual languages. This includes color theory, typography systems, and brand voice guidelines that ensure your brand is recognized instantly across all platforms and touchpoints.",
      icon: Sparkles,
      color: "blue",
    },
    {
      title: "Social Media & Digital Assets",
      desc: 'Static posts, motion graphics, and high-engagement reels tailored for Instagram, LinkedIn, and Facebook. We create "scroll-stopping" content that turns passive viewers into active followers and loyal customers.',
      icon: ImageIcon,
      color: "pink",
    },
    {
      title: "Print & Editorial Design",
      desc: "From premium business cards and corporate brochures to large-format banners and magazine layouts. We handle the technicalities of CMYK and bleed to ensure your physical marketing is as perfect as your digital.",
      icon: Box,
      color: "emerald",
    },
    {
      title: "UI/UX & Interactive Design",
      desc: "User-centric interfaces for websites and mobile apps. We focus on high-fidelity visual elements, intuitive navigation, and interactive prototypes that bridge the gap between aesthetic beauty and functional utility.",
      icon: Layout,
      color: "indigo",
    },
    {
      title: "Marketing Collateral",
      desc: "Data-driven infographics, pitch decks, and digital ad sets. We transform complex information into easy-to-digest, persuasive visuals that support your sales team and amplify your overall marketing efforts.",
      icon: Layers,
      color: "orange",
    },
    {
      title: "Custom Illustrations & Icons",
      desc: "Bespoke visual assets that give your brand a unique voice. We create custom icons and illustrations that perfectly match your brand's personality, setting you apart from competitors using stock imagery.",
      icon: Palette,
      color: "purple",
    },
  ],

  benefits: [
    {
      title: "Memorability",
      text: "Establishing a strong visual recall that keeps your brand at the top of customers' minds.",
      icon: Target,
    },
    {
      title: "Professionalism",
      text: "High-quality design signals authority and builds immediate trust with your audience.",
      icon: ShieldCheck,
    },
    {
      title: "Consistency",
      text: "Unified visuals across all touchpoints for a seamless and professional brand experience.",
      icon: Layers,
    },
    {
      title: "Market Impact",
      text: "Strategic design that highlights your unique selling points and drives conversions.",
      icon: TrendingUp,
    },
    {
      title: "Creative Edge",
      text: "Breaking the mold with innovative concepts that set you apart from your competitors.",
      icon: Zap,
    },
  ],

  techStack: [
    {
      name: "Photoshop",
      logo: "https://www.svgrepo.com/show/452149/adobe-photoshop.svg",
    },
    {
      name: "Illustrator",
      logo: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
    },
    {
      name: "After Effects",
      logo: "https://www.svgrepo.com/show/452141/adobe-after-effects.svg",
    },
    {
      name: "Premiere Pro",
      logo: "https://www.svgrepo.com/show/452150/adobe-premiere.svg",
    },
    {
      name: "Figma",
      logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
    {
      name: "Canva",
      logo: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
    },
    {
      name: "Adobe XD",
      logo: "https://tse1.mm.bing.net/th/id/OIP.nXHnZh08s9gA1HSCzqq8hwHaHa?pid=Api&P=0&h=220",
    },
  ],
};

// --- MAIN COMPONENT ---
const GraphicDesign = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for cards
      gsap.utils.toArray(".animate-card").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-black min-h-screen text-white relative"
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <GridBackground />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-96 bg-gradient-radial from-blue-900/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* --- HERO BANNER SECTION --- */}
      <ServiceBanner
        title="Graphic Designing"
        description={serviceData.description}
        imageSrc="/graphic.avif"
        currentPage="Graphic Designing"
      />

      {/* Intro Section */}
      <ScrollRevealIntro text={serviceData.intro} />

      <section
        className="relative py-20 px-2 md:px-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/final-services.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 px-2">
            <div>
              <h2 className="text-4xl md:text-6xl tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight">
                What We{" "}
                <span className="bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600">
                  Create
                </span>
              </h2>
            </div>
            <p className="text-zinc-400 text-xs max-w-xs font-medium border-l border-blue-500/30 pl-4 leading-relaxed">
              Breathtaking visuals designed to leave a lasting mark.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-4xl p-3 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12">
              {serviceData.types.map((type, i) => (
                <div key={i} className="group relative">
                  <div className="relative p-1 md:p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 transition-all duration-500 h-full flex flex-col justify-center overflow-hidden hover:bg-white hover:border-blue-500 hover:shadow-xl active:scale-95">
                    <h3 className="text-lg md:text-2xl   text-zinc-900 mb-3 tracking-tight font-medium">
                      {type.title}
                    </h3>
                    <p className=" text-xs md:text-sm leading-relaxed text-zinc-800  ">
                      {type.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS GRID (STANDARD STYLE) --- */}
      <section className="mb-40 mt-40 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Title Card */}
          <div className="animate-card group relative p-px rounded-4xl bg-[linear-gradient(to_right,transparent,white,transparent,transparent,transparent)] h-full">
            <div className="relative h-full p-10 rounded-4xl bg-white border border-orange-600 flex flex-col justify-center min-h-[300px]">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tighter leading-[1.1]">
                Why Choose <br /> Professional Design?
              </h2>
            </div>
          </div>

          {/* Benefit Cards */}
          {serviceData.benefits.map((benefit, i) => (
            <div
              key={i}
              className="animate-card rounded-4xl group p-px bg-[linear-gradient(to_right,transparent,white,transparent,transparent,transparent)] relative h-full"
            >
              <div className="relative h-full p-10 rounded-4xl bg-black border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col items-start">
                <div className="mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white tracking-tight">
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

      {/* --- STRATEGY SECTION (EDITORIAL LAYOUT) --- */}
      <div className="mb-40 relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-32 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-7xl mr-3 tracking-tighter leading-[0.8] bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent">
            The Creative{" "}
            <span className="bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600">
              Process
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-24 max-w-4xl mx-auto">
          {[
            {
              step: "Discovery",
              text: "Deep diving into your brand values, target audience, and competitive landscape.",
              icon: Search,
            },
            {
              step: "Moodboarding",
              text: "Defining the visual direction and aesthetic tone through curated inspiration.",
              icon: Palette,
            },
            {
              step: "Conceptualization",
              text: "Developing core visual concepts that communicate your unique story.",
              icon: Lightbulb,
            },
            {
              step: "Refinement",
              text: "Polishing the chosen direction until it matches the highest industrial standards.",
              icon: Sparkles,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="animate-card group flex flex-col md:flex-row gap-8 md:gap-16 relative px-6 md:px-0"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-transparent flex items-center justify-center border border-orange-500 group-hover:border-blue-500 transition-all duration-300 overflow-hidden shrink-0">
                  <item.icon className="w-8 h-8 text-orange-500 group-hover:text-blue-500 transition-colors" />
                </div>
                {i !== 3 && (
                  <div className="hidden md:block w-px h-full bg-linear-to-b from-orange-500/50 to-transparent" />
                )}
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-3xl md:text-5xl tracking-tighter leading-tight bg-linear-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent">
                    {item.step}
                  </h3>
                </div>
                <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl transition-colors group-hover:text-zinc-300 duration-500 font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design Tools Marquee */}
      <div className="border-t border-white/5 pt-32 pb-48 overflow-hidden">
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
                className="flex items-center gap-10 md:gap-24 shrink-0"
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
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-white transition-all duration-500">
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
      <FAQ />
    </main>
  );
};

export default GraphicDesign;
