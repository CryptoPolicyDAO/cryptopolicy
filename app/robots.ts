import { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/editor", "/account", "/auth", "/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
