"use client";
import React, { useRef } from "react";
import { motion } from "motion/react";
import SlidingButton from "./SlidingButton";

const AIAgentsSection = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-s creen bg-black pb-0 md:pb-10 px-0 md:px-6 overflow-hidden flex flex-col items-center font-sans"
    >
      {/* --- Main Section Layout Container --- */}
      <div className="container mx-auto   relative z-10 flex flex-col items-center">
        {/* --- Header Container with Vibrant Blue Glow --- */}
        <div className="w-full container mb-2 relative p-12 md:p-14 rounded-none md:rounded-[2rem] overflow-hidden flex flex-col items-center text-center">
          {/* Vibrant Blue Atmosphere Glow - Inspired by Image 7 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Primary Intense Blue Glow */}
            <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[140%] h-[120%] bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.4),transparent_60%)]" />

            {/* Secondary Cyan/Electric Blue Highlight */}
            <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[100%] h-[80%] bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.25),transparent_50%)]" />

            {/* Soft Ambient Indigo Spread */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(67,56,202,0.15),transparent_80%)]" />

            {/* Bottom Fade to Black - Added for smooth transition */}
            {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/10 to-transparent" /> */}
          </div>

          {/* Main Title - Clean White */}
          <h2 className="relative z-10 text-3xl md:text-7xl     tracking-tighter mb-2 md:mb-4 leading-[1.05] text-white">
            Custom AI Agents for <br className="hidden md:block" /> Modern
            Enterprises
          </h2>

          {/* Description */}
          <p className="relative z-10 text-zinc-400 text-sm md:text-lg     max-w-2xl mx-auto mb-6 md:mb-12 leading-relaxed font-sans">
            We specialize in building autonomous AI agents that integrate
            seamlessly with your workflows, automating complex processes and
            delivering intelligent results at scale.
          </p>

          {/* Action Button */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <SlidingButton
              href="/contact-us"
              className="px-12 py-3 md:py-5 rounded-full bg-white text-black font-bold text-sm shadow-[0_0_40px_rgba(37,99,235,0.2)]"
            >
              Lets Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </SlidingButton>
          </div>
        </div>

        {/* --- Central Logic Visual (Full Width Image) --- */}
        <div className="relative w-full mb-3 flex items-center justify-center px-4">
          <img
            src="/images/ai-agents.png"
            alt="AI Agents Workflow"
            className="w-full h-auto object-contain max-w-7xl  "
          />
        </div>

        {/* --- Feature Row --- */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 max-w-7xl">
          {[
            {
              label: "INTELLIGENT AUTOMATION",
              desc: "We build agents that handle repetitive tasks and complex decision-making, freeing up your team for high-value work.",
            },
            {
              label: "CUSTOM WORKFLOW INTEGRATION",
              desc: "Our AI agents are designed to integrate directly with your tools, databases, and APIs for a truly connected experience.",
            },
            {
              label: "SCALABLE AI SOLUTIONS",
              desc: "From small-scale pilot agents to enterprise-wide autonomous systems, we deliver AI that grows with your needs.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-[1.5px] rounded-[1.25rem] bg-gradient-to-br from-[#A855F7] via-[#3B82F6] to-transparent group overflow-hidden"
            >
            
              <div className="bg-zinc-950 rounded-[calc(1.25rem-1.5px)] p-10 md:p-12 h-full flex flex-col justify-start relative z-10">
                <div className="text-[14px] font-semibold text-[#fffefa] mb-5 tracking-[0.25em]   font-sans opacity-90">
                  {item.label}
                </div>
                <p className="text-[#e5e5e5] text-[15px] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
 
              <div className="absolute inset-0 bg-gradient-to-br from-[#A855F7]/10 via-[#3B82F6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div> */}
      </div>

      {/* Decorative Background Blurred Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Large Blue Glow Top Left */}
        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_70%)] blur-[120px]"
        />

        {/* Large Purple Glow Bottom Right */}
        <motion.div
          animate={{
            x: [20, -20, 20],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] blur-[120px]"
        />

        {/* Central Cyan Glow behind image */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,transparent_70%)] blur-[100px]"
        />

        {/* Additional accent for depth */}
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[radial-gradient(circle,rgba(37,99,235,0.05)_0%,transparent_70%)] blur-[80px]" />

        {/* Bottom-to-Top Black Gradient Fade */}
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black via-black/80 to-transparent z-[5]" />
      </div>
    </section>
  );
};

export default AIAgentsSection;
