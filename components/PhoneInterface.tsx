import React from 'react';
import { Bell, RotateCw, Home, Newspaper, ShoppingBag, Wallet, Menu, Headphones, Speaker, CreditCard, History, Plus, ChevronLeft } from 'lucide-react';
import { getGoogleDriveImageUrl } from '../utils/imageHelpers';

const COMPANY_LOGO_ID = '1VCMr3qUK7fkof1L9pH03TfqDPJLn-SMe';

interface PhoneInterfaceProps {
  screenType?: 'home' | 'product' | 'wallet';
}

const PhoneInterface: React.FC<PhoneInterfaceProps> = ({ screenType = 'home' }) => {
  const isDark = screenType === 'product'; // Product screen has dark/gradient theme in the design
  const textColor = isDark ? 'text-white' : 'text-gray-800';
  const bgColor = screenType === 'wallet' ? 'bg-gray-50' : (screenType === 'product' ? 'bg-[#380c2a]' : 'bg-white');

  return (
    <div className={`w-full h-full ${bgColor} relative flex flex-col ${textColor} overflow-hidden font-sans select-none`}>
      {/* Status Bar Mock */}
      <div className={`flex justify-between items-center px-6 pt-3 text-[10px] font-semibold z-30 ${isDark ? 'text-white' : 'text-black'}`}>
        <span>9:41</span>
        <div className="flex gap-1">
           <span className={`w-3 h-3 rounded-full opacity-20 ${isDark ? 'bg-white' : 'bg-black'}`}></span>
           <span className={`w-3 h-3 rounded-full opacity-50 ${isDark ? 'bg-white' : 'bg-black'}`}></span>
           <span className={`w-3 h-3 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}></span>
        </div>
      </div>

      {/* Dynamic Island Mock */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[30%] h-[24px] bg-black rounded-full z-40"></div>

      {/* --- CONTENT FOR HOME SCREEN --- */}
      {screenType === 'home' && (
        <>
          {/* App Header */}
          <div className="px-4 pt-8 pb-2 flex justify-between items-center bg-white z-20">
            <div className="flex items-center gap-2">
               <img src={getGoogleDriveImageUrl(COMPANY_LOGO_ID)} alt="Logo" className="h-6 object-contain" />
            </div>
            <div className="flex items-center gap-3 text-[#b22f6a]">
              <RotateCw size={18} />
              <Bell size={18} />
              <div className="w-6 h-6 rounded-full bg-[#9d1c4c] flex items-center justify-center text-white text-xs font-bold">
                B
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-hidden relative bg-gray-50">
             {/* Mega Sale Banner */}
             <div className="m-4 relative rounded-2xl overflow-hidden h-32 bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="text-center z-10 text-white">
                   <h3 className="text-2xl font-black italic tracking-tighter drop-shadow-md">MEGASALE</h3>
                   <div className="mt-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded inline-block transform -rotate-3">
                     SHOP NOW
                   </div>
                </div>
                <div className="absolute right-[-10px] bottom-[-10px] w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-50"></div>
             </div>

             {/* Product List */}
             <div className="px-4 space-y-3">
               <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-black/80 rounded flex items-center justify-center text-white text-[10px]">Watch</div>
                  </div>
                  <div className="flex-1">
                     <h4 className="text-xs font-bold text-gray-800">Smart watch</h4>
                     <p className="text-[9px] text-gray-500 leading-tight">U-winn Smart watch with AMOLED</p>
                     <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] font-bold bg-yellow-100 text-yellow-700 px-1.5 rounded">AED 150</span>
                        <button className="bg-orange-500 text-white text-[9px] font-bold px-2 py-1 rounded-full">Buy Now</button>
                     </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center text-gray-600">USB</div>
                  </div>
                  <div className="flex-1">
                     <h4 className="text-xs font-bold text-gray-800">Multi Charging Cable</h4>
                     <p className="text-[9px] text-gray-500 leading-tight">USB Cable 3 in 1 Multi</p>
                     <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] font-bold bg-yellow-100 text-yellow-700 px-1.5 rounded">AED 50</span>
                        <button className="bg-orange-500 text-white text-[9px] font-bold px-2 py-1 rounded-full">Buy Now</button>
                     </div>
                  </div>
               </div>
             </div>
          </div>
        </>
      )}

      {/* --- CONTENT FOR PRODUCT SCREEN --- */}
      {screenType === 'product' && (
        <div className="flex-1 flex flex-col relative bg-gradient-to-b from-[#380c2a] to-[#5c1236]">
          {/* Header */}
          <div className="px-4 pt-10 pb-2 flex justify-between items-center z-20">
             <ChevronLeft size={20} className="text-white" />
             <div className="flex gap-3 text-white">
                <RotateCw size={18} />
                <Bell size={18} />
                <div className="w-6 h-6 rounded-full bg-[#9d1c4c] flex items-center justify-center text-white text-xs font-bold">U</div>
             </div>
          </div>

          {/* Product Showcase */}
          <div className="px-4 mt-2">
             <div className="bg-gradient-to-br from-[#7a1343] to-[#4a0b2a] rounded-2xl p-4 shadow-xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 rounded-full blur-[50px] opacity-30"></div>
                <div className="relative z-10">
                   <div className="text-[10px] text-yellow-400 font-bold mb-1">NEW ARRIVAL</div>
                   <h2 className="text-2xl font-black text-white leading-none">MINI<br/>SPEAKER</h2>
                   <div className="mt-4 flex justify-center">
                      <Speaker size={80} className="text-white/90 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform -rotate-12" />
                   </div>
                </div>
             </div>
          </div>

          {/* Details */}
          <div className="mt-4 px-4 space-y-3">
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/5">
                <div className="flex justify-between items-center">
                   <div>
                      <h3 className="text-white text-sm font-bold">ZD Headphone</h3>
                      <p className="text-white/60 text-[10px]">ZD Headphone</p>
                   </div>
                   <div className="bg-yellow-500 rounded-full px-2 py-1 text-xs font-bold text-black">AED 95</div>
                </div>
                <button className="w-full mt-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-2 rounded-lg text-xs shadow-lg">Buy Now</button>
             </div>
             
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/5 flex justify-between items-center">
                <div>
                   <h3 className="text-white text-sm font-bold">Airpod</h3>
                   <p className="text-white/60 text-[10px]">Airpod</p>
                </div>
                <div className="bg-yellow-500 rounded-full px-2 py-1 text-xs font-bold text-black">AED 250</div>
             </div>
          </div>
        </div>
      )}

      {/* --- CONTENT FOR WALLET SCREEN --- */}
      {screenType === 'wallet' && (
        <div className="flex-1 flex flex-col bg-white">
           <div className="px-4 pt-10 pb-4 flex justify-between items-center border-b border-gray-100">
              <div className="flex items-center gap-2">
                 <ChevronLeft size={20} className="text-gray-800" />
                 <span className="font-bold text-gray-800 text-sm">Wallet</span>
              </div>
              <button className="bg-[#b22f6a] text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
                 <Plus size={10} /> Add Credit
              </button>
           </div>

           <div className="p-4 bg-gray-50 flex-1">
              {/* Balance Card */}
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-4 text-white shadow-lg mb-6 relative overflow-hidden">
                 <div className="relative z-10">
                    <p className="text-[10px] opacity-90 mb-1">Balance</p>
                    <h2 className="text-2xl font-bold">U POINTS: 100.00</h2>
                    <p className="text-[9px] mt-2 opacity-80 text-right">* 1 UPoint = 1 AED</p>
                 </div>
                 <div className="absolute -right-4 -bottom-8 w-24 h-24 bg-white opacity-10 rounded-full"></div>
              </div>

              {/* Transaction Type */}
              <h3 className="text-xs font-bold text-gray-700 mb-3">Select Transaction Type</h3>
              
              <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center gap-3 mb-4">
                 <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                 </div>
                 <span className="text-xs font-medium text-gray-600">Withdraw</span>
              </div>

              <button className="w-full bg-gradient-to-r from-[#b22f6a] to-[#d946ef] text-white py-3 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-shadow">
                 Transaction History
              </button>
           </div>
        </div>
      )}

      {/* Bottom Navigation (Common) */}
      <div className={`absolute bottom-0 left-0 right-0 h-14 rounded-t-3xl flex justify-around items-center px-2 z-30 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] ${isDark ? 'bg-[#2a0920] text-gray-400' : 'bg-white text-gray-400'}`}>
        <div className={`flex flex-col items-center gap-1 cursor-pointer ${screenType === 'home' ? 'text-[#b22f6a]' : ''}`}>
          <Home size={18} />
          <span className="text-[8px] font-medium">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#b22f6a]">
          <Newspaper size={18} />
          <span className="text-[8px] font-medium">News</span>
        </div>
        <div className={`flex flex-col items-center gap-1 cursor-pointer ${screenType === 'product' ? 'text-[#b22f6a]' : ''}`}>
          <ShoppingBag size={18} />
          <span className="text-[8px] font-medium">Buy</span>
        </div>
        <div className={`flex flex-col items-center gap-1 cursor-pointer ${screenType === 'wallet' ? 'text-[#b22f6a]' : ''}`}>
          <Wallet size={18} />
          <span className="text-[8px] font-medium">Wallet</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#b22f6a]">
          <Menu size={18} />
          <span className="text-[8px] font-medium">Menu</span>
        </div>
      </div>
    </div>
  );
};

export default PhoneInterface;