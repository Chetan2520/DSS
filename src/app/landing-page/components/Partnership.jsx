"use client";
import { motion } from "framer-motion";
import { Users, CheckCircle2 } from "lucide-react";

export default function Partnership() {
  const points = [
    "Dedicated Manager",
    "Slack / WhatsApp Comm",
    "Weekly Reports",
    "Monthly Strategy",
    "Performance Tracking"
  ];

  return (
    <section id="partnership" className="py-20 md:py-32 bg-[#F8F5EA] overflow-hidden border-t border-[#DDDCCF]">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          
          <h2 className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] md: lg: mb-6 text-[#18221B]">
            We work as an extension <br className="hidden md:block" />
            of your <span className="text-[#5B8266]">brand.</span>
          </h2>
          
          <p className="text-[#5F675F] text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Clear communication. Transparent reporting. Aligned goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-[#DDDCCF] shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-[#5B8266]" />
                <span className="font-medium text-[#18221B]">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
