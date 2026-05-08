"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What digital services do you offer?",
    answer: "We provide comprehensive digital solutions including Website Development (React, Next.js), UI/UX Design, Performance Marketing (Google Ads, PPC), SEO Optimization, and Branding strategies tailored to your business needs."
  },
  {
    question: "How long does a typical website project take?",
    answer: "A standard professional website usually takes 2-4 weeks, while complex web applications can take 6-12 weeks. We prioritize quality and performance-driven results in every timeline."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we believe in long-term partnerships. We provide dedicated technical support, maintenance, and strategic guidance to ensure your platform continues to perform flawlessly."
  },
  {
    question: "How do you handle SEO and Performance?",
    answer: "Every project we build is SEO-friendly and performance-driven from the ground up. We use modern frameworks like Next.js for speed and implement best practices in technical SEO and conversion optimization."
  },
  {
    question: "Can you help with digital marketing as well?",
    answer: "Absolutely. Our performance marketing team specializes in data-driven Google Ads and PPC campaigns focused on generating high-quality leads and maximum ROI for your business."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? (
            <Minus className="w-6 h-6 text-blue-500" />
          ) : (
            <Plus className="w-6 h-6 text-zinc-600 group-hover:text-white" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-8 text-zinc-500 leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const displayData = faqs || faqData;

  return (
    <section className="relative py-24 px-6 md:px-12 bg-black overflow-hidden border-t border-white/5">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4"
          >
            Frequently Asked <span className="text-zinc-400 italic">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500"
          >
            Everything you need to know about our process and services.
          </motion.p>
        </div>

        <div className="mt-8">
          {displayData.map((item, index) => (
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
    </section>
  );
};

export default FAQ;
