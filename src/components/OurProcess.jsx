"use client";
import React from "react";

export default function OurProcess() {
  return (
    <section className="w-full bg-[#050505] py-24 md:py-32 font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
        
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-widest text-[10px] md:text-xs mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            From Idea to Business Growth
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Every project follows a transparent, step-by-step process designed to eliminate guesswork, ensure alignment, and deliver measurable results.
          </p>
        </div>

        {/* Static Image */}
        <div className="w-full">
          <img 
            src="/images/process.png" 
            alt="Our Process Workflow" 
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
