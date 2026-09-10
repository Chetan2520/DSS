"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, QuoteIcon, TextQuote } from "lucide-react";

const Quotes = () => {
  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl  font-medium text-white leading-[1.2] tracking-tight   max-w-4xl mx-auto">
            <QuoteIcon /> Growth is never an accident. It is the result of
            forces working together."
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Quotes;
