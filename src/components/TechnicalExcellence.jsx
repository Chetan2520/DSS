"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const FeatureItem = ({ title, description, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer py-5 border-b border-white/5 last:border-0 transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <h3
          className={`text-xl md:text-2xl font-medium tracking-tight transition-all duration-300 ${
            isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"
          }`}
        >
          {title}
        </h3>
        <motion.div
           animate={{ rotate: isActive ? 90 : 0 }}
           className={`${isActive ? "text-blue-500" : "text-gray-600"}`}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-lg">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TechnicalExcellence = () => {
  const [activeIndex, setActiveIndex] = useState(0);

const features = [
  {
    title: "Real-time Analytics",
    description:
      "Get live insights into your business performance with advanced real-time dashboards. Track user behavior, sales, and engagement instantly to make faster, data-driven decisions for your growth.",
    video: "/e1.mp4",
  },
  {
    title: "Custom Tech Solutions",
    description:
      "No one-size-fits-all approach. We choose and implement the best tech stack based on your business needs—ensuring flexibility, maintainability, and long-term success.",
    video: "/e2.mp4",
  },
  {
    title: "Ironclad Security",
    description:
      "Your platform is protected with enterprise-level security including data encryption, secure authentication, and real-time threat monitoring. We prioritize safety to keep your business and user data fully secure.",
    video: "/e3.mp4",
  },
  {
    title: "Modern Tech Stack",
    description:
      "We use the latest and most scalable technologies tailored to your needs—whether it's a startup, SaaS, or e-commerce platform. Our solutions are fast, reliable, and built for long-term growth and performance.",
    video: "/contact.mp4",
  },
];

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 relative overflow-hidden bg-black font-inter">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section Compact */}
        <div className="mb-10 space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2"
          >
            <div className="w-1 h-1 rounded-full bg-blue-500" />
            <span className="text-gray-500 font-bold tracking-[0.15em] text-[9px] uppercase">
              Technical Excellence
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-tight">
            Tools for your <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600">exponential growth.</span>
          </h2>

          <p className="text-gray-500 text-sm md:text-base max-w-lg leading-relaxed mt-2">
            Powerful tools designed to drive your brand’s measurable success.
          </p>
        </div>

        {/* Compact Interaction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column: List */}
          <div className="order-2 lg:order-1 pt-2">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Right Column: Video (Compact Aspect) */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <video
                    src={features[activeIndex].video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExcellence;
