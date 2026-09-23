"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Gem, Target } from "lucide-react";

export default function CTAStrip() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0B2A15]">
        <Image 
          src="/images/landing/cta-bg.png" 
          alt="CTA Background"
          fill
          className="object-cover object-center opacity-90"
          quality={100}
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-20">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Side: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left flex-1"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-[40px] font-semibold text-white mb-3 md:mb-4 tracking-tight leading-[1.15]">
              Ready to Scale Your Ayurvedic Brand?
            </h2>
            <p className="text-[#C4D5C9] text-sm md:text-base font-medium">
              Get a free growth audit and actionable strategy from our experts.
            </p>
          </motion.div>

          {/* Right Side: Button & Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center lg:items-end shrink-0"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4 rounded-full bg-[#FF6900] text-white font-semibold text-sm md:text-[15px] hover:bg-[#E65C00] hover:scale-105 transition-all shadow-lg shadow-[#FF6900]/20 group w-full sm:w-auto mb-4 md:mb-5"
            >
              Get Your Free Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[10px] md:text-xs font-semibold text-[#C4D5C9]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-white/80" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Gem size={14} className="text-white/80" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Target size={14} className="text-white/80" />
                <span>Actionable Plan</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
