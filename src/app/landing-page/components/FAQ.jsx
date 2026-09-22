"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do you only work with Ayurveda brands?",
      answer: "We specialize deeply in Ayurveda, Herbal, and Wellness D2C brands as well as Ayurveda Clinics. Our entire framework—from compliance-friendly creatives to audience targeting—is built around this ecosystem."
    },
    {
      question: "What is the minimum ad spend required?",
      answer: "While it varies based on your goals, we generally recommend a minimum monthly ad spend of ₹1 Lakh to ₹3 Lakhs to gather meaningful data, run proper creative tests, and start seeing scalable results."
    },
    {
      question: "Do you guarantee sales or ROAS?",
      answer: "We guarantee a tested, data-driven, and highly optimized growth system. We do not make arbitrary revenue guarantees because real growth depends on multiple factors including product quality, market demand, and pricing. Our job is to build the highest-converting machine possible for your brand."
    },
    {
      question: "How long does it take to see results?",
      answer: "Typically, it takes 4 to 6 weeks to build the baseline funnel, run initial creative tests, gather data, and start optimizing. Once the baseline is established, we scale the winning combinations."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-3xl font-bold leading-[1.1] text-[#18221B] mb-4"
          >
            Frequently Asked <span className="text-[#5B8266]">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-[#DDDCCF] rounded-2xl overflow-hidden bg-[#F8F5EA]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-[#18221B] text-lg pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-[#5B8266] text-white' : 'bg-white text-[#5B8266] border border-[#DDDCCF]'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-[#DDDCCF]/50">
                      <p className="text-[#5F675F] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
