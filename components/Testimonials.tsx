import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Don Chacko",
    text: "The Payout are incredible, and I always score amazing deals on my favorite products. The exclusive offers and vouchers are the cherry on top.",
    stars: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    text: "I've tried many shopping apps, but this one takes the cake. The extra rewards and gift coupons are so thoughtful, and the customer service is top-notch.",
    stars: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    text: "I love how I can earn points on every purchase and redeem them for discounts and gift coupons. The app is user-friendly, and the checkout is seamless.",
    stars: 5
  },
  {
    id: 4,
    name: "Jessica Alba",
    text: "Absolutely love the rewards system. It's so easy to accumulate points and the redemption options are fantastic. highly recommended!",
    stars: 5
  },
  {
    id: 5,
    name: "David Smith",
    text: "The best shopping experience I've had in a while. Fast delivery, great products, and the app is super smooth to use.",
    stars: 5
  },
  {
    id: 6,
    name: "Emily Davis",
    text: "Customer support was incredibly helpful when I had a question about my order. Plus, the daily deals are addictive!",
    stars: 5
  },
  {
    id: 7,
    name: "Chris Wilson",
    text: "A game changer for online shopping. The layout is intuitive and finding what I need is a breeze. 5 stars from me.",
    stars: 5
  },
  {
    id: 8,
    name: "Amanda Brown",
    text: "I was skeptical at first, but the quality of the items exceeded my expectations. And getting rewards back is just awesome.",
    stars: 5
  },
  {
    id: 9,
    name: "Daniel Lee",
    text: "Seamless transactions and great variety. I find myself checking the app every morning for new arrivals.",
    stars: 5
  },
  {
    id: 10,
    name: "Sophia Martinez",
    text: "Finally an app that rewards loyal customers properly. The tiers make sense and the benefits are actually useful.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    
    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);

  return (
    <section className="w-full bg-[#160616] py-16 px-6 md:px-12 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-3">Love From Our Customers</h2>
            <p className="text-gray-400 font-light text-sm md:text-base">
              Real Talk, Real Results, See what our satisfied customers have to say about their experience
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={32} strokeWidth={3} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={32} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden" ref={sliderRef}>
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="bg-[#380c2a] rounded-[2rem] p-8 h-full flex flex-col relative group hover:bg-[#4a1038] transition-colors duration-300 min-h-[340px]">
                  
                  {/* Top Row: Quote Icon and Stars */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote 
                      size={48} 
                      className="text-transparent stroke-yellow-500 fill-none" 
                      strokeWidth={1.5}
                    />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-grow mb-8">
                    <p className="text-gray-200 font-light leading-relaxed text-sm md:text-[15px]">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* User Profile */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <span className="text-white text-sm font-light tracking-wide">{testimonial.name}</span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;