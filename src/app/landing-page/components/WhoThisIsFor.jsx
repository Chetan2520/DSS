"use client";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function WhoThisIsFor() {
  const isFor = [
    "Ayurvedic & Herbal D2C brands",
    "Wellness brands",
    "Ayurveda clinics",
    "Established brands looking to scale",
    "Businesses ready to invest consistently in marketing",
    "Brands looking for measurable acquisition"
  ];

  const notFor = [
    "You're only looking for the cheapest agency.",
    "You expect guaranteed revenue without testing.",
    "You don't want to invest in creatives and infrastructure.",
    "You're looking for overnight results.",
    "You're not willing to share data to improve performance."
  ];

  return (
    <section className="py-12 md:py-20 bg-[#F8F5EA] border-t border-[#DDDCCF]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Who this is FOR */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#5B8266] p-10 md:p-14 rounded-[2.5rem] shadow-2xl shadow-[#5B8266]/20 relative overflow-hidden group"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full blur-3xl pointer-events-none" />

            <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-white mb-4 md:mb-5 leading-[1.2] md:leading-[1.1] tracking-tight">
              This Is For Brands <br className="sm:hidden" />
              That Want to Grow, <br className="hidden lg:block" />
              <span className="text-[#FF6900]">Not Just Post.</span>
            </h3>
            <p className="text-white/80 mb-8 md:mb-10 font-medium text-base md:text-lg">We are the right fit if you identify with the following:</p>

            <ul className="space-y-5 md:space-y-6 relative z-10">
              {isFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  <div className="bg-white/10 rounded-full p-1 shrink-0 mt-0.5">
                    <CheckCircle2 size={18} className="md:w-5 md:h-5 text-[#F8F5EA]" strokeWidth={2.5} />
                  </div>
                  <span className="text-white font-semibold text-base md:text-[17px] leading-snug md:leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Who this is NOT FOR */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-white p-8 sm:p-10 md:p-14 rounded-[2.5rem] border border-[#DDDCCF] shadow-sm relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A84A4A]/5 rounded-bl-[100px] blur-3xl pointer-events-none" />

            <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#18221B] mb-4 md:mb-5 leading-[1.2] md:leading-[1.1] tracking-tight">
              We May <span className="text-[#A84A4A]">Not</span> Be <br className="sm:hidden" />
              the Right Fit If...
            </h3>
            <p className="text-[#5F675F] mb-8 md:mb-10 font-medium text-base md:text-lg">We want to ensure a mutually beneficial partnership.</p>

            <ul className="space-y-5 md:space-y-6 relative z-10">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  <div className="bg-[#A84A4A]/10 rounded-full p-1 shrink-0 mt-0.5">
                    <XCircle size={18} className="md:w-5 md:h-5 text-[#A84A4A]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#5F675F] font-medium text-base md:text-[17px] leading-snug md:leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl font-playfair font-semibold text-[#5B8266] italic">
            "Our goal is not to sell you more services. It's to build a system that makes your marketing more measurable and scalable."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
