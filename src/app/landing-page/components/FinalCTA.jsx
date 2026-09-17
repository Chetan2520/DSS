"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 md:py-40 overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/landing/footer-above.png"
          alt="Ayurveda Background"
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Top Gradient to blend with previous section (#F8F5EA) */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F8F5EA] to-transparent z-0 pointer-events-none"></div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4 text-[#174A2A] font-bold tracking-[0.15em] text-xs md:text-sm uppercase">
              <span>LET'S BUILD A HEALTHIER, BRIGHTER TOMORROW TOGETHER</span>
            </div>
            
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 text-[#18221B]">
              Ready to Grow Your Ayurvedic Brand?
            </h2>
            
            <p className="text-[#3B473B] font-medium text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              We'll audit your current marketing and map out a custom growth strategy for your brand. No sales pitch, just actionable value.
            </p>

            <div className="flex flex-col items-center gap-6">
              <a href="#contact" className="bg-[#174A2A] text-white px-6 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-[#11331D] transition-colors shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto group hover:scale-[1.02] uppercase tracking-wider">
                Get Free Growth Audit
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center justify-center gap-2 text-[#2C382C] font-medium mt-2">
                <span className="font-playfair italic text-xl">Same Roots. Bigger Reach.</span>
                <Leaf className="w-6 h-6 text-[#174A2A] stroke-[1.5]" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
