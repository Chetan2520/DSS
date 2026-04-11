"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const defaultFaqData = [
  {
    question: "Why should I choose Digital Success Solutions for SEO in Indore?",
    answer: "We focus on creating personalized SEO strategies backed by real data and industry insights, helping businesses achieve better rankings, consistent traffic, and measurable growth."
  },
  {
    question: "When can I expect results from SEO services?",
    answer: "SEO takes time to show impact. Most websites start seeing positive changes within a few months, depending on competition, website condition, and strategy implementation."
  },
  {
    question: "Do you help businesses rank in local searches?",
    answer: "Yes, we optimize your business for local search results so you can attract customers in your area and increase calls, visits, and inquiries."
  },
  {
    question: "What all services are covered under your SEO plans?",
    answer: "Our SEO solutions include website optimization, keyword research, content planning, technical improvements, link building, and regular performance monitoring."
  },
  {
    question: "Can SEO increase my sales and conversions?",
    answer: "Yes, by bringing relevant and interested users to your website, SEO improves your chances of converting visitors into customers."
  },
  {
    question: "Do you work on SEO for online stores?",
    answer: "Yes, we optimize e-commerce websites by improving product visibility, enhancing site structure, and targeting high-converting keywords."
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

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqData;

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
          {displayFaqs.map((item, index) => (
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
