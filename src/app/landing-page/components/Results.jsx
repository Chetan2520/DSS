"use client";
import { motion } from "framer-motion";

export default function Results() {
  const results = [
    { title: "Ayurvedic Product Brand", stat: "₹XX", sub: "Revenue / X.X ROAS" },
    { title: "Herbal Brand", stat: "XX%", sub: "Improvement / ₹XX CPL" },
    { title: "Ayurvedic Clinic", stat: "XX", sub: "Qualified Enquiries / Month" },
    { title: "D2C Ayurveda Brand", stat: "₹XX", sub: "Revenue / X.X ROAS" }
  ];

  return (
    <section id="results" className="py-20 md:py-32 bg-[#fdf8ed] text-[#18221B]">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.1] mb-4">
            Different challenges. Different strategies. <br className="hidden md:block" />
            <span className="text-[#174A2A] italic">Measurable outcomes.</span>
          </h2>
          <p className="text-[#5F675F] uppercase tracking-wider text-xs md:text-sm font-medium">
            Use verified client data only.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {results.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-[#DDDCCF] text-center flex flex-col justify-center min-h-[200px] md:min-h-[250px] hover:-translate-y-2 transition-transform duration-300 shadow-sm"
            >
              <h3 className="font-medium text-[#3B473B] text-sm md:text-base mb-4 md:mb-6">{item.title}</h3>
              <p className="text-3xl md:text-5xl font-playfair font-bold text-[#174A2A] mb-2">{item.stat}</p>
              <p className="text-[#5F675F] text-xs md:text-sm uppercase tracking-wider">{item.sub}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
