"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  GraduationCap, 
  Stethoscope, 
  Leaf, 
  Wallet, 
  Cloud, 
  Users, 
  Check
} from "lucide-react";

const sectors = [
  {
    title: "Education",
    icon: GraduationCap,
    description: "Empowering learners through cutting-edge e-learning platforms and digital classrooms.",
    points: ["School Management Systems", "LMS Development", "Online Examination Portals", "Student Engagement Apps"],
    image: "/images/sectors/education.avif"
  },
  {
    title: "Healthcare",
    icon: Stethoscope,
    description: "Modernizing medical services with secure, efficient, and user-centric health-tech solutions.",
    points: ["Hospital Management Software", "Telemedicine Platforms", "Electronic Health Records", "Pharmacy Management"],
    image: "/images/sectors/hospital.avif"
  },
  {
    title: "Agriculture",
    icon: Leaf,
    description: "Revolutionizing farming with data-driven Ag-tech tools and smart supply chain systems.",
    points: ["Farm Monitoring Systems", "Agri-Marketplace Portals", "Supply Chain Transparency", "Weather Integration Tools"],
    image: "/images/sectors/agriculture.avif"
  },
  {
    title: "Finance & Fintech",
    icon: Wallet,
    description: "Building secure and scalable financial systems that redefine the future of digital banking.",
    points: ["Secure Payment Gateways", "Investment Tracking Apps", "Blockchain Integration", "Personal Finance Tools"],
    image: "/images/sectors/finance.avif"
  },
  {
    title: "SaaS Solutions",
    icon: Cloud,
    description: "Developing robust B2B and B2C subscription-based software to scale your business.",
    points: ["Multi-tenant Architecture", "Subscription Management", "Cloud Native Scaling", "Custom API Integrations"],
    image: "/images/sectors/saas.avif"
  },
  {
    title: "CRM & ERP",
    icon: Users,
    description: "Streamlining business operations with integrated management systems tailored to your needs.",
    points: ["Customer Relationship Management", "Resource Planning Tools", "Workflow Automation", "Analytics & Reporting"],
    image: "/images/sectors/crm.avif"
  }
];

const IndustrySectors = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-black overflow-hidden font-sans">
      {/* Subtle Professional Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-3">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl tracking-tighter text-white mb-4"
          >
            Industries We <span className="text-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-semibold">Serve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl font-light"
          >
            Delivering specialized digital solutions tailored to the unique demands of diverse business sectors.
          </motion.p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[230px] md:h-[280px] rounded-3xl overflow-hidden border border-white  bg-zinc-900"
            >
              {/* Background Image */}
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover transition-transform duration-1000   opacity-100 group-hover:opacity-20"
              />

              {/* Gradient Overlay - refined for professionalism */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent transition-all duration-500 group-hover:from-black   z-10" />

              {/* Content Container */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                {/* Title (Always visible at bottom initially) */}
                <h3 className="text-2xl font-semibold text-white tracking-tighter transition-transform duration-500 group-hover:-translate-y-[160px] relative z-30">
                  {sector.title}
                </h3>

                {/* Sliding Content (Hidden below bottom-8 initially) */}
                <div className="absolute bottom-8 left-8 right-8 overflow-hidden pointer-events-none group-hover:pointer-events-auto z-20">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pt-2">
                    <p className="text-zinc-300 text-sm leading-snug mb-2 font-medium ">
                      {sector.description}
                    </p>

                    <div className="grid grid-cols-1 gap-y-2 pt-2  ">
                      {sector.points.slice(0, 3).map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-zinc-300 text-xs   tracking-wide  ">
                          <Check className="w-3 h-3 text-blue-500" strokeWidth={3} />
                          {point}
                        </div>
                      ))}
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
};

export default IndustrySectors;
