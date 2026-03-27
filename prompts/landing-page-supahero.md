# 🎨 Supahero.io-Style Landing Page Prompt

## Complete Enterprise Prompt

```markdown
Create enterprise landing page like supahero.io:

## 🎯 PROJECT SETUP

@21st-dev-magic Initialize Next.js 15 project:
- App Router structure
- TypeScript strict
- Tailwind CSS v4
- Shadcn/ui installed
- Framer Motion setup
- Folder structure:
  app/
  ├── (marketing)/
  │   ├── page.tsx
  │   └── layout.tsx
  ├── layout.tsx
  └── globals.css
  components/
  ├── ui/ (shadcn)
  ├── sections/
  ├── animations/
  └── shared/
  lib/
  ├── utils.ts
  └── animations.ts
  types/
  └── index.ts

@nextjs-helper Configure:
- next.config.js (output: export)
- Strict TypeScript
- Absolute imports (@/)
- ESLint rules

@typescript-guru Set up:
- Strict tsconfig.json
- Type utilities
- Component prop types
- Zod schemas for validation

## 🎨 DESIGN SYSTEM

@tailwind-css Configure theme:
```javascript
// tailwind.config.ts
{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030712", // slate-950
        foreground: "#f8fafc", // slate-50
        primary: {
          DEFAULT: "#8b5cf6", // violet-500
          foreground: "#ffffff"
        },
        accent: {
          DEFAULT: "#a78bfa", // violet-400
          foreground: "#ffffff"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"]
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        }
      }
    }
  }
}
```

@shadcn-ui Install components:
- button
- card
- dialog
- input
- label
- sheet (mobile menu)
- separator

## 🧩 SECTIONS

### 1. NAVBAR (Glass Morphism)

@21st-dev-magic Create:
```typescript
// components/shared/navbar.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="/"
          className="flex items-center gap-2 text-2xl font-bold"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Brand
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-slate-300">
            Sign In
          </Button>
          <Button className="bg-violet-500 hover:bg-violet-600 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-slate-950 border-white/10">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-violet-500 hover:bg-violet-600 mt-4">
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}
```

### 2. HERO SECTION (Animated Gradient)

@21st-dev-magic + @magic-ui Create:
```typescript
// components/sections/hero.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-sm text-slate-300">New: AI-Powered Features</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
            Build Faster
          </span>
          <br />
          <span className="text-slate-400">Ship Better</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          Create stunning websites with AI-powered components. 
          From idea to production in minutes, not weeks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="bg-violet-500 hover:bg-violet-600 text-white px-8 h-14 text-lg group"
          >
            Start Building Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/20 hover:bg-white/5 px-8 h-14 text-lg"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-20"
        >
          {[
            { value: "10K+", label: "Users" },
            { value: "99%", label: "Uptime" },
            { value: "4.9", label: "Rating" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

### 3. FEATURES SECTION (Bento Grid)

@21st-dev-magic + @aceternity-ui Create bento grid with 3D hover effects

### 4. PRICING SECTION (3D Cards)

@aceternity-ui Create 3D tilt pricing cards

### 5. TESTIMONIALS (Marquee)

@magic-ui Add infinite marquee

### 6. FOOTER

@shadcn-ui Create footer with links

## 🎬 ANIMATIONS

@motion-dev Configure:
```typescript
// lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
}
```

## ✅ VALIDATION

- [ ] npm run type-check passes
- [ ] npm run lint passes  
- [ ] npm run build succeeds
- [ ] Lighthouse score 95+
- [ ] Mobile responsive
- [ ] Animations 60fps

## 🚀 DEPLOYMENT

Ready for Vercel. Run:
```bash
vercel --prod
```

OUTPUT: Complete, production-ready landing page.
```

---

## 🎯 How to Use

1. **Copy the entire prompt above**
2. **Paste into OpenCode**
3. **Wait 5-10 minutes**
4. **Get enterprise website**

---

## 📊 Expected Output

- ✅ Next.js 15 App Router
- ✅ TypeScript Strict
- ✅ Tailwind CSS v4
- ✅ 8 premium MCPs working
- ✅ Zero build errors
- ✅ Supahero.io quality
- ✅ Ready to deploy

**Build time:** 5-10 minutes  
**Debug time:** 0 minutes