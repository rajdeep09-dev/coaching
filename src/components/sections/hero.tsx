'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      title: 'Empowering Education Across India',
      subtitle: 'World-class coaching for every aspiring student',
      // We'll use placeholder images for now
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      bgColor: 'from-primary to-accent',
    },
    {
      title: 'Holistic Learning Environment',
      subtitle: 'Nurturing excellence through innovative pedagogy',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      bgColor: 'from-accent to-primary',
    },
    {
      title: 'Expert Faculty, Proven Results',
      subtitle: 'Guidance from renowned educators and industry leaders',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      bgColor: 'from-primary to-accent',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds for premium feel

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      {/* Slider Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center ${
              index === slideIndex
                ? 'opacity-100 transition-opacity duration-2000 ease-in-out'
                : 'opacity-0 transition-opacity duration-2000 ease-in-out'
            }`}
          >
            {/* Ken Burns Effect Container */}
            <div className="relative w-full h-[90vh] min-h-[700px] overflow-hidden">
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-black/30"></div>
              {/* Premium Image with Ken Burns Effect */}
              <div 
                className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-30000 ease-in-out ${
                  index === 0 ? 'scale-115' : index === 1 ? 'scale-110 scale-x-105' : 'scale-120 scale-y-110'
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              {/* Content */}
              <div className="relative z-20 h-full flex flex-col items-center justify-center container-premium mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold text-white gradient-text-premium mb-6 animate-slide-up-premium">
                  {slide.title}
                </h1>
                <p className="text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-slide-up-premium delay-200">
                  {slide.subtitle}
                </p>
                <div className="flex justify-center space-x-6 flex-wrap animate-slide-up-premium delay-400">
                  <a 
                    href="/programs" 
                    className="px-8 py-3 bg-white/15 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all-premium border border-white/20 text-white/90 hover:text-white font-semibold"
                  >
                    Explore Programs
                  </a>
                  <a 
                    href="/donate" 
                    className="px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark rounded-xl transform hover:-translate-y-2 hover:shadow-lg transition-all-premium text-white font-semibold"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlideIndex(index)}
            className={`w-3 h-3 rounded-full transition-all-premium ${
              index === slideIndex
                ? 'bg-white/80 hover:bg-white/90'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
