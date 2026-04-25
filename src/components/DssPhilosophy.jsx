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
    title: "Client-Centric Approach",
    desc: "Every strategy we build is tailored to match your unique business goals.",
    color: "text-blue-400",
    border: "hover:border-blue-400/30",
  },
  {
    icon: <Handshake size={32} />,
    title: "Strong Collaboration",
    desc: "We work closely with clients to ensure transparency and success.",
    color: "text-blue-400",
    border: "hover:border-blue-400/30",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Accountability & Commitment",
    desc: "We take full responsibility for delivering high-quality results.",
    color: "text-blue-400",
    border: "hover:border-blue-400/30",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Transparency & Honesty",
    desc: "Clear communication at every stage of your project.",
    color: "text-blue-400",
    border: "hover:border-blue-400/30",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Creative Innovation",
    desc: "Fresh ideas that help your brand stand out.",
    color: "text-blue-400",
    border: "hover:border-blue-400/30",
  },
  {
    icon: <Smile size={32} />,
    title: "Positive Work Culture",
    desc: "A motivated team that drives better results.",
    color: "text-blue-400",
    border: "hover:border-blue-400/30",
  },
];

export default function DssPhilosophy() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
        }
      );

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
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 md:py-24 bg-[#050505] text-white overflow-hidden font-sans"
    >
      {/* 🔥 Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/services-1.jpg.jpeg')` }}
        />
      </div>

      {/* 🔥 Blue Overlay Blend */}
      <div className="absolute inset-0 bg-black/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black/70 to-black z-0" />

      {/* 🔥 Minimal Blue Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-500/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* HEADER */}
        <div className="phil-header-container mb-16 md:mb-20">
          <div className="phil-header flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase">
              Our Values
            </span>
          </div>

          <h2 className="phil-header text-4xl md:text-5xl lg:text-6xl tracking-tighter bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent leading-[1.1] mb-6 font-bold">
            Built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-blue-500">
              Real Business Growth
            </span>
          </h2>

          <p className="phil-header text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
            We combine strategy, creativity, and performance marketing to deliver 
            real business results and long-term success.
          </p>
        </div>

        {/* CARDS */}
        <div className="phil-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {philosophyData.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 ${item.border}`}
            >
              <div
                className={`${item.color} mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST */}
        <div className="phil-header mt-16 pt-8 hidden md:flex border-t border-white/5 flex-wrap justify-center md:justify-start gap-8 md:gap-16">
          {[
            "100% Transparency",
            "Data-Driven ROI",
            "24/7 Dedicated Support",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-zinc-500 text-sm font-medium"
            >
              <CheckCircle2 size={18} className="text-blue-400" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}