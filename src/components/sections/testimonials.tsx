'use client';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Student, IIT Bombay (AIR 123)',
      rating: 5,
      comment: 'VidyaBharatii transformed my preparation strategy completely. The faculty is exceptional, study materials are top-notch, and the personalized attention made all the difference in achieving my dream rank.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      achievement: 'Secured AIR 123 in JEE Advanced 2025'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'Student, AIIMS Delhi (AIR 45)',
      rating: 5,
      comment: 'The personalized attention and regular mock tests helped me crack NEET on my first attempt. VidyaBharatii\'s approach to concept building and problem-solving is unmatched in the industry.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      achievement: 'Secured AIR 45 in NEET 2025'
    },
    {
      id: 3,
      name: 'Sneha Patel',
      role: 'Student, IIM Ahmedabad (99.8 Percentile)',
      rating: 5,
      comment: 'The management program curriculum is exceptionally well-structured and the online resources are incredibly helpful for working professionals like me. The faculty brings real-world expertise to every session.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      achievement: 'Scored 99.8 Percentile in CAT 2025'
    },
    {
      id: 4,
      name: 'Arjun Mehta',
      role: 'Parent of Class 10 Student',
      rating: 5,
      comment: 'As a parent, I\'ve seen remarkable improvement in my child\'s confidence and academic performance. VidyaBharatii doesn\'t just teach subjects; they build character and instill a love for learning.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      achievement: 'Child improved from 75% to 95% in school academics'
    }
  ];

  return (
    <section className="relative">
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-10 w-40 h-40 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full floating-premium delay-100 z-0"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full floating-premium delay-200 z-0"></div>
      
      <div className="container-premium mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="section-header">
          <h2 className="section-title">What Our Achievers Say</h2>
          <p className="section-subtitle">
            Hear from students who achieved their dreams with VidyaBharatii\'s guidance and transformed their futures through our proven methodology
          </p>
        </div>
        
        {/* Premium Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" id="testimonial-slider">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full px-4 lg:w-1/2 xl:w-1/3"
                >
                  <div className="relative group">
                    {/* Premium Card */}
                    <div className="bg-card-bg/80 backdrop-blur-sm rounded-2xl border border-border/20 p-10 hover:-translate-y-2 transition-all-premium duration-700 hover:shadow-2xl hover:bg-card-bg/90">
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-100 transition-all-premium duration-500"></div>
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-all-premium duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-6">
                        {/* Header with Image and Details */}
                        <div className="flex items-center space-x-5 mb-4">
                          {/* Image */}
                          <div className="relative w-14 h-14">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-14 h-14 rounded-full object-cover border-4 border-white/20"
                            />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full ring-2 ring-white"></div>
                          </div>
                          
                          {/* Details */}
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold text-primary">{testimonial.name}</h3>
                            <p className="text-muted/80">{testimonial.role}</p>
                          </div>
                        </div>
                        
                        {/* Achievement Badge */}
                        <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-xl text-sm font-medium inline-flex items-center space-x-2 mb-4">
                          <span className="text-xs">🏆</span>
                          <span>{testimonial.achievement}</span>
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="text-lg text-muted/80 leading-relaxed italic mb-6">
                          "{testimonial.comment}"
                        </p>
                        
                        {/* Rating Stars */}
                        <div className="flex items-center space-x-1 text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`${star <= testimonial.rating ? '' : 'text-muted/50'} transition-all-premium duration-300 group-hover:scale-110`}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Navigation */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3 mb-10">
            {[1, 2, 3, 4].map((index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all-premium ${
                  index === 1 ? 'bg-primary/50' : 'bg-muted/30'
                } hover:bg-primary/70`}
                aria-label={`Testimonial ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}