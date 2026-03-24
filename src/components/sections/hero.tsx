'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full pt-20 overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"></div>
      
      {/* Subtle accent elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl dark:bg-yellow-400/5"></div>
      <div className="absolute -bottom-40 left-20 w-80 h-80 bg-green-600/5 rounded-full blur-3xl dark:bg-green-400/5"></div>

      {/* Content Container */}
      <div className="container-luxury relative z-10 h-full flex flex-col items-center justify-center py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Tagline */}
          <p 
            className="text-sm text-yellow-600 dark:text-yellow-400 tracking-widest font-bold mb-6 uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Excellence in Education
          </p>

          {/* Main Heading */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-neutral-50 mb-8 leading-tight"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: 'var(--letter-spacing-wide)' }}
          >
            Transform Your Future
            <br />
            <span className="gradient-text-luxury">With Excellence</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Experience world-class coaching with expert faculty, proven results, and a commitment to your success. Join thousands of students who've transformed their futures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="px-10 py-4 bg-neutral-900 dark:bg-yellow-600 text-white dark:text-neutral-900 rounded-lg hover:shadow-luxury transition-all duration-300 font-bold tracking-wide"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Book Consultation
            </button>
            <button 
              className="px-10 py-4 border-2 border-neutral-900 dark:border-yellow-600 text-neutral-900 dark:text-yellow-600 rounded-lg hover:bg-neutral-900 hover:text-white dark:hover:bg-yellow-600 dark:hover:text-neutral-900 transition-all duration-300 font-bold tracking-wide"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Explore Programs
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8 tracking-widest uppercase font-medium">
              Trusted by Leading Institutions
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
              {['98% Pass Rate', '50K+ Students', 'Expert Faculty', 'Premium Support'].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.split(' ')[0]}
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 uppercase tracking-wide">{stat.split(' ').slice(1).join(' ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
