'use client';

export default function PartnersSection() {
  const partners = [
    { name: 'National Testing Agency', url: '/partner1.png' },
    { name: 'Ministry of Education', url: '/partner2.png' },
    { name: 'CBSE Board', url: '/partner3.png' },
    { name: 'NCERT', url: '/partner4.png' },
    { name: 'AICTE', url: '/partner5.png' },
    { name: 'UGC', url: '/partner6.png' },
    { name: 'FICCI', url: '/partner7.png' },
    { name: 'NASSCOM', url: '/partner8.png' },
  ];

  return (
    <section className="relative">
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-10 w-40 h-40 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full floating-premium delay-100 z-0"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full floating-premium delay-200 z-0"></div>
      
      <div className="container-premium mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="section-header text-center">
          <h2 className="section-title">Our Trusted Partners & Affiliations</h2>
          <p className="section-subtitle">
            Collaborating with esteemed educational bodies and organizations to deliver excellence in education
          </p>
        </div>
        
        <div className="relative h-20 overflow-hidden">
          <div className="flex items-center space-x-10 animate-marquee">
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x80?text=Partner';
                    e.target.alt = partner.name;
                  }}
                />
              </div>
            ))}
            {/* Duplicate for seamless marquee */}
            {partners.map((partner, index) => (
              <div key={`${index}-duplicate`} className="flex-shrink-0">
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x80?text=Partner';
                    e.target.alt = partner.name;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
