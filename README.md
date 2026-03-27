# 🏢 Enterprise Next.js Configuration

> **Build Supahero.io / MotionSites.ai Level Websites**  
> **1000x Error-Free Development**  
> **Enterprise-Grade Quality**

## 🎉 What's Different from Basic Config?

| Feature | Basic | Enterprise |
|---------|-------|------------|
| **Build Errors** | Common | **Zero** |
| **Type Safety** | Loose | **Strict** |
| **Architecture** | Ad-hoc | **Atomic Design** |
| **Validation** | Manual | **Automated** |
| **Components** | Random | **Systematic** |
| **Animations** | Basic | **Cinematic** |
| **Deployment** | Broken | **One-Command** |

---

## 🚀 Quick Start (5 Minutes)

### Option 1: Use OpenCode with This Config

```bash
# 1. Clone repo
git clone -b opencode-enterprise https://github.com/rajdeep09-dev/coaching.git
cd coaching

# 2. Copy config
mkdir -p ~/.config/opencode
cp config.json ~/.config/opencode/

# 3. Set only required API key
echo "TWENTY_FIRST_DEV_API_KEY=your_key" > .env

# 4. Start OpenCode
opencode
```

### Option 2: One-Shot Project Creation

In OpenCode, paste:

```markdown
Create enterprise Next.js 15 project:

@21st-dev-magic Initialize with proper structure
@nextjs-helper Configure App Router
@typescript-guru Set strict TypeScript
@shadcn-ui Install components
@tailwind-css Configure theme

OUTPUT:
- Complete Next.js app
- Strict TypeScript
- Tailwind CSS v4
- Shadcn/ui base
- Framer Motion ready
- Zero errors on build
```

---

## 📁 Repository Structure

```
├── config.json              # Enterprise MCP config
├── ENTERPRISE-GUIDE.md      # Complete development guide
├── example-project/         # Boilerplate code
│   ├── next.config.js
│   ├── package.json
│   └── README.md
├── prompts/                 # Ready-to-use prompts
│   ├── landing-page.md
│   ├── saas-dashboard.md
│   └── portfolio.md
└── README.md               # This file
```

---

## 🎨 Supahero.io-Level Features

### Animations Included:
- ✅ Scroll-triggered reveals
- ✅ 3D card tilt effects
- ✅ Glass morphism
- ✅ Parallax scrolling
- ✅ Magnetic buttons
- ✅ Text scramble effects
- ✅ Staggered animations
- ✅ Page transitions

### Components System:
- ✅ Atomic design pattern
- ✅ Type-safe props
- ✅ Error boundaries
- ✅ Loading states
- ✅ Responsive design
- ✅ Accessible (a11y)

---

## 🛡️ Error-Proof Guarantee

### What This Config Prevents:

| Error Type | Prevention |
|------------|-----------|
| **Type errors** | Strict TypeScript + Zod validation |
| **Build failures** | Pre-configured next.config.js |
| **Import errors** | Absolute imports (@/components) |
| **Hydration mismatches** | "use client" guidelines |
| **Animation jank** | 60fps optimized Framer Motion |
| **Dependency conflicts** | Locked version ranges |
| **Deploy failures** | Static export config |

---

## 📝 Example Prompts

### Create Landing Page Like Supahero.io:

```markdown
Build enterprise landing page:

@21st-dev-magic Create:
- Hero with animated gradient text + particles
- 3D feature cards grid (bento style)
- Glass morphism floating navbar
- Animated background orbs

@aceternity-ui Add:
- Parallax scroll sections
- 3D tilt pricing cards
- Magnetic CTA buttons
- Text reveal animations

@magic-ui Include:
- Infinite logo marquee
- Blur fade section transitions
- Animated grid background
- Counter stats animation

@shadcn-ui Components:
- Contact form with Zod validation
- Newsletter signup
- Dialog for video modal
- Dropdown menu

@motion-dev Configure:
- Page load sequence (staggered)
- Scroll-triggered reveals
- Hover micro-interactions
- Smooth scroll behavior

SPECIFICATIONS:
- Next.js 15 App Router
- TypeScript strict mode
- Tailwind CSS v4
- Dark theme (slate-950)
- Violet accent colors
- Inter + Playfair fonts
- Mobile-first responsive
- 60fps animations
- SEO optimized
- Core Web Vitals optimized

PROJECT STRUCTURE:
app/
├── (marketing)/
│   ├── page.tsx (landing)
│   └── layout.tsx
├── layout.tsx
└── globals.css
components/
├── ui/           # shadcn
├── sections/     # Page sections
├── animations/   # Framer Motion
└── shared/       # Navbar, Footer

VALIDATION:
- npm run type-check passes
- npm run lint passes
- npm run build succeeds
- Lighthouse score 95+

DEPLOY:
- Ready for Vercel
- One-click deploy
```

---

## 🔧 Advanced Configuration

### Pre-Installed MCPs:

1. **@21st-dev/magic** - AI component generation
2. **@magicuidesign/mcp** - Magic UI components
3. **aceternityui-mcp** - 3D cinematic effects
4. **@magnusrodseth/shadcn-mcp-server** - Shadcn UI
5. **@carbonodev/tailwindcss-mcp-server** - Tailwind
6. **motion-dev-mcp** - Animation code
7. **@picardraphael/mcp-server-documentation** - Docs
8. **@astralisone/rive-mcp-server** - Interactive animations
9. **@next/mcp** - Next.js specific
10. **@react-bits/mcp** - React patterns
11. **@ts-mcp/server** - TypeScript

### Free AI Models:

- **Nvidia Nemotron 70B** - Best quality (coding)
- **MiniMax 2.5** - Fast & reliable
- **Kimi K2** - Quick tasks
- **Mistral Small 3.1** - Lightning fast

---

## 📊 Quality Metrics

After using this config, expect:

| Metric | Target |
|--------|--------|
| Build time | < 2 minutes |
| Build errors | 0 |
| TypeScript errors | 0 |
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3.5s |

---

## 🚦 Common Issues SOLVED

### ❌ "It takes 30 minutes to build"
**✅ Solution:** Pre-configured boilerplate + atomic components

### ❌ "Build errors everywhere"
**✅ Solution:** Strict TypeScript + automated validation

### ❌ "Animations don't work"
**✅ Solution:** Pre-built animation components with proper "use client"

### ❌ "Not responsive"
**✅ Solution:** Mobile-first Tailwind + breakpoint system

### ❌ "Deployment fails"
**✅ Solution:** next.config.js pre-configured for static export

---

## 🎓 Enterprise Patterns

### 1. Component Contract Pattern:

```typescript
// Every component follows this:
interface ComponentProps {
  // Required props
  id: string
  
  // Optional with defaults
  variant?: "primary" | "secondary"
  
  // Children
  children: React.ReactNode
  
  // Event handlers
  onAction?: () => void
}

// Zod validation
const ComponentSchema = z.object({
  id: z.string().uuid(),
  variant: z.enum(["primary", "secondary"]).default("primary"),
  children: z.custom<React.ReactNode>(),
  onAction: z.function().optional()
})
```

### 2. Animation Pattern:

```typescript
// Reusable animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

### 3. Section Pattern:

```typescript
// Every page section follows this:
interface SectionProps {
  className?: string
  children: React.ReactNode
  id?: string
}

export function Section({ className, children, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-24", className)}>
      <Container>{children}</Container>
    </section>
  )
}
```

---

## 🚀 Deployment

### Vercel (Recommended):

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel --prod
```

### Static Export:

```bash
# Build for any host
npm run build

# Output in ./dist
# Upload to: Netlify, Cloudflare, AWS S3
```

---

## 📚 Resources

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn/ui](https://ui.shadcn.com)
- [Aceternity UI](https://ui.aceternity.com)
- [21st.dev](https://21st.dev)

---

## 💡 Pro Tips

1. **Always validate props** - Use Zod for runtime validation
2. **Keep components small** - Max 200 lines per component
3. **Use composition** - Build from small, reusable pieces
4. **Test animations** - Check reduced-motion preference
5. **Optimize images** - Always use next/image
6. **Lazy load sections** - dynamic() for below-fold content
7. **Add error boundaries** - Every route needs error.tsx
8. **Use loading states** - loading.tsx for route transitions

---

## ✅ Success Checklist

Before considering a project complete:

- [ ] TypeScript strict mode passes
- [ ] ESLint zero errors
- [ ] Build succeeds
- [ ] Lighthouse 95+
- [ ] Mobile responsive
- [ ] Animations smooth (60fps)
- [ ] Accessible (keyboard nav)
- [ ] SEO meta tags
- [ ] Open Graph images
- [ ] Error boundaries
- [ ] Loading states

---

**Ready to build enterprise websites?**  
**Start with:** `opencode` + enterprise prompt

**Questions?** Check ENTERPRISE-GUIDE.md for complete documentation.