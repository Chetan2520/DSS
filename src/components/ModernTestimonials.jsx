"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aman Sharma",
    role: "CEO, TechNova Solutions",
    quote:
      "The strategic approach and data-driven results they delivered were beyond our expectations. Our organic growth has skyrocketed.",
    avatar: "/images/modern_testimonials/avatar1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohan Varma",
    role: "Founder, GrowthLogic",
    quote:
      "DSS transformed our brand identity. Their attention to detail and creative vision is unmatched in the digital marketing space.",
    avatar: "/images/modern_testimonials/avatar2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Indore Retails",
    role: "Director of Marketing",
    quote:
      "Incredible growth in our local reach. They truly understand the Indore market and how to scale digitally with precision.",
    avatar: "/images/modern_testimonials/avatar3.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Gupta",
    role: "Co-Founder, MixNuts.in",
    quote:
      "Our campaign ROI has seen a 4x increase since we started collaborating. Truly the best digital partner we have ever had.",
    avatar: "/images/modern_testimonials/avatar1.png",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    className="min-w-[300px] md:min-w-[360px]   rounded-[24px] border border-white/40 overflow-hidden transition-all duration-300 hover:border-white/10 group p-6 md:p-8"
    whileHover={{ y: -5 }}
  >
    <div className="flex flex-col gap-5">
      {/* Header: Picture Left, Info Right */}
      <div className="flex items-center gap-4 md:gap-5">
        <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-xl">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg md:text-xl font-s text-white tracking-tight leading-tight">
            {testimonial.name}
          </h4>
          <p className="text-[#999999] text-[10px] md:text-xs    tracking-widest mt-1">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Content: Feedback Below Header */}
      <div className="flex flex-col gap-4 text-left border-t border-white/5 pt-5">
        <p className="text-gray-400 text-sm md:text-base leading-[1.6] ">
          "{testimonial.quote}"
        </p>

        {/* Stars: Below Feedback */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${i < testimonial.rating ? "fill-[#ffb700] text-[#ffb700]" : "text-[#1a1a1a]"}`}
            />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function ModernTestimonials() {
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      const step = 384; // card width + gap (360 + 24)
      let newScroll =
        direction === "left" ? scrollAmount - step : scrollAmount + step;

      // Clamp values
      newScroll = Math.max(0, Math.min(newScroll, maxScroll));

      containerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
      setScrollAmount(newScroll);
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden text-white relative bg-cover bg-center">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl   tracking-tight text-white leading-none">
              Client
              <br />
              <span className="text-[#999999]">Feedback</span>
            </h2>
            <div className="h-1 w-24 bg-linear-to-r from-blue-600 to-transparent rounded-full" />
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="group p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md"
              aria-label="Previous"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md"
              aria-label="Next"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <motion.div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
