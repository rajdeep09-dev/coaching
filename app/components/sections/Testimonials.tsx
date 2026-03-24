"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";
import { TextReveal } from "../animations/TextReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with this coach completely transformed my business. We 3x'd our revenue in just 6 months.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "The breakthrough I experienced was unlike anything I've ever had. Truly life-changing.",
    author: "Michael Torres",
    role: "Founder, Growth Labs",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "I've worked with many coaches before, but this level of insight and support is unmatched.",
    author: "Emily Watson",
    role: "Executive Director",
    image: "/images/testimonial-3.jpg",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeInWhenVisible>
            <span className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
          </FadeInWhenVisible>

          <h2 className="text-4xl md:text-5xl font-bold">
            <TextReveal>What Our Clients Say</TextReveal>
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <Quote className="w-16 h-16 text-amber-500/30 mx-auto mb-8" />

              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed mb-12">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xl font-bold text-white">
                  {testimonials[current].author[0]}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white text-lg">
                    {testimonials[current].author}
                  </div>
                  <div className="text-white/60">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              onClick={prev}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={next}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? "w-8 bg-amber-500" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
