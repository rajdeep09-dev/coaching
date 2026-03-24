import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack and use Webpack instead to avoid compatibility issues
  experimental: {
    turbo: false,
  },
  // Standard Next.js config
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;