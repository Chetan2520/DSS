"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Users, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-32 md:pt-40 md:pb-[30rem] overflow-hidden flex items-start min-h-[110vh] md:min-h-[120vh]">
      {/* Background Image - NO OVERLAY */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-[#fdf8ed]"
      >
        <Image 
          src="/images/landing/hero-bgg.png"
          alt="Ayurveda Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </motion.div>

      {/* Right side gradient fade 
      <div className="absolute inset-y-0 right-0 w-full md:w-[80%] lg:w-[70%] xl:w-[60%] bg-gradient-to-l from-white/95 via-white/70 to-transparent z-10 pointer-events-none"></div>
      */}

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-20 h-full flex flex-col justify-start">
        <div className="max-w-3xl mx-auto w-full">

          {/* Right-aligned Content - Moved up using negative margin */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center mt-8 sm:-mt-16 md:-mt-16 lg:-mt-20 xl:-mt-24 px-2"
          >
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] mb-8 text-[#0A110D]">
              <span className="text-[#3F631F]">Ayurvedic</span> Products, <br />
              Clinics & Brands.
            </h1>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-2 relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated glowing ring behind the button */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#174A2A] via-[#3F631F] to-[#174A2A] rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <a href="#contact" className="relative bg-[#174A2A] text-white px-6 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-center hover:bg-[#10351F] transition-all shadow-xl flex items-center justify-center gap-2 md:gap-3 uppercase tracking-widest text-[11px] sm:text-sm border border-[#3F631F]/30 overflow-hidden">
                {/* Shine effect on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
                <span className="relative">GET YOUR FREE AUDIT</span> 
                <span className="relative group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
