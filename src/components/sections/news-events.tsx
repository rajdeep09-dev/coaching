'use client';

export default function NewsEventsSection() {
  return (
    <section className="relative">
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-10 w-40 h-40 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full floating-premium delay-100 z-0"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full floating-premium delay-200 z-0"></div>
      
      <div className="container-premium mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="section-header">
          <h2 className="section-title">Latest News & Events</h2>
          <p className="section-subtitle">
            Stay updated with our latest achievements, upcoming events, and educational insights
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* News Card */}
          <Link href="/news/1" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-card-bg/80 backdrop-blur-sm border border-border/20 p-8 hover:-translate-y-2 transition-all-premium duration-500 hover:shadow-xl hover:bg-card-bg/95">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-5">
                {/* Category Badge */}
                <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-xl text-sm font-medium inline-flex items-center space-x-2 mb-3">
                  <span className="text-xs">📰</span>
                  <span>News Update</span>
                </div>
                
                {/* Date */}
                <p className="text-muted/60 text-sm">March 24, 2026</p>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  VidyaBharatii Launches Revolutionary Online Learning Platform
                </h3>
                
                {/* Description */}
                <p className="text-muted/80 leading-relaxed mb-4">
                  Our new AI-powered platform offers personalized learning paths, interactive lessons, and real-time progress tracking for students across India.
                </p>
                
                {/* Read More Link */}
                <span className="text-primary/80 font-medium hover-lift">Read More →</span>
              </div>
            </div>
          </Link>
          
          {/* Event Card */}
          <Link href="/events/1" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-card-bg/80 backdrop-blur-sm border border-border/20 p-8 hover:-translate-y-2 transition-all-premium duration-500 hover:shadow-xl hover:bg-card-bg/95">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-5">
                {/* Category Badge */}
                <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-xl text-sm font-medium inline-flex items-center space-x-2 mb-3">
                  <span className="text-xs">📅</span>
                  <span>Upcoming Event</span>
                </div>
                
                {/* Date */}
                <p className="text-muted/60 text-sm">April 15, 2026</p>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  National Scholarship Examination 2026
                </h3>
                
                {/* Description */}
                <p className="text-muted/80 leading-relaxed mb-4">
                  Join 50,000+ students in our annual scholarship exam with prizes worth ₹25 lakhs and free coaching for top 100 performers.
                </p>
                
                {/* Read More Link */}
                <span className="text-primary/80 font-medium hover-lift">Register Now →</span>
              </div>
            </div>
          </Link>
          
          {/* Achievement Card */}
          <Link href="/achievements" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-card-bg/80 backdrop-blur-sm border border-border/20 p-8 hover:-translate-y-2 transition-all-premium duration-500 hover:shadow-xl hover:bg-card-bg/95">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-5">
                {/* Category Badge */}
                <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-xl text-sm font-medium inline-flex items-center space-x-2 mb-3">
                  <span className="text-xs">🏆</span>
                  <span>Student Achievement</span>
                </div>
                
                {/* Date */}
                <p className="text-muted/60 text-sm">March 20, 2026</p>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  VidyaBharatii Students Excel in State Board Exams
                </h3>
                
                {/* Description */}
                <p className="text-muted/80 leading-relaxed mb-4">
                  Our students achieved 95%+ scores in Mathematics and Science, with 12 students securing perfect 100/100 marks.
                </p>
                
                {/* Read More Link */}
                <span className="text-primary/80 font-medium hover-lift">View Details →</span>
              </div>
            </div>
          </Link>
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:from-primary-dark hover:to-accent-dark transition-all-premium transform hover:-translate-y-1 hover:shadow-lg font-medium"
          >
            View All News & Events
          </Link>
        </div>
      </div>
    </section>
  );
}