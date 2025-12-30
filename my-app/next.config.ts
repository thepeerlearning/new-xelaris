import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
      {
        protocol:'https',
        hostname:'res.cloudinary.com',
        pathname:'/**',
      },
      {
        protocol:'https',
        hostname:'www.cloudinary.com',
        pathname:'/**',
      }


    ],
    
  },
};

export default nextConfig;
