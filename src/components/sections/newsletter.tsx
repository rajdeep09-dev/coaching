'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // In a real app, you would call your newsletter API here
      setMessage('Thank you for subscribing to our premium updates!');
      setEmail('');
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-10 w-40 h-40 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full floating-premium delay-100 z-0"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full floating-premium delay-200 z-0"></div>
      
      <div className="container-premium mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-card-bg/80 backdrop-blur-sm rounded-2xl border border-border/20 p-12">
          <div className="section-header text-center">
            <h2 className="section-title">Join Our Exclusive Community</h2>
            <p className="section-subtitle">
              Get premium educational insights, expert tips, and early access to our latest programs and events
            </p>
          </div>
          
          {message && (
            <div className="mb-6 p-5 rounded-xl text-center font-medium">
              {message.includes('Thank you') ? (
                <div className="bg-gradient-to-r from-accent to-primary/20 text-accent-dark">
                  {message}
                </div>
              ) : (
                <div className="bg-gradient-to-r from-primary to-primary/20 text-primary-dark">
                  {message}
                </div>
              )}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="Enter your premium email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-xl border border-border/40 bg-background/20 text-primary placeholder-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all-premium disabled:opacity-70"
                disabled={isSubmitting}
                required
                autoComplete="email"
              />
              {isSubmitting && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 animate-spin">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" opacity="0.3"/>
                    <path d="M12 2A10 10 0 1 0 12 22A10 10 0 0 0 12 2" strokeLinecap="round" strokeDasharray="15.7" strokeDashoffset="15.7"/>
                  </svg>
                </div>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium hover:from-primary-dark hover:to-accent-dark transition-all-premium transform hover:-translate-y-1 hover:shadow-lg"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe to Premium Updates'}
            </button>
            
            <p className="text-muted/60 text-center text-sm">
              We respect your privacy. Premium content only, no spam. Unsubscribe anytime.
            </p>
          </form>
          
          {/* Benefits */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-xl border border-border/20">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                📚
              </div>
              <div>
                <h4 className="font-semibold text-primary">Expert Insights</h4>
                <p className="text-muted/80 text-sm">Monthly educational trends and study strategies</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-xl border border-border/20">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                ⏰
              </div>
              <div>
                <h4 className="font-semibold text-primary">Early Access</h4>
                <p className="text-muted/80 text-sm">Priority registration for new programs and events</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-xl border border-border/20">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                💡
              </div>
              <div>
                <h4 className="font-semibold text-primary">Success Tips</h4>
                <p className="text-muted/80 text-sm">Proven techniques from top performers and educators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
