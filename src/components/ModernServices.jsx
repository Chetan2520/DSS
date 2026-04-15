"use client";
import React from 'react';
import { motion } from 'framer-motion';

// --- DATA: Services Content ---
const serviceData = [
  {
    title: "Website Development",
    description: "Build fast, responsive, and SEO-friendly websites in Indore designed to attract customers and drive conversions.",
    tags: ["React & Next.js", "UI/UX Focus", "SEO Friendly", "Performance Driven", "Responsive Design"]
  },
  {
    title: "Performance Marketing",
    description: "Data-driven Google Ads and PPC campaigns in Indore focused on generating high-quality leads, sales, and ROI.",
    tags: ["Google Ads", "PPC Campaigns", "Conversion Optimization", "Lead Gen", "Data Driven"]
  },
  {
    title: "Social Media Marketing",
    description: "Engaging campaigns on FB, IG, and LinkedIn to increase brand awareness and grow your Indore business.",
    tags: ["Facebook Ads", "Instagram Growth", "LinkedIn B2B", "Brand Awareness", "Content Strategy"]
  },
  {
    title: "SEO Services",
    description: "Proven SEO strategies in Indore to improve rankings, increase organic traffic, and generate high-intent leads.",
    tags: ["On-Page SEO", "Technical Audit", "Backlink Building", "Keyword Research", "Local SEO"]
  },
  {
    title: "Graphic Designing",
    description: "Stunning visuals, logos, and branding in Indore that enhance your business identity and attract customers.",
    tags: ["Logo Design", "Brand Identity", "Social Media Graphics", "Print Media", "UI Design"]
  },
  {
    title: "Influencer Marketing",
    description: "Reach targeted audiences in Indore and drive real engagement through trusted creators and influencers.",
    tags: ["Creator Collabs", "Brand Outreach", "Engagement Focus", "Targeted Reach", "Campaign Management"]
  },
  {
    title: "E-commerce Development",
    description: "Secure and scalable online stores in Indore built to boost sales and enhance customer experience.",
    tags: ["Shopify", "Custom E-com", "Secure Payment", "Inventory Management", "User Experience"]
  },
  {
    title: "Digital Success",
    description: "Comprehensive growth roadmaps for Indore startups to dominate their niche in the digital landscape.",
    tags: ["Consultation", "Strategy", "Market Analysis", "ROI Tracking", "Full Scale"]
  }
];


// --- SUB-COMPONENT: Service Card ---
const ServiceCard = ({ category, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-[35px] border border-white/10 bg-[#ffffff05] backdrop-blur-md flex flex-col h-full transition-all duration-300 hover:border-orange-500/30 hover:bg-white/5 group"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-orange-500 transition-colors">
          {category.title}
        </h3>
        <p className="text-gray-400 text-xs leading-snug mb-6">
          {category.description}
        </p>

        {/* Tags with Dotted Borders */}
        <div className="flex flex-wrap gap-2 mb-8">
          {category.tags.map((tag, i) => (
            <div key={i} className="flex items-center gap-1 px-3 py-1 rounded-md border border-dashed border-white/20 text-[9px] md:text-[10px] text-gray-400 whitespace-nowrap">
              {tag} <span className="opacity-50 font-mono">↗</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <button className="w-full py-3 bg-white text-black rounded-full font-bold text-xs hover:bg-orange-500 hover:text-white transition-all transform active:scale-95">
            Discuss Project
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const ServicesSection = () => {
  return (
    <section className="bg-black overflow-hidden">
      
      {/* 1. MARQUEE SECTION (Sliding Tapes) */}
     

      {/* 2. SERVICES GRID SECTION */}
      <div className="relative py-24 px-4 md:px-10 flex flex-col items-center">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-orange-900/10 blur-[120px] pointer-events-none" />
        
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600">
            Digital
          </span>{" "}
          Sevices
        </h2>
            <p className="text-gray-400 max-w-2xl text-sm md:text-lg font-medium leading-relaxed">
              Need a professional team for website development in Indore that delivers performance-driven results? We build fast, responsive, and SEO-friendly websites designed to attract customers, improve user experience, and drive conversions.
              </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {serviceData.map((category, idx) => (
              <ServiceCard key={idx} category={category} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;