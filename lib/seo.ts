import type { Metadata } from "next";
import { metadataBaseUrl, siteConfig } from "@/lib/config";

const title = "CodigoYo — Learn. Work. Build.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: title,
    template: "%s — CodigoYo",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
