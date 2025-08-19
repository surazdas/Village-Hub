import type { NextConfig } from "next";
import { createRequire } from "node:module";
import path from "node:path";
import url from "node:url";

const nextConfig: NextConfig = {
  experimental: {
    // …
    serverComponentsExternalPackages: ["@react-pdf/renderer"],
  },

  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
