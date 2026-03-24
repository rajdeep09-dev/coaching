'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/src/lib/theme-provider';
import Link from 'next/link';
import type { FC } from 'react';

// Properly typed icon components that accept className and other props
const Menu: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>☰</span>
);
const X: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>✕</span>
);
const Sun: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>☀️</span>
);
const Moon: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>🌙</span>
);
const ChevronDown: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-xs ${className || ''}`}>▾</span>
);
const Search: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>🔍</span>
);
const User: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>👤</span>
);
const ShoppingCart: FC<{ className?: string }> = ({ className }) => (
  <span className={`text-2xl ${className || ''}`}>🛒</span>
);

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/schools', label: 'Schools' },
    { href: '/donate', label: 'Donate' },
    { href: '/blog', label: 'Blog' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  // Mega menu content (simplified for now, can be expanded)
  const megaMenu = [
    {
      title: 'Our Programs',
      links: [
        { href: '/programs/engineering', label: 'Engineering' },
        { href: '/programs/medical', label: 'Medical' },
        { href: '/programs/management', label: 'Management' },
        { href: '/programs/arts', label: 'Arts & Humanities' },
        { href: '/programs/science', label: 'Science' },
      ]
    },
    {
      title: 'Quick Links',
      links: [
        { href: '/admissions', label: 'Admissions' },
        { href: '/scholarships', label: 'Scholarships' },
        { href: '/faculty', label: 'Faculty' },
        { href: '/infrastructure', label: 'Infrastructure' },
        { href: '/placements', label: 'Placements' },
      ]
    },
    {
      title: 'Get Involved',
      links: [
        { href: '/volunteer', label: 'Volunteer' },
        { href: '/careers', label: 'Careers' },
        { href: '/partnerships', label: 'Partnerships' },
        { href: '/alumni', label: 'Alumni' },
        { href: '/ambassador', label: 'Ambassador Program' },
      ]
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-border/10 shadow-premium' 
        : 'bg-transparent'
    }`}>
      <div className="container-premium mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center">
              <span className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold">
                VB
              </span>
              <span className="text-2xl font-bold gradient-text-premium">VidyaBharatii</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Search */}
            <div className="relative">
              <Search className="w-6 h-6 text-text-secondary/70" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="ml-3 px-4 py-2 rounded-lg border border-border/40 bg-background/20 text-text-primary placeholder-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all-premium"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex md:space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="relative text-text-secondary/70 hover:text-primary/90 transition-all-premium px-3 py-1.5 font-medium after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r from-primary to-accent after:transition-all after:hover:w-full"
                >
                  {link.label}
                  {/* Add indicator for dropdown */}
                  {link.href === '/programs' && (
                    <ChevronDown className="ml-1 h-4 w-4 text-text-secondary/50" />
                  )}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-3 rounded-xl hover:bg-background/10 transition-all-premium hover:shadow-md"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>

              {/* Donate Button (Sticky CTA) */}
              <Link 
                href="/donate" 
                className="flex items-center px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:from-primary-dark hover:to-accent-dark transition-all-premium transform hover:-translate-y-1 hover:shadow-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Donate Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-3 rounded-xl hover:bg-background/10 transition-all-premium"
              aria-label="Open mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
            <div className="flex h-full flex-col items-center justify-center space-y-6 text-center">
              <div className="space-x-3">
                <Link href="/" className="flex items-center">
                  <span className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold">
                    VB
                  </span>
                  <span className="text-2xl font-bold gradient-text-premium">VidyaBharatii</span>
                </Link>
              </div>
              
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="block px-5 py-3 text-xl font-medium text-text-primary/90 hover:text-primary transition-all-premium duration-300 rounded-xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex space-x-4">
                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="p-3 rounded-xl hover:bg-background/10 transition-all-premium"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>

                {/* Donate Button */}
                <Link 
                  href="/donate" 
                  className="flex items-center px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:from-primary-dark hover:to-accent-dark transition-all-premium transform hover:-translate-y-1"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}