'use client';

export default function ProgramsSection() {
  const programs = [
    {
      id: 1,
      title: 'Engineering Entrance',
      description: 'Comprehensive preparation for JEE Main & Advanced, BITSAT, and state-level engineering exams.',
      icon: '🎯',
      gradient: 'from-primary to-accent',
      href: '/programs/engineering'
    },
    {
      id: 2,
      title: 'Medical Entrance',
      description: 'Specialized coaching for NEET, AIIMS, and other medical entrance examinations.',
      icon: '🩺',
      gradient: 'from-accent to-primary',
      href: '/programs/medical'
    },
    {
      id: 3,
      title: 'Management Programs',
      description: 'Expert guidance for CAT, XAT, GMAT, and other management entrance tests.',
      icon: '📊',
      gradient: 'from-primary to-accent',
      href: '/programs/management'
    },
    {
      id: 4,
      title: 'Foundations',
      description: 'Strong base building for NTSE, Olympiads, and competitive exams for classes 6-10.',
      icon: '🌱',
      gradient: 'from-accent to-primary',
      href: '/programs/foundation'
    }
  ];

  return (
    <section className="relative">
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-10 w-36 h-36 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full floating-premium delay-100 z-0"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full floating-premium delay-200 z-0"></div>
      
      <div className="container-premium mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="section-header">
          <h2 className="section-title">Our Educational Programs</h2>
          <p className="section-subtitle">
            Comprehensive coaching programs designed to help students achieve their academic goals and excel in competitive examinations.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={program.href}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-card-bg/80 backdrop-blur-sm border border-border/20 p-8 hover:-translate-y-2 transition-all-premium duration-500 hover:shadow-xl hover:bg-card-bg/95">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  {/* Icon Placeholder */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${program.gradient} text-white mb-6`}>
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">{program.title}</h3>
                  <p className="text-muted/80 max-w-md">{program.description}</p>
                  <span className="text-sm text-primary/80 font-medium hover-lift">Learn More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}