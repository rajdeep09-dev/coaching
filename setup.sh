#!/bin/bash

# OpenCode Premium UI/UX Setup Script
# For Termux/Proot Ubuntu environments

set -e

echo "🎨 OpenCode Premium UI/UX Setup"
echo "================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running in Termux or Proot
if [ -d "/data/data/com.termux" ]; then
    IS_TERMUX=true
    echo -e "${GREEN}✓ Detected Termux environment${NC}"
else
    IS_TERMUX=false
fi

# Function to print status
print_status() {
    echo -e "${YELLOW}➜ $1${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check Node.js
print_status "Checking Node.js installation..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    print_success "Node.js found: $NODE_VERSION"
else
    print_error "Node.js not found. Please install Node.js 18+ first."
    if [ "$IS_TERMUX" = true ]; then
        echo "Run: pkg install nodejs-lts"
    else
        echo "Visit: https://nodejs.org/"
    fi
    exit 1
fi

# Check npm
print_status "Checking npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    print_success "npm found: $NPM_VERSION"
else
    print_error "npm not found"
    exit 1
fi

# Install OpenCode CLI
print_status "Installing OpenCode CLI..."
if command -v opencode &> /dev/null; then
    print_success "OpenCode already installed"
else
    npm install -g @opencode/cli
    print_success "OpenCode installed"
fi

# Create config directory
print_status "Setting up configuration directory..."
if [ "$IS_TERMUX" = true ]; then
    CONFIG_DIR="$HOME/.config/opencode"
else
    CONFIG_DIR="$HOME/.config/opencode"
fi

mkdir -p "$CONFIG_DIR"
print_success "Config directory: $CONFIG_DIR"

# Copy config file
print_status "Copying configuration..."
if [ -f "config.json" ]; then
    cp config.json "$CONFIG_DIR/config.json"
    print_success "Configuration copied"
else
    print_error "config.json not found in current directory"
    exit 1
fi

# Install MCP servers
print_status "Installing MCP servers (this may take a while)..."

# Core UI MCPs
echo "  Installing 21st.dev Magic..."
npm install -g @21st-dev/magic@latest 2>/dev/null || echo "    (may require API key)"

echo "  Installing Magic UI..."
npm install -g @magicuidesign/mcp@latest 2>/dev/null || true

echo "  Installing Aceternity UI..."
npm install -g aceternityui-mcp@latest 2>/dev/null || true

echo "  Installing Shadcn UI..."
npm install -g @magnusrodseth/shadcn-mcp-server@latest 2>/dev/null || true

echo "  Installing Tailwind CSS..."
npm install -g @carbonodev/tailwindcss-mcp-server@latest 2>/dev/null || true

echo "  Installing Motion.dev..."
npm install -g motion-dev-mcp@latest 2>/dev/null || true

echo "  Installing Documentation Server..."
npm install -g @picardraphael/mcp-server-documentation@latest 2>/dev/null || true

echo "  Installing Rive..."
npm install -g @astralisone/rive-mcp-server@latest 2>/dev/null || true

print_success "MCP servers installed"

# Create .env file
print_status "Setting up environment file..."
if [ ! -f ".env" ]; then
    if [ -f ".env.example" ]; then
        cp .env.example .env
        print_success ".env file created from example"
        echo ""
        echo -e "${YELLOW}⚠ IMPORTANT: Edit .env and add your API keys!${NC}"
    else
        print_error ".env.example not found"
    fi
else
    print_success ".env file already exists"
fi

# Set up shell environment
print_status "Configuring shell..."
SHELL_RC="$HOME/.bashrc"
if [ -f "$HOME/.zshrc" ]; then
    SHELL_RC="$HOME/.zshrc"
fi

# Add npm global to PATH if needed
if ! grep -q "npm-global" "$SHELL_RC" 2>/dev/null; then
    echo "" >> "$SHELL_RC"
    echo "# OpenCode PATH" >> "$SHELL_RC"
    echo 'export PATH="$PATH:$(npm config get prefix)/bin"' >> "$SHELL_RC"
    print_success "Updated $SHELL_RC"
fi

# Verify installation
print_status "Verifying installation..."
echo ""
echo "Installed MCP servers:"

# List installed packages
npm list -g --depth=0 2>/dev/null | grep -E "(21st-dev|magic|aceternity|shadcn|tailwind|motion|documentation|rive)" || true

echo ""
print_success "Setup complete!"
echo ""
echo "================================"
echo "Next steps:"
echo ""
echo "1. Edit .env and add your API keys:"
echo "   - ANTHROPIC_API_KEY (from https://console.anthropic.com)"
echo "   - TWENTY_FIRST_DEV_API_KEY (from https://21st.dev/magic/console)"
echo ""
echo "2. Reload your shell:"
echo "   source $SHELL_RC"
echo ""
echo "3. Start OpenCode:"
echo "   opencode"
echo ""
echo "4. Try building something amazing:"
echo "   'Create a landing page with glass morphism navbar and 3D cards'"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"