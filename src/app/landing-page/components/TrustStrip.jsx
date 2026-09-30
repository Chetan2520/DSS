"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustStrip() {
  const logos = [
    "/images/landing/ayurveda-logo1.png",
    "/images/landing/ayurveda-logo2.png",
    "/images/landing/ayurveda-logo3.png",
    "/images/landing/ayurveda-logo7.png",
    "/images/landing/ayurveda-logo4.png",
    "/images/landing/ayurveda-logo5.png",
    "/images/landing/ayurveda-logo6.png",
  ];

  // Triplicate the logos to ensure a seamless infinite loop across all screen sizes
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="bg-white py-8 md:py-10 border-b border-[#DDDCCF] relative z-20 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">

        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-playfair text-[28px] sm:text-4xl md:text-[46px] font-bold leading-[1.4] md:leading-[1.3] text-[#18221B] tracking-tight">
            Trusted By 
            <span className="relative inline-block px-3 md:px-4 py-1 md:py-1.5 mx-1 whitespace-nowrap rounded-xl overflow-hidden group">
              {/* Animated Background sweeping from Right to Left */}
              <motion.span 
                className="absolute top-0 bottom-0 right-0 bg-[#2A3B30] -z-10"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              />
              <span className="relative z-10 text-white">950+ Businesses</span>
            </span> 
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">Across 40+ Industries</span>
          </h2>
        </div>

      </div>

      {/* Marquee Container (Full width) */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Gradient Masks for smooth fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-8 md:gap-16 w-max pl-8 md:pl-16"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {duplicatedLogos.map((src, index) => (
            <div
              key={index}
              className="relative w-36 h-16 md:w-48 md:h-20 flex-shrink-0 flex items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={src}
                alt={`Trusted Ayurvedic Brand`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

