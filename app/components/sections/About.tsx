"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";
import { TextReveal } from "../animations/TextReveal";

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side with parallax */}
          <div className="relative">
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden"
              style={{ y: y1 }}
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl" />
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 z-20"
              style={{ y: y2, rotate }}
            />

            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 border-2 border-amber-500/30 rounded-2xl z-0"
              style={{ y: y2 }}
            />
          </div>

          {/* Content side */}
          <div>
            <FadeInWhenVisible>
              <span className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-4 block">
                About Me
              </span>
            </FadeInWhenVisible>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <TextReveal>Helping Leaders</TextReveal>
              <TextReveal delay={0.1} className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Break Through
              </TextReveal>
            </h2>

            <FadeInWhenVisible delay={0.2}>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                With over 15 years of experience coaching executives and
                entrepreneurs, I&apos;ve helped hundreds of leaders unlock their
                full potential and achieve extraordinary results.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                My approach combines proven methodologies with deep intuitive
                insights, creating transformative experiences that last a
                lifetime.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-amber-500">500+</div>
                  <div className="text-white/60 text-sm">Clients Coached</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-500">15+</div>
                  <div className="text-white/60 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-500">98%</div>
                  <div className="text-white/60 text-sm">Success Rate</div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}
