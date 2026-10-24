"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, BarChart3, Target } from "lucide-react";

export default function MetaProofs() {
  const proofs = [
    {
      metric: "22,900+ Calls",
      title: "Local Ayurvedic Clinic",
      description: "Generated massive inbound patient inquiries at just ₹22.39 per call over 6 months.",
      image: "/images/landing/meta-result1.jpeg",
      icon: TrendingUp
    },
    {
      metric: "890+ Bookings",
      title: "Treatment Center",
      description: "Scaled Google Ads to drive nearly 900 high-intent conversions in a single month at a ₹564 CPA.",
      image: "/images/landing/meta-result2.jpeg",
      icon: Target
    },
    {
      metric: "₹7.3L+ Revenue",
      title: "Premium D2C Brand",
      description: "Achieved an incredible ₹18,000 Average Revenue Per User (ARPPU) with 700+ Add to Carts in under 30 days.",
      image: "/images/landing/meta-result3.jpeg",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F5EA] border-t border-[#DDDCCF] overflow-hidden relative">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-[46px] font-bold leading-[1.25] text-[#18221B] mb-6 tracking-tight"
          >
            Let Your Success <br />
            <span className="relative inline-block overflow-hidden px-4 md:px-5 py-1 md:py-1.5 rounded-xl mt-2 md:mt-3 whitespace-nowrap text-[32px] sm:text-4xl md:text-[46px] leading-[1.2]">
              <motion.span 
                className="absolute inset-y-0 left-0 bg-[#2A3B30] z-0"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "circOut", delay: 0.3 }}
              />
              <span className="text-white relative z-10">Make The Noise</span>
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#5F675F] text-base md:text-[17px] font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Take a peek inside our actual ad accounts. No fluffed case studies—just raw screenshots, real data, and verifiable growth for our Ayurvedic partners.
          </motion.p>
        </div>

        {/* Proofs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {proofs.map((proof, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group h-full"
            >
              {/* Text Content */}
              <div className="mb-6 md:mb-8 flex flex-col items-start">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-[#DDDCCF] shadow-sm group-hover:bg-[#5B8266] group-hover:border-[#5B8266] transition-colors duration-300 mb-5">
                  <proof.icon size={26} className="text-[#5B8266] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-playfair text-3xl md:text-4xl font-bold text-[#18221B] mb-2">{proof.metric}</h4>
                  <h5 className="text-[15px] font-bold text-[#18221B] mb-2 uppercase tracking-wide">{proof.title}</h5>
                  <p className="text-[#5F675F] text-[15px] leading-relaxed font-medium">{proof.description}</p>
                </div>
              </div>
              
              {/* Screenshot Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden border-2 border-[#DDDCCF] shadow-lg bg-white mt-auto transform group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300">
                
                {/* Fallback */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#5F675F] text-xs text-center p-6 bg-gray-50 z-0">
                  <div className="border-2 border-dashed border-[#DDDCCF] p-6 flex flex-col items-center justify-center w-full h-full">
                    <span className="font-semibold text-[#18221B]">Upload Meta Screenshot</span>
                    <span className="font-mono mt-3 px-3 py-1.5 bg-white border border-[#DDDCCF] rounded-md text-[#18221B]">{proof.image}</span>
                  </div>
                </div>
                
                <Image
                  src={proof.image}
                  alt={`${proof.metric} Proof`}
                  fill
                  className="object-cover object-top z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}



