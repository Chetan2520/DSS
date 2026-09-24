"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, PlayCircle } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ReelsShowcase() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videos = [
    { src: "/images/landing/videos/dss_ayurveda1.mp4", title: "From 0 to 10K Sales\nNatural Skincare Brand" },
    { src: "/images/landing/videos/dss_ayurveda3.mp4", title: "Client Success Story\n200% Growth" },
    { src: "/images/landing/videos/dss_ayurveda2.mp4", title: "Meta Ads Strategy\nFor Ayurvedic Brands" },
    { src: "/images/landing/videos/dss_ayurveda4.mp4", title: "How We Improve\nROAS" },
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDDCCF] text-[#5B8266] text-[10px] font-semibold tracking-widest uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B8266]"></span>
              INSIDE OUR STRATEGIES
            </div>

            <h2 className="font-playfair text-4xl sm:text-4xl md:text-[42px] font-semibold leading-[1.1] mb-6 text-[#18221B] tracking-tight">
              Watch how we scale <br />
              Ayurveda brands.
            </h2>

            <p className="text-[#5F675F] text-sm md:text-[15px] leading-relaxed font-medium mb-8">
              Short, actionable insights into how we navigate compliance, lower CAC, and drive high-intent customers to your brand.
            </p>

            <button 
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#DDDCCF] hover:border-[#5B8266] transition-all duration-300 group shadow-sm text-sm font-semibold text-[#18221B]"
            >
              <PlayCircle className="text-[#5B8266] w-5 h-5 fill-current opacity-20 group-hover:opacity-100 transition-opacity" />
              Watch Video (2 min)
              <ArrowRight className="w-4 h-4 text-[#5F675F] group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Side: 4 Video Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3 w-full"
          >
            <div className="flex sm:grid sm:grid-cols-4 gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-0 scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0">
              {videos.map((vid, index) => (
                <div key={index} className="w-[60vw] sm:w-auto shrink-0 snap-center">
                  <VideoCard video={vid} index={index} />
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors"
              >
                ✕
              </button>
              <video 
                src="/images/landing/videos/dss_ayurveda1.mp4" 
                controls 
                autoPlay 
                className="w-full h-auto max-h-[85vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#2a362d] border border-white/20 group cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={video.src}
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
