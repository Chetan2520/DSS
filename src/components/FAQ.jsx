"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqData = [
  {
    question: "How long does it take to see results from SEO?",
    answer: "Typically, SEO results become visible within 3 to 6 months of consistent effort. However, significant traffic growth and top-tier rankings usually require a long-term commitment of 6 to 12 months as search engines build trust with your domain."
  },
  {
    question: "Which social media platforms are best for my business?",
    answer: "This depends entirely on your industry and target audience. For professional B2B services, LinkedIn is often best. For lifestyle, fashion, or food brands, Instagram and Pinterest excel. We provide a custom strategy audit to determine exactly where your potential customers spend their time."
  },
  {
    question: "Do you provide custom website development or use templates?",
    answer: "We specialize in custom website development to ensure your site is uniquely tailored to your brand identity and performance needs. While we can work within existing frameworks, our goal is always high-speed, conversion-optimized, and fully custom solutions."
  },
  {
    question: "What is the typical budget required for Google Ads or Meta Ads?",
    answer: "We recommend starting with a flexible budget that allows for initial testing and optimization. Most small businesses start with ₹20,000 to ₹50,000 monthly, while larger brands scale into lakhs. Our focus is always on achieving a strong Return on Ad Spend (ROAS)."
  },
  {
    question: "How do you measure the success of a campaign?",
    answer: "We track clear KPIs such as conversion rate, cost-per-acquisition (CPA), organic traffic growth, and overall sales revenue. You will receive detailed monthly performance reports showing exactly how your investment is driving business growth."
  },
  {
    question: "Can you help with rebranding or creating a new digital identity?",
    answer: "Absolutely! We help businesses define their digital persona through fresh UI/UX design, brand voice development, and high-impact visual strategies to ensure your brand stands out in a crowded market."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.45, 0, 0.55, 1] }}
          className={`shrink-0 ml-4 p-2 cursor-pointer rounded-full border transition-colors duration-300 ${isOpen ? 'bg-white border-white text-black' : 'border-white/20 text-white group-hover:border-white/40'}`}
        >
          <Plus  size={24} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.45, 0, 0.55, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-zinc-500 text-sm md:text-lg leading-relaxed max-w-4xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header - Stood out for FAQ */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl tracking-tighter mb-3 bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed"
          >
            Find answers to common inquiries about our digital marketing and web scaling excellence.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="max-w-5xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default FAQ;
