"use client";
import React from "react";
import Link from "next/link";

/**
 * SlidingButton Component
 * @param {string} text - The text to display on the button
 * @param {React.ReactNode} children - Optional complex content (icons, etc.)
 * @param {string} href - Optional link destination
 * @param {function} onClick - Optional click handler
 * @param {string} className - Custom Tailwind classes for styling (bg, text-color, padding, etc.)
 * @param {string} type - Button type (submit, button, etc.)
 * @param {boolean} disabled - Disabled state
 */
const SlidingButton = ({ text, children, href, onClick, className = "", type = "button", disabled = false }) => {
  const content = (
    <div className="relative h-[1.5em] overflow-hidden pointer-events-none">
      <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
        <span className="flex items-center justify-center gap-2 h-[1.5em] whitespace-nowrap">
          {children || text}
        </span>
        <span className="flex items-center justify-center gap-2 h-[1.5em] whitespace-nowrap">
          {children || text}
        </span>
      </div>
    </div>
  );

  const baseClasses = `group relative overflow-hidden transition-all active:scale-95 inline-block disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
};

export default SlidingButton;
