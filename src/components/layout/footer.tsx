'use client';

import Link from 'next/link';
import { useTheme } from '@/src/lib/theme-provider';
import type { FC } from 'react';

// Properly typed icon components that accept className and other props
const Facebook: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>f</span>
);
const Twitter: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>🐦</span>
);
const Instagram: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>📷</span>
);
const LinkedIn: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>in</span>
);
const Youtube: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>▶️</span>
);
const MapPin: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>📍</span>
);
const Phone: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>📞</span>
);
const Mail: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>📧</span>
);

// Sun and Moon for theme toggle
const Sun: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>☀️</span>
);
const Moon: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>🌙</span>
);

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-background-dark/95 text-text-secondary border-t border-border/10">
      <div className="container-premium mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="flex items-center space-x-3 mb-6">
              <span className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold">
                VB
              </span>
              <span className="text-2xl font-bold gradient-text-premium">VidyaBharatii</span>
            </h3>
            <p className="mb-6 text-muted max-w-xl">
              Empowering students across India with world-class education and holistic development opportunities that transform lives and build futures.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-primary/90 transition-all-premium"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary/90 transition-all-premium"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary/90 transition-all-premium"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary/90 transition-all-premium"><LinkedIn className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary/90 transition-all-premium"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-primary mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-primary/90 transition-all-premium duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-primary/90 transition-all-premium duration-300">About Us</a></li>
              <li><a href="/programs" className="hover:text-primary/90 transition-all-premium duration-300">Programs</a></li>
              <li><a href="/schools" className="hover:text-primary/90 transition-all-premium duration-300">Schools</a></li>
              <li><a href="/donate" className="hover:text-primary/90 transition-all-premium duration-300">Donate</a></li>
              <li><a href="/blog" className="hover:text-primary/90 transition-all-premium duration-300">Blog</a></li>
              <li><a href="/events" className="hover:text-primary/90 transition-all-premium duration-300">Events</a></li>
              <li><a href="/contact" className="hover:text-primary/90 transition-all-premium duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-semibold text-primary mb-5">Our Programs</h4>
            <ul className="space-y-3">
              <li><a href="/programs/engineering" className="hover:text-primary/90 transition-all-premium duration-300">Engineering</a></li>
              <li><a href="/programs/medical" className="hover:text-primary/90 transition-all-premium duration-300">Medical</a></li>
              <li><a href="/programs/management" className="hover:text-primary/90 transition-all-premium duration-300">Management</a></li>
              <li><a href="/programs/arts" className="hover:text-primary/90 transition-all-premium duration-300">Arts & Humanities</a></li>
              <li><a href="/programs/science" className="hover:text-primary/90 transition-all-premium duration-300">Science</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-primary mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted">123 Education Street, New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted">+91 12345 67890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted">info@vidyabharatii.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-border/5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted/70 text-center sm:text-left">
            &copy; {new Date().getFullYear()} VidyaBharatii. All rights reserved.
          </p>
          <div className="flex items-center space-x-5 mt-4 sm:mt-0">
            {/* Language Toggle */}
            <button 
              onClick={() => alert('Language toggle coming soon!')}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-xl hover:bg-background/10 transition-all-premium"
              aria-label="Toggle language"
            >
              <span className="text-muted/80 hover:text-primary/90 transition-all-premium">EN</span>
              <span className="text-muted/60 hover:text-primary/80 transition-all-premium">▼</span>
            </button>
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-xl hover:bg-background/10 transition-all-premium"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span className="sr-only">Toggle {theme === 'dark' ? 'light' : 'dark'} mode</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}