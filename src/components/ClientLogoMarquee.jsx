"use client";
import React, { useEffect, useState } from "react";

export default function ClientLogoMarquee() {
  const [logosRow1, setLogosRow1] = useState([]);
  const [logosRow2, setLogosRow2] = useState([]);

  useEffect(() => {
    const checkImages = async (ids) => {
      const promises = ids.map((i) => {
        const src = `/images/clients/${i}.png`;
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => resolve({ id: i, src, valid: true });
          img.onerror = () => resolve({ id: i, valid: false });
        });
      });
      const results = await Promise.all(promises);
      return results.filter((r) => r.valid);
    };

    // Split available IDs into two rows
    const availableIds = [
      10, 12, 13, 14, 16, 17, 19, 1, 21, 22, 25, 26, 27, 28, 29, 31, 32, 33,
      34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 6, 9,
    ];
    
    const half = Math.ceil(availableIds.length / 2);
    const row1Ids = availableIds.slice(0, half);
    const row2Ids = availableIds.slice(half);

    checkImages(row1Ids).then(setLogosRow1);
    checkImages(row2Ids).then(setLogosRow2);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#050505] to-black py-20 overflow-hidden font-sans">
      <div className="text-center mb-12 relative z-10">
        
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Our Trusted <span className="italic font-light text-zinc-300">Clients</span>
        </h2>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 60s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 60s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Row 1 (Scrolling Left) */}
      <div className="w-full overflow-hidden flex mb-4 relative">
        {/* Gradients for fading edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-4 whitespace-nowrap animate-marquee-left">
          {logosRow1.length > 0 && [...logosRow1, ...logosRow1, ...logosRow1, ...logosRow1].map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="w-28 h-20 md:w-40 md:h-28 flex-shrink-0 flex items-center justify-center transition-all duration-300"
            >
              <img src={logo.src} alt={`Client ${logo.id}`} className="max-w-[75%] max-h-[75%] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 (Scrolling Right) */}
      <div className="w-full overflow-hidden flex relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-4 whitespace-nowrap animate-marquee-right">
          {logosRow2.length > 0 && [...logosRow2, ...logosRow2, ...logosRow2, ...logosRow2].map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="w-28 h-20 md:w-40 md:h-28 flex-shrink-0 flex items-center justify-center transition-all duration-300"
            >
              <img src={logo.src} alt={`Client ${logo.id}`} className="max-w-[75%] max-h-[75%] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
