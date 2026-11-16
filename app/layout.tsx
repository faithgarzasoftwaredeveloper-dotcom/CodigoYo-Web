import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AnalyticsBridge } from "@/components/AnalyticsBridge";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { MarketingNavbar } from "@/components/MarketingNavbar";
import { RevealObserver } from "@/components/RevealObserver";
import { siteMetadata } from "@/lib/seo";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${sourceSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full">
        <JsonLd />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <MarketingNavbar />
        {children}
        <Footer />
        <RevealObserver />
        <AnalyticsBridge />
        <Analytics />
      </body>
    </html>
  );
}
