"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Clean, 5-point minimalist layout with subtle Blue-800 tones and fewer gradients
const features = [
  {
    number: "01",
    title: "Indore Digital Marketing Experts",
    subtitle: "Strategic Growth",
    desc: "We deliver sustainable growth through advanced strategies and an analytics-driven approach. Our robust planning helps achieve every business goal, ensuring your brand dominates the Indore market.",
  },
  {
    number: "02",
    title: "Reliable Support & Retention",
    subtitle: "24/7 Support",
    desc: "Professional support and timely execution are our core values. We support your brand 24x7. Our high customer retention rate proves that our results-review service and regular updates keep clients happy.",
  },
  {
    number: "03",
    title: "Custom-Choice Channels",
    subtitle: "Targeted Channels",
    desc: "Every business receives personalized SEO, PPC, and social media channel strategies. We help creative brands stand out in Indore's competitive market by targeting the right audience on the right platform.",
  },
  {
    number: "04",
    title: "100% Transparency",
    subtitle: "Honest Reporting",
    desc: "No hidden costs. No confusing reports. We keep all campaign results, project updates, and pricing open. You get complete clarity on every rupee spent and every lead generated.",
  },
  {
    number: "05",
    title: "Measurable, Data-Driven Results",
    subtitle: "Proven ROI",
    desc: "Our ads are designed to generate real business results — not just clicks. We optimize campaigns daily using premium tools and automation to ensure the highest ROI for your business.",
  },
];

export default function AchievementTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to height (0% to 100%)
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="bg-black min-h-screen text-white pt-24 md:pt-32 pb-24 md:pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      id="why-choose-us"
    >
      {/* Subtle Deep Blue Background Glows - Switched to Blue-800 focus */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section - Removed strong gradients */}
        <div className="text-center mb-32">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 font-bold tracking-[0.3em]   text-xs md:text-sm mb-4 border border-blue-800/30 inline-block px-6 py-2 rounded-full bg-blue-800/5 backdrop-blur-sm"
          >
            Why Choose DSS
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-12  font-semibold text-white leading-tight tracking-tighter"
          >
            Indore's Digital <br />
            <span className="text-blue-200">Growth Partner</span>
          </motion.h2>
          {/* <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-zinc-500 text-lg md:text-2xl max-w-2xl mx-auto font-medium"
          >
            Measurable growth. Complete transparency. <br />Advanced performance strategies.
          </motion.p> */}
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-6xl mx-auto h-full">
          {/* Vertical Lines */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-900/20 -translate-x-1/2 block" />

          {/* Corrected Middle Line - Keeping the "glowing" path but more subtle */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-blue-600 shadow-[0_0_15px_rgba(30,64,175,0.5)] -translate-x-1/2 origin-top block"
          >
            {/* Glowing Tip - The one key place to keep the glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[14px] h-[14px] bg-white rounded-full shadow-[0_0_20px_5px_rgba(59,130,246,1)] z-20" />

            {/* Deep Blue Ambient Glow At Tip */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[180px] h-[180px] bg-blue-800/15 rounded-full blur-[70px] z-0 pointer-events-none" />
          </motion.div>

          {/* Minimalist Timeline Items */}
          <div className="space-y-32 md:space-y-48 pb-40">
            {features.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TimelineItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-start md:items-center pl-12 md:pl-0"
    >
      {/* LEFT COLUMN: Title + Metadata */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:pr-24 text-left relative">
        <div className="relative z-10 w-full md:w-auto">
          <div className="flex justify-between items-baseline md:block">
            <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-2 tracking-tight">
              {item.title}
            </h3>

            {/* Large Faint Number (Mobile) */}
            <span className="md:hidden text-4xl   text-blue-800/10 block">
              {item.number}
            </span>
          </div>

          <p className="text-blue-500/80 text-sm md:text-xl font-bold tracking-widest  ">
            {item.subtitle}
          </p>
        </div>

        {/* Large Faint Number (Desktop) */}
        <div className="hidden md:block md:pl-12 text-right">
          <div className="text-4xl lg:text-7xl   text-blue-800/5 select-none tracking-tighter">
            {item.number}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Clean Standalone Text - Removed boxes and extra gradients */}
      <div className="md:pl-24">
        <div className="relative">
          <p className="text-zinc-500 text-lg md:text-base leading-relaxed max-w-lg font-medium">
            {item.desc}
          </p>
          {/* Subtle accent bar in Blue-800 */}
          {/* <div className="absolute -left-6 md:-left-10 top-2 bottom-2 w-px bg-blue-800/40" /> */}
        </div>
      </div>
    </motion.div>
  );
};
