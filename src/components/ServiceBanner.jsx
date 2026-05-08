"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ServiceBanner = ({
  title,
  description,
  currentPage,
  videoSrc,
  imageSrc,
}) => {
  // Helper to split the title for highlighting
  const words = title.split(" ");
  const lastWord = words.pop();
  const prefix = words.join(" ");

  return (
    <section className="relative w-full flex items-center bg-black overflow-hidden min-h-[90vh] py-20 lg:py-0">
      {/* --- Background Layer: Service Hero Background --- */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/services.jpegu"
          alt="Background"
          fill
          priority
          className="object-contain "
        />
      
       </div> */}

      {/* Content Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        <div
          className={`grid grid-cols-1 ${videoSrc || imageSrc ? "lg:grid-cols-12" : ""} gap-12 items-center`}
        >
          {/* Left Content Column */}
          <div
            className={`${videoSrc || imageSrc ? "lg:col-span-7" : "max-w-4xl"}`}
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-8xl tracking-tighter leading-[0.95]"
              >
                <span className="bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent block">
                  {prefix}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-300 to-orange-600">
                  {lastWord}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-zinc-400 text-lg md:text-2xl leading-relaxed max-w-xl font-light"
              >
                {description}
              </motion.p>

              {(videoSrc || imageSrc) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="pt-8"
                >
                  <Link
                    href="/lets-connect"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold tracking-widest text-xs rounded-full hover:bg-orange-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  >
                    START YOUR PROJECT
                  </Link>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Media Column */}
          {(videoSrc || imageSrc) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square rounded-[1rem] overflow-hidden group   shadow-2xl backdrop-blur-sm">
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={imageSrc}
                    alt={title}
                    width={1000}
                    height={1000}
                    priority
                    className="w-full h-full object-cover  "
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
