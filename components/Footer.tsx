import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#160616] relative z-20">
      {/* Stay Connected Section */}
      <div className="py-20 px-4 text-center bg-[#0f0510]">
         <h2 className="text-3xl md:text-4xl font-normal text-white mb-6">Stay Connected With Us</h2>
         <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-sm md:text-base leading-relaxed font-light">
           Stay In The Loop & Get The Inside Scoop! Follow us on social media for exclusive deals, behind-the-scenes peeks, and surprises that'll make your shopping experience even more awesome!
         </p>

         <div className="flex justify-center gap-6 md:gap-8">
            {/* WhatsApp */}
            <a href="#" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform shadow-lg group">
               <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
               </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform shadow-lg group">
               <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                       <linearGradient id="instaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                           <stop offset="0%" stopColor="#f09433" />
                           <stop offset="25%" stopColor="#e6683c" />
                           <stop offset="50%" stopColor="#dc2743" />
                           <stop offset="75%" stopColor="#cc2366" />
                           <stop offset="100%" stopColor="#bc1888" />
                       </linearGradient>
                   </defs>
                   <path fill="url(#instaGrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
               </svg>
            </a>

            {/* YouTube */}
             <a href="#" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform shadow-lg group">
               <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#FF0000]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
               </svg>
            </a>

            {/* TikTok */}
             <a href="#" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform shadow-lg group">
               <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 1.62-.46 3.22-1.35 4.56-1.31 1.97-3.47 3.19-5.83 3.19-1.16 0-2.31-.27-3.34-.82-1.84-.97-3.14-2.85-3.35-4.94-.14-1.46.12-2.94.75-4.24 1.12-2.32 3.49-3.94 6.07-3.94 1.05 0 2.08.27 3.01.76v4.1c-.57-.26-1.2-.39-1.83-.39-.89 0-1.74.33-2.37.93-.68.64-1.07 1.54-1.07 2.49 0 1.95 1.58 3.53 3.53 3.53 1.95 0 3.53-1.58 3.53-3.53V4.26c1.07.31 2.02.87 2.8 1.63-.82-2.03-1.1-4.22-1.1-6.42-.87.21-1.75.29-2.63.29-.02-1.93-.01-3.87 0-5.81z"/>
               </svg>
            </a>
         </div>
      </div>

      {/* Download Section (Darker/Gradient bottom) */}
      <div className="w-full bg-gradient-to-b from-[#4a104a]/30 to-[#2a0920] border-t border-pink-500/20 py-12 px-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
         <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            
            {/* Google Play Badge */}
            <button className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-2 h-12 w-44 hover:opacity-90 transition-opacity shadow-lg">
               <div className="w-7 h-7 flex-shrink-0">
                   <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4285F4" d="M23.64 12.87l-2.45 2.43-3.86-3.84L21.03 7.7c.39.22.84.42 1.25.66.86.49 1.45.96 1.45 2.21 0 1.29-.62 1.79-1.54 2.3z"/>
                        <path fill="#34A853" d="M17.33 11.46l3.86 3.84-2.2 2.18c-1.32 1.3-2.43 2.41-2.46 2.44-.45.42-1.12.39-1.55-.26L.55 3.32c-.17-.26-.25-.66.1-.96l16.68 9.1z"/>
                        <path fill="#FBBC04" d="M17.33 11.46L.65 2.36C.3 2.06-.09 2.29.02 2.76v18.52c-.11.48.29.7.63.4l16.68-10.22z"/>
                        <path fill="#EA4335" d="M17.33 11.46l-16.68-9.1C.3 2.06-.09 2.29.02 2.76c.43-.65 1.1-.68 1.55-.26l13.3 13.19 2.46-4.23z"/>
                    </svg>
               </div>
               <div className="flex flex-col items-start">
                  <span className="text-[9px] font-bold text-gray-600 uppercase leading-none tracking-wide">GET IT ON</span>
                  <span className="text-sm font-bold text-gray-800 leading-tight font-sans">Google Play</span>
               </div>
            </button>

            {/* AppGallery Badge */}
            <button className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-2 h-12 w-44 hover:opacity-90 transition-opacity shadow-lg">
               <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#C7000B]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6 13.5c-.3 0-.6-.3-.6-.6V9.4c0-2.8-2.2-5-5-5s-5 2.2-5 5v3.4c0 .3-.3.6-.6.6s-.6-.3-.6-.6V9.4c0-3.4 2.8-6.2 6.2-6.2s6.2 2.8 6.2 6.2v3.4c0 .4-.3.7-.6.7zM6.9 12.3h10.2c.8 0 1.5.7 1.5 1.5v5.3c0 .8-.7 1.5-1.5 1.5H6.9c-.8 0-1.5-.7-1.5-1.5v-5.3c0-.8.7-1.5 1.5-1.5z"/>
                        <path d="M18.8 19.3c0 .1 0 .2-.1.3-.3.8-.9 1.4-1.8 1.4H6.9c-.8 0-1.5-.6-1.8-1.4 0-.1-.1-.2-.1-.3v-5.3c0-1.1.9-1.9 1.9-1.9h10.2c1.1 0 1.9.9 1.9 1.9v5.3z" fill="none" stroke="#C7000B" strokeWidth="1.2"/>
                    </svg>
               </div>
               <div className="flex flex-col items-start">
                  <span className="text-[9px] font-bold text-gray-600 uppercase leading-none tracking-wide">EXPLORE IT ON</span>
                  <span className="text-sm font-bold text-gray-800 leading-tight font-sans">AppGallery</span>
               </div>
            </button>

             {/* App Store Badge */}
            <button className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-2 h-12 w-44 hover:opacity-90 transition-opacity shadow-lg">
               <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                   <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.666 14.39c-.066 2.57 2.26 3.426 2.291 3.441-.017.06-.358 1.236-1.182 2.443-.715 1.045-1.46 2.086-2.631 2.106-1.15.022-1.52-.68-2.839-.68-1.339 0-1.756.659-2.868.702-1.15.039-2.023-1.149-2.756-2.208-1.503-2.172-2.651-6.137-1.109-8.815.766-1.328 2.137-2.169 3.626-2.203 1.133-.024 2.203.762 2.894.762.69 0 1.986-.942 3.349-.803 1.14.049 2.17.464 2.863 1.474-.072.045-1.712.997-1.638 3.782zm-2.148-7.398c.617-.746 1.034-1.785.92-2.822-1.52.062-2.585 1.053-3.262 1.838-.602.684-1.127 1.765-1.004 2.766 1.7.132 2.766-.995 3.346-1.782z"/>
                   </svg>
               </div>
               <div className="flex flex-col items-start">
                  <span className="text-[8px] font-bold text-gray-600 leading-none tracking-wide">Download on the</span>
                  <span className="text-sm font-bold text-gray-800 leading-tight font-sans">App Store</span>
               </div>
            </button>
         </div>
      </div>
    </footer>
  );
};

export default Footer;