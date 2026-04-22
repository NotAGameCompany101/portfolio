import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  
  // Disables Next.js default image optimization, as it requires a Node server
  images: {
    unoptimized: true,
  },
  
};

export default nextConfig;
