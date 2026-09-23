"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Portfolio() {
  const caseStudies = [
    {
      client: "Leading Ayurvedic Brand",
      industry: "Ayurvedic D2C",
      challenge: "High CAC and low conversion rate on website despite good social media following.",
      strategy: "Restructured the funnel to focus on education before sales. Implemented high-converting landing pages.",
      execution: "Meta Ads + Landing Page CRO + WhatsApp Retargeting.",
      results: {
        leads: "+120% Sales",
        conversion: "3.5% Conversion Rate",
        cac: "40% Decrease in CAC",
        roas: "4.2X ROAS"
      }
    },
    {
      client: "Premium Wellness Clinic",
      industry: "Ayurveda & Wellness Clinic",
      challenge: "Getting generic leads from local ads, but very few actual patient walk-ins.",
      strategy: "Shifted focus from broad local targeting to high-intent search terms and symptom-specific Meta ads.",
      execution: "Google Search Ads + Meta Lead Gen + CRM Integration.",
      results: {
        leads: "+85% Qualified Enquiries",
        conversion: "60% Appointment Rate",
        cac: "₹250 Cost Per Lead",
        roas: "Fully Booked Schedules"
      }
    }
  ];

  return (
    <section id="case-studies" className="py-12 md:py-20 bg-[#F8F5EA] overflow-hidden border-t border-[#DDDCCF]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-semibold leading-[1.2] mb-6 text-[#18221B]"
          >
            Don't Just Take Our Word For It. <br />
            <span className="text-[#5B8266]">Look at the Work.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-[2rem] border border-[#DDDCCF] shadow-xl flex flex-col lg:flex-row overflow-hidden group"
            >
              {/* Left Side: Story */}
              <div className="p-8 md:p-12 lg:w-[60%] flex flex-col">
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6900] bg-[#FF6900]/10 px-3 py-1.5 rounded-full inline-block">
                    {study.industry}
                  </span>
                  <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-[#18221B] mt-5 leading-tight">
                    {study.client}
                  </h3>
                </div>

                <div className="space-y-5 flex-1 mt-2">
                  <div>
                    <h4 className="font-semibold text-[#18221B] text-xs uppercase tracking-wider mb-1.5 opacity-70">The Challenge</h4>
                    <p className="text-[#5F675F] leading-relaxed text-sm md:text-base">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18221B] text-xs uppercase tracking-wider mb-1.5 opacity-70">The Strategy</h4>
                    <p className="text-[#5F675F] leading-relaxed text-sm md:text-base">{study.strategy}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#DDDCCF]">
                  <button className="text-[#5B8266] font-semibold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-[#FF6900] transition-colors group/btn">
                    VIEW FULL CASE STUDY 
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Side: Results */}
              <div className="bg-[#5B8266] p-8 md:p-12 lg:w-[40%] flex flex-col justify-center relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-full h-full bg-white/5 rounded-l-full blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF6900]/20 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10">
                  <h4 className="font-semibold text-white/80 text-sm uppercase tracking-widest mb-8 border-b border-white/20 pb-4">
                    The Results
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                    <div>
                      <p className="font-semibold text-2xl md:text-3xl text-white mb-1">{study.results.leads.split(' ')[0]}</p>
                      <p className="text-[#F8F5EA] text-xs uppercase tracking-wider font-semibold opacity-90">{study.results.leads.split(' ').slice(1).join(' ')}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-2xl md:text-3xl text-white mb-1">{study.results.conversion.split(' ')[0]}</p>
                      <p className="text-[#F8F5EA] text-xs uppercase tracking-wider font-semibold opacity-90">{study.results.conversion.split(' ').slice(1).join(' ')}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-2xl md:text-3xl text-white mb-1">{study.results.cac.split(' ')[0]}</p>
                      <p className="text-[#F8F5EA] text-xs uppercase tracking-wider font-semibold opacity-90">{study.results.cac.split(' ').slice(1).join(' ')}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-2xl md:text-3xl text-[#FF6900] mb-1">{study.results.roas.split(' ')[0]}</p>
                      <p className="text-[#F8F5EA] text-xs uppercase tracking-wider font-semibold opacity-90">{study.results.roas.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
