"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AgencyGrowthSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeUp = {
    hidden: { y: 60, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-[#0a0a0a] text-white"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6">

            <motion.p
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-sm uppercase tracking-[0.25em] text-zinc-500"
            >
              Digital Marketing Agency in Indore
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
            >
              We Help Your Business Grow Online
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-zinc-400 text-lg leading-relaxed max-w-xl"
            >
              Welcome to <span className="text-white font-medium">Digital Success Solutions</span>, 
              your trusted digital marketing agency in Indore. We focus on improving your brand visibility, 
              driving quality traffic, and delivering measurable results through practical, data-driven strategies.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex gap-4 pt-4"
            >
              <button className="px-7 py-3.5 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition">
                Get Started
              </button>

              <button className="px-7 py-3.5 border border-white/20 rounded-full hover:bg-white/10 transition">
                View Services
              </button>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="border border-white/10 rounded-2xl p-8 bg-[#111111]">

              <h3 className="text-xl font-medium mb-4">
                Why choose us?
              </h3>

              <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                <li>• Clear and transparent marketing approach</li>
                <li>• Focus on real business growth, not vanity metrics</li>
                <li>• Experience across multiple industries</li>
                <li>• Consistent performance tracking and reporting</li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-zinc-500">
                  Helping businesses in Indore grow digitally with practical and effective strategies.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AgencyGrowthSection;