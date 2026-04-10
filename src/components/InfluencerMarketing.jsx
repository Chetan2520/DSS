"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Share2,
  Target,
  TrendingUp,
  Zap,
  Star,
  ShieldCheck,
  ArrowUpRight,
  Globe,
  UserCheck,
  MessageSquare,
  Video,
  BarChart3,
} from "lucide-react";
import ServiceBanner from "./ServiceBanner";
import ScrollRevealIntro from "./ScrollRevealIntro";
import FAQ from "@/components/FAQ";
import GrowthBreakthrough from "@/components/GrowthBreakthrough";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// --- CONTENT DATA ---
const serviceData = {
  id: "influencer-marketing",
  title: "Influencer Marketing",
  subtitle: "Trust. Reach. Impact.",
  description:
    "People trust people, not ads. We connect your brand with authentic voices that resonate with your target audience. From micro-influencers to mega-stars, we manage the entire lifecycle.",
  intro:
    "A seamless bridge between brand vision and creator authenticity. We focus on engagement rates, audience demographics, and real-world conversion rather than just vanity metrics.",

  features: [
    {
      title: "Strategic Matchmaking",
      desc: "Finding the perfect creator profile based on brand affinity and deep audience data.",
      icon: Star,
      color: "amber",
    },
    {
      title: "Campaign Management",
      desc: "End-to-end handling of negotiations, contracts, and creative deliverable tracking.",
      icon: Users,
      color: "blue",
    },
    {
      title: "Creative Storytelling",
      desc: "Bridging your brand guidelines with the creator's unique voice for maximum resonance.",
      icon: Zap,
      color: "purple",
    },
    {
      title: "ROI Analytics",
      desc: "Advanced tracking of clicks, conversions, and the true impact of every collaboration.",
      icon: Share2,
      color: "pink",
    },
    {
      title: "Audience Vetting",
      desc: "Rigorous vetting of follower demographics and engagement authenticity to ensure brand safety.",
      icon: ShieldCheck,
      color: "emerald",
    },
    {
      title: "Global Distribution",
      desc: "Scaling your message across multiple regions and cultures through localized creator networks.",
      icon: Globe,
      color: "indigo",
    },
  ],

  process: [
    {
      step: "Discovery & Vetting",
      text: "Identifying creators who truly align with your values using advanced vetting tools.",
      icon: UserCheck,
    },
    {
      step: "Outreach & Briefing",
      text: "Handling all communications to ensure brand safety and clear creative direction.",
      icon: MessageSquare,
    },
    {
      step: "Content Execution",
      text: "Managing review cycles and quality control to maintain high production standards.",
      icon: Video,
    },
    {
      step: "Analytics & Scaling",
      text: "Proving value through detailed performance reports and scaling successful partnerships.",
      icon: BarChart3,
    },
  ],

  techStack: [
    {
      name: "YouTube",
      logo: "https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg",
    },
    
    {
      name: "Instagram",
      logo: "https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg",
    }
  ],
};

const InfluencerMarketing = () => {
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
        title="Influencer Marketing"
        description={serviceData.description}
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        currentPage="Influencer Marketing"
      />

      {/* Intro Section */}
      <ScrollRevealIntro text={serviceData.intro} />

      <div className="relative z-10 w-full px-0">
        {/* --- WHAT WE DO SECTION (WHITE GRID) --- */}
        <section
          className="what-we-build-wrapper relative py-24 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/services.webp')` }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
              <div>
                <h2 className="text-4xl md:text-7xl tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight    ">
                  Human{" "}
                  <span className="bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600">
                    Connection
                  </span>
                </h2>
              </div>
              <p className="text-zinc-400 text-xs max-w-xs font-medium border-l border-blue-500/30 pl-4 leading-relaxed">
                Scaling brand trust through authentic storytelling and creator
                partnerships.
              </p>
            </div>

            <div className="what-we-build-container bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-[3rem] p-8 md:p-16 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {serviceData.features.map((feature, i) => (
                  <div key={i} className="group relative">
                    <div className="relative p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 transition-all duration-500 h-full flex flex-col justify-center overflow-hidden hover:bg-white hover:border-blue-500 hover:shadow-xl active:scale-95">
                      <h3 className="text-xl md:text-2xl   text-zinc-900 mb-3 tracking-tight  ">
                        {feature.title}
                      </h3>
                      <p className=" text-xs md:text-sm leading-relaxed text-zinc-800  ">
                        {feature.desc}
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
              <h2 className="text-3xl md:text-7xl   tracking-tighter leading-[0.8] bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent  ">
                The Collaborative <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600 italic">
                  Cycle
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
                  Why Choose <br /> Creator <br /> Partnerships?
                </h2>
              </div>

              {[
                {
                  title: "Targeted Reach",
                  text: "Speak directly to your ideal customer through voices they already follow and trust.",
                  icon: <Target />,
                },
                {
                  title: "Content Engine",
                  text: "Authentic, high-quality content created by professional creators for your brand.",
                  icon: <Zap />,
                },
                {
                  title: "Safe Exposure",
                  text: "Rigorous vetting process ensures your brand only partners with appropriate creators.",
                  icon: <ShieldCheck />,
                },
                {
                  title: "High Engagement",
                  text: "Creator-led content consistently outperforms generic brand ads on social.",
                  icon: <TrendingUp />,
                },
                {
                  title: "Impact Tracking",
                  text: "Full analytics on clicks, mentions, and conversions for every collaboration.",
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
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default InfluencerMarketing;
