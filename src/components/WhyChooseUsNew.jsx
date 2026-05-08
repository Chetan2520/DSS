"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, Shield, Users, Rocket, Headphones } from "lucide-react";

const reasons = [
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Expert Mastery",
    description:
      "With over 6+ years of industry-leading experience, we bring tactical expertise to every project.",
  },
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: "ROI-Focused",
    description:
      "Our strategies are engineered to deliver measurable growth and a powerful return on investment.",
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Rapid Execution",
    description:
      "We combine high-quality output with efficient delivery to keep your brand ahead of the curve.",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Client Partnership",
    description:
      "We work as an extension of your team, ensuring your vision is translated into digital reality.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-white" />,
    title: "Scalable Growth",
    description:
      "Our solutions are built to grow alongside your business, from local markets to a global stage.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-white" />,
    title: "Dedicated Support",
    description:
      "We provide consistent technical guidance and support to ensure your platforms perform flawlessly.",
  },
];

const WhyChooseUsNew = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Top Gradient Overlay for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/50 to-transparent z-10 pointer-events-none"></div>

      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 max-w-xl mx-auto text-base md:text-lg"
          >
            Delivering high-performance digital solutions that set your business
            apart from the competition.
          </motion.p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-8 rounded-[22px] border border-white/50   "
            >
              <div className="mb-6   ">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsNew;
