"use client";
import { motion } from "framer-motion";
import { DollarSign, Briefcase, FileCode2, LineChart, Target, ArrowRight } from "lucide-react";

export default function Transparency() {
  const steps = [
    { title: "Ad Spend", icon: DollarSign },
    { title: "Agency Fees", icon: Briefcase },
    { title: "Creative & Dev", icon: FileCode2 },
    { title: "Performance", icon: LineChart },
    { title: "Leads / Sales", icon: Target }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8F5EA] text-[#18221B]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold leading-[1.2] mb-6 text-[#18221B]"
          >
            You Should Always Know Where Your <br />
            <span className="text-[#5B8266]">Marketing Is Going.</span>
          </motion.h2>
          <p className="text-lg text-[#5F675F] font-medium">
            No hidden costs. No black-box strategies. Just absolute clarity.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            
            <div className="hidden md:block absolute top-1/2 left-[10%] w-[80%] h-[1px] border border-dashed border-[#DDDCCF] z-0" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center group w-full md:w-auto"
              >
                <div className="w-24 h-24 rounded-full bg-white border-2 border-[#DDDCCF] flex items-center justify-center mb-6 shadow-sm group-hover:border-[#5B8266] group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                  <step.icon className="text-[#5B8266] group-hover:scale-110 transition-transform duration-300" size={36} />
                </div>
                <h3 className="font-playfair font-bold text-sm md:text-base text-[#18221B] tracking-widest uppercase">{step.title}</h3>

                {index < steps.length - 1 && (
                  <div className="md:hidden mt-4 mb-4">
                    <ArrowRight className="text-[#DDDCCF] rotate-90" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 max-w-3xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center md:text-left bg-white py-6 px-10 rounded-full shadow-sm border border-[#DDDCCF]"
        >
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF6900]" />
            <span className="font-bold tracking-widest uppercase text-xs md:text-sm text-[#18221B]">Clear reporting</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF6900]" />
            <span className="font-bold tracking-widest uppercase text-xs md:text-sm text-[#18221B]">Clear communication</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF6900]" />
            <span className="font-bold tracking-widest uppercase text-xs md:text-sm text-[#18221B]">Clear ownership</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
