"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const categories = [
    "AYURVEDIC PRODUCTS",
    "HERBAL PRODUCTS",
    "WELLNESS BRANDS",
    "D2C AYURVEDA",
    "AYURVEDIC CLINICS",
    "NATURAL BRANDS"
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#fdf8ed] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.1] mb-4 text-[#18221B]">
            Ayurveda & Herbal brands <br className="hidden md:block" />
            <span className="text-[#174A2A]">we've worked with.</span>
          </h2>
          <p className="text-[#5F675F] text-base md:text-lg leading-relaxed">
            45+ Ayurveda & Herbal brands served across India.
          </p>
        </div>

        {/* Categories Marquee/Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 md:mb-20 max-w-4xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-5 py-2.5 bg-white text-[#18221B] text-xs md:text-sm font-bold tracking-widest uppercase rounded-full border border-[#DDDCCF] shadow-sm"
            >
              {cat}
            </motion.div>
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 opacity-80 hover:opacity-100 transition-opacity duration-500">
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-[4/3] bg-white rounded-xl md:rounded-2xl flex items-center justify-center border border-[#DDDCCF] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Image 
                src={`/images/landing/ayurveda-logo${num}.png`}
                alt={`Ayurveda Brand ${num}`}
                fill
                className="object-contain p-4 mix-blend-multiply"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
