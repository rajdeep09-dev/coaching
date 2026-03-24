'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-50 border-t border-neutral-800">
      <div className="container-luxury mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-yellow-600 rounded-md flex items-center justify-center group-hover:shadow-luxury transition-shadow">
                <span 
                  className="text-neutral-900 font-bold text-xl" 
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  V
                </span>
              </div>
              <div>
                <span 
                  className="block text-lg font-bold text-neutral-50 group-hover:text-yellow-400 transition-colors" 
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  VidyaBharatii
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Transforming education through excellence, innovation, and unwavering commitment to student success across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-md bg-neutral-800 hover:bg-yellow-600 transition-colors flex items-center justify-center text-sm font-bold" title="Facebook">f</a>
              <a href="#" className="w-10 h-10 rounded-md bg-neutral-800 hover:bg-yellow-600 transition-colors flex items-center justify-center" title="Twitter">𝕏</a>
              <a href="#" className="w-10 h-10 rounded-md bg-neutral-800 hover:bg-yellow-600 transition-colors flex items-center justify-center text-sm" title="Instagram">📸</a>
              <a href="#" className="w-10 h-10 rounded-md bg-neutral-800 hover:bg-yellow-600 transition-colors flex items-center justify-center text-sm" title="LinkedIn">💼</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-neutral-50 mb-6 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-neutral-400 hover:text-yellow-400 transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-neutral-400 hover:text-yellow-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="#programs" className="text-neutral-400 hover:text-yellow-400 transition-colors text-sm">Programs</Link></li>
              <li><Link href="#contact" className="text-neutral-400 hover:text-yellow-400 transition-colors text-sm">Contact</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-yellow-400 transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-bold text-neutral-50 mb-6 uppercase tracking-widest">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-yellow-400 transition-colors text-sm">JEE Engineering</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-yellow-400 transition-colors text-sm">NEET Medical</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-yellow-400 transition-colors text-sm">CAT Management</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-yellow-400 transition-colors text-sm">Foundation Course</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-yellow-400 transition-colors text-sm">Advanced Coaching</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-neutral-50 mb-6 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-neutral-400 mb-1">Address</p>
                <p className="text-neutral-300">123 Excellence Avenue, New Delhi, India</p>
              </li>
              <li>
                <p className="text-neutral-400 mb-1">Phone</p>
                <p className="text-neutral-300">+91 (0) 123-456-7890</p>
              </li>
              <li>
                <p className="text-neutral-400 mb-1">Email</p>
                <p className="text-neutral-300">hello@vidyabharatii.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-neutral-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} VidyaBharatii. All rights reserved. | <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
          </p>
          <p className="text-neutral-500 text-xs text-center sm:text-right">
            Crafted with excellence for the future leaders of India
          </p>
        </div>
      </div>
    </footer>
  );
}
