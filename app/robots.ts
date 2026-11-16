import type { MetadataRoute } from "next";
import { metadataBaseUrl } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${metadataBaseUrl}/sitemap.xml`,
  };
}
