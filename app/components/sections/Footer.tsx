"use client";

import { motion } from "framer-motion";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";

const footerLinks = {
  Services: ["Executive Coaching", "Team Training", "Workshops", "Speaking"],
  Company: ["About", "Careers", "Press", "Contact"],
  Resources: ["Blog", "Podcast", "Case Studies", "Free Tools"],
};

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <FadeInWhenVisible>
              <motion.a
                href="#"
                className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent inline-block mb-4"
                whileHover={{ scale: 1.05 }}
              >
                ELITE COACH
              </motion.a>
              <p className="text-white/60 max-w-sm mb-6">
                Transforming leaders and organizations through premium coaching
                experiences.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-amber-500 hover:border-amber-500/50 transition-colors text-sm font-medium"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.label[0]}
                  </motion.a>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], catIndex) => (
            <div key={category}>
              <FadeInWhenVisible delay={catIndex * 0.1}>
                <h4 className="text-white font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        className="text-white/60 hover:text-amber-500 transition-colors inline-block"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </FadeInWhenVisible>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <FadeInWhenVisible>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Elite Coach. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <motion.a
                href="#"
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </footer>
  );
}
