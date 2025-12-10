import React from 'react';
import PhoneInterface from './PhoneInterface';

const ExclusiveDeals: React.FC = () => {
  return (
    <section className="relative w-full pt-10 md:pt-48 pb-24 md:pb-56 bg-[#0f0510] flex flex-col items-center">
       
       {/* Neon Background Effects - Centered on content */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] md:w-[1200px] md:h-[1200px] flex items-center justify-center pointer-events-none z-30">
          {/* Central Glow */}
          <div className="absolute w-[35%] h-[35%] bg-[#b22f6a] opacity-20 blur-[100px] rounded-full"></div>
          
          {/* 6 Rings: Solid -> Fading */}
          
          {/* Ring 1 (Inner - Solid) */}
          <div className="absolute w-[45%] h-[45%] rounded-full border-2 border-[#d946ef] opacity-100 shadow-[0_0_30px_rgba(217,70,239,0.6)]"></div>
          
          {/* Ring 2 */}
          <div className="absolute w-[56%] h-[56%] rounded-full border-[1.5px] border-[#d946ef] opacity-80 shadow-[0_0_20px_rgba(217,70,239,0.4)]"></div>
          
          {/* Ring 3 */}
          <div className="absolute w-[67%] h-[67%] rounded-full border border-[#d946ef] opacity-60"></div>
          
          {/* Ring 4 */}
          <div className="absolute w-[78%] h-[78%] rounded-full border border-[#d946ef] opacity-40"></div>

          {/* Ring 5 */}
          <div className="absolute w-[89%] h-[89%] rounded-full border border-[#d946ef] opacity-25"></div>

          {/* Ring 6 (Outer - Fading) */}
          <div className="absolute w-[100%] h-[100%] rounded-full border border-[#d946ef] opacity-15"></div>
       </div>

       <div className="relative z-40 flex flex-col items-center w-full max-w-7xl px-4">
          
          <h2 className="text-white text-xl md:text-3xl font-light mb-6 md:mb-12 tracking-wide text-center drop-shadow-md">
             Unlock Exclusive Deals
          </h2>

          {/* Store Icons Row */}
          <div className="flex justify-center gap-6 md:gap-8 mb-8 md:mb-24">
             {/* Google Play */}
             <div className="group cursor-pointer">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1a0b1e] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110 group-hover:border-green-500/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 relative z-10" fill="none">
                       <path d="M5 3.5L19 12L5 20.5V3.5Z" className="fill-white group-hover:fill-green-400 transition-colors" />
                    </svg>
                </div>
             </div>

             {/* Huawei */}
             <div className="group cursor-pointer">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1a0b1e] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110 group-hover:border-red-500/50 relative overflow-hidden">
                   <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-md flex items-center justify-center relative z-10">
                      <div className="text-[10px] md:text-xs font-bold text-white">H</div>
                   </div>
                </div>
             </div>

             {/* App Store */}
             <div className="group cursor-pointer">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1a0b1e] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110 group-hover:border-blue-500/50 relative overflow-hidden">
                   <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-md flex items-center justify-center relative z-10">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-white">
                         <path d="M12 2L14.5 9H19.5L15.5 12.5L17 19.5L12 16L7 19.5L8.5 12.5L4.5 9H9.5L12 2Z" /> 
                      </svg>
                   </div>
                </div>
             </div>
          </div>

          {/* 3D Phone Showcase Construction */}
          <div className="relative w-full h-[300px] md:h-[500px] flex justify-center items-center perspective-[1000px]">
             
             {/* Left Phone (Product) */}
             <div className="absolute transform -translate-x-12 md:-translate-x-48 translate-y-4 -rotate-[15deg] scale-[0.7] md:scale-90 z-10 transition-transform duration-500 hover:z-30 hover:scale-[0.8] md:hover:scale-100 hover:rotate-0">
                <div className="w-[200px] md:w-[280px] h-[400px] md:h-[580px] rounded-[3rem] border-[8px] border-black bg-black shadow-2xl overflow-hidden relative">
                   <PhoneInterface screenType="product" />
                </div>
             </div>

             {/* Right Phone (Wallet) */}
             <div className="absolute transform translate-x-12 md:translate-x-48 translate-y-4 rotate-[15deg] scale-[0.7] md:scale-90 z-10 transition-transform duration-500 hover:z-30 hover:scale-[0.8] md:hover:scale-100 hover:rotate-0">
                <div className="w-[200px] md:w-[280px] h-[400px] md:h-[580px] rounded-[3rem] border-[8px] border-black bg-black shadow-2xl overflow-hidden relative">
                   <PhoneInterface screenType="wallet" />
                </div>
             </div>

             {/* Center Phone (Home) */}
             <div className="absolute transform -translate-y-8 md:-translate-y-12 z-20 scale-[0.8] md:scale-100 transition-transform duration-500 hover:scale-[0.85] md:hover:scale-105">
                <div className="w-[200px] md:w-[280px] h-[400px] md:h-[580px] rounded-[3rem] border-[8px] border-black bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
                   <PhoneInterface screenType="home" />
                </div>
             </div>

          </div>

       </div>
    </section>
  );
};

export default ExclusiveDeals;