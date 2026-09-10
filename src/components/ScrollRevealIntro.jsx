"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollRevealIntro component for high-impact text reveal.
 * @param {string} text - The text to reveal on scroll.
 * @param {string} className - Additional CSS classes for the container.
 */
const ScrollRevealIntro = ({ text, className = "" }) => {
    const textRef = useRef(null);
    
    // Split text into words to retain readability during reveal
    const words = text.split(" ");
    
    useGSAP(() => {
        const el = textRef.current;
        const spans = el.querySelectorAll(".reveal-word");
        
        gsap.to(spans, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "bottom 60%",
                scrub: true,
            },
            color: "#ffffff",
            opacity: 1,
            stagger: 0.1,
            ease: "none"
        });
    }, { scope: textRef });

    return (
        <section className={`py-16 md:py-40 bg-black overflow-hidden px-6 md:px-12 ${className}`}>
            <div className="max-w-7xl mx-auto">
                <h2 
                    ref={textRef} 
                    className="text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-[1.1] text-white/5 text-left transition-all duration-700"
                >
                    {words.map((word, i) => (
                        <span key={i} className="reveal-word inline-block mr-[0.25em] transition-colors duration-300">
                            {word}
                        </span>
                    ))}
                </h2>
            </div>
        </section>
    );
};

export default ScrollRevealIntro;
