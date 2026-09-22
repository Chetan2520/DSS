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
    <section className="relative py-24 md:py-32 bg-[url('/images/landing/bgg.png')] bg-cover bg-center bg-no-repeat border-t border-[#DDDCCF]">
      <div className="absolute inset-0 bg-white/20"></div> {/* Subtle overlay for better contrast if image is busy */}
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold leading-[1.2] text-[#18221B]"
          >
            The DSS <span className="text-[#5B8266]">Transformation</span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-8 relative">
          
          {/* Mobile Arrow Connector */}
          <div className="md:hidden flex justify-center py-2 relative z-10">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md text-[#5B8266] border-4 border-[#F8F5EA]">
              <ArrowRight className="rotate-90" size={24} strokeWidth={2.5} />
            </div>
          </div>

          {/* Desktop Arrow Connector */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full items-center justify-center border-[6px] border-[#F8F5EA] shadow-xl z-20 text-[#5B8266] transform hover:scale-110 transition-transform duration-300">
            <ArrowRight size={32} strokeWidth={2.5} />
          </div>

          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white/85 backdrop-blur-md border border-red-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden group hover:bg-white/95 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#A84A4A]/5 rounded-bl-[100px] blur-3xl pointer-events-none group-hover:bg-[#A84A4A]/10 transition-colors duration-500" />
            
            <h3 className="font-playfair text-4xl font-bold text-[#A84A4A] mb-10 relative z-10">Before DSS</h3>
            
            <ul className="space-y-6 relative z-10">
              {before.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <XCircle className="text-[#A84A4A]/80 shrink-0 mt-0.5" size={24} strokeWidth={1.5} />
                  <span className="text-[#18221B] font-medium text-[17px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white/95 backdrop-blur-md border border-[#5B8266]/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-[#5B8266]/10 relative overflow-hidden group hover:border-[#5B8266]/40 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5B8266]/[0.03] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5B8266]/5 rounded-tl-[100px] blur-3xl pointer-events-none group-hover:bg-[#5B8266]/10 transition-colors duration-500" />
            
            <h3 className="font-playfair text-4xl font-bold text-[#5B8266] mb-10 relative z-10">After Growth System</h3>
            
            <ul className="space-y-6 relative z-10">
              {after.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-[#5B8266]/10 rounded-full p-0.5 shrink-0 mt-0.5">
                    <CheckCircle2 className="text-[#5B8266]" size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-[#18221B] font-bold text-[17px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
