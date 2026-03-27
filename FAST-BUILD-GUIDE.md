# 🚀 Fast Error-Free Building Guide - OpenCode

> Stop wasting 25 minutes on debugging! Build websites in 5 minutes, not 30.

## ✅ YES - APIs Are OPTIONAL for LLMs!

OpenCode provides **FREE access** to these models (no API keys needed):

| Model | Use For | Speed | Quality |
|-------|---------|-------|---------|
| **MiniMax 2.5** | Coding tasks, components | ⚡ Fast | ⭐⭐⭐⭐ |
| **Mistral Small 3.1 24B** | Quick edits, simple tasks | ⚡⚡ Very Fast | ⭐⭐⭐ |
| **Nvidia Llama 3.1 Nemotron 70B** | Complex logic, debugging | ⚡ Fast | ⭐⭐⭐⭐⭐ |
| **Kimi K2** | Title generation, summaries | ⚡⚡ Very Fast | ⭐⭐⭐⭐ |

**Only API Key You Need:** 21st.dev Magic (for premium components)

---

## 🔥 Using ALL MCPs in ONE Prompt

### ✅ CORRECT Way (Parallel Execution):

```
Build a landing page:

@21st-dev-magic Generate navbar with glass morphism + hero section with gradient text
@magic-ui Add marquee logo section with blur fade
@aceternity-ui Create 3D pricing cards with parallax hover
@shadcn-ui Add contact form with validation
@tailwind-css Apply dark theme with purple accents
@motion-dev Add scroll reveal animations

Requirements:
- Mobile responsive
- Dark theme default
- No external dependencies except what's generated
- Single file HTML/CSS/JS if possible
```

### ❌ WRONG Way (Sequential, Slow):

```
Create a navbar... (waits)
Now add a hero... (waits)
Now add animations... (waits)
```

---

## ⚡ The 5-Minute Website Formula

### Step 1: One-Shot Prompt Structure

```
ROLE: Expert Frontend Developer
TASK: Build [TYPE] website
STYLE: [Modern/Minimal/Premium/Agency]
TECH: HTML + Tailwind CDN + minimal JS

COMPONENTS:
1. @21st-dev-magic: [component description]
2. @magic-ui: [animation description]
3. @aceternity-ui: [3D effect description]
4. @shadcn-ui: [form/component]
5. @tailwind-css: [color scheme]

CONSTRAINTS:
- Single HTML file
- Tailwind CDN only
- No build step
- No npm packages
- Mobile-first
- Copy-paste ready
```

### Step 2: Example - SaaS Landing Page (5 min)

```
ROLE: Senior Frontend Dev
TASK: Build SaaS landing page like Linear
TECH: HTML + Tailwind CDN + Lucide Icons CDN

@21st-dev-magic Create:
- Glass morphism navbar with blur backdrop
- Hero with animated gradient text "Build Faster"
- Feature grid with hover cards

@magic-ui Add:
- Marquee of company logos
- Blur fade text animations on scroll

@aceternity-ui Create:
- 3D tilt pricing cards (3 tiers)
- Parallax background effect

@shadcn-ui Add:
- Newsletter signup form
- Footer with links

@tailwind-css Apply:
- Dark theme (slate-950 background)
- Purple/violet accent colors
- Inter font from Google Fonts

CONSTRAINTS:
- ONE HTML file only
- Tailwind via CDN
- Lucide icons via CDN
- GSAP for animations via CDN
- NO npm, NO build step
- Fully responsive
- Load in browser instantly
```

---

## 🛡️ Error Prevention Checklist

### Before Starting:

```bash
# 1. Clear OpenCode cache
rm -rf .opencode/

# 2. Start fresh terminal
# 3. Navigate to empty folder
mkdir new-project && cd new-project

# 4. Set this in your prompt:
"Create a STANDALONE HTML file with CDN links only"
```

### In Your Prompt, ALWAYS Include:

```
⚠️ REQUIREMENTS TO PREVENT ERRORS:

1. FILE STRUCTURE:
   - index.html (single file)
   - No separate CSS/JS files
   - Images from Unsplash CDN

2. DEPENDENCIES (CDN ONLY):
   - Tailwind: https://cdn.tailwindcss.com
   - Lucide: https://unpkg.com/lucide@latest
   - GSAP: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js
   - NO npm packages
   - NO build tools

3. CODE RULES:
   - All styles in <style> tag
   - All scripts in <script> tag
   - Use Tailwind classes only
   - No custom CSS unless necessary
   - Mobile-first responsive

4. TESTING:
   - Must work in file:// protocol
   - No CORS issues
   - No external API calls
   - Works offline after load
```

---

## 🎯 MCP Combinations That Work Fast

### Combo 1: "Instant Landing Page" (3 min)
```
@21st-dev-magic Hero + Navbar
@tailwind-css Dark theme styling
@magic-ui Scroll animations

Result: Professional landing in 3 minutes
```

### Combo 2: "Portfolio Site" (5 min)
```
@21st-dev-magic Hero + About section
@aceternity-ui 3D project cards
@magic-ui Text animations
@shadcn-ui Contact form
@tailwind-css Color scheme

Result: Premium portfolio ready
```

### Combo 3: "SaaS Dashboard" (7 min)
```
@21st-dev-magic Sidebar + Header
@shadcn-ui Tables + Charts + Cards
@tailwind-css Theme
@motion-dev Page transitions

Result: Full dashboard interface
```

---

## ⚠️ Common Errors & Solutions

### Error 1: "Cannot find module"
**Cause:** Trying to use npm packages
**Fix:** Add to prompt: "Use CDN links only, no npm"

### Error 2: "CORS policy"
**Cause:** External resources blocked
**Fix:** Use data URIs or reliable CDNs

### Error 3: "Build failed"
**Cause:** Complex build pipeline
**Fix:** "Single HTML file, no build step"

### Error 4: "Taking 30 minutes"
**Cause:** Incremental additions
**Fix:** One-shot prompt with all requirements

### Error 5: MCPs not responding
**Cause:** Wrong MCP names
**Fix:** Use exact names from config.json

---

## 📋 Copy-Paste Templates

### Template 1: Ultra-Fast Landing

```
Create a landing page for [PRODUCT]:

FILE: index.html
TECH: Tailwind CDN + Lucide CDN + GSAP CDN

SECTIONS:
1. @21st-dev-magic: Navbar (glass) + Hero (gradient text)
2. @magic-ui: Features with icon cards
3. @aceternity-ui: Testimonials carousel
4. @shadcn-ui: CTA button with modal
5. @tailwind-css: Apply [COLOR] theme

RULES:
- Single HTML file
- All CSS inline
- All JS inline
- Mobile responsive
- 5-minute build time
- No errors
```

### Template 2: Agency Website

```
Build creative agency website:

STYLE: Modern dark with neon accents
@21st-dev-magic: Full-screen hero + Navigation
@aceternity-ui: Services grid with 3D hover
@magic-ui: Client logo marquee
@motion-dev: Scroll-triggered reveals
@tailwind-css: Slate-950 + Cyan-400 theme

OUTPUT:
- One HTML file
- CDN dependencies only
- No build process
- Production ready
```

---

## 🔧 Termux/Proot Specific Tips

### Speed Up OpenCode:

```bash
# 1. Use local models (fastest)
export OPENCODE_MODEL=openrouter/minimax/minimax-01

# 2. Disable unnecessary features
export OPENCODE_DEBUG=false
export OPENCODE_LINT=false

# 3. Clear cache regularly
rm -rf ~/.opencode/cache/

# 4. Use simple shell
export SHELL=/bin/sh
```

### In Proot Ubuntu:

```bash
# Create alias for fast building
echo 'alias quickbuild="opencode --model openrouter/minimax/minimax-01"' >> ~/.bashrc

# Set default to free model
export ANTHROPIC_API_KEY=""  # Disable paid
export OPENAI_API_KEY=""     # Disable paid
```

---

## 🎮 Pro Workflow

### Minute 1: Setup
```bash
cd ~/projects
mkdir my-website && cd my-website
opencode
```

### Minute 2-3: Prompt
Paste your one-shot prompt with all MCPs

### Minute 4: Review
Check the generated HTML

### Minute 5: Test
```bash
python3 -m http.server 8080
# Open browser, test mobile view
```

**Total: 5 minutes, zero errors!**

---

## 🚫 What NOT To Do

❌ Don't say "Create a website" (too vague)
❌ Don't add requirements one by one
❌ Don't ask for "React app" (needs build)
❌ Don't use "Next.js" (needs setup)
❌ Don't ask for "npm packages"
❌ Don't request "separate CSS files"
❌ Don't say "make it pretty" (subjective)

✅ DO say "Create HTML file with Tailwind CDN"
✅ DO specify exact components needed
✅ DO ask for "single file"
✅ DO include all requirements upfront
✅ DO specify color scheme
✅ DO ask for "mobile responsive"
✅ DO give reference websites

---

## 💡 Secret Sauce

The key to 5-minute builds:

1. **One HTML file** - No imports, no builds
2. **CDN only** - Tailwind, Lucide, GSAP
3. **Parallel MCPs** - Call all at once
4. **Clear constraints** - Prevent scope creep
5. **Test locally** - file:// protocol works

---

Ready to build? Use this prompt:

```
Create a landing page for my SaaS product:

@21st-dev-magic Glass navbar + gradient hero + feature cards
@magic-ui Logo marquee + blur fade animations  
@aceternity-ui 3D pricing cards
@shadcn-ui Contact form
@tailwind-css Dark theme with violet accents

Requirements:
- Single index.html file
- Tailwind CDN only
- Lucide icons CDN
- GSAP animations CDN
- Mobile responsive
- No npm, no build step
- Works when opened directly in browser
```

**Go build something amazing in 5 minutes! 🚀**