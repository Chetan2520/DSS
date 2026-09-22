"use client";
import { motion } from "framer-motion";
import { TrendingUp, Share2, LayoutTemplate, Clapperboard, Repeat, MessageCircle, Search } from "lucide-react";

export default function ServicesList() {
  const services = [
    {
      title: "Performance Marketing",
      subtitle: "Meta Ads + Google Ads",
      desc: "Generate relevant traffic, enquiries and purchase intent through data-driven campaigns.",
      icon: TrendingUp
    },
    {
      title: "Social Media Marketing",
      subtitle: "Instagram, YouTube & LinkedIn",
      desc: "Build authority and trust through strategic content, reels, educational posts and brand storytelling.",
      icon: Share2
    },
    {
      title: "Landing Pages & CRO",
      subtitle: "Conversion Optimization",
      desc: "Turn paid traffic into more enquiries and customers through conversion-focused landing pages.",
      icon: LayoutTemplate
    },
    {
      title: "Creative & Video Marketing",
      subtitle: "Scroll-stopping content",
      desc: "Create scroll-stopping creatives and videos designed around your audience and offer.",
      icon: Clapperboard
    },
    {
      title: "Retargeting",
      subtitle: "Recover lost traffic",
      desc: "Reconnect with people who visited, engaged or showed purchase intent but didn't convert.",
      icon: Repeat
    },
    {
      title: "CRM & WhatsApp Automation",
      subtitle: "Lead Management",
      desc: "Build structured follow-up systems so valuable leads don't get lost after the first enquiry.",
      icon: MessageCircle
    },
    {
      title: "SEO",
      subtitle: "Organic Visibility",
      desc: "Build long-term organic visibility for relevant search terms and high-intent audiences.",
      icon: Search
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8F5EA] border-t border-[#DDDCCF]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-6 text-[#18221B] tracking-tight"
          >
            Everything Your Brand Needs <br className="sm:hidden" />
            to Build a Stronger <br className="hidden sm:block" />
            <span className="text-[#5B8266]">Acquisition Funnel.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            // Bento Grid Logic
            const isFeatured = index === 0; // Performance Marketing
            const isWide = index === 6;     // SEO
            const colSpan = isFeatured || isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1';
            
            // Styling logic based on position
            const cardBg = isFeatured ? 'bg-[#5B8266]' : 'bg-white';
            const textColor = isFeatured ? 'text-white' : 'text-[#18221B]';
            const subtitleColor = isFeatured ? 'text-[#FF6900]' : 'text-[#5B8266]';
            const descColor = isFeatured ? 'text-white/80' : 'text-[#5F675F]';
            const iconBg = isFeatured ? 'bg-[#FF6900]/20' : 'bg-[#F8F5EA]';
            const iconColor = isFeatured ? 'text-[#FF6900]' : 'text-[#5B8266]';
            const hoverIconBg = isFeatured ? 'group-hover:bg-[#FF6900]' : 'group-hover:bg-[#5B8266]';
            const hoverTitle = isFeatured ? 'group-hover:text-white' : 'group-hover:text-[#5B8266]';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colSpan} ${cardBg} p-8 md:p-10 rounded-[2rem] border border-[#DDDCCF] shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#5B8266]/40 transition-all duration-500 group flex flex-col h-full min-h-[320px] relative overflow-hidden`}
              >
                <div className="flex-1 flex flex-col relative z-10">
                  {/* Top Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-8 ${hoverIconBg} transition-colors duration-500 shrink-0 shadow-inner`}>
                    <service.icon className={`${iconColor} group-hover:text-white transition-colors duration-500`} size={28} />
                  </div>
                  
                  {/* Bottom Text Content - Pushed down by mt-auto */}
                  <div className="mt-auto flex flex-col">
                    <p className={`text-[11px] ${subtitleColor} font-bold mb-3 tracking-[0.2em] uppercase`}>
                      {service.subtitle}
                    </p>
                    
                    <h3 className={`font-playfair font-bold ${textColor} mb-4 ${hoverTitle} transition-colors duration-500 ${isFeatured || isWide ? 'text-3xl md:text-4xl lg:text-[42px] leading-[1.1]' : 'text-2xl md:text-[28px] leading-tight'}`}>
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
