import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",

  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `https://next-one-1.vercel.app/blog`,
      },
      {
        source: "/blog/:path+",
        destination: `https://next-one-1.vercel.app/blog/:path+`,
      },
      {
        source: "/blog-static/_next/:path+",
        destination: `https://next-one-1.vercel.app/blog-static/_next/:path+`,
      },
    ];
  },
};

export default nextConfig;
