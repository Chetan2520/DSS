"use client";
import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    num: "01.",
    title: "Build & Ship Faster",
    desc: "Predictable MVPs and no-surprise launches.",
    color: "#0078f0",
  },
  {
    num: "02.",
    title: "Cloud  That Scale",
    desc: "Resilient platforms with clear SLOs and cost controls.",
    color: "#3B82F6",
  },
  {
    num: "03.",
    title: "Data & AI That Deliver",
    desc: "Governed data and production-ready GenAI.",
    color: "#FBBF24",
  },
  {
    num: "04.",
    title: "Senior Talent, Flexible Capacity",
    desc: "Outcome-focused pods led from our specialized hubs, scaled globally.",
    color: "#A855F7",
  },
];

const HowWeDeliver = () => {
  return (
    <section className="bg-black text-white py-24 md:py-32 px-3 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-3 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl  tracking-tighter leading-tight bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent"
              >
                How We Deliver <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600">
                  Results
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed max-w-sm"
              >
                Proven ways we reduce risk, move faster, and ship measurable
                outcomes for our clients. Experience a partnership that
                prioritizes your business growth.
              </motion.p>
            </div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-4 md:p-10 rounded-3xl bg-zinc-950/50 border border-white/5 hover:border-blue-500/30 transition-all duration-700 h-full flex flex-col justify-between group overflow-hidden relative"
                >
                  <div className="space-y-10 relative z-10">
                    <span
                      className="text-1xl md:text-6xl  tracking-tighter opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 block mb-1 md:mb-4"
                      style={{ color: card.color }}
                    >
                      {card.num}
                    </span>
                    <div className="space-y-2 md:space-y-4">
                      <h3 className="text-xl md:text-3xl  tracking-tighter text-white transition-colors duration-500  ">
                        {card.title}
                      </h3>
                      <p className="text-zinc-500 text-xs md:text-base leading-relaxed font-medium">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  {/* Subtle Glow Effect */}
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/5 blur-[80px] rounded-full group-hover:bg-blue-500/10 transition-all duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default HowWeDeliver;
