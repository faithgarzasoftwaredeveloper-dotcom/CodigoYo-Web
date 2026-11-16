import { publicSiteUrl, siteConfig } from "@/lib/config";

export function JsonLd() {
  const url = publicSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        slogan: siteConfig.slogan,
        description: siteConfig.description,
        ...(url ? { url } : {}),
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
        ...(url ? { url } : {}),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
