"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustStrip() {
  const logos = [
    "/images/landing/ayurveda-logo1.png",
    "/images/landing/ayurveda-logo2.png",
    "/images/landing/ayurveda-logo3.png",
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
        <div className="text-center mb-8 md:mb-10">
          <p className="text-[#18221B] font-semibold text-[13px] md:text-[15px]">
            Trusted by 950+ Businesses Across 40+ Industries
          </p>
        </div>

      </div>

      {/* Marquee Container (Full width) */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Gradient Masks for smooth fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex items-center gap-12 md:gap-20 w-max pl-12 md:pl-20 opacity-80"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {duplicatedLogos.map((src, index) => (
            <div 
              key={index} 
              className="relative w-24 h-10 md:w-36 md:h-14 flex-shrink-0 flex items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer"
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
