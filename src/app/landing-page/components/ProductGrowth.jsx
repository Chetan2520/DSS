"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProductGrowth() {
  return (
    <section id="product-growth" className="w-full flex flex-col lg:flex-row overflow-hidden border-t border-[#DDDCCF]">

      {/* Left Side - Dark Green */}
      <div className="lg:w-[40%] bg-[#5B8266] text-white py-20 px-8 lg:py-32 lg:px-16 flex flex-col justify-center relative">
        {/* Subtle decorative leaf/bg (Optional, imitating screenshot) */}
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >

          <h2 className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] sm: md: lg: mb-6 md:mb-8 text-white">
            From product <br className="block sm:hidden" />
            <span className="hidden sm:inline">discovery to </span>
            <span className="sm:hidden">discovery to </span><br className="hidden sm:block" />
            repeat purchase.
          </h2>

          <p className="text-[#F8F5EA] text-lg leading-relaxed mb-12 max-w-md border-l border-[#F8F5EA]/30 pl-6">
            Turning Ayurvedic products into digital growth through a structured customer journey. Every stage is optimized to guide the user from awareness to loyalty.
          </p>

          <button className="bg-[#F8F5EA] text-[#5B8266] rounded-full px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-3 group w-fit">
            Explore Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Right Side - Light Cream */}
      <div className="lg:w-[60%] bg-[#F8F5EA] flex flex-col justify-start relative min-h-[600px]">

        {/* Padding container for Stats and Quote */}
        <div className="pt-20 px-8 lg:pt-24 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 mb-16 md:mb-24 relative"
          >
            <div className="text-center md:border-r border-[#DDDCCF]/80 px-4">
              <div className="text-3xl lg:text-3xl text-[#5B8266] font-playfair font-bold mb-2">01</div>
              <div className="text-xs text-[#5F675F] uppercase tracking-wider font-semibold">Discovery</div>
            </div>
            <div className="text-center md:border-r border-[#DDDCCF]/80 px-4">
              <div className="text-3xl lg:text-3xl text-[#5B8266] font-playfair font-bold mb-2">02</div>
              <div className="text-xs text-[#5F675F] uppercase tracking-wider font-semibold">Education</div>
            </div>
            <div className="text-center md:border-r border-[#DDDCCF]/80 px-4">
              <div className="text-3xl lg:text-3xl text-[#5B8266] font-playfair font-bold mb-2">03</div>
              <div className="text-xs text-[#5F675F] uppercase tracking-wider font-semibold">Conversion</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl lg:text-3xl text-[#5B8266] font-playfair font-bold mb-2">04</div>
              <div className="text-xs text-[#5F675F] uppercase tracking-wider font-semibold">Retention</div>
            </div>
          </motion.div>


        </div> {/* End of Padding Container */}

        {/* Bottom Image touching left, right, and bottom edges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[380px] mt-auto"
        >
          <Image
            src="/images/landing/landing-3.png"
            alt="Ayurveda Product Journey"
            fill
            className="object-cover object-bottom"
          />
        </motion.div>

      </div>

    </section>
  );
}
