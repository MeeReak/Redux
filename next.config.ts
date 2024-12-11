import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/404",
        destination: "/not-found", // Use dynamic route if needed
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
