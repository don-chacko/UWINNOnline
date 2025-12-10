import React from 'react';
import { getGoogleDriveImageUrl } from '../utils/imageHelpers';

const GAME_LOGOS = [
  '1H8vmt19j3ZyYWEgBOt36HEWntmf0J-2F', // Power 7
  '1J3hMOTXCHuhDBJU9IQIOYF6SLIKe5Rfn', // Grand 6
  '1NOcpwDN9nvi-h_mtCxjagU0JFg5K2cDE', // Spin 5
  '1SmkxxtvSldDxYCkLkZUyOeWawZdEC__H', // 4 You
  '1aeJCML6VchPgQh-5_5fhI2RdYwR100fb', // Max 3
  '1cnaPLWdRqNjO4gGEYDhJmX8X1omM9hKu',
  '1d1NGZZ92qQZM2sk6yMjygiDpeEBajumB',
  '1ftXZ94qzLTtxSBl--G6HIz_f365RlMHT',
  '1s56l6m97s0uGhW-kPAeND6R5WZFqr07h'
];

const COMPANY_LOGO_ID = '1VCMr3qUK7fkof1L9pH03TfqDPJLn-SMe';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#1a0518] to-[#2d0b2e] border-b border-white/10 py-2 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-50 overflow-hidden">
      {/* Company Logo */}
      <div className="mb-4 md:mb-0 flex-shrink-0 z-10 relative">
        <img 
          src={getGoogleDriveImageUrl(COMPANY_LOGO_ID)} 
          alt="uWinn Logo" 
          className="h-12 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/200x80/transparent/white?text=uWinn";
          }}
        />
      </div>

      {/* Game Logos Sliding Strip */}
      <div className="flex-1 overflow-hidden relative w-full md:ml-12 group">
          <div className="flex w-full">
            {/* First Copy */}
            <div className="flex animate-marquee items-center min-w-full justify-around flex-shrink-0">
               {GAME_LOGOS.map((id, index) => (
                  <div key={`g1-${index}`} className="mx-6 md:mx-10 flex-shrink-0">
                    <img 
                      src={getGoogleDriveImageUrl(id)} 
                      alt={`Game ${index + 1}`} 
                      className="h-8 md:h-10 object-contain drop-shadow-lg opacity-80 hover:opacity-100 transition-opacity hover:scale-110 duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/80x30/transparent/white?text=Game${index+1}`;
                      }}
                    />
                  </div>
               ))}
            </div>
            {/* Second Copy for Infinite Loop */}
            <div className="flex animate-marquee items-center min-w-full justify-around flex-shrink-0" aria-hidden="true">
               {GAME_LOGOS.map((id, index) => (
                  <div key={`g2-${index}`} className="mx-6 md:mx-10 flex-shrink-0">
                    <img 
                      src={getGoogleDriveImageUrl(id)} 
                      alt={`Game ${index + 1}`} 
                      className="h-8 md:h-10 object-contain drop-shadow-lg opacity-80 hover:opacity-100 transition-opacity hover:scale-110 duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/80x30/transparent/white?text=Game${index+1}`;
                      }}
                    />
                  </div>
               ))}
            </div>
          </div>
          
          {/* Edge Gradients for smooth fade out */}
          <div className="absolute top-0 left-0 h-full w-8 md:w-16 bg-gradient-to-r from-[#1e0720] via-[#1e0720]/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 h-full w-8 md:w-16 bg-gradient-to-l from-[#2c0b2d] via-[#2c0b2d]/80 to-transparent pointer-events-none z-10"></div>
      </div>
    </header>
  );
};

export default Header;