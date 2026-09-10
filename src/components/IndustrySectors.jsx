"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  Stethoscope, 
  Leaf, 
  Wallet, 
  Cloud, 
  Users, 
  Check,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const sectors = [
  {
    title: "Spa",
    icon: GraduationCap,
    description: "Empowering learners through cutting-edge e-learning platforms and digital classrooms.",
    points: ["School Management Systems", "LMS Development", "Online Examination Portals", "Student Engagement Apps"],
    image: "/images/sectors/spa.png"
  },
  {
    title: "Healthcare",
    icon: Stethoscope,
    description: "Modernizing medical services with secure, efficient, and user-centric health-tech solutions.",
    points: ["Hospital Management Software", "Telemedicine Platforms", "Electronic Health Records", "Pharmacy Management"],
    image: "/images/sectors/heathcare.png"
  },
  {
    title: "Ayurveda",
    icon: Leaf,
    description: "Revolutionizing farming with data-driven Ag-tech tools and smart supply chain systems.",
    points: ["Farm Monitoring Systems", "Agri-Marketplace Portals", "Supply Chain Transparency", "Weather Integration Tools"],
    image: "/images/sectors/ayurveda.png"
  },
  {
    title: "Finance & Fintech",
    icon: Wallet,
    description: "Building secure and scalable financial systems that redefine the future of digital banking.",
    points: ["Secure Payment Gateways", "Investment Tracking Apps", "Blockchain Integration", "Personal Finance Tools"],
    image: "/images/sectors/doctor.png"
  },
  {
    title: "SaaS Solutions",
    icon: Cloud,
    description: "Developing robust B2B and B2C subscription-based software to scale your business.",
    points: ["Multi-tenant Architecture", "Subscription Management", "Cloud Native Scaling", "Custom API Integrations"],
    image: "/images/sectors/education.png"
  },
  {
    title: "CRM & ERP",
    icon: Users,
    description: "Streamlining business operations with integrated management systems tailored to your needs.",
    points: ["Customer Relationship Management", "Resource Planning Tools", "Workflow Automation", "Analytics & Reporting"],
    image: "/images/sectors/solar.png"
  },
  {
    title: "CRM & ERP",
    icon: Users,
    description: "Streamlining business operations with integrated management systems tailored to your needs.",
    points: ["Customer Relationship Management", "Resource Planning Tools", "Workflow Automation", "Analytics & Reporting"],
    image: "/images/sectors/massage.png"
  }
  
];
  
const IndustrySectors = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 > sectors.length - itemsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? sectors.length - itemsPerView : prev - 1
    );
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 0.4"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section ref={containerRef} className="relative bg-black w-full">
      <motion.div 
        style={{ y, scale, borderRadius, opacity }}
        className="relative py-24 px-6 md:px-12   overflow-hidden font-sans z-20 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl tracking-tighter text-zinc-100 mb-4 font-bold"
              >
                Industries We <span className="text-orange-500 font-semibold">Serve</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-zinc-300 text-lg max-w-2xl font-medium"
              >
                Delivering specialized digital solutions tailored to the unique demands of diverse business sectors.
              </motion.p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-orange-500 hover:border-orange-500 hover:shadow-md transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-orange-500 hover:border-orange-500 hover:shadow-md transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Sectors Slider */}
          <div className="overflow-hidden relative -mx-4 px-4 pb-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}%))` }}
            >
              {sectors.map((sector, index) => {
                const href = `/industries/${sector.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`;
                return (
                  <div 
                    key={index} 
                    className="shrink-0 px-4"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <Link href={href} className="block group h-full">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative h-[230px] md:h-[280px] rounded-lg overflow-hidden bg-white shadow-md"
                      >
                        {/* Background Image */}
                        <Image
                          src={sector.image}
                          alt={sector.title}
                          fill
                          className="object-cover transition-transform duration-700"
                        />
                      </motion.div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default IndustrySectors;
