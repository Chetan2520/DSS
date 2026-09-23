"use client";
import { motion } from "framer-motion";
import { Magnet, HeartHandshake, MousePointerClick, MessagesSquare, Rocket } from "lucide-react";

export default function GrowthEngine() {
  const steps = [
    {
      id: "01",
      title: "ATTRACT",
      icon: Magnet,
      items: ["Meta Ads", "Google Ads", "Social Media", "Creative Strategy"]
    },
    {
      id: "02",
      title: "ENGAGE",
      icon: HeartHandshake,
      items: ["Educational Content", "Video Marketing", "Brand Messaging", "Social Proof"]
    },
    {
      id: "03",
      title: "CONVERT",
      icon: MousePointerClick,
      items: ["Landing Pages", "Website CRO", "Offer Strategy", "Lead Forms"]
    },
    {
      id: "04",
      title: "NURTURE",
      icon: MessagesSquare,
      items: ["Retargeting", "WhatsApp Follow-ups", "CRM", "Lead Nurturing"]
    },
    {
      id: "05",
      title: "SCALE",
      icon: Rocket,
      items: ["Campaign Optimization", "Creative Testing", "Audience Testing", "Budget Scaling"]
    }
  ];

  return (
    <section id="growth-system" className="py-12 md:py-20 bg-[url('/images/landing/bg2.png')] bg-cover bg-center bg-no-repeat text-[#18221B] overflow-hidden relative border-t border-[#DDDCCF]">
      {/* Light overlay to maintain readability of the heading */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-[28px] sm:text-3xl md:text-5xl font-semibold leading-[1.2] mb-6"
          >
            We Don't Just Run Ads. <br className="hidden md:block" />
            <span className="text-[#FF6900]">We Build the System <br className="md:hidden" /> Behind Your Growth.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[#DDDCCF] rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:shadow-[#FF6900]/10 hover:border-[#FF6900]/30 transition-all duration-300 flex flex-col h-full relative group hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FF6900]/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#FF6900] transition-colors duration-300">
                <step.icon className="text-[#FF6900] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              
              <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-6 tracking-widest text-[#18221B] relative z-10 uppercase">{step.title}</h3>
              
              <ul className="flex-1 flex flex-col gap-3 relative z-10">
                {step.items.map((item, iIndex) => (
                  <li key={iIndex} className="text-[#5F675F] font-medium text-sm flex items-start gap-2">
                    <span className="text-[#FF6900] mt-1 text-[10px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
