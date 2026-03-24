'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { FC } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/50 dark:border-neutral-800/50">
      <div className="container-luxury mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-neutral-900 dark:bg-yellow-600 rounded-md flex items-center justify-center hover:shadow-luxury transition-shadow">
              <span 
                className="text-white dark:text-neutral-900 font-bold text-xl" 
                style={{ fontFamily: 'var(--font-display)' }}
              >
                V
              </span>
            </div>
            <div className="hidden sm:block">
              <span 
                className="block text-lg font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors" 
                style={{ fontFamily: 'var(--font-display)' }}
              >
                VidyaBharatii
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 tracking-widest">EXCELLENCE IN EDUCATION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link 
              href="/" 
              className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors tracking-wide font-medium"
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors tracking-wide font-medium"
            >
              ABOUT
            </Link>
            <Link 
              href="/#programs" 
              className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors tracking-wide font-medium"
            >
              PROGRAMS
            </Link>
            <Link 
              href="/#contact" 
              className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors tracking-wide font-medium"
            >
              CONTACT
            </Link>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-8 py-2.5 bg-neutral-900 dark:bg-yellow-600 text-white dark:text-neutral-900 rounded-md hover:shadow-luxury transition-all text-sm font-bold tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
            Book Consultation
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-900 dark:text-neutral-50"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200/50 dark:border-neutral-800/50 bg-white dark:bg-neutral-950 py-6 space-y-4">
            <Link href="/" className="block px-6 py-3 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="block px-6 py-3 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/#programs" className="block px-6 py-3 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors text-sm font-medium">
              Programs
            </Link>
            <Link href="/#contact" className="block px-6 py-3 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors text-sm font-medium">
              Contact
            </Link>
            <div className="pt-4 px-6">
              <button className="w-full px-6 py-2.5 bg-neutral-900 dark:bg-yellow-600 text-white dark:text-neutral-900 rounded-md hover:shadow-luxury transition-all text-sm font-bold">
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
