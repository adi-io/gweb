import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost", "res.cloudinary.com"], // Example: Add localhost and Cloudinary
  },
};

export default nextConfig;
