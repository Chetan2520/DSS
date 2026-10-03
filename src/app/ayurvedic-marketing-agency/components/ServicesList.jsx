"use client";
import { motion } from "framer-motion";
import { TrendingUp, Share2, LayoutTemplate, Clapperboard, Repeat, MessageCircle, Search, Sparkles } from "lucide-react";

export default function ServicesList() {
  const services = [
    {
      title: "Performance Marketing",
      subtitle: "Meta Ads + Google Ads",
      desc: "Generate highly relevant traffic and high-intent enquiries through mathematically scaled, data-driven campaigns.",
      icon: TrendingUp
    },
    {
      title: "Social Media Marketing",
      subtitle: "Instagram, YouTube & LinkedIn",
      desc: "Build authority and community trust through strategic storytelling, viral reels, and educational content.",
      icon: Share2
    },
    {
      title: "Landing Pages & CRO",
      subtitle: "Conversion Optimization",
      desc: "Turn paid traffic into profitable customers through high-converting, meticulously designed landing pages.",
      icon: LayoutTemplate
    },
    {
      title: "Creative & Video Marketing",
      subtitle: "Scroll-stopping content",
      desc: "Create psychological hooks and scroll-stopping visuals designed specifically around your core audience.",
      icon: Clapperboard
    },
    {
      title: "Retargeting Systems",
      subtitle: "Recover lost traffic",
      desc: "Deploy omnipresent retargeting to reconnect with prospects who engaged but didn't convert.",
      icon: Repeat
    },
    {
      title: "CRM & WhatsApp Auto",
      subtitle: "Lead Management",
      desc: "Build frictionless follow-up funnels so valuable leads never slip through the cracks.",
      icon: MessageCircle
    },
    {
      title: "Search Engine Optimization",
      subtitle: "Organic Visibility",
      desc: "Dominate search rankings and capture long-term organic demand for high-intent keywords.",
      icon: Search
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8F5EA] border-t border-[#DDDCCF] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#5B8266]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#FF6900]/5 blur-[120px]" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DDDCCF] shadow-sm mb-6"
          >
            <Sparkles size={16} className="text-[#FF6900]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#5F675F]">Growth Engine</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] mb-5 text-[#18221B] tracking-tight"
          >
            Build a Stronger <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B8266] to-[#3a5441]">Acquisition Funnel.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#5F675F] text-base md:text-lg max-w-xl mx-auto"
          >
            A complete ecosystem of interconnected services working together to turn strangers into high-value customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isFeatured = index === 0; 
            const isWide = index === 6;     
            const colSpan = isFeatured || isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1';
            
            const cardBg = isFeatured ? 'bg-gradient-to-br from-[#5B8266] to-[#3f5b47]' : 'bg-white';
            const textColor = isFeatured ? 'text-white' : 'text-[#18221B]';
            const subtitleColor = isFeatured ? 'text-[#FF6900]' : 'text-[#5B8266]';
            const descColor = isFeatured ? 'text-white/80' : 'text-[#5F675F]';
            const iconBg = isFeatured ? 'bg-white/10 backdrop-blur-sm' : 'bg-[#F8F5EA]';
            const iconColor = isFeatured ? 'text-white' : 'text-[#5B8266]';
            const hoverIconBg = isFeatured ? 'group-hover:bg-[#FF6900]' : 'group-hover:bg-[#5B8266]';
            const hoverTitle = isFeatured ? 'group-hover:text-white' : 'group-hover:text-[#5B8266]';
            const borderColor = isFeatured ? 'border-transparent' : 'border-[#DDDCCF]';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 50 }}
                className={`${colSpan} ${cardBg} p-8 md:p-10 rounded-[2rem] border ${borderColor} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full min-h-[340px] relative overflow-hidden cursor-default`}
              >
                {/* Decorative background shape for featured card */}
                {isFeatured && (
                  <motion.div 
                    animate={{ 
                      rotate: [0, 5, 0, -5, 0],
                      scale: [1, 1.05, 1, 1.05, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FF6900]/10 rounded-full blur-3xl"
                  />
                )}
                {/* Background Pattern for normal cards */}
                {!isFeatured && (
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#F8F5EA] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full pointer-events-none" />
                )}

                <div className="flex-1 flex flex-col relative z-10">
                  {/* Top Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mb-8 ${hoverIconBg} transition-colors duration-500 shrink-0 shadow-inner`}
                  >
                    <service.icon className={`${iconColor} group-hover:text-white transition-colors duration-500`} size={32} strokeWidth={1.5} />
                  </motion.div>
                  
                  {/* Bottom Text Content */}
                  <div className="mt-auto flex flex-col">
                    <p className={`text-[11px] ${subtitleColor} font-bold mb-3 tracking-[0.2em] uppercase`}>
                      {service.subtitle}
                    </p>
                    
                    <h3 className={`font-playfair font-semibold ${textColor} mb-4 ${hoverTitle} transition-colors duration-500 ${isFeatured || isWide ? 'text-3xl md:text-4xl lg:text-[42px] leading-[1.1]' : 'text-2xl md:text-[28px] leading-tight'}`}>
                      {service.title}
                    </h3>
                    
                    <p className={`${descColor} leading-relaxed ${isFeatured || isWide ? 'text-lg md:text-xl max-w-xl' : 'text-[15px]'}`}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
