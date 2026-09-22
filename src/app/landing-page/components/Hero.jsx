"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Target, Filter, MousePointerClick, TrendingUp, Sprout, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-12 md:pt-12 lg:pt-16 md:pb-16 overflow-hidden flex items-start min-h-[85vh]">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#F8F5EA]">
        <Image 
          src="/images/landing/hero-bgg.png"
          alt="Ayurveda Background"
          fill
          className="object-cover object-top opacity-40 mix-blend-multiply"
          priority
          quality={100}
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[60%] flex flex-col items-start text-left"
          >
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-6 text-[#18221B] tracking-tight">
              Get Quality Leads. <br />
              <span className="text-[#5B8266]">Increase Sales.</span> <br />
              Scale Your Ayurvedic Brand.
            </h1>

            <p className="text-lg md:text-xl text-[#18221B] mb-10 max-w-2xl font-medium leading-relaxed">
              Performance-driven digital marketing for Ayurvedic, Herbal & Wellness brands that want more qualified customers, higher conversions and scalable growth.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-6 relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5B8266] via-[#5B8266] to-[#5B8266] rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <a href="#contact" className="relative bg-[#5B8266] text-white px-5 sm:px-8 py-4 rounded-full font-bold text-center hover:bg-[#45664F] transition-all shadow-xl flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-[0.15em] sm:tracking-widest text-[11px] sm:text-sm border border-[#5B8266]/30 overflow-hidden whitespace-nowrap">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
                <span className="relative">GET YOUR FREE GROWTH AUDIT</span> 
                <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform sm:w-[18px] sm:h-[18px]" />
              </a>
            </motion.div>

          </motion.div>

          {/* Right Visual - UI Component */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end relative mt-12 lg:mt-0"
          >
            <GrowthSystemCard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function GrowthSystemCard() {
  const steps = [
    { icon: Target, label: "TARGET" },
    { icon: Filter, label: "QUALITY LEADS" },
    { icon: MousePointerClick, label: "CONVERSIONS" },
    { icon: TrendingUp, label: "SALES" },
  ];

  return (
    <div className="relative w-full max-w-[380px] mx-auto py-4 font-sans transform origin-center lg:origin-right lg:scale-95 xl:scale-100 transition-transform">
      
      {/* Title block */}
      <div className="text-center mb-6 relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-playfair text-3xl sm:text-4xl font-extrabold text-[#5B8266] mb-2 tracking-tight"
        >
          The Growth System
        </motion.h3>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#5B8266] uppercase tracking-widest font-semibold"
        >
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#5B8266]"></div>
          <span className="flex items-center gap-1.5 whitespace-nowrap">From Target <Leaf size={14} className="text-[#5B8266] fill-[#5B8266]" /> to Scale</span>
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#5B8266]"></div>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-0">
        {/* Floating Leaves */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -left-2 sm:-left-8 text-[#5B8266] opacity-40 z-0"
        >
          <Leaf size={32} className="fill-[#5B8266]/20" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] -right-2 sm:-right-8 text-[#5B8266] opacity-40 z-0"
        >
          <Leaf size={40} className="fill-[#5B8266]/20" />
        </motion.div>

        {/* Steps */}
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center w-full relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (idx * 0.1) }}
              className="relative w-full max-w-[320px] h-[56px] sm:h-[64px] bg-gradient-to-r from-[#FDFBF4] via-[#F8F5EA] to-[#F1EAD3] border border-[#CBD5C0] rounded-xl shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05)] flex items-center group hover:shadow-[0_8px_20px_-5px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            >
              {/* Subtle hover effect background */}
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Left Side: Icon */}
              <div className="w-[45%] h-full flex items-center justify-end pr-5 relative z-10">
                 <div className="text-[#5B8266] group-hover:text-[#45664F] group-hover:scale-110 transition-all duration-300">
                    <step.icon size={24} strokeWidth={2} />
                 </div>
              </div>

              {/* Vertical Divider */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50%] w-[1px] bg-[#CBD5C0]"></div>

              {/* Right Side: Text */}
              <div className="w-[55%] h-full flex items-center pl-5 relative z-10">
                <span className="font-bold text-[#5B8266] tracking-wider text-[13px] sm:text-[14px]">{step.label}</span>
              </div>
            </motion.div>

            {/* Connecting Line to next item */}
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 20 }}
              transition={{ delay: 0.5 + (idx * 0.1), duration: 0.3 }}
              className="flex flex-col items-center justify-center w-full relative z-0 overflow-hidden"
            >
              <div className="w-[2px] h-full bg-[#5B8266] opacity-70"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#5B8266] border-[1px] border-[#F8F5EA] shadow-sm"></div>
            </motion.div>
          </div>
        ))}

        {/* Final Step: SCALE */}
        <div className="flex flex-col items-center w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="relative w-full max-w-[340px] h-[76px] sm:h-[84px] bg-gradient-to-r from-[#45664F] via-[#5B8266] to-[#45664F] border-[1.5px] border-[#5B8266] rounded-[1.25rem] shadow-2xl flex items-center overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
          >
            {/* Center glowing element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-10 bg-yellow-400/20 blur-xl"></div>
            
            <div className="w-[45%] h-full flex items-center justify-end pr-5 relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg animate-pulse"></div>
                <Sprout size={32} className="text-[#F8F5EA] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] relative z-10" strokeWidth={1.5} />
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-[#5B8266]/50"></div>

            <div className="w-[55%] h-full flex items-center pl-5 relative z-10">
              <span className="font-playfair font-bold text-white tracking-[0.15em] text-xl sm:text-2xl drop-shadow-md">SCALE</span>
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
}
