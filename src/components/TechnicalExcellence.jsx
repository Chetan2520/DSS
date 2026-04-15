"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const FeatureItem = ({ title, description, video, isActive, onClick }) => {
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
          className={`${isActive ? "text-orange-500" : "text-gray-600"}`}
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
            <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-lg mb-4 lg:mb-0">
              {description}
            </p>
            {/* Mobile Video Container */}
            <div className="w-full rounded-xl overflow-hidden aspect-video bg-black relative lg:hidden pointer-events-none mt-4">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
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
      title: "1. High-Performance Websites & Funnels",
      description:
        "We build conversion-optimized websites and sales funnels that guide users from awareness to action.",
      video: "/e1.mp4",
    },
    {
      title: "2. Search Engine Optimization (SEO)",
      description:
        "Improve your search engine rankings and attract targeted organic traffic with long-term SEO strategies.",
      video: "/e2.mp4",
    },
    {
      title: "3. Social Media Growth",
      description:
        "Strengthen your online presence with consistent and engaging social media marketing campaigns.",
      video: "/e3.mp4",
    },
    {
      title: "4. Targeted Advertising (PPC & Ads)",
      description:
        "Run high-performing Google Ads and Meta Ads campaigns that deliver faster results and higher conversions.",
      video: "/contact.mp4",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 relative overflow-hidden bg-black font-inter">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-10 space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2"
          >
            <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
              Digital Solutions for Business Growth
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-6xl tracking-tighter text-white leading-tight font-bold">
            Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-400 to-orange-600">Online Growth.</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed mt-4">
            We offer result-driven digital marketing services in Indore to help your business scale efficiently and stand out in a competitive market.
          </p>
        </div>

        {/* Interaction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column: List */}
          <div className="order-2 lg:order-1 pt-2">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
                video={feature.video}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Right Column: Video */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
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