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
        className="relative z-10 w-full min-h-screen bg-transparent transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom-right p-0 md:p-8 lg:p-12 flex flex-col"
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
        
        <div className="flex-1 flex flex-col w-full max-w-[1400px] mx-auto bg-brand-cream border-0 md:border-2 border-brand-line relative md:rounded-[6px] overflow-hidden">
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
            <div className="relative flex-1 w-full flex flex-col">
              
              <div className="relative w-full border-t-[3px] border-l-[3px] border-r-[3px] border-brand-line flex flex-col flex-1">
                {/* Menu Button - Embedded into the top border */}
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="absolute top-0 left-[2.4rem] -translate-y-1/2 bg-brand-red text-brand-cream px-[1.8rem] py-[0.6rem] rounded-full text-[0.7rem] tracking-[0.18em] uppercase font-semibold flex items-center gap-[0.8rem] hover:bg-brand-ink hover:-translate-y-[calc(50%+2px)] transition-all duration-300 ease-out z-[100]"
                >
                  {isMenuOpen ? "Close" : "Menu"}
                  <span className="flex flex-col gap-[3px] w-[14px]">
                    <i className={`block h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? "translate-y-[4.5px] rotate-45" : ""}`}></i>
                    <i className={`block h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></i>
                    <i className={`block h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? "-translate-y-[4.5px] -rotate-45" : ""}`}></i>
                  </span>
                </button>

                <main className="w-full flex-1 flex flex-col p-[1.5rem] md:p-[4vw]">
                  {children}
                </main>
              </div>

              {/* The Footer with architectural lines */}
              <div className="relative w-full px-[1.5rem] md:px-[4vw] pb-[1.5rem] md:pb-[4vw] flex flex-col">
                 {/* Vertical lines coming down from the top wrapper, stopping at 50% */}
                 <div className="absolute top-0 left-0 w-[3px] h-[50%] bg-brand-line"></div>
                 <div className="absolute top-0 right-0 w-[3px] h-[50%] bg-brand-line"></div>
                 
                 {/* Horizontal lines turning inward */}
                 <div className="absolute top-[50%] left-0 w-[1.5rem] md:w-[4vw] h-[3px] bg-brand-line -translate-y-1/2"></div>
                 <div className="absolute top-[50%] right-0 w-[1.5rem] md:w-[4vw] h-[3px] bg-brand-line -translate-y-1/2"></div>
                 
                 <footer className="w-full border-[3px] border-brand-line bg-brand-ink text-brand-cream p-[3.4rem_2.6rem_1.8rem] relative z-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                     <div>
                       <div className="font-serif text-[1.4rem] italic mb-[0.8rem]">Summertown Cafe</div>
                       <p className="text-[rgba(251,246,236,0.6)] text-[0.85rem] leading-[1.6] max-w-[32ch]">
                         A perfect spot for dates and casual hangouts with a European-style vibe.
                       </p>
                     </div>
                     <div className="flex flex-col">
                       <div className="text-[0.7rem] tracking-[0.18em] uppercase text-brand-red mb-[0.9rem]">Pages</div>
                       {["Home", "Menu", "Reservation", "About"].map(link => (
                         <a key={link} href={`#${link.toLowerCase()}`} className="block text-[rgba(251,246,236,0.75)] text-[0.88rem] py-[0.25rem] hover:text-brand-cream transition-colors">
                           {link}
                         </a>
                       ))}
                     </div>
                     <div className="flex flex-col">
                       <div className="text-[0.7rem] tracking-[0.18em] uppercase text-brand-red mb-[0.9rem]">Socials</div>
                       {["Instagram", "Facebook", "Pinterest"].map(link => (
                         <a key={link} href="#" className="block text-[rgba(251,246,236,0.75)] text-[0.88rem] py-[0.25rem] hover:text-brand-cream transition-colors">
                           {link}
                         </a>
                       ))}
                     </div>
                     <div className="flex flex-col">
                       <div className="text-[0.7rem] tracking-[0.18em] uppercase text-brand-red mb-[0.9rem]">Main Address</div>
                       <span className="text-[rgba(251,246,236,0.75)] text-[0.88rem]">Panampilly Nagar<br/>Kochi, Kerala</span>
                     </div>
                   </div>
                   <div className="mt-[2.6rem] pt-[1.4rem] border-t-2 border-2-[rgba(251,246,236,0.15)] flex justify-between flex-wrap gap-[0.6rem] text-[0.72rem] text-[rgba(251,246,236,0.45)] tracking-[0.04em]">
                     <span>© 2026 Summertown Cafe Kochi. All rights reserved.</span>
                     <span>Editorial layout clone</span>
                   </div>
                 </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
