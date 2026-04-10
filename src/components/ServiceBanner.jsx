"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ServiceBanner = ({
  title,
  description,
  bgImage,
  currentPage,
  videoSrc,
  imageSrc,
}) => {
  // Helper to split the title for highlighting (last word or custom)
  const words = title.split(" ");
  const lastWord = words.pop();
  const prefix = words.join(" ");

  return (
    <section
      className={`relative w-full flex items-center bg-black overflow-hidden min-h-[80vh]  py-20 md:py-0`}
    >
      {/* Background Image - Only if no video/image or as a fallback/underlay */}
      {(!videoSrc && !imageSrc) && bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-10" />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        <div
          className={`grid grid-cols-1 ${(videoSrc || imageSrc) ? "lg:grid-cols-12" : ""} gap-12 items-center`}
        >
          {/* Left Content Column */}
          <div className={`${(videoSrc || imageSrc) ? "lg:col-span-7" : "max-w-4xl"}`}>
            {/* Heading & Description */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-7xl tracking-tighter leading-[1.05] "
              >
                <span className="bg-linear-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent block">
                  {prefix}
                </span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-300 to-orange-600">
                  {lastWord}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl font-medium"
              >
                {description}
              </motion.p>

              {/* Action Button - Visible for split layout */}
              {(videoSrc || imageSrc) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="pt-6"
                >
                  <Link
                    href="/LetsConnect"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold   tracking-widest text-xs rounded-full hover:bg-orange-600 hover:text-white transition-all transform hover:scale-105 active:scale-95"
                  >
                    Start Your Project
                  </Link>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Media Column (Video or Image) */}
          {(videoSrc || imageSrc) && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square md:aspect-auto md:h-full overflow-hidden  group">
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
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
