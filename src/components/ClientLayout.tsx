"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-brand-red-deep">
      {/* Background Menu Layer */}
      <div 
        className="fixed inset-0 z-0 bg-brand-red-deep flex flex-col justify-between p-[5vw]"
        style={{
          backgroundImage: "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.1), transparent 40%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.1), transparent 40%), url('/fabric-textured1.jpg')",
          backgroundBlendMode: "overlay, overlay, multiply",
          backgroundSize: "cover, cover, cover",
          backgroundPosition: "center"
        }}
      >
        <div className="text-[rgba(251,246,236,0.55)] text-[0.75rem] tracking-[0.18em] uppercase">Tap “Menu” again to close</div>
        
        <nav className="flex flex-col gap-[0.2em] mt-8">
          {["Home", "Menu", "Reserve", "About", "Shop", "Articles"].map((item, idx) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)} 
              className="group font-serif italic text-brand-cream text-[clamp(2.6rem,8vw,6.2rem)] leading-[1.05] tracking-[-0.01em] hover:text-[#e8c9a8] hover:translate-x-[14px] transition-all duration-[350ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center w-fit"
            >
              <span className="font-sans not-italic text-[0.28em] align-super opacity-60 mr-[0.3em]">0{idx + 1}</span>
              {item}
            </Link>
          ))}
        </nav>
        
        <div className="flex justify-between flex-wrap gap-6 text-[rgba(251,246,236,0.7)] text-[0.8rem] tracking-[0.05em] mt-8">
          <div className="flex flex-col">
            <span className="text-brand-cream opacity-40 text-[0.7rem] tracking-[0.2em] uppercase mb-[0.6em]">Address</span>
            <span>Panampilly Nagar<br/>Kochi, Kerala</span>
          </div>
          <div className="flex flex-col">
            <span className="text-brand-cream opacity-40 text-[0.7rem] tracking-[0.2em] uppercase mb-[0.6em]">Contact</span>
            <a href="tel:+918888888888" className="hover:text-brand-cream py-[2px] transition-colors">+91 888 888 8888</a>
            <a href="mailto:hello@frenchtoast.in" className="hover:text-brand-cream py-[2px] transition-colors">hello@frenchtoast.in</a>
          </div>
          <div className="flex flex-col">
            <span className="text-brand-cream opacity-40 text-[0.7rem] tracking-[0.2em] uppercase mb-[0.6em]">Socials</span>
            <a href="#" className="hover:text-brand-cream py-[2px] transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-cream py-[2px] transition-colors">Facebook</a>
          </div>
        </div>
      </div>

      {/* Foreground Canvas */}
      <div
        className="relative z-10 w-full min-h-screen bg-transparent transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom-right p-4 md:p-8 lg:p-12 flex flex-col"
        style={{
          transform: isMenuOpen ? "translate3d(50%, 0, 0)" : "translate3d(0, 0, 0)",
          willChange: "transform"
        }}
      >
        {/* Transparent overlay to catch clicks when menu is open */}
        {isMenuOpen && (
          <div 
            className="absolute inset-0 z-50 cursor-pointer" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          />
        )}
        
        <div className="flex-1 flex flex-col w-full max-w-[1400px] mx-auto bg-brand-cream border-2 border-brand-line relative rounded-[6px] overflow-hidden">
          {/* Texture Layer */}
          <div 
            className="absolute inset-0 z-[2] opacity-20 pointer-events-none"
            style={{
              backgroundImage: "url('/fabric-textured.jpg')",
              backgroundSize: "800px",
              backgroundRepeat: "repeat",
            }}
          />
          
          {/* Content Layer with Outer Margin */}
          <div className="relative z-[3] flex flex-col flex-1 w-full p-[1.5rem] md:p-[2.5rem]">
            
            {/* Inner Border Frame */}
            <div className="relative flex-1 w-full border-4 border-brand-line flex flex-col">
              
              {/* Menu Button - Embedded into the top border */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="absolute top-0 left-[2.4rem] -translate-y-1/2 z-50 px-[1.8rem] py-[0.6rem] bg-brand-red text-brand-cream flex items-center gap-[0.8rem] hover:bg-brand-ink transition-colors duration-300 shadow-sm cursor-pointer border-4 border-brand-red hover:border-brand-ink"
              >
                <span className="flex flex-col gap-[3px] w-[14px]">
                  <i className={`block h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? "translate-y-[4.5px] rotate-45" : ""}`}></i>
                  <i className={`block h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></i>
                  <i className={`block h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? "-translate-y-[4.5px] -rotate-45" : ""}`}></i>
                </span>
                <span className="font-serif italic font-medium text-[1rem] tracking-wide">
                  {isMenuOpen ? "Close" : "Menu"}
                </span>
              </button>

              <main className="w-full flex-1 flex flex-col px-[1.5rem] md:px-[4vw]">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
