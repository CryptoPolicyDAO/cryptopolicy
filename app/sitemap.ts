import { MetadataRoute } from "next"
import {
  allDocs,
  allGuides,
  allMembers,
  allPages,
  allPosts,
} from "contentlayer/generated"

import { siteConfig } from "@/config/site"

import { brmLayers } from "./(marketing)/matrix/brm-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, priority: 1 },
    { url: `${base}/matrix`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${base}/docs`, priority: 0.7 },
    { url: `${base}/guides`, priority: 0.6 },
    { url: `${base}/friction`, priority: 0.6 },
    { url: `${base}/support`, priority: 0.5 },
    { url: `${base}/join`, priority: 0.5 },
    { url: `${base}/members`, priority: 0.4 },
  ]

  const posts: MetadataRoute.Sitemap = allPosts
    .filter((post) => post.published)
    .map((post) => ({
      url: `${base}${post.slug}`,
      lastModified: post.date,
      priority: 0.8,
    }))

  const docs: MetadataRoute.Sitemap = allDocs
    .filter((doc) => doc.published)
    .map((doc) => ({ url: `${base}${doc.slug}`, priority: 0.5 }))

  const guides: MetadataRoute.Sitemap = allGuides
    .filter((guide) => guide.published)
    .map((guide) => ({
      url: `${base}${guide.slug}`,
      lastModified: guide.date,
      priority: 0.5,
    }))

  const members: MetadataRoute.Sitemap = allMembers
    .filter((member) => member.published)
    .map((member) => ({ url: `${base}${member.slug}`, priority: 0.3 }))

  // Page docs live under content/pages/ but are routed at the site root.
  const pages: MetadataRoute.Sitemap = allPages.map((page) => ({
    url: `${base}/${page.slugAsParams}`,
    priority: 0.3,
  }))

  const matrixCells: MetadataRoute.Sitemap = brmLayers.flatMap((layer) => [
    { url: `${base}/matrix/${layer.id}`, priority: 0.7 },
    { url: `${base}/matrix/${layer.id}/centralized`, priority: 0.7 },
    { url: `${base}/matrix/${layer.id}/decentralized`, priority: 0.7 },
  ])

  return [
    ...staticPages,
    ...posts,
    ...docs,
    ...guides,
    ...members,
    ...pages,
    ...matrixCells,
  ]
}
