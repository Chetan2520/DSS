"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Chetan Sharma",
    role: "Founder",
    image: "https://ik.imagekit.io/Sheryians/version3.0/ImpactSection/ce60de098a18936cd225dac3c7364cf48a436099.png?tr=w-900,q-60",
    badge: "Seminar",
    description: "Driving the digital revolution with innovative solutions and strategic leadership.",
    hasCrown: true,
  },
  {
    name: "Ankit Verma",
    role: "Co-Founder",
    image: "https://ik.imagekit.io/Sheryians/version3.0/ImpactSection/4d35fe4a7d93da2696bb8eff46bd8aacee2a8612.jpg?tr=w-900,q-60",
    badge: "Seminar",
    description: "Expert in building scalable business models and fostering growth-oriented environments.",
  },
  {
    name: "Rahul Mehra",
    role: "CTO",
    image: "https://ik.imagekit.io/Sheryians/version3.0/ImpactSection/76bffc7d7f7e30e7eb21b1751529f33b5b0ab9b6.jpg?tr=w-900,q-60",
    badge: "Seminar",
    description: "Leading the technology roadmap and ensuring cutting-edge engineering excellence.",
  },
  {
    name: "Our Team",
    role: "Development Squad",
    image: "https://ik.imagekit.io/Sheryians/version3.0/ImpactSection/fd042a1f4359a95ed1ba6661893f428c6737dbaa.png?tr=w-900,q-60",
    badge: "Seminar",
    description: "A passionate team of designers and developers building the future of web.",
  },
];

const TeamSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            start: "top top",
            end: "+=600", // Even faster response
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          containerRef.current,
          { x: "35vw", y: "150px" }, // Start lower right
          { x: "-35vw", y: "-200px", ease: "none" } // End upper left
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle mobile scroll to update indicators
  const handleScroll = (e) => {
    if (!isMobile) return;
    const scrollLeft = e.target.scrollLeft;
    const itemWidth = e.target.offsetWidth;
    const index = Math.round(scrollLeft / (itemWidth - 40)); // Adjusted for gap/padding
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen bg-[#050505] text-white py-12 px-6 lg:px-20 overflow-hidden flex flex-col justify-start items-center ${isMobile ? "min-h-0 py-20" : ""}`}
    >
      {/* Custom Styles to hide scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Single-Line Heading */}
      <div className="max-w-6xl mx-auto relative z-30 mb-10 w-full text-center">
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-white px-4 leading-none">
          <span className="bg-linear-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent">Who We </span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600">
            are !
          </span>
        </h2>
      </div>

      {/* Horizontal Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className={`relative w-full z-20 flex-1 flex items-start no-scrollbar ${isMobile ? "overflow-x-auto snap-x snap-mandatory pb-10" : "overflow-visible pt-12 md:pt-20"}`}
      >
        <div
          ref={containerRef}
          className={`flex gap-6 md:gap-10 w-max items-start ${isMobile ? "px-6" : ""}`}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative flex-shrink-0 w-[300px] md:w-[374px] h-[400px] md:h-[481px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 snap-center
                ${!isMobile && index % 2 !== 0 ? "mt-12 md:mt-20" : "mt-0"}
              `}
            >
              {/* Image Container */}
              <div className={`absolute inset-0 w-full h-full transition-all duration-1000   group-hover:grayscale ${isMobile ? "grayscale" : "grayscale-0"}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 transition-opacity duration-700 ${isMobile ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`} />

              {/* Hover Content Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/10 to-transparent transition-all duration-700 flex flex-col justify-end p-6 md:p-8 ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                <div className={`transition-transform duration-700 ${isMobile ? "translate-y-0" : "translate-y-8 group-hover:translate-y-0"}`}>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-0 drop-shadow-2xl">{member.name}</h3>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed font-medium line-clamp-3">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Top Info Icon */}
              <div className="absolute top-6 right-6 z-20">
                <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all duration-700 group-hover:rotate-45">
                  <img 
                    src="/arrow-right.svg" 
                    alt="Arrow" 
                    className="w-6 h-6 invert brightness-200" 
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Mobile Pagination Dots */}
      {isMobile && (
        <div className="flex gap-2 mt-8 relative z-30">
          {teamMembers.map((_, i) => (
            <div 
              key={i} 
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-blue-500 w-6" : "bg-white/20"}`} 
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TeamSection;
