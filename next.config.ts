import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "pulse-plug-e-commerce-website.vercel.app" }] },
};

export default nextConfig;
