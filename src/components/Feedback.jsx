"use client";

import React from "react";

const testimonialsRow1 = [
  {
    name: "Indore Tech Solutions",
    text: "ROI doubled in just 3 months! Incredible growth.",
    avatar: "/feedback/f1.avif",
  },
  {
    name: "Bharat Marketing Co.",
    text: "The best SEO team in Indore. Truly expert.",
    avatar: "/feedback/f2.avif",
  },
  {
    name: "MP Growth Ventures",
    text: "Our lead generation increased by 250% seamlessly.",
    avatar: "/feedback/f3.avif",
  },
  {
    name: "Dainik Systems",
    text: "Data-driven strategies that actually deliver results.",
    avatar: "/feedback/f4.avif",
  },
  {
    name: "Swadeshi Organics",
    text: "Transformed our brand identity completely. Amazing!",
    avatar: "/feedback/f5.avif",
  },
];

const testimonialsRow2 = [
  {
    name: "Narmada Digital",
    text: "Finally, a digital partner who understands ROI.",
    avatar: "/feedback/f6.avif",
  },
  {
    name: "Rajwada Retail",
    text: "Our social media engagement is 10x higher now.",
    avatar: "/feedback/f7.avif",
  },
  {
    name: "Saffola Foods",
    text: "The performance marketing kings in the market.",
    avatar: "/feedback/f1.avif",
  },
  {
    name: "BlueSpace Realty",
    text: "Incredible growth in organic traffic. Highly recommend!",
    avatar: "/feedback/f4.avif",
  },
  {
    name: "Ujjain Wellness",
    text: "Unbeatable Ad performance and scaling. Top notch.",
    avatar: "/feedback/f3.avif",
  },
];

const Feedback = () => {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-6xl tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight">
          Client{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600">
            Success
          </span>{" "}
          Stories
        </h2>
        <p className="text-zinc-500 mt-4 text-lg">Short, powerful shifts delivered by Digital Success Solutions.</p>
      </div>

      <div className="flex flex-col gap-6 group">
        {/* Row 1 - Left to Right */}
        <div className="flex animate-marquee-right hover:paused">
          {[...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
            <div
              key={`row1-${i}`}
              className="shrink-0 mx-4 flex items-center space-x-3 md:space-x-4 bg-white/5 backdrop-blur-sm px-4 md:px-7 py-2 md:py-3 rounded-full border border-white/10 transition-all hover:border-white/20 hover:bg-white/10 cursor-default"
            >
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-full p-[1.5px] bg-linear-to-tr from-orange-500 to-yellow-500">
                <div className="w-full h-full rounded-full border-2 border-[#050505] overflow-hidden shadow-sm">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
              <p className="text-zinc-300 text-xs md:text-sm font-medium whitespace-nowrap">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex animate-marquee-left hover:paused">
          {[...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
            <div
              key={`row2-${i}`}
              className="shrink-0 mx-4 flex items-center space-x-3 md:space-x-4 bg-white/5 backdrop-blur-sm px-4 md:px-7 py-2 md:py-3 rounded-full border border-white/10 transition-all hover:border-white/20 hover:bg-white/10 cursor-default"
            >
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-full p-[1.5px] bg-linear-to-tr from-orange-500 to-yellow-500">
                <div className="w-full h-full rounded-full border-2 border-[#050505] overflow-hidden shadow-sm">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
              <p className="text-zinc-300 text-xs md:text-sm font-medium whitespace-nowrap">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
