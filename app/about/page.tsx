import AboutSection from '@/src/components/sections/about';
import StatsSection from '@/src/components/sections/stats';
import ProgramsSection from '@/src/components/sections/programs';
import TestimonialSection from '@/src/components/sections/testimonials';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <AboutSection />
      <StatsSection />
      <ProgramsSection />
      <TestimonialSection />
    </div>
  );
}