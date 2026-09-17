"use client";
import { motion } from "framer-motion";
import { Target, PenTool, TrendingUp, RefreshCw, BarChart, Users } from "lucide-react";

export default function WhyDss() {
  const points = [
    { title: "Strategy", icon: <Target className="w-5 h-5" /> },
    { title: "Creative", icon: <PenTool className="w-5 h-5" /> },
    { title: "Media Buying", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Conversion Optimization", icon: <RefreshCw className="w-5 h-5" /> },
    { title: "Data & Tracking", icon: <BarChart className="w-5 h-5" /> },
    { title: "Client Success", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <section id="why-dss" className="py-20 md:py-32 bg-[#fdf8ed] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            <h2 className="font-playfair text-3xl md:text-4xl font-bold leading-[1.1] mb-6 text-[#18221B]">
              We don't guess. <br />
              We execute based on <span className="text-[#174A2A]">data.</span>
            </h2>
            
            <p className="text-[#5F675F] text-lg leading-relaxed mb-10">
              A full-stack approach to growth. Everything you need to scale, managed by experts who understand the Ayurveda industry.
            </p>

            <div className="bg-[#F8F5EA] p-6 md:p-8 rounded-2xl border border-[#DDDCCF]">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#18221B]">
                One Niche. One Focus. Real Results.
              </h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#DDDCCF] flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#EFE9DC] text-[#174A2A] flex items-center justify-center group-hover:bg-[#174A2A] group-hover:text-white transition-colors duration-300">
                  {point.icon}
                </div>
                <h3 className="font-medium text-[#18221B]">{point.title}</h3>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
