"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// The requested Instagram Reel link used 4 times
const reels = [
  { id: 1, url: "https://www.instagram.com/p/Dc_F96xpgZY/embed/" },
  { id: 2, url: "https://www.instagram.com/p/Dc_F96xpgZY/embed/" },
  { id: 3, url: "https://www.instagram.com/p/Dc_F96xpgZY/embed/" },
  { id: 4, url: "https://www.instagram.com/p/Dc_F96xpgZY/embed/" },
];

const InstagramReels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 > reels.length - itemsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? reels.length - itemsPerView : prev - 1
    );
  };

  return (
    <section className="relative bg-black w-full overflow-hidden py-24 border-t border-white/5">
      <div className="relative px-6 md:px-12 font-sans z-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 w-8 h-8">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <h3 className="text-zinc-400 font-semibold tracking-[0.2em] uppercase text-sm">
                Social Buzz
              </h3>
            </div>
            <h2 className="text-4xl md:text-5xl tracking-tighter text-white font-bold">
              Catch Us On <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Instagram</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mt-4 font-medium">
              Discover marketing tips, agency updates, and behind-the-scenes action on our official channel.
            </p>
          </div>

          {/* Navigation Buttons (Only visible if total items > viewable items) */}
          {isClient && reels.length > itemsPerView && (
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:text-pink-500 hover:border-pink-500 hover:bg-zinc-800 transition-all shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:text-pink-500 hover:border-pink-500 hover:bg-zinc-800 transition-all shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>

        {/* Slider */}
        <div className="overflow-hidden relative -mx-4 px-4 pb-4">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}%))` }}
          >
            {reels.map((reel, index) => (
              <div
                key={index}
                className="shrink-0 px-4"
                style={{ width: isClient ? `${100 / itemsPerView}%` : '25%' }}
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#fafafa] shadow-xl border border-zinc-800 group h-[600px] flex items-center justify-center">
                   <iframe
                      src={reel.url}
                      className="w-full h-full border-0"
                      allowtransparency="true"
                      allowFullScreen={true}
                      scrolling="no"
                    ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
