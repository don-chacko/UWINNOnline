import React from 'react';
import { Check } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="relative w-full bg-[#2a0920] pb-32 pt-16 md:pt-24 -mt-20 md:-mt-32 overflow-hidden z-20">
      {/* Convex Curve Overlay */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[55%] w-[150%] h-[300px] bg-[#2a0920] rounded-[100%] z-0 shadow-[0_-10px_50px_rgba(0,0,0,0.3)] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
        
        {/* Step 1: Download App */}
        <div className="flex flex-col items-center group">
          <div className="h-40 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500 ease-out">
             {/* 3D Arrow approximation */}
             <div className="relative w-28 h-28 flex items-center justify-center filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                   <defs>
                     <linearGradient id="pinkArrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                       <stop offset="0%" stopColor="#f9a8d4" />
                       <stop offset="50%" stopColor="#ec4899" />
                       <stop offset="100%" stopColor="#be185d" />
                     </linearGradient>
                     <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                     </filter>
                   </defs>
                   <path 
                     d="M50 85 L25 45 Q20 35 30 35 L40 35 L40 10 Q40 5 45 5 L55 5 Q60 5 60 10 L60 35 L70 35 Q80 35 75 45 Z" 
                     fill="url(#pinkArrowGrad)" 
                     stroke="#db2777" 
                     strokeWidth="1"
                     className="drop-shadow-lg"
                   />
                   {/* Shine */}
                   <path d="M45 10 L45 35 L35 35 L50 70 L55 70 L48 35 L55 35 L55 10 Z" fill="white" fillOpacity="0.3" />
                </svg>
             </div>
          </div>
          <div className="w-48 mb-6">
             <div className="w-full py-3 rounded-2xl bg-[#1f0614] border border-pink-500/30 shadow-[0_0_15px_rgba(219,39,119,0.15),inset_0_0_10px_rgba(219,39,119,0.1)] text-white font-medium text-lg relative overflow-hidden group-hover:border-pink-500/60 transition-all duration-300">
                <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Download App
             </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-[240px]">
            Get instant access to exclusive deals and seamless shopping
          </p>
        </div>

        {/* Step 2: Sign Up */}
        <div className="flex flex-col items-center group">
          <div className="h-40 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500 ease-out">
             {/* 3D Phone with Hand */}
             <div className="relative w-28 h-28 flex items-center justify-center">
                {/* Hand Back */}
                <div className="absolute bottom-0 right-4 w-16 h-12 bg-[#eeba9b] rounded-2xl rotate-[-10deg] shadow-lg"></div>
                
                {/* Phone */}
                <div className="relative z-10 w-14 h-24 bg-gradient-to-br from-pink-100 to-pink-300 rounded-xl border-[3px] border-pink-400 transform -rotate-12 shadow-2xl flex flex-col items-center pt-2 gap-1 overflow-hidden">
                   <div className="w-8 h-12 bg-white rounded-md shadow-inner flex flex-col items-center justify-center gap-1">
                      <div className="w-6 h-1 bg-pink-100 rounded-full"></div>
                      <div className="w-6 h-1 bg-pink-100 rounded-full"></div>
                      <div className="w-6 h-6 mt-1 rounded-full bg-pink-500 flex items-center justify-center shadow-md">
                        <Check size={14} strokeWidth={4} className="text-white" />
                      </div>
                   </div>
                   <div className="w-full h-full bg-pink-50 mt-1 border-t border-pink-200"></div>
                </div>

                {/* Thumb */}
                <div className="absolute z-20 bottom-4 right-8 w-10 h-6 bg-[#eeba9b] rounded-full border-b-2 border-[#dca685] shadow-md rotate-[-20deg]"></div>
                <div className="absolute z-20 bottom-0 right-6 w-3 h-6 bg-[#eeba9b] rounded-full rotate-[-10deg]"></div>
             </div>
          </div>
          <div className="w-48 mb-6">
             <div className="w-full py-3 rounded-2xl bg-[#1f0614] border border-pink-500/30 shadow-[0_0_15px_rgba(219,39,119,0.15),inset_0_0_10px_rgba(219,39,119,0.1)] text-white font-medium text-lg relative overflow-hidden group-hover:border-pink-500/60 transition-all duration-300">
                <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Sign up
             </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-[240px]">
            Join our community and unlock a world of rewards and savings
          </p>
        </div>

        {/* Step 3: Get Rewards */}
        <div className="flex flex-col items-center group">
          <div className="h-40 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500 ease-out">
             {/* 10 AED Badge */}
             <div className="relative w-28 h-28 flex flex-col items-center justify-center">
                 <div className="relative z-10">
                    <span className="text-7xl font-black text-white drop-shadow-[0_8px_5px_rgba(0,0,0,0.5)] tracking-tighter" style={{ textShadow: '1px 1px 0 #fce7f3, 2px 2px 0 #fbcfe8, 3px 3px 0 #f9a8d4, 4px 4px 0 #f472b6, 5px 5px 0 #ec4899, 6px 6px 0 #db2777' }}>10</span>
                 </div>
                 
                 {/* Ribbon */}
                 <div className="absolute -bottom-2 z-20 bg-gradient-to-r from-pink-600 to-pink-500 text-white text-sm font-bold px-4 py-1 shadow-lg transform -rotate-6 border border-pink-400 rounded-sm">
                   AED
                   <div className="absolute top-0 left-0 w-full h-[50%] bg-white/20"></div>
                 </div>

                 {/* Ribbon Backs */}
                 <div className="absolute bottom-0 -left-2 w-6 h-6 bg-pink-800 transform rotate-[30deg] -z-10 rounded-sm"></div>
                 <div className="absolute bottom-0 -right-2 w-6 h-6 bg-pink-800 transform rotate-[-30deg] -z-10 rounded-sm"></div>
             </div>
          </div>
          <div className="w-48 mb-6">
             <div className="w-full py-3 rounded-2xl bg-[#1f0614] border border-pink-500/30 shadow-[0_0_15px_rgba(219,39,119,0.15),inset_0_0_10px_rgba(219,39,119,0.1)] text-white font-medium text-lg relative overflow-hidden group-hover:border-pink-500/60 transition-all duration-300">
                <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Get Rewards
             </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-[240px]">
             Claim your 10 AED welcome bonus and Start your shopping
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;