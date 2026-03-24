'use client';

import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="relative">
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-10 w-40 h-40 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full floating-premium z-0"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full floating-premium delay-200 z-0"></div>
      
      <div className="container-premium mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image Card with Premium Floating Effect */}
          <div className="relative">
            <div className="absolute -inset-2.5 bg-gradient-to-r from-primary to-accent rounded-xl z-0"></div>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="VidyaBharatii Learning Environment" 
                className="rounded-xl shadow-2xl hover:-translate-y-2 transition-all-premium duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gradient-premium">
              About VidyaBharatii
            </h2>
            <p className="text-lg text-muted/80 leading-relaxed max-w-xl">
              VidyaBharatii is a premier educational institution dedicated to providing world-class coaching and holistic development opportunities to students across India. With a legacy of excellence spanning over two decades, we have been guiding students towards achieving their academic dreams and becoming responsible global citizens.
            </p>
            <p className="text-lg text-muted/80 leading-relaxed max-w-xl">
              Our mission is to empower every student with the knowledge, skills, and confidence to excel in their chosen fields. We believe in holistic development, combining rigorous academics with personality development, ethical values, and innovative thinking.
            </p>
            <div className="flex space-x-6 mt-8">
              <Link 
                href="/about" 
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:from-primary-dark hover:to-accent-dark transition-all-premium transform hover:-translate-y-1 hover:shadow-lg font-medium"
              >
                Learn More About Our Journey
              </Link>
              <Link 
                href="/programs" 
                className="flex-1 px-6 py-3 bg-border/50 hover:bg-border/100 rounded-xl border border-border/50 transition-all-premium font-medium text-primary"
              >
                Explore Our Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
