import React from 'react';
import { getGoogleDriveImageUrl } from '../utils/imageHelpers';

const PHONE_MOCKUP_ID = '1tWP0L9j1M4gaMcP9O6cPGOSt1TD-s9fj';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[90vh] bg-[#1a0b1e] overflow-hidden flex items-start justify-center pt-12 md:pt-16 perspective-1000">
      
      {/* Complex Background Gradient/Nebula Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {/* Dark base */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4a104a] via-[#1a0b1e] to-black opacity-90"></div>
         
         {/* Colorful swirls (Simulated with large blurry circles) */}
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] animate-pulse-slow"></div>
         <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 rounded-full blur-[80px] mix-blend-overlay"></div>
         
         {/* Stars / Dust */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] mx-auto px-4">
        
        {/* Header Text */}
        <div className="text-center mb-4 md:mb-8 animate-float relative z-30">
          <h1 className="text-lg md:text-2xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            SIMPLE <span className="text-pink-500 mx-2">✦</span> SECURE <span className="text-pink-500 mx-2">✦</span> GET REWARDS
          </h1>
        </div>

        {/* Main Phone Display Construction */}
        <div className="relative flex flex-col md:flex-row items-center justify-center w-full mt-4 md:mt-10">
          
          {/* Decorative Ring Behind Phone */}
          <div className="absolute w-[100vw] h-[100vw] md:w-[900px] md:h-[900px] border-[40px] border-pink-500/10 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute w-[110vw] h-[110vw] md:w-[1100px] md:h-[1100px] border-[20px] border-cyan-500/5 rounded-full blur-2xl"></div>

          {/* The Phone Mockup Image */}
          <div className="relative z-20 transform rotate-[-5deg] transition-transform hover:rotate-0 duration-500 flex justify-center">
             <img 
               src={getGoogleDriveImageUrl(PHONE_MOCKUP_ID)} 
               alt="App Mockup" 
               className="w-[170%] md:w-[850px] lg:w-[1200px] max-w-none md:max-w-[95vw] object-contain drop-shadow-[0_0_50px_rgba(219,39,119,0.5)]"
             />
          </div>

          {/* "Swirling" 3D Ribbon Effect (CSS approximation) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180%] h-[120%] -z-10 pointer-events-none opacity-80">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse-slow">
                <path fill="#FF0066" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.3C93.5,8.6,82,21.5,70.6,32.2C59.2,42.9,47.9,51.4,36.4,58.3C24.9,65.2,13.2,70.5,0.8,69.1C-11.6,67.7,-24.7,59.7,-36.5,51.8C-48.3,43.9,-58.8,36.1,-66.9,25.7C-75,15.3,-80.7,2.3,-78.8,-10C-76.9,-22.3,-67.4,-33.9,-56.8,-42.3C-46.2,-50.7,-34.5,-55.9,-22.6,-64.9C-10.7,-73.9,1.4,-86.7,14.1,-88.6C26.8,-90.5,40.1,-81.5,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" style={{ filter: 'blur(40px)', opacity: 0.6 }} />
                <path fill="#8B5CF6" d="M41.9,-68.3C54.6,-62.5,65.6,-53.1,72.8,-41.5C80,-29.9,83.4,-16.1,80.6,-3.6C77.8,8.9,68.8,20.1,60.4,30.6C52,41.1,44.2,50.9,34.4,58.4C24.6,65.9,12.8,71.1,0.6,70.1C-11.6,69.1,-24.2,61.9,-35.4,54.1C-46.6,46.3,-56.4,37.9,-63.4,27.5C-70.4,17.1,-74.6,4.7,-72.4,-6.6C-70.2,-17.9,-61.6,-28.1,-52.6,-36.5C-43.6,-44.9,-34.2,-51.5,-23.8,-58.8C-13.4,-66.1,-2,-74.1,10.2,-75.4C22.4,-76.7,34.6,-71.3,41.9,-68.3Z" transform="translate(100 100) rotate(120)" style={{ filter: 'blur(50px)', opacity: 0.5 }} />
             </svg>
          </div>

          {/* Download Button Floating - Positioned after mockup on mobile, absolute right on desktop */}
          <div className="relative md:absolute mt-[-40px] md:mt-0 md:bottom-24 md:right-16 lg:right-32 z-50 pointer-events-none animate-float w-full md:w-auto flex justify-end md:block px-8 md:px-0">
             <button className="pointer-events-auto group relative bg-[#3a0d24]/90 backdrop-blur-md border-2 border-pink-500/50 text-white px-8 md:px-12 py-3 md:py-4 rounded-full overflow-hidden shadow-[0_0_30px_rgba(219,39,119,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(219,39,119,1)]">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative z-10 text-lg md:text-xl font-bold tracking-widest uppercase drop-shadow-lg">Download Now</span>
             </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;