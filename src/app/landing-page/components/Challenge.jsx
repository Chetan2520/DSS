"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Challenge() {
  const challenges = [
    {
      title: "Trust",
      description: "Building unshakeable confidence before asking the customer to act or make a purchase."
    },
    {
      title: "Education",
      description: "Translating complex products, ingredients, treatments, and benefits into easily digestible formats."
    },
    {
      title: "Competition",
      description: "Differentiating your brand and carving out a unique identity in a deeply crowded Ayurveda market."
    },
    {
      title: "Creative Fatigue",
      description: "Combating ad fatigue by keeping communication fresh through structured, relentless creative testing."
    },
    {
      title: "Lead Quality",
      description: "Optimizing algorithms and funnels for relevant, high-intent enquiries, rather than just chasing volume."
    },
    {
      title: "Conversion & Scaling",
      description: "Connecting media buying, funnel optimization, and post-click conversion into one seamless system."
    }
  ];

  return (
    <section id="challenge" className="py-20 md:py-32 bg-[#F8F5EA] border-t border-[#DDDCCF]">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left Content with Image - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 lg:sticky lg:top-[80px] flex flex-col"
          >

            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 text-[#18221B]">
              Ayurveda is not just
              <span className="italic text-[#174A2A]"> product.</span>
            </h2>

            {/* Premium Embedded Image */}
            <div className="relative w-full max-w-[600px] aspect-video md:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl shadow-[#174A2A]/10 border border-[#DDDCCF]">
              <Image
                src="/images/landing/premium-product.jpg"
                alt="Premium Ayurveda Products"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18221B]/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right Content / Editorial List */}
          <div className="lg:w-1/2 w-full pt-8 lg:pt-0">
            <div className="flex flex-col border-t border-[#174A2A]/20">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group py-8 md:py-10 border-b border-[#174A2A]/20 hover:border-[#174A2A] transition-colors duration-500 flex flex-col md:flex-row gap-6 md:gap-12 items-start"
                >
                  <div className="font-playfair text-4xl md:text-5xl font-black text-[#174A2A]/20 group-hover:text-[#174A2A] transition-colors duration-500 select-none">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-playfair text-3xl font-bold text-[#18221B] mb-4 group-hover:text-[#174A2A] transition-colors duration-500">
                      {challenge.title}
                    </h3>
                    <p className="text-[#5F675F] text-lg leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
