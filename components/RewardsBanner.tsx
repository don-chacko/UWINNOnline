import React from 'react';

const RewardsBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#12030f] pt-8 md:pt-16 pb-4 md:pb-8 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-normal text-white mb-3 md:mb-6 leading-tight">
          Get Extra Savings & Rewards <br className="hidden md:block" />
          On Your Purchases
        </h2>
        
        <div className="space-y-2 md:space-y-3 text-gray-300 font-light text-sm md:text-lg tracking-wide">
          <p>Get Instant Discounts, Exclusive Vouchers, & More With Our Loyalty Program.</p>
          <p>Download & Earn Unlimited Rewards, All In One Place!</p>
        </div>
      </div>
    </section>
  );
};

export default RewardsBanner;