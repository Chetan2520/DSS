"use client";
import { motion } from "framer-motion";

export default function Challenge() {
  const challenges = [
    {
      title: "Ads are running, but quality leads are low.",
      description: "Your campaigns generate enquiries, but too many aren't the right fit."
    },
    {
      title: "Sales aren't growing despite increasing ad spend.",
      description: "More traffic doesn't always mean more customers."
    },
    {
      title: "Your social media gets attention, but not enough business.",
      description: "Likes and followers don't necessarily translate into revenue."
    },
    {
      title: "Your website gets visitors, but conversions remain low.",
      description: "Potential customers leave without taking action."
    },
    {
      title: "You're unsure what's actually working.",
      description: "Ads, creatives, landing pages and follow-ups operate separately, making it difficult to identify where growth is being lost."
    }
  ];

  return (
    <section id="challenge" className="py-20 md:py-32 bg-white border-t border-[#DDDCCF]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">

        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-3xl lg:text-3xl font-bold leading-[1.1] mb-6 text-[#18221B] tracking-tight"
          >
            Your Brand Doesn't Need <br className="sm:hidden" />
            <span className="italic text-[#5B8266]">More</span> Marketing. <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>It Needs <span className="text-[#5B8266]">Better</span> Marketing.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-[#5F675F] max-w-2xl mx-auto"
          >
            <p className="mb-2">You may already be running ads, posting content and investing in your website.</p>
            <p className="font-semibold text-[#18221B]">But are those efforts actually translating into growth?</p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 lg:sticky lg:top-[120px] flex flex-col"
          >
            <h3 className="font-playfair text-4xl md:text-[42px] font-bold leading-[1.1] mb-6 text-[#18221B]">
              Are You Facing <br />
              <span className="whitespace-nowrap">These Challenges?</span>
            </h3>

            <div className="p-6 bg-[#f8f5ea] rounded-2xl border border-[#DDDCCF] mt-8">
              <h4 className="font-bold text-[#18221B] mb-3 uppercase tracking-wider text-sm">The Real Problem</h4>
              <p className="text-[#18221B] leading-relaxed">
                Your marketing channels may be working individually, but your <span className="font-bold text-[#5B8266]">customer acquisition system</span> isn't working together.
              </p>
            </div>

            <p className="text-[#5F675F] text-lg leading-relaxed mt-8">
              We help identify where your funnel is losing potential customers and build a high-converting system to fix it.
            </p>
          </motion.div>

          {/* Right Content / Problem List */}
          <div className="lg:w-2/3 w-full">
            <div className="flex flex-col border-t border-[#5B8266]/20">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group py-8 md:py-10 border-b border-[#5B8266]/20 hover:border-[#5B8266] transition-colors duration-500 flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                >
                  <div className="font-playfair text-3xl md:text-3xl font-black text-[#5B8266]/20 group-hover:text-[#5B8266] transition-colors duration-500 select-none shrink-0 mt-1">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-playfair text-4xl font-bold text-[#18221B] mb-3 group-hover:text-[#5B8266] transition-colors duration-500">
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
