"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AuthorityStats() {
  const stats = [
    { value: "6+ YEARS", label: "Specialized Ayurveda & Herbal Experience" },
    { value: "45+", label: "Ayurveda & Herbal Brands Worked With" },
    { value: "₹10Cr+", label: "Advertising Spend Managed" },
    { value: "1,600+", label: "Projects Delivered" },
    { value: "950+", label: "Clients Served" },
    { value: "30+", label: "In-House Experts" }
  ];

  return (
    <section id="authority-stats" className="py-20 md:py-32 overflow-hidden border-t border-[#DDDCCF] relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/landing/bgg.png"
          alt="Authority Background"
          fill
          className="object-cover object-center opacity-40"
          quality={100}
        />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.1] mb-4 text-[#18221B]">
            Experience you can see <br className="hidden md:block" />
            <span className="text-[#174A2A]">in the numbers.</span>
          </h2>
          <p className="text-[#5F675F] text-base md:text-lg leading-relaxed">
            Dedicated Ayurveda & Herbal team.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 sm:gap-x-8 sm:gap-y-16 lg:gap-x-12 lg:gap-y-24 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-3xl sm:text-4xl md:text-6xl font-playfair font-bold text-[#174A2A] mb-3 md:mb-4">
                {stat.value}
              </div>
              <div className="text-[#5F675F] font-medium max-w-[200px] leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
