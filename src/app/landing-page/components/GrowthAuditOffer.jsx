"use client";
import { motion } from "framer-motion";
import { Search, ArrowRight, CheckCircle2 } from "lucide-react";

export default function GrowthAuditOffer() {
  const deliverables = [
    "Ad account performance review",
    "Funnel conversion analysis",
    "Creative & messaging gaps",
    "Actionable scaling roadmap"
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F8F5EA] relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-8 relative z-10">
        
        <div className="bg-[#5B8266] rounded-[3rem] p-8 md:p-12 lg:px-20 lg:py-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Decorative internal background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-full blur-[100px] pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative z-10 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/10 text-white text-[11px] md:text-sm font-bold tracking-widest uppercase mb-8 border border-white/20 shadow-sm backdrop-blur-md">
              <Search size={14} className="md:w-4 md:h-4" />
              Free Growth Audit
            </div>
            
            <h2 className="font-playfair text-[32px] sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.15] text-white mb-6 md:mb-8 tracking-tight">
              Why Isn't Your Marketing Scaling?
            </h2>

            <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 size={20} className="md:w-6 md:h-6 text-[#FF6900] shrink-0 mt-0.5" />
                  <span className="text-white font-medium text-base md:text-xl leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-4 md:px-10 md:py-5 rounded-full bg-[#FF6900] text-white font-bold text-[13px] md:text-base tracking-[0.15em] md:tracking-widest uppercase hover:bg-white hover:text-[#FF6900] transition-colors shadow-xl w-full sm:w-auto group"
            >
              GET MY FREE AUDIT
              <ArrowRight size={18} className="md:w-[22px] md:h-[22px] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[440px] shrink-0 relative z-10"
          >
            <div className="bg-white rounded-[2rem] p-10 md:p-12 shadow-2xl relative border border-[#DDDCCF]">
              
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#18221B] mb-8 border-b border-[#DDDCCF] pb-6">
                What you'll discover:
              </h3>
              
              <div className="space-y-10">
                <div>
                  <div className="text-xs md:text-sm font-bold text-[#5F675F] uppercase tracking-wider mb-2">Current State</div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl md:text-5xl font-black text-[#A84A4A] leading-none">High</span>
                    <span className="text-[#A84A4A] font-bold mb-1">CAC</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#FADFDF] rounded-full mt-4 overflow-hidden">
                    <div className="w-[85%] h-full bg-[#A84A4A]" />
                  </div>
                </div>

                <div>
                  <div className="text-xs md:text-sm font-bold text-[#5F675F] uppercase tracking-wider mb-2">Potential State</div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl md:text-5xl font-black text-[#5B8266] leading-none">Lower</span>
                    <span className="text-[#5B8266] font-bold mb-1">CAC</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#F8F5EA] rounded-full mt-4 overflow-hidden">
                    <div className="w-[45%] h-full bg-[#5B8266]" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
