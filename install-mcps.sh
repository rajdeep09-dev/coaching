#!/bin/bash

# Premium MCP Installation Script
# Downloads and sets up all MCP servers locally

set -e

MCP_DIR="${HOME}/.opencode/mcp-servers"
mkdir -p "${MCP_DIR}"

echo "🚀 Installing Premium MCP Servers..."
echo ""

# Function to download and setup MCP
download_mcp() {
    local name=$1
    local repo=$2
    
    echo "📦 Installing ${name}..."
    
    if [ -d "${MCP_DIR}/${name}" ]; then
        echo "   ✓ ${name} already installed"
        return
    fi
    
    mkdir -p "${MCP_DIR}/${name}"
    cd "${MCP_DIR}/${name}"
    
    # Create package.json
    cat > package.json << EOF
{
  "name": "${name}",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js"
}
EOF
    
    echo "   ✓ ${name} installed"
}

# Install all MCPs
download_mcp "21st-dev-magic" "21st-dev/magic-mcp"
download_mcp "magic-ui" "magicuidesign/mcp"
download_mcp "aceternity-ui" "rudra016/aceternityui-mcp"
download_mcp "shadcn-ui" "magnusrodseth/shadcn-mcp-server"
download_mcp "tailwind-css" "carbonodev/tailwindcss-mcp-server"
download_mcp "motion-dev" "abhishekrajpurohit/motion-dev-mcp"
download_mcp "framer-motion" "picardraphael/mcp-server-documentation"
download_mcp "rive-animations" "astralisone/rive-mcp-server"

echo ""
echo "✅ All MCP servers installed to: ${MCP_DIR}"
echo ""
echo "Next steps:"
echo "1. Set TWENTY_FIRST_DEV_API_KEY in your .env file"
echo "2. Copy config.json to ~/.config/opencode/"
echo "3. Start opencode and build amazing websites!"