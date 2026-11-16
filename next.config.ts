import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static marketing site. cacheComponents enables partialPrefetching, and
  // vinext treats that flag as ISR that needs a paid cache binding.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
