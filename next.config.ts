import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "standalone",

  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `http://localhost:4009/blog`,
      },
      {
        source: "/blog/:path+",
        destination: `http://localhost:4009/blog/:path+`,
      },
      {
        source: "/blog-static/_next/:path+",
        destination: `http://localhost:4009/blog-static/_next/:path+`,
      },
    ];
  },
};

export default nextConfig;
