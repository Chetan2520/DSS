"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Brain,
  Handshake,
  Briefcase,
  ShieldCheck,
  Lightbulb,
  Smile,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const philosophyData = [
  {
    icon: <Brain size={32} />,
    title: "Client-Centered Approach",
    desc: "We focus on understanding your business and your audience to deliver solutions that truly meet your needs.",
    color: "text-orange-500",
    border: "hover:border-orange-500/30",
  },
  {
    icon: <Handshake size={32} />,
    title: "Strong Collaboration",
    desc: "We believe in working closely with our clients, building trust, and growing together through clear communication.",
    color: "text-orange-500",
    border: "hover:border-orange-500/30",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Accountability & Commitment",
    desc: "We take full responsibility for our work and ensure every project is delivered with dedication and precision.",
    color: "text-orange-500",
    border: "hover:border-orange-500/30",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Honesty & Transparency",
    desc: "We maintain clear and open communication, keeping you informed at every stage of your project.",
    color: "text-orange-500",
    border: "hover:border-orange-500/30",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Creative Thinking",
    desc: "We bring fresh ideas and innovative solutions to help your brand stand out in a crowded digital space.",
    color: "text-orange-500",
    border: "hover:border-orange-500/30",
  },
  {
    icon: <Smile size={32} />,
    title: "Positive Work Culture",
    desc: "We believe a motivated and positive mindset leads to better results and stronger long-term success.",
    color: "text-orange-500",
    border: "hover:border-orange-500/30",
  },
];

export default function DssPhilosophy() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal
      gsap.fromTo(
        ".phil-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".phil-header-container",
            start: "top 80%",
          },
        },
      );

      // 2. Cards Stagger Animation
      gsap.fromTo(
        cardsRef.current,
        { y: 30, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: ".phil-grid", start: "top 75%" },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 md:py-24 bg-[#050505] text-white overflow-hidden font-sans"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url('/services.webp')` }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]/50" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 md:px-12">
        {/* --- HEADER --- */}
        <div className="phil-header-container mb-16 md:mb-20">
          <div className="phil-header flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-orange-500"></div>
            <span className="text-orange-500 text-xs font-bold   tracking-[0.3em]">
              Our Values
            </span>
          </div>

          <h2 className="phil-header text-3xl md:text-5xl md:text-6xl tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight mb-6">
            Built for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600">
              Real Business Growth
            </span>
          </h2>

          <p className="phil-header text-zinc-400 text-sm md:text-lg max-w-2xl  leading-relaxed">
          Every decision we make is focused on delivering real value. We combine smart strategy, creativity, and execution to help your business grow with confidence and consistency.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="phil-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {philosophyData.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`group relative p-4 sm:p-6 md:p-8 rounded-2xl bg-transparent border border-white/20 transition-all duration-300  hover:-translate-y-1 ${item.border}`}
            >
              {/* Icon */}
              <div
                className={`${item.color} mb-3 sm:mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-base md:text-xl font-bold text-white mb-0  md:mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM TRUST INDICATORS --- */}
        <div className="phil-header mt-16 pt-8 hidden md:flex border-t border-white/5 flex-wrap justify-center md:justify-start gap-8 md:gap-16">
          {[
            "100% Transparency",
            "Data-Driven ROI",
            "24/7 Dedicated Support",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-zinc-500 text-xs md:text-sm font-medium"
            >
              <CheckCircle2 size={16} className="text-orange-500" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
