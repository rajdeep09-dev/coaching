# 💎 Premium OpenCode Configuration

> **1000x More Precious. Zero Prebuilt Components. Pure Unique Code.**

## 🎯 What Makes This Different

| Others | This Setup |
|--------|-----------|
| Prebuilt component libraries | **AI generates unique code** |
| Copy-paste templates | **Fresh components every time** |
| "Reusable" abstractions | **Purpose-built components** |
| Generic animations | **Cinematic, tailored effects** |
| $100 quality | **$100,000 quality** |

---

## 🚀 Quick Start (5 Minutes)

```bash
# 1. Clone repository
git clone -b opencode-premium https://github.com/rajdeep09-dev/coaching.git
cd coaching

# 2. Install MCP servers locally
chmod +x install-mcps.sh
./install-mcps.sh

# 3. Setup configuration
mkdir -p ~/.config/opencode
cp config.json ~/.config/opencode/

# 4. Set ONLY required API key
echo "TWENTY_FIRST_DEV_API_KEY=your_key" > ~/.env

# 5. Start building
opencode
```

---

## 📋 Requirements

**Only ONE API Key Needed:**

| Service | Required | Cost |
|---------|----------|------|
| 21st.dev Magic | ✅ Yes | Free tier available |
| OpenAI | ❌ No | FREE via OpenCode |
| Anthropic | ❌ No | FREE via OpenCode |
| GitHub Copilot | ❌ No | Not needed |

**Free AI Models via OpenCode:**
- MiniMax 2.5
- Nvidia Nemotron 70B
- Kimi K2
- Mistral Small 3.1

---

## 🎨 The Philosophy

### ❌ What We DON'T Do:

1. **No Component Libraries**
   - ❌ No shadcn/ui copy-paste
   - ❌ No Magic UI imports
   - ❌ No prebuilt templates

2. **No Generic Code**
   - ❌ No "reusable for everything"
   - ❌ No abstractions for future use
   - ❌ No placeholder code

3. **No Shortcuts**
   - ❌ No skipping validation
   - ❌ No "fix it later"
   - ❌ No quick hacks

### ✅ What We DO:

1. **Unique Components Every Time**
   - ✅ AI generates code specifically for YOUR project
   - ✅ Context-aware implementation
   - ✅ Perfect integration

2. **Hand-Crafted Quality**
   - ✅ Purpose-built for exact use case
   - ✅ Optimized for performance
   - ✅ Zero bloat

3. **Strict Validation**
   - ✅ TypeScript strict mode
   - ✅ Build after every section
   - ✅ Lighthouse 95+

---

## 📂 Repository Structure

```
├── config.json                      # OpenCode configuration
├── install-mcps.sh                  # MCP installer
├── PREMIUM-SETUP-GUIDE.md          # Complete guide
├── README.md                        # This file
└── mcp-servers/                     # Local MCP servers
    └── 21st-dev-magic/
        ├── index.js                # MCP server code
        └── package.json
```

---

## 🛠️ How It Works

### MCP Server Architecture:

1. **Local MCP Servers** - Run on your machine
2. **No External APIs** - Except 21st.dev (for component intelligence)
3. **Tool-Based** - Specific tools for specific tasks
4. **Validated Output** - Every component is type-safe

### Example Tool Usage:

```markdown
@21st-dev-magic.generate_component:
description: "Glass morphism navbar with blur backdrop"
style: "modern"

Returns:
- Unique navbar code
- TypeScript types
- Animation config
- Responsive styles
- Zero dependencies
```

---

## 🎯 Building a Website (Correct Way)

### Step 1: One-Shot Project Setup

```markdown
Create Next.js 15 project:

SETUP:
- Framework: Next.js 15 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS v4
- Animations: Framer Motion
- Icons: Lucide React

STRUCTURE:
app/
├── (marketing)/
│   ├── page.tsx
│   └── layout.tsx
├── layout.tsx
└── globals.css
components/
├── navbar.tsx
├── hero.tsx
├── features.tsx
├── pricing.tsx
└── footer.tsx
lib/
├── utils.ts
└── animations.ts

VALIDATION:
- npm install works
- npm run build succeeds
- TypeScript strict passes
```

### Step 2: Generate Unique Components

```markdown
Use @21st-dev-magic.generate_component for each section:

1. NAVBAR:
   "Glass morphism navbar, sticky, blur 20px, 
   logo 'Brand' with gradient, nav links with hover glow,
   CTA button 'Get Started' with magnetic effect"

2. HERO:
   "Full viewport hero, headline 'Build Faster' with gradient animation,
   subheadline, two CTAs, floating orbs, scroll indicator"

3. FEATURES:
   "Bento grid, 6 cards, 3D hover effect, icons, descriptions"

4. PRICING:
   "Three cards, 3D tilt on hover, feature lists, toggle monthly/yearly"

5. FOOTER:
   "Multi-column, newsletter, social links, gradient border"

ANIMATIONS:
- @21st-dev-magic.get_animation: "fade-in", 0.6s
- @21st-dev-magic.get_animation: "slide-up", 0.6s
- @magic-ui.add_blur_fade: Text elements
- @aceternity-ui.add_3d_card: Pricing cards

CONSTRAINTS:
✓ All code unique (no libraries)
✓ TypeScript strict
✓ Build after each section
✓ Zero errors
```

---

## 🔒 Zero Error Guarantee

### The Checklist:

- [ ] TypeScript strict mode enabled
- [ ] No `any` types
- [ ] No unused variables
- [ ] Build succeeds after every section
- [ ] No console errors
- [ ] Mobile responsive
- [ ] 60fps animations
- [ ] Lighthouse 95+

### Validation Commands:

```bash
# Type check
npx tsc --noEmit

# Lint
npm run lint

# Build
npm run build

# Lighthouse
npx lighthouse http://localhost:3000
```

---

## 💎 Quality Standards

Every project must be:

1. **Unique** - No copied code
2. **Type-Safe** - TypeScript strict
3. **Performant** - 60fps, optimized
4. **Accessible** - WCAG 2.1 AA
5. **Responsive** - Mobile to 4K
6. **SEO-Optimized** - Meta tags, semantic HTML
7. **Production-Ready** - Zero build errors

---

## 🚀 Deployment

### Vercel (Recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Build for Static Hosting:

```bash
# Configure next.config.js
{
  output: 'export',
  distDir: 'dist'
}

# Build
npm run build

# Deploy dist/ folder anywhere
```

---

## 📚 Resources

- **PREMIUM-SETUP-GUIDE.md** - Complete development guide
- **config.json** - OpenCode configuration
- **install-mcps.sh** - MCP installation script

---

## 💡 Pro Tips

1. **Never accept generic components** - Always ask for specific implementations
2. **Validate after every section** - Don't accumulate errors
3. **Use tools, not libraries** - @21st-dev-magic.generate_component, not import
4. **Build incrementally** - One section at a time
5. **Test on mobile** - Responsive from the start

---

## ❓ FAQ

### Q: Why no component libraries?
**A:** Generic components create generic websites. Unique code creates unique experiences worth $100,000.

### Q: How is this faster?
**A:** Zero time spent debugging copy-paste errors. AI generates working code on first try.

### Q: What if I need a common pattern?
**A:** The AI generates it fresh, tailored to your project. Same result, better quality.

### Q: Is this more expensive?
**A:** Only need 21st.dev API key (free tier). AI models are FREE via OpenCode.

---

## 🎓 Example Output

**What you get:**
```typescript
// components/hero.tsx
// GENERATED SPECIFICALLY FOR THIS PROJECT
// NOT FROM A LIBRARY

"use client"

import { motion } from "framer-motion"

// This hero was created for:
// - YOUR brand colors
// - YOUR headline text
// - YOUR animation preferences
// - YOUR responsive breakpoints

export function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Unique implementation - not a template */}
    </section>
  )
}
```

---

**Ready to build premium websites?**

Start with: `opencode` + unique component prompt

**Result:** $100,000 quality in 25 minutes. 💎