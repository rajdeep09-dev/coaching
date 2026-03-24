'use client';

import React, { useState, Component } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';

// ---------- Fonts ----------
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
});

// ---------- UI Primitives ----------
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  external?: boolean;
  className?: string;
};

const Button = ({
  children,
  href,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonProps) => {
  const base = `inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300`;
  const variants: Record<string, string> = {
    primary: `bg-gradient-to-r from-primary to-accent text-white hover:from-primary-dark hover:to-accent-dark`,
    secondary: `bg-muted/10 text-primary hover:bg-muted/20`,
    outline: `border border-primary/20 text-primary hover:bg-primary/5`,
  };
  const linkProps = {
    className: `${base} ${variants[variant]} ${className}`,
  };
  if (external && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...linkProps}>
        {children}
        <span className="ml-1">→</span>
      </a>
    );
  }
  return (
    <Link href={href ?? '#'} {...linkProps}>
      {children}
      <span className="ml-1">→</span>
    </Link>
  );
};

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

const GlassPanel = ({ children, className = '' }: GlassPanelProps) => (
  <div className={`relative backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl ${className}`}>
    {children}
  </div>
);

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
};

const Card = ({ title, description, icon, className = '' }: CardProps) => (
  <GlassPanel className={`p-6 hover:-translate-y-1 transition-transform duration-500 ${className}`}>
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-primary">{title}</h3>
        <p className="text-muted/80">{description}</p>
      </div>
    </div>
  </GlassPanel>
);

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="text-center mb-12">
    {subtitle && (
      <p className="text-muted/50 text-sm font-medium mb-2">{subtitle}</p>
    )}
    <h2 className={`text-4xl font-bold tracking-tight text-primary ${cormorant.variable}`}>
      {title}
    </h2>
  </div>
);

// ---------- Simple Error Boundary ----------
class ErrorBoundary extends Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <p className="text-red-500">Something went wrong.</p>;
    }
    return this.props.children;
  }
}

// ---------- Main Page ----------
export default function Home() {
  const [newsletter, setNewsletter] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletter.trim()) {
      setNewsletterStatus('error');
      return;
    }
    // Simulate async request
    setNewsletterStatus('idle');
    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletter('');
    }, 800);
  };

  return (
    <main className={`min-h-screen bg-background text-text-primary ${inter.variable} antialiased`}>
      {/* ==== Hero ==== */}
      <section className="relative pt-20 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div className="space-y-6">
              <h1 className={`text-5xl font-extrabold tracking-tighter text-primary ${cormorant.variable}`}>
                Transform Learning Outcomes
              </h1>
              <p className="text-xl text-muted/80 max-w-lg">
                AI‑powered coaching that adapts to every learner, delivering measurable gains in comprehension and retention.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button href="/start-trial" variant="primary" className="px-8 py-3 text-lg">
                  Start Free Trial
                </Button>
                <Button href="/demo" variant="outline" className="px-8 py-3 text-lg">
                  Watch Demo
                </Button>
              </div>
            </div>
            {/* Image Column */}
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
                alt="Learners interacting with AI coach"
                className="rounded-2xl shadow-2xl relative z-10 object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==== Features Bento Grid ==== */}
      <section className="py-20 bg-muted/5">
        <SectionTitle title="How It Works" subtitle="Three simple steps to accelerated mastery" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card
            title="Diagnose"
            description="Initial assessment maps knowledge gaps & learning style."
            icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <Card
            title="Adapt"
            description="Real‑time AI adjusts difficulty & feedback loop."
            icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>}
          />
          <Card
            title="Excel"
            description="Progress analytics show mastery & next goals."
            icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.062-.398-3.04z" /></svg>}
          />
          <Card
            title="Scale"
            description="Deploy across classrooms, districts, or enterprises."
            icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H7m0 0l-.8 2m4-6.4l.8 2M5 15h1.4M5 19h1.4" /></svg>}
          />
        </div>
      </section>

      {/* ==== Trust Bar ==== */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <img src="https://via.placeholder.com/120x40?text=Trusted+by+MIT" alt="MIT" className="opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://via.placeholder.com/120x40?text=Used+by+NASA" alt="NASA" className="opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://via.placeholder.com/120x40?text=EdTech+Award+2025" alt="Award" className="opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://via.placeholder.com/120x40?text=Forbes+Top+10" alt="Forbes" className="opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </section>

      {/* ==== Newsletter (Error‑bounded) ==== */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionTitle title="Stay Ahead of the Curve" subtitle="Get research‑backed tips, product updates, and exclusive invites." />
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <ErrorBoundary fallback={<p className="text-red-500">Unable to process request.</p>}>
              <form onSubmit={handleNewsletter} className="flex-1 min-w-[200px]">
                <label className="sr-only">Email address</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    className="w-full rounded-xl px-4 py-3 border border-muted/30 bg-white/10 placeholder-muted/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                    aria-errormessage={newsletterStatus === 'error' ? 'newsletter-error' : undefined}
                  />
                  {newsletterStatus === 'error' && (
                    <p id="newsletter-error" className="absolute bottom-full left-0 text-red-500 text-sm mb-1">
                      Please enter a valid email.
                    </p>
                  )}
                </div>
                <Button
                  href="#"
                  variant="secondary"
                  className="ml-2 px-6 py-3 text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNewsletter(e);
                  }}
                >
                  Subscribe
                </Button>
              </form>
            </ErrorBoundary>
            {newsletterStatus === 'success' && (
              <p className="text-green-500 text-sm">Thanks! We’ll be in touch.</p>
            )}
          </div>
        </div>
      </section>

      {/* ==== Final CTA ==== */}
      <section className="relative pt-24 pb-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className={`text-3xl font-bold text-primary ${cormorant.variable}`}>
              Ready to elevate every learner?
            </h3>
            <p className="text-muted/80 mt-4 max-w-2xl mx-auto">
              Join thousands of educators who already see measurable improvement in just weeks.
            </p>
            <Button href="/get-started" variant="primary" className="mt-6 px-8 py-4 text-lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}