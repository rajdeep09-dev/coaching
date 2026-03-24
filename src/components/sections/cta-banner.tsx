'use client';

export default function CtaBanner() {
  return (
    <section className="relative">
      {/* Parallax Background */}
      <div className="relative isolate">
        {/* Background Image - using placeholder */}
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}
        ></div>
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-black/40"></div>
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 left-1/6 w-24 h-24 bg-primary/10 rounded-full floating-premium"></div>
          <div className="absolute bottom-10 right-1/6 w-20 h-20 bg-accent/10 rounded-full floating-premium delay-200"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/5 rounded-full floating-premium delay-400"></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-accent/5 rounded-full floating-premium delay-600"></div>
        </div>
        {/* Content */}
        <div className="relative z-20 pt-24 pb-20 text-center">
          <h2 className="text-4xl font-bold text-white gradient-text-premium mb-6 animate-slide-up-premium">
            Join Our Mission to Educate Every Child
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 animate-slide-up-premium delay-200">
            Together, we can provide world-class education to underprivileged students across India and build a brighter future for generations to come.
          </p>
          <div className="flex justify-center space-x-6 flex-wrap animate-slide-up-premium delay-400">
            <a 
              href="/about" 
              className="px-8 py-3 bg-white/15 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all-premium border border-white/20 text-white/90 hover:text-white font-semibold"
            >
              Learn About Our Impact
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
    </section>
  );
}