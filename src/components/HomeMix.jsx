"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CONTENT = [
  {
    tag: "Strategy First",
    tagColor: "#0078f0",
    align: "left",
    title: <>Scattered <br/><span className="text-[#0078f0]">Ideas.</span></>,
    sub: "We gather every signal and forge them into scalable strategies.",
  },
  {
    tag: "Creative Tech",
    tagColor: "#ff9a20",
    align: "right",
    title: <>One <br/><span className="text-[#ff9a20]">Vision.</span></>,
    sub: "Built in Indore, engineered for global impact.",
  },
  {
    tag: "Pure Impact",
    tagColor: "#0078f0",
    align: "left",
    title: <>Measurable <br/>Results.</>,
    sub: "Data-driven growth that actually moves the needle.",
  },
];

const CNT = 4500;

export default function ScrollParticleSphere() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const angleRef = useRef(0);
  const rafRef = useRef(0);
  const blockRefs = useRef([]);
  const scrollProg = useRef({ value: 0 });

  const lerp = (a, b, t) => a + (b - a) * t;
  const eio = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const initParticles = useCallback((W, H) => {
    const cx = W / 2;
    const cy = H / 2;
    const R = Math.min(W, H) * 0.36;
    const arr = [];
    for (let i = 0; i < CNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / CNT);
      const theta = Math.sqrt(CNT * Math.PI) * phi;
      arr.push({
        ix: (Math.random() - 0.5) * W * 2.2,
        iy: (Math.random() - 0.5) * H * 2.2,
        sx: cx + R * Math.sin(phi) * Math.cos(theta),
        sy: cy + R * Math.sin(phi) * Math.sin(theta),
        drift: Math.random() * Math.PI * 2,
        driftSpeed: 0.0007 + Math.random() * 0.0012,
        driftRadius: 6 + Math.random() * 8,
        size: 0.7 + Math.random() * 1.6,
      });
    }
    particlesRef.current = arr;
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // ====================== GSAP TIMELINE (Shorter Scroll) ======================
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=280%",        // ← Yeh kam kiya (pehle 420% tha)
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          scrollProg.current.value = self.progress;
        },
      },
    });

    // Tighter timing for faster experience
    CONTENT.forEach((_, i) => {
      const sectionStart = i * 0.95;   // Har section ke beech kam gap

      // Fade IN
      tl.to(blockRefs.current[i], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        display: "flex",
        duration: 0.7,
        ease: "power2.out"
      }, sectionStart);

      // Fade OUT (last wale ko chhod kar)
      if (i < CONTENT.length - 1) {
        tl.to(blockRefs.current[i], {
          opacity: 0,
          y: -70,
          filter: "blur(18px)",
          duration: 0.75,
          ease: "power2.in"
        }, sectionStart + 0.85);   // Text change jaldi ho
      }
    });

    // ====================== DRAW FUNCTION ======================
    const draw = (now) => {
      rafRef.current = requestAnimationFrame(draw);
      const W = canvas.width;
      const H = canvas.height;
      const prog = scrollProg.current.value;

      // Faster assembly - kam scroll mein hi sphere ban jaye
      const assembleT = eio(Math.min(Math.max((prog - 0.03) / 0.48, 0), 1));

      angleRef.current += 0.003;
      const cosA = Math.cos(angleRef.current);
      const sinA = Math.sin(angleRef.current);
      const cx = W / 2;
      const cy = H / 2;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, W, H);

      const particles = particlesRef.current;

      for (let i = 0; i < CNT; i++) {
        const p = particles[i];

        const fx = p.ix + Math.sin(now * 0.001 + p.drift) * p.driftRadius;
        const fy = p.iy + Math.cos(now * 0.001 + p.drift + 1.3) * p.driftRadius;

        const dx = (p.sx - cx) * cosA - (p.sy - cy) * sinA * 0.45;
        const dy = (p.sx - cx) * sinA * 0.45 + (p.sy - cy) * cosA;

        const px = lerp(fx, cx + dx, assembleT);
        const py = lerp(fy, cy + dy, assembleT);

        const r = Math.round(lerp(90, 255, assembleT));
        const g = Math.round(lerp(140, 160, assembleT));
        const b = Math.round(lerp(255, 50, assembleT));

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${0.45 + assembleT * 0.52})`;
        ctx.fill();
      }
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [initParticles]);

  return (
    <div ref={containerRef} className="relative w-full bg-black overflow-hidden">
      <div className="h-screen w-full relative flex items-center justify-center">
        
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full block z-0" 
        />
        
        <div className="relative z-10 w-full h-full pointer-events-none">
          {CONTENT.map((c, i) => (
            <div
              key={i}
              ref={(el) => (blockRefs.current[i] = el)}
              className={`absolute inset-0 flex flex-col justify-center px-8 md:px-20 
                ${c.align === "left" ? "items-start text-left" : "items-end text-right"}`}
              style={{
                opacity: i === 0 ? 1 : 0,
                display: i === 0 ? "flex" : "none",
                transform: i === 0 ? "translateY(0)" : "translateY(50px)",
                filter: i === 0 ? "blur(0px)" : "blur(15px)"
              }}
            >
              <div className="max-w-3xl">
                <span 
                  className="font-mono text-xs tracking-[0.6em] uppercase font-bold mb-5 block" 
                  style={{ color: c.tagColor }}
                >
                  {c.tag}
                </span>
                <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-[-2px] mb-6 uppercase">
                  {c.title}
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                  {c.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent" />
          <span className="text-[10px] mt-3 tracking-[2px] text-white/60">SCROLL</span>
        </div>
      </div>
    </div>
  );
}