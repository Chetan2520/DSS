"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ClientsCreative() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const checkImages = async () => {
      // 11 Logos + 1 CTA = 12 Items (Perfect Grid)
      const ids = [10, 12, 13, 14, 16, 17, 19, 20, 21, 22, 25];

      const results = await Promise.all(
        ids.map((i) => {
          const src = `/images/clients/${i}.png`;
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve({ id: i, src, valid: true });
            img.onerror = () => resolve({ id: i, valid: false });
          });
        })
      );

      setLogos(results.filter((r) => r.valid).slice(0, 11));
    };

    checkImages();
  }, []);

  return (
    <section className="relative bg-[#050505] py-24 md:py-40 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1400px] px-6">

        {/* HEADER SECTION */}
        <div className="text-center mb-20 md:mb-32">
          <p className="text-blue-500 font-semibold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">
            Trusted Partners
          </p>
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            Witnessed the <span className="italic font-light text-zinc-500">Growth.</span>
          </h2>
        </div>

        {/* LOGO GRID */}
        <div className="relative border-t border-l border-white/10 overflow-hidden">
          {/* Background subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 relative z-10">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="aspect-square flex items-center justify-center border-r border-b border-white/10 hover:bg-white/[0.02] transition-all duration-500 group/item"
              >
                <img
                  src={logo.src}
                  alt="client logo"
                  className="max-h-[45%] max-w-[65%] object-contain transition-all duration-500 ease-out"
                />
              </div>
            ))}

            {/* CTA BOX - FIXED ARROW */}
            <Link
              href="/portfoliopage"
              className="aspect-square flex items-center justify-center border-r border-b border-white/10 group/cta bg-zinc-950/40 relative overflow-hidden"
            >
              <div className="relative z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center group-hover/cta:bg-blue-600 transition-all duration-500 shadow-2xl">
                <svg
                  className="w-8 h-8 text-black group-hover/cta:text-white -rotate-45 group-hover/cta:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>

              {/* Hover Rotating Text Decor */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cta:opacity-20 transition-opacity duration-700 pointer-events-none">
                <div className="w-full h-full animate-[spin_10s_linear_infinite] p-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[8px] fill-white uppercase tracking-[0.2em] font-bold">
                      <textPath xlinkHref="#circlePath">
                        Explore All Projects • Case Studies •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}