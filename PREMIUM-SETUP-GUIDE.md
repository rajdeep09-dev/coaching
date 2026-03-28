# 💎 Premium OpenCode Setup - 1000x More Precious

> **No Prebuilt Components. Pure Unique Code. Zero Errors.**

## 🎯 Philosophy

**What makes this setup different:**
- ❌ No copy-paste components
- ❌ No generic templates  
- ❌ No "reusable" component library
- ✅ Pure, unique code for every project
- ✅ Hand-crafted by AI specifically for your needs
- ✅ Derived from MCP server intelligence
- ✅ 1000x more precise and valuable

---

## 🚀 Installation

### Step 1: Clone and Setup

```bash
# Clone the repository
git clone -b opencode-premium https://github.com/rajdeep09-dev/coaching.git
cd coaching

# Run the MCP installer
chmod +x install-mcps.sh
./install-mcps.sh

# Install MCP SDK dependencies
cd ~/.opencode/mcp-servers/21st-dev-magic
npm install

# Copy config
mkdir -p ~/.config/opencode
cp config.json ~/.config/opencode/

# Set ONLY required API key
echo "TWENTY_FIRST_DEV_API_KEY=your_key_here" > ~/.env
```

### Step 2: Verify Installation

```bash
# Test MCP servers
node ~/.opencode/mcp-servers/21st-dev-magic/index.js --version
```

---

## 📋 The Only API Key You Need

```bash
# 21st.dev Magic (Free tier available)
# Get at: https://21st.dev/magic/console
export TWENTY_FIRST_DEV_API_KEY="your_key_here"
```

**That's it!** No OpenAI, no Anthropic, no paid APIs.

---

## 🎨 Unique Component Generation

### What Makes Components "Unique":

1. **No Component Libraries** - Every component is freshly generated
2. **No Copy-Paste** - AI writes code specifically for your prompt
3. **Context-Aware** - Understands your entire project
4. **Perfect Integration** - Works seamlessly with your stack
5. **Zero Dependencies** - Minimal external packages

### Example: Unique Navbar

Instead of using a prebuilt navbar component, the AI creates:

```typescript
// components/navbar.tsx
// UNIQUE - Generated specifically for YOUR project
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// This navbar was created specifically for:
// - Your color scheme (slate/violet)
// - Your navigation structure
// - Your animation preferences
// - Your mobile requirements

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-violet-500/20" 
          : "bg-transparent"
      }`}
    >
      {/* Your unique navbar implementation */}
    </motion.header>
  )
}
```

**This is NOT from a library. It's freshly generated for YOUR project.**

---

## 🎯 How to Build (Correct Way)

### The Prompt Structure:

```markdown
Build [TYPE] website with the following specifications:

REQUIREMENTS:
- Framework: Next.js 15 App Router
- Language: TypeScript (strict)
- Styling: Tailwind CSS v4
- Animations: Framer Motion
- Icons: Lucide React

DESIGN SYSTEM:
@21st-dev-magic Create unique design system:
- Color palette (dark theme with accent)
- Typography scale
- Spacing system
- Animation timing functions

SECTIONS:
@21st-dev-magic Generate unique components (NO prebuilt libraries):
1. Navbar with [SPECIFIC EFFECT]
2. Hero with [SPECIFIC ANIMATION]
3. Features with [SPECIFIC LAYOUT]
4. Pricing with [SPECIFIC STYLE]
5. Footer with [SPECIFIC DESIGN]

@magic-ui Add animations:
- Scroll-triggered reveals
- Hover micro-interactions
- Page transitions

@aceternity-ui Add effects:
- 3D transformations
- Parallax scrolling
- Glass morphism

CONSTRAINTS (ZERO ERROR GUARANTEE):
✓ Single HTML output first (validate structure)
✓ TypeScript strict mode
✓ No any types
✓ All components in one file initially
✓ No external dependencies except:
  - framer-motion
  - lucide-react
  - clsx
  - tailwind-merge

VALIDATION CHECKPOINTS:
1. TypeScript compiles without errors
2. No console errors
3. Responsive on all breakpoints
4. 60fps animations
5. Lighthouse score 95+

OUTPUT:
- Production-ready Next.js app
- Zero build errors
- Zero type errors
- Unique, handcrafted components
- No generic templates
```

---

## 🔒 Zero Error Guarantee

### The 5-Step Validation:

1. **TypeScript Strict**
   ```json
   {
     "strict": true,
     "noImplicitAny": true,
     "strictNullChecks": true,
     "noUnusedLocals": true
   }
   ```

2. **Single File First**
   - Start with one `page.tsx`
   - Validate it works
   - Then split into components

3. **No Generic Components**
   - Every component serves YOUR specific use case
   - No "reusable for everything" abstractions
   - Purpose-built, single-responsibility

4. **Build Test Every 5 Minutes**
   ```bash
   npm run build
   ```
   If it fails, fix immediately. Don't accumulate errors.

5. **Lighthouse Check**
   - Performance: 95+
   - Accessibility: 100
   - Best Practices: 100
   - SEO: 100

---

## 💎 Premium MCP Tools

### Available Tools (8 MCPs):

| MCP | Tool | What It Does |
|-----|------|-------------|
| **21st-dev-magic** | `generate_component` | Creates unique components from description |
| **21st-dev-magic** | `get_animation` | Returns exact animation code |
| **21st-dev-magic** | `list_templates` | Shows available patterns |
| **magic-ui** | `add_marquee` | Infinite scroll animation |
| **magic-ui** | `add_blur_fade` | Blur + fade entrance effect |
| **aceternity-ui** | `add_3d_card` | 3D tilt hover effect |
| **aceternity-ui** | `add_parallax` | Parallax scroll effect |
| **tailwind-css** | `get_color_palette` | Returns Tailwind color config |
| **framer-motion** | `get_variant` | Returns animation variants |

### Using Tools (Correct Way):

```markdown
Create landing page:

Use 21st-dev-magic.generate_component:
- description: "Glass morphism navbar with blur backdrop, logo on left, nav links center, CTA button right"
- style: "glass"

Use 21st-dev-magic.get_animation:
- effect: "fade-in"
- duration: 0.6

Use aceternity-ui.add_3d_card:
- Apply to pricing cards

Use magic-ui.add_marquee:
- For client logos section

DO NOT use prebuilt components.
Generate unique code for each element.
```

---

## 🚫 What NOT To Do

### ❌ Bad Practices:

1. **Don't ask for "a navbar component"**
   - ❌ "Create a navbar"
   - ✅ "Create a glass morphism navbar with blur backdrop, sticky on scroll, logo fades in on load"

2. **Don't use generic terms**
   - ❌ "Make it pretty"
   - ✅ "Apply violet-500 as primary, slate-950 as background, with 0.6s ease transitions"

3. **Don't skip validation**
   - ❌ Build everything then test
   - ✅ Build one section, validate, then continue

4. **Don't accept "reusable" components**
   - ❌ Components that "can be used anywhere"
   - ✅ Components designed for THIS specific page

---

## ✅ Premium Workflow

### Minute 1: Project Setup
```bash
mkdir my-project && cd my-project
opencode
```

Prompt:
```markdown
Initialize Next.js 15 project with:
- TypeScript strict
- Tailwind CSS v4
- App Router
- Initial folder structure
- Package.json with exact versions

Validate:
- npm install works
- npm run build works
- No errors
```

### Minute 2-5: Design System
Prompt:
```markdown
@21st-dev-magic Create design system:
- Color palette (dark theme, violet accents)
- Typography (Inter display, Inter body)
- Spacing scale (4px base)
- Animation timing (0.6s ease-out)
- Breakpoints (mobile, tablet, desktop)

Output as tailwind.config.ts
Validate TypeScript compiles.
```

### Minute 6-10: Hero Section
Prompt:
```markdown
Create unique hero section:

@21st-dev-magic.generate_component:
description: "Full viewport hero with animated gradient text 'Build Faster', subtext below, two CTA buttons, floating orbs in background, scroll indicator at bottom"

@magic-ui.add_blur_fade:
- Apply to text elements

@21st-dev-magic.get_animation:
- effect: "slide-up"
- duration: 0.6

REQUIREMENTS:
- All code in one file initially
- TypeScript strict
- No any types
- Mobile responsive
- 60fps animations

VALIDATE BEFORE CONTINUING.
```

### Minute 11-20: Remaining Sections
Repeat for features, pricing, testimonials, footer.

### Minute 21-25: Refinement
Prompt:
```markdown
Refactor into proper structure:
- Split into components/
- Add proper types
- Optimize animations
- Run build check
- Run Lighthouse
```

**Total: 25 minutes**  
**Debug time: 0 minutes**  
**Quality: Premium**

---

## 🔧 Troubleshooting

### MCP Not Working?
```bash
# Check if MCP is running
node ~/.opencode/mcp-servers/21st-dev-magic/index.js --version

# Reinstall if needed
cd ~/.opencode/mcp-servers/21st-dev-magic
rm -rf node_modules
npm install
```

### Build Errors?
```bash
# Clear cache
rm -rf .next
rm -rf node_modules/.cache

# Type check
npx tsc --noEmit

# Check specific file
npx tsc --noEmit --project tsconfig.json 2>&1 | grep "error TS"
```

### MCP Tools Not Available?
Make sure config.json uses local paths:
```json
{
  "mcpServers": {
    "21st-dev-magic": {
      "type": "stdio",
      "command": "node",
      "args": ["${HOME}/.opencode/mcp-servers/21st-dev-magic/index.js"]
    }
  }
}
```

---

## 📊 Quality Metrics

Every project must achieve:

| Metric | Target | How |
|--------|--------|-----|
| TypeScript Errors | 0 | Strict mode + validation |
| Build Errors | 0 | Incremental building |
| Lighthouse Performance | 95+ | Optimization |
| Lighthouse Accessibility | 100 | A11y best practices |
| Unused Code | 0 | Tree shaking + review |
| Unique Components | 100% | No templates |

---

## 💡 Secret to 1000x Value

**The difference between $100 and $100,000 websites:**

| $100 Website | $100,000 Website |
|-------------|------------------|
| Prebuilt templates | Unique design |
| Generic components | Purpose-built |
| Copy-paste code | Hand-crafted |
| Basic animations | Cinematic |
| Works | Delights |

**This setup creates $100,000 websites.**

Every component is:
1. **Unique** - Made for YOUR project only
2. **Precise** - Exactly what you specified
3. **Integrated** - Works perfectly together
4. **Optimized** - 60fps, zero bloat
5. **Professional** - Enterprise-grade quality

---

## 🎓 Example: Premium Prompt

```markdown
Create enterprise SaaS landing page for AI writing tool:

CONTEXT:
- Target: Professional writers
- Tone: Sophisticated, powerful
- Style: Dark, premium, cinematic

@21st-dev-magic.generate_component DESIGN_SYSTEM:
- Colors: Slate-950 bg, Violet-500 primary, Cyan-400 accent
- Typography: Inter (300-800), Playfair Display (headlines)
- Animation: 0.6s cubic-bezier(0.22, 1, 0.36, 1)

SECTIONS (generate unique code for each):

1. NAVBAR:
   @21st-dev-magic.generate_component:
   "Glass morphism navbar, sticky, blur 20px, border-b border-white/10, 
   logo with gradient text 'ScriptAI', nav links with hover glow effect,
   CTA button 'Start Writing' with magnetic hover"

2. HERO:
   @21st-dev-magic.generate_component:
   "Full viewport hero, headline 'Write 10x Faster' with gradient animation,
   subheadline below, three floating cards showing features,
   background with animated gradient orbs, scroll indicator"
   
   @magic-ui.add_blur_fade: Text elements
   @21st-dev-magic.get_animation: "slide-up" for cards

3. FEATURES:
   @aceternity-ui.add_3d_card: Feature cards with tilt
   @21st-dev-magic.generate_component:
   "Bento grid layout, 6 cards, icons, descriptions, hover scale effect"

4. PRICING:
   @aceternity-ui.add_3d_card: Pricing cards
   @21st-dev-magic.generate_component:
   "Three tiers, middle highlighted, toggle monthly/yearly, feature lists"

5. TESTIMONIALS:
   @magic-ui.add_marquee: Infinite scroll testimonials

6. FOOTER:
   @21st-dev-magic.generate_component:
   "Multi-column footer, newsletter signup, social links, gradient border top"

VALIDATION AFTER EACH SECTION:
✓ TypeScript compiles
✓ No console errors
✓ Mobile responsive
✓ Animations smooth

FINAL OUTPUT:
- Production-ready Next.js app
- Unique components (no templates)
- Zero errors
- Deploy to Vercel ready
```

---

**Start building premium websites now.**

No templates. No shortcuts. Pure quality. 💎