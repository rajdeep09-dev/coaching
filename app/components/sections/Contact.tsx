"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";
import { TextReveal } from "../animations/TextReveal";
import { MagneticButton } from "../animations/MagneticButton";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info side */}
          <div>
            <FadeInWhenVisible>
              <span className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-4 block">
                Get In Touch
              </span>
            </FadeInWhenVisible>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <TextReveal>Ready To</TextReveal>
              <TextReveal delay={0.1} className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Transform?
              </TextReveal>
            </h2>

            <FadeInWhenVisible delay={0.2}>
              <p className="text-lg text-white/70 mb-12 leading-relaxed">
                Take the first step towards extraordinary results. Book a free
                discovery call to discuss your goals and how we can help you
                achieve them.
              </p>
            </FadeInWhenVisible>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@elitecoach.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Location", value: "New York, NY" },
              ].map((item, index) => (
                <FadeInWhenVisible key={item.label} delay={0.3 + index * 0.1}>
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          {/* Form side */}
          <FadeInWhenVisible delay={0.2}>
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/60">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">
                        Name
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Your name"
                        required
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm mb-2">
                        Email
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="your@email.com"
                        required
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm mb-2">
                        Message
                      </label>
                      <motion.textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                        placeholder="Tell us about your goals..."
                        required
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>
                  </div>

                  <MagneticButton
                    className="w-full mt-8 py-4 bg-amber-500 text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:text-black"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </MagneticButton>
                </>
              )}
            </motion.form>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
