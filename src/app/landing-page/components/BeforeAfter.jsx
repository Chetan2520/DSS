"use client";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function BeforeAfter() {
  const before = [
    "Unclear targeting",
    "Inconsistent creatives",
    "Low-quality enquiries",
    "Poor conversion",
    "No structured retargeting"
  ];

  const after = [
    "Better audience targeting",
    "Data-driven creatives",
    "Conversion-focused landing pages",
    "Structured Retargeting",
    "Measurable funnel",
    "Continuous optimization"
  ];

  return (
    <section className="relative py-12 md:py-20 bg-[url('/images/landing/bgg.png')] bg-cover bg-center bg-no-repeat border-t border-[#DDDCCF]">
      <div className="absolute inset-0 bg-white/20"></div> {/* Subtle overlay for better contrast if image is busy */}
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-[42px] font-bold leading-[1.3] text-[#18221B] mb-6 tracking-tight"
          >
            You Are Just 1 Step Away From <br />
            <span className="relative inline-block overflow-hidden px-4 md:px-5 py-1 md:py-1.5 rounded-xl mt-2 md:mt-3 whitespace-nowrap text-[32px] sm:text-4xl md:text-[46px] leading-[1.2]">
              <motion.span
                className="absolute inset-y-0 left-0 bg-[#2A3B30] z-0"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "circOut", delay: 0.3 }}
              />
              <span className="text-white relative z-10">Unstoppable Growth</span>
            </span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 relative">

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white border border-[#DDDCCF] rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden group"
          >

            <div className="absolute top-0 right-0 w-48 h-48 bg-[#A84A4A]/5 rounded-bl-[100px] blur-3xl pointer-events-none group-hover:bg-[#A84A4A]/10 transition-colors duration-500" />

            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#A84A4A] mb-8 relative z-10">Before Joining Us</h3>

            <ul className="space-y-1 relative z-10">
              {before.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 px-3 py-1 -mx-3 rounded-xl hover:bg-[#FDF8F8] transition-colors"
                >
                  <XCircle className="text-[#D25959] shrink-0 mt-0.5" size={22} strokeWidth={2.5} />
                  <span className="text-[#324036] font-medium text-base md:text-[17px] leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow Connectors (Between Cards) */}
          <div className="flex justify-center items-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 -my-12 md:my-0 relative pointer-events-none">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 md:border-[8px] border-[#F8F5EA] text-[#5B8266] transform md:hover:scale-110 transition-transform duration-300 pointer-events-auto">
              <ArrowRight className="rotate-90 md:rotate-0 w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
            </div>
          </div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#2A3B30] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
          >

            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5B8266]/20 rounded-tl-[100px] blur-3xl pointer-events-none group-hover:bg-[#5B8266]/30 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[url('/images/landing/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-8 relative z-10">After DSS Growth System</h3>

            <ul className="space-y-1 relative z-10">
              {after.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 px-3 py-1 -mx-3 rounded-xl hover:bg-[#324036] transition-colors"
                >
                  <div className="bg-[#FF6900]/10 rounded-full p-1 shrink-0 mt-0.5 border border-[#FF6900]/30">
                    <CheckCircle2 className="text-[#FF6900]" size={18} strokeWidth={3} />
                  </div>
                  <span className="text-[#F8F5EA] font-semibold text-base md:text-[17px] leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


