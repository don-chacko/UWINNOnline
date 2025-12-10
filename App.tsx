import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RewardsBanner from './components/RewardsBanner';
import ExclusiveDeals from './components/ExclusiveDeals';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import AppStats from './components/AppStats';
import SocialLinks from './components/SocialLinks';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-white bg-[#0f0510]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <RewardsBanner />
        <ExclusiveDeals />
        <HowItWorks />
        <SocialLinks />
        <Testimonials />
        <AppStats />
      </main>
    </div>
  );
};

export default App;