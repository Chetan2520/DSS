"use client";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { MoveRight, Loader2, CheckCircle2, SendIcon, Send, SendHorizonal } from "lucide-react";
import SlidingButton from "./SlidingButton";
import Image from "next/image";

export default function DiscussProject() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const [logos, setLogos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // 1. Dynamic Logo Fetching
  useEffect(() => {
    const checkImages = async () => {
      const availableIds = [
        10, 12, 13, 14, 16, 17, 19, 20, 21, 22, 25, 26, 27, 28, 29, 31, 32, 33,
        34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 6, 9,
      ];

      const results = await Promise.all(
        availableIds.map((i) => {
          const src = `/images/clients/${i}.png`;
          return new Promise((resolve) => {
            const img = new window.Image();
            img.src = src;
            img.onload = () => resolve({ id: i, src, valid: true });
            img.onerror = () => resolve({ id: i, valid: false });
          });
        }),
      );

      setLogos(results.filter((r) => r.valid));
    };

    checkImages();
  }, []);

  // 2. Responsive Animation (Vertical on Desktop, Horizontal on Mobile)
  useLayoutEffect(() => {
    if (logos.length === 0) return;
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Vertical for desktop
        const totalHeight = marquee.scrollHeight;
        gsap.to(marquee, {
          y: `-${totalHeight / 2}px`,
          duration: 30,
          ease: "none",
          repeat: Infinity,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        // Horizontal for mobile
        const totalWidth = marquee.scrollWidth;
        gsap.to(marquee, {
          x: `-${totalWidth / 2}px`,
          duration: 30,
          ease: "none",
          repeat: Infinity,
        });
      });
    });

    return () => ctx.revert();
  }, [logos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.formType = "Discuss Project / Let's Connect";

    try {
      const response = await fetch(
        "https://digitalsuccesssolutions.in/php/send-mail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        setIsSubmitted(true);
        e.target.reset();

        // GA4 Conversion Tracking
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "generate_lead", {
            event_category: "Form Submission",
            event_label: "Discuss Project",
          });
        }
      } else {
        setError(result.message || "Failed to send. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative   py-16 px-4 md:px-10 overflow-hidden flex flex-col justify-center items-center font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/final-services.jpeg"
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-20 mb-8 md:mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white tracking-tighter leading-tight md:leading-none   px-4">
          Let&apos;s Create <br className="hidden sm:block" /> Greatness
          Together!
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl w-full lg:h-[450px] p-5 md:p-10 rounded-[32px] md:rounded-[40px] border      flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch shadow-2xl overflow-hidden  ">
        {/* FORM SIDE */}
        <div className="w-full lg:w-[60%] flex flex-col h-full lg:overflow-y-auto pr-0 lg:pr-2 custom-scrollbar">
          <h3 className="text-xl md:text-3xl font-semibold text-white mb-6 tracking-tight  ">
            Discuss Your Project With Us
          </h3>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center space-y-4 py-10">
              <CheckCircle2 size={60} className="text-blue-500" />
              <h4 className="text-2xl font-bold text-white">
                Request Received!
              </h4>
              <p className="text-gray-400">
                Our team will contact you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-blue-400 underline text-sm"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
            >
              <input
                name="name"
                type="text"
                placeholder="Full Name *"
                required
                className="bg-white/5 border border-white/10 p-3 rounded-xl text-white outline-none focus:border-[#0078f0] transition-all text-sm"
              />
              <input
                name="company"
                type="text"
                placeholder="Company Name *"
                required
                className="bg-white/5 border border-white/10 p-3 rounded-xl text-white outline-none focus:border-[#0078f0] transition-all text-sm"
              />
              <input
                name="phone"
                type="tel"
                placeholder="+91 Phone Number *"
                required
                className="bg-white/5 border border-white/10 p-3 rounded-xl text-white outline-none focus:border-[#0078f0] transition-all text-sm"
              />
              <input
                name="email"
                type="email"
                placeholder="Email *"
                required
                className="bg-white/5 border border-white/10 p-3 rounded-xl text-white outline-none focus:border-[#0078f0] transition-all text-sm"
              />
              <textarea
                name="message"
                placeholder="About Your Project *"
                required
                className="bg-white/5 border border-white/10 p-3 rounded-xl text-white sm:col-span-2 outline-none focus:border-[#0078f0] transition-all resize-none text-sm h-24"
              ></textarea>

              <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 mt-auto pt-0 md:pt-4">
                <div className="flex flex-col gap-2">
                  {error && (
                    <p className="text-red-500 text-[10px] italic">{error}</p>
                  )}
                </div>
                <SlidingButton
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-4 bg-white text-black font-semibold rounded-full text-sm shadow-lg tracking-wide"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin w-4 h-4" /> Sending...
                    </>
                  ) : (
                    <>
                      Send a Message{" "}

                    </>
                  )}
                </SlidingButton>
              </div>
            </form>
          )}
        </div>

        {/* LOGO MARQUEE SIDE */}
        <div className="w-full lg:w-[40%] lg:pl-10   flex flex-col items-center justify-center h-full mt-4 lg:mt-0">
          <div className="mb-4 lg:mb-6 hidden md:block">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight  not-[]:">
              Driven by Trust
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Our work speaks through the trust placed in us by top names across
              the globe.
            </p>
          </div>

          <div
            ref={containerRef}
            className="relative flex-1 h-[120px] md:h-[180px] lg:h-full overflow-hidden rounded-2xl md:rounded-3xl bg-transparent     shadow-inner"
          >
            <div
              ref={marqueeRef}
              className="flex lg:flex-col flex-row gap-3 p-2 md:p-3 w-max lg:w-full"
            >
              {[...Array(2)].map((_, loopIdx) => (
                <div
                  key={loopIdx}
                  className="flex lg:grid lg:grid-cols-3 gap-3"
                >
                  {logos.map((logo, idx) => (
                    <div
                      key={`${loopIdx}-${idx}`}
                      className="flex-shrink-0 w-20 h-16 md:w-28 lg:w-full lg:h-20 flex items-center justify-center bg-gray-800 rounded-xl md:rounded-2xl       transition-all duration-300 p-2 md:p-4"
                    >
                      <Image
                        src={logo.src}
                        alt={`Client ${logo.id}`}
                        width={120}
                        height={80}
                        className="h-full w-full object-contain filter-none opacity-100"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
