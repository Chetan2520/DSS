"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Search, Plus, ArrowRight } from "lucide-react";

const testimonials = [
  {
    author: "Mohit Sharma",
    role: "Marketing Director @ Amla Pharma",
    quote: "Absolutely incredible experience. Technical and strategic support set them apart.",
    image: "https://i.pravatar.cc/150?u=mohit",
  },
  {
    author: "Anjali Gupta",
    role: "Operations Head @ OYO",
    quote: "From search visibility to advanced performance architectures, the depth is unmatched.",
    image: "https://i.pravatar.cc/150?u=anjali",
  },
  {
    author: "Raghav Singh",
    role: "Product Manager @ Nexa",
    quote: "Surrounded by such talented digital experts pushed my brand to the next level.",
    image: "https://i.pravatar.cc/150?u=raghav",
  },
  {
    author: "Vikram Mehta",
    role: "CEO @ Starlight Solar",
    quote: "They don't just deliver ads; they deliver sustainable growth. ROI is real.",
    image: "https://i.pravatar.cc/150?u=vikram",
  },
  {
    author: "Sanya Kapoor",
    role: "Founder @ Vanya Resort",
    quote: "Their social media presence building is top-notch. Authentic storytelling.",
    image: "https://i.pravatar.cc/150?u=sanya",
  },
  {
    author: "Rahul Verma",
    role: "CEO @ TechNova",
    quote: "Our organic growth has skyrocketed since we started our collaboration.",
    image: "https://i.pravatar.cc/150?u=rahul",
  },
  {
    author: "Indore Retails",
    role: "Marketing Director",
    quote: "Incredible growth in our local reach. They truly understand the market.",
    image: "https://i.pravatar.cc/150?u=indore",
  },
];

const TestimonialCard = ({ quote, author, role, image }) => (
  <div className="shrink-0 w-80 h-44 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-7 flex flex-col justify-between hover:bg-zinc-900/60 transition-all duration-500 group cursor-default shadow-2xl">
    <p className="text-zinc-300 text-[13px] leading-relaxed italic line-clamp-3 group-hover:text-white transition-colors uppercase tracking-tight font-medium">
      "{quote}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
        <img src={image} alt={author} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-white text-sm font-bold tracking-tight">{author}</p>
        <p className="text-zinc-500 text-[10px] tracking-wider uppercase font-semibold">
          {role}
        </p>
      </div>
    </div>
  </div>
);

const Row = ({ items, speed, direction = 1, rotation, translateY }) => {
  const rowRef = useRef(null);

  useGSAP(() => {
    const el = rowRef.current;
    if (!el) return;
    
    // We duplicate items enough times to cover the width
    const totalWidth = el.scrollWidth / 2;
    
    gsap.to(el, {
      x: direction > 0 ? -totalWidth : 0,
      duration: speed,
      repeat: -1,
      ease: "none",
      onUpdate: function() {
        // Standard marquee reset logic
      }
    });

    // Simple CSS animation for now if GSAP is complex with keys
    // But let's stick to GSAP for smoother multi-row sync
  }, [speed, direction]);

  return (
    <div 
      className="flex gap-6 whitespace-nowrap py-4 overflow-visible pointer-events-none"
      style={{ 
        transform: `perspective(2000px) rotateX(${rotation}deg) translateY(${translateY}px)`,
        transformStyle: "preserve-3d"
      }}
    >
      <motion_div_placeholder className="flex gap-6 animate-marquee flex-nowrap" style={{ 
        animationDuration: `${speed}s`, 
        animationDirection: direction > 0 ? 'normal' : 'reverse' 
      }}>
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <TestimonialCard key={`${item.author}-${i}`} {...item} />
        ))}
      </motion_div_placeholder>
    </div>
  );
};

// I'll use simple keyframes for the marquee to avoid GSAP complexities for this specific arched layout
const marqueeStyles = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee linear infinite;
  }
`;

export default function CurvedTestimonials() {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center py-32">
        <style dangerouslySetInnerHTML={{ __html: marqueeStyles }} />
        
      {/* Background Curved Gallery */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-none opacity-40">
        <div className="w-[140%] flex flex-col gap-4">
            {/* Top Row */}
            <div className="flex gap-6 whitespace-nowrap overflow-visible" style={{ transform: 'perspective(2000px) rotateX(15deg) translateY(-40px)', transformStyle: 'preserve-3d' }}>
                <div className="flex gap-6 animate-marquee">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`top-${i}`} {...t} />
                    ))}
                </div>
            </div>
            
            {/* Middle Top Row */}
            <div className="flex gap-6 whitespace-nowrap overflow-visible" style={{ transform: 'perspective(2000px) rotateX(5deg) translateY(-10px)', transformStyle: 'preserve-3d' }}>
                <div className="flex gap-6 animate-marquee shadow-2xl" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`mid-top-${i}`} {...t} />
                    ))}
                </div>
            </div>

            {/* Middle Bottom Row */}
            <div className="flex gap-6 whitespace-nowrap overflow-visible" style={{ transform: 'perspective(2000px) rotateX(-5deg) translateY(10px)', transformStyle: 'preserve-3d' }}>
                <div className="flex gap-6 animate-marquee" style={{ animationDuration: '55s' }}>
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`mid-bot-${i}`} {...t} />
                    ))}
                </div>
            </div>

            {/* Bottom Row */}
            <div className="flex gap-6 whitespace-nowrap overflow-visible" style={{ transform: 'perspective(2000px) rotateX(-15deg) translateY(40px)', transformStyle: 'preserve-3d' }}>
                <div className="flex gap-6 animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '65s' }}>
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`bot-${i}`} {...t} />
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Vignette & Gradients */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/40 to-[#050505]" />
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        <h2 className="text-4xl md:text-8xl font-black tracking-tight text-white mb-6 leading-[0.9] uppercase">
          Your Next Big <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-zinc-400 to-zinc-800">
            Idea Starts Here
          </span>
        </h2>
        <p className="text-zinc-500 text-base md:text-xl font-bold mb-14 tracking-[0.2em] uppercase">
          Imagination is the First Step to Innovation
        </p>

        {/* Search Bar Input Mockup */}
        <div className="relative w-full max-w-3xl mb-14 group">
          <div className="absolute -inset-1 bg-linear-to-r from-white/20 to-zinc-900 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative flex items-center bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full p-2.5 pl-10 shadow-2xl overflow-hidden">
            <input 
              type="text" 
              placeholder="A futuristic AI-powered workspace with holographic interface..."
              className="bg-transparent border-none outline-none text-white w-full text-base font-medium placeholder:text-zinc-700 pb-1"
            />
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all active:scale-95 shrink-0 shadow-xl">
              Create
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {["3D", "QUALITY", "STILL", "COLOR"].map((tag) => (
            <div 
              key={tag}
              className="px-8 py-2.5 bg-zinc-900/50 border border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] text-zinc-500 hover:text-white hover:border-white/40 transition-all uppercase cursor-pointer backdrop-blur-md"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
