"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
// --- DATA ---
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

// --- CARD ---
const ServiceCard = ({ category, idx }) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md flex flex-col h-full transition-all duration-300 hover:border-blue-500/60 hover:bg-white/10 group hover:-translate-y-2"
    >
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight transition-colors">
        {category.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {category.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {category.tags.map((tag, i) => (
          <div
            key={i}
            className="px-3 py-1 rounded-md border border-dashed border-white text-[10px] text-gray-400"
          >
            {tag}
          </div>
        ))}
      </div>

  <button
  onClick={() => router.push("/lets-connect")}
  className="mt-auto w-full py-3 rounded-full font-semibold text-sm border border-gray-300 relative overflow-hidden group bg-white text-black transition-all duration-300"
>
  {/* Hover Background */}
  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300" />

  {/* Shine Effect */}
  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
    <span className="absolute -left-[100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700"></span>
  </span>

  {/* Text */}
  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
    Discuss Project →
  </span>
</button>
    </motion.div>
  );
};

// --- MAIN ---
const ServicesSection = () => {
  const router = useRouter();
 return (
  <section className="relative overflow-hidden py-24 px-4 md:px-10 flex items-center justify-center">

    {/* ✅ Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/images/services-bg.png" // 👈 apni image yaha daalna
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>

    {/* CONTENT */}
    <div className="relative z-10 max-w-7xl mx-auto w-full">

      {/* HEADER */}
      <div className="mb-16 text-center lg:text-left">
        <h2 className="text-4xl md:text-6xl tracking-tight text-white leading-tight mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Digital
          </span>{" "}
          Services
        </h2>

        <p className="text-gray-400 max-w-2xl text-sm md:text-lg leading-relaxed">
          Need a professional team for website development in Indore that delivers performance-driven results? 
          We build fast, responsive, and SEO-friendly websites designed to attract customers, improve user experience, 
          and drive conversions.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {serviceData.map((category, idx) => (
          
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-[32px] border border-white bg-white/5 backdrop-blur-md flex flex-col justify-between h-full min-h-[440px] transition-all duration-300 hover:border-white hover:bg-white/10 group hover:-translate-y-2"
          >

            {/* TITLE */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight transition-colors">
              {category.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-300 text-sm leading-relaxed font-bold mb-6">
              {category.description}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-8">
              {category.tags.map((tag, i) => (
                <div
                  key={i}
                  className="px-3 py-1 rounded-md border border-dashed border-white text-[12px] text-white/90"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* BUTTON */}
         <button
  onClick={() => router.push("/lets-connect")}
  className="mt-auto w-full py-3 rounded-full font-semibold text-sm border border-gray-300 relative overflow-hidden group bg-white text-black transition-all duration-300"
>
  {/* Hover Background */}
  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300" />

  {/* Shine Effect */}
  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
    <span className="absolute -left-[100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700"></span>
  </span>

  {/* Text */}
  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
    Discuss Project →
  </span>
</button>

          </motion.div>

        ))}
      </div>
    </div>
  </section>
);
};

export default ServicesSection;