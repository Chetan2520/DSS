"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Rocket,
  Target,
  Globe,
  Zap,
  ArrowUpRight,
  Code,
  Users,
  Briefcase,
  Layers,
  Cpu,
  Workflow,
  TrendingUp,
  Search,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import WhyChooseDSS from "@/components/WhyChooseDSS";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import FAQ from "@/components/FAQ";
import GrowthBreakthrough from "@/components/GrowthBreakthrough";
import HowWeDeliver from "@/components/HowWeDeliver";
import Testimonials from "@/components/Testimonials";

gsap.registerPlugin(ScrollTrigger);
                                        
// --- DATA SOURCE ---
const statsData = {
  experience: "7+", // Updated to 7 as per your content
  projects: "1600+",
  clients: "950+",
  adBudget: "10 Cr+",
  websites: "350+",
  team: "30+",
  industries: "40+",
};

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. General Fade Up for all sections
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });

      // 2. Counter Animation
      gsap.utils.toArray(".stat-counter").forEach((el) => {
        const value = el.innerText.replace(/[^0-9]/g, "");
        const suffix = el.innerText.replace(/[0-9]/g, "");

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: value,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate: function () {
              el.innerText = Math.ceil(this.targets()[0].innerText) + suffix;
            },
          },
        );
      });

      // 3. Parallax Effect on Images
      gsap.utils.toArray(".parallax-img").forEach((img) => {
        gsap.to(img, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-black text-white min-h-screen overflow-x-hidden selection:bg-[#0078f0]/30 selection:text-white"
    >
      <WhyChooseDSS />

      {/* Global Noise Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      ></div>

      {/* --- HERO SECTION: WHY CHOOSE SLIDER (SEO H1) --- */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-[1284px] mx-auto z-10 overflow-hidden">
        <div className="relative">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-4xl">
              <h1 className="fade-up text-4xl md:text-6xl lg:text-7xl  tracking-tighter leading-[1.1] text-white">
                Scale Your Business <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600">
                  with Indore's Best
                </span>
              </h1>
            </div>

            <div className="flex gap-3 fade-up">
              <button
                onClick={() => {
                  const slider = document.getElementById("hero-slider");
                  if (slider)
                    slider.scrollBy({ left: -400, behavior: "smooth" });
                }}
                className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-all cursor-pointer hover:scale-110 active:scale-95"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => {
                  const slider = document.getElementById("hero-slider");
                  if (slider)
                    slider.scrollBy({ left: 400, behavior: "smooth" });
                }}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg shadow-emerald-500/20 hover:bg-white transition-all cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Sliding Cards Container */}
          <div
            id="hero-slider"
            className="flex overflow-x-auto gap-6 pb-12 scroll-smooth no-scrollbar scrollbar-hide snap-x snap-mandatory"
          >
            {[
              {
                title: "Skyrocket Brand Visibility",
                desc: "Lead with 5+ years of digital excellence, making your business the benchmark in Indore with high-impact strategies.",
                icon: Rocket,
              },
              {
                title: "Data-Driven SEO",
                desc: "Advanced optimization strategies for top search rankings and measurable business scaling across all platforms.",
                icon: Search,
              },
              {
                title: "Creative Social Presence",
                desc: "Building authentic brand stories and engagement through innovative social media marketing tailored for your audience.",
                icon: Share2,
              },
              {
                title: "Maximized Real Growth",
                desc: "Delivering high-impact results and real business growth to major brands with over 1600+ successful projects.",
                icon: Target,
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-shrink-0 w-[300px] md:w-[380px] bg-white rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between group shadow-2xl snap-start"
              >
                <div>
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                    <card.icon size={32} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* --- WHAT MAKES US DIFFERENT SECTION --- */}
      <WhatMakesUsDifferent />
      {/* --- HOW WE DELIVER RESULTS SECTION --- */}
      <HowWeDeliver />
      {/* --- GROWTH BREAKTHROUGH CTA --- */}
      <GrowthBreakthrough />

      {/* --- FAQ SECTION --- */}
      <FAQ />

      {/* --- TESTIMONIALS SECTION --- */}
      {/* <Testimonials /> */}

      {/* --- CTA SECTION --- */}
      {/* <section className="py-24 z-10 relative">
        <div className="max-w-5xl mx-auto px-6 text-center fade-up bg-gradient-to-b from-white/5 to-transparent p-16 rounded-[4rem] border border-white/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to dominate the <span className="text-[#0078f0]">Digital World?</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                Choose our digital marketing company in Indore to make your business strong and competitive. Let's build your new identity together.
            </p>
            <Link 
                href="/contact#top"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0078f0] text-white font-bold rounded-full hover:bg-[#0062c4] transition-all hover:scale-105 active:scale-95"
            >
                Start Your Growth Journey <ArrowUpRight size={20} />
            </Link>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
