import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blogs";
import { solutions } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.thesageadvisorygroup.com";
  const staticRoutes = [
    "",
    "/about-us",
    "/solutions",
    "/reviews",
    "/blogs",
    "/permits",
    "/capital",
    "/crm",
    "/legal",
    "/terms-of-service",
    "/privacy-policy"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}/`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7
    })),
    ...solutions.map((solution) => ({
      url: `${base}/solutions/detail/${solution.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blogs/detail/${post.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
