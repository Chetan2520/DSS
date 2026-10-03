"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, PlayCircle } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ReelsShowcase() {
  const videos = [
    { src: "/images/landing/videos/dss_ayurveda1.mp4", thumbnailTime: 1, title: "From 0 to 10K Sales\nNatural Skincare Brand" },
    { src: "/images/landing/videos/dss_ayurveda3.mp4", thumbnailTime: 6, title: "Client Success Story\n200% Growth" },
    { src: "/images/landing/videos/dss_ayurveda2.mp4", thumbnailTime: 3, title: "Meta Ads Strategy\nFor Ayurvedic Brands" },
    { src: "/images/landing/videos/dss_ayurveda4.mp4", thumbnailTime: 4, title: "How We Improve\nROAS" },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#F8F9F5] text-[#18221B] overflow-hidden border-t border-[#DDDCCF]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Side: Text and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 flex flex-col items-start text-left"
          >
            <h2 className="font-playfair text-[32px] sm:text-4xl md:text-[46px] font-bold leading-[1.25] text-[#18221B] mb-6 tracking-tight">
              How We Scale <br />
              <span className="relative inline-block overflow-hidden px-3 sm:px-5 py-1 md:py-1.5 rounded-xl mt-2 md:mt-3 whitespace-nowrap text-[28px] sm:text-4xl md:text-[46px] leading-[1.2]">
              <motion.span 
                className="absolute inset-y-0 left-0 bg-[#2A3B30] z-0"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "circOut", delay: 0.3 }}
              />
              <span className="text-white relative z-10">Ayurveda Brands</span>
            </span>
            </h2>

            <p className="text-[#5F675F] text-sm md:text-[15px] leading-relaxed font-medium mb-8">
              Short, actionable insights into how we navigate compliance, lower CAC, and drive high-intent customers to your brand.
            </p>

          </motion.div>

          {/* Right Side: 4 Video Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3 w-full"
          >
            <div className="flex sm:grid sm:grid-cols-4 gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 sm:mx-0 sm:px-0">
              {videos.map((vid, index) => (
                <div key={index} className="w-[60vw] sm:w-auto shrink-0 snap-center">
                  <VideoCard video={vid} index={index} />
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

function VideoCard({ video, index }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        if (!hasStarted) {
          videoRef.current.currentTime = 0;
          setHasStarted(true);
        }
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#2a362d] border border-white/20 group cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={`${video.src}#t=${video.thumbnailTime || 3}`}
        preload="metadata"
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        loop
        playsInline
      />

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none opacity-80" />

      {/* Play Button Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/40 text-white shadow-lg group-hover:bg-white/20 transition-colors">
          <Play className="w-4 h-4 ml-0.5 fill-white" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white font-semibold text-[11px] sm:text-xs leading-snug drop-shadow-md whitespace-pre-line">
          {video.title}
        </h3>
      </div>
    </motion.div>
  );
}



