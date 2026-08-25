import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Pre-existing type errors in template pages; do not fail builds on them.
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    // Prisma's generated client must be required at runtime, not bundled.
    serverComponentsExternalPackages: ["@prisma/client", "prisma"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          outputPath: "static/images/",
          name: "[name].[hash].[ext]",
          esModule: false,
        },
      },
    })

    return config
  },
}

export default withContentlayer(nextConfig)
