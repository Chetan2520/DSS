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
        <div className="text-center mb-8 md:mb-12 flex justify-center">
          <h2 className="font-playfair text-[26px] sm:text-3xl md:text-[38px] lg:text-[42px] font-bold text-[#18221B] tracking-tight flex flex-col sm:flex-row justify-center items-center gap-x-3 gap-y-3">
            <span>Trusted By</span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 rounded-xl bg-[#2A3B30] text-white"
            >
              45+ Ayurvedic Brands
            </motion.span> 
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

