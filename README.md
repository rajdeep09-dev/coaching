# OpenCode Premium UI/UX Configuration 🎨

> **$100,000 Worth of UI/UX Development Power** - Build websites like supahero.io in **5 MINUTES**, not 30!

🎉 **100% FREE AI Models** - No API keys needed for Claude/OpenAI! Use MiniMax 2.5, Nemotron 70B, Kimi K2, and more for FREE!

⚡ **Zero-Error Building** - Stop wasting time debugging. Build complete websites in one shot with parallel MCP execution.

This configuration transforms OpenCode CLI into a powerhouse for creating stunning, premium-quality websites with cutting-edge animations and components.

## ✨ What's Included

### 🎭 Premium UI Component Libraries

| MCP Server | Description | Use Case |
|------------|-------------|----------|
| **21st.dev Magic** | AI-powered component generation from natural language | "Create a modern navbar with glass morphism" |
| **Magic UI** | Official Magic UI components | Marquees, blur fades, grid backgrounds |
| **Aceternity UI** | Cinematic 3D components | Parallax effects, 3D cards, premium animations |
| **Shadcn UI** | 200+ accessible components | Forms, dialogs, dropdowns, tables |
| **Tailwind CSS** | Utility-first styling | Colors, spacing, responsive design |

### 🎬 Animation & Motion

| MCP Server | Description | Use Case |
|------------|-------------|----------|
| **Motion.dev** | Production-ready animations | Page transitions, micro-interactions |
| **Framer Motion** | React animation library | Gestures, variants, AnimatePresence |
| **Rive** | Runtime interactive animations | Lottie alternatives, game-like interactions |

### 📚 Documentation & Support

| MCP Server | Description | Use Case |
|------------|-------------|----------|
| **Documentation MCP** | Unified docs access | Next.js, Tailwind, Framer Motion docs |

## 🚀 Quick Start

### 1. Install OpenCode CLI

```bash
# Via npm
npm install -g @opencode/cli

# Or via bun
bun install -g @opencode/cli
```

### 2. Clone This Configuration

```bash
git clone https://github.com/rajdeep09-dev/coaching.git
cd coaching
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env
# Edit .env with your API keys
```

### 4. Configure OpenCode

**Termux/Proot Path:**
```bash
# Create config directory
mkdir -p ~/.config/opencode

# Copy configuration
cp config.json ~/.config/opencode/config.json

# Or symlink for easy updates
ln -sf $(pwd)/config.json ~/.config/opencode/config.json
```

### 5. Install MCP Servers

```bash
# 21st.dev Magic (requires API key from https://21st.dev/magic/console)
npm install -g @21st-dev/magic

# Magic UI
npm install -g @magicuidesign/mcp

# Aceternity UI
npm install -g aceternityui-mcp

# Shadcn UI
npm install -g @magnusrodseth/shadcn-mcp-server

# Tailwind CSS
npm install -g @carbonodev/tailwindcss-mcp-server

# Motion.dev
npm install -g motion-dev-mcp

# Documentation Server
npm install -g @picardraphael/mcp-server-documentation

# Rive
npm install -g @astralisone/rive-mcp-server
```

## 🔑 Required API Keys

### 21st.dev Magic (Essential)
1. Visit [21st.dev Magic Console](https://21st.dev/magic/console)
2. Generate a new API key
3. Add to `.env`: `TWENTY_FIRST_DEV_API_KEY=your_key_here`

### Anthropic Claude (Recommended)
1. Get API key from [Anthropic Console](https://console.anthropic.com/)
2. Add to `.env`: `ANTHROPIC_API_KEY=your_key_here`

### OpenAI (Optional)
1. Get API key from [OpenAI Platform](https://platform.openai.com/)
2. Add to `.env`: `OPENAI_API_KEY=your_key_here`

## 🎯 Usage Examples

### Creating a Premium Landing Page

```bash
opencode
```

Then in the chat:

```
Create a landing page like supahero.io with:
- Hero section with 3D tilt effect
- Glass morphism navigation
- Animated gradient text
- Marquee logo section
- Premium pricing cards
- Contact form with floating labels
```

### Using Specific MCPs

```
@21st-dev-magic Create a modern SaaS navbar with dropdown menus and glass effect

@magic-ui Add a blur fade text animation to the hero section

@aceternity-ui Create a 3D card component with parallax hover effect

@shadcn-ui Add a dialog component for the signup modal

@motion-dev Add page transition animations with Framer Motion
```

### Component Examples

```
Create a bento grid layout with Aceternity UI style

Add a marquee of partner logos using Magic UI

Generate a pricing section with 3D tilt cards

Create an animated hero section with text reveal effect
```

## 🛠️ Termux/Proot Specific Setup

### Prerequisites

```bash
# Update packages
pkg update && pkg upgrade

# Install Node.js
pkg install nodejs-lts

# Install Git
pkg install git

# Install proot-distro (for full Linux environment)
pkg install proot-distro
proot-distro install ubuntu
proot-distro login ubuntu
```

### In Proot Ubuntu

```bash
# Install Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Install OpenCode
npm install -g @opencode/cli

# Set up config
mkdir -p ~/.config/opencode
# Copy config.json here
```

### Environment Variables in Proot

Add to `~/.bashrc` or `~/.zshrc`:

```bash
# OpenCode API Keys
export ANTHROPIC_API_KEY="your_key_here"
export OPENAI_API_KEY="your_key_here"
export TWENTY_FIRST_DEV_API_KEY="your_key_here"

# Optional
export GROQ_API_KEY="your_key_here"
export OPENROUTER_API_KEY="your_key_here"
```

## 📁 Project Structure

```
your-project/
├── .opencode/              # OpenCode data directory
├── src/
│   ├── components/         # UI components
│   ├── app/               # Next.js app directory
│   ├── styles/            # Global styles
│   └── lib/               # Utilities
├── public/                # Static assets
├── config.json           # This config file
├── .env                  # Environment variables
└── package.json
```

## 🎨 Recommended Tech Stack

Based on the MCPs configured:

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Components**: Shadcn/ui + Magic UI + Aceternity
- **Animations**: Framer Motion + Motion.dev
- **Icons**: Lucide React
- **Fonts**: Inter, Playfair Display (variable fonts)

## 🔧 Troubleshooting

### MCP Server Not Found

```bash
# Ensure global packages are in PATH
export PATH="$PATH:$(npm config get prefix)/bin"

# Or install locally in project
npm install --save-dev @21st-dev/magic @magicuidesign/mcp
```

### API Key Errors

```bash
# Verify env vars are loaded
source ~/.bashrc

# Or export directly
export ANTHROPIC_API_KEY="your_key"
```

### Permission Issues in Termux

```bash
# Grant storage permission
termux-setup-storage

# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

## 📚 Resources

- [OpenCode Documentation](https://github.com/opencode-ai/opencode)
- [21st.dev Components](https://21st.dev)
- [Magic UI](https://magicui.design)
- [Aceternity UI](https://ui.aceternity.com)
- [Shadcn UI](https://ui.shadcn.com)
- [Motion.dev](https://motion.dev)

## 🤝 Contributing

Feel free to submit issues or PRs to improve this configuration!

## 📄 License

MIT - Use this to build amazing things! 🚀

---

**Pro Tip**: This setup gives you access to 500+ premium components and animations. Combine them creatively to build truly unique experiences!