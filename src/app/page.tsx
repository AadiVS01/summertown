"use client";

import React, { useEffect } from "react";
import { TextReveal, BlockReveal } from "../components/TextReveal";

export default function Home() {
  
  useEffect(() => {
    // ---- Scroll Reveal (clip-path expand for images) ----
    const revealEls = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el=> io.observe(el));
    
    return () => io.disconnect();
  }, []);

  return (
    <div className="w-full">
      <header className="relative border-b-floating pt-[4vw] pb-[3vw] px-[2.4rem] text-center overflow-hidden" id="home">
        <BlockReveal>
          <h1 className="whitespace-nowrap font-sans font-black text-[clamp(2.5rem,11.5vw,11rem)] leading-[0.9] tracking-[-0.05em] text-brand-ink lowercase flex items-center justify-center pt-[0.6em]">
            <span>french toas</span>
            <span className="relative inline-block">
              {/* Stacked Toast Icon matching storefront sign perfectly */}
              <span className="absolute bottom-[90%] left-1/2 -translate-x-[40%] flex items-center justify-center z-10 pointer-events-none w-[0.8em] h-[0.8em]">
                
                {/* BACK TOAST (Left) */}
                <div className="absolute left-[0.1em] top-[0.1em] -rotate-[22deg] w-[0.45em] h-[0.45em]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#b28a68] drop-shadow-md">
                    <path d="M18 5C17.5 5 16 3 12 3C8 3 6.5 5 6 5C4 5 4 7 4 8v10c0 1.5 1.5 3 3 3h10c1.5 0 3-1.5 3-3V8c0-1 0-3-2-3z" />
                  </svg>
                </div>

                {/* FRONT TOAST (Right) */}
                <div className="absolute right-[0.1em] top-[0.2em] rotate-[12deg] w-[0.45em] h-[0.45em]">
                  {/* Dark crust edge / 3D shadow */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="absolute -left-[0.06em] -top-[0.01em] w-full h-full text-[#38413a]">
                    <path d="M18 5C17.5 5 16 3 12 3C8 3 6.5 5 6 5C4 5 4 7 4 8v10c0 1.5 1.5 3 3 3h10c1.5 0 3-1.5 3-3V8c0-1 0-3-2-3z" />
                  </svg>
                  
                  {/* Front Toast body */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="relative z-10 w-full h-full text-[#dbb57d]">
                    <path d="M18 5C17.5 5 16 3 12 3C8 3 6.5 5 6 5C4 5 4 7 4 8v10c0 1.5 1.5 3 3 3h10c1.5 0 3-1.5 3-3V8c0-1 0-3-2-3z" />
                  </svg>
                </div>
                
              </span>
              t
            </span>
          </h1>
        </BlockReveal>
        <BlockReveal delay={0.2}>
          <div className="mt-[1vw] font-sans font-bold text-[clamp(0.7rem,3vw,2rem)] tracking-[0.4em] uppercase text-brand-ink opacity-90">
            BAKERY & KITCHEN
          </div>
        </BlockReveal>
        <TextReveal delay={0.2} className="max-w-[520px] mx-auto mt-[1.6rem] font-serif italic text-brand-ink-soft text-[1.02rem] leading-[1.55]">
          Experience our cozy, charming, and aesthetically pleasing European-style café. The perfect laid-back spot for deep conversations, dates, and solo coffee time across Kochi.
        </TextReveal>
        <div className="mt-[2.6rem] mx-auto max-w-[920px] overflow-hidden border-2 border-brand-line relative bg-brand-cream-2/50">
          <img src="/hero.png?v=1" alt="French Toast Bakery & Kitchen" className="w-full h-auto block" />
        </div>
      </header>

      {/* Marquee Row */}
      <div className="border-b-floating overflow-hidden whitespace-nowrap py-[0.4rem]">
        <div className="inline-flex items-center animate-marquee">
          {Array(8).fill("Burnt Basque Cheesecake • Strawberry & Banoffee Toast • Tuna Olive Sourdough").map((item, i) => (
            <span key={i} className="font-serif italic font-medium text-[1.05rem] text-brand-red px-[1.4rem] inline-flex items-center gap-[1.4rem] after:content-['✦'] after:text-[0.7rem] after:opacity-70">
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 border-b-floating" id="menu">
        <div className="p-[1.5rem_1rem] md:p-[2.5rem_2rem] border-b-floating md:border-b-0-floating md:border-r-floating flex flex-col justify-center">
          <div className="bg-[#74836f]/40 text-brand-ink p-[2.2rem_1.8rem] md:p-[3rem_2.6rem] h-full flex flex-col">
            <span className="text-[0.72rem] tracking-[0.2em] uppercase font-semibold mb-[1rem] block text-brand-ink">Book Now</span>
          <TextReveal className="font-serif font-medium italic text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.02] mb-[1.4rem]">
            The Signatures
          </TextReveal>
          <BlockReveal delay={0.2}>
            <p className="font-serif text-[1.05rem] leading-[1.75] max-w-[52ch] text-[rgba(36,26,20,0.85)]">
              <span className="inline-block align-bottom font-serif font-bold text-[3rem] leading-none pt-[0.1em] pb-[0.05em] px-[0.15em] text-[#74836f] bg-brand-ink mr-[0.1em]">A</span>
              s our name suggests, our signature French toast remains the heart of our menu—from sweet Strawberry & Banoffee to our savory Gouda & Garlic Mushroom. But the exploration doesn't stop there. We are loved for our perfectly textured French Omelettes, Tuna in Olive Sourdough sandwiches, comforting Penne Alfredo, and our famous Burnt Basque Cheesecake paired with a cappuccino.
            </p>
          </BlockReveal>
          <a className="inline-flex items-center gap-[0.6rem] mt-auto self-start text-[0.76rem] tracking-[0.16em] uppercase font-semibold bg-brand-ink text-brand-cream px-[1.6rem] py-[0.85rem] rounded-full hover:bg-brand-cream hover:text-brand-ink transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" href="#">
            View Menu →
          </a>
          </div>
        </div>
        <div className="p-[1.5rem_1rem] md:p-[2.5rem_2rem] relative flex items-center justify-center min-h-[400px]">
          <div className="relative w-full h-full overflow-hidden bg-brand-cream-2 clip-reveal" data-reveal="true">
            <img src="https://images.unsplash.com/photo-1579954115567-dff2eeb6fdef?auto=format&fit=crop&q=80&w=800" alt="Plated dish" className="absolute inset-0 w-full h-full object-cover block" />
          </div>
        </div>
      </section>

      {/* NEW SECTION: Coffee & Craft (Specials Layout) */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-floating">
        <div className="border-b-floating md:border-b-0-floating md:border-r-floating flex flex-col group">
          <div className="h-[340px] overflow-hidden clip-reveal" data-reveal="true">
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" alt="Coffee pouring" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
          </div>
          <div className="p-[1.6rem_2rem_2.2rem]">
            <TextReveal className="font-serif italic font-medium text-[1.3rem] text-brand-red">The Perfect Pour</TextReveal>
            <BlockReveal delay={0.1}>
              <p className="font-serif text-brand-ink-soft mt-2 text-[0.95rem] leading-[1.6]">
                Our baristas take coffee seriously. From smooth, deeply roasted espressos to refreshing iced lattes, every cup is crafted to complement our rich desserts.
              </p>
            </BlockReveal>
          </div>
        </div>
        <div className="flex flex-col group">
          <div className="h-[340px] overflow-hidden clip-reveal" data-reveal="true">
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800" alt="Fresh bread" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
          </div>
          <div className="p-[1.6rem_2rem_2.2rem]">
            <TextReveal className="font-serif italic font-medium text-[1.3rem] text-brand-red">Artisan Sourdough</TextReveal>
            <BlockReveal delay={0.1}>
              <p className="font-serif text-brand-ink-soft mt-2 text-[0.95rem] leading-[1.6]">
                Baked fresh every single morning at our Kacheripady studio. Slow-fermented for that unmistakable tangy crust and soft, airy interior.
              </p>
            </BlockReveal>
          </div>
        </div>
      </section>

      {/* NEW SECTION based on Google Maps Locations */}
      <section className="p-[3.6rem_2.6rem] border-b-floating" id="about">
        <div className="text-center mb-[2.5rem]">
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-brand-red font-semibold block mb-[0.6rem]">Visit Us</span>
          <TextReveal className="font-serif italic font-medium text-[2.4rem] text-brand-ink">Our Locations</TextReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          <BlockReveal delay={0.1} className="text-center p-8 border-2 border-brand-line flex flex-col items-center">
            <h4 className="font-serif font-semibold text-xl text-brand-ink mb-2">Panampilly Nagar</h4>
            <p className="text-brand-ink-soft text-[0.95rem] leading-[1.6] font-serif mb-6 flex-1">Our long-standing neighborhood favorite. Cozy, leafy, and perfect for brunch.</p>
            <a href="#" className="text-brand-red text-xs uppercase tracking-widest font-semibold border-b-2 border-2-brand-red pb-1 hover:text-brand-ink hover:border-2-brand-ink transition-colors">Get Directions</a>
          </BlockReveal>
          <BlockReveal delay={0.2} className="text-center p-8 border-2 border-brand-line flex flex-col items-center">
            <h4 className="font-serif font-semibold text-xl text-brand-ink mb-2">Fort Kochi</h4>
            <p className="text-brand-ink-soft text-[0.95rem] leading-[1.6] font-serif mb-6 flex-1">Located on St. Francis Church Road. A charming heritage spot for dates. Booking recommended!</p>
            <a href="#" className="text-brand-red text-xs uppercase tracking-widest font-semibold border-b-2 border-2-brand-red pb-1 hover:text-brand-ink hover:border-2-brand-ink transition-colors">Get Directions</a>
          </BlockReveal>
          <BlockReveal delay={0.3} className="text-center p-8 border-2 border-brand-line flex flex-col items-center">
            <h4 className="font-serif font-semibold text-xl text-brand-ink mb-2">Kacheripady</h4>
            <p className="text-brand-ink-soft text-[0.95rem] leading-[1.6] font-serif mb-6 flex-1">The Bakery, Kitchen & Studio. Where the baking magic and recipe creation happens daily.</p>
            <a href="#" className="text-brand-red text-xs uppercase tracking-widest font-semibold border-b-2 border-2-brand-red pb-1 hover:text-brand-ink hover:border-2-brand-ink transition-colors">Get Directions</a>
          </BlockReveal>
        </div>
      </section>

      {/* NEW SECTION: Whole Cakes / Shop */}
      <section id="shop" className="border-b-floating">
        <div className="p-[3.4rem_2.6rem_1.4rem] border-b-floating">
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-brand-red font-semibold mb-[1rem] block">Pre-Order</span>
          <TextReveal className="font-serif font-medium italic text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.02] mb-[0.4rem] text-brand-ink">
            Whole Cakes
          </TextReveal>
          <BlockReveal delay={0.2}>
            <p className="font-serif text-[1.05rem] leading-[1.75] text-brand-ink-soft max-w-[60ch]">
              <span className="inline-block align-bottom font-serif font-bold text-[3rem] leading-none pt-[0.1em] pb-[0.05em] px-[0.15em] text-brand-cream bg-brand-red mr-[0.1em]">C</span>
              elebrate with our signature bakes at home. From our legendary Burnt Basque Cheesecake to our light and airy Chiffon Cakes, everything is baked fresh to order at our Kacheripady studio. 
            </p>
          </BlockReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-[2.2rem_1.8rem] text-center border-b-floating md:border-b-0-floating md:border-r-floating">
            <img src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400" alt="Basque Cheesecake" className="w-full max-w-[160px] mx-auto mb-[1.2rem] block drop-shadow-xl rounded-full aspect-square object-cover" />
            <div className="font-serif font-semibold text-[1rem] text-brand-ink">Burnt Basque Cheesecake</div>
            <div className="text-brand-red text-[0.85rem] mt-[0.3rem] tracking-[0.04em]">From ₹1,200</div>
          </div>
          <div className="p-[2.2rem_1.8rem] text-center border-b-floating md:border-b-0-floating md:border-r-floating">
            <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=400" alt="Chiffon Cake" className="w-full max-w-[160px] mx-auto mb-[1.2rem] block drop-shadow-xl rounded-full aspect-square object-cover" />
            <div className="font-serif font-semibold text-[1rem] text-brand-ink">Vanilla Chiffon Cake</div>
            <div className="text-brand-red text-[0.85rem] mt-[0.3rem] tracking-[0.04em]">From ₹950</div>
          </div>
          <div className="p-[2.2rem_1.8rem] text-center">
            <img src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=400" alt="Sourdough Loaf" className="w-full max-w-[160px] mx-auto mb-[1.2rem] block drop-shadow-xl rounded-full aspect-square object-cover" />
            <div className="font-serif font-semibold text-[1rem] text-brand-ink">Fresh Sourdough Loaf</div>
            <div className="text-brand-red text-[0.85rem] mt-[0.3rem] tracking-[0.04em]">From ₹250</div>
          </div>
        </div>
        <div className="text-center py-[2rem] border-t-floating">
          <a className="inline-flex items-center gap-[0.6rem] text-[0.76rem] tracking-[0.16em] uppercase font-semibold bg-brand-red text-brand-cream px-[1.6rem] py-[0.85rem] rounded-full hover:bg-brand-ink hover:-translate-y-[2px] transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" href="#">
            Order Now →
          </a>
        </div>
      </section>

      <section className="p-[3.6rem_2.6rem] text-center border-b-floating">
        <div className="text-[0.72rem] tracking-[0.2em] uppercase opacity-75 text-brand-red">What our guests say</div>
        <TextReveal className="font-serif italic font-medium text-[2rem] my-[0.6rem_1.2rem] text-brand-ink">"Aesthetic, Cozy & Charming"</TextReveal>
        <TextReveal delay={0.2} className="font-serif max-w-[560px] mx-auto leading-[1.7] opacity-95 text-brand-ink-soft">
          "A fantastic European-style vibe with lush greenery. Whether you're here for a solo coffee with their Chiffon cakes or a laid-back weekend brunch date, be prepared for a leisurely pace—it's worth the wait."
        </TextReveal>
        <div className="mt-[1.4rem] font-serif italic text-[1.2rem] text-brand-ink-soft">— Google Maps Reviews</div>
      </section>

      {/* NEW SECTION: Book a Table Form */}
      <section className="p-[3.6rem_2.6rem] border-b-floating" id="reserve">
        <span className="text-[0.72rem] tracking-[0.2em] uppercase text-brand-red font-semibold mb-[2rem] block">Secure a spot</span>
        <BlockReveal delay={0.2}>
          <p className="font-serif text-[1.05rem] leading-[1.75] text-brand-ink-soft max-w-[56ch] mb-8">
            <span className="inline-block align-bottom font-serif font-bold text-[3rem] leading-none pt-[0.1em] pb-[0.05em] px-[0.15em] text-brand-cream bg-brand-red mr-[0.1em]">W</span>
            hether it's a bustling weekend brunch at Panampilly Nagar or a quiet heritage date in Fort Kochi, our tables fill up fast. Reserve your spot below and we'll have the coffee brewing.
          </p>
        </BlockReveal>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[640px] mt-[1.6rem]" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" className="bg-transparent border-b-2 border-2-[rgba(36,26,20,0.3)] p-[0.7rem_0.1rem] font-sans text-[0.9rem] text-brand-ink outline-none transition-colors duration-300 focus:border-2-brand-red placeholder:text-brand-ink-soft placeholder:uppercase placeholder:text-[0.72rem] placeholder:tracking-[0.1em]" />
          <input type="email" placeholder="E-Mail" className="bg-transparent border-b-2 border-2-[rgba(36,26,20,0.3)] p-[0.7rem_0.1rem] font-sans text-[0.9rem] text-brand-ink outline-none transition-colors duration-300 focus:border-2-brand-red placeholder:text-brand-ink-soft placeholder:uppercase placeholder:text-[0.72rem] placeholder:tracking-[0.1em]" />
          <input type="tel" placeholder="Phone Number" className="bg-transparent border-b-2 border-2-[rgba(36,26,20,0.3)] p-[0.7rem_0.1rem] font-sans text-[0.9rem] text-brand-ink outline-none transition-colors duration-300 focus:border-2-brand-red placeholder:text-brand-ink-soft placeholder:uppercase placeholder:text-[0.72rem] placeholder:tracking-[0.1em]" />
          <select className="bg-transparent border-b-2 border-2-[rgba(36,26,20,0.3)] p-[0.7rem_0.1rem] font-sans text-[0.72rem] uppercase tracking-[0.1em] text-brand-ink outline-none transition-colors duration-300 focus:border-2-brand-red">
            <option value="">Select Location</option>
            <option value="panampilly">Panampilly Nagar</option>
            <option value="fortkochi">Fort Kochi</option>
          </select>
          <input type="text" placeholder="Date, Time & Party Size" className="bg-transparent border-b-2 border-2-[rgba(36,26,20,0.3)] p-[0.7rem_0.1rem] font-sans text-[0.9rem] text-brand-ink outline-none transition-colors duration-300 focus:border-2-brand-red placeholder:text-brand-ink-soft placeholder:uppercase placeholder:text-[0.72rem] placeholder:tracking-[0.1em] md:col-span-2" />
          
          <div className="md:col-span-2 mt-4">
            <button className="inline-flex items-center gap-[0.6rem] text-[0.76rem] tracking-[0.16em] uppercase font-semibold bg-brand-red text-brand-cream px-[2rem] py-[1rem] rounded-full hover:bg-brand-ink hover:-translate-y-[2px] transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]">
              Reserve →
            </button>
          </div>
        </form>
      </section>

      <footer className="bg-brand-ink text-brand-cream p-[3.4rem_2.6rem_1.8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
          <div>
            <div className="font-serif text-[1.4rem] italic mb-[0.8rem]">French Toast</div>
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
          <span>© 2026 French Toast Kochi. All rights reserved.</span>
          <span>Editorial layout clone</span>
        </div>
      </footer>
    </div>
  );
}
