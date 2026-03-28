#!/usr/bin/env node

/**
 * 21st.dev Magic MCP Server
 * AI-powered component generation from natural language
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

const API_KEY = process.env.TWENTY_FIRST_DEV_API_KEY || '';

const server = new Server({
  name: '21st-dev-magic',
  version: '1.0.0'
}, {
  capabilities: {
    tools: {}
  }
});

// Tool handlers
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'generate_component',
        description: 'Generate a UI component from natural language description',
        inputSchema: {
          type: 'object',
          properties: {
            description: {
              type: 'string',
              description: 'Natural language description of the component'
            },
            framework: {
              type: 'string',
              enum: ['react', 'vue', 'svelte'],
              default: 'react'
            },
            style: {
              type: 'string',
              enum: ['modern', 'minimal', 'glass', '3d'],
              default: 'modern'
            }
          },
          required: ['description']
        }
      },
      {
        name: 'list_templates',
        description: 'List available component templates',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_animation',
        description: 'Get animation code for a specific effect',
        inputSchema: {
          type: 'object',
          properties: {
            effect: {
              type: 'string',
              enum: ['fade-in', 'slide-up', 'scale', 'rotate', 'parallax', '3d-tilt']
            },
            duration: {
              type: 'number',
              default: 0.6
            }
          },
          required: ['effect']
        }
      }
    ]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'generate_component':
      return {
        content: [{
          type: 'text',
          text: `<!-- Component: ${args.description} -->
<!-- Framework: ${args.framework || 'react'} -->
<!-- Style: ${args.style || 'modern'} -->

Generated component code would be returned here based on:
- Description: ${args.description}
- Style preferences
- Animation requirements
- Responsive design
- Accessibility features

This MCP server provides the interface for 21st.dev Magic integration.`
        }]
      };

    case 'list_templates':
      return {
        content: [{
          type: 'text',
          text: `Available Templates:
- Navbar (glass, floating, sticky)
- Hero (gradient text, animated, 3D)
- Cards (hover effects, tilt, glass)
- Forms (floating labels, validation)
- Grids (bento, masonry, responsive)
- Carousels (infinite, 3D, parallax)
- Modals (blur backdrop, animations)
- Footers (multi-column, newsletter)`
        }]
      };

    case 'get_animation':
      const animations = {
        'fade-in': `initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: ${args.duration || 0.6} }}`,
        'slide-up': `initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: ${args.duration || 0.6} }}`,
        'scale': `whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}`,
        'rotate': `animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}`,
        'parallax': `style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}`,
        '3d-tilt': `whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}`
      };
      return {
        content: [{
          type: 'text',
          text: animations[args.effect] || 'Animation not found'
        }]
      };

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
console.error('21st.dev Magic MCP Server running on stdio');