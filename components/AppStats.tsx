import React from 'react';
import { getGoogleDriveImageUrl } from '../utils/imageHelpers';

const BG_IMAGE_ID = '1FJyxxvpxj_0ifYCg9JARANHAYHgMR1no';
const STORE_ICONS_ID = '1ulRvInfi-P8g1LUEDcoXptQjN3ODT9AD';

const AppStats: React.FC = () => {
  return (
    <section className="w-full relative bg-[#160616]">
       {/* Main Content Area */}
       <div 
         className="w-full pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden flex flex-col justify-center items-center min-h-[800px] bg-contain bg-center bg-no-repeat"
         style={{
           backgroundImage: `url(${getGoogleDriveImageUrl(BG_IMAGE_ID)})`
         }}
       >
         {/* Optional dark overlay if BG is too bright, keeping it light for this specific image as it looks dark already */}
         <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
         
         <div className="relative w-full max-w-6xl mx-auto px-4 flex justify-center items-center h-full">
            
            {/* Floating Bubbles */}
            
            {/* 100K+ Downloads - Left Yellow */}
            <div className="absolute left-4 md:left-20 lg:left-32 top-1/3 transform -translate-y-1/2 w-32 h-32 md:w-44 md:h-44 bg-[#fbbf24] rounded-full flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(251,191,36,0.4)] animate-float z-20 hover:scale-110 transition-transform duration-300">
               <span className="text-3xl md:text-5xl font-black text-[#1a0b1e] mb-1">100K+</span>
               <span className="text-xs md:text-sm font-semibold text-[#1a0b1e]">Downloads</span>
            </div>

            {/* 4.8 App Rating - Top Center White - Positioned higher for spacing */}
            <div className="absolute -top-16 md:-top-24 left-1/2 transform -translate-x-1/2 w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-float delay-1000 z-20 hover:scale-110 transition-transform duration-300">
               <span className="text-3xl md:text-4xl font-black text-[#4a104a] mb-1">4.8</span>
               <span className="text-xs md:text-sm font-semibold text-[#4a104a]">App Rating</span>
            </div>

            {/* 50K+ Active Users - Right Yellow - Positioned lower for spacing */}
            <div className="absolute top-[55%] md:top-[58%] right-4 md:right-[22%] lg:right-[26%] w-32 h-32 md:w-40 md:h-40 bg-[#fbbf24] rounded-full flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(251,191,36,0.4)] animate-float delay-700 z-30 hover:scale-110 transition-transform duration-300">
               <span className="text-3xl md:text-4xl font-black text-[#1a0b1e] mb-1">50K+</span>
               <span className="text-xs md:text-sm font-semibold text-[#1a0b1e]">Active Users</span>
            </div>

            {/* 25+ Countries - Bottom Right White */}
            <div className="absolute -bottom-10 right-4 md:right-16 lg:right-32 w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-float delay-500 z-20 hover:scale-110 transition-transform duration-300">
               <span className="text-3xl md:text-4xl font-black text-[#4a104a] mb-1">25+</span>
               <span className="text-xs md:text-sm font-semibold text-[#4a104a]">Countries</span>
            </div>

         </div>
       </div>

       {/* Footer Strip with App Store Icons */}
       <div className="w-full bg-[#3a0d24] border-t border-white/5 py-8 md:py-10 flex justify-center items-center relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
          <img 
            src={getGoogleDriveImageUrl(STORE_ICONS_ID)} 
            alt="Download on Google Play, AppGallery, and App Store" 
            className="h-10 md:h-14 lg:h-16 object-contain cursor-pointer hover:opacity-90 transition-opacity"
          />
       </div>
    </section>
  );
};

export default AppStats;