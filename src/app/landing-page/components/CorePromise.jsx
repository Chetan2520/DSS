"use client";
import { motion } from "framer-motion";
import { Target, TrendingUp, BarChart, ArrowDown } from "lucide-react";

export default function CorePromise() {
  const promises = [
    {
      step: "01",
      title: "QUALITY LEADS",
      desc: "Reach the people who are actually relevant to your product or service.",
      tags: ["Meta Ads", "Google Ads", "Audience Strategy"],
      icon: Target,
      color: "text-[#5B8266]",
      bg: "bg-[#5B8266]/10",
      border: "border-[#5B8266]/20"
    },
    {
      step: "02",
      title: "MORE SALES",
      desc: "Turn attention and traffic into customers.",
      tags: ["Landing Pages", "CRO", "Retargeting", "Conversion Strategy"],
      icon: TrendingUp,
      color: "text-[#FF6900]",
      bg: "bg-[#FF6900]/10",
      border: "border-[#FF6900]/20"
    },
    {
      step: "03",
      title: "SCALE",
      desc: "Identify what's working, optimize continuously and scale strategically.",
      tags: ["Data", "Testing", "Optimization", "Performance Marketing"],
      icon: BarChart,
      color: "text-[#FF6900]",
      bg: "bg-[#FF6900]/10",
      border: "border-[#FF6900]/20"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F8F5EA] to-transparent pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-[1.1] text-[#18221B]"
          >
            From Quality Leads to Sales. <br className="hidden md:block" />
            <span className="text-[#5B8266]">From Sales to Scale.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-start">
          {promises.map((promise, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full bg-white rounded-3xl p-7 lg:p-8 border border-[#DDDCCF] shadow-sm hover:shadow-xl hover:shadow-[#5B8266]/10 hover:border-[#5B8266]/30 transition-all duration-500 relative overflow-hidden group flex flex-col h-full"
            >
              <div className="flex items-start mb-8 relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${promise.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 ease-out`}>
                  <promise.icon className={promise.color} size={28} />
                </div>
              </div>

              <h3 className="font-playfair text-[26px] font-semibold text-[#18221B] mb-3 group-hover:text-[#FF6900] transition-colors duration-300 relative z-10">
                {promise.title}
              </h3>
              
              <p className="text-[#5F675F] text-[15px] leading-relaxed mb-6 relative z-10">
                {promise.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-[#18221B]/5 group-hover:border-[#DDDCCF] transition-colors duration-300 relative z-10">
                {promise.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="px-2.5 py-1.5 rounded-lg bg-[#F8F5EA] text-[#5F675F] text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider border border-transparent group-hover:bg-white group-hover:border-[#DDDCCF] transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
