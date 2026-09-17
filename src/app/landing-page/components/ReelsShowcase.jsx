"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

export default function ReelsShowcase() {
  const videos = [
    { src: "/images/landing/videos/dss_ayurveda1.mp4", title: "Scaling Ayurveda D2C" },
    { src: "/images/landing/videos/dss_ayurveda2.mp4", title: "Clinic Lead Generation" },
    { src: "/images/landing/videos/dss_ayurveda3.mp4", title: "Compliance & Ads" },
    { src: "/images/landing/videos/dss_ayurveda4.mp4", title: "Brand Positioning" },
  ];

  return (
    <section className="pt-20 pb-10 md:pt-32 md:pb-16 bg-[#F8F5EA] text-[#18221B] overflow-hidden border-t border-[#DDDCCF]">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDDCCF] text-[#174A2A] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6F8B63]"></span>
            Inside Our Strategies
          </motion.div>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-4 md:mb-6">
            Watch how we scale <br className="hidden sm:block" />
            <span className="text-[#6F8B63] italic">Ayurveda brands.</span>
          </h2>
          <p className="text-[#5F675F] text-sm md:text-base lg:text-lg leading-relaxed font-medium">
            Short, actionable insights into exactly how we navigate compliance, lower CAC, and drive high-intent patients to your clinics.
          </p>
        </div>

        {/* Desktop: 4 columns. Mobile: Horizontal Scroll (Carousel) */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {videos.map((vid, index) => (
            <VideoCard key={index} video={vid} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function VideoCard({ video, index }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative shrink-0 w-[260px] sm:w-auto aspect-[9/16] rounded-3xl overflow-hidden bg-[#212E25] border border-white/10 group snap-center cursor-pointer shadow-xl shadow-black/20"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full object-cover"
        loop
        playsInline
      />

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#18221B] via-[#18221B]/20 to-transparent pointer-events-none opacity-80" />

      {/* Play Button Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-lg">
          <Play className="w-5 h-5 md:w-6 md:h-6 ml-1 fill-white" />
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white font-bold text-base md:text-lg leading-tight drop-shadow-md">
          {video.title}
        </h3>
      </div>
    </motion.div>
  );
}
