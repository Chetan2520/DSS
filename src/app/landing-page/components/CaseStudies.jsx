"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudies() {
  const tags = [
    "Winning Creative Identification",
    "Audience Testing",
    "Performance Optimization",
    "Conversion-Focused Strategy",
    "Continuous Scaling"
  ];

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold leading-[1.1] text-[#18221B] mb-4">
            From strategy to scale.
          </h2>
          <p className="text-lg text-[#5F675F]">
            Results that show the power of the strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-[#F8F5EA] rounded-[40px] p-8 md:p-16 border border-[#DDDCCF]">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-5xl md:text-7xl font-bold text-[#174A2A] mb-4">
              ₹50L+
            </h3>
            <p className="font-medium text-[#18221B] tracking-widest uppercase mb-8">
              PER MONTH Revenue Scale Achieved
            </p>
            
            <div className="flex flex-col gap-4">
              {tags.map((tag, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6F8B63]" />
                  <span className="text-[#5F675F] font-medium">{tag}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#174A2A]/10 border border-[#DDDCCF]"
          >
            <Image 
              src="/images/landing/ecommerce-growth.jpg" 
              alt="Revenue Scale Achieved" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
