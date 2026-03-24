import { Navigation } from "./components/sections/Navigation";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Stats } from "./components/sections/Stats";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { ParticleBackground } from "./components/animations/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
