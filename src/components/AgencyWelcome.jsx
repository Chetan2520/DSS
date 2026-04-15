"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, BarChart3, MapPin } from 'lucide-react';

const BentoServices = () => {
  return (
    <section className="bg-black py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-4"
            >
              <MapPin size={16} /> BASED IN INDORE, INDIA
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
              DIGITAL <br /> <span className="text-orange-500">SUCCESS</span> SOLUTIONS
            </h2>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl max-w-sm border-l border-zinc-800 pl-6 mb-2">
            Your growth partners, specialized in boosting brand visibility and driving measurable results.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
          
          {/* Main Hero Tile */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-8 bg-zinc-900 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden group"
          >
            <div className="relative z-10">
              <Rocket className="text-orange-500 mb-6" size={48} />
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Boosting Brand <br /> Visibility
              </h3>
            </div>
            <p className="text-zinc-400 text-lg relative z-10">
              We don't just market; we dominate. Using data-driven strategies to make your brand the talk of the town.
            </p>
            {/* Background Accent */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full group-hover:bg-orange-500/20 transition-all" />
          </motion.div>

          {/* Indore Special Tile */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-4 bg-orange-500 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center gap-4"
          >
            <h4 className="text-black font-black text-3xl">#1 Agency in Indore</h4>
            <div className="bg-black/10 p-4 rounded-2xl backdrop-blur-sm">
              <p className="text-black font-bold">Trusted by 50+ Local Businesses</p>
            </div>
          </motion.div>

          {/* Traffic Tile */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-5 bg-white rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[300px]"
          >
            <div className="bg-black w-14 h-14 rounded-2xl flex items-center justify-center">
              <BarChart3 className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black mb-2 tracking-tight">Traffic Growth</h3>
              <p className="text-zinc-600">Increasing website traffic through precision-targeted SEO and PPC campaigns.</p>
            </div>
          </motion.div>

          {/* Data Tile */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-7 bg-zinc-950 border border-zinc-800 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[300px] relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <Target className="text-orange-500" size={32} />
              <div className="px-4 py-1 border border-zinc-700 rounded-full text-zinc-500 text-xs font-mono">DATA-DRIVEN</div>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Driving Measurable <br /> Business Results
            </h3>
            {/* Moving Line Animation */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoServices;