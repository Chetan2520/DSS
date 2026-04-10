"use client";
import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const followerRef = useRef(null);
  const isClicking = useRef(false);
  const isHovering = useRef(false);
  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    const ease = 0.18;
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };
    const handleMouseDown = () => { isClicking.current = true; };
    const handleMouseUp = () => { isClicking.current = false; };
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest('a, button, input, textarea, select, [role="button"], .clickable')) {
        isHovering.current = true;
      }
    };
    const handleMouseOut = (e) => {
      const target = e.target;
      if (target && target.closest('a, button, input, textarea, select, [role="button"], .clickable')) {
        isHovering.current = false;
      }
    };

    const animate = () => {
      followerPos.current.x = lerp(followerPos.current.x, mousePos.current.x, ease);
      followerPos.current.y = lerp(followerPos.current.y, mousePos.current.y, ease);
      if (followerRef.current) {
        let scale = 1;
        let opacity = 1;
        let bgColor = 'white';
        if (isClicking.current) { scale = 1.6; opacity = 0.9; }
        else if (isHovering.current) { scale = 2; bgColor = 'rgba(255,255,255,0.08)'; }
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate3d(-50%, -50%, 0) scale(${scale})`;
        followerRef.current.style.opacity = opacity;
        followerRef.current.style.background = bgColor;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
    };
  }, []);

  return (
    <div ref={followerRef} className="hidden md:block fixed pointer-events-none will-change-transform" style={{ width: '3rem', height: '3rem', borderRadius: '50%', position: 'fixed', left: 0, top: 0, zIndex: 9999, mixBlendMode: 'difference', backgroundColor: 'white', transform: 'translate3d(-100px, -100px, 0)' }} aria-hidden="true" />
  );
}
