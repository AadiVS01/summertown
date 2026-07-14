"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = children.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-flex overflow-hidden pb-[0.35em] -mb-[0.35em] mr-[0.25em]">
          <motion.span
            initial={{ y: "120%", opacity: 0, rotate: 2 }}
            animate={isInView ? { y: "0%", opacity: 1, rotate: 0 } : { y: "120%", opacity: 0, rotate: 2 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1], // Webflow style smooth premium ease out
              delay: delay + i * 0.02,
            }}
            className="inline-block origin-top-left"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

export function BlockReveal({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
