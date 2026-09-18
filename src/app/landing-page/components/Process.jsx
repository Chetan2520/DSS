"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Settings, Rocket, LineChart, Trophy, Leaf } from "lucide-react";

export default function Process() {
  const steps = [
    { id: "01", title: "Research", desc: "Audience · Competitors · Market · Product · Service" },
    { id: "02", title: "Positioning", desc: "Brand · Offer · Differentiation" },
    { id: "03", title: "Content & Creative", desc: "Education · UGC · Testimonials · Reels" },
    { id: "04", title: "Performance", desc: "Meta Ads · Leads · Retargeting · Testing" },
    { id: "05", title: "Conversion", desc: "Landing Page · WhatsApp · Checkout · CRO" },
    { id: "06", title: "Optimization", desc: "Data · Creative · Audience · Funnel" },
    { id: "07", title: "Scaling", desc: "Winning Strategy · Creatives · Audiences" }
  ];

  return (
    <section id="our-process" className="py-20 md:py-32 bg-[#f8f5ea] relative overflow-hidden isolate">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        <div className="text-center w-full mx-auto mb-20">
          <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] text-[#18221B] mb-6 md:whitespace-nowrap">
            The DSS Ayurveda Growth Engine.
          </h2>
          <p className="text-lg text-[#5F675F]">
            One connected system from research to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-start p-6 md:p-8 bg-white rounded-2xl border border-[#DDDCCF] hover:shadow-lg transition-all"
            >
              <div className="text-4xl font-playfair font-bold text-[#174A2A]/20 mb-6">
                {step.id}
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#18221B] mb-3">{step.title}</h3>
              <p className="text-[#5F675F] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
          
        </div>

      </div>

      {/* Decorative Bottom Right Background Element */}
      <div className="absolute -bottom-12 right-0 md:-bottom-24 w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none z-0 opacity-80 mix-blend-multiply">
        <Image 
          src="/images/landing/bottom_right.png"
          alt="Decorative Background"
          fill
          className="object-contain object-bottom object-right"
        />
      </div>
    </section>
  );
}
