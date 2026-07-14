import React from "react";

export default function Marquee({ text }: { text: string }) {
  return (
    <div className="w-full overflow-hidden border-b border-t border-red-thin py-6 bg-brand-card flex whitespace-nowrap">
      <div className="animate-marquee flex gap-12 font-serif text-5xl tracking-widest text-brand-red uppercase">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
      <div className="animate-marquee flex gap-12 font-serif text-5xl tracking-widest text-brand-red uppercase" aria-hidden="true">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
