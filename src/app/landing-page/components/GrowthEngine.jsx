"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PenTool, TrendingUp, Users, Filter, Search, MousePointerClick, ShieldCheck } from "lucide-react";

export default function GrowthEngine() {
  const capabilities = [
    {
      title: "Ayurveda-Compliant Creatives",
      icon: <PenTool className="w-5 h-5" />
    },
    {
      title: "Meta & Google Performance",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Patient Acquisition Systems",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "D2C Funnel Architecture",
      icon: <Filter className="w-5 h-5" />
    },
    {
      title: "Organic SEO & Content",
      icon: <Search className="w-5 h-5" />
    },
    {
      title: "Conversion Rate Optimization",
      icon: <MousePointerClick className="w-5 h-5" />
    }
  ];

  return (
    <section id="capabilities" className="py-20 md:py-32 relative overflow-hidden text-[#18221B] bg-[#fdf8ed]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/landing/section-bg.png"
          alt="Section Background"
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-[#2F4034]/20 pb-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-[#18221B]/10 text-[#174A2A] text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6F8B63]"></span>
              Our Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              The Full-Stack <br />
              <span className="text-[#6F8B63] italic">Growth Engine.</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#5F675F] text-base md:text-lg leading-relaxed max-w-md md:text-right font-medium"
          >
            Everything you need to scale your Ayurveda business, housed under one roof. No fragmented strategies, just one cohesive system.
          </motion.p>
        </div>

        {/* 2-Column List Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-10">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-white text-[#174A2A] flex items-center justify-center border border-[#DDDCCF] shadow-sm group-hover:bg-[#174A2A] group-hover:text-white transition-all duration-300">
                {cap.icon}
              </div>
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#18221B] group-hover:text-[#174A2A] transition-colors drop-shadow-sm">
                {cap.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <a href="#contact" className="bg-[#174A2A] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#10351F] transition-all shadow-xl shadow-[#174A2A]/20 flex items-center gap-3 uppercase tracking-wider hover:scale-[1.02]">
            Ready to scale? GET FREE AUDIT <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
