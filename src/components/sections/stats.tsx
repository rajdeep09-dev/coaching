'use client';

export default function StatsSection() {
  const stats = [
    { value: '1,200+', label: 'Partner Schools', icon: '🏫', gradient: 'from-primary to-accent' },
    { value: '50,000+', label: 'Students Trained', icon: '👨‍🎓', gradient: 'from-accent to-primary' },
    { value: '2,500+', label: 'Expert Faculty', icon: '👨‍🏫', gradient: 'from-primary to-accent' },
    { value: '28', label: 'States Covered', icon: '🗺️', gradient: 'from-accent to-primary' },
  ];

  return (
    <section className="bg-gradient-to-b from-background/50 to-background/0 backdrop-blur-sm">
      <div className="container-premium mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="section-header">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="section-subtitle">
            Transforming education across India with measurable results and unwavering commitment to excellence
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Premium Stat Card */}
              <div className="bg-card-bg/80 backdrop-blur-sm rounded-xl border border-border/20 p-8 hover:-translate-y-2 transition-all-premium duration-500 hover:shadow-xl hover:bg-card-bg/95">
                {/* Icon Container */}
                <div className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center ${stat.gradient} text-white`}>
                  {stat.icon}
                </div>
                
                {/* Value */}
                <p className="text-4xl font-bold text-primary mb-3 floating-premium">
                  {stat.value}
                </p>
                
                {/* Label */}
                <p className="text-lg font-medium text-secondary/80">
                  {stat.label}
                </p>
                
                {/* Premium Decorative Element */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-all-premium duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-all-premium duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}