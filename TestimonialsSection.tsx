import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Installing solar panels has been one of the best investments for our home. Our electricity bills have been reduced by 90%, and the team at SV Energy Systems made the entire process seamless.",
    name: "Sarah Johnson",
    title: "Homeowner",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=256"
  },
  {
    quote: "As a business owner, I was hesitant about the initial cost of installing solar panels. However, SV Energy Systems provided a detailed cost analysis showing the ROI, and within 5 years we've already recouped our investment.",
    name: "Michael Chen",
    title: "Business Owner",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=256"
  },
  {
    quote: "The customer service at SV Energy Systems is exceptional. They answered all our questions, handled the permits, and completed the installation ahead of schedule. Highly recommend!",
    name: "Jessica Rodriguez",
    title: "Residential Client",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=256"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="section bg-secondary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">What Our Clients Say</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Quotation Mark */}
          <div className="absolute -top-10 left-0 opacity-20">
            <Quote size={80} />
          </div>
          
          {/* Testimonial */}
          <div className="text-center pb-12 relative z-10">
            <div className="mb-8 h-[180px] flex items-center justify-center">
              <p className="text-xl italic">"{testimonials[currentIndex].quote}"</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 rounded-full overflow-hidden border-2 border-white">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
              <p className="text-white/80">{testimonials[currentIndex].title}</p>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white/10 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-white/10 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;