"use client";
import React from "react";
import { Star } from "lucide-react";

const row1Reviews = [
  {
    id: 1,
    name: "Tanya Gupta",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Best digital marketing agency in Indore. Great results and support!",
  },
  {
    id: 2,
    name: "sumitDatacode",
    img: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Good experience with Digital success solutions Digital marketing agency in indore",
  },
  {
    id: 3,
    name: "developer sipl18",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Best digital marketing company in Indore. Great SEO results!",
  },
  {
    id: 4,
    name: "Lokendra Jatav",
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Professional team and excellent work culture. One of the top digital marketing company in Indore.",
  }
];

const row2Reviews = [
  {
    id: 5,
    name: "Jeevan shaadi",
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Working with Digital Success Solutions was a great experience. They built a modern, fast, and SEO-optimized website.",
  },
  {
    id: 6,
    name: "Sumit Sutar",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Digital Success Solutions in Indore boosted our website traffic and leads with their SEO services. Professional team.",
  },
  {
    id: 7,
    name: "Jaya Thakur",
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Best agency for online marketing and branding in Indore.",
  },
  {
    id: 8,
    name: "chetan Manker",
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Digital Success Solutions is a leading digital marketing company in Indore. The team delivers great results.",
  }
];

const row3Reviews = [
  {
    id: 9,
    name: "Dheeraj Patidar",
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Best It Services company in Indore.",
  },
  {
    id: 10,
    name: "The Ayurveda Hub",
    img: "https://images.pexels.com/photos/3766113/pexels-photo-3766113.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Good company and give satisfied results. We reached out 15 lakhs sales a month.",
  },
  {
    id: 11,
    name: "kirti Raj",
    img: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Highly recommend for social media in Indore.",
  },
  {
    id: 12,
    name: "DEVANGI VASTRA",
    img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "I highly suggest to choose their service. They have the best team.",
  }
];

const row4Reviews = [
  {
    id: 13,
    name: "Head and neck cancer oncology",
    img: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "We partnered for our clinic's digital marketing, and the results have been impressive. From social media to patient engagement.",
  },
  {
    id: 14,
    name: "Rani Rajput",
    img: "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Excellent service and Great results. Highly recommend Digital Success Solution.",
  },
  {
    id: 15,
    name: "Manoj Ahirwar",
    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Highly recommended digital marketing agency in Indore for businesses looking to grow online.",
  },
  {
    id: 16,
    name: "Abhishek",
    img: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    review: "Best agency in Indore at affordable pricing.",
  }
];

export default function SuccessOrbit() {
  return (
    <section className="relative w-full bg-black py-20 overflow-hidden text-white font-sans">
      {/* Styles for marquee loop scrolling directions */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left-fast {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right-fast {
          animation: marquee-right 25s linear infinite;
        }
        .animate-marquee-left-fast:hover, .animate-marquee-right-fast:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center relative z-10">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold tracking-wider uppercase text-zinc-400 mb-4">
          What Our Community Says
        </h2>
        
        {/* Subtitle */}
        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
          Real feedback from the community.
        </h3>

        {/* Rating Block */}
        <div className="flex items-center gap-6 mt-6 p-3 px-5 rounded-full bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md">
          <div className="flex items-center gap-1.5 border-r border-zinc-800 pr-5">
            <span className="text-lg font-bold text-white">4.9/5</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-450 text-[11px] font-medium">
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.67-.35-1.37-.35-2.09z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Based on 25+ Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="w-full flex flex-col gap-4 relative z-10">
        
        {/* Row 1 (Scrolling Left) */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-4 whitespace-nowrap animate-marquee-left-fast">
            {[...row1Reviews, ...row1Reviews].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="inline-block bg-[#0b0e14]/90 border border-zinc-800/80 rounded-xl p-3 md:p-4 w-max flex-shrink-0 hover:border-zinc-700 hover:bg-[#0f121b] transition duration-300 shadow-lg"
              >
                {/* Review Text */}
                <p className="text-zinc-200 text-[10px] md:text-xs lg:text-sm font-normal leading-relaxed mb-2 md:mb-3 whitespace-nowrap">
                  {item.review}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-1.5 md:gap-2 pt-1">
                  <div className="w-5.5 h-5.5 md:w-7 md:h-7 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold text-[9px] md:text-xs flex-shrink-0">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex items-center gap-0.5 md:gap-1">
                    <span className="text-[9px] md:text-[11px] font-semibold text-white">{item.name}</span>
                    {item.verified && (
                      <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-[#1d9bf0] fill-current flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.94.1-1.348.27C14.825 2.515 13.512 1.5 12 1.5s-2.825 1.015-3.422 2.28c-.407-.17-.867-.27-1.348-.27-2.108 0-3.818 1.78-3.818 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .94-.1 1.348-.27.597 1.265 1.91 2.28 3.422 2.28s2.825-1.015 3.422-2.28c.407.17.867.27 1.348.27 2.108 0 3.818-1.78 3.818-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.72 3.11l-3.23-3.23 1.41-1.42 1.82 1.82 4.96-4.96 1.42 1.42-6.38 6.37z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-4 whitespace-nowrap animate-marquee-right-fast">
            {[...row2Reviews, ...row2Reviews].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="inline-block bg-[#0b0e14]/90 border border-zinc-800/80 rounded-xl p-3 md:p-4 w-max flex-shrink-0 hover:border-zinc-700 hover:bg-[#0f121b] transition duration-300 shadow-lg"
              >
                {/* Review Text */}
                <p className="text-zinc-200 text-[10px] md:text-xs lg:text-sm font-normal leading-relaxed mb-2 md:mb-3 whitespace-nowrap">
                  {item.review}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-1.5 md:gap-2 pt-1">
                  <div className="w-5.5 h-5.5 md:w-7 md:h-7 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold text-[9px] md:text-xs flex-shrink-0">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex items-center gap-0.5 md:gap-1">
                    <span className="text-[9px] md:text-[11px] font-semibold text-white">{item.name}</span>
                    {item.verified && (
                      <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-[#1d9bf0] fill-current flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.94.1-1.348.27C14.825 2.515 13.512 1.5 12 1.5s-2.825 1.015-3.422 2.28c-.407-.17-.867-.27-1.348-.27-2.108 0-3.818 1.78-3.818 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .94-.1 1.348-.27.597 1.265 1.91 2.28 3.422 2.28s2.825-1.015 3.422-2.28c.407.17.867.27 1.348.27 2.108 0 3.818-1.78 3.818-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.72 3.11l-3.23-3.23 1.41-1.42 1.82 1.82 4.96-4.96 1.42 1.42-6.38 6.37z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 (Scrolling Left) */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-4 whitespace-nowrap animate-marquee-left-fast">
            {[...row3Reviews, ...row3Reviews].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="inline-block bg-[#0b0e14]/90 border border-zinc-800/80 rounded-xl p-3 md:p-4 w-max flex-shrink-0 hover:border-zinc-700 hover:bg-[#0f121b] transition duration-300 shadow-lg"
              >
                {/* Review Text */}
                <p className="text-zinc-200 text-[10px] md:text-xs lg:text-sm font-normal leading-relaxed mb-2 md:mb-3 whitespace-nowrap">
                  {item.review}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-1.5 md:gap-2 pt-1">
                  <div className="w-5.5 h-5.5 md:w-7 md:h-7 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold text-[9px] md:text-xs flex-shrink-0">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex items-center gap-0.5 md:gap-1">
                    <span className="text-[9px] md:text-[11px] font-semibold text-white">{item.name}</span>
                    {item.verified && (
                      <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-[#1d9bf0] fill-current flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.94.1-1.348.27C14.825 2.515 13.512 1.5 12 1.5s-2.825 1.015-3.422 2.28c-.407-.17-.867-.27-1.348-.27-2.108 0-3.818 1.78-3.818 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .94-.1 1.348-.27.597 1.265 1.91 2.28 3.422 2.28s2.825-1.015 3.422-2.28c.407.17.867.27 1.348.27 2.108 0 3.818-1.78 3.818-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.72 3.11l-3.23-3.23 1.41-1.42 1.82 1.82 4.96-4.96 1.42 1.42-6.38 6.37z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4 (Scrolling Right) */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-4 whitespace-nowrap animate-marquee-right-fast">
            {[...row4Reviews, ...row4Reviews].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="inline-block bg-[#0b0e14]/90 border border-zinc-800/80 rounded-xl p-3 md:p-4 w-max flex-shrink-0 hover:border-zinc-700 hover:bg-[#0f121b] transition duration-300 shadow-lg"
              >
                {/* Review Text */}
                <p className="text-zinc-200 text-[10px] md:text-xs lg:text-sm font-normal leading-relaxed mb-2 md:mb-3 whitespace-nowrap">
                  {item.review}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-1.5 md:gap-2 pt-1">
                  <div className="w-5.5 h-5.5 md:w-7 md:h-7 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold text-[9px] md:text-xs flex-shrink-0">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex items-center gap-0.5 md:gap-1">
                    <span className="text-[9px] md:text-[11px] font-semibold text-white">{item.name}</span>
                    {item.verified && (
                      <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-[#1d9bf0] fill-current flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.94.1-1.348.27C14.825 2.515 13.512 1.5 12 1.5s-2.825 1.015-3.422 2.28c-.407-.17-.867-.27-1.348-.27-2.108 0-3.818 1.78-3.818 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .94-.1 1.348-.27.597 1.265 1.91 2.28 3.422 2.28s2.825-1.015 3.422-2.28c.407.17.867.27 1.348.27 2.108 0 3.818-1.78 3.818-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.72 3.11l-3.23-3.23 1.41-1.42 1.82 1.82 4.96-4.96 1.42 1.42-6.38 6.37z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}