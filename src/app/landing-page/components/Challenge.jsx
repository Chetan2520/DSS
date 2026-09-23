"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AlertCircle, TrendingDown, Target } from "lucide-react";

export default function Challenge() {
  const painPoints = [
    {
      title: "Poor Targeting & Low-Quality Leads",
      description: "Ads generate traffic, but too many inquiries aren't the right fit for your Ayurvedic brand.",
      icon: Target
    },
    {
      title: "Low Conversions & Wasted Spend",
      description: "Your website gets visitors, but they leave without buying, burning through your ad budget.",
      icon: TrendingDown
    },
    {
      title: "Unpredictable & Stagnant Growth",
      description: "Marketing efforts are disconnected, making it impossible to scale sales predictably.",
      icon: AlertCircle
    }
  ];

  return (
    <section id="challenge" className="py-12 md:py-20 bg-white border-t border-[#DDDCCF] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Content - Simplified Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex flex-col"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold leading-[1.1] mb-6 text-[#18221B]">
              Is Your Funnel <br className="hidden sm:block" />
              <span className="text-[#FF6900]">Losing Growth?</span>
            </h2>

            <p className="text-[#5F675F] text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              You don't need <span className="italic text-[#5B8266] font-semibold">more</span> marketing. You need a system that fixes the leaks in your customer acquisition journey.
            </p>

            <div className="flex flex-col gap-6">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#F8F5EA] group-hover:bg-[#FF6900]/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <point.icon className="text-[#5B8266] group-hover:text-[#FF6900] transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#18221B] text-lg mb-1">{point.title}</h3>
                    <p className="text-[#5F675F] text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Generated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="/images/landing/funnel_challenge.jpg" 
                alt="Marketing Funnel Challenge" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
