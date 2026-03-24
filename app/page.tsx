import HeroSection from '@/src/components/sections/hero';
import StatsSection from '@/src/components/sections/stats';
import AboutSection from '@/src/components/sections/about';
import ProgramsSection from '@/src/components/sections/programs';
import TestimonialSection from '@/src/components/sections/testimonials';
import NewsEventsSection from '@/src/components/sections/news-events';
import PartnersSection from '@/src/components/sections/partners';
import NewsletterSection from '@/src/components/sections/newsletter';
import CtaBanner from '@/src/components/sections/cta-banner';

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <TestimonialSection />
      <NewsEventsSection />
      <PartnersSection />
      <NewsletterSection />
      <CtaBanner />
    </div>
  );
}