"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function ScrollRevealImage({ src, alt, className = "", aspectRatio = "aspect-[4/5]" }: ScrollRevealImageProps) {
  return (
    <div className={`relative overflow-hidden w-full ${aspectRatio} ${className}`}>
      <motion.div
        className="absolute inset-0 bg-brand-red z-10 origin-bottom"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      />
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      />
    </div>
  );
}
