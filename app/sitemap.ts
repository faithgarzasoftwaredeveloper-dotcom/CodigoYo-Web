import type { MetadataRoute } from "next";
import { metadataBaseUrl } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: metadataBaseUrl,
      lastModified: "2026-10-22",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
