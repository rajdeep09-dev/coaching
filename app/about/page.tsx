import AboutSection from '@/src/components/sections/about';
import StatsSection from '@/src/components/sections/stats';
import ProgramsSection from '@/src/components/sections/programs';
import TestimonialSection from '@/src/components/sections/testimonials';

export const metadata = {
  title: 'About VidyaBharatii - Our Mission & Impact',
  description: 'Learn about VidyaBharatii\'s mission to provide world-class education, our impact across India, and our commitment to student success.',
};

export default function AboutPage() {
  return (
    <main className="space-y-12">
      <AboutSection />
      <StatsSection />
      <ProgramsSection />
      <TestimonialSection />
    </main>
  );
}
