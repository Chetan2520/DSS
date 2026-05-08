"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SlidingButton from "./SlidingButton";
// --- DATA ---
const servicesCategories = [
  {
    categoryName: "IT Services",
    description: "Robust, scalable, and high-performance technology solutions tailored for your business needs.",
    services: [
      {
        title: "Website Development",
        path: "/website-design-and-website-development",
        description: "Build fast, responsive, and SEO-friendly websites in Indore designed to attract customers and drive conversions.",
        tags: ["React & Next.js", "UI/UX Focus", "SEO Friendly", "Performance Driven", "Responsive Design"]
      },
      {
        title: "E-commerce Development",
        path: "/e-commerce-applications",
        description: "Secure and scalable online stores in Indore built to boost sales and enhance customer experience.",
        tags: ["Shopify", "Custom E-com", "Secure Payment", "Inventory Management", "User Experience"]
      },
      {
        title: "App Development",
        path: "/e-commerce-applications", // Assuming app dev is linked or has a similar page
        description: "High-performance iOS and Android mobile applications designed for seamless user experiences and engagement.",
        tags: ["React Native", "iOS & Android", "API Integration", "App Store", "Scalable"]
      },
      {
        title: "Custom Software",
        path: "/website-design-and-website-development", // Fallback to webdev or similar
        description: "Tailor-made software solutions to automate your business processes and increase overall operational efficiency.",
        tags: ["Cloud Solutions", "Process Automation", "ERP / CRM", "Database Design", "Enterprise"]
      }
    ]
  },
  {
    categoryName: "Digital Marketing Services",
    description: "Data-driven marketing strategies designed to increase brand visibility, drive traffic, and maximize your ROI.",
    services: [
      {
        title: "Performance Marketing",
        path: "/performance-marketing-ppc",
        description: "Data-driven Google Ads and PPC campaigns in Indore focused on generating high-quality leads, sales, and ROI.",
        tags: ["Google Ads", "PPC Campaigns", "Conversion Optimization", "Lead Gen", "Data Driven"]
      },
      {
        title: "Social Media Marketing",
        path: "/social-media-marketing",
        description: "Engaging campaigns on FB, IG, and LinkedIn to increase brand awareness and grow your Indore business.",
        tags: ["Facebook Ads", "Instagram Growth", "LinkedIn B2B", "Brand Awareness", "Content Strategy"]
      },
      {
        title: "SEO Services",
        path: "/search-engine-optimization",
        description: "Proven SEO strategies in Indore to improve rankings, increase organic traffic, and generate high-intent leads.",
        tags: ["On-Page SEO", "Technical Audit", "Backlink Building", "Keyword Research", "Local SEO"]
      },
      {
        title: "Graphic Designing",
        path: "/graphic-designing",
        description: "Stunning visuals, logos, and branding in Indore that enhance your business identity and attract customers.",
        tags: ["Logo Design", "Brand Identity", "Social Media Graphics", "Print Media", "UI Design"]
      }
    ]
  }
];

// --- CARD ---
const ServiceCard = ({ category, idx, activeTab }) => {
  const router = useRouter();
  return (
    <motion.div
      key={`${activeTab}-${idx}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      viewport={{ once: true }}
      onClick={() => router.push(category.path)}
      className="relative p-8 rounded-2xl md:rounded-[32px] border border-white/80 bg-transparent flex flex-col justify-between h-full min-h-[440px] transition-all hover:bg-black/10 group cursor-pointer"
    >
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight transition-colors">
          {category.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed font-semibold mb-6">
          {category.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {category.tags.map((tag, i) => (
            <div
              key={i}
              className="px-3 py-1 rounded-md border border-dashed border-white/50 text-[12px] text-white/90"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <SlidingButton
        onClick={(e) => {
          e.stopPropagation();
          router.push("/lets-connect");
        }}
        className="mt-auto w-full py-3 rounded-full font-semibold text-sm bg-white text-black border border-gray-300"
      >
        <span className="flex items-center justify-center font-semibold gap-2">
          Discuss Project
          {/* <img src="/arrow-right.svg" alt="Arrow" className="w-4 h-4" /> */}
        </span>
      </SlidingButton>
    </motion.div>
  );
};

// --- MAIN ---
const ServicesSection = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("IT Services");

 return (
  <section className="relative overflow-hidden py-24 px-4 md:px-10 flex items-center justify-center">

    {/* ✅ Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/images/final-services.jpeg" 
        alt="services background"
        className="w-full h-full object-cover"
      />
      {/* Subtle Blue Glows for depth */}
    <div className="absolute top-[-8%] left-[-5%] w-[100px] h-[200px] bg-[#0078f0] blur-[100px] rounded-full pointer-events-none z-0"></div>
    
    {/* Bottom Gradient for smooth transition */}
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
      
    </div>

    {/* CONTENT */}
    <div className="relative z-10 max-w-7xl mx-auto w-full">

      {/* HEADER */}
      <div className="mb-12 text-center lg:text-left">
        <h2 className="text-4xl md:text-6xl tracking-tight text-white leading-tight mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Digital
          </span>{" "}
          Services
        </h2>

        <p className="text-gray-400 max-w-2xl text-sm md:text-lg leading-relaxed mb-10 mx-auto lg:mx-0">
          Need a professional team for website development in Indore that delivers performance-driven results? 
          We build fast, responsive, and SEO-friendly websites designed to attract customers, improve user experience, 
          and drive conversions.
        </p>

        {/* TABS / TOGGLE BUTTONS */}
        <div className="flex justify-center lg:justify-start">
          <div className="inline-flex   border border-white/10 p-1.5 rounded-full backdrop-blur-sm relative">
            {servicesCategories.map((categoryGroup) => (
              <button
                key={categoryGroup.categoryName}
                onClick={() => setActiveTab(categoryGroup.categoryName)}
                className={`relative px-6 md:px-8  py-3 rounded-full text-xs md:text-base font-semibold transition-colors duration-300 z-10 ${
                  activeTab === categoryGroup.categoryName ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === categoryGroup.categoryName && (
                  <motion.div
                    layoutId="activeServiceTab"
                    className="absolute inset-0 bg-blue-600 rounded-full shadow-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {categoryGroup.categoryName}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ACTIVE CATEGORY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
        {servicesCategories
          .find((c) => c.categoryName === activeTab)
          ?.services.map((category, idx) => (
            <ServiceCard 
              key={`${activeTab}-${idx}`} 
              category={category} 
              idx={idx} 
              activeTab={activeTab}
            />
          ))}
      </div>
    </div>
  </section>
);
};

export default ServicesSection;